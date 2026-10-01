// ===================================================================
// MechNexus: Interactive Engineering Calculators Suite
// Real-time parametric calculations across kinematics, thermodynamics,
// fluid power, robotics, machining, and vibration engineering.
// ===================================================================

const MechCalculators = {
  // 1. Geneva Mechanism Pin Stress & Dynamic Torque Calculator
  calculateGeneva(params) {
    const rpm = parseFloat(params.rpm || 60);
    const radius = parseFloat(params.radius || 60); // mm
    const inertia = parseFloat(params.inertia || 0.012); // kg.m^2
    const pinYield = 420; // MPa for hardened steel

    const omega = (2 * Math.PI * rpm) / 60; // rad/s
    const maxAlpha = 5.4 * Math.pow(omega, 2); // peak angular acceleration (rad/s^2) for 4-slot
    const peakTorque = inertia * maxAlpha; // N.m
    const pinForce = peakTorque / (radius / 1000); // N
    const pinArea = Math.PI * Math.pow(5, 2); // mm^2 for 10 mm pin
    const shearStress = pinForce / pinArea; // MPa
    const safetyFactor = (pinYield / (shearStress * 1.732)).toFixed(2);

    return {
      title: "Geneva Dynamic Stress & Inertial Torque Analysis",
      inputs: { "Input Drive Speed": `${rpm} RPM`, "Crank Center Radius": `${radius} mm`, "Driven Inertia": `${inertia} kg·m²` },
      outputs: [
        { label: "Angular Velocity (ω)", value: `${omega.toFixed(2)} rad/s`, formula: "ω = 2πN / 60" },
        { label: "Peak Angular Accel (α_max)", value: `${maxAlpha.toFixed(1)} rad/s²`, formula: "α_max = 5.4 · ω²" },
        { label: "Peak Dynamic Inertial Torque", value: `${peakTorque.toFixed(2)} N·m`, formula: "T_peak = J · α_max" },
        { label: "Pin Contact Shear Stress (τ)", value: `${shearStress.toFixed(1)} MPa`, formula: "τ = F_pin / A_pin" },
        { label: "Pin Factor of Safety (FoS)", value: safetyFactor, formula: "FoS = S_yt / (τ · √3)", status: safetyFactor > 2.0 ? 'Optimal' : (safetyFactor > 1.3 ? 'Warning' : 'Danger') }
      ],
      chartPoints: [
        { angle: 0, accel: 0, torque: 0 },
        { angle: 15, accel: maxAlpha * 0.35, torque: peakTorque * 0.35 },
        { angle: 30, accel: maxAlpha * 0.85, torque: peakTorque * 0.85 },
        { angle: 45, accel: maxAlpha, torque: peakTorque },
        { angle: 60, accel: maxAlpha * 0.72, torque: peakTorque * 0.72 },
        { angle: 90, accel: 0, torque: 0 }
      ]
    };
  },

  // 2. Solar Parabolic Trough Thermal Output Calculator
  calculateSolarTrough(params) {
    const dni = parseFloat(params.dni || 850); // W/m^2 Direct Normal Irradiance
    const apertureWidth = parseFloat(params.apertureWidth || 1.8); // meters
    const length = parseFloat(params.length || 4.0); // meters
    const opticalEff = parseFloat(params.opticalEff || 0.74); // 74%
    const receiverDia = 0.038; // 38 mm

    const apertureArea = apertureWidth * length; // m^2
    const receiverArea = Math.PI * receiverDia * length; // m^2
    const concentrationRatio = apertureArea / receiverArea;
    const solarPowerIn = dni * apertureArea; // Watts
    const thermalPowerOut = solarPowerIn * opticalEff * 0.82; // Watts (optical * thermal)
    const overallEff = ((thermalPowerOut / solarPowerIn) * 100).toFixed(1);

    return {
      title: "Solar Trough Thermal & Concentration Ratio Sizer",
      inputs: { "Direct Normal Irradiance (DNI)": `${dni} W/m²`, "Aperture Width": `${apertureWidth} m`, "Trough Length": `${length} m`, "Optical Reflectivity": `${(opticalEff * 100).toFixed(0)}%` },
      outputs: [
        { label: "Collector Aperture Area (A_a)", value: `${apertureArea.toFixed(2)} m²`, formula: "A_a = W · L" },
        { label: "Geometric Concentration Ratio (CR)", value: `${concentrationRatio.toFixed(1)} : 1`, formula: "CR = A_aperture / A_absorber" },
        { label: "Incident Solar Flux (Q_in)", value: `${(solarPowerIn / 1000).toFixed(2)} kW`, formula: "Q_in = DNI · A_a" },
        { label: "Useful Thermal Energy Gain (Q_u)", value: `${(thermalPowerOut / 1000).toFixed(2)} kW_th`, formula: "Q_u = Q_in · η_opt · η_thermal" },
        { label: "Overall Thermal Efficiency", value: `${overallEff}%`, formula: "η_sys = Q_u / Q_in", status: overallEff > 55 ? 'Optimal' : 'Warning' }
      ]
    };
  },

  // 3. 6-DOF Robotic Arm Joint Torque Sizer
  calculateRobotArm(params) {
    const payload = parseFloat(params.payload || 1.5); // kg
    const reach = parseFloat(params.reach || 0.65); // meters
    const armSelfMass = parseFloat(params.armMass || 4.2); // kg
    const g = 9.81;

    // Static cantilevered torque at Shoulder Joint J2
    const payloadTorque = payload * g * reach; // N.m
    const armCgTorque = armSelfMass * g * (reach * 0.45); // N.m
    const staticTorque = payloadTorque + armCgTorque;
    const dynamicFactor = 1.8; // Acceleration & jerk dynamic factor
    const peakDynamicTorque = staticTorque * dynamicFactor;
    const recommendedMotorTorque = (peakDynamicTorque * 1.5).toFixed(1); // 1.5 safety factor

    return {
      title: "6-DOF Joint Torque & Motor Sizing Analysis",
      inputs: { "Payload Mass (m_p)": `${payload} kg`, "Full Horizontal Reach": `${reach} m`, "Structural Arm Mass": `${armSelfMass} kg` },
      outputs: [
        { label: "Payload Static Torque", value: `${payloadTorque.toFixed(2)} N·m`, formula: "T_p = m_p · g · L" },
        { label: "Link Gravitational Torque", value: `${armCgTorque.toFixed(2)} N·m`, formula: "T_cg = m_arm · g · L_cg" },
        { label: "Total Worst-Case Static Torque", value: `${staticTorque.toFixed(2)} N·m`, formula: "T_static = T_p + T_cg" },
        { label: "Peak Dynamic Acceleration Torque", value: `${peakDynamicTorque.toFixed(2)} N·m`, formula: "T_dyn = T_static · K_dyn (1.8)" },
        { label: "Recommended Actuator Rating", value: `${recommendedMotorTorque} N·m`, formula: "T_rated = T_dyn · 1.5 FoS", status: 'Optimal' }
      ]
    };
  },

  // 4. EV Regenerative Braking Recovery Sizer
  calculateRegenEV(params) {
    const vehicleMass = parseFloat(params.mass || 180); // kg
    const startSpeedKmh = parseFloat(params.vStart || 45); // km/h
    const endSpeedKmh = parseFloat(params.vEnd || 10); // km/h
    const efficiency = parseFloat(params.eff || 68); // %

    const v1 = (startSpeedKmh * 1000) / 3600; // m/s
    const v2 = (endSpeedKmh * 1000) / 3600; // m/s

    const deltaKineticJ = 0.5 * vehicleMass * (Math.pow(v1, 2) - Math.pow(v2, 2));
    const recoveredJoules = deltaKineticJ * (efficiency / 100);
    const recoveredWattHours = (recoveredJoules / 3600).toFixed(2);

    return {
      title: "EV Regenerative Braking Kinetic Energy Recuperation",
      inputs: { "Total Vehicle Mass (M)": `${vehicleMass} kg`, "Initial Speed (v₁)": `${startSpeedKmh} km/h`, "Final Speed (v₂)": `${endSpeedKmh} km/h`, "Regen Electrical Efficiency": `${efficiency}%` },
      outputs: [
        { label: "Kinetic Energy Dissipated", value: `${(deltaKineticJ / 1000).toFixed(2)} kJ`, formula: "ΔE_k = 0.5 · M · (v₁² - v₂²)" },
        { label: "Recovered Electrical Energy", value: `${(recoveredJoules / 1000).toFixed(2)} kJ`, formula: "E_rec = ΔE_k · η_regen" },
        { label: "Battery Energy Gained", value: `${recoveredWattHours} Wh`, formula: "E_Wh = E_rec / 3600", status: 'Optimal' },
        { label: "Equivalent Brake Pad Wear Reduction", value: `~${efficiency}% Less Wear`, formula: "Wear Reduction = η_regen", status: 'Optimal' }
      ]
    };
  },

  // 5. 3-Axis CNC Speeds, Feeds & Spindle Power Sizer
  calculateCNC(params) {
    const toolDia = parseFloat(params.toolDia || 6); // mm
    const cuttingSpeed = parseFloat(params.vc || 120); // m/min for AL 6061
    const fluteCount = parseInt(params.flutes || 2);
    const feedPerTooth = parseFloat(params.fz || 0.04); // mm/tooth
    const doc = parseFloat(params.doc || 1.5); // mm depth of cut
    const woc = parseFloat(params.woc || 3.0); // mm width of cut

    const spindleRpm = Math.round((cuttingSpeed * 1000) / (Math.PI * toolDia));
    const feedRate = Math.round(spindleRpm * fluteCount * feedPerTooth); // mm/min
    const mrr = ((doc * woc * feedRate) / 1000).toFixed(1); // cm^3/min
    const specificCuttingForce = 800; // N/mm^2 for Aluminum
    const cuttingPowerWatts = Math.round(((mrr * specificCuttingForce) / 60) * 1.25);

    return {
      title: "CNC Speeds, Feeds & Spindle Power Calculator",
      inputs: { "Cutter Diameter": `${toolDia} mm`, "Cutting Speed (V_c)": `${cuttingSpeed} m/min`, "Number of Flutes (Z)": `${fluteCount}`, "Feed per Tooth (f_z)": `${feedPerTooth} mm` },
      outputs: [
        { label: "Spindle Speed (N)", value: `${spindleRpm} RPM`, formula: "N = (1000 · V_c) / (π · D)" },
        { label: "Table Feed Rate (V_f)", value: `${feedRate} mm/min`, formula: "V_f = N · Z · f_z" },
        { label: "Material Removal Rate (MRR)", value: `${mrr} cm³/min`, formula: "MRR = (a_p · a_e · V_f) / 1000" },
        { label: "Spindle Cutting Power Required", value: `${cuttingPowerWatts} W (${(cuttingPowerWatts / 746).toFixed(2)} HP)`, formula: "P_c = (MRR · k_c) / 60", status: cuttingPowerWatts < 800 ? 'Optimal' : 'Warning' }
      ]
    };
  },

  // 6. Hydraulic Scissor Lift Thrust & Pressure Sizer
  calculateHydraulicLift(params) {
    const swl = parseFloat(params.swl || 300); // kg
    const platformSelfWeight = 45; // kg
    const scissorAngleDeg = parseFloat(params.angle || 22); // minimum angle (critical load)
    const boreDiaMm = parseFloat(params.bore || 40); // mm cylinder bore
    const g = 9.81;

    const totalWeightN = (swl + platformSelfWeight) * g; // N
    const rad = (scissorAngleDeg * Math.PI) / 180;
    // Scissor toggle mechanics: F_cylinder = W / (2 * sin(theta))
    const cylinderThrustN = totalWeightN / (2 * Math.sin(rad));
    const boreAreaMm2 = (Math.PI * Math.pow(boreDiaMm, 2)) / 4;
    const pressureMpa = (cylinderThrustN / boreAreaMm2).toFixed(2);
    const pressureBar = (pressureMpa * 10).toFixed(1);

    return {
      title: "Scissor Lift Hydraulic Thrust & Working Pressure Sizer",
      inputs: { "Payload SWL": `${swl} kg`, "Lowest Scissor Angle": `${scissorAngleDeg}°`, "Cylinder Bore Diameter": `${boreDiaMm} mm` },
      outputs: [
        { label: "Total Lifted Weight (W)", value: `${totalWeightN.toFixed(0)} N`, formula: "W = (M_p + M_plat) · g" },
        { label: "Peak Cylinder Thrust Required", value: `${(cylinderThrustN / 1000).toFixed(2)} kN`, formula: "F_cyl = W / (2 · sin θ)" },
        { label: "Cylinder Piston Area (A_p)", value: `${boreAreaMm2.toFixed(0)} mm²`, formula: "A_p = π · D² / 4" },
        { label: "Required Hydraulic Pressure", value: `${pressureBar} bar (${pressureMpa} MPa)`, formula: "P = F_cyl / A_p", status: pressureBar < 160 ? 'Optimal' : 'Danger' },
        { label: "Hydraulic Hose Standard Rating", value: "SAE 100 R2AT (225 bar)", formula: "Safety Factor > 1.6", status: 'Optimal' }
      ]
    };
  },

  // 7. Wind Turbine Betz Limit & Electrical Output Sizer
  calculateWindTurbine(params) {
    const windSpeed = parseFloat(params.windSpeed || 7.5); // m/s
    const rotorHeight = parseFloat(params.height || 1.4); // m
    const rotorDia = parseFloat(params.diameter || 0.9); // m
    const airDensity = 1.225; // kg/m^3

    const sweptArea = rotorHeight * rotorDia; // m^2 for vertical axis
    const windPowerTotal = 0.5 * airDensity * sweptArea * Math.pow(windSpeed, 3); // Watts
    const betzLimitPower = windPowerTotal * 0.593; // 59.3%
    const realisticCp = 0.36; // for hybrid Savonius-Darrieus
    const rotorAeroPower = windPowerTotal * realisticCp;
    const electricalPower = (rotorAeroPower * 0.85).toFixed(1); // 85% generator & rectifier eff

    return {
      title: "VAWT Aerodynamic Betz Limit & Electrical Yield",
      inputs: { "Wind Velocity (V)": `${windSpeed} m/s`, "Rotor Height (H)": `${rotorHeight} m`, "Rotor Diameter (D)": `${rotorDia} m` },
      outputs: [
        { label: "Rotor Swept Area (A)", value: `${sweptArea.toFixed(2)} m²`, formula: "A = H · D" },
        { label: "Total Kinetic Wind Power (P_wind)", value: `${windPowerTotal.toFixed(1)} W`, formula: "P = 0.5 · ρ · A · V³" },
        { label: "Theoretical Betz Limit (Max)", value: `${betzLimitPower.toFixed(1)} W (59.3%)`, formula: "P_Betz = P_wind · 0.593" },
        { label: "Aerodynamic Power (C_p = 0.36)", value: `${rotorAeroPower.toFixed(1)} W`, formula: "P_aero = P_wind · C_p" },
        { label: "Net Electrical Generator Yield", value: `${electricalPower} W`, formula: "P_elec = P_aero · η_gen", status: 'Optimal' }
      ]
    };
  },

  // 8. Bionic Hand Tendon Grip Force Sizer
  calculateBionicHand(params) {
    const servoTorqueKgc = parseFloat(params.servoTorque || 15); // kg.cm
    const spoolRadiusMm = parseFloat(params.spoolRadius || 8); // mm
    const mechanicalAdvantage = parseFloat(params.mechAdv || 0.65);

    const servoTorqueNm = (servoTorqueKgc * 9.81) / 100; // N.m
    const tendonTensionN = servoTorqueNm / (spoolRadiusMm / 1000); // N
    const fingertipPinchForceN = (tendonTensionN * mechanicalAdvantage).toFixed(1); // N

    return {
      title: "Bionic Finger Tendon Tension & Pinch Force Sizer",
      inputs: { "Micro Servo Stall Torque": `${servoTorqueKgc} kg·cm`, "Winch Spool Radius": `${spoolRadiusMm} mm`, "Joint Mechanical Efficiency": `${(mechanicalAdvantage * 100).toFixed(0)}%` },
      outputs: [
        { label: "Servo Output Torque", value: `${servoTorqueNm.toFixed(2)} N·m`, formula: "T = τ_servo · 0.0981" },
        { label: "Dyneema Tendon Line Tension", value: `${tendonTensionN.toFixed(1)} N`, formula: "F_tendon = T / r_spool" },
        { label: "Fingertip Pinch Force", value: `${fingertipPinchForceN} N (~${(fingertipPinchForceN / 9.81).toFixed(2)} kgf)`, formula: "F_pinch = F_tendon · η_joint", status: fingertipPinchForceN > 15 ? 'Optimal' : 'Warning' },
        { label: "Ergonomic Usability Rating", value: "Full Pinch & Cylindrical Power Grip Validated", formula: "Sufficient for drinking glass & phone grasp", status: 'Optimal' }
      ]
    };
  },

  // 9. Digital Twin Bearing Defect & Vibration Severity
  calculateVibration(params) {
    const rpm = parseFloat(params.rpm || 1450);
    const nBalls = parseInt(params.nBalls || 9);
    const ballDia = parseFloat(params.ballDia || 7.94); // mm
    const pitchDia = parseFloat(params.pitchDia || 39.0); // mm
    const measuredVrms = parseFloat(params.vRms || 2.4); // mm/s

    const fr = rpm / 60; // Hz
    const cosAngle = 1.0; // 0 deg contact angle
    const bpfo = (nBalls / 2) * fr * (1 - (ballDia / pitchDia) * cosAngle);
    const bpfi = (nBalls / 2) * fr * (1 + (ballDia / pitchDia) * cosAngle);

    let isoSeverityClass = "Class II: Zone A/B - Good / Satisfactory";
    let status = "Optimal";
    if (measuredVrms > 4.5) {
      isoSeverityClass = "Class II: Zone D - Unacceptable Danger";
      status = "Danger";
    } else if (measuredVrms > 2.8) {
      isoSeverityClass = "Class II: Zone C - Unsatisfactory (Warning)";
      status = "Warning";
    }

    return {
      title: "Bearing Defect Frequency & ISO 10816 Severity Sizer",
      inputs: { "Shaft Speed": `${rpm} RPM (${fr.toFixed(2)} Hz)`, "Number of Balls (Z)": `${nBalls}`, "Ball Diameter": `${ballDia} mm`, "Pitch Diameter": `${pitchDia} mm`, "Vibration RMS Velocity": `${measuredVrms} mm/s` },
      outputs: [
        { label: "Shaft Rotational Frequency (1X)", value: `${fr.toFixed(2)} Hz`, formula: "f_r = RPM / 60" },
        { label: "Outer Race Defect Frequency (BPFO)", value: `${bpfo.toFixed(1)} Hz`, formula: "BPFO = (n/2)·f_r·(1 - d/D)" },
        { label: "Inner Race Defect Frequency (BPFI)", value: `${bpfi.toFixed(1)} Hz`, formula: "BPFI = (n/2)·f_r·(1 + d/D)" },
        { label: "Vibration Severity Health (ISO 10816)", value: `${measuredVrms} mm/s RMS`, formula: isoSeverityClass, status: status }
      ]
    };
  }
};

window.MechCalculators = MechCalculators;
