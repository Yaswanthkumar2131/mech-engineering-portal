// ===================================================================
// MechNexus: Interactive 3D WebGL Mechanical Simulation Engine
// Built using Three.js with dynamic procedural kinematic rigs
// ===================================================================

class Mech3DViewer {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.options = Object.assign({
      visualType: 'geneva',
      speed: 1.0,
      exploded: 0,
      wireframe: false,
      autoRotate: false
    }, options);

    this.animationId = null;
    this.clock = new THREE.Clock();
    this.currentAngle = 0;
    this.isPlaying = true;
    this.meshParts = [];

    this.initScene();
    this.initLights();
    this.initCameraAndControls();
    this.buildMechanism(this.options.visualType);
    this.animate();

    window.addEventListener('resize', () => this.onWindowResize());
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x06090f);
    // Subtle fog
    this.scene.fog = new THREE.FogExp2(0x06090f, 0.04);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.container.innerHTML = '';
    this.container.appendChild(this.renderer.domElement);

    // Blueprint grid floor
    const grid = new THREE.GridHelper(20, 40, 0x00f0ff, 0x1e293b);
    grid.position.y = -2;
    grid.material.opacity = 0.25;
    grid.material.transparent = true;
    this.scene.add(grid);
  }

  initLights() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    this.scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x00f0ff, 1.8);
    dirLight1.position.set(10, 20, 15);
    dirLight1.castShadow = true;
    this.scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xf59e0b, 1.2);
    dirLight2.position.set(-15, 10, -10);
    this.scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0x3b82f6, 2, 20);
    pointLight.position.set(0, 5, 5);
    this.scene.add(pointLight);
  }

  initCameraAndControls() {
    const aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 100);
    this.camera.position.set(0, 5, 10);

    // Orbit Controls
    if (typeof THREE.OrbitControls !== 'undefined') {
      this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = true;
      this.controls.dampingFactor = 0.05;
      this.controls.maxPolarAngle = Math.PI / 2 + 0.1;
      this.controls.minDistance = 3;
      this.controls.maxDistance = 25;
    }
  }

  setVisualType(type) {
    this.options.visualType = type;
    this.buildMechanism(type);
  }

  clearScene() {
    if (this.mechanismGroup) {
      this.scene.remove(this.mechanismGroup);
    }
    this.meshParts = [];
    this.mechanismGroup = new THREE.Group();
    this.scene.add(this.mechanismGroup);
  }

  buildMechanism(type) {
    this.clearScene();

    // Standard high-tech materials
    const matAluminum = new THREE.MeshStandardMaterial({
      color: 0xd1d5db,
      metalness: 0.85,
      roughness: 0.25,
      wireframe: this.options.wireframe
    });

    const matCyanGlow = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      metalness: 0.4,
      roughness: 0.2,
      emissive: 0x007788,
      emissiveIntensity: 0.5,
      wireframe: this.options.wireframe
    });

    const matAmber = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.7,
      roughness: 0.3,
      wireframe: this.options.wireframe
    });

    const matDarkAlloy = new THREE.MeshStandardMaterial({
      color: 0x1f2937,
      metalness: 0.9,
      roughness: 0.4,
      wireframe: this.options.wireframe
    });

    switch (type) {
      case 'geneva':
        this.buildGenevaRig(matAluminum, matCyanGlow, matAmber, matDarkAlloy);
        break;
      case 'robot-arm':
        this.buildRobotArmRig(matAluminum, matCyanGlow, matAmber, matDarkAlloy);
        break;
      case 'solar-trough':
        this.buildSolarTroughRig(matAluminum, matCyanGlow, matAmber);
        break;
      case 'cnc-axis':
        this.buildCncRig(matAluminum, matCyanGlow, matDarkAlloy);
        break;
      case 'wind-turbine':
        this.buildWindTurbineRig(matAluminum, matCyanGlow, matAmber);
        break;
      case 'hydraulic-lift':
        this.buildHydraulicLiftRig(matAluminum, matCyanGlow, matAmber);
        break;
      case 'prosthetic-hand':
        this.buildProstheticHandRig(matAluminum, matCyanGlow, matAmber);
        break;
      case 'ev-steering':
      case 'regenerative-braking-ev':
        this.buildEvPowertrainRig(matAluminum, matCyanGlow, matAmber);
        break;
      case 'digital-twin':
      default:
        this.buildDigitalTwinRig(matAluminum, matCyanGlow, matAmber, matDarkAlloy);
        break;
    }
  }

  // 1. Geneva Mechanism Rig
  buildGenevaRig(matAlu, matCyan, matAmber, matDark) {
    // Base Frame
    const base = new THREE.Mesh(new THREE.BoxGeometry(7, 0.4, 4), matDark);
    base.position.y = -1;
    this.mechanismGroup.add(base);

    // Driver Crank Group (Left)
    this.crankGroup = new THREE.Group();
    this.crankGroup.position.set(-1.8, 0, 0);

    const crankDisc = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 0.3, 32), matDark);
    crankDisc.rotation.x = Math.PI / 2;
    this.crankGroup.add(crankDisc);

    // Locking Crescent on Driver
    const crescent = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 0.8, 0.35, 32, 1, false, 0, Math.PI * 1.5), matCyan);
    crescent.rotation.x = Math.PI / 2;
    crescent.position.z = 0.05;
    this.crankGroup.add(crescent);

    // Drive Pin
    const pin = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.8, 16), matAmber);
    pin.rotation.x = Math.PI / 2;
    pin.position.set(0.95, 0, 0.2);
    this.crankGroup.add(pin);

    this.mechanismGroup.add(this.crankGroup);

    // Driven Geneva Slotted Wheel (Right)
    this.genevaGroup = new THREE.Group();
    this.genevaGroup.position.set(1.8, 0, 0);

    // Star wheel hub
    const starWheel = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.6, 0.3, 32), matAlu);
    starWheel.rotation.x = Math.PI / 2;
    this.genevaGroup.add(starWheel);

    // 4 Slots Visual representation
    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI) / 2;
      const slot = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.28, 0.35), matCyan);
      slot.position.set(Math.cos(angle) * 0.9, Math.sin(angle) * 0.9, 0.02);
      slot.rotation.z = angle;
      this.genevaGroup.add(slot);
    }

    this.mechanismGroup.add(this.genevaGroup);
  }

  // 2. 6-DOF Robotic Arm Rig
  buildRobotArmRig(matAlu, matCyan, matAmber, matDark) {
    this.robotArm = new THREE.Group();
    this.robotArm.position.y = -1;

    // Pedestal Base
    const base = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.8, 0.6, 32), matDark);
    this.robotArm.add(base);

    // Joint 1: Waist (Rotates around Y)
    this.armJ1 = new THREE.Group();
    this.armJ1.position.y = 0.3;
    const waist = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.3, 0.8, 32), matAlu);
    this.armJ1.add(waist);
    this.robotArm.add(this.armJ1);

    // Joint 2: Shoulder (Pitches)
    this.armJ2 = new THREE.Group();
    this.armJ2.position.set(0, 0.8, 0);
    const shoulderHousing = new THREE.Mesh(new THREE.SphereGeometry(0.7, 24, 24), matCyan);
    this.armJ2.add(shoulderHousing);

    // Link 1 (Upper Arm)
    const upperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.45, 2.4, 24), matAlu);
    upperArm.position.y = 1.2;
    this.armJ2.add(upperArm);
    this.armJ1.add(this.armJ2);

    // Joint 3: Elbow
    this.armJ3 = new THREE.Group();
    this.armJ3.position.set(0, 2.4, 0);
    const elbowHousing = new THREE.Mesh(new THREE.SphereGeometry(0.55, 24, 24), matAmber);
    this.armJ3.add(elbowHousing);

    // Link 2 (Forearm)
    const forearm = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.35, 2.0, 24), matAlu);
    forearm.position.y = 1.0;
    this.armJ3.add(forearm);
    this.armJ2.add(this.armJ3);

    // Wrist & Gripper
    this.armWrist = new THREE.Group();
    this.armWrist.position.set(0, 2.0, 0);

    const wristRot = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 0.4, 16), matDark);
    this.armWrist.add(wristRot);

    // Gripper fingers
    const finger1 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.6, 0.15), matCyan);
    finger1.position.set(-0.25, 0.4, 0);
    const finger2 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.6, 0.15), matCyan);
    finger2.position.set(0.25, 0.4, 0);
    this.armWrist.add(finger1);
    this.armWrist.add(finger2);

    this.armJ3.add(this.armWrist);
    this.mechanismGroup.add(this.robotArm);
  }

  // 3. Solar Parabolic Trough Rig
  buildSolarTroughRig(matAlu, matCyan, matAmber) {
    this.troughGroup = new THREE.Group();

    // Curved mirror shape using curved ribbon
    const curvePoints = [];
    for (let x = -2.5; x <= 2.5; x += 0.2) {
      const y = (x * x) / (4 * 1.5); // y = x^2 / 4f
      curvePoints.push(new THREE.Vector2(x, -y));
    }
    const shape = new THREE.Shape();
    shape.moveTo(curvePoints[0].x, curvePoints[0].y);
    curvePoints.forEach(p => shape.lineTo(p.x, p.y));
    shape.lineTo(curvePoints[curvePoints.length - 1].x, curvePoints[curvePoints.length - 1].y + 0.1);
    shape.lineTo(curvePoints[0].x, curvePoints[0].y + 0.1);

    const extrudeSettings = { steps: 2, depth: 6, bevelEnabled: false };
    const mirrorGeom = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    const mirrorMesh = new THREE.Mesh(mirrorGeom, matAlu);
    mirrorMesh.position.set(0, 1.5, -3);
    this.troughGroup.add(mirrorMesh);

    // Central Heat Receiver Tube (At Focal Line)
    const receiverTube = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 6.2, 32), matAmber);
    receiverTube.rotation.x = Math.PI / 2;
    receiverTube.position.set(0, 1.5, 0);
    this.troughGroup.add(receiverTube);

    // Glass vacuum envelope
    const glassEnvelope = new THREE.Mesh(
      new THREE.CylinderGeometry(0.25, 0.25, 6.2, 24),
      new THREE.MeshStandardMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.35, roughness: 0.1 })
    );
    glassEnvelope.rotation.x = Math.PI / 2;
    glassEnvelope.position.set(0, 1.5, 0);
    this.troughGroup.add(glassEnvelope);

    // Pedestal Support Stands
    const stand1 = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.3, 3, 16), matAlu);
    stand1.position.set(0, -0.5, 2.8);
    const stand2 = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.3, 3, 16), matAlu);
    stand2.position.set(0, -0.5, -2.8);
    this.mechanismGroup.add(stand1);
    this.mechanismGroup.add(stand2);

    this.mechanismGroup.add(this.troughGroup);
  }

  // 4. 3-Axis Desktop CNC Rig
  buildCncRig(matAlu, matCyan, matDark) {
    this.cncGroup = new THREE.Group();
    this.cncGroup.position.y = -1;

    // Bed
    const bed = new THREE.Mesh(new THREE.BoxGeometry(6, 0.4, 5), matDark);
    this.cncGroup.add(bed);

    // Gantry Uprights & Bridge (X-Axis)
    this.gantryGroup = new THREE.Group();
    const uprightL = new THREE.Mesh(new THREE.BoxGeometry(0.4, 3, 0.8), matAlu);
    uprightL.position.set(-2.8, 1.5, 0);
    const uprightR = new THREE.Mesh(new THREE.BoxGeometry(0.4, 3, 0.8), matAlu);
    uprightR.position.set(2.8, 1.5, 0);
    const bridge = new THREE.Mesh(new THREE.BoxGeometry(6, 0.6, 0.8), matAlu);
    bridge.position.set(0, 2.8, 0);

    this.gantryGroup.add(uprightL);
    this.gantryGroup.add(uprightR);
    this.gantryGroup.add(bridge);

    // Y-Axis Carriage
    this.cncCarriage = new THREE.Group();
    this.cncCarriage.position.set(0, 2.8, 0.5);

    const carriagePlate = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.2, 0.3), matDark);
    this.cncCarriage.add(carriagePlate);

    // Z-Axis Spindle
    this.cncSpindle = new THREE.Group();
    this.cncSpindle.position.set(0, -0.6, 0.2);

    const spindleBody = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 1.4, 24), matCyan);
    const endMill = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.5, 16), matAlu);
    endMill.position.y = -0.85;

    this.cncSpindle.add(spindleBody);
    this.cncSpindle.add(endMill);
    this.cncCarriage.add(this.cncSpindle);

    this.gantryGroup.add(this.cncCarriage);
    this.cncGroup.add(this.gantryGroup);
    this.mechanismGroup.add(this.cncGroup);
  }

  // 5. Hybrid Wind Turbine Rig
  buildWindTurbineRig(matAlu, matCyan, matAmber) {
    this.wtRotor = new THREE.Group();

    // Central Mast & Generator Base
    const tower = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.35, 5, 24), matAlu);
    tower.position.y = 0;
    this.mechanismGroup.add(tower);

    // Darrieus 3 Helical Curved Blades
    for (let i = 0; i < 3; i++) {
      const angle = (i * Math.PI * 2) / 3;
      const strut = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.8, 12), matAlu);
      strut.rotation.z = Math.PI / 2;
      strut.position.set(Math.cos(angle) * 0.9, 2.0, Math.sin(angle) * 0.9);
      strut.rotation.y = -angle;

      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.12, 3.2, 0.35), matCyan);
      blade.position.set(Math.cos(angle) * 1.8, 0, Math.sin(angle) * 1.8);
      this.wtRotor.add(blade);
      this.wtRotor.add(strut);
    }

    // Inner Savonius Drag Scoops
    const scoop1 = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 1.6, 16, 1, true, 0, Math.PI), matAmber);
    scoop1.position.set(0.25, 0, 0);
    const scoop2 = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 1.6, 16, 1, true, Math.PI, Math.PI), matAmber);
    scoop2.position.set(-0.25, 0, 0);
    this.wtRotor.add(scoop1);
    this.wtRotor.add(scoop2);

    this.wtRotor.position.y = 1.0;
    this.mechanismGroup.add(this.wtRotor);
  }

  // 6. Electro-Hydraulic Scissor Lift Rig
  buildHydraulicLiftRig(matAlu, matCyan, matAmber) {
    this.scissorRig = new THREE.Group();
    this.scissorRig.position.y = -1.5;

    // Bottom Base Frame
    const basePlate = new THREE.Mesh(new THREE.BoxGeometry(5, 0.3, 3), matAlu);
    this.scissorRig.add(basePlate);

    // Top Platform
    this.liftPlatform = new THREE.Mesh(new THREE.BoxGeometry(5, 0.3, 3), matAmber);
    this.liftPlatform.position.y = 2.5;
    this.scissorRig.add(this.liftPlatform);

    // Scissor Arms (Cross X)
    this.scissorArm1 = new THREE.Mesh(new THREE.BoxGeometry(0.2, 3.6, 0.2), matCyan);
    this.scissorArm1.position.set(0, 1.25, 1.2);
    this.scissorArm1.rotation.z = Math.PI / 4;

    this.scissorArm2 = new THREE.Mesh(new THREE.BoxGeometry(0.2, 3.6, 0.2), matCyan);
    this.scissorArm2.position.set(0, 1.25, 1.2);
    this.scissorArm2.rotation.z = -Math.PI / 4;

    this.scissorRig.add(this.scissorArm1);
    this.scissorRig.add(this.scissorArm2);

    // Hydraulic Cylinder
    this.hydCylinder = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 1.8, 16), matAlu);
    this.hydCylinder.rotation.z = Math.PI / 3;
    this.hydCylinder.position.set(-0.6, 0.8, 0);
    this.scissorRig.add(this.hydCylinder);

    this.mechanismGroup.add(this.scissorRig);
  }

  // 7. Bionic Prosthetic Hand Rig
  buildProstheticHandRig(matAlu, matCyan, matAmber) {
    this.bionicHand = new THREE.Group();
    this.bionicHand.position.y = -1;

    // Palm Chassis
    const palm = new THREE.Mesh(new THREE.BoxGeometry(1.6, 2.2, 0.5), matAlu);
    this.bionicHand.add(palm);

    // Wrist Connection
    const wrist = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.7, 1.0, 24), matCyan);
    wrist.position.y = -1.5;
    this.bionicHand.add(wrist);

    // 4 Articulated Fingers
    this.fingers = [];
    const fingerX = [-0.55, -0.2, 0.2, 0.55];
    const fingerHeights = [1.2, 1.4, 1.35, 1.05];

    fingerX.forEach((x, idx) => {
      const fingerGroup = new THREE.Group();
      fingerGroup.position.set(x, 1.1, 0);

      const phalanx1 = new THREE.Mesh(new THREE.BoxGeometry(0.22, fingerHeights[idx] * 0.6, 0.25), matCyan);
      phalanx1.position.y = fingerHeights[idx] * 0.3;
      fingerGroup.add(phalanx1);

      const phalanx2 = new THREE.Mesh(new THREE.BoxGeometry(0.2, fingerHeights[idx] * 0.4, 0.22), matAmber);
      phalanx2.position.y = fingerHeights[idx] * 0.75;
      fingerGroup.add(phalanx2);

      this.bionicHand.add(fingerGroup);
      this.fingers.push(fingerGroup);
    });

    // Thumb
    const thumbGroup = new THREE.Group();
    thumbGroup.position.set(-0.9, 0.2, 0.2);
    thumbGroup.rotation.z = Math.PI / 4;
    const thumbPhalanx = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.8, 0.25), matAmber);
    thumbPhalanx.position.y = 0.4;
    thumbGroup.add(thumbPhalanx);
    this.bionicHand.add(thumbGroup);
    this.fingers.push(thumbGroup);

    this.mechanismGroup.add(this.bionicHand);
  }

  // 8. EV Regenerative Braking Rig
  buildEvPowertrainRig(matAlu, matCyan, matAmber) {
    this.evRig = new THREE.Group();

    // Drive Motor Housing
    const motor = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.2, 2.0, 32), matCyan);
    motor.rotation.z = Math.PI / 2;
    motor.position.set(-1.8, 0, 0);
    this.evRig.add(motor);

    // Output Shaft
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 4.5, 24), matAlu);
    shaft.rotation.z = Math.PI / 2;
    this.evRig.add(shaft);

    // Ventilated Brake Disc Rotor
    this.brakeRotor = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.6, 0.15, 32), matAlu);
    this.brakeRotor.rotation.z = Math.PI / 2;
    this.brakeRotor.position.set(1.4, 0, 0);
    this.evRig.add(this.brakeRotor);

    // Caliper
    const caliper = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.9, 0.8), matAmber);
    caliper.position.set(1.4, 1.4, 0);
    this.evRig.add(caliper);

    this.mechanismGroup.add(this.evRig);
  }

  // 9. Digital Twin Bearing Rig
  buildDigitalTwinRig(matAlu, matCyan, matAmber, matDark) {
    this.twinRig = new THREE.Group();

    // Bed plate
    const base = new THREE.Mesh(new THREE.BoxGeometry(7, 0.4, 3), matDark);
    base.position.y = -1;
    this.twinRig.add(base);

    // Shaft
    this.twinShaft = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, 6, 24), matAlu);
    this.twinShaft.rotation.z = Math.PI / 2;
    this.twinRig.add(this.twinShaft);

    // Plummer block bearing housings (Left and Right)
    const plummerL = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.2, 1.0), matCyan);
    plummerL.position.set(-1.8, -0.2, 0);
    const plummerR = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.2, 1.0), matCyan);
    plummerR.position.set(1.8, -0.2, 0);
    this.twinRig.add(plummerL);
    this.twinRig.add(plummerR);

    // Vibration Accelerometer Sensor Node (Amber cube with glowing ring)
    const sensor = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.3, 0.3), matAmber);
    sensor.position.set(-1.8, 0.6, 0);
    this.twinRig.add(sensor);

    this.mechanismGroup.add(this.twinRig);
  }

  animate() {
    this.animationId = requestAnimationFrame(() => this.animate());

    const delta = this.clock.getDelta();

    if (this.controls) {
      this.controls.update();
    }

    if (this.isPlaying) {
      const step = delta * this.options.speed * 1.5;
      this.currentAngle += step;

      // Type-specific animations
      switch (this.options.visualType) {
        case 'geneva':
          if (this.crankGroup) {
            this.crankGroup.rotation.z -= step;
            // Intermittent Geneva rotation algorithm
            const modAngle = ((-this.crankGroup.rotation.z) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
            if (modAngle >= (Math.PI * 3) / 4 && modAngle <= (Math.PI * 5) / 4) {
              if (this.genevaGroup) this.genevaGroup.rotation.z += step * 2;
            }
          }
          break;

        case 'robot-arm':
          if (this.armJ1) this.armJ1.rotation.y = Math.sin(this.currentAngle * 0.8) * 0.7;
          if (this.armJ2) this.armJ2.rotation.z = Math.sin(this.currentAngle) * 0.4;
          if (this.armJ3) this.armJ3.rotation.z = -Math.cos(this.currentAngle) * 0.5;
          if (this.armWrist) this.armWrist.rotation.x += step * 2;
          break;

        case 'solar-trough':
          if (this.troughGroup) {
            this.troughGroup.rotation.z = Math.sin(this.currentAngle * 0.4) * 0.45;
          }
          break;

        case 'cnc-axis':
          if (this.gantryGroup) this.gantryGroup.position.z = Math.sin(this.currentAngle * 0.7) * 1.8;
          if (this.cncCarriage) this.cncCarriage.position.x = Math.cos(this.currentAngle) * 1.6;
          if (this.cncSpindle) this.cncSpindle.position.y = -0.6 + Math.sin(this.currentAngle * 2) * 0.3;
          break;

        case 'wind-turbine':
          if (this.wtRotor) this.wtRotor.rotation.y += step * 2.5;
          break;

        case 'hydraulic-lift':
          if (this.liftPlatform) {
            const h = 2.0 + Math.sin(this.currentAngle * 0.8) * 0.9;
            this.liftPlatform.position.y = h;
            if (this.scissorArm1) this.scissorArm1.scale.y = 0.8 + (h / 3.0) * 0.4;
            if (this.scissorArm2) this.scissorArm2.scale.y = 0.8 + (h / 3.0) * 0.4;
          }
          break;

        case 'prosthetic-hand':
          if (this.fingers) {
            const curl = (Math.sin(this.currentAngle * 1.5) + 1) * 0.45;
            this.fingers.forEach(f => f.rotation.x = curl);
          }
          break;

        case 'ev-steering':
        case 'regenerative-braking-ev':
          if (this.brakeRotor) this.brakeRotor.rotation.x += step * 4;
          break;

        case 'digital-twin':
          if (this.twinShaft) this.twinShaft.rotation.x += step * 5;
          break;
      }
    }

    this.renderer.render(this.scene, this.camera);
  }

  setSpeed(speedVal) {
    this.options.speed = parseFloat(speedVal);
  }

  setWireframe(enabled) {
    this.options.wireframe = enabled;
    this.buildMechanism(this.options.visualType);
  }

  setExploded(val) {
    const factor = parseFloat(val);
    if (this.mechanismGroup) {
      this.mechanismGroup.children.forEach((child, idx) => {
        if (child.isMesh || child.isGroup) {
          child.position.x = child.position.x * (1 + factor * 0.1);
          child.position.y = child.position.y * (1 + factor * 0.1);
        }
      });
    }
  }

  resetCamera() {
    this.camera.position.set(0, 5, 10);
    if (this.controls) this.controls.reset();
  }

  togglePlay() {
    this.isPlaying = !this.isPlaying;
    return this.isPlaying;
  }

  onWindowResize() {
    if (!this.container || !this.renderer || !this.camera) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  destroy() {
    if (this.animationId) cancelAnimationFrame(this.animationId);
    if (this.renderer && this.renderer.domElement) {
      this.container.removeChild(this.renderer.domElement);
    }
  }
}

window.Mech3DViewer = Mech3DViewer;
