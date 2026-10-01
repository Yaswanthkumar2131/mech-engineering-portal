// Comprehensive Mechanical Engineering Projects Database with Complete Project Planning Suites
window.MECH_CATEGORIES = [
  {
    "name": "Design & Kinematics",
    "slug": "design-kinematics",
    "iconName": "Cog",
    "description": "Mechanisms, linkages, transmission gearing, cams, and kinematics of machinery.",
    "count": 3
  },
  {
    "name": "Thermal & Energy",
    "slug": "thermal-energy",
    "iconName": "Flame",
    "description": "Heat exchangers, solar thermal collectors, refrigeration cycles, and waste heat recovery.",
    "count": 3
  },
  {
    "name": "Automotive & EV",
    "slug": "automotive-ev",
    "iconName": "Car",
    "description": "Electric vehicle powertrains, steering linkages, regenerative braking, and active aerodynamics.",
    "count": 3
  },
  {
    "name": "Robotics & Mechatronics",
    "slug": "robotics-mechatronics",
    "iconName": "Bot",
    "description": "Multi-axis articulated arms, autonomous guided vehicles (AGVs), and smart electro-mechanical systems.",
    "count": 3
  },
  {
    "name": "Manufacturing & CNC",
    "slug": "manufacturing-cnc",
    "iconName": "Hammer",
    "description": "Automated machining, CNC milling routers, sheet metal blanking presses, and plastic extrusion.",
    "count": 3
  },
  {
    "name": "Fluids & Hydraulics",
    "slug": "fluids-hydraulics",
    "iconName": "Droplets",
    "description": "High-pressure electro-hydraulic lifts, pneumatic automation, micro-hydro Pelton turbines, and fluid power.",
    "count": 3
  },
  {
    "name": "Renewable Energy",
    "slug": "renewable-energy",
    "iconName": "Wind",
    "description": "Vertical axis wind turbines (VAWT), piezoelectric kinetic harvesters, and solar water desalination.",
    "count": 3
  },
  {
    "name": "Biomechanical",
    "slug": "biomechanical",
    "iconName": "Activity",
    "description": "EMG-controlled bionic prosthetic hands, rehabilitation exoskeletons, and ergonomic transfer mechanisms.",
    "count": 3
  },
  {
    "name": "Industry 4.0 & AI",
    "slug": "industry-4-ai",
    "iconName": "Cpu",
    "description": "Predictive condition maintenance, digital twins, vibration FFT anomaly detection, and IoT smart factories.",
    "count": 2
  }
];

window.MECH_PROJECTS = [
  {
    "id": "geneva-mechanism-conveyor",
    "title": "Automated Geneva Mechanism Indexing Conveyor for Precision Assembly",
    "shortTitle": "Geneva Indexing Conveyor",
    "category": "Design & Kinematics",
    "categorySlug": "design-kinematics",
    "level": "B.Tech Final Year",
    "difficulty": "Intermediate",
    "durationWeeks": 12,
    "teamSize": "3-4 Members",
    "featured": true,
    "rating": 4.9,
    "estimatedCost": {
      "inr": 18500,
      "usd": 220
    },
    "tags": [
      "Kinematics",
      "Indexing",
      "Intermittent Motion",
      "Assembly Line",
      "CAD/CAM"
    ],
    "badge": "Most Popular Kinematics",
    "abstract": "This project presents the design, mathematical kinematic synthesis, and physical fabrication of an external four-slot Geneva indexing mechanism integrated with a timing belt linear conveyor system. The Geneva drive converts uniform continuous rotary motion from a DC geared motor into precise intermittent indexing motion with high positional repeatability, enabling dwell times necessary for robotic inspection, stamping, and automated assembly operations.",
    "problemStatement": "In high-speed packaging and manufacturing lines, continuous motion cannot accommodate operations such as filling, labeling, or vision inspection which require the workpiece to remain stationary for an exact dwell duration. Electronic indexing servo motors are costly and vulnerable to power fluctuations, whereas mechanical Geneva mechanisms provide mathematically guaranteed dwell angles with rugged mechanical reliability and zero programming overhead.",
    "objectives": [
      "Synthesize kinematic equations for angular velocity and acceleration of a 4-slot external Geneva wheel.",
      "Design and 3D model the Geneva drive, drive pin, locking cam, and tensioned timing belt conveyor in SolidWorks.",
      "Perform static stress analysis (FEA) on the driving pin and driven slot to prevent contact shear failure.",
      "Fabricate the mechanism using laser-cut mild steel plates, precision CNC turning for shafts, and 3D printed guides.",
      "Validate dwell time accuracy and positional repeatability using high-speed optical encoder telemetry."
    ],
    "workingPrinciple": {
      "summary": "The Geneva mechanism operates on the principle of intermittent mechanical engagement. A continuously rotating crank plate carrying a drive pin enters radial slots machined into the driven wheel. While the pin is inside the slot, the wheel rotates through 90 degrees (for a 4-slot wheel). When the pin exits, a concentric locking disc on the crank mates with the concave surface of the wheel, mechanically locking it against rotation during the dwell phase.",
      "fundamentalLaws": [
        "Kinematic Linkage Inversion & Pure Rolling Contact",
        "Newton-Euler Equations of Rigid Body Dynamics",
        "Hertzian Contact Stress Theory (Pin-in-Slot Contact: sigma_c = sqrt(F_n * E / (pi * (1 - nu^2) * R)))",
        "Conservation of Angular Momentum during Acceleration Phase"
      ],
      "operatingSequence": [
        {
          "step": 1,
          "title": "Continuous Drive Input",
          "description": "A 12V 60 RPM DC high-torque geared motor drives the primary input shaft at a uniform angular velocity omega_1 = 6.28 rad/s."
        },
        {
          "step": 2,
          "title": "Pin Entry Phase (Zero Shock Angle)",
          "description": "The crank pin enters the Geneva slot tangentially at exactly 45 degrees to minimize impact shock and dynamic jerk."
        },
        {
          "step": 3,
          "title": "Index Rotation (Active Phase)",
          "description": "Over 90 degrees of crank rotation, the driven wheel is accelerated to peak angular velocity and smoothly decelerated through 90 degrees of displacement."
        },
        {
          "step": 4,
          "title": "Locking Arc Dwell Phase",
          "description": "The pin disengages from the slot. The circular locking collar on the drive wheel enters the concave locking sector of the Geneva wheel, preventing any drift or backlash for 270 degrees of crank rotation."
        }
      ],
      "energyTransfer": "Electrical Input (12V DC) -> Electromagnetic Torque -> Primary Shaft -> Pin-Slot Dynamic Engagement -> Intermittent Rotary Indexing -> Pulley / Timing Belt Linear Displacement."
    },
    "cadAndSpecs": {
      "dimensions": {
        "length": "650 mm",
        "width": "320 mm",
        "height": "240 mm",
        "totalWeight": "14.2 kg"
      },
      "tolerances": "Shaft fits: ISO H7/g6, Pin-Slot clearance: 0.08 mm, Center distance tolerance: ±0.03 mm",
      "materialsMain": [
        "AISI 1045 Carbon Steel (Drive Wheel & Pin)",
        "Aluminium 6061-T6 (Base Plate & Conveyor Guides)",
        "Nylon 6 (Timing Belt Idler Pulleys)",
        "Polyurethane HTD 5M Timing Belt"
      ],
      "cadSoftwareRecommended": [
        "SolidWorks 2024",
        "PTC Creo Parametric",
        "ANSYS Static Structural"
      ],
      "assemblyPartsCount": 38,
      "blueprintFeatures": [
        {
          "view": "Front Orthographic View",
          "description": "Shows center distance (C = 100 mm), crank radius (r = 70.71 mm), and slot geometry with 12 mm radius fillets.",
          "criticalDimensions": "Center Distance: 100.00 ± 0.03 mm"
        },
        {
          "view": "Top Plan Projection",
          "description": "Conveyor belt alignment with dual flange deep-groove ball bearings (SKF 6000-2RS) and adjustable take-up tensioner.",
          "criticalDimensions": "Conveyor Span: 500.00 mm"
        },
        {
          "view": "Sectional Isometric Assembly",
          "description": "Exploded view showing locking collar engagement and keyway broaching on 15 mm diameter keyed shafts.",
          "criticalDimensions": "Shaft Diameter: 15.00 mm (H7)"
        }
      ],
      "visualType": "geneva"
    },
    "billOfMaterials": [
      {
        "itemNumber": 1,
        "partName": "External Geneva Wheel (4-Slot)",
        "specification": "OD 141.4mm, Pitch Circle 100mm, 10mm thickness",
        "material": "AISI 1045 Mild Steel",
        "quantity": 1,
        "unitCostINR": 1800,
        "unitCostUSD": 22,
        "procurementType": "Custom CNC Machined"
      },
      {
        "itemNumber": 2,
        "partName": "Driving Crank with Hardened Pin",
        "specification": "Crank radius 70.71mm, Pin Dia 10mm Case Hardened",
        "material": "EN8 Carbon Steel",
        "quantity": 1,
        "unitCostINR": 1400,
        "unitCostUSD": 17,
        "procurementType": "Custom CNC Machined"
      },
      {
        "itemNumber": 3,
        "partName": "High Torque DC Geared Motor",
        "specification": "12V DC, 60 RPM, 35 kg-cm stall torque, Planetary Gearbox",
        "material": "Commercial Motor Assembly",
        "quantity": 1,
        "unitCostINR": 2800,
        "unitCostUSD": 34,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 4,
        "partName": "Deep Groove Ball Bearings",
        "specification": "SKF 6000-2RS (10mm ID x 26mm OD x 8mm W)",
        "material": "Chrome Steel 52100",
        "quantity": 4,
        "unitCostINR": 180,
        "unitCostUSD": 2.2,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 5,
        "partName": "Pillow Block Bearing Units",
        "specification": "UCP 202 (15mm bore with grub screws)",
        "material": "Cast Iron HT200 Housing",
        "quantity": 2,
        "unitCostINR": 420,
        "unitCostUSD": 5.1,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 6,
        "partName": "HTD 5M Timing Belt & Pulleys",
        "specification": "Pitch 5mm, Belt width 15mm, 24T Pulleys with Flanges",
        "material": "Polyurethane with Steel Cords",
        "quantity": 1,
        "unitCostINR": 1200,
        "unitCostUSD": 14.5,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 7,
        "partName": "Linear Conveyor Chassis Base",
        "specification": "650mm x 320mm x 8mm Blanchard Ground Plate",
        "material": "Aluminium 6061-T6",
        "quantity": 1,
        "unitCostINR": 3200,
        "unitCostUSD": 38.5,
        "procurementType": "Laser Cut / Welded"
      },
      {
        "itemNumber": 8,
        "partName": "Rotary Optical Encoder",
        "specification": "Omron 600 P/R Incremental, Push-Pull Output",
        "material": "Industrial Sensor Unit",
        "quantity": 1,
        "unitCostINR": 2200,
        "unitCostUSD": 26.5,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 9,
        "partName": "Fastener & Hardware Kit",
        "specification": "M5 & M6 High-Tensile Grade 8.8 Socket Head Cap Screws & Dowel Pins",
        "material": "Alloy Steel (Black Oxide)",
        "quantity": 36,
        "unitCostINR": 450,
        "unitCostUSD": 5.4,
        "procurementType": "Standard Fastener"
      }
    ],
    "costBreakdown": {
      "mechanicalHardware": 7200,
      "electronicsAndSensors": 5000,
      "rawMaterials": 3500,
      "machiningAndFabrication": 2800
    },
    "electronicsAndSensors": {
      "microcontroller": "Arduino Uno R3 / STM32F103C8T6 BluePill",
      "sensors": [
        {
          "name": "Optical Incremental Encoder",
          "model": "E6B2-CWZ6C 600P/R",
          "function": "Tracks instantaneous angular velocity and verifies 90 deg stop accuracy",
          "operatingVoltage": "5V - 24V DC"
        },
        {
          "name": "Inductive Proximity Sensor",
          "model": "LJ12A3-4-Z/BX",
          "function": "Detects completion of dwell phase at crank home position",
          "operatingVoltage": "6V - 36V DC"
        }
      ],
      "actuators": [
        {
          "name": "DC Worm-Geared Drive Motor",
          "type": "Brushed DC with All-Metal Planetary Reduction",
          "torqueOrForce": "3.5 N-m Continuous Torque",
          "powerRating": "45W, 3.8A Full Load"
        }
      ],
      "powerSupply": "12V 10A Regulated SMPS with Inline Fuse (5A Fast Blow)",
      "wiringSummary": "Microcontroller controls motor speed via PWM using an L298N / BTS7960 43A H-Bridge module with optical isolation.",
      "circuitPinouts": [
        {
          "pin": "D2 (INT0)",
          "component": "Encoder Channel A",
          "signalType": "Hardware Interrupt Pulse"
        },
        {
          "pin": "D3 (INT1)",
          "component": "Encoder Channel B",
          "signalType": "Quadrature Phase Pulse"
        },
        {
          "pin": "D9 (PWM)",
          "component": "BTS7960 RPWM",
          "signalType": "Speed Regulation PWM (0-255)"
        },
        {
          "pin": "D4",
          "component": "Inductive Proximity Switch",
          "signalType": "Digital Input (Active Low)"
        }
      ]
    },
    "designCalculations": {
      "title": "Kinematic Synthesis and Dynamic Stress Calculations",
      "overview": "For an external Geneva mechanism with n = 4 slots and center distance C = 100 mm, the crank radius r, wheel radius R, maximum angular velocity, and pin shear stress are evaluated analytically.",
      "formulas": [
        {
          "name": "Crank Radius (r)",
          "symbol": "r = C * sin(pi / n)",
          "formula": "r = C \\cdot \\sin\\left(\\frac{\\pi}{n}\\right)",
          "explanation": "Guarantees tangential pin entry at right angles to eliminate impact shock.",
          "exampleCalculation": "r = 100 * sin(pi / 4) = 100 * 0.7071 = 70.71 mm",
          "result": "70.71 mm"
        },
        {
          "name": "Geneva Wheel Radius (R)",
          "symbol": "R = C * cos(pi / n)",
          "formula": "R = C \\cdot \\cos\\left(\\frac{\\pi}{n}\\right)",
          "explanation": "Determines the maximum outer envelope radius of the 4-slot Geneva disc.",
          "exampleCalculation": "R = 100 * cos(pi / 4) = 100 * 0.7071 = 70.71 mm",
          "result": "70.71 mm"
        },
        {
          "name": "Max Angular Velocity Ratio (omega_2 / omega_1)",
          "symbol": "(omega_2 / omega_1)_max = (r / C) / (1 - (r / C))",
          "formula": "\\left(\\frac{\\omega_2}{\\omega_1}\\right)_{max} = \\frac{r/C}{1 - (r/C)}",
          "explanation": "Occurs at the midpoint of pin engagement when crank angle theta = 0.",
          "exampleCalculation": "Ratio = 0.7071 / (1 - 0.7071) = 0.7071 / 0.2929 = 2.414",
          "result": "2.414x multiplier"
        },
        {
          "name": "Driving Pin Direct Shear Stress (tau)",
          "symbol": "tau = F_tangential / A_pin",
          "formula": "\\tau = \\frac{4 \\cdot F_t}{\\pi \\cdot d_{pin}^2}",
          "explanation": "Evaluates the shear safety of the 10mm diameter hardened EN8 drive pin under maximum motor stall torque (3.5 Nm).",
          "exampleCalculation": "Ft = 3.5 / 0.07071 = 49.5 N; A = pi/4*(10)^2 = 78.54 mm^2; tau = 49.5 / 78.54 = 0.63 MPa (Yield strength 460 MPa, FOS > 50)",
          "result": "0.63 MPa (FOS = 730)"
        }
      ],
      "calculatorConfig": {
        "title": "Geneva Kinematic & Stress Calculator",
        "param1Name": "centerDistance",
        "param1Label": "Center Distance (C)",
        "param1Unit": "mm",
        "param1Default": 100,
        "param1Min": 50,
        "param1Max": 300,
        "param1Step": 5,
        "param2Name": "motorRpm",
        "param2Label": "Motor Input Speed",
        "param2Unit": "RPM",
        "param2Default": 60,
        "param2Min": 10,
        "param2Max": 200,
        "param2Step": 5,
        "formulaType": "stress"
      }
    },
    "fabricationSequence": [
      {
        "phase": "Phase 1: Precision Machining",
        "steps": [
          {
            "order": 1,
            "operation": "CNC Milling of Geneva Wheel",
            "machineOrTool": "3-Axis VMC Milling Machine",
            "parametersOrTolerance": "Feed 450 mm/min, Slot tolerance ±0.03 mm",
            "safetyPrecaution": "Ensure flood coolant is maintained to prevent thermal distortion."
          },
          {
            "order": 2,
            "operation": "Turning of Drive Shafts & Pin",
            "machineOrTool": "Center Lathe / CNC Turning Lathe",
            "parametersOrTolerance": "Shaft Dia 15mm with ISO g6 grind finish",
            "safetyPrecaution": "Wear eye protection; deburr all keyway edges."
          },
          {
            "order": 3,
            "operation": "Laser Cutting of Base Chassis Plates",
            "machineOrTool": "2kW Fiber Laser CNC",
            "parametersOrTolerance": "Cut kerf 0.15 mm, 8mm Al 6061 plate",
            "safetyPrecaution": "Nitrogen assist gas for dross-free edge finish."
          }
        ]
      },
      {
        "phase": "Phase 2: Assembly & Alignment",
        "steps": [
          {
            "order": 4,
            "operation": "Bearing Press-Fit Assembly",
            "machineOrTool": "Hand Arbor Press",
            "parametersOrTolerance": "Press fit into pillow block housings",
            "safetyPrecaution": "Apply pressure solely to the outer bearing race."
          },
          {
            "order": 5,
            "operation": "Center Distance Dial Gauge Verification",
            "machineOrTool": "Vernier Height Gauge & Dial Indicator",
            "parametersOrTolerance": "Verify C = 100.00 mm ± 0.05 mm across dowels",
            "safetyPrecaution": "Lock all mounting bolts using Loctite 243 threadlocker."
          },
          {
            "order": 6,
            "operation": "Belt Tensioning & Timing Adjustment",
            "machineOrTool": "Frequency Belt Tension Meter",
            "parametersOrTolerance": "Tension to 45 Hz natural vibration",
            "safetyPrecaution": "Check belt tracking during manual hand rotation before powering on."
          }
        ]
      }
    ],
    "testingAndResults": {
      "testMethodology": "The assembled Geneva conveyor was tested continuously for 200 index cycles under varying load conditions (0.5 kg to 3.0 kg payloads). High-speed optical rotary encoder telemetry logged instantaneous angular velocity, cycle period, and dwell angle repeatability.",
      "performanceMetrics": [
        {
          "metric": "Cycle Time per 90° Index",
          "theoreticalValue": "1.00",
          "experimentalValue": "1.02",
          "unit": "seconds",
          "deviationPercent": "+2.0%",
          "status": "Optimal"
        },
        {
          "metric": "Dwell Time per Cycle",
          "theoreticalValue": "0.75",
          "experimentalValue": "0.76",
          "unit": "seconds",
          "deviationPercent": "+1.3%",
          "status": "Optimal"
        },
        {
          "metric": "Positional Repeatability at Stop",
          "theoreticalValue": "±0.05",
          "experimentalValue": "±0.08",
          "unit": "mm",
          "deviationPercent": "+0.03 mm",
          "status": "Passed"
        },
        {
          "metric": "Max Operating Temperature at Pin",
          "theoreticalValue": "38.0",
          "experimentalValue": "41.5",
          "unit": "°C",
          "deviationPercent": "+9.2%",
          "status": "Passed"
        }
      ],
      "chartData": {
        "xLabel": "Crank Rotation Angle (Degrees)",
        "yTheoreticalLabel": "Theoretical Angular Velocity (rad/s)",
        "yActualLabel": "Experimental Measured Velocity (rad/s)",
        "dataPoints": [
          {
            "x": 0,
            "yTheoretical": 0,
            "yActual": 0
          },
          {
            "x": 15,
            "yTheoretical": 2.1,
            "yActual": 1.9
          },
          {
            "x": 30,
            "yTheoretical": 8.4,
            "yActual": 8.1
          },
          {
            "x": 45,
            "yTheoretical": 15.2,
            "yActual": 14.8
          },
          {
            "x": 60,
            "yTheoretical": 8.4,
            "yActual": 8.3
          },
          {
            "x": 75,
            "yTheoretical": 2.1,
            "yActual": 2.2
          },
          {
            "x": 90,
            "yTheoretical": 0,
            "yActual": 0.1
          },
          {
            "x": 180,
            "yTheoretical": 0,
            "yActual": 0
          },
          {
            "x": 270,
            "yTheoretical": 0,
            "yActual": 0
          },
          {
            "x": 360,
            "yTheoretical": 0,
            "yActual": 0
          }
        ]
      },
      "conclusions": "The Geneva indexing conveyor achieved an exceptional positional accuracy of ±0.08 mm over 200 consecutive cycles. The dwell locking collar eliminated 99.4% of back-drive motion without requiring an electrical brake. The prototype satisfies all industrial requirements for automated packaging, part sorting, and robotic inspection stations."
    },
    "softwareStack": {
      "cad": [
        "SolidWorks 2024 (Parametric Assembly)",
        "Autodesk Fusion 360 (CAM Toolpath Generation)"
      ],
      "caeSimulation": [
        "ANSYS Static Structural 2023 R2 (Hertzian Contact Stress & Von Mises)",
        "SolidWorks Motion Analysis (Kinematic Velocity & Jerk Analysis)"
      ],
      "programmingAndIde": [
        "Arduino IDE 2.3",
        "MATLAB Simulink (Dynamic Linkage Simulation)"
      ]
    },
    "prosAndCons": {
      "pros": [
        "100% mechanically positive lock during dwell phase; zero sensor failure risk for position holding.",
        "Constant-velocity input motor is cheap and simple compared to complex CNC servo drive indexers.",
        "High durability with hardened EN8 steel pin and proper lubrication.",
        "Low maintenance requirements with sealed deep-groove ball bearings."
      ],
      "cons": [
        "Fixed dwell-to-index ratio (3:1 for 4-slot wheel); dwell duration cannot be altered without changing motor speed.",
        "High dynamic jerk at pin entry and exit restricts ultra-high-speed operations (>150 RPM)."
      ],
      "industrialLimitations": "Not suited for variable batch sizes requiring customizable pitch spacing. Best deployed in dedicated mass-production assembly lines."
    },
    "futureScope": [
      "Integration of an intermittent Geneva cam with a programmable stepper motor to allow variable dwell durations.",
      "Replacement of steel drive pin with a rolling element needle bearing to eliminate sliding friction in the slot.",
      "Addition of machine vision camera at the dwell station for automated PCB inspection and defect sorting."
    ],
    "references": [
      "Shigley's Mechanical Engineering Design, 11th Edition, Richard G. Budynas and J. Keith Nisbett.",
      "Theory of Machines and Mechanisms, 5th Edition, John J. Uicker, Gordon R. Pennock, Joseph E. Shigley.",
      "ASME Journal of Mechanical Design: Dynamic Analysis of Geneva Mechanisms with Clearance (Vol. 132, 2020)."
    ],
    "reportChapters": [
      {
        "chapterNumber": 1,
        "title": "Introduction & Industrial Background",
        "summary": "Examines the need for high-precision intermittent indexing in automated manufacturing lines and compares Geneva drives against electrical servo tables."
      },
      {
        "chapterNumber": 2,
        "title": "Literature Review & Kinematic Formulations",
        "summary": "Reviews classical kinematic formulations by Bickford and modern contact mechanics of Geneva drives with zero-shock entrance geometry."
      },
      {
        "chapterNumber": 3,
        "title": "CAD Modeling & Finite Element Analysis",
        "summary": "Details the parametric SolidWorks assembly and ANSYS static stress analysis showing peak Von Mises stresses of 42.8 MPa under full motor stall."
      },
      {
        "chapterNumber": 4,
        "title": "Fabrication, Machining & BOM Sourcing",
        "summary": "Exhaustive step-by-step documentation of CNC milling, turning, laser cutting, and precision assembly with tolerance stack-up analysis."
      },
      {
        "chapterNumber": 5,
        "title": "Testing, Data Logging & Performance Validation",
        "summary": "Evaluates 200 test cycles with optical encoder logging, dwell repeatability verification, and temperature rise measurements."
      },
      {
        "chapterNumber": 6,
        "title": "Conclusion, Economic Feasibility & Future Scope",
        "summary": "Summarizes the technical deliverables, cost savings of 68% compared to imported indexing heads, and avenues for servo-assisted hybrid drives."
      }
    ],
    "planning": {
      "durationWeeks": 12,
      "scheduleType": "12-Week Waterfall with Agile CAD Sprints",
      "phases": [
        {
          "number": 1,
          "title": "Kinematic Synthesis & Geometric Sizing",
          "weeks": "W1 - W2",
          "status": "Completed",
          "completionPercent": 100,
          "milestone": "Kinematic Mathematical Proof & Motion Curve Approval",
          "tasks": [
            "Formulate analytical equations for angular acceleration and angular jerk at entry angle beta = 0 deg",
            "Conduct parametric sizing in MATLAB to determine optimal pin center distance L = 120 mm",
            "Finalize dwell-to-motion ratio (3:1 for 4-slot Geneva wheel)"
          ],
          "deliverables": [
            "Kinematic Analysis Report",
            "MATLAB Synthesis Script",
            "Velocity & Acceleration Phase Curves"
          ],
          "leadRole": "Lead Kinematics Engineer"
        },
        {
          "number": 2,
          "title": "3D Parametric CAD Solid Modeling & Clearance Audit",
          "weeks": "W3 - W4",
          "status": "Completed",
          "completionPercent": 100,
          "milestone": "Digital Assembly PDR (Preliminary Design Review)",
          "tasks": [
            "Model 4-slot slotted wheel, continuous driver crank, drive pin with roller bearing in SolidWorks",
            "Design linear timing belt conveyor bed with adjustable tensioning idler pulleys",
            "Execute dynamic collision detection and interference simulation across 360-degree rotation cycle",
            "Prepare 2D manufacturing blueprints with ISO 2768-m tolerances and GD&T datum frames"
          ],
          "deliverables": [
            "Full 3D CAD Assembly (.STEP / .SLDASM)",
            "Complete 2D Detail Drawings",
            "Interference Report"
          ],
          "leadRole": "CAD Design Engineer"
        },
        {
          "number": 3,
          "title": "Finite Element Analysis (FEA) & Dynamic Stress Validation",
          "weeks": "W5 - W6",
          "status": "Completed",
          "completionPercent": 100,
          "milestone": "Structural Safety & Fatigue Factor Certification",
          "tasks": [
            "Import Geneva wheel and drive pin geometries into ANSYS Mechanical",
            "Apply dynamic contact frictional formulation between hardened drive pin and slot walls",
            "Mesh with high-density tetrahedral elements at slot entry radius (minimum 0.5 mm mesh size)",
            "Perform transient dynamic simulation under peak torque 14.8 Nm to compute von Mises stress and factor of safety"
          ],
          "deliverables": [
            "FEA Structural Report",
            "Mesh Convergence Study",
            "Fatigue Life S-N Curve Assessment"
          ],
          "leadRole": "CAE Simulation Analyst"
        },
        {
          "number": 4,
          "title": "Procurement, Vendor Sourcing & Raw Stock Inspection",
          "weeks": "W7",
          "status": "Completed",
          "completionPercent": 100,
          "milestone": "Material Receipt & Hardness / Dimension Inward Verification",
          "tasks": [
            "Procure AL 6061-T6 tooling plate (15 mm thickness) and EN24 alloy steel round stock (dia 25 mm)",
            "Source SKF 6000-2RS sealed ball bearings, timing pulleys (HTD 5M), and DC planetary gear motor (24V, 60 RPM)",
            "Inspect incoming raw material certificates and verify Rockwell hardness (HRC 48-52 for case-hardened pin)"
          ],
          "deliverables": [
            "Material Test Certificates (MTC)",
            "Inward Inspection Report",
            "BOM Procurement Logbook"
          ],
          "leadRole": "Procurement & Quality Lead"
        },
        {
          "number": 5,
          "title": "Precision CNC Machining, Wire EDM & Workshop Fabrication",
          "weeks": "W8 - W9",
          "status": "In Progress",
          "completionPercent": 85,
          "milestone": "Precision Machined Parts Metrology Sign-Off",
          "tasks": [
            "Generate Mastercam 3-axis toolpaths for Geneva wheel profile with adaptive trochoidal roughing",
            "Execute CNC VMC milling of aluminum chassis plates, bearing housings, and conveyor brackets",
            "Machine radial Geneva slots using Wire Cut EDM to achieve Ra 0.8 µm surface finish and slot width 10.02 ±0.01 mm",
            "Perform precision lathe turning and surface grinding of drive shaft (dia 15 mm h6 tolerance)"
          ],
          "deliverables": [
            "CNC G-Code Programs",
            "CMM Coordinate Metrology Inspection Sheets",
            "Machined Components Kit"
          ],
          "leadRole": "Manufacturing / CNC Specialist"
        },
        {
          "number": 6,
          "title": "Mechatronics Integration, Driver Wiring & Firmware",
          "weeks": "W9 - W10",
          "status": "In Progress",
          "completionPercent": 70,
          "milestone": "Drive Subsystem Power-Up & Closed-Loop Speed Control",
          "tasks": [
            "Mount 24V DC planetary gear motor with flexible jaw spider coupling to input shaft",
            "Wire BTS7960 43A H-Bridge motor driver and Arduino Nano microcontroller with optical slotted limit sensor",
            "Flash firmware with optical pulse counting to monitor indexing dwell synchronization and trigger automatic emergency stop",
            "Integrate PWM soft-start acceleration ramp to reduce starting torque jerk by 42%"
          ],
          "deliverables": [
            "Electrical Wiring Diagram",
            "Microcontroller C++ Source Code",
            "Bench Electrical Test Log"
          ],
          "leadRole": "Mechatronics / Embedded Engineer"
        },
        {
          "number": 7,
          "title": "Mechanical Assembly, Tolerance Stacking & Dwell Alignment",
          "weeks": "W10 - W11",
          "status": "Planned",
          "completionPercent": 30,
          "milestone": "Integrated Mechanical Conveyor Rig Ready for DVT",
          "tasks": [
            "Assemble pillow block bearings with precision shims to eliminate shaft axial runout (< 0.02 mm)",
            "Install Geneva wheel and adjust driving pin radial center distance using dial test indicator",
            "Mount timing belt conveyor, align pulley sprockets, and calibrate belt tension using frequency meter",
            "Verify smooth manual rotation through 3 full indexing cycles prior to powered motor engagement"
          ],
          "deliverables": [
            "Assembly Checklist & Torque Log",
            "Dial Indicator Alignment Record",
            "Initial Run Video Evidence"
          ],
          "leadRole": "Lead Assembly Technician"
        },
        {
          "number": 8,
          "title": "Empirical DVT Testing, High-Speed Logging & Thesis Defense",
          "weeks": "W11 - W12",
          "status": "Planned",
          "completionPercent": 10,
          "milestone": "Final Project Thesis, Presentation & Viva Voce",
          "tasks": [
            "Conduct repeatability testing using high-speed laser displacement sensor across 500 consecutive index cycles",
            "Measure positional dwell repeatability (target < ±0.08 mm along conveyor belt)",
            "Log motor current profile and thermal temperature rise over 2 hours of continuous operation",
            "Compile 7-chapter comprehensive engineering project report with cost audit, Gantt variance, and viva defense slides"
          ],
          "deliverables": [
            "Comprehensive Final Project Thesis (PDF)",
            "Empirical Testing Benchmark Dataset",
            "Project Defense Presentation Deck"
          ],
          "leadRole": "Project Team Lead"
        }
      ],
      "wbs": [
        {
          "id": "1.0",
          "name": "Project Management, Research & Mathematical Formulation",
          "owner": "Team Lead",
          "duration": "14 Days",
          "subtasks": [
            {
              "id": "1.1",
              "name": "Industrial intermittent indexing literature review & mechanism selection",
              "estHours": 16,
              "status": "Done"
            },
            {
              "id": "1.2",
              "name": "Formulate kinematic equations for dwell angle, angular velocity, and shock jerk",
              "estHours": 24,
              "status": "Done"
            },
            {
              "id": "1.3",
              "name": "Draft technical requirements specification and conveyor payload budget",
              "estHours": 12,
              "status": "Done"
            }
          ]
        },
        {
          "id": "2.0",
          "name": "Parametric CAD Solid Modeling & Digital Prototyping",
          "owner": "CAD Designer",
          "duration": "14 Days",
          "subtasks": [
            {
              "id": "2.1",
              "name": "SolidWorks 3D parametric modeling of Geneva wheel, drive crank, and locking arc",
              "estHours": 28,
              "status": "Done"
            },
            {
              "id": "2.2",
              "name": "Linear conveyor frame, guide rails, and timing pulley tensioner design",
              "estHours": 22,
              "status": "Done"
            },
            {
              "id": "2.3",
              "name": "Dynamic kinematic motion study & 360-degree clearance verification",
              "estHours": 18,
              "status": "Done"
            },
            {
              "id": "2.4",
              "name": "Fabrication 2D blueprints generation with ISO fits (H7/h6, H7/g6)",
              "estHours": 16,
              "status": "Done"
            }
          ]
        },
        {
          "id": "3.0",
          "name": "CAE Simulation & Structural Finite Element Analysis",
          "owner": "FEA Analyst",
          "duration": "14 Days",
          "subtasks": [
            {
              "id": "3.1",
              "name": "Transient dynamic FEA meshing & boundary condition setup in ANSYS",
              "estHours": 20,
              "status": "Done"
            },
            {
              "id": "3.2",
              "name": "Contact friction stress modeling at pin-slot entry interface",
              "estHours": 18,
              "status": "Done"
            },
            {
              "id": "3.3",
              "name": "Modal vibration analysis to determine torsional natural frequencies",
              "estHours": 14,
              "status": "Done"
            }
          ]
        },
        {
          "id": "4.0",
          "name": "Procurement, Vendor Logistics & Material Quality Control",
          "owner": "Procurement Lead",
          "duration": "7 Days",
          "subtasks": [
            {
              "id": "4.1",
              "name": "Procure AL 6061-T6 tooling plate and EN24 alloy round bar",
              "estHours": 10,
              "status": "Done"
            },
            {
              "id": "4.2",
              "name": "Source commercial bought-out items (bearings, timing belt, pulleys, DC gear motor)",
              "estHours": 12,
              "status": "Done"
            },
            {
              "id": "4.3",
              "name": "Inward hardness Rockwell testing and dimensional gauge inspection",
              "estHours": 8,
              "status": "Done"
            }
          ]
        },
        {
          "id": "5.0",
          "name": "Precision Machining, CNC Milling & Workshop Operations",
          "owner": "Machinist",
          "duration": "14 Days",
          "subtasks": [
            {
              "id": "5.1",
              "name": "Mastercam toolpath programming and CAM G-code verification",
              "estHours": 18,
              "status": "Done"
            },
            {
              "id": "5.2",
              "name": "3-Axis CNC milling of Geneva wheel perimeter and locking arc cutouts",
              "estHours": 24,
              "status": "Done"
            },
            {
              "id": "5.3",
              "name": "Wire EDM precision wire-cutting of radial 4-slot profiles",
              "estHours": 16,
              "status": "Done"
            },
            {
              "id": "5.4",
              "name": "Lathe turning and cylindrical grinding of transmission shafts",
              "estHours": 14,
              "status": "In Progress"
            }
          ]
        },
        {
          "id": "6.0",
          "name": "Mechatronics, Controls & Sensor Telemetry",
          "owner": "Embedded Engineer",
          "duration": "10 Days",
          "subtasks": [
            {
              "id": "6.1",
              "name": "Design electrical circuit schematic, power rail filtering, and optocoupler isolation",
              "estHours": 14,
              "status": "Done"
            },
            {
              "id": "6.2",
              "name": "Microcontroller PWM speed regulation and emergency optical limit switch interrupt",
              "estHours": 18,
              "status": "In Progress"
            },
            {
              "id": "6.3",
              "name": "Build tachometer and cycle-time data logging dashboard",
              "estHours": 12,
              "status": "Planned"
            }
          ]
        },
        {
          "id": "7.0",
          "name": "Mechanical Assembly, Bench Alignment & DVT Validation",
          "owner": "Assembly Lead",
          "duration": "12 Days",
          "subtasks": [
            {
              "id": "7.1",
              "name": "Precision bearing pressing, shaft alignment, and dial indicator runout check",
              "estHours": 16,
              "status": "Planned"
            },
            {
              "id": "7.2",
              "name": "Conveyor timing belt tensioning and drive synchronization calibration",
              "estHours": 14,
              "status": "Planned"
            },
            {
              "id": "7.3",
              "name": "Continuous endurance run (500 cycles) & laser displacement repeatability testing",
              "estHours": 20,
              "status": "Planned"
            }
          ]
        },
        {
          "id": "8.0",
          "name": "Comprehensive Thesis, Cost Audit & Final Project Defense",
          "owner": "All Members",
          "duration": "8 Days",
          "subtasks": [
            {
              "id": "8.1",
              "name": "Compile full 7-chapter academic project report with CAD drawings and FEA results",
              "estHours": 30,
              "status": "In Progress"
            },
            {
              "id": "8.2",
              "name": "Perform final financial budget vs actual cost variance audit",
              "estHours": 8,
              "status": "Planned"
            },
            {
              "id": "8.3",
              "name": "Conduct final technical viva voce dry-run and demonstration presentation",
              "estHours": 12,
              "status": "Planned"
            }
          ]
        }
      ],
      "fmea": [
        {
          "subsystem": "Geneva Drive Pin & Roller",
          "failureMode": "Drive pin shear or bending failure during slot entry shock",
          "effect": "Catastrophic mechanism jam, fractured drive pin, sudden motor stall",
          "cause": "High angular deceleration inertial shock at entry combined with inadequate yield strength of mild steel",
          "severity": 8,
          "occurrence": 3,
          "detection": 3,
          "rpn": 72,
          "action": "Use heat-treated EN24 (AISI 4340) alloy steel hardened to 50 HRC; integrate needle roller sleeve on pin to eliminate sliding friction.",
          "postActionRPN": 24
        },
        {
          "subsystem": "Geneva Slotted Wheel",
          "failureMode": "Excessive backlash or positional error during dwell phase",
          "effect": "Workpiece on conveyor misaligned relative to downstream automated assembly head (> ±0.5 mm)",
          "cause": "Machining tolerance stack-up or premature abrasive wear on circular locking arc surface",
          "severity": 7,
          "occurrence": 4,
          "detection": 4,
          "rpn": 112,
          "action": "Wire EDM precision profile machining for locking crescent; hard anodize AL 6061 wheel to 60 µm coating thickness; apply low-friction PTFE dry lubricant.",
          "postActionRPN": 28
        },
        {
          "subsystem": "Timing Belt Conveyor",
          "failureMode": "Belt tooth skip or slackening under intermittent acceleration peak",
          "effect": "Loss of absolute indexing synchronism; conveyor positioning error accumulates linearly",
          "cause": "Dynamic inertia of payload during indexing start impulse exceeds belt pre-tension clamping force",
          "severity": 6,
          "occurrence": 4,
          "detection": 3,
          "rpn": 72,
          "action": "Install spring-loaded eccentric tensioning idler pulley; upgrade to steel-cord reinforced polyurethane HTD 5M timing belt.",
          "postActionRPN": 24
        },
        {
          "subsystem": "Transmission Shaft & Bearings",
          "failureMode": "Shaft deflection causing bearing binding and motor thermal trip",
          "effect": "Motor draws excessive current, thermal overload switch trips after 20 minutes continuous run",
          "cause": "Overhung load from heavy drive crank without outboard bearing support",
          "severity": 7,
          "occurrence": 3,
          "detection": 2,
          "rpn": 42,
          "action": "Implement straddle bearing mounting configuration (bearing on both sides of drive crank) with dual SKF 6000 deep groove ball bearings.",
          "postActionRPN": 14
        },
        {
          "subsystem": "Motor & Mechatronics",
          "failureMode": "Inrush current spike causing microcontroller reset",
          "effect": "Indexing counter resets, cycle sequence desynchronizes midway through assembly batch",
          "cause": "Electrical noise and voltage sag during motor stall or acceleration transient",
          "severity": 7,
          "occurrence": 4,
          "detection": 2,
          "rpn": 56,
          "action": "Add 4700 µF low-ESR electrolytic capacitor across 24V power rail; isolate microcontroller logic with optocouplers and separate 5V LDO buck converter.",
          "postActionRPN": 14
        }
      ],
      "raciMatrix": [
        {
          "activity": "Kinematic synthesis calculations & MATLAB simulation",
          "leadMech": "A/R",
          "embedded": "I",
          "feaAnalyst": "C",
          "machinist": "I"
        },
        {
          "activity": "SolidWorks 3D CAD modeling & tolerance allocation",
          "leadMech": "A/R",
          "embedded": "C",
          "feaAnalyst": "C",
          "machinist": "C"
        },
        {
          "activity": "ANSYS dynamic stress FEA & contact pressure study",
          "leadMech": "C",
          "embedded": "I",
          "feaAnalyst": "A/R",
          "machinist": "I"
        },
        {
          "activity": "Raw material procurement & vendor quotes",
          "leadMech": "A",
          "embedded": "C",
          "feaAnalyst": "I",
          "machinist": "R"
        },
        {
          "activity": "CNC VMC toolpath generation & Wire EDM slotting",
          "leadMech": "C",
          "embedded": "I",
          "feaAnalyst": "I",
          "machinist": "A/R"
        },
        {
          "activity": "Microcontroller PWM coding & optical sensor wiring",
          "leadMech": "C",
          "embedded": "A/R",
          "feaAnalyst": "I",
          "machinist": "I"
        },
        {
          "activity": "Mechanical subassembly, bearing shimming & runout alignment",
          "leadMech": "A/R",
          "embedded": "C",
          "feaAnalyst": "I",
          "machinist": "R"
        },
        {
          "activity": "Laser displacement repeatability logging & DVT validation",
          "leadMech": "A",
          "embedded": "R",
          "feaAnalyst": "R",
          "machinist": "C"
        },
        {
          "activity": "Final academic report synthesis & thesis compilation",
          "leadMech": "A/R",
          "embedded": "R",
          "feaAnalyst": "R",
          "machinist": "R"
        }
      ],
      "manufacturingRouting": [
        {
          "opNo": 10,
          "part": "Geneva Wheel (4-Slot)",
          "machine": "3-Axis CNC Machining Center (BFW Chakra)",
          "operation": "Face mill top & bottom surfaces to 12.0 mm thickness; contour mill outer locking arcs and central bore dia 15H7",
          "tooling": "12 mm carbide 4-flute end mill, 15H7 carbide reamer",
          "parameters": "Spindle: 4500 RPM, Feed: 850 mm/min, Coolant: Water-soluble emulsion",
          "tolerance": "Bore Dia: 15.000 +0.018/-0.000 mm, Face Flatness: 0.02 mm",
          "qcCheck": "Bore gauge inspection with Mitutoyo 3-point micrometer"
        },
        {
          "opNo": 20,
          "part": "Geneva Wheel (4-Slot)",
          "machine": "Wire Cut EDM (Electronica Ultima)",
          "operation": "Submerged wire EDM cutting of four 10 mm radial drive slots from pre-drilled starter holes",
          "tooling": "0.25 mm brass wire (CuZn37)",
          "parameters": "Discharge Current: 6A, Pulse on: 12 µs, Flushing pressure: 0.8 MPa",
          "tolerance": "Slot Width: 10.02 ±0.01 mm, Surface finish Ra: 0.8 µm",
          "qcCheck": "Slip gauge Go/No-Go inspection (10.01 Go / 10.03 No-Go)"
        },
        {
          "opNo": 30,
          "part": "Drive Crank & Driving Pin",
          "machine": "Precision Lathe (Kirloskar Enterprise)",
          "operation": "Turn driver crank disc, drill offset mounting hole, turn drive pin from EN24 round stock",
          "tooling": "WNMG 080408 carbide insert, high-speed steel twist drill",
          "parameters": "Spindle: 950 RPM, Feed: 0.15 mm/rev, Depth of cut: 1.0 mm",
          "tolerance": "Pin Outer Dia: 9.96 ±0.01 mm (running clearance with slot)",
          "qcCheck": "Digital vernier caliper and optical comparator"
        },
        {
          "opNo": 40,
          "part": "Drive Pin",
          "machine": "Salt Bath Heat Treatment Furnace",
          "operation": "Case hardening and quenching followed by low-temperature tempering",
          "tooling": "Neutral salt bath, oil quench tank",
          "parameters": "Heating to 860°C for 2 hours, oil quench, temper at 180°C for 1.5 hours",
          "tolerance": "Surface Hardness: 48 to 52 HRC, Case depth: 0.6 mm",
          "qcCheck": "Rockwell C Hardness Tester (indentation reading at 3 locations)"
        },
        {
          "opNo": 50,
          "part": "Conveyor Frame & Brackets",
          "machine": "CNC Fiber Laser Cutter (3kW)",
          "operation": "Profile cut side frame plates, motor mounting bracket, and idler tensioner slots from 4 mm mild steel plate",
          "tooling": "Fiber laser beam with high-pressure nitrogen assist",
          "parameters": "Laser Power: 2.4 kW, Speed: 3200 mm/min, Gas pressure: 1.2 MPa",
          "tolerance": "Profile tolerance: ±0.1 mm, Hole centers: ±0.05 mm",
          "qcCheck": "Coordinate measuring table inspection"
        }
      ],
      "dvtTesting": [
        {
          "id": "DVT-01",
          "title": "Positional Indexing Repeatability",
          "standard": "ISO 230-2 Test Code for Machine Tools",
          "equipment": "Keyence LK-G5000 Laser Displacement Sensor",
          "procedure": "Mount sensor targeting workpiece reference edge on conveyor; execute 100 continuous index cycles at 30 RPM motor speed; record stationary dwell stopping positions.",
          "acceptanceCriteria": "Dwell positional deviation <= ±0.10 mm",
          "observedResult": "Mean deviation = ±0.042 mm, max peak-to-peak = 0.078 mm (Passed)",
          "status": "Passed"
        },
        {
          "id": "DVT-02",
          "title": "Dwell Phase Mechanical Locking Stability",
          "standard": "VDI 2727 Geneva Kinematics Guideline",
          "equipment": "Mitutoyo 0.001 mm Dial Test Indicator & Force Gauge",
          "procedure": "Apply a tangential holding load of 25 N to conveyor belt while Geneva wheel is in locking dwell; measure angular deflection.",
          "acceptanceCriteria": "Angular rotational play <= 0.25 degrees",
          "observedResult": "Measured angular play = 0.11 degrees (Passed)",
          "status": "Passed"
        },
        {
          "id": "DVT-03",
          "title": "Motor Thermal Stability & Current Profile",
          "standard": "IEC 60034-1 Rotating Electrical Machines",
          "equipment": "FLIR E5-XT Infrared Thermal Camera & Hall Current Probe",
          "procedure": "Run continuous indexing under 5 kg conveyor load for 120 minutes in 25°C ambient; monitor motor winding and bearing temperatures.",
          "acceptanceCriteria": "Winding temperature rise <= 45°C; steady current <= 2.2A",
          "observedResult": "Max winding temp = 52.4°C (rise 27.4°C); steady current = 1.65A (Passed)",
          "status": "Passed"
        },
        {
          "id": "DVT-04",
          "title": "Acoustic Noise & Dynamic Vibration Severity",
          "standard": "ISO 10816-1 Mechanical Vibration Severity",
          "equipment": "B&K Type 2250 Sound Meter & PCB Accelerometer",
          "procedure": "Measure vibration RMS velocity on drive bearing housing and sound pressure level at 1 meter distance during peak indexing transition.",
          "acceptanceCriteria": "Sound level < 72 dBA; vibration severity < 2.8 mm/s RMS (Class I Good)",
          "observedResult": "Sound level = 64.2 dBA; vibration severity = 1.82 mm/s RMS (Passed)",
          "status": "Passed"
        }
      ],
      "budgetAnalysis": {
        "budgetPlannedINR": 18500,
        "budgetActualINR": 17650,
        "varianceINR": -850,
        "budgetPlannedUSD": 220,
        "budgetActualUSD": 210,
        "contingencyReserve": "10% included (INR 1,850)",
        "savingsHighlights": "In-house CNC milling reduced tooling subcontract costs by INR 1,200; bulk bought-out fastener kit saved INR 350."
      }
    }
  },
  {
    "id": "solar-parabolic-trough",
    "title": "Dual-Axis Solar Parabolic Trough Concentrator with Heat Pipe Boiler",
    "shortTitle": "Solar Parabolic Trough",
    "category": "Thermal & Energy",
    "categorySlug": "thermal-energy",
    "level": "B.Tech Final Year",
    "difficulty": "Advanced",
    "durationWeeks": 14,
    "teamSize": "4 Members",
    "featured": true,
    "rating": 4.8,
    "estimatedCost": {
      "inr": 26000,
      "usd": 310
    },
    "tags": [
      "Solar Thermal",
      "Thermodynamics",
      "Heat Transfer",
      "Heat Pipe",
      "Sun Tracking"
    ],
    "badge": "Top Green Energy Project",
    "abstract": "This project details the thermodynamic design, optical ray tracing, structural fabrication, and experimental validation of a parabolic trough solar concentrator (PTSC). Featuring an aperture area of 1.8 m² with a high-reflectivity mirror surface, concentrated sunlight is focused onto an evacuated copper receiver tube coated with selective black chrome. A dual-axis sensor-guided astronomical solar tracking mechanism maintains perpendicular incidence, driving thermal oil / water to generate medium-pressure process steam.",
    "problemStatement": "Fossil-fuel based industrial process heating in dairy, textile, and chemical plants produces substantial greenhouse gas emissions and operational costs. While flat-plate solar collectors can only reach 60°C to 80°C, parabolic trough concentrators concentrate direct beam solar radiation to achieve working temperatures exceeding 180°C to 250°C, providing clean thermal energy for steam generation and industrial desorbers.",
    "objectives": [
      "Design a parabolic reflector profile using the mathematical parabola equation y = x² / (4f) with focal length f = 300 mm.",
      "Fabricate the parabolic trough skeleton using lightweight laser-cut mild steel ribs and an anodized Alanod solar reflector sheet (reflectivity > 94%).",
      "Construct a vacuum-jacketed copper receiver tube with an internal wickless heat pipe / thermosyphon.",
      "Implement an intelligent dual-axis solar tracking system using four LDR photo-sensors and high-torque worm geared stepper actuators.",
      "Measure instantaneous thermal efficiency (eta_th), useful heat gain (Q_u), and receiver stagnation temperature across varying solar irradiances."
    ],
    "workingPrinciple": {
      "summary": "The parabolic trough concentrator utilizes the geometric property of parabolas: parallel rays of direct beam solar radiation incident on the parabolic reflector are reflected towards a single linear focal line. A tubular heat receiver placed precisely along this focal line absorbs the concentrated solar radiation (concentration ratio CR = 18.5x) and transfers the thermal energy to a heat transfer fluid (HTF) circulated through the core.",
      "fundamentalLaws": [
        "Geometric Optics & Snell's Law of Reflection",
        "Stefan-Boltzmann Law of Thermal Radiation (E_b = sigma * T^4)",
        "First & Second Laws of Thermodynamics (Energy & Exergy Balance)",
        "Duffie and Beckman Solar Thermal Collector Equations"
      ],
      "operatingSequence": [
        {
          "step": 1,
          "title": "Direct Solar Irradiation",
          "description": "Direct Normal Irradiance (DNI) of 750-950 W/m² strikes the 1.8 m² parabolic aperture."
        },
        {
          "step": 2,
          "title": "Optical Concentration",
          "description": "The high-specular reflective surface concentrates solar flux by a geometric factor of 18.5 onto the 25.4 mm receiver tube."
        },
        {
          "step": 3,
          "title": "Selective Absorption & Heat Transfer",
          "description": "Black chrome coating absorbs 95% of incoming wavelengths with low thermal emissivity (epsilon < 0.08) in the infrared spectrum."
        },
        {
          "step": 4,
          "title": "Closed-Loop Steam / Fluid Circulation",
          "description": "Circulating heat transfer fluid absorbs thermal energy, experiencing a temperature rise from 32°C ambient to over 145°C."
        }
      ],
      "energyTransfer": "Solar Electromagnetic Radiant Energy -> Optical Concentration -> Absorber Surface Thermal Conduction -> Fluid Forced Convection -> Steam Latent Enthalpy."
    },
    "cadAndSpecs": {
      "dimensions": {
        "length": "1800 mm",
        "width": "1000 mm",
        "height": "1350 mm",
        "totalWeight": "36.5 kg"
      },
      "tolerances": "Focal line positioning tolerance: ±1.5 mm, Parabolic profile contour accuracy: ±1.0 mm",
      "materialsMain": [
        "Mirror Finish Anodized Aluminium Sheet (Alanod Miro-Sun)",
        "Copper Tube C12200 (Receiver Tube)",
        "Borosilicate Glass Envelope (Low Iron)",
        "Structural Steel ERW Box Sections (Chassis)"
      ],
      "cadSoftwareRecommended": [
        "SolidWorks Flow Simulation",
        "ANSYS Fluent CFD",
        "TracePro Optical Ray Tracing"
      ],
      "assemblyPartsCount": 52,
      "blueprintFeatures": [
        {
          "view": "Parabolic Rib Profile Cross Section",
          "description": "Parabolic contour defined by y = x² / 1200 with precision locating tabs for reflector clips.",
          "criticalDimensions": "Focal length f = 300.0 mm, Rim Angle = 79.6°"
        },
        {
          "view": "Receiver Tube Assembly Details",
          "description": "Vacuum jacket annular gap with Klingerite thermal expansion seals and ceramic insulation bushes.",
          "criticalDimensions": "Inner Copper Dia: 25.4 mm, Outer Glass Dia: 47.0 mm"
        },
        {
          "view": "Two-Axis Gimbal Frame Layout",
          "description": "Heavy-duty slewing drive gear bearings with worm gear backlash locks for high wind load resistance.",
          "criticalDimensions": "Rotation Span: 180° Azimuth, 90° Elevation"
        }
      ],
      "visualType": "solar-trough"
    },
    "billOfMaterials": [
      {
        "itemNumber": 1,
        "partName": "Solar Mirror Sheet (Miro-Sun)",
        "specification": "1800mm x 1000mm x 0.5mm, Total Solar Reflectance 94%",
        "material": "Anodized PVD Aluminium",
        "quantity": 1,
        "unitCostINR": 6500,
        "unitCostUSD": 78,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 2,
        "partName": "Receiver Copper Tube",
        "specification": "25.4mm OD x 1.2mm wall x 2000mm L, Black Chrome Coated",
        "material": "Copper Alloy C12200",
        "quantity": 1,
        "unitCostINR": 3200,
        "unitCostUSD": 38.5,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 3,
        "partName": "Borosilicate Glass Envelope Tube",
        "specification": "47mm OD x 2.2mm wall x 1950mm L, High Transmittance (>92%)",
        "material": "Low-Iron Borosilicate Glass 3.3",
        "quantity": 1,
        "unitCostINR": 2400,
        "unitCostUSD": 29,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 4,
        "partName": "Laser-Cut Structural Ribs",
        "specification": "8 Precision CNC profile ribs with mounting slots",
        "material": "CRCA Mild Steel 2.5mm",
        "quantity": 8,
        "unitCostINR": 280,
        "unitCostUSD": 3.4,
        "procurementType": "Laser Cut / Welded"
      },
      {
        "itemNumber": 5,
        "partName": "Worm Geared Slewing Drive Motor",
        "specification": "12V DC, 5 RPM, 60 Nm Holding Torque with Self-Locking Worm",
        "material": "Alloy Steel / Bronze Worm Wheel",
        "quantity": 2,
        "unitCostINR": 3400,
        "unitCostUSD": 41,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 6,
        "partName": "Submersible Micro Fluid Pump",
        "specification": "12V DC, 240 L/hr, Max Head 3.0m, High Temp seals",
        "material": "PPS Engineering Polymer",
        "quantity": 1,
        "unitCostINR": 950,
        "unitCostUSD": 11.5,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 7,
        "partName": "Chassis & Gimbal Frame Welded Stand",
        "specification": "40mm x 40mm x 2mm Square Hollow Section (SHS)",
        "material": "Mild Steel IS 4923",
        "quantity": 1,
        "unitCostINR": 2800,
        "unitCostUSD": 34,
        "procurementType": "Laser Cut / Welded"
      },
      {
        "itemNumber": 8,
        "partName": "Thermocouple Temperature Sensors",
        "specification": "K-Type Stainless Steel Sheathed Probes (-50 to 400°C) with MAX6675",
        "material": "Alumel / Chromel",
        "quantity": 4,
        "unitCostINR": 380,
        "unitCostUSD": 4.6,
        "procurementType": "Bought-out (Commercial)"
      }
    ],
    "costBreakdown": {
      "mechanicalHardware": 11000,
      "electronicsAndSensors": 6200,
      "rawMaterials": 5300,
      "machiningAndFabrication": 3500
    },
    "electronicsAndSensors": {
      "microcontroller": "ESP32 Dual-Core 240MHz with Wi-Fi Telemetry",
      "sensors": [
        {
          "name": "Four-Quadrant LDR Sun Tracking Array",
          "model": "GL5528 with 3D Printed Shadow Baffle",
          "function": "Detects solar vector misalignment within 0.5 degrees",
          "operatingVoltage": "3.3V DC"
        },
        {
          "name": "K-Type Thermocouple Amplifier",
          "model": "MAX6675 SPI Interface",
          "function": "Measures receiver inlet, outlet, absorber surface, and ambient temperatures",
          "operatingVoltage": "3.3V - 5V DC"
        },
        {
          "name": "Turbine Flow Meter",
          "model": "YF-S201 Hall Effect Sensor",
          "function": "Measures volumetric flow rate of circulating water/oil",
          "operatingVoltage": "5V DC"
        },
        {
          "name": "Pyranometer / Solar Irradiance Sensor",
          "model": "Silicon Photodiode Calibrated Cell",
          "function": "Measures real-time Global and Direct Solar Irradiance in W/m²",
          "operatingVoltage": "0-5V Analog"
        }
      ],
      "actuators": [
        {
          "name": "Azimuth Tracking Drive",
          "type": "Worm Geared DC Motor with Quadrature Encoder",
          "torqueOrForce": "60 N-m Self-Locking",
          "powerRating": "12V 4A Peak"
        },
        {
          "name": "Elevation Altitude Actuator",
          "type": "Heavy-Duty Linear Actuator 200mm Stroke",
          "torqueOrForce": "1500 N Thrust Force",
          "powerRating": "12V 3A"
        }
      ],
      "powerSupply": "12V 100Ah Deep Cycle LiFePO4 Battery with 50W Auxiliary Solar Panel & MPPT Controller",
      "wiringSummary": "Autonomous off-grid power system. ESP32 runs tracking algorithm, sends live cloud telemetry via MQTT for temperature and thermal power output.",
      "circuitPinouts": [
        {
          "pin": "GPIO 34, 35, 36, 39",
          "component": "LDR Shadow Array",
          "signalType": "ADC Analog Inputs"
        },
        {
          "pin": "GPIO 18, 19, 23",
          "component": "MAX6675 SPI Bus (SCK, MISO, CS)",
          "signalType": "SPI Digital Protocol"
        },
        {
          "pin": "GPIO 25, 26",
          "component": "L298N Azimuth Motor Driver",
          "signalType": "PWM / Direction Output"
        },
        {
          "pin": "GPIO 27",
          "component": "YF-S201 Flow Sensor",
          "signalType": "Pulse Counter Interrupt"
        }
      ]
    },
    "designCalculations": {
      "title": "Solar Concentration Ratio and Thermal Efficiency Evaluation",
      "overview": "Evaluates the geometric concentration ratio (CR), rim angle, useful thermal heat gain Q_u, and collector instantaneous efficiency eta_th based on Duffie & Beckman formulations.",
      "formulas": [
        {
          "name": "Geometric Concentration Ratio (CR)",
          "symbol": "CR = (W_aperture - D_receiver) / (pi * D_receiver)",
          "formula": "CR = \\frac{W - D_{rec}}{\\pi \\cdot D_{rec}}",
          "explanation": "Ratio of the effective solar collecting aperture area to the absorber tube surface area.",
          "exampleCalculation": "CR = (1000 - 25.4) / (pi * 25.4) = 974.6 / 79.8 = 12.21x",
          "result": "12.21x Concentration"
        },
        {
          "name": "Rim Angle (phi_r)",
          "symbol": "tan(phi_r / 2) = W / (4 * f)",
          "formula": "\\tan\\left(\\frac{\\phi_r}{2}\\right) = \\frac{W}{4 \\cdot f}",
          "explanation": "Determines the subtended angle from the focal point to the outer rim of the parabolic mirror.",
          "exampleCalculation": "tan(phi_r / 2) = 1000 / (4 * 300) = 1000 / 1200 = 0.8333 => phi_r = 2 * 39.8° = 79.6°",
          "result": "79.6° Rim Angle"
        },
        {
          "name": "Useful Thermal Power Gain (Q_useful)",
          "symbol": "Q_u = m_dot * C_p * (T_out - T_in)",
          "formula": "Q_u = \\dot{m} \\cdot C_p \\cdot (T_{out} - T_{in})",
          "explanation": "Heat absorbed by circulating water at mass flow rate 0.015 kg/s with delta T = 45°C.",
          "exampleCalculation": "Q_u = 0.015 kg/s * 4184 J/kg-K * (78 - 33) = 0.015 * 4184 * 45 = 2824.2 W",
          "result": "2.82 kW Thermal Gain"
        },
        {
          "name": "Instantaneous Thermal Efficiency (eta_th)",
          "symbol": "eta_th = Q_u / (A_aperture * I_dni)",
          "formula": "\\eta_{th} = \\frac{Q_u}{A_{ap} \\cdot I_{DNI}}",
          "explanation": "Ratio of useful heat harvested to total beam solar energy striking the aperture at I_dni = 850 W/m².",
          "exampleCalculation": "eta_th = 2824.2 / (1.8 * 850) = 2824.2 / 1530 = 0.612 (61.2%)",
          "result": "61.2% Thermal Efficiency"
        }
      ],
      "calculatorConfig": {
        "title": "Solar Trough Thermal Output Calculator",
        "param1Name": "solarDNI",
        "param1Label": "Direct Normal Irradiance (DNI)",
        "param1Unit": "W/m²",
        "param1Default": 850,
        "param1Min": 400,
        "param1Max": 1100,
        "param1Step": 25,
        "param2Name": "flowRateLph",
        "param2Label": "Water Flow Rate",
        "param2Unit": "L/hr",
        "param2Default": 50,
        "param2Min": 10,
        "param2Max": 150,
        "param2Step": 5,
        "formulaType": "heat_transfer"
      }
    },
    "fabricationSequence": [
      {
        "phase": "Phase 1: Mirror Structure & Profile",
        "steps": [
          {
            "order": 1,
            "operation": "CNC Laser Cutting of Parabolic Ribs",
            "machineOrTool": "Fiber Laser CNC",
            "parametersOrTolerance": "Rib profile tolerance ±0.5 mm",
            "safetyPrecaution": "Deburr sharp laser slag before handling."
          },
          {
            "order": 2,
            "operation": "Longitudinal Stringer Tube Welding",
            "machineOrTool": "MIG Welding Machine (Argon-CO2)",
            "parametersOrTolerance": "Check frame squareness with diagonal gauges",
            "safetyPrecaution": "Clamp securely on granite flat table to avoid thermal warping."
          },
          {
            "order": 3,
            "operation": "Alanod Mirror Sheet Form-Fitting",
            "machineOrTool": "Pneumatic Riveting Tool",
            "parametersOrTolerance": "Even contour curvature with rubber-backed washers",
            "safetyPrecaution": "Wear nitrile gloves; do not touch specular reflective coating directly."
          }
        ]
      },
      {
        "phase": "Phase 2: Receiver Tube & Sun Tracker",
        "steps": [
          {
            "order": 4,
            "operation": "Selective Coating of Copper Absorber",
            "machineOrTool": "Electroplating Tank",
            "parametersOrTolerance": "Black chrome thickness 1.5 - 2.0 microns",
            "safetyPrecaution": "Operate inside chemical fume hood with eye protection."
          },
          {
            "order": 5,
            "operation": "Glass Envelope Vacuum Sealing",
            "machineOrTool": "Rotary Vane Vacuum Pump & Viton O-Rings",
            "parametersOrTolerance": "Vacuum pulled to 0.1 mbar to eliminate convection losses",
            "safetyPrecaution": "Inspect glass for micro-scratches prior to evacuation."
          },
          {
            "order": 6,
            "operation": "Tracking Gimbal Assembly & Alignment",
            "machineOrTool": "Dial Indicator & Inclinometer",
            "parametersOrTolerance": "Calibrate encoder zero to true solar noon",
            "safetyPrecaution": "Cover mirrors with canvas tarp during assembly to prevent focal line burns."
          }
        ]
      }
    ],
    "testingAndResults": {
      "testMethodology": "Field tested across 5 sunny days in peak summer with Direct Normal Irradiance (DNI) ranging from 650 to 920 W/m². High-accuracy thermocouples logged receiver wall, inlet, and outlet temperatures every 10 seconds alongside wind speed telemetry.",
      "performanceMetrics": [
        {
          "metric": "Peak Stagnation Temperature (No Flow)",
          "theoreticalValue": "260",
          "experimentalValue": "248",
          "unit": "°C",
          "deviationPercent": "-4.6%",
          "status": "Optimal"
        },
        {
          "metric": "Peak Fluid Outlet Temperature (Flow 40 L/h)",
          "theoreticalValue": "112",
          "experimentalValue": "108.5",
          "unit": "°C",
          "deviationPercent": "-3.1%",
          "status": "Passed"
        },
        {
          "metric": "Peak Thermal Efficiency",
          "theoreticalValue": "64.5",
          "experimentalValue": "61.2",
          "unit": "%",
          "deviationPercent": "-5.1%",
          "status": "Optimal"
        },
        {
          "metric": "Tracking Accuracy Misalignment",
          "theoreticalValue": "< 0.5",
          "experimentalValue": "0.62",
          "unit": "degrees",
          "deviationPercent": "+0.12°",
          "status": "Passed"
        }
      ],
      "chartData": {
        "xLabel": "Time of Day (Solar Hours)",
        "yTheoreticalLabel": "Theoretical Useful Heat (Watts)",
        "yActualLabel": "Experimental Useful Heat (Watts)",
        "dataPoints": [
          {
            "x": 9,
            "yTheoretical": 1450,
            "yActual": 1320
          },
          {
            "x": 10,
            "yTheoretical": 2100,
            "yActual": 1980
          },
          {
            "x": 11,
            "yTheoretical": 2650,
            "yActual": 2510
          },
          {
            "x": 12,
            "yTheoretical": 2950,
            "yActual": 2824
          },
          {
            "x": 13,
            "yTheoretical": 2900,
            "yActual": 2790
          },
          {
            "x": 14,
            "yTheoretical": 2500,
            "yActual": 2380
          },
          {
            "x": 15,
            "yTheoretical": 1950,
            "yActual": 1820
          },
          {
            "x": 16,
            "yTheoretical": 1200,
            "yActual": 1110
          }
        ]
      },
      "conclusions": "The experimental dual-axis solar parabolic trough demonstrated consistent steam generation capacity at 108.5°C with an overall thermal collection efficiency of 61.2%. The evacuated borosilicate envelope reduced heat loss coefficients by 68% compared to unglazed bare absorbers."
    },
    "softwareStack": {
      "cad": [
        "SolidWorks 2024 (Optical & Structural Design)",
        "Autodesk Inventor Professional"
      ],
      "caeSimulation": [
        "ANSYS Fluent (Conjugate Heat Transfer & Turbulent Flow)",
        "SolTrace (NREL Monte Carlo Ray Tracing)"
      ],
      "programmingAndIde": [
        "ESP-IDF / Arduino IDE",
        "Python Matplotlib (Thermal Performance Plotting)"
      ]
    },
    "prosAndCons": {
      "pros": [
        "Reaches temperatures over 200°C, capable of direct steam generation without electric heaters.",
        "61.2% thermal efficiency outperforms standard flat-plate collectors by more than 2x.",
        "Autonomous dual-axis tracking maximizes morning and late afternoon energy capture.",
        "Zero emissions and low recurring operational costs."
      ],
      "cons": [
        "Only captures Direct Normal Irradiance (DNI); cannot generate high temperatures during diffuse overcast days.",
        "Requires periodic cleaning of specular mirror surfaces to maintain high reflectance."
      ],
      "industrialLimitations": "Wind buffet loads at speeds exceeding 45 km/h require automatic stow-flat safety mode to prevent structural deformation."
    },
    "futureScope": [
      "Replacement of water with molten salt or nanofluids (Al2O3 / CuO in Therminol 66) for thermal storage up to 400°C.",
      "Coupling with an organic Rankine cycle (ORC) micro-turbine for combined heat and power (CHP) generation.",
      "Automated robotic wiper system for mirror cleaning in arid and desert environments."
    ],
    "references": [
      "Solar Engineering of Thermal Processes, 4th Edition, John A. Duffie and William A. Beckman.",
      "Renewable Energy: Physics, Engineering, Environmental Impacts, Bent Sørensen.",
      "Applied Energy: Optical and Thermal Performance Analysis of Parabolic Trough Collectors (Vol. 228, 2018)."
    ],
    "reportChapters": [
      {
        "chapterNumber": 1,
        "title": "Introduction & Concentrated Solar Power (CSP)",
        "summary": "Fundamentals of CSP technologies, comparison of parabolic troughs, linear Fresnel reflectors, and central solar towers."
      },
      {
        "chapterNumber": 2,
        "title": "Optical Geometry & Parabolic Curve Synthesis",
        "summary": "Mathematical formulations of parabolic focal lines, rim angle optimization, and ray intercept factor calculation."
      },
      {
        "chapterNumber": 3,
        "title": "Thermal Modeling & Finite Volume Heat Transfer",
        "summary": "Detailed heat loss network modeling from receiver surface through vacuum envelope to ambient surroundings."
      },
      {
        "chapterNumber": 4,
        "title": "Mechatronic Sun Tracking Hardware & Firmware",
        "summary": "Four-quadrant LDR sensor design, closed-loop solar position algorithm, and wind stow safety fail-safes."
      },
      {
        "chapterNumber": 5,
        "title": "Experimental Results, Stagnation & Efficiency",
        "summary": "Exhaustive field test data showing useful energy gain, temperature profiles, and comparison with NREL benchmarks."
      },
      {
        "chapterNumber": 6,
        "title": "Industrial Payback Period & Environmental Impact",
        "summary": "Lifecycle cost analysis showing carbon offset of 2.4 tons CO2/year and capital payback in 2.8 years."
      }
    ],
    "planning": {
      "durationWeeks": 14,
      "scheduleType": "14-Week Thermal & Solar System Engineering Roadmap",
      "phases": [
        {
          "number": 1,
          "title": "Optical Ray Tracing & Thermal Collector Design",
          "weeks": "W1 - W3",
          "status": "Completed",
          "completionPercent": 100,
          "milestone": "Aperture Area & Concentration Ratio Approved",
          "leadRole": "Thermal Systems Engineer"
        },
        {
          "number": 2,
          "title": "Structural Frame & Parabolic Rib CAD Synthesis",
          "weeks": "W4 - W5",
          "status": "Completed",
          "completionPercent": 100,
          "milestone": "Wind Load FEA & Structural Safety Sign-Off",
          "leadRole": "Mechanical CAD Lead"
        },
        {
          "number": 3,
          "title": "Selective Absorber & Heat Pipe Fabrication",
          "weeks": "W6 - W7",
          "status": "Completed",
          "completionPercent": 100,
          "milestone": "Vacuum Glass Envelope & Heat Pipe Vacuum Sealed",
          "leadRole": "Materials / Fabrication Lead"
        },
        {
          "number": 4,
          "title": "Dual-Axis Astronomical Solar Tracking System",
          "weeks": "W8 - W9",
          "status": "In Progress",
          "completionPercent": 80,
          "milestone": "Sun Angle LDR & Stepper Closed-Loop Tracking Verified",
          "leadRole": "Mechatronics Engineer"
        },
        {
          "number": 5,
          "title": "Circulation Pump, Flowmeter & Heat Exchanger",
          "weeks": "W10 - W11",
          "status": "In Progress",
          "completionPercent": 60,
          "milestone": "Closed-Loop Pressurized Flow Circuit Leak-Tested",
          "leadRole": "Fluids Systems Lead"
        },
        {
          "number": 6,
          "title": "Outdoor Solar Field Calorimetric Testing & Thesis",
          "weeks": "W12 - W14",
          "status": "Planned",
          "completionPercent": 20,
          "milestone": "Collector Thermal Efficiency > 55% Validated; Thesis Defense",
          "leadRole": "Project Lead"
        }
      ],
      "wbs": [
        {
          "id": "1.0",
          "name": "Optical Ray Tracing & Thermal Collector Design",
          "owner": "Thermal Systems Engineer",
          "duration": "W1 - W3",
          "subtasks": [
            {
              "id": "1.1",
              "name": "Aperture Area & Concentration Ratio Approved",
              "estHours": 12,
              "status": "Done"
            }
          ]
        },
        {
          "id": "2.0",
          "name": "Structural Frame & Parabolic Rib CAD Synthesis",
          "owner": "Mechanical CAD Lead",
          "duration": "W4 - W5",
          "subtasks": [
            {
              "id": "2.1",
              "name": "Wind Load FEA & Structural Safety Sign-Off",
              "estHours": 12,
              "status": "Done"
            }
          ]
        },
        {
          "id": "3.0",
          "name": "Selective Absorber & Heat Pipe Fabrication",
          "owner": "Materials / Fabrication Lead",
          "duration": "W6 - W7",
          "subtasks": [
            {
              "id": "3.1",
              "name": "Vacuum Glass Envelope & Heat Pipe Vacuum Sealed",
              "estHours": 12,
              "status": "Done"
            }
          ]
        },
        {
          "id": "4.0",
          "name": "Dual-Axis Astronomical Solar Tracking System",
          "owner": "Mechatronics Engineer",
          "duration": "W8 - W9",
          "subtasks": [
            {
              "id": "4.1",
              "name": "Sun Angle LDR & Stepper Closed-Loop Tracking Verified",
              "estHours": 12,
              "status": "In Progress"
            }
          ]
        },
        {
          "id": "5.0",
          "name": "Circulation Pump, Flowmeter & Heat Exchanger",
          "owner": "Fluids Systems Lead",
          "duration": "W10 - W11",
          "subtasks": [
            {
              "id": "5.1",
              "name": "Closed-Loop Pressurized Flow Circuit Leak-Tested",
              "estHours": 12,
              "status": "In Progress"
            }
          ]
        },
        {
          "id": "6.0",
          "name": "Outdoor Solar Field Calorimetric Testing & Thesis",
          "owner": "Project Lead",
          "duration": "W12 - W14",
          "subtasks": [
            {
              "id": "6.1",
              "name": "Collector Thermal Efficiency > 55% Validated; Thesis Defense",
              "estHours": 12,
              "status": "Planned"
            }
          ]
        }
      ],
      "fmea": [
        {
          "subsystem": "Receiver Tube",
          "failureMode": "Glass envelope thermal shock rupture",
          "effect": "Loss of vacuum insulation, 60% drop in thermal output",
          "cause": "Differential thermal expansion between copper absorber tube and borosilicate glass",
          "severity": 8,
          "occurrence": 3,
          "detection": 2,
          "rpn": 48,
          "action": "Use Kovar graded seal glass-to-metal transition joint with flexible expansion bellows.",
          "postActionRPN": 16
        },
        {
          "subsystem": "Parabolic Trough Mirror",
          "failureMode": "Reflective mirror surface delamination / clouding",
          "effect": "Optical reflectivity drops below 70%",
          "cause": "Outdoor UV radiation and moisture ingress behind silver backing",
          "severity": 7,
          "occurrence": 4,
          "detection": 3,
          "rpn": 84,
          "action": "Apply ceramic clear hydrophobic nano-coating over polished 3M solar specular film.",
          "postActionRPN": 21
        },
        {
          "subsystem": "Dual-Axis Tracker",
          "failureMode": "Wind gust drive stall / misalignment",
          "effect": "Focal line shifts off receiver tube, solar concentration lost",
          "cause": "Aerodynamic wind drag torque exceeds stepper motor holding torque",
          "severity": 7,
          "occurrence": 4,
          "detection": 3,
          "rpn": 84,
          "action": "Integrate high-ratio self-locking worm gearbox (60:1 ratio) and anemometer storm stow protocol.",
          "postActionRPN": 21
        }
      ],
      "raciMatrix": [
        {
          "activity": "Kinematic synthesis calculations & MATLAB simulation",
          "leadMech": "A/R",
          "embedded": "I",
          "feaAnalyst": "C",
          "machinist": "I"
        },
        {
          "activity": "SolidWorks 3D CAD modeling & tolerance allocation",
          "leadMech": "A/R",
          "embedded": "C",
          "feaAnalyst": "C",
          "machinist": "C"
        },
        {
          "activity": "ANSYS dynamic stress FEA & contact pressure study",
          "leadMech": "C",
          "embedded": "I",
          "feaAnalyst": "A/R",
          "machinist": "I"
        },
        {
          "activity": "Raw material procurement & vendor quotes",
          "leadMech": "A",
          "embedded": "C",
          "feaAnalyst": "I",
          "machinist": "R"
        },
        {
          "activity": "CNC VMC toolpath generation & Wire EDM slotting",
          "leadMech": "C",
          "embedded": "I",
          "feaAnalyst": "I",
          "machinist": "A/R"
        },
        {
          "activity": "Microcontroller PWM coding & optical sensor wiring",
          "leadMech": "C",
          "embedded": "A/R",
          "feaAnalyst": "I",
          "machinist": "I"
        },
        {
          "activity": "Mechanical subassembly, bearing shimming & runout alignment",
          "leadMech": "A/R",
          "embedded": "C",
          "feaAnalyst": "I",
          "machinist": "R"
        },
        {
          "activity": "Laser displacement repeatability logging & DVT validation",
          "leadMech": "A",
          "embedded": "R",
          "feaAnalyst": "R",
          "machinist": "C"
        },
        {
          "activity": "Final academic report synthesis & thesis compilation",
          "leadMech": "A/R",
          "embedded": "R",
          "feaAnalyst": "R",
          "machinist": "R"
        }
      ],
      "manufacturingRouting": [
        {
          "opNo": 11,
          "part": "Phase 1: Mirror Structure & Profile",
          "machine": "Fiber Laser CNC",
          "operation": "CNC Laser Cutting of Parabolic Ribs",
          "parameters": "Rib profile tolerance ±0.5 mm",
          "tolerance": "Rib profile tolerance ±0.5 mm",
          "qcCheck": "Deburr sharp laser slag before handling."
        },
        {
          "opNo": 12,
          "part": "Phase 1: Mirror Structure & Profile",
          "machine": "MIG Welding Machine (Argon-CO2)",
          "operation": "Longitudinal Stringer Tube Welding",
          "parameters": "Check frame squareness with diagonal gauges",
          "tolerance": "Check frame squareness with diagonal gauges",
          "qcCheck": "Clamp securely on granite flat table to avoid thermal warping."
        },
        {
          "opNo": 13,
          "part": "Phase 1: Mirror Structure & Profile",
          "machine": "Pneumatic Riveting Tool",
          "operation": "Alanod Mirror Sheet Form-Fitting",
          "parameters": "Even contour curvature with rubber-backed washers",
          "tolerance": "Even contour curvature with rubber-backed washers",
          "qcCheck": "Wear nitrile gloves; do not touch specular reflective coating directly."
        },
        {
          "opNo": 24,
          "part": "Phase 2: Receiver Tube & Sun Tracker",
          "machine": "Electroplating Tank",
          "operation": "Selective Coating of Copper Absorber",
          "parameters": "Black chrome thickness 1.5 - 2.0 microns",
          "tolerance": "Black chrome thickness 1.5 - 2.0 microns",
          "qcCheck": "Operate inside chemical fume hood with eye protection."
        },
        {
          "opNo": 25,
          "part": "Phase 2: Receiver Tube & Sun Tracker",
          "machine": "Rotary Vane Vacuum Pump & Viton O-Rings",
          "operation": "Glass Envelope Vacuum Sealing",
          "parameters": "Vacuum pulled to 0.1 mbar to eliminate convection losses",
          "tolerance": "Vacuum pulled to 0.1 mbar to eliminate convection losses",
          "qcCheck": "Inspect glass for micro-scratches prior to evacuation."
        },
        {
          "opNo": 26,
          "part": "Phase 2: Receiver Tube & Sun Tracker",
          "machine": "Dial Indicator & Inclinometer",
          "operation": "Tracking Gimbal Assembly & Alignment",
          "parameters": "Calibrate encoder zero to true solar noon",
          "tolerance": "Calibrate encoder zero to true solar noon",
          "qcCheck": "Cover mirrors with canvas tarp during assembly to prevent focal line burns."
        }
      ],
      "dvtTesting": [
        {
          "id": "DVT-01",
          "title": "Peak Stagnation Temperature (No Flow)",
          "standard": "ISO / ASTM Engineering Benchmark",
          "equipment": "Precision Calibrated Laboratory Rig",
          "procedure": "Evaluate Peak Stagnation Temperature (No Flow) under standard operating regime. Theoretical reference: 260 °C.",
          "acceptanceCriteria": "Deviation within acceptable tolerance (observed: -4.6%)",
          "observedResult": "248 °C (Deviation: -4.6%)",
          "status": "Passed"
        },
        {
          "id": "DVT-02",
          "title": "Peak Fluid Outlet Temperature (Flow 40 L/h)",
          "standard": "ISO / ASTM Engineering Benchmark",
          "equipment": "Precision Calibrated Laboratory Rig",
          "procedure": "Evaluate Peak Fluid Outlet Temperature (Flow 40 L/h) under standard operating regime. Theoretical reference: 112 °C.",
          "acceptanceCriteria": "Deviation within acceptable tolerance (observed: -3.1%)",
          "observedResult": "108.5 °C (Deviation: -3.1%)",
          "status": "Passed"
        },
        {
          "id": "DVT-03",
          "title": "Peak Thermal Efficiency",
          "standard": "ISO / ASTM Engineering Benchmark",
          "equipment": "Precision Calibrated Laboratory Rig",
          "procedure": "Evaluate Peak Thermal Efficiency under standard operating regime. Theoretical reference: 64.5 %.",
          "acceptanceCriteria": "Deviation within acceptable tolerance (observed: -5.1%)",
          "observedResult": "61.2 % (Deviation: -5.1%)",
          "status": "Passed"
        },
        {
          "id": "DVT-04",
          "title": "Tracking Accuracy Misalignment",
          "standard": "ISO / ASTM Engineering Benchmark",
          "equipment": "Precision Calibrated Laboratory Rig",
          "procedure": "Evaluate Tracking Accuracy Misalignment under standard operating regime. Theoretical reference: < 0.5 degrees.",
          "acceptanceCriteria": "Deviation within acceptable tolerance (observed: +0.12°)",
          "observedResult": "0.62 degrees (Deviation: +0.12°)",
          "status": "Passed"
        }
      ],
      "budgetAnalysis": {
        "budgetPlannedINR": 24500,
        "budgetActualINR": 23200,
        "varianceINR": -1300,
        "budgetPlannedUSD": 295,
        "budgetActualUSD": 280,
        "contingencyReserve": "10% included",
        "savingsHighlights": "Optimized vendor sourcing & shared workshop equipment reduced fabrication expenditure."
      }
    }
  },
  {
    "id": "six-dof-robotic-arm",
    "title": "6-DOF Articulated Robotic Arm with Inverse Kinematics & Computer Vision Gripper",
    "shortTitle": "6-DOF Robotic Arm",
    "category": "Robotics & Mechatronics",
    "categorySlug": "robotics-mechatronics",
    "level": "B.Tech Final Year",
    "difficulty": "Advanced",
    "durationWeeks": 16,
    "teamSize": "4 Members",
    "featured": true,
    "rating": 5,
    "estimatedCost": {
      "inr": 34500,
      "usd": 415
    },
    "tags": [
      "Robotics",
      "Inverse Kinematics",
      "Computer Vision",
      "Mechatronics",
      "Denavit-Hartenberg"
    ],
    "badge": "Industry 4.0 Flagship",
    "abstract": "This project details the mechanical design, Denavit-Hartenberg (D-H) kinematic modeling, structural deflection analysis, and ROS2 mechatronic integration of a 6-Degrees-of-Freedom (6-DOF) articulated robotic manipulator. Designed for payload handling up to 1.5 kg with a 650 mm spherical workspace reach, the arm incorporates harmonic planetary gear reducers, closed-loop stepper motors, and an overhead OpenCV computer vision system for automated sorting and pick-and-place tasks.",
    "problemStatement": "Modern flexible manufacturing environments require agile, reconfigurable robotic arms capable of sorting parts with varying orientations. Commercial industrial robotic arms from brands like KUKA or ABB cost tens of thousands of dollars and have closed software architectures. There is an urgent need for an open-architecture, rigid, cost-effective 6-DOF manipulator for small-scale industries and advanced research labs.",
    "objectives": [
      "Derive forward kinematics using the standard Denavit-Hartenberg (D-H) parameter matrix convention.",
      "Implement analytical and numerical inverse kinematics in Python and ROS2 MoveIt for real-time trajectory planning.",
      "Design 3D printable and CNC machined high-strength aerospace aluminium 6061 joint brackets with zero backlash.",
      "Integrate an intelligent parallel-jaw gripper equipped with tactile force sensors and an eye-to-hand OpenCV camera.",
      "Validate trajectory repeatability and payload stiffness under maximum dynamic acceleration."
    ],
    "workingPrinciple": {
      "summary": "The 6-DOF robotic arm mimics the kinematics of the human arm: Waist (Yaw), Shoulder (Pitch), Elbow (Pitch), Wrist Pitch, Wrist Yaw, and Wrist Roll. High-torque closed-loop stepper motors drive planetary reduction gearboxes to achieve precise angular joint positioning. The inverse kinematics engine computes joint angles (theta_1 to theta_6) required to place the end-effector at target Cartesian coordinates (X, Y, Z, Roll, Pitch, Yaw).",
      "fundamentalLaws": [
        "Denavit-Hartenberg (D-H) Matrix Transformation Convention",
        "Lagrange-Euler Dynamic Equations for Multi-Body Robot Manipulators",
        "Jacobian Matrix Velocity Mapping & Singularity Avoidance (det(J) != 0)",
        "Euler-Bernoulli Beam Deflection under Arm Cantilever Bending Moment"
      ],
      "operatingSequence": [
        {
          "step": 1,
          "title": "Visual Object Detection & Pose Estimation",
          "description": "Overhead camera captures RGB image, detects object contours, and computes 2D coordinates and rotation angle via OpenCV."
        },
        {
          "step": 2,
          "title": "Coordinate Frame Transformation",
          "description": "Camera coordinates are transformed into the robot base coordinate frame using calibrated homogeneous transformation matrices."
        },
        {
          "step": 3,
          "title": "Inverse Kinematic Trajectory Generation",
          "description": "MoveIt / Python solver calculates smooth cubic polynomial trajectory angles for all 6 joints while checking collision boundaries."
        },
        {
          "step": 4,
          "title": "Closed-Loop Joint Actuation & Grasping",
          "description": "Step/Direction pulses drive motors with magnetic encoder feedback to position the gripper and secure the part."
        }
      ],
      "energyTransfer": "AC Mains -> 24V DC Switching Power Supply -> Microstepping Drivers -> Stepper Field Windings -> High-Ratio Planetary Reducers -> Rigid Link Angular Rotation -> End-Effector Grasp Force."
    },
    "cadAndSpecs": {
      "dimensions": {
        "length": "650 mm Reach",
        "width": "220 mm Base Dia",
        "height": "780 mm Fully Extended",
        "totalWeight": "11.8 kg"
      },
      "tolerances": "Joint backlash < 0.05°, End-effector positional repeatability ±0.2 mm",
      "materialsMain": [
        "Aluminium 6061-T6 (Base & Shoulder Links)",
        "Carbon Fiber Tubes 30mm OD (Forearm)",
        "PETG 100% Infill (Joint Brackets & Pulley Mounts)",
        "Hardened Chrome Shafts & Deep Groove Bearings"
      ],
      "cadSoftwareRecommended": [
        "SolidWorks 2024",
        "Autodesk Fusion 360",
        "ANSYS Workbench (Modal & Deflection)"
      ],
      "assemblyPartsCount": 84,
      "blueprintFeatures": [
        {
          "view": "Kinematic Skeleton Reach Envelope",
          "description": "Shows 650 mm spherical radius workspace, joint rotation limits (J1: ±160°, J2: -45° to +90°, J3: -120° to +60°).",
          "criticalDimensions": "Max Reach: 650.0 mm"
        },
        {
          "view": "Shoulder Dual-Bearing Pivot Section",
          "description": "Twin angular contact ball bearings preloaded with axial locknut to prevent joint canting under payload.",
          "criticalDimensions": "Bearing Bore: 25.0 mm"
        },
        {
          "view": "Parallel-Jaw End Effector Assembly",
          "description": "Rack and pinion dual synchronous finger mechanism driven by a metal-gear digital servo.",
          "criticalDimensions": "Grip Stroke: 0 to 75 mm"
        }
      ],
      "visualType": "robot-arm"
    },
    "billOfMaterials": [
      {
        "itemNumber": 1,
        "partName": "NEMA 23 Closed-Loop Stepper Motor",
        "specification": "3.0 Nm holding torque, with 1000 CPR Optical Encoder, 4.2A",
        "material": "Neodymium Magnets & Steel Housing",
        "quantity": 3,
        "unitCostINR": 4200,
        "unitCostUSD": 50.5,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 2,
        "partName": "NEMA 17 Stepper Motors (Wrist Joints)",
        "specification": "0.59 Nm holding torque, 1.8° step angle, 1.7A",
        "material": "Standard Stepper Unit",
        "quantity": 3,
        "unitCostINR": 1100,
        "unitCostUSD": 13.2,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 3,
        "partName": "Precision Planetary Gearboxes (10:1 Ratio)",
        "specification": "Backlash < 12 arcmin, 50 Nm peak torque capacity",
        "material": "Carburized Alloy Steel Gears",
        "quantity": 2,
        "unitCostINR": 4800,
        "unitCostUSD": 58,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 4,
        "partName": "Machined Aluminium 6061 Linkages",
        "specification": "CNC milled joint arms, anodized black finish",
        "material": "Aluminium 6061-T6",
        "quantity": 4,
        "unitCostINR": 1800,
        "unitCostUSD": 21.7,
        "procurementType": "Custom CNC Machined"
      },
      {
        "itemNumber": 5,
        "partName": "3D Printed High-Strength Structural Parts",
        "specification": "Carbon-Fiber reinforced PETG, 0.2mm layer height, 80% infill",
        "material": "PETG-CF Filament",
        "quantity": 1,
        "unitCostINR": 2200,
        "unitCostUSD": 26.5,
        "procurementType": "3D Printed (Additive)"
      },
      {
        "itemNumber": 6,
        "partName": "Raspberry Pi 4 Model B (4GB RAM)",
        "specification": "Quad-Core Cortex-A72 1.5GHz with Ubuntu Linux & ROS2 Humble",
        "material": "SBC Electronics Module",
        "quantity": 1,
        "unitCostINR": 5800,
        "unitCostUSD": 70,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 7,
        "partName": "Multi-Axis Stepper Driver Board",
        "specification": "MKS TinyBee 32-bit with 6x TMC2209 SilentStepStick Drivers",
        "material": "PCB Assembly",
        "quantity": 1,
        "unitCostINR": 2900,
        "unitCostUSD": 35,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 8,
        "partName": "Wide-Angle HD Vision Camera",
        "specification": "1080p 60fps USB Camera with Manual Focus Ring",
        "material": "CMOS Sensor",
        "quantity": 1,
        "unitCostINR": 1600,
        "unitCostUSD": 19.3,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 9,
        "partName": "Industrial 24V 15A SMPS Power Supply",
        "specification": "360W MeanWell LRS-350-24, Short circuit / Overload protected",
        "material": "Metal Perforated Enclosure",
        "quantity": 1,
        "unitCostINR": 2400,
        "unitCostUSD": 29,
        "procurementType": "Bought-out (Commercial)"
      }
    ],
    "costBreakdown": {
      "mechanicalHardware": 14500,
      "electronicsAndSensors": 12500,
      "rawMaterials": 4200,
      "machiningAndFabrication": 3300
    },
    "electronicsAndSensors": {
      "microcontroller": "Raspberry Pi 4 (High-Level ROS2) + STM32 32-Bit Motion Controller (Low-Level Real-Time Step Generation)",
      "sensors": [
        {
          "name": "Joint Quadrature Encoders",
          "model": "Integrated 1000 CPR Magnetic / Optical",
          "function": "Closed-loop feedback to prevent missed steps and stall errors",
          "operatingVoltage": "5V DC"
        },
        {
          "name": "Optical Limit Switches (Endstops)",
          "model": "TCST2103 Photomicrosensors",
          "function": "Homing calibration for all 6 axes at startup",
          "operatingVoltage": "5V DC"
        },
        {
          "name": "Tactile Force Resistor",
          "model": "Interlink FSR 402 (0.2N - 20N)",
          "function": "Measures contact grasping force on the gripper pads",
          "operatingVoltage": "5V Analog"
        }
      ],
      "actuators": [
        {
          "name": "Base & Shoulder Closed-Loop Steppers",
          "type": "NEMA 23 with 10:1 Planetary Reducer",
          "torqueOrForce": "25 Nm Effective at Joint",
          "powerRating": "24V 4.2A"
        },
        {
          "name": "Parallel Gripper Servo",
          "type": "Coreless Metal Gear High-Torque Servo",
          "torqueOrForce": "25 kg-cm Grip Force",
          "powerRating": "7.4V 2.5A"
        }
      ],
      "powerSupply": "24V 15A Industrial DC Switching Supply with 5V 5A Step-Down Buck Converter for Pi and Servos",
      "wiringSummary": "Differential step/dir signals routed through braided shielded cables with ferrite beads to suppress EMI noise from motor windings.",
      "circuitPinouts": [
        {
          "pin": "UART / USB",
          "component": "Raspberry Pi <-> STM32",
          "signalType": "115200 Baud Serial Commands"
        },
        {
          "pin": "STEP1-6, DIR1-6",
          "component": "TMC2209 Driver Inputs",
          "signalType": "Opto-Isolated Digital Pulses"
        },
        {
          "pin": "I2C (SDA/SCL)",
          "component": "Gripper Force Sensor ADC",
          "signalType": "I2C Bus Protocol"
        }
      ]
    },
    "designCalculations": {
      "title": "Denavit-Hartenberg (D-H) Transformation and Maximum Joint Torque",
      "overview": "Evaluates the D-H link transformation matrices and calculates the worst-case static holding torque required at Joint 2 (Shoulder) when the arm is fully horizontally outstretched carrying a 1.5 kg payload.",
      "formulas": [
        {
          "name": "D-H Homogeneous Transformation Matrix",
          "symbol": "T_(i-1)^i = Rot_z(theta) * Trans_z(d) * Trans_x(a) * Rot_x(alpha)",
          "formula": "T_{i-1}^i = \\begin{bmatrix} c\\theta & -s\\theta c\\alpha & s\\theta s\\alpha & a c\\theta \\\\ s\\theta & c\\theta c\\alpha & -c\\theta s\\alpha & a s\\theta \\\\ 0 & s\\alpha & c\\alpha & d \\\\ 0 & 0 & 0 & 1 \\end{bmatrix}",
          "explanation": "Computes the 4x4 coordinate transformation from link i-1 to link i based on the 4 D-H parameters (theta, d, a, alpha).",
          "exampleCalculation": "Evaluated recursively for all 6 joints to obtain the end-effector transformation matrix T_0^6.",
          "result": "Complete Forward Kinematics"
        },
        {
          "name": "Maximum Shoulder Joint Torque (tau_2)",
          "symbol": "tau_2 = (m_payload * g * L_arm) + sum(m_link_i * g * L_cg_i)",
          "formula": "\\tau_2 = m_{payload} \\cdot g \\cdot L_{max} + \\sum_{i=2}^6 m_i \\cdot g \\cdot r_{cg,i}",
          "explanation": "Static cantilever bending moment at the shoulder joint when the arm is fully extended at 90 degrees.",
          "exampleCalculation": "tau_payload = 1.5 kg * 9.81 * 0.65 m = 9.56 Nm; tau_links = 12.8 Nm; Total tau_2 = 22.36 Nm.",
          "result": "22.36 Nm Required"
        },
        {
          "name": "Motor-Gearbox Safety Margin (tau_available)",
          "symbol": "tau_available = tau_motor * Gear_ratio * Efficiency",
          "formula": "\\tau_{avail} = \\tau_{motor} \\cdot N \\cdot \\eta_{gear}",
          "explanation": "Available joint torque using a 3.0 Nm NEMA 23 stepper with a 10:1 planetary gearbox (eta = 90%).",
          "exampleCalculation": "tau_avail = 3.0 Nm * 10 * 0.90 = 27.0 Nm (Factor of Safety = 27.0 / 22.36 = 1.21)",
          "result": "27.0 Nm (FOS = 1.21)"
        }
      ],
      "calculatorConfig": {
        "title": "Robotic Joint Torque & Payload Sizing Calculator",
        "param1Name": "payloadKg",
        "param1Label": "End-Effector Payload",
        "param1Unit": "kg",
        "param1Default": 1.5,
        "param1Min": 0.2,
        "param1Max": 4,
        "param1Step": 0.1,
        "param2Name": "reachMm",
        "param2Label": "Horizontal Arm Reach",
        "param2Unit": "mm",
        "param2Default": 650,
        "param2Min": 300,
        "param2Max": 1000,
        "param2Step": 25,
        "formulaType": "torque_power"
      }
    },
    "fabricationSequence": [
      {
        "phase": "Phase 1: Structural Machining & 3D Printing",
        "steps": [
          {
            "order": 1,
            "operation": "CNC Milling of Aluminium Shoulder Brackets",
            "machineOrTool": "4-Axis CNC Machining Center",
            "parametersOrTolerance": "Bearing pocket tolerance +0.015 / -0.000 mm",
            "safetyPrecaution": "Verify tool offsets to prevent bearing seat chatter."
          },
          {
            "order": 2,
            "operation": "Carbon Fiber Tube Cutting & Chamfering",
            "machineOrTool": "Diamond Cut-off Wheel with Water Mist",
            "parametersOrTolerance": "Square cut ±0.1 mm, lengths 320 mm",
            "safetyPrecaution": "Wear N95 respirator mask; carbon fiber dust is toxic."
          },
          {
            "order": 3,
            "operation": "High-Density PETG Printing of Joint Housings",
            "machineOrTool": "Direct Drive FDM 3D Printer",
            "parametersOrTolerance": "0.2mm layer height, 5 perimeters, 80% gyroid infill",
            "safetyPrecaution": "Preheat chamber to 45°C to avoid inter-layer delamination."
          }
        ]
      },
      {
        "phase": "Phase 2: Electro-Mechanical Integration",
        "steps": [
          {
            "order": 4,
            "operation": "Planetary Reducer & Motor Coupling",
            "machineOrTool": "Torque Wrench & Threadlocker",
            "parametersOrTolerance": "Tighten clamping collars to 4.5 Nm",
            "safetyPrecaution": "Ensure motor shaft keyway is properly engaged without axial pre-load on motor bearings."
          },
          {
            "order": 5,
            "operation": "Cable Harness Looming with Drag Chains",
            "machineOrTool": "Spiral Loom & Heat Shrink",
            "parametersOrTolerance": "Allow 15% slack at maximum joint deflection angles",
            "safetyPrecaution": "Separate encoder signal wires from high-current motor phase lines to prevent false step triggers."
          },
          {
            "order": 6,
            "operation": "Kinematic Zero Calibration & OpenCV Alignment",
            "machineOrTool": "Calibration Chessboard Target (8x6 squares)",
            "parametersOrTolerance": "Intrinsic matrix reprojection error < 0.2 pixels",
            "safetyPrecaution": "Set low motor current limit (30%) during initial calibration homing to prevent collision damage."
          }
        ]
      }
    ],
    "testingAndResults": {
      "testMethodology": "The 6-DOF arm was tested in an automated pick-and-place cycle over 500 consecutive repetitions. An overhead computer vision camera placed objects at randomized positions and orientations on a test grid table. Positional accuracy, payload deflection, and cycle time were recorded.",
      "performanceMetrics": [
        {
          "metric": "Payload Capacity",
          "theoreticalValue": "1.50",
          "experimentalValue": "1.45",
          "unit": "kg",
          "deviationPercent": "-3.3%",
          "status": "Optimal"
        },
        {
          "metric": "Max Reach Radius",
          "theoreticalValue": "650",
          "experimentalValue": "648",
          "unit": "mm",
          "deviationPercent": "-0.3%",
          "status": "Passed"
        },
        {
          "metric": "Positional Repeatability",
          "theoreticalValue": "±0.15",
          "experimentalValue": "±0.22",
          "unit": "mm",
          "deviationPercent": "+0.07 mm",
          "status": "Optimal"
        },
        {
          "metric": "Sorting Cycle Time per Part",
          "theoreticalValue": "3.5",
          "experimentalValue": "3.8",
          "unit": "seconds",
          "deviationPercent": "+8.5%",
          "status": "Passed"
        }
      ],
      "chartData": {
        "xLabel": "Arm Horizontal Extension (mm)",
        "yTheoreticalLabel": "Theoretical Cantilever Deflection (mm)",
        "yActualLabel": "Measured Dial Gauge Deflection (mm)",
        "dataPoints": [
          {
            "x": 100,
            "yTheoretical": 0.02,
            "yActual": 0.03
          },
          {
            "x": 200,
            "yTheoretical": 0.08,
            "yActual": 0.11
          },
          {
            "x": 300,
            "yTheoretical": 0.22,
            "yActual": 0.28
          },
          {
            "x": 400,
            "yTheoretical": 0.45,
            "yActual": 0.54
          },
          {
            "x": 500,
            "yTheoretical": 0.82,
            "yActual": 0.95
          },
          {
            "x": 600,
            "yTheoretical": 1.35,
            "yActual": 1.52
          },
          {
            "x": 650,
            "yTheoretical": 1.7,
            "yActual": 1.88
          }
        ]
      },
      "conclusions": "The 6-DOF robotic manipulator demonstrated industrial-grade repeatability of ±0.22 mm with a 1.45 kg payload. The OpenCV vision pipeline successfully identified and sorted parts with a 98.4% success rate across randomized orientations."
    },
    "softwareStack": {
      "cad": [
        "SolidWorks 2024 (Assembly & Motion Study)",
        "Fusion 360 (Joint FEA Analysis)"
      ],
      "caeSimulation": [
        "MATLAB Robotics System Toolbox",
        "ROS2 Humble + MoveIt 2 (Motion Planning & Inverse Kinematics)"
      ],
      "programmingAndIde": [
        "Python 3.10 (OpenCV 4.8 & PyTorch)",
        "C++ (Low-Level Real-Time Motor Control)",
        "VS Code"
      ]
    },
    "prosAndCons": {
      "pros": [
        "Full 6-DOF spherical flexibility allows arbitrary 6D position and orientation (X, Y, Z, R, P, Y).",
        "Open-source ROS2 architecture allows easy integration with AI vision models and external sensors.",
        "Cost is under $450, compared to $15,000+ for commercial cobots.",
        "Closed-loop stepper feedback prevents lost steps without requiring costly industrial servo packs."
      ],
      "cons": [
        "Planetary gearboxes have slight residual backlash (~10 arcmin), limiting sub-0.1 mm precision tasks.",
        "Payload limited to 1.5 kg; higher payloads require cycloidal or strain wave (harmonic) reducers."
      ],
      "industrialLimitations": "Requires structural anchoring to a rigid base table to avoid vibration transmission during rapid deceleration."
    },
    "futureScope": [
      "Replacing planetary gearboxes with zero-backlash 3D-printed cycloidal drives or commercial harmonic drives.",
      "Implementing deep reinforcement learning (PPO) for vision-guided grasping of novel and soft objects.",
      "Adding a 6-axis force-torque sensor at the wrist for compliant assembly tasks (e.g. peg-in-hole)."
    ],
    "references": [
      "Introduction to Robotics: Mechanics and Control, 4th Edition, John J. Craig.",
      "Robot Modeling and Control, Mark W. Spong, Seth Hutchinson, and M. Vidyasagar.",
      "IEEE Transactions on Robotics: Kinematic and Dynamic Analysis of 6-DOF Manipulators (Vol. 36, 2020)."
    ],
    "reportChapters": [
      {
        "chapterNumber": 1,
        "title": "Introduction & Robotics in Industry 4.0",
        "summary": "Evolution of serial articulated manipulators and role in automated flexible manufacturing cells."
      },
      {
        "chapterNumber": 2,
        "title": "Denavit-Hartenberg Kinematic Formulations",
        "summary": "Step-by-step frame assignment, D-H parameter tables, and forward/inverse kinematic mathematical derivations."
      },
      {
        "chapterNumber": 3,
        "title": "Dynamic Torque Sizing & Structural FEA",
        "summary": "Newton-Euler dynamic equations, joint torque curves under maximum payload, and ANSYS stress verification."
      },
      {
        "chapterNumber": 4,
        "title": "Mechanical Fabrication & 3D Printing Protocols",
        "summary": "CNC machining parameters, carbon fiber composite integration, and precision assembly of bearing hubs."
      },
      {
        "chapterNumber": 5,
        "title": "Computer Vision & ROS2 MoveIt Integration",
        "summary": "OpenCV contour segmentation, eye-to-hand camera calibration matrix, and trajectory execution in ROS2."
      },
      {
        "chapterNumber": 6,
        "title": "Experimental Validation, Cycle Times & Conclusion",
        "summary": "Repeatability measurements, payload deflection graphs, and economic feasibility comparison with commercial arms."
      }
    ],
    "planning": {
      "durationWeeks": 16,
      "scheduleType": "16-Week Mechatronics & Kinematics Capstone Roadmap",
      "phases": [
        {
          "number": 1,
          "title": "Kinematic DH Matrix Synthesis & Workspace Reach",
          "weeks": "W1 - W3",
          "status": "Completed",
          "completionPercent": 100,
          "milestone": "Forward & Inverse Kinematics Closed-Form Solution Verified",
          "leadRole": "Robotics Algorithm Lead"
        },
        {
          "number": 2,
          "title": "Joint Torque Dynamic Sizing & CAD Modeling",
          "weeks": "W4 - W6",
          "status": "Completed",
          "completionPercent": 100,
          "milestone": "FEA Harmonic Drive Deflection & Joint CAD PDR",
          "leadRole": "Mechanical Design Lead"
        },
        {
          "number": 3,
          "title": "Precision CNC Aluminum Link Machining & 3D Printing",
          "weeks": "W7 - W9",
          "status": "Completed",
          "completionPercent": 100,
          "milestone": "Structural Arm Links & Bearing Cartridges Inspected",
          "leadRole": "CNC Manufacturing Lead"
        },
        {
          "number": 4,
          "title": "CAN-Bus Joint Actuator & Encoder Integration",
          "weeks": "W10 - W12",
          "status": "In Progress",
          "completionPercent": 75,
          "milestone": "6-Axis Coordinated Trajectory Motion Achieved",
          "leadRole": "Embedded Systems Engineer"
        },
        {
          "number": 5,
          "title": "ROS2 MoveIt2 Inverse Kinematics & Vision Gripper",
          "weeks": "W13 - W14",
          "status": "In Progress",
          "completionPercent": 50,
          "milestone": "Autonomous Pick-and-Place from OpenCV Camera Feed",
          "leadRole": "AI / Robotics Software Lead"
        },
        {
          "number": 6,
          "title": "Payload ISO 9283 Repeatability Testing & Defense",
          "weeks": "W15 - W16",
          "status": "Planned",
          "completionPercent": 15,
          "milestone": "Position Repeatability < ±0.5 mm Certified; Defense Complete",
          "leadRole": "Project Team Lead"
        }
      ],
      "wbs": [
        {
          "id": "1.0",
          "name": "Kinematic DH Matrix Synthesis & Workspace Reach",
          "owner": "Robotics Algorithm Lead",
          "duration": "W1 - W3",
          "subtasks": [
            {
              "id": "1.1",
              "name": "Forward & Inverse Kinematics Closed-Form Solution Verified",
              "estHours": 12,
              "status": "Done"
            }
          ]
        },
        {
          "id": "2.0",
          "name": "Joint Torque Dynamic Sizing & CAD Modeling",
          "owner": "Mechanical Design Lead",
          "duration": "W4 - W6",
          "subtasks": [
            {
              "id": "2.1",
              "name": "FEA Harmonic Drive Deflection & Joint CAD PDR",
              "estHours": 12,
              "status": "Done"
            }
          ]
        },
        {
          "id": "3.0",
          "name": "Precision CNC Aluminum Link Machining & 3D Printing",
          "owner": "CNC Manufacturing Lead",
          "duration": "W7 - W9",
          "subtasks": [
            {
              "id": "3.1",
              "name": "Structural Arm Links & Bearing Cartridges Inspected",
              "estHours": 12,
              "status": "Done"
            }
          ]
        },
        {
          "id": "4.0",
          "name": "CAN-Bus Joint Actuator & Encoder Integration",
          "owner": "Embedded Systems Engineer",
          "duration": "W10 - W12",
          "subtasks": [
            {
              "id": "4.1",
              "name": "6-Axis Coordinated Trajectory Motion Achieved",
              "estHours": 12,
              "status": "In Progress"
            }
          ]
        },
        {
          "id": "5.0",
          "name": "ROS2 MoveIt2 Inverse Kinematics & Vision Gripper",
          "owner": "AI / Robotics Software Lead",
          "duration": "W13 - W14",
          "subtasks": [
            {
              "id": "5.1",
              "name": "Autonomous Pick-and-Place from OpenCV Camera Feed",
              "estHours": 12,
              "status": "In Progress"
            }
          ]
        },
        {
          "id": "6.0",
          "name": "Payload ISO 9283 Repeatability Testing & Defense",
          "owner": "Project Team Lead",
          "duration": "W15 - W16",
          "subtasks": [
            {
              "id": "6.1",
              "name": "Position Repeatability < ±0.5 mm Certified; Defense Complete",
              "estHours": 12,
              "status": "Planned"
            }
          ]
        }
      ],
      "fmea": [
        {
          "subsystem": "Elbow Joint J3",
          "failureMode": "Planetary gear teeth stripping at maximum horizontal reach",
          "effect": "Arm collapses under cantilevered payload",
          "cause": "Dynamic inertia torque spike during emergency stop with 1.5 kg payload",
          "severity": 9,
          "occurrence": 3,
          "detection": 2,
          "rpn": 54,
          "action": "Upgrade Joint J2 and J3 to zero-backlash cycloidal speed reducers with safety factor 2.5.",
          "postActionRPN": 18
        },
        {
          "subsystem": "Encoder Telemetry",
          "failureMode": "Magnetic encoder angle drift due to motor EMI",
          "effect": "Position error accumulates, trajectory jerking",
          "cause": "High PWM switching current in adjacent motor phase cables induces magnetic noise",
          "severity": 7,
          "occurrence": 4,
          "detection": 3,
          "rpn": 84,
          "action": "Use differential RS-485 shielded twisted pair wiring and hardware ground plane isolation.",
          "postActionRPN": 21
        },
        {
          "subsystem": "End-Effector Gripper",
          "failureMode": "Object slip during high-acceleration trajectory",
          "effect": "Dropped payload, assembly cycle failure",
          "cause": "Inadequate normal gripping friction force on slippery plastic containers",
          "severity": 6,
          "occurrence": 4,
          "detection": 2,
          "rpn": 48,
          "action": "Incorporate silicone elastomer fingertips with embedded FSR pressure feedback.",
          "postActionRPN": 16
        }
      ],
      "raciMatrix": [
        {
          "activity": "Kinematic synthesis calculations & MATLAB simulation",
          "leadMech": "A/R",
          "embedded": "I",
          "feaAnalyst": "C",
          "machinist": "I"
        },
        {
          "activity": "SolidWorks 3D CAD modeling & tolerance allocation",
          "leadMech": "A/R",
          "embedded": "C",
          "feaAnalyst": "C",
          "machinist": "C"
        },
        {
          "activity": "ANSYS dynamic stress FEA & contact pressure study",
          "leadMech": "C",
          "embedded": "I",
          "feaAnalyst": "A/R",
          "machinist": "I"
        },
        {
          "activity": "Raw material procurement & vendor quotes",
          "leadMech": "A",
          "embedded": "C",
          "feaAnalyst": "I",
          "machinist": "R"
        },
        {
          "activity": "CNC VMC toolpath generation & Wire EDM slotting",
          "leadMech": "C",
          "embedded": "I",
          "feaAnalyst": "I",
          "machinist": "A/R"
        },
        {
          "activity": "Microcontroller PWM coding & optical sensor wiring",
          "leadMech": "C",
          "embedded": "A/R",
          "feaAnalyst": "I",
          "machinist": "I"
        },
        {
          "activity": "Mechanical subassembly, bearing shimming & runout alignment",
          "leadMech": "A/R",
          "embedded": "C",
          "feaAnalyst": "I",
          "machinist": "R"
        },
        {
          "activity": "Laser displacement repeatability logging & DVT validation",
          "leadMech": "A",
          "embedded": "R",
          "feaAnalyst": "R",
          "machinist": "C"
        },
        {
          "activity": "Final academic report synthesis & thesis compilation",
          "leadMech": "A/R",
          "embedded": "R",
          "feaAnalyst": "R",
          "machinist": "R"
        }
      ],
      "manufacturingRouting": [
        {
          "opNo": 11,
          "part": "Phase 1: Structural Machining & 3D Printing",
          "machine": "4-Axis CNC Machining Center",
          "operation": "CNC Milling of Aluminium Shoulder Brackets",
          "parameters": "Bearing pocket tolerance +0.015 / -0.000 mm",
          "tolerance": "Bearing pocket tolerance +0.015 / -0.000 mm",
          "qcCheck": "Verify tool offsets to prevent bearing seat chatter."
        },
        {
          "opNo": 12,
          "part": "Phase 1: Structural Machining & 3D Printing",
          "machine": "Diamond Cut-off Wheel with Water Mist",
          "operation": "Carbon Fiber Tube Cutting & Chamfering",
          "parameters": "Square cut ±0.1 mm, lengths 320 mm",
          "tolerance": "Square cut ±0.1 mm, lengths 320 mm",
          "qcCheck": "Wear N95 respirator mask; carbon fiber dust is toxic."
        },
        {
          "opNo": 13,
          "part": "Phase 1: Structural Machining & 3D Printing",
          "machine": "Direct Drive FDM 3D Printer",
          "operation": "High-Density PETG Printing of Joint Housings",
          "parameters": "0.2mm layer height, 5 perimeters, 80% gyroid infill",
          "tolerance": "0.2mm layer height, 5 perimeters, 80% gyroid infill",
          "qcCheck": "Preheat chamber to 45°C to avoid inter-layer delamination."
        },
        {
          "opNo": 24,
          "part": "Phase 2: Electro-Mechanical Integration",
          "machine": "Torque Wrench & Threadlocker",
          "operation": "Planetary Reducer & Motor Coupling",
          "parameters": "Tighten clamping collars to 4.5 Nm",
          "tolerance": "Tighten clamping collars to 4.5 Nm",
          "qcCheck": "Ensure motor shaft keyway is properly engaged without axial pre-load on motor bearings."
        },
        {
          "opNo": 25,
          "part": "Phase 2: Electro-Mechanical Integration",
          "machine": "Spiral Loom & Heat Shrink",
          "operation": "Cable Harness Looming with Drag Chains",
          "parameters": "Allow 15% slack at maximum joint deflection angles",
          "tolerance": "Allow 15% slack at maximum joint deflection angles",
          "qcCheck": "Separate encoder signal wires from high-current motor phase lines to prevent false step triggers."
        },
        {
          "opNo": 26,
          "part": "Phase 2: Electro-Mechanical Integration",
          "machine": "Calibration Chessboard Target (8x6 squares)",
          "operation": "Kinematic Zero Calibration & OpenCV Alignment",
          "parameters": "Intrinsic matrix reprojection error < 0.2 pixels",
          "tolerance": "Intrinsic matrix reprojection error < 0.2 pixels",
          "qcCheck": "Set low motor current limit (30%) during initial calibration homing to prevent collision damage."
        }
      ],
      "dvtTesting": [
        {
          "id": "DVT-01",
          "title": "Payload Capacity",
          "standard": "ISO / ASTM Engineering Benchmark",
          "equipment": "Precision Calibrated Laboratory Rig",
          "procedure": "Evaluate Payload Capacity under standard operating regime. Theoretical reference: 1.50 kg.",
          "acceptanceCriteria": "Deviation within acceptable tolerance (observed: -3.3%)",
          "observedResult": "1.45 kg (Deviation: -3.3%)",
          "status": "Passed"
        },
        {
          "id": "DVT-02",
          "title": "Max Reach Radius",
          "standard": "ISO / ASTM Engineering Benchmark",
          "equipment": "Precision Calibrated Laboratory Rig",
          "procedure": "Evaluate Max Reach Radius under standard operating regime. Theoretical reference: 650 mm.",
          "acceptanceCriteria": "Deviation within acceptable tolerance (observed: -0.3%)",
          "observedResult": "648 mm (Deviation: -0.3%)",
          "status": "Passed"
        },
        {
          "id": "DVT-03",
          "title": "Positional Repeatability",
          "standard": "ISO / ASTM Engineering Benchmark",
          "equipment": "Precision Calibrated Laboratory Rig",
          "procedure": "Evaluate Positional Repeatability under standard operating regime. Theoretical reference: ±0.15 mm.",
          "acceptanceCriteria": "Deviation within acceptable tolerance (observed: +0.07 mm)",
          "observedResult": "±0.22 mm (Deviation: +0.07 mm)",
          "status": "Passed"
        },
        {
          "id": "DVT-04",
          "title": "Sorting Cycle Time per Part",
          "standard": "ISO / ASTM Engineering Benchmark",
          "equipment": "Precision Calibrated Laboratory Rig",
          "procedure": "Evaluate Sorting Cycle Time per Part under standard operating regime. Theoretical reference: 3.5 seconds.",
          "acceptanceCriteria": "Deviation within acceptable tolerance (observed: +8.5%)",
          "observedResult": "3.8 seconds (Deviation: +8.5%)",
          "status": "Passed"
        }
      ],
      "budgetAnalysis": {
        "budgetPlannedINR": 38000,
        "budgetActualINR": 36400,
        "varianceINR": -1600,
        "budgetPlannedUSD": 450,
        "budgetActualUSD": 435,
        "contingencyReserve": "10% included",
        "savingsHighlights": "Optimized vendor sourcing & shared workshop equipment reduced fabrication expenditure."
      }
    }
  },
  {
    "id": "regenerative-braking-ev",
    "title": "Kinetic Energy Recovery System (KERS) with Supercapacitor & Flywheel Buffer",
    "shortTitle": "EV Regenerative Braking",
    "category": "Automotive & EV",
    "categorySlug": "automotive-ev",
    "level": "B.Tech Final Year",
    "difficulty": "Advanced",
    "durationWeeks": 12,
    "teamSize": "3-4 Members",
    "featured": true,
    "rating": 4.9,
    "estimatedCost": {
      "inr": 28000,
      "usd": 335
    },
    "tags": [
      "Automotive",
      "Electric Vehicle",
      "Regenerative Braking",
      "Supercapacitor",
      "Energy Recovery"
    ],
    "badge": "Top EV Engineering",
    "abstract": "This project presents an electro-mechanical hybrid Kinetic Energy Recovery System (KERS) for electric two-wheelers and light EVs. The system integrates a Brushless DC (BLDC) hub motor operating in generator mode during braking, coupled to a high-rate graphene supercapacitor bank and a mechanical carbon-composite flywheel buffer through an intelligent bidirectional buck-boost converter. The setup recovers up to 28% of braking kinetic energy while reducing thermal stress on mechanical friction brakes.",
    "problemStatement": "In urban stop-and-go driving, more than 40% of an electric vehicle's propulsion energy is dissipated as waste heat in conventional friction brakes. While standard EV regenerative braking feeds power back into chemical lithium-ion batteries, standard Li-ion cells have limited charge acceptance rates (C-rate), leading to rapid cell degradation, high internal heat generation, and clipped regenerative braking force. A dedicated ultra-fast buffer is essential for maximum energy recovery.",
    "objectives": [
      "Design a dual-storage regenerative braking test rig simulating EV inertia using a high-density rotating flywheel.",
      "Develop a bidirectional synchronous buck-boost converter for dynamic braking voltage regulation.",
      "Integrate an ultracapacitor bank (16V, 500F) capable of accepting high current pulses up to 60A during hard braking.",
      "Implement a programmable electronic brake controller balancing regenerative retarding torque with hydraulic disc braking.",
      "Quantify energy recovery efficiency, vehicle deceleration rate, and brake pad temperature reduction."
    ],
    "workingPrinciple": {
      "summary": "When the driver depresses the brake pedal, the electronic brake controller senses pedal travel and switches the BLDC motor driver into regenerative mode. The spinning vehicle wheels turn the BLDC motor rotor, generating 3-phase alternating current back-EMF. A synchronous active rectifier rectifies this power, and a bidirectional DC-DC converter steps up/down the voltage to rapidly charge the supercapacitor bank. When vehicle acceleration resumes, the stored supercapacitor charge is instantly discharged to boost motor launch.",
      "fundamentalLaws": [
        "Faraday's Law of Electromagnetic Induction (e = -dPhi / dt)",
        "Conservation of Energy: Kinetic Energy E_k = 0.5 * m * v² + 0.5 * I * omega²",
        "Lenz's Law (Electromagnetic Retarding Torque: T_b = k_t * I_regen)",
        "Capacitor Energy Storage Formula: E_c = 0.5 * C * (V_max² - V_min²)"
      ],
      "operatingSequence": [
        {
          "step": 1,
          "title": "Brake Demand Sensing",
          "description": "Hall-effect brake pedal sensor detects braking intent and pressure demand."
        },
        {
          "step": 2,
          "title": "Regenerative Counter-Torque",
          "description": "Motor inverter switches MOSFET duty cycles, causing motor phase currents to oppose rotor rotation, producing retarding torque."
        },
        {
          "step": 3,
          "title": "Ultra-Fast Energy Capture",
          "description": "Braking current of 30-50A surges into the 500F supercapacitor bank within 2.5 seconds with zero battery degradation."
        },
        {
          "step": 4,
          "title": "Launch Boost Re-injection",
          "description": "Upon throttle application, a high-current H-bridge discharges the supercapacitor to propel the vehicle, preserving battery state-of-charge."
        }
      ],
      "energyTransfer": "Kinetic Energy of Rolling Vehicle -> BLDC Motor Reverse Torque -> 3-Phase AC Back-EMF -> Active Synchronous Rectifier -> DC-DC Boost Converter -> Supercapacitor Electrostatic Storage."
    },
    "cadAndSpecs": {
      "dimensions": {
        "length": "850 mm",
        "width": "550 mm",
        "height": "420 mm",
        "totalWeight": "28.5 kg"
      },
      "tolerances": "Flywheel dynamic balance grade: ISO 1940 G2.5, Shaft runout < 0.02 mm",
      "materialsMain": [
        "Cast Steel Flywheel (Inertia Disk)",
        "Aluminium 6061-T6 (Frame & Enclosure)",
        "Graphene Ultracapacitor Cells (Maxwell 2.7V 3000F)",
        "Copper Busbars (High-Current Links)"
      ],
      "cadSoftwareRecommended": [
        "SolidWorks 2024",
        "MATLAB Simulink (Simscape Driveline)",
        "ANSYS Maxwell (Electromagnetic FEA)"
      ],
      "assemblyPartsCount": 46,
      "blueprintFeatures": [
        {
          "view": "Inertia Dyno Bench Layout",
          "description": "High-inertia steel flywheel (OD 300 mm x 40 mm thk) coupled to 1000W BLDC hub motor via flexible spider coupling.",
          "criticalDimensions": "Flywheel Moment of Inertia I = 0.42 kg-m²"
        },
        {
          "view": "Electronic Control Unit (ECU) Enclosure",
          "description": "Extruded aluminium heatsink case with dual 12V cooling fans and busbar terminal isolators.",
          "criticalDimensions": "Case Size: 240 x 160 x 80 mm"
        },
        {
          "view": "Hydraulic-Brake Blending Caliper",
          "description": "Dual-circuit master cylinder with inline pressure transducer for regenerative-to-friction handoff.",
          "criticalDimensions": "Piston Bore: 12.7 mm"
        }
      ],
      "visualType": "ev-steering"
    },
    "billOfMaterials": [
      {
        "itemNumber": 1,
        "partName": "BLDC Hub Motor with Hall Sensors",
        "specification": "48V 1000W, 450 RPM, 35 Nm Peak Torque, Regenerative Enabled",
        "material": "Neodymium Magnets / Copper Stator",
        "quantity": 1,
        "unitCostINR": 6800,
        "unitCostUSD": 82,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 2,
        "partName": "Graphene Supercapacitor Bank (6S Module)",
        "specification": "16.2V Rated, 500F Capacity, ESR < 2.5 mOhm, Max Current 120A",
        "material": "Activated Graphene Carbon",
        "quantity": 1,
        "unitCostINR": 8200,
        "unitCostUSD": 99,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 3,
        "partName": "Bidirectional Synchronous Buck-Boost Converter",
        "specification": "48V to 16V, 60A Continuous, Synchronous MOSFET H-Bridge",
        "material": "High-Frequency Ferrite Core & IRFP4468 MOSFETs",
        "quantity": 1,
        "unitCostINR": 4500,
        "unitCostUSD": 54,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 4,
        "partName": "Balanced High-Inertia Steel Flywheel",
        "specification": "OD 300mm x 40mm thickness, dynamically balanced to 1200 RPM",
        "material": "EN8 Mild Steel (Turned & Ground)",
        "quantity": 1,
        "unitCostINR": 3200,
        "unitCostUSD": 38.5,
        "procurementType": "Custom CNC Machined"
      },
      {
        "itemNumber": 5,
        "partName": "Hydraulic Disc Brake System with Transducer",
        "specification": "Motorcycle 220mm disc, single-piston floating caliper, 0-100 bar sensor",
        "material": "Stainless Steel 420 Disc",
        "quantity": 1,
        "unitCostINR": 2100,
        "unitCostUSD": 25.3,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 6,
        "partName": "Rigid Test Bench Structural Stand",
        "specification": "Heavy 50mm x 50mm x 3mm mild steel welded box section",
        "material": "Mild Steel IS 2062",
        "quantity": 1,
        "unitCostINR": 2400,
        "unitCostUSD": 29,
        "procurementType": "Laser Cut / Welded"
      },
      {
        "itemNumber": 7,
        "partName": "Hall Current & Voltage Sensor Modules",
        "specification": "LEM CASR 50-NP (Current) & Isolated Voltage Dividers",
        "material": "Precision Electronic Sensors",
        "quantity": 3,
        "unitCostINR": 650,
        "unitCostUSD": 7.8,
        "procurementType": "Bought-out (Commercial)"
      }
    ],
    "costBreakdown": {
      "mechanicalHardware": 9800,
      "electronicsAndSensors": 13500,
      "rawMaterials": 3200,
      "machiningAndFabrication": 2500
    },
    "electronicsAndSensors": {
      "microcontroller": "STM32F405 168MHz ARM Cortex-M4 with Hardware FPU (Real-Time Control Loop)",
      "sensors": [
        {
          "name": "Non-Contact Brake Pressure Sensor",
          "model": "Honeywell 0-100 Bar Pressure Transducer",
          "function": "Detects driver hydraulic pedal braking force",
          "operatingVoltage": "5V Analog (0.5 - 4.5V)"
        },
        {
          "name": "Hall Current Sensor",
          "model": "ACS758LCB-100B Bi-directional",
          "function": "Monitors supercapacitor charging and discharging current",
          "operatingVoltage": "5V DC"
        },
        {
          "name": "High-Resolution Quadrature Optical Encoder",
          "model": "Avago HEDS-5540 500 CPR",
          "function": "Measures precise flywheel RPM and deceleration rate",
          "operatingVoltage": "5V DC"
        },
        {
          "name": "Infrared Brake Rotor Pyrometer",
          "model": "Melexis MLX90614 Contactless IR",
          "function": "Measures disc brake rotor temperature rise",
          "operatingVoltage": "3.3V I2C"
        }
      ],
      "actuators": [
        {
          "name": "BLDC Hub Motor / Generator",
          "type": "Brushless Permanent Magnet Synchronous",
          "torqueOrForce": "35 Nm Peak Braking Torque",
          "powerRating": "48V 1000W"
        }
      ],
      "powerSupply": "Primary 48V 20Ah Li-ion Battery Pack paired with 16V 500F Supercapacitor Buffer",
      "wiringSummary": "High-current paths wired using 4 AWG ultra-flexible silicone wire with hydraulic crimped copper lugs. Isolated CAN bus communicates with vehicle dashboard.",
      "circuitPinouts": [
        {
          "pin": "TIM1 PWM Channels (CH1-CH4)",
          "component": "Synchronous Buck-Boost MOSFET Gates",
          "signalType": "Complementary PWM with Dead-Time (25 kHz)"
        },
        {
          "pin": "ADC1_IN0, ADC1_IN1",
          "component": "Current & Voltage Sensors",
          "signalType": "12-bit Fast Analog Sampling"
        },
        {
          "pin": "CAN_TX, CAN_RX",
          "component": "MCP2551 CAN Transceiver",
          "signalType": "Differential Industrial CAN Bus"
        }
      ]
    },
    "designCalculations": {
      "title": "Kinetic Energy Storage and Braking Power Calculations",
      "overview": "Evaluates the kinetic energy stored in the rotating vehicle flywheel at 45 km/h, the required regenerative braking retarding torque, and supercapacitor energy storage capacity.",
      "formulas": [
        {
          "name": "Rotating Flywheel Kinetic Energy (E_k)",
          "symbol": "E_k = 0.5 * I * omega²",
          "formula": "E_k = \\frac{1}{2} \\cdot I \\cdot \\omega^2",
          "explanation": "Kinetic energy stored in an inertia flywheel with moment of inertia I = 0.42 kg-m² rotating at 450 RPM (omega = 47.12 rad/s).",
          "exampleCalculation": "E_k = 0.5 * 0.42 * (47.12)² = 0.21 * 2220.3 = 466.26 Joules",
          "result": "466.3 Joules per Test Run"
        },
        {
          "name": "Supercapacitor Usable Energy Storage (E_cap)",
          "symbol": "E_cap = 0.5 * C * (V_max² - V_min²)",
          "formula": "E_{cap} = \\frac{1}{2} \\cdot C \\cdot (V_{max}^2 - V_{min}^2)",
          "explanation": "Energy absorbed by 500F capacitor bank charged from 8V (50% charge) to 16V (100% full).",
          "exampleCalculation": "E_cap = 0.5 * 500 * (16² - 8²) = 250 * (256 - 64) = 250 * 192 = 48,000 Joules (13.3 Wh)",
          "result": "48.0 kJ (13.3 Wh)"
        },
        {
          "name": "Regenerative Retarding Torque (T_brake)",
          "symbol": "T_brake = (P_electrical / omega) * (1 / eta_gen)",
          "formula": "T_{brake} = \\frac{P_{elec}}{\\omega \\cdot \\eta_{gen}}",
          "explanation": "Electromagnetic braking counter-torque developed when regenerating 750W electrical power at 450 RPM.",
          "exampleCalculation": "T_brake = 750 / (47.12 * 0.88) = 750 / 41.46 = 18.09 Nm",
          "result": "18.1 Nm Braking Torque"
        }
      ],
      "calculatorConfig": {
        "title": "EV Kinetic Energy Recovery Calculator",
        "param1Name": "vehicleSpeedKmph",
        "param1Label": "Vehicle Speed",
        "param1Unit": "km/h",
        "param1Default": 45,
        "param1Min": 15,
        "param1Max": 80,
        "param1Step": 5,
        "param2Name": "vehicleMassKg",
        "param2Label": "Vehicle Total Mass",
        "param2Unit": "kg",
        "param2Default": 120,
        "param2Min": 60,
        "param2Max": 300,
        "param2Step": 10,
        "formulaType": "torque_power"
      }
    },
    "fabricationSequence": [
      {
        "phase": "Phase 1: Dyno Flywheel & Mechanical Mounting",
        "steps": [
          {
            "order": 1,
            "operation": "Precision Lathe Turning of Steel Flywheel",
            "machineOrTool": "Heavy-Duty Center Lathe",
            "parametersOrTolerance": "Face and bore runout within 0.02 mm",
            "safetyPrecaution": "Use heavy-duty carbide tooling; secure chuck jaws with high clamping force."
          },
          {
            "order": 2,
            "operation": "Dynamic Balancing of Rotating Mass",
            "machineOrTool": "Dual-Plane Dynamic Balancing Rig",
            "parametersOrTolerance": "Residual unbalance < 2.5 g-mm/kg (ISO 1940 G2.5)",
            "safetyPrecaution": "Never operate above balancing speed without steel safety enclosure hood."
          },
          {
            "order": 3,
            "operation": "Test Bench Frame Welding & Motor Mounting",
            "machineOrTool": "MIG Welding & Magnetic Base Drill",
            "parametersOrTolerance": "Shaft center height alignment within ±0.1 mm",
            "safetyPrecaution": "Use anti-vibration rubber isolation pads under motor base feet."
          }
        ]
      },
      {
        "phase": "Phase 2: Power Electronics & Calibration",
        "steps": [
          {
            "order": 4,
            "operation": "Buck-Boost Converter PCB Assembly",
            "machineOrTool": "SMD Reflow Oven & Hand Soldering",
            "parametersOrTolerance": "Double solder layer on high-current copper traces",
            "safetyPrecaution": "Test gate driver waveforms with an oscilloscope before applying 48V power."
          },
          {
            "order": 5,
            "operation": "Supercapacitor Cell Balancing Module Wiring",
            "machineOrTool": "Active Balancing Circuit Installation",
            "parametersOrTolerance": "Voltage delta across any cell < 15 mV",
            "safetyPrecaution": "Wear safety glasses; shorting supercapacitors causes instantaneous arc flash."
          },
          {
            "order": 6,
            "operation": "Brake Blending Firmware Tuning",
            "machineOrTool": "STM32 Debugger / CANalyzer",
            "parametersOrTolerance": "Smooth transition from electrical to friction braking",
            "safetyPrecaution": "Keep manual emergency kill switch within immediate reach during dyno spin-up."
          }
        ]
      }
    ],
    "testingAndResults": {
      "testMethodology": "The rig was accelerated to 450 RPM (simulating 45 km/h vehicle speed) and braked under three modes: (1) Pure mechanical friction disc brake, (2) Pure regenerative braking, and (3) Blended hybrid braking. Energy recovery, deceleration rate, and disc temperature were logged.",
      "performanceMetrics": [
        {
          "metric": "Overall Braking Energy Recovery",
          "theoreticalValue": "32.0",
          "experimentalValue": "27.8",
          "unit": "%",
          "deviationPercent": "-4.2%",
          "status": "Optimal"
        },
        {
          "metric": "Braking Stopping Time (45 to 0 km/h)",
          "theoreticalValue": "2.8",
          "experimentalValue": "3.1",
          "unit": "seconds",
          "deviationPercent": "+10.7%",
          "status": "Passed"
        },
        {
          "metric": "Peak Regenerative Power",
          "theoreticalValue": "850",
          "experimentalValue": "780",
          "unit": "Watts",
          "deviationPercent": "-8.2%",
          "status": "Passed"
        },
        {
          "metric": "Friction Rotor Temperature Reduction",
          "theoreticalValue": "50",
          "experimentalValue": "42",
          "unit": "°C lower",
          "deviationPercent": "-8°C",
          "status": "Optimal"
        }
      ],
      "chartData": {
        "xLabel": "Deceleration Time (Seconds)",
        "yTheoreticalLabel": "Theoretical Kinetic Energy Remaining (J)",
        "yActualLabel": "Measured Flywheel Kinetic Energy (J)",
        "dataPoints": [
          {
            "x": 0,
            "yTheoretical": 466,
            "yActual": 466
          },
          {
            "x": 0.5,
            "yTheoretical": 380,
            "yActual": 375
          },
          {
            "x": 1,
            "yTheoretical": 295,
            "yActual": 288
          },
          {
            "x": 1.5,
            "yTheoretical": 210,
            "yActual": 202
          },
          {
            "x": 2,
            "yTheoretical": 130,
            "yActual": 121
          },
          {
            "x": 2.5,
            "yTheoretical": 60,
            "yActual": 52
          },
          {
            "x": 3.1,
            "yTheoretical": 0,
            "yActual": 0
          }
        ]
      },
      "conclusions": "The regenerative braking system captured 27.8% of the total vehicle kinetic energy during typical urban deceleration cycles. Diverting current into the supercapacitor buffer eliminated 100% of high C-rate shock on the primary lithium battery and reduced friction brake rotor temperatures by 42°C."
    },
    "softwareStack": {
      "cad": [
        "SolidWorks 2024 (Frame & Flywheel)",
        "Altium Designer (Power Electronics PCB)"
      ],
      "caeSimulation": [
        "MATLAB Simulink (EV Drive Cycle & Battery Thermal)",
        "ANSYS Maxwell (Motor Electromagnetic FEA)"
      ],
      "programmingAndIde": [
        "STM32CubeIDE (C/C++ Embedded Control)",
        "Python (CAN Bus Real-Time Telemetry Dashboard)"
      ]
    },
    "prosAndCons": {
      "pros": [
        "Recovers up to 28% of braking energy, directly extending EV urban driving range by 15-20%.",
        "Supercapacitors handle 1,000,000 charge cycles, outlasting chemical batteries by 100x.",
        "Significantly extends mechanical brake pad life and eliminates brake dust particulate pollution.",
        "Delivers instant launch boost acceleration during vehicle start-up."
      ],
      "cons": [
        "Adds weight (~14 kg for dyno buffer components) and extra electrical hardware complexity.",
        "Regenerative braking torque diminishes near zero speed (< 5 km/h), still requiring friction brakes for final holding."
      ],
      "industrialLimitations": "Requires tight functional safety compliance (ISO 26262 ASIL-D) in commercial automotive production to prevent inadvertent wheel lockup."
    },
    "futureScope": [
      "Integrating carbon-fiber overwrapped flywheel rotors spinning in a vacuum chamber at 30,000 RPM for ultra-lightweight mechanical storage.",
      "Implementing AI predictive deceleration algorithms utilizing GPS elevation and forward radar traffic data.",
      "Extending system to 4-wheel independent hub motors for torque vectoring and all-wheel regenerative balance."
    ],
    "references": [
      "Modern Electric, Hybrid Electric, and Fuel Cell Vehicles, 3rd Edition, Mehrdad Ehsani, Yimin Gao, Stefano Longo, and Kambiz Ebrahimi.",
      "Electric Vehicle Technology Explained, James Larminie and John Lowry.",
      "IEEE Transactions on Transportation Electrification: Ultracapacitor-Based Regenerative Braking Systems (Vol. 6, 2020)."
    ],
    "reportChapters": [
      {
        "chapterNumber": 1,
        "title": "Introduction & Global EV Efficiency Imperatives",
        "summary": "Analysis of urban driving energy losses, tire rolling resistance, and regenerative potential."
      },
      {
        "chapterNumber": 2,
        "title": "Kinetic Energy Storage & Supercapacitor Electrochemistry",
        "summary": "Electrochemical double-layer capacitor physics, equivalent series resistance (ESR), and charge acceptance kinetics."
      },
      {
        "chapterNumber": 3,
        "title": "Bidirectional Power Converter Design & Control",
        "summary": "Synchronous rectification topology, high-frequency inductor sizing, and closed-loop current control loops."
      },
      {
        "chapterNumber": 4,
        "title": "Flywheel Dyno Test Rig Mechanical Fabrication",
        "summary": "Shaft bearing calculations, dynamic balancing protocols, and hydraulic brake calibration."
      },
      {
        "chapterNumber": 5,
        "title": "Experimental Results, Range Extension & Thermal Analysis",
        "summary": "Energy efficiency metrics, thermal camera logs of brake discs, and battery life degradation models."
      },
      {
        "chapterNumber": 6,
        "title": "Commercial Scalability, Safety Protocols & Conclusion",
        "summary": "ISO 26262 automotive safety implications, packaging into e-scooters, and economic payback."
      }
    ],
    "planning": {
      "durationWeeks": 12,
      "scheduleType": "12-Week Automotive Powertrain & Energy Recovery Schedule",
      "phases": [
        {
          "number": 1,
          "title": "Vehicle Longitudinal Dynamics & Kinetic Sizing",
          "weeks": "W1 - W2",
          "status": "Completed",
          "completionPercent": 100,
          "milestone": "Deceleration Braking Curve & Kinetic Recovery Calculation",
          "leadRole": "Automotive Dynamics Lead"
        },
        {
          "number": 2,
          "title": "Test Bench Dynamometer CAD Chassis Modeling",
          "weeks": "W3 - W4",
          "status": "Completed",
          "completionPercent": 100,
          "milestone": "Flywheel & BLDC Hub Motor Rig Approved",
          "leadRole": "Mechanical CAD Lead"
        },
        {
          "number": 3,
          "title": "Inertial Flywheel CNC Machining & Balancing",
          "weeks": "W5 - W6",
          "status": "Completed",
          "completionPercent": 100,
          "milestone": "Dynamic ISO 1940 Balancing to Grade G2.5",
          "leadRole": "Machining & Dynamic Balance Specialist"
        },
        {
          "number": 4,
          "title": "Bidirectional DC-DC Buck-Boost & Supercapacitor Integration",
          "weeks": "W7 - W8",
          "status": "In Progress",
          "completionPercent": 85,
          "milestone": "Bidirectional Power Conversion Switching Verified",
          "leadRole": "Power Electronics Engineer"
        },
        {
          "number": 5,
          "title": "Brake Blending ECU & Hall Sensor Telemetry",
          "weeks": "W9 - W10",
          "status": "In Progress",
          "completionPercent": 65,
          "milestone": "Seamless Transition from Regen to Hydraulic Friction Disc",
          "leadRole": "Controls Engineer"
        },
        {
          "number": 6,
          "title": "Energy Recovery Efficiency Audit & Thesis Defense",
          "weeks": "W11 - W12",
          "status": "Planned",
          "completionPercent": 10,
          "milestone": "Recovery Efficiency > 65% Certified; Project Defense",
          "leadRole": "Project Lead"
        }
      ],
      "wbs": [
        {
          "id": "1.0",
          "name": "Vehicle Longitudinal Dynamics & Kinetic Sizing",
          "owner": "Automotive Dynamics Lead",
          "duration": "W1 - W2",
          "subtasks": [
            {
              "id": "1.1",
              "name": "Deceleration Braking Curve & Kinetic Recovery Calculation",
              "estHours": 12,
              "status": "Done"
            }
          ]
        },
        {
          "id": "2.0",
          "name": "Test Bench Dynamometer CAD Chassis Modeling",
          "owner": "Mechanical CAD Lead",
          "duration": "W3 - W4",
          "subtasks": [
            {
              "id": "2.1",
              "name": "Flywheel & BLDC Hub Motor Rig Approved",
              "estHours": 12,
              "status": "Done"
            }
          ]
        },
        {
          "id": "3.0",
          "name": "Inertial Flywheel CNC Machining & Balancing",
          "owner": "Machining & Dynamic Balance Specialist",
          "duration": "W5 - W6",
          "subtasks": [
            {
              "id": "3.1",
              "name": "Dynamic ISO 1940 Balancing to Grade G2.5",
              "estHours": 12,
              "status": "Done"
            }
          ]
        },
        {
          "id": "4.0",
          "name": "Bidirectional DC-DC Buck-Boost & Supercapacitor Integration",
          "owner": "Power Electronics Engineer",
          "duration": "W7 - W8",
          "subtasks": [
            {
              "id": "4.1",
              "name": "Bidirectional Power Conversion Switching Verified",
              "estHours": 12,
              "status": "In Progress"
            }
          ]
        },
        {
          "id": "5.0",
          "name": "Brake Blending ECU & Hall Sensor Telemetry",
          "owner": "Controls Engineer",
          "duration": "W9 - W10",
          "subtasks": [
            {
              "id": "5.1",
              "name": "Seamless Transition from Regen to Hydraulic Friction Disc",
              "estHours": 12,
              "status": "In Progress"
            }
          ]
        },
        {
          "id": "6.0",
          "name": "Energy Recovery Efficiency Audit & Thesis Defense",
          "owner": "Project Lead",
          "duration": "W11 - W12",
          "subtasks": [
            {
              "id": "6.1",
              "name": "Recovery Efficiency > 65% Certified; Project Defense",
              "estHours": 12,
              "status": "Planned"
            }
          ]
        }
      ],
      "fmea": [
        {
          "subsystem": "High-Speed Flywheel",
          "failureMode": "Catastrophic centrifugal burst at 3000 RPM",
          "effect": "High-velocity projectile hazard, destruction of test rig",
          "cause": "Flaw or void in cast steel rotor under peak centrifugal hoop stress",
          "severity": 10,
          "occurrence": 2,
          "detection": 2,
          "rpn": 40,
          "action": "CNC machine flywheel exclusively from forged EN8 steel; enclose in 6 mm armor steel containment shield.",
          "postActionRPN": 10
        },
        {
          "subsystem": "MOSFET Inverter",
          "failureMode": "Thermal shoot-through failure during hard regenerative deceleration",
          "effect": "Inverter short-circuits, electrical braking completely lost",
          "cause": "High regenerative reverse voltage spike (BEMF) exceeding MOSFET Vds breakdown rating",
          "severity": 8,
          "occurrence": 3,
          "detection": 3,
          "rpn": 72,
          "action": "Install 100V low-RDSon MOSFETs with active TVS transient clamping and snubber circuit.",
          "postActionRPN": 16
        }
      ],
      "raciMatrix": [
        {
          "activity": "Kinematic synthesis calculations & MATLAB simulation",
          "leadMech": "A/R",
          "embedded": "I",
          "feaAnalyst": "C",
          "machinist": "I"
        },
        {
          "activity": "SolidWorks 3D CAD modeling & tolerance allocation",
          "leadMech": "A/R",
          "embedded": "C",
          "feaAnalyst": "C",
          "machinist": "C"
        },
        {
          "activity": "ANSYS dynamic stress FEA & contact pressure study",
          "leadMech": "C",
          "embedded": "I",
          "feaAnalyst": "A/R",
          "machinist": "I"
        },
        {
          "activity": "Raw material procurement & vendor quotes",
          "leadMech": "A",
          "embedded": "C",
          "feaAnalyst": "I",
          "machinist": "R"
        },
        {
          "activity": "CNC VMC toolpath generation & Wire EDM slotting",
          "leadMech": "C",
          "embedded": "I",
          "feaAnalyst": "I",
          "machinist": "A/R"
        },
        {
          "activity": "Microcontroller PWM coding & optical sensor wiring",
          "leadMech": "C",
          "embedded": "A/R",
          "feaAnalyst": "I",
          "machinist": "I"
        },
        {
          "activity": "Mechanical subassembly, bearing shimming & runout alignment",
          "leadMech": "A/R",
          "embedded": "C",
          "feaAnalyst": "I",
          "machinist": "R"
        },
        {
          "activity": "Laser displacement repeatability logging & DVT validation",
          "leadMech": "A",
          "embedded": "R",
          "feaAnalyst": "R",
          "machinist": "C"
        },
        {
          "activity": "Final academic report synthesis & thesis compilation",
          "leadMech": "A/R",
          "embedded": "R",
          "feaAnalyst": "R",
          "machinist": "R"
        }
      ],
      "manufacturingRouting": [
        {
          "opNo": 11,
          "part": "Phase 1: Dyno Flywheel & Mechanical Mounting",
          "machine": "Heavy-Duty Center Lathe",
          "operation": "Precision Lathe Turning of Steel Flywheel",
          "parameters": "Face and bore runout within 0.02 mm",
          "tolerance": "Face and bore runout within 0.02 mm",
          "qcCheck": "Use heavy-duty carbide tooling; secure chuck jaws with high clamping force."
        },
        {
          "opNo": 12,
          "part": "Phase 1: Dyno Flywheel & Mechanical Mounting",
          "machine": "Dual-Plane Dynamic Balancing Rig",
          "operation": "Dynamic Balancing of Rotating Mass",
          "parameters": "Residual unbalance < 2.5 g-mm/kg (ISO 1940 G2.5)",
          "tolerance": "Residual unbalance < 2.5 g-mm/kg (ISO 1940 G2.5)",
          "qcCheck": "Never operate above balancing speed without steel safety enclosure hood."
        },
        {
          "opNo": 13,
          "part": "Phase 1: Dyno Flywheel & Mechanical Mounting",
          "machine": "MIG Welding & Magnetic Base Drill",
          "operation": "Test Bench Frame Welding & Motor Mounting",
          "parameters": "Shaft center height alignment within ±0.1 mm",
          "tolerance": "Shaft center height alignment within ±0.1 mm",
          "qcCheck": "Use anti-vibration rubber isolation pads under motor base feet."
        },
        {
          "opNo": 24,
          "part": "Phase 2: Power Electronics & Calibration",
          "machine": "SMD Reflow Oven & Hand Soldering",
          "operation": "Buck-Boost Converter PCB Assembly",
          "parameters": "Double solder layer on high-current copper traces",
          "tolerance": "Double solder layer on high-current copper traces",
          "qcCheck": "Test gate driver waveforms with an oscilloscope before applying 48V power."
        },
        {
          "opNo": 25,
          "part": "Phase 2: Power Electronics & Calibration",
          "machine": "Active Balancing Circuit Installation",
          "operation": "Supercapacitor Cell Balancing Module Wiring",
          "parameters": "Voltage delta across any cell < 15 mV",
          "tolerance": "Voltage delta across any cell < 15 mV",
          "qcCheck": "Wear safety glasses; shorting supercapacitors causes instantaneous arc flash."
        },
        {
          "opNo": 26,
          "part": "Phase 2: Power Electronics & Calibration",
          "machine": "STM32 Debugger / CANalyzer",
          "operation": "Brake Blending Firmware Tuning",
          "parameters": "Smooth transition from electrical to friction braking",
          "tolerance": "Smooth transition from electrical to friction braking",
          "qcCheck": "Keep manual emergency kill switch within immediate reach during dyno spin-up."
        }
      ],
      "dvtTesting": [
        {
          "id": "DVT-01",
          "title": "Overall Braking Energy Recovery",
          "standard": "ISO / ASTM Engineering Benchmark",
          "equipment": "Precision Calibrated Laboratory Rig",
          "procedure": "Evaluate Overall Braking Energy Recovery under standard operating regime. Theoretical reference: 32.0 %.",
          "acceptanceCriteria": "Deviation within acceptable tolerance (observed: -4.2%)",
          "observedResult": "27.8 % (Deviation: -4.2%)",
          "status": "Passed"
        },
        {
          "id": "DVT-02",
          "title": "Braking Stopping Time (45 to 0 km/h)",
          "standard": "ISO / ASTM Engineering Benchmark",
          "equipment": "Precision Calibrated Laboratory Rig",
          "procedure": "Evaluate Braking Stopping Time (45 to 0 km/h) under standard operating regime. Theoretical reference: 2.8 seconds.",
          "acceptanceCriteria": "Deviation within acceptable tolerance (observed: +10.7%)",
          "observedResult": "3.1 seconds (Deviation: +10.7%)",
          "status": "Passed"
        },
        {
          "id": "DVT-03",
          "title": "Peak Regenerative Power",
          "standard": "ISO / ASTM Engineering Benchmark",
          "equipment": "Precision Calibrated Laboratory Rig",
          "procedure": "Evaluate Peak Regenerative Power under standard operating regime. Theoretical reference: 850 Watts.",
          "acceptanceCriteria": "Deviation within acceptable tolerance (observed: -8.2%)",
          "observedResult": "780 Watts (Deviation: -8.2%)",
          "status": "Passed"
        },
        {
          "id": "DVT-04",
          "title": "Friction Rotor Temperature Reduction",
          "standard": "ISO / ASTM Engineering Benchmark",
          "equipment": "Precision Calibrated Laboratory Rig",
          "procedure": "Evaluate Friction Rotor Temperature Reduction under standard operating regime. Theoretical reference: 50 °C lower.",
          "acceptanceCriteria": "Deviation within acceptable tolerance (observed: -8°C)",
          "observedResult": "42 °C lower (Deviation: -8°C)",
          "status": "Passed"
        }
      ],
      "budgetAnalysis": {
        "budgetPlannedINR": 28000,
        "budgetActualINR": 27100,
        "varianceINR": -900,
        "budgetPlannedUSD": 340,
        "budgetActualUSD": 325,
        "contingencyReserve": "10% included",
        "savingsHighlights": "Optimized vendor sourcing & shared workshop equipment reduced fabrication expenditure."
      }
    }
  },
  {
    "id": "desktop-3axis-cnc",
    "title": "High-Precision 3-Axis Desktop CNC Milling Machine for PCB & Soft Metal Prototyping",
    "shortTitle": "3-Axis Desktop CNC",
    "category": "Manufacturing & CNC",
    "categorySlug": "manufacturing-cnc",
    "level": "B.Tech Final Year",
    "difficulty": "Advanced",
    "durationWeeks": 14,
    "teamSize": "4 Members",
    "featured": true,
    "rating": 4.9,
    "estimatedCost": {
      "inr": 32000,
      "usd": 385
    },
    "tags": [
      "CNC Milling",
      "CAD/CAM",
      "Manufacturing",
      "G-Code",
      "Precision Machining"
    ],
    "badge": "Manufacturing Excellence",
    "abstract": "This project details the mechanical design, FEA structural modal analysis, and GRBL-based mechatronic integration of a high-rigidity 3-axis desktop CNC milling router. Engineered with a working envelope of 300 mm x 200 mm x 80 mm, the machine utilizes dual MGN12 linear rail guides, C7 anti-backlash ballscrews, and a 500W air-cooled brushless spindle capable of precision PCB isolation milling, engraving, and machining of soft alloys including Aluminium 6061 and Brass.",
    "problemStatement": "Commercial industrial VMC CNC milling centers are prohibitively expensive ($30,000+) and occupy massive industrial factory footprints. Meanwhile, cheap entry-level desktop CNC kits constructed from plastic and lead screws flex excessively under cutting forces, resulting in poor surface finish, tool chatter, and snapped 0.1 mm micro-endmills. There is a strong demand for a stiff, vibration-damped desktop CNC router capable of true metal milling.",
    "objectives": [
      "Perform static structural FEA and harmonic modal analysis to optimize gantry stiffness against cutting forces.",
      "Design and assemble a rigid chassis using 20x40 and 40x40 V-slot heavy aluminium extrusions and 10mm cast tooling plates.",
      "Implement C7 rolled ballscrews (SFU1204) with zero-backlash preloaded ballnuts on all three axes (X, Y, Z).",
      "Interface a 32-bit GRBL ESP32 controller supporting microstepping, auto-leveling probe, and emergency limits.",
      "Validate milling tolerance (±0.03 mm) and surface roughness Ra on PCB isolation tracks and Aluminium 6061 test coupons."
    ],
    "workingPrinciple": {
      "summary": "The 3-axis CNC router translates Cartesian G-code commands (X, Y, Z coordinates) into precise linear movements. Computer-Aided Manufacturing (CAM) software slices 3D CAD models into cutting toolpaths. The GRBL controller generates synchronized step and direction pulses. High-torque NEMA 23 stepper motors rotate precision ballscrews, which convert rotary motion into linear motion with high thrust force and zero backlash. A high-speed spindle rotating at 12,000 RPM removes material chip by chip.",
      "fundamentalLaws": [
        "Merchant's Circle Diagram of Metal Cutting Forces (F_c, F_t, F_s, F_n)",
        "Euler-Bernoulli Beam Deflection for Fixed-Fixed Gantry Bridges",
        "Kienzle Specific Cutting Force Formula: F_c = k_c1.1 * b * h^(1 - m_c)",
        "Taylor's Tool Life Equation: V * T^n = C"
      ],
      "operatingSequence": [
        {
          "step": 1,
          "title": "CAD/CAM Toolpath Generation",
          "description": "SolidWorks part model is imported into Fusion 360 CAM; toolpaths (roughing adaptive clearing and contour finishing) are calculated."
        },
        {
          "step": 2,
          "title": "Stock Setup & Auto Surface Probe",
          "description": "Billet is clamped to the T-slot bed; conductive touch probe scans surface Z-height matrix to compensate for microscopic bed warpage."
        },
        {
          "step": 3,
          "title": "G-Code Interpolation & Pulse Streaming",
          "description": "GRBL firmware interprets G01/G02 linear/circular commands, executing real-time bresenham acceleration ramping."
        },
        {
          "step": 4,
          "title": "Precision Material Removal",
          "description": "Spindle rotating at 12,000 RPM feeds a 3.175 mm 2-flute carbide endmill through stock, ejecting chips with air-blast assistance."
        }
      ],
      "energyTransfer": "G-Code Data Stream -> Microcontroller Step Interpolation -> Stepper Motor Electromagnetic Torque -> Ballscrew Thrust Conversion -> Tool-Workpiece Shear Deformation -> Chip Ejection."
    },
    "cadAndSpecs": {
      "dimensions": {
        "length": "520 mm",
        "width": "460 mm",
        "height": "480 mm",
        "totalWeight": "22.4 kg"
      },
      "tolerances": "Positional accuracy ±0.02 mm, Backlash < 0.015 mm, Spindle runout TIR < 0.01 mm",
      "materialsMain": [
        "Aluminium 6061-T6 (Gantry Side Plates & Z-Axis Carriage)",
        "Aluminium Extrusions 4040/2040 V-Slot (Base Frame)",
        "Bearing Steel GCr15 (MGN12H Linear Rails & SFU1204 Ballscrews)",
        "Cast Acrylic (Safety Enclosure)"
      ],
      "cadSoftwareRecommended": [
        "SolidWorks 2024",
        "Autodesk Fusion 360 (CAD/CAM)",
        "ANSYS Mechanical (Modal Vibrations)"
      ],
      "assemblyPartsCount": 96,
      "blueprintFeatures": [
        {
          "view": "X-Axis Gantry Assembly Elevation",
          "description": "Shows dual MGN12H linear guide blocks spaced 140 mm apart to withstand tool tilting moments.",
          "criticalDimensions": "Gantry Clearance: 95.0 mm"
        },
        {
          "view": "Z-Axis Spindle Mount Section",
          "description": "Compact ballscrew arrangement with 52 mm spindle clamping collar and NEMA 23 direct flexible shaft coupling.",
          "criticalDimensions": "Z Travel: 80.0 mm"
        },
        {
          "view": "T-Slot Bed Clamping Layout",
          "description": "Precision ground aluminium tooling plate (300 x 200 mm) with M6 tapped grid holes every 25 mm.",
          "criticalDimensions": "Working Envelope: 300 x 200 mm"
        }
      ],
      "visualType": "cnc-axis"
    },
    "billOfMaterials": [
      {
        "itemNumber": 1,
        "partName": "C7 Ground Anti-Backlash Ballscrews",
        "specification": "SFU1204 with Ballnuts, End Machined with BK/BF10 Supports (3 Sets: 400mm, 300mm, 180mm)",
        "material": "GCr15 Bearing Steel Induction Hardened",
        "quantity": 3,
        "unitCostINR": 5200,
        "unitCostUSD": 62.5,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 2,
        "partName": "MGN12 Linear Rails & Long Carriage Blocks",
        "specification": "MGN12H Stainless Guide Rails (6 Rails: 400mm, 300mm, 180mm pairs)",
        "material": "Stainless Alloy Steel 440C",
        "quantity": 6,
        "unitCostINR": 4400,
        "unitCostUSD": 53,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 3,
        "partName": "NEMA 23 High Torque Stepper Motors",
        "specification": "2.5 Nm Holding Torque, 1.8° step angle, 3.0A, Dual Shaft",
        "material": "Standard Stepper Motors",
        "quantity": 3,
        "unitCostINR": 3900,
        "unitCostUSD": 47,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 4,
        "partName": "500W Air-Cooled Brushless DC Spindle",
        "specification": "ER11 Collet, 0-12,000 RPM, 48V DC with PWM Speed Controller",
        "material": "Aluminium Body & High-Speed Bearings",
        "quantity": 1,
        "unitCostINR": 5400,
        "unitCostUSD": 65,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 5,
        "partName": "CNC Machined Gantry Side Plates",
        "specification": "10mm thick Aluminium 6061-T6 plates, CNC milled with locating pins",
        "material": "Aluminium 6061-T6",
        "quantity": 2,
        "unitCostINR": 2800,
        "unitCostUSD": 33.7,
        "procurementType": "Custom CNC Machined"
      },
      {
        "itemNumber": 6,
        "partName": "Structural Heavy Extrusion Frame",
        "specification": "4040 & 2040 V-Slot Black Anodized Aluminium Extrusions (3.2m total)",
        "material": "Alloy 6063-T5",
        "quantity": 1,
        "unitCostINR": 2600,
        "unitCostUSD": 31.3,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 7,
        "partName": "32-Bit ESP32 GRBL Controller Board",
        "specification": "Makerbase DLC32 with 3x TMC2209 Silent Drivers & Wi-Fi Web UI",
        "material": "PCB Module",
        "quantity": 1,
        "unitCostINR": 2200,
        "unitCostUSD": 26.5,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 8,
        "partName": "MeanWell 48V 10A DC Power Supply",
        "specification": "480W SMPS with Overvoltage & Thermal Protections",
        "material": "Enclosed Power Supply",
        "quantity": 1,
        "unitCostINR": 3200,
        "unitCostUSD": 38.5,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 9,
        "partName": "Auto Touch Z-Probe & Limit Switches",
        "specification": "Conductive brass contact puck with Omron microswitches",
        "material": "Brass & ABS",
        "quantity": 1,
        "unitCostINR": 850,
        "unitCostUSD": 10.2,
        "procurementType": "Bought-out (Commercial)"
      }
    ],
    "costBreakdown": {
      "mechanicalHardware": 14800,
      "electronicsAndSensors": 9200,
      "rawMaterials": 4500,
      "machiningAndFabrication": 3500
    },
    "electronicsAndSensors": {
      "microcontroller": "Makerbase DLC32 (Dual-Core 240MHz ESP32 running GRBL_ESP32 with Web G-Code Streaming)",
      "sensors": [
        {
          "name": "Conductive Z-Axis Tool Probe",
          "model": "Brass Precision Contact Puck",
          "function": "Automatically establishes Z-zero offset and generates height-map mesh",
          "operatingVoltage": "3.3V DC"
        },
        {
          "name": "Inductive Limit Switches",
          "model": "LJ8A3-2-Z/BX (2mm Sensing Distance)",
          "function": "Hard limit detection and repeatable machine homing",
          "operatingVoltage": "5V - 24V DC"
        }
      ],
      "actuators": [
        {
          "name": "X, Y, Z Axis NEMA 23 Stepper Motors",
          "type": "Bipolar Stepper with 1/16 Microstepping",
          "torqueOrForce": "2.5 N-m Holding Torque",
          "powerRating": "24V 3.0A"
        },
        {
          "name": "500W ER11 High-Speed Spindle",
          "type": "Brushless DC Spindle Motor",
          "torqueOrForce": "0.45 N-m at 12,000 RPM",
          "powerRating": "48V 500W"
        }
      ],
      "powerSupply": "Dual Power Supply: 48V 10A for Spindle Motor + 24V 5A for Stepper Drivers and Logic",
      "wiringSummary": "High-flex drag chains on all three axes protect motor and limit switch lines. Spindle power is shielded with braided ground sleeve to prevent electromagnetic interference (EMI).",
      "circuitPinouts": [
        {
          "pin": "GPIO 12, 14",
          "component": "X-Axis Step & Dir",
          "signalType": "Logic Level Pulses"
        },
        {
          "pin": "GPIO 27, 26",
          "component": "Y-Axis Step & Dir",
          "signalType": "Logic Level Pulses"
        },
        {
          "pin": "GPIO 25, 33",
          "component": "Z-Axis Step & Dir",
          "signalType": "Logic Level Pulses"
        },
        {
          "pin": "GPIO 4 (PWM)",
          "component": "Spindle Speed 0-10V Converter",
          "signalType": "Analog Speed Reference"
        }
      ]
    },
    "designCalculations": {
      "title": "Cutting Force, Gantry Bending Deflection, and Step Resolution",
      "overview": "Evaluates the tangential cutting force when milling Aluminium 6061 with a 3.175 mm carbide endmill, the resulting central gantry deflection, and the theoretical step resolution of the SFU1204 ballscrew.",
      "formulas": [
        {
          "name": "Tangential Cutting Force (F_c)",
          "symbol": "F_c = k_c * a_p * a_e * (1 / (feed_per_tooth))",
          "formula": "F_c = k_c \\cdot a_p \\cdot f_z",
          "explanation": "Specific cutting force for Al 6061 (k_c = 850 N/mm²) with depth of cut a_p = 1.0 mm and feed per tooth f_z = 0.02 mm.",
          "exampleCalculation": "F_c = 850 N/mm² * 1.0 mm * 0.02 mm = 17.0 N (Peak dynamic force ~ 45 N under full engagement)",
          "result": "45.0 N Peak Cutting Force"
        },
        {
          "name": "Gantry Beam Center Deflection (delta)",
          "symbol": "delta = (F_cutting * L³) / (48 * E * I)",
          "formula": "\\delta = \\frac{F \\cdot L^3}{48 \\cdot E \\cdot I}",
          "explanation": "Mid-span deflection of the 400 mm long 4040 aluminium extrusion bridge under a 50 N center point load.",
          "exampleCalculation": "L = 400 mm, E = 69 GPa, I = 9.8 cm^4 = 98,000 mm^4; delta = (50 * 400³) / (48 * 69000 * 98000) = 3.2e9 / 3.24e11 = 0.0098 mm",
          "result": "0.0098 mm (9.8 microns deflection)"
        },
        {
          "name": "Ballscrew Theoretical Step Resolution (Res)",
          "symbol": "Res = Pitch / (Steps_per_rev * Microstepping)",
          "formula": "Res = \\frac{p}{N_{steps} \\cdot MS}",
          "explanation": "Linear travel per electrical microstep using a 4 mm pitch ballscrew (SFU1204) and 1/16 microstepping.",
          "exampleCalculation": "Res = 4.0 mm / (200 steps * 16 microsteps) = 4.0 / 3200 = 0.00125 mm",
          "result": "1.25 microns / microstep"
        }
      ],
      "calculatorConfig": {
        "title": "CNC Cutting Force & Deflection Calculator",
        "param1Name": "depthOfCutMm",
        "param1Label": "Axial Depth of Cut (a_p)",
        "param1Unit": "mm",
        "param1Default": 1,
        "param1Min": 0.2,
        "param1Max": 3.5,
        "param1Step": 0.1,
        "param2Name": "feedRateMmpm",
        "param2Label": "Feed Rate",
        "param2Unit": "mm/min",
        "param2Default": 450,
        "param2Min": 100,
        "param2Max": 1200,
        "param2Step": 50,
        "formulaType": "beam_deflection"
      }
    },
    "fabricationSequence": [
      {
        "phase": "Phase 1: Frame Squaring & Rail Mounting",
        "steps": [
          {
            "order": 1,
            "operation": "Extrusion Frame Squaring & Tramming",
            "machineOrTool": "Precision Machinist Square & Feeler Gauges",
            "parametersOrTolerance": "Corner perpendicularity within 0.05 mm across 400 mm",
            "safetyPrecaution": "Tighten corner bracket bolts in diagonal star pattern."
          },
          {
            "order": 2,
            "operation": "Linear Rail Guide Parallelism Alignment",
            "machineOrTool": "Dial Test Indicator (DTI) mounted to carriage",
            "parametersOrTolerance": "Rail parallelism within 0.015 mm over full length",
            "safetyPrecaution": "Lightly finger-tighten rail screws, then sweep indicator along the master rail before final torquing."
          },
          {
            "order": 3,
            "operation": "Ballscrew Fixed/Floating Bearing Installation",
            "machineOrTool": "Torque Wrench & Spanner",
            "parametersOrTolerance": "Preload BK10 angular contact bearings to remove axial float",
            "safetyPrecaution": "Do not rotate ballnut off the screw raceway without arbor sleeve."
          }
        ]
      },
      {
        "phase": "Phase 2: Spindle Tramming & Electronics Setup",
        "steps": [
          {
            "order": 4,
            "operation": "Spindle Perpendicularity Tramming",
            "machineOrTool": "Twin-Dial Tramming Tool swept across 150mm circle",
            "parametersOrTolerance": "Spindle nodding and tilt < 0.02 mm",
            "safetyPrecaution": "Shim spindle clamp using 0.02mm brass foil as necessary."
          },
          {
            "order": 5,
            "operation": "Wiring, Shielding & Limit Switch Verification",
            "machineOrTool": "Multimeter Continuity & Scope",
            "parametersOrTolerance": "Verify normally-closed (NC) fail-safe limit circuit",
            "safetyPrecaution": "Earth-ground all metal chassis rails to AC mains earth to protect against static."
          },
          {
            "order": 6,
            "operation": "Test Cuts on FR4 PCB & Aluminium 6061",
            "machineOrTool": "Optical Microscope & Mitutoyo Micrometer",
            "parametersOrTolerance": "Measure 20mm test square coupon dimensions",
            "safetyPrecaution": "Always wear safety goggles; use vacuum extraction for hazardous fiberglass PCB dust."
          }
        ]
      }
    ],
    "testingAndResults": {
      "testMethodology": "Standard test coupons were milled: (1) Dual-sided PCB with 0.2 mm track isolation, and (2) Aluminium 6061-T6 50mm pocket with 10mm boss. Critical dimensions, perpendicularity, surface finish Ra, and tool wear were measured.",
      "performanceMetrics": [
        {
          "metric": "Positional Accuracy on X/Y Axis",
          "theoreticalValue": "±0.02",
          "experimentalValue": "±0.025",
          "unit": "mm",
          "deviationPercent": "+0.005 mm",
          "status": "Optimal"
        },
        {
          "metric": "PCB Isolation Trace Minimum Width",
          "theoreticalValue": "0.20",
          "experimentalValue": "0.18",
          "unit": "mm",
          "deviationPercent": "-10.0%",
          "status": "Passed"
        },
        {
          "metric": "Aluminium Surface Roughness (Ra)",
          "theoreticalValue": "0.80",
          "experimentalValue": "0.95",
          "unit": "microns",
          "deviationPercent": "+18.7%",
          "status": "Passed"
        },
        {
          "metric": "Spindle Full Load Temperature Rise",
          "theoreticalValue": "45",
          "experimentalValue": "41",
          "unit": "°C",
          "deviationPercent": "-8.8%",
          "status": "Optimal"
        }
      ],
      "chartData": {
        "xLabel": "Spindle Feed Rate (mm/min)",
        "yTheoreticalLabel": "Theoretical Surface Roughness Ra (microns)",
        "yActualLabel": "Measured Surface Roughness Ra (microns)",
        "dataPoints": [
          {
            "x": 150,
            "yTheoretical": 0.45,
            "yActual": 0.52
          },
          {
            "x": 300,
            "yTheoretical": 0.65,
            "yActual": 0.74
          },
          {
            "x": 450,
            "yTheoretical": 0.85,
            "yActual": 0.95
          },
          {
            "x": 600,
            "yTheoretical": 1.15,
            "yActual": 1.32
          },
          {
            "x": 800,
            "yTheoretical": 1.6,
            "yActual": 1.88
          },
          {
            "x": 1000,
            "yTheoretical": 2.2,
            "yActual": 2.54
          }
        ]
      },
      "conclusions": "The 3-axis CNC router achieved precision tolerances of ±0.025 mm in Aluminium 6061 and successfully routed high-density surface mount PCBs with 0.18 mm isolation gaps. The ballscrew and linear rail architecture eliminated 98% of tool chatter compared to lead screw designs."
    },
    "softwareStack": {
      "cad": [
        "SolidWorks 2024 (Machine Design)",
        "Autodesk Fusion 360 (CAD & 3D CAM)"
      ],
      "caeSimulation": [
        "ANSYS Static Structural (Gantry Deflection FEA)",
        "SolidWorks Simulation (Modal Resonance Analysis)"
      ],
      "programmingAndIde": [
        "GRBL_ESP32 Firmware (C++)",
        "Candle CNC Controller (G-Code Sender & Height Map)"
      ]
    },
    "prosAndCons": {
      "pros": [
        "Rigid ballscrew and MGN12 linear rail guides allow true metal milling of Aluminium and Brass, unlike cheap 3018 CNCs.",
        "Wireless Web-UI G-code streaming directly from tablet or PC via ESP32 Wi-Fi.",
        "Auto-leveling probe compensates for PCB copper board bow and warpage.",
        "Compact footprint fits comfortably on any workbench."
      ],
      "cons": [
        "Milling hard steel or titanium is not recommended due to limited gantry mass and spindle power.",
        "Generates airborne dust and chips; requires dedicated acrylic enclosure and dust collection."
      ],
      "industrialLimitations": "Maximum feed rates capped at 1500 mm/min due to stepper motor resonance at high RPM compared to closed-loop servos."
    },
    "futureScope": [
      "Adding a 4th rotary indexer axis (A-axis) for full 4-axis cylindrical carving and helical gear cutting.",
      "Upgrading spindle to an 800W liquid-cooled ER11 high-frequency brushless unit for near-silent operation.",
      "Integrating an automatic tool changer (ATC) carousel for uninterrupted multi-tool milling routines."
    ],
    "references": [
      "Fundamentals of Modern Manufacturing: Materials, Processes, and Systems, 7th Edition, Mikell P. Groover.",
      "Machinery's Handbook, 31st Edition, Erik Oberg et al.",
      "CIRP Annals - Manufacturing Technology: Dynamics and Surface Quality in High-Speed Desktop Milling (Vol. 69, 2020)."
    ],
    "reportChapters": [
      {
        "chapterNumber": 1,
        "title": "Introduction & Small-Scale CNC Evolution",
        "summary": "Evolution of subtractive manufacturing, prototyping bottlenecks, and desktop machine tool architecture."
      },
      {
        "chapterNumber": 2,
        "title": "Cutting Mechanics & Structural Stiffness Analysis",
        "summary": "Orthogonal metal cutting formulas, chip formation theory, and ANSYS FEA of gantry beam flexure."
      },
      {
        "chapterNumber": 3,
        "title": "Drive Transmission & Kinematic Hardware Sizing",
        "summary": "Ballscrew lead selection, critical buckling speed calculations, and stepper motor torque-speed curves."
      },
      {
        "chapterNumber": 4,
        "title": "Embedded GRBL Motion Controller Architecture",
        "summary": "Real-time step generation algorithms, look-ahead acceleration planning, and electrical noise suppression."
      },
      {
        "chapterNumber": 5,
        "title": "Experimental Metrology & Surface Roughness",
        "summary": "Optical coordinate measuring machine (CMM) data, surface profilometer scans, and PCB trace inspection."
      },
      {
        "chapterNumber": 6,
        "title": "Economic Feasibility, Commercialization & Summary",
        "summary": "Bill of materials cost audit, comparison against commercial units, and recommendations for 4th axis expansion."
      }
    ],
    "planning": {
      "durationWeeks": 14,
      "scheduleType": "14-Week Machine Tool Design & Mechatronics Schedule",
      "phases": [
        {
          "number": 1,
          "title": "Machine Tool Structural Architecture & Axis Kinematics",
          "weeks": "W1 - W3",
          "status": "Completed",
          "completionPercent": 100,
          "milestone": "Gantry Rigidity & Cutting Force Calculations Approved",
          "leadRole": "Machine Tool Design Lead"
        },
        {
          "number": 2,
          "title": "Granite Epoxy Bed & Extrusion Frame CAD Design",
          "weeks": "W4 - W5",
          "status": "Completed",
          "completionPercent": 100,
          "milestone": "Frame Static & Harmonic Resonance FEA Verified",
          "leadRole": "CAD/FEA Lead"
        },
        {
          "number": 3,
          "title": "Ball Screw & Linear Guide Rail Precision Machining",
          "weeks": "W6 - W8",
          "status": "Completed",
          "completionPercent": 100,
          "milestone": "Precision Datum Faces Milled & Ground to 0.015 mm",
          "leadRole": "Manufacturing Specialist"
        },
        {
          "number": 4,
          "title": "Closed-Loop Stepper Drives & GRBL CNC Controller",
          "weeks": "W9 - W10",
          "status": "In Progress",
          "completionPercent": 80,
          "milestone": "3-Axis Coordinated Jogging & Endstop Homing Verified",
          "leadRole": "CNC Controls Engineer"
        },
        {
          "number": 5,
          "title": "Water-Cooled High-Frequency Spindle & VFD Commissioning",
          "weeks": "W11 - W12",
          "status": "In Progress",
          "completionPercent": 60,
          "milestone": "Spindle Runout < 0.005 mm at 24,000 RPM Validated",
          "leadRole": "Mechatronics Specialist"
        },
        {
          "number": 6,
          "title": "ISO 230 NAS 979 Test Cut Circle-Diamond-Square & Defense",
          "weeks": "W13 - W14",
          "status": "Planned",
          "completionPercent": 20,
          "milestone": "Milling Accuracy < ±0.03 mm on AL 6061; Final Thesis Complete",
          "leadRole": "Project Team Lead"
        }
      ],
      "wbs": [
        {
          "id": "1.0",
          "name": "Machine Tool Structural Architecture & Axis Kinematics",
          "owner": "Machine Tool Design Lead",
          "duration": "W1 - W3",
          "subtasks": [
            {
              "id": "1.1",
              "name": "Gantry Rigidity & Cutting Force Calculations Approved",
              "estHours": 12,
              "status": "Done"
            }
          ]
        },
        {
          "id": "2.0",
          "name": "Granite Epoxy Bed & Extrusion Frame CAD Design",
          "owner": "CAD/FEA Lead",
          "duration": "W4 - W5",
          "subtasks": [
            {
              "id": "2.1",
              "name": "Frame Static & Harmonic Resonance FEA Verified",
              "estHours": 12,
              "status": "Done"
            }
          ]
        },
        {
          "id": "3.0",
          "name": "Ball Screw & Linear Guide Rail Precision Machining",
          "owner": "Manufacturing Specialist",
          "duration": "W6 - W8",
          "subtasks": [
            {
              "id": "3.1",
              "name": "Precision Datum Faces Milled & Ground to 0.015 mm",
              "estHours": 12,
              "status": "Done"
            }
          ]
        },
        {
          "id": "4.0",
          "name": "Closed-Loop Stepper Drives & GRBL CNC Controller",
          "owner": "CNC Controls Engineer",
          "duration": "W9 - W10",
          "subtasks": [
            {
              "id": "4.1",
              "name": "3-Axis Coordinated Jogging & Endstop Homing Verified",
              "estHours": 12,
              "status": "In Progress"
            }
          ]
        },
        {
          "id": "5.0",
          "name": "Water-Cooled High-Frequency Spindle & VFD Commissioning",
          "owner": "Mechatronics Specialist",
          "duration": "W11 - W12",
          "subtasks": [
            {
              "id": "5.1",
              "name": "Spindle Runout < 0.005 mm at 24,000 RPM Validated",
              "estHours": 12,
              "status": "In Progress"
            }
          ]
        },
        {
          "id": "6.0",
          "name": "ISO 230 NAS 979 Test Cut Circle-Diamond-Square & Defense",
          "owner": "Project Team Lead",
          "duration": "W13 - W14",
          "subtasks": [
            {
              "id": "6.1",
              "name": "Milling Accuracy < ±0.03 mm on AL 6061; Final Thesis Complete",
              "estHours": 12,
              "status": "Planned"
            }
          ]
        }
      ],
      "fmea": [
        {
          "subsystem": "Spindle Assembly",
          "failureMode": "Excessive spindle dynamic runout",
          "effect": "Chatter marks on milled aluminum parts, broken 2 mm end mills",
          "cause": "Collet taper contamination or low-grade angular contact bearings",
          "severity": 7,
          "occurrence": 4,
          "detection": 2,
          "rpn": 56,
          "action": "Specify ER11 collet with runout < 0.005 mm and matched pair 7002C P4 angular contact bearings.",
          "postActionRPN": 14
        },
        {
          "subsystem": "X/Y Axis Gantry",
          "failureMode": "Racking / skewing of dual Y-axis gantry",
          "effect": "Non-perpendicular axes, oval circles cut during contouring",
          "cause": "Lost steps on one side of dual Y-stepper drive without independent homing",
          "severity": 8,
          "occurrence": 3,
          "detection": 3,
          "rpn": 72,
          "action": "Install independent optical dual homing limit switches with automatic firmware gantry auto-squaring.",
          "postActionRPN": 16
        }
      ],
      "raciMatrix": [
        {
          "activity": "Kinematic synthesis calculations & MATLAB simulation",
          "leadMech": "A/R",
          "embedded": "I",
          "feaAnalyst": "C",
          "machinist": "I"
        },
        {
          "activity": "SolidWorks 3D CAD modeling & tolerance allocation",
          "leadMech": "A/R",
          "embedded": "C",
          "feaAnalyst": "C",
          "machinist": "C"
        },
        {
          "activity": "ANSYS dynamic stress FEA & contact pressure study",
          "leadMech": "C",
          "embedded": "I",
          "feaAnalyst": "A/R",
          "machinist": "I"
        },
        {
          "activity": "Raw material procurement & vendor quotes",
          "leadMech": "A",
          "embedded": "C",
          "feaAnalyst": "I",
          "machinist": "R"
        },
        {
          "activity": "CNC VMC toolpath generation & Wire EDM slotting",
          "leadMech": "C",
          "embedded": "I",
          "feaAnalyst": "I",
          "machinist": "A/R"
        },
        {
          "activity": "Microcontroller PWM coding & optical sensor wiring",
          "leadMech": "C",
          "embedded": "A/R",
          "feaAnalyst": "I",
          "machinist": "I"
        },
        {
          "activity": "Mechanical subassembly, bearing shimming & runout alignment",
          "leadMech": "A/R",
          "embedded": "C",
          "feaAnalyst": "I",
          "machinist": "R"
        },
        {
          "activity": "Laser displacement repeatability logging & DVT validation",
          "leadMech": "A",
          "embedded": "R",
          "feaAnalyst": "R",
          "machinist": "C"
        },
        {
          "activity": "Final academic report synthesis & thesis compilation",
          "leadMech": "A/R",
          "embedded": "R",
          "feaAnalyst": "R",
          "machinist": "R"
        }
      ],
      "manufacturingRouting": [
        {
          "opNo": 11,
          "part": "Phase 1: Frame Squaring & Rail Mounting",
          "machine": "Precision Machinist Square & Feeler Gauges",
          "operation": "Extrusion Frame Squaring & Tramming",
          "parameters": "Corner perpendicularity within 0.05 mm across 400 mm",
          "tolerance": "Corner perpendicularity within 0.05 mm across 400 mm",
          "qcCheck": "Tighten corner bracket bolts in diagonal star pattern."
        },
        {
          "opNo": 12,
          "part": "Phase 1: Frame Squaring & Rail Mounting",
          "machine": "Dial Test Indicator (DTI) mounted to carriage",
          "operation": "Linear Rail Guide Parallelism Alignment",
          "parameters": "Rail parallelism within 0.015 mm over full length",
          "tolerance": "Rail parallelism within 0.015 mm over full length",
          "qcCheck": "Lightly finger-tighten rail screws, then sweep indicator along the master rail before final torquing."
        },
        {
          "opNo": 13,
          "part": "Phase 1: Frame Squaring & Rail Mounting",
          "machine": "Torque Wrench & Spanner",
          "operation": "Ballscrew Fixed/Floating Bearing Installation",
          "parameters": "Preload BK10 angular contact bearings to remove axial float",
          "tolerance": "Preload BK10 angular contact bearings to remove axial float",
          "qcCheck": "Do not rotate ballnut off the screw raceway without arbor sleeve."
        },
        {
          "opNo": 24,
          "part": "Phase 2: Spindle Tramming & Electronics Setup",
          "machine": "Twin-Dial Tramming Tool swept across 150mm circle",
          "operation": "Spindle Perpendicularity Tramming",
          "parameters": "Spindle nodding and tilt < 0.02 mm",
          "tolerance": "Spindle nodding and tilt < 0.02 mm",
          "qcCheck": "Shim spindle clamp using 0.02mm brass foil as necessary."
        },
        {
          "opNo": 25,
          "part": "Phase 2: Spindle Tramming & Electronics Setup",
          "machine": "Multimeter Continuity & Scope",
          "operation": "Wiring, Shielding & Limit Switch Verification",
          "parameters": "Verify normally-closed (NC) fail-safe limit circuit",
          "tolerance": "Verify normally-closed (NC) fail-safe limit circuit",
          "qcCheck": "Earth-ground all metal chassis rails to AC mains earth to protect against static."
        },
        {
          "opNo": 26,
          "part": "Phase 2: Spindle Tramming & Electronics Setup",
          "machine": "Optical Microscope & Mitutoyo Micrometer",
          "operation": "Test Cuts on FR4 PCB & Aluminium 6061",
          "parameters": "Measure 20mm test square coupon dimensions",
          "tolerance": "Measure 20mm test square coupon dimensions",
          "qcCheck": "Always wear safety goggles; use vacuum extraction for hazardous fiberglass PCB dust."
        }
      ],
      "dvtTesting": [
        {
          "id": "DVT-01",
          "title": "Positional Accuracy on X/Y Axis",
          "standard": "ISO / ASTM Engineering Benchmark",
          "equipment": "Precision Calibrated Laboratory Rig",
          "procedure": "Evaluate Positional Accuracy on X/Y Axis under standard operating regime. Theoretical reference: ±0.02 mm.",
          "acceptanceCriteria": "Deviation within acceptable tolerance (observed: +0.005 mm)",
          "observedResult": "±0.025 mm (Deviation: +0.005 mm)",
          "status": "Passed"
        },
        {
          "id": "DVT-02",
          "title": "PCB Isolation Trace Minimum Width",
          "standard": "ISO / ASTM Engineering Benchmark",
          "equipment": "Precision Calibrated Laboratory Rig",
          "procedure": "Evaluate PCB Isolation Trace Minimum Width under standard operating regime. Theoretical reference: 0.20 mm.",
          "acceptanceCriteria": "Deviation within acceptable tolerance (observed: -10.0%)",
          "observedResult": "0.18 mm (Deviation: -10.0%)",
          "status": "Passed"
        },
        {
          "id": "DVT-03",
          "title": "Aluminium Surface Roughness (Ra)",
          "standard": "ISO / ASTM Engineering Benchmark",
          "equipment": "Precision Calibrated Laboratory Rig",
          "procedure": "Evaluate Aluminium Surface Roughness (Ra) under standard operating regime. Theoretical reference: 0.80 microns.",
          "acceptanceCriteria": "Deviation within acceptable tolerance (observed: +18.7%)",
          "observedResult": "0.95 microns (Deviation: +18.7%)",
          "status": "Passed"
        },
        {
          "id": "DVT-04",
          "title": "Spindle Full Load Temperature Rise",
          "standard": "ISO / ASTM Engineering Benchmark",
          "equipment": "Precision Calibrated Laboratory Rig",
          "procedure": "Evaluate Spindle Full Load Temperature Rise under standard operating regime. Theoretical reference: 45 °C.",
          "acceptanceCriteria": "Deviation within acceptable tolerance (observed: -8.8%)",
          "observedResult": "41 °C (Deviation: -8.8%)",
          "status": "Passed"
        }
      ],
      "budgetAnalysis": {
        "budgetPlannedINR": 32000,
        "budgetActualINR": 30800,
        "varianceINR": -1200,
        "budgetPlannedUSD": 385,
        "budgetActualUSD": 370,
        "contingencyReserve": "10% included",
        "savingsHighlights": "Optimized vendor sourcing & shared workshop equipment reduced fabrication expenditure."
      }
    }
  },
  {
    "id": "electro-hydraulic-scissor-lift",
    "title": "Tandem Electro-Hydraulic Scissor Lift with Proportional Flow Control",
    "shortTitle": "Electro-Hydraulic Scissor Lift",
    "category": "Fluids & Hydraulics",
    "categorySlug": "fluids-hydraulics",
    "level": "B.Tech Final Year",
    "difficulty": "Advanced",
    "durationWeeks": 12,
    "teamSize": "4 Members",
    "featured": true,
    "rating": 4.8,
    "estimatedCost": {
      "inr": 29500,
      "usd": 355
    },
    "tags": [
      "Hydraulics",
      "Fluid Power",
      "Scissor Lift",
      "Pascal's Law",
      "Proportional Control"
    ],
    "badge": "Fluid Power Classic",
    "abstract": "This project presents the mechanical synthesis, hydraulic circuit modeling, and fabrication of a tandem electro-hydraulic scissor lift capable of lifting a 250 kg industrial payload from a collapsed height of 180 mm to a maximum elevation of 950 mm. The hydraulic power pack utilizes an electric motor driven gear pump, pilot-operated check valves for zero-drift holding, and an electronic PWM proportional flow valve for jerk-free acceleration and deceleration during ascent and descent.",
    "problemStatement": "Manual material handling in warehouses and assembly factories accounts for over 35% of occupational musculoskeletal injuries. Existing mechanical screw lifts suffer from high friction wear and sluggish cycle times, while basic bang-bang solenoid hydraulic lifts exhibit violent stopping jolts that damage fragile payloads. A smooth, energy-efficient electro-hydraulic lift with fail-safe anti-drop locks is essential for modern ergonomics.",
    "objectives": [
      "Derive kinematic linkage position and hydraulic cylinder thrust equations as a function of scissor angle theta.",
      "Design and FEA analyze the scissor linkage arms (hollow rectangular steel sections) for buckling and bending.",
      "Build a hydraulic power unit (HPU) operating at 120 bar with a 1.2 kW DC motor and 1.6 cc/rev external gear pump.",
      "Integrate an electronic proportional valve controller with ultrasonic height feedback for closed-loop leveling.",
      "Validate load lifting capacity, platform deflection, hydraulic pressure transients, and safety descent shutoff."
    ],
    "workingPrinciple": {
      "summary": "The scissor lift works on Pascal's Principle: pressure applied to an enclosed fluid is transmitted undiminished in all directions. Pressurized hydraulic fluid (ISO VG 46) pumped into twin double-acting hydraulic cylinders forces the piston rods to extend. The cylinders, mounted between the base chassis and inner scissor arms, convert linear thrust into angular rotation of the pantograph linkages, causing the upper platform to rise vertically with strictly parallel orientation.",
      "fundamentalLaws": [
        "Pascal's Law of Fluid Pressure Transmission (P = F / A)",
        "Virtual Work Principle for Kinematic Linkage Analysis (delta W = 0)",
        "Euler's Column Buckling Formula for Hydraulic Cylinder Rods: P_cr = (pi² * E * I) / (K * L)²",
        "Fluid Continuity Equation: Q = A * v"
      ],
      "operatingSequence": [
        {
          "step": 1,
          "title": "Hydraulic Fluid Pressurization",
          "description": "12V 1.2kW motor spins the gear pump at 2400 RPM, drawing oil from the 5L tank and delivering flow at 120 bar."
        },
        {
          "step": 2,
          "title": "Proportional Flow Metering",
          "description": "Microcontroller ramps PWM duty cycle to the proportional valve, delivering smooth fluid entry to the cylinders."
        },
        {
          "step": 3,
          "title": "Scissor Arm Expansion",
          "description": "Cylinders push the cross-pinned pivot points. The fixed pivot rotates while the roller-guided end slides smoothly along hardened base tracks."
        },
        {
          "step": 4,
          "title": "Pilot-Operated Zero-Drift Lock",
          "description": "When target height is reached, pilot check valves mechanically lock oil inside the cylinder chambers, preventing any sink even under full load."
        }
      ],
      "energyTransfer": "Electrical Input (12V DC) -> Hydraulic Pump Fluid Kinetic & Pressure Energy -> Cylinder Piston Mechanical Thrust -> Scissor Linkage Kinematics -> Gravitational Potential Energy."
    },
    "cadAndSpecs": {
      "dimensions": {
        "length": "1000 mm",
        "width": "600 mm",
        "height": "180 mm (Collapsed) to 950 mm (Extended)",
        "totalWeight": "48.0 kg"
      },
      "tolerances": "Platform levelness deviation < 1.5 mm across diagonal, Pin-bushing clearance: 0.05 mm",
      "materialsMain": [
        "Structural Mild Steel IS 2062 (Rectangular Hollow Sections 50x25x3mm)",
        "Hard Chrome Plated Steel Rod (Cylinder Piston)",
        "Bronze Bushings SAE 660 (Pivot Joints)",
        "Chequered Aluminium Plate (Top Platform Surface)"
      ],
      "cadSoftwareRecommended": [
        "SolidWorks 2024",
        "Automation Studio (Hydraulic Circuit Simulation)",
        "ANSYS Static Structural"
      ],
      "assemblyPartsCount": 64,
      "blueprintFeatures": [
        {
          "view": "Scissor Linkage Kinematic Geometry",
          "description": "Shows pin locations, cylinder attachment points (d = 280 mm from pivot), and roller track travel envelope.",
          "criticalDimensions": "Link Length: 800.0 mm, Scissor Angle Range: 14° to 62°"
        },
        {
          "view": "Hydraulic Manifold & Power Pack Section",
          "description": "Integrated manifold block with relief valve set to 140 bar, check valve, and solenoid descent cartridge.",
          "criticalDimensions": "Tank Volume: 5.0 Liters"
        },
        {
          "view": "Base Roller Track & Safety Chock",
          "description": "Hardened guide rails with mechanical anti-overtravel limit stops and maintenance safety support struts.",
          "criticalDimensions": "Roller Dia: 40.0 mm"
        }
      ],
      "visualType": "hydraulic-lift"
    },
    "billOfMaterials": [
      {
        "itemNumber": 1,
        "partName": "Double-Acting Hydraulic Cylinder",
        "specification": "Bore 40mm x Stroke 250mm, Rod Dia 22mm, Rated 160 Bar, Clevis ends",
        "material": "St52 Honed Steel Tube & Chrome Rod",
        "quantity": 2,
        "unitCostINR": 4800,
        "unitCostUSD": 58,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 2,
        "partName": "Compact DC Hydraulic Power Pack",
        "specification": "12V DC 1.2kW, 1.6 cc/rev Gear Pump, 5L Steel Reservoir Tank",
        "material": "Commercial Hydraulic Power Unit",
        "quantity": 1,
        "unitCostINR": 8500,
        "unitCostUSD": 102,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 3,
        "partName": "Proportional PWM Flow Control Valve",
        "specification": "12V Proportional Solenoid, 0-15 L/min with Integrated Relief Valve",
        "material": "Ductile Iron Manifold Body",
        "quantity": 1,
        "unitCostINR": 3800,
        "unitCostUSD": 46,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 4,
        "partName": "Pilot-Operated Check Valve (Hose Burst Safety)",
        "specification": "G 3/8 Ports, Pilot Ratio 4:1, Zero-Leak Poppet Type",
        "material": "Steel Hardened Internal Components",
        "quantity": 2,
        "unitCostINR": 1200,
        "unitCostUSD": 14.5,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 5,
        "partName": "Scissor Arms Hollow Steel Sections",
        "specification": "50mm x 25mm x 3mm RHS Structural Tube (8 links, 800mm each)",
        "material": "Mild Steel IS 4923 Grade YSt 240",
        "quantity": 8,
        "unitCostINR": 320,
        "unitCostUSD": 3.8,
        "procurementType": "Laser Cut / Welded"
      },
      {
        "itemNumber": 6,
        "partName": "High-Pressure Hydraulic Hoses & Fittings",
        "specification": "SAE 100 R2AT 2-Wire Braided Hose, Working Pressure 215 Bar",
        "material": "Synthetic Rubber with High-Tensile Steel Wire",
        "quantity": 4,
        "unitCostINR": 650,
        "unitCostUSD": 7.8,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 7,
        "partName": "Oil-Impregnated Sintered Bronze Bushings",
        "specification": "ID 20mm x OD 24mm x 25mm L (Self-Lubricating)",
        "material": "SAE 841 Sintered Bronze",
        "quantity": 12,
        "unitCostINR": 110,
        "unitCostUSD": 1.3,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 8,
        "partName": "Chequered Top Platform & Base Frame",
        "specification": "1000mm x 600mm welded frame with 3mm aluminium tread plate",
        "material": "Steel Frame / Aluminium Tread",
        "quantity": 1,
        "unitCostINR": 3200,
        "unitCostUSD": 38.5,
        "procurementType": "Laser Cut / Welded"
      }
    ],
    "costBreakdown": {
      "mechanicalHardware": 13500,
      "electronicsAndSensors": 6800,
      "rawMaterials": 5200,
      "machiningAndFabrication": 4000
    },
    "electronicsAndSensors": {
      "microcontroller": "Arduino Mega 2560 / ESP32 Industrial Node",
      "sensors": [
        {
          "name": "Laser / Ultrasonic Height Sensor",
          "model": "TOF050C Time-of-Flight (0-2m Range)",
          "function": "Measures instantaneous platform elevation with 1mm resolution",
          "operatingVoltage": "3.3V - 5V I2C"
        },
        {
          "name": "Hydraulic Pressure Transducer",
          "model": "Keller 0-200 Bar (4-20mA Output)",
          "function": "Monitors main cylinder pressure to detect overload conditions",
          "operatingVoltage": "12V - 24V DC"
        },
        {
          "name": "Safety Foot-Bar Limit Switch",
          "model": "Mechanical Safety Trip Wire Sensor",
          "function": "Emergency cut-off if hands or feet enter scissor pinch points during lowering",
          "operatingVoltage": "12V DC"
        }
      ],
      "actuators": [
        {
          "name": "Hydraulic Pump DC Motor",
          "type": "Heavy-Duty Series-Wound DC Motor",
          "torqueOrForce": "4.8 Nm at 2400 RPM",
          "powerRating": "12V 1.2kW (120A Inrush)"
        },
        {
          "name": "Proportional Flow Solenoid",
          "type": "Proportional Solenoid Valve Coil",
          "torqueOrForce": "18W Continuous",
          "powerRating": "12V PWM 0-1.5A"
        }
      ],
      "powerSupply": "12V 80Ah Deep Cycle AGM Battery with 15A Smart Float Charger",
      "wiringSummary": "High-current motor starter relay (200A continuous rating) with auxiliary fused safety interlock loop.",
      "circuitPinouts": [
        {
          "pin": "D5 (PWM)",
          "component": "Proportional Valve MOSFET Driver",
          "signalType": "High-Side PWM (500 Hz)"
        },
        {
          "pin": "A0",
          "component": "Pressure Transducer (via 250 Ohm resistor)",
          "signalType": "1-5V Analog Voltage"
        },
        {
          "pin": "D2 (INT0)",
          "component": "Emergency Stop Button / Trip Bar",
          "signalType": "Hardware Emergency Stop Interrupt"
        }
      ]
    },
    "designCalculations": {
      "title": "Cylinder Thrust Force, Hydraulic Pressure, and Link Stress",
      "overview": "Evaluates the maximum hydraulic thrust force required by the cylinders at the lowest collapsed scissor angle (theta = 14°), where mechanical advantage is minimum and cylinder force is maximum.",
      "formulas": [
        {
          "name": "Maximum Cylinder Thrust Force (F_cyl)",
          "symbol": "F_cyl = (W_total / 2) * (1 / (tan(theta) * sin(beta)))",
          "formula": "F_{cyl} = \\frac{W_{load}}{2 \\cdot \\sin(\\theta)} \\cdot \\frac{L_{arm}}{d_{cyl}}",
          "explanation": "At minimum angle theta = 14° carrying total load W = 2500 N with cylinder attach ratio L/d = 2.85.",
          "exampleCalculation": "F_cyl = (2500 / (2 * sin(14°))) * 2.85 = (2500 / 0.4838) * 2.85 = 5167 * 2.85 = 14,726 N",
          "result": "14.7 kN Total Thrust (7.36 kN per cylinder)"
        },
        {
          "name": "Required Hydraulic System Pressure (P_sys)",
          "symbol": "P_sys = F_per_cyl / A_piston",
          "formula": "P = \\frac{F_{cyl,single}}{\\frac{\\pi}{4} \\cdot D_{bore}^2}",
          "explanation": "Hydraulic pressure inside a 40 mm bore cylinder (A = 1256.6 mm²) to deliver 7363 N of thrust.",
          "exampleCalculation": "P = 7363 N / 1256.6 mm² = 5.86 N/mm² = 58.6 bar (Relief valve set to 120 bar, FOS = 2.05)",
          "result": "58.6 bar Working Pressure"
        },
        {
          "name": "Piston Rod Column Buckling Safety (P_crit)",
          "symbol": "P_crit = (pi² * E * I) / (K * L)²",
          "formula": "P_{cr} = \\frac{\\pi^2 \\cdot E \\cdot \\frac{\\pi \\cdot d^4}{64}}{(2 \\cdot L)^2}",
          "explanation": "Euler buckling load of 22mm chrome rod over 250mm extended length (E = 210 GPa).",
          "exampleCalculation": "I = pi*(22)^4 / 64 = 11,499 mm^4; P_crit = (pi² * 210,000 * 11,499) / (2 * 250)² = 23.8e9 / 250,000 = 95,200 N (FOS > 12)",
          "result": "95.2 kN Critical Buckling Load"
        }
      ],
      "calculatorConfig": {
        "title": "Scissor Lift Force & Pressure Sizing Calculator",
        "param1Name": "payloadKg",
        "param1Label": "Total Payload Mass",
        "param1Unit": "kg",
        "param1Default": 250,
        "param1Min": 50,
        "param1Max": 600,
        "param1Step": 25,
        "param2Name": "scissorAngleDeg",
        "param2Label": "Current Scissor Angle",
        "param2Unit": "Degrees",
        "param2Default": 14,
        "param2Min": 14,
        "param2Max": 62,
        "param2Step": 2,
        "formulaType": "hydraulic_force"
      }
    },
    "fabricationSequence": [
      {
        "phase": "Phase 1: Scissor Linkage & Chassis Fabrication",
        "steps": [
          {
            "order": 1,
            "operation": "Cutting & Boring of Scissor Hollow Sections",
            "machineOrTool": "Horizontal Bandsaw & Radial Drilling Machine",
            "parametersOrTolerance": "Center-to-center hole spacing tolerance ±0.05 mm",
            "safetyPrecaution": "Clamp all 8 arms in a single gang jig to ensure identical hole center spacing."
          },
          {
            "order": 2,
            "operation": "Bronze Bushing Press-Fitting & Reaming",
            "machineOrTool": "Hand Hydraulic Press & Adjustable Reamer",
            "parametersOrTolerance": "Ream to 20.00 mm (+0.02 / -0.00 mm)",
            "safetyPrecaution": "Apply lubrication oil; do not hammer bushings directly."
          },
          {
            "order": 3,
            "operation": "Base Chassis & Guide Track Welding",
            "machineOrTool": "MIG Welding Machine (AWS ER70S-6 Wire)",
            "parametersOrTolerance": "Ensure parallel tracks within 0.5 mm across length",
            "safetyPrecaution": "Wear auto-darkening welding helmet and flame-resistant leather gloves."
          }
        ]
      },
      {
        "phase": "Phase 2: Hydraulic Integration & Testing",
        "steps": [
          {
            "order": 4,
            "operation": "Hydraulic Cylinder & Manifold Plumbing",
            "machineOrTool": "Hydraulic Flaring & Torque Wrenches",
            "parametersOrTolerance": "Torque JIC fittings to 35 Nm with clean O-rings",
            "safetyPrecaution": "Flush hoses with clean ISO 46 oil before connecting to prevent valve contamination."
          },
          {
            "order": 5,
            "operation": "System Air Bleeding & Relief Valve Setting",
            "machineOrTool": "Pressure Test Gauge & Bleed Valves",
            "parametersOrTolerance": "Cycle lift 5 times with bleeder open to expel air bubbles",
            "safetyPrecaution": "Never use hands to check for pinhole hydraulic leaks; hydraulic injection injury is life-threatening."
          },
          {
            "order": 6,
            "operation": "Electronic Flow Ramp Tuning",
            "machineOrTool": "Arduino IDE Serial Plotter",
            "parametersOrTolerance": "Tune PWM soft-start curve to 1.5s ramp",
            "safetyPrecaution": "Engage mechanical safety maintenance chocks before inspecting under raised platform."
          }
        ]
      }
    ],
    "testingAndResults": {
      "testMethodology": "The lift was loaded in increments from 50 kg to 275 kg (110% rated capacity). Platform vertical deflection, pressure spikes during start/stop, cylinder oil temperature, and holding drift over 4 hours were recorded.",
      "performanceMetrics": [
        {
          "metric": "Maximum Tested Payload",
          "theoreticalValue": "250",
          "experimentalValue": "275",
          "unit": "kg",
          "deviationPercent": "+10.0%",
          "status": "Passed"
        },
        {
          "metric": "Full Lift Ascent Time (0 to 950 mm)",
          "theoreticalValue": "14.5",
          "experimentalValue": "15.2",
          "unit": "seconds",
          "deviationPercent": "+4.8%",
          "status": "Optimal"
        },
        {
          "metric": "Holding Drift over 4 Hours (Full Load)",
          "theoreticalValue": "0.0",
          "experimentalValue": "0.5",
          "unit": "mm",
          "deviationPercent": "+0.5 mm",
          "status": "Optimal"
        },
        {
          "metric": "Platform Diagonal Level Deviation",
          "theoreticalValue": "< 2.0",
          "experimentalValue": "1.2",
          "unit": "mm",
          "deviationPercent": "-0.8 mm",
          "status": "Passed"
        }
      ],
      "chartData": {
        "xLabel": "Scissor Angle theta (Degrees)",
        "yTheoreticalLabel": "Theoretical Hydraulic Pressure (Bar)",
        "yActualLabel": "Measured Gauge Pressure (Bar)",
        "dataPoints": [
          {
            "x": 14,
            "yTheoretical": 58.6,
            "yActual": 62.1
          },
          {
            "x": 20,
            "yTheoretical": 42.4,
            "yActual": 45.2
          },
          {
            "x": 30,
            "yTheoretical": 29.8,
            "yActual": 31.5
          },
          {
            "x": 40,
            "yTheoretical": 23.2,
            "yActual": 24.8
          },
          {
            "x": 50,
            "yTheoretical": 19.5,
            "yActual": 20.6
          },
          {
            "x": 62,
            "yTheoretical": 17.2,
            "yActual": 18
          }
        ]
      },
      "conclusions": "The electro-hydraulic scissor lift achieved all design goals, successfully elevating a 275 kg payload with exceptional stability. The proportional PWM valve eliminated dynamic hydraulic shocks by 74%, while pilot-operated check valves restricted vertical drift to less than 0.5 mm over 4 hours."
    },
    "softwareStack": {
      "cad": [
        "SolidWorks 2024 (Linkage Geometry & Motion)",
        "PTC Creo Parametric"
      ],
      "caeSimulation": [
        "Automation Studio 7.0 (Hydraulic Circuit Simulation)",
        "ANSYS Mechanical (Link FEA & Pin Shear)"
      ],
      "programmingAndIde": [
        "Arduino IDE 2.3",
        "MATLAB Simulink (Hydraulic Transient Modeling)"
      ]
    },
    "prosAndCons": {
      "pros": [
        "Tremendous lifting force (over 250 kg) achieved with compact 12V automotive power pack.",
        "Zero electrical power consumed when holding static elevated position due to pilot check valves.",
        "Proportional valve delivers soft-start and soft-stop acceleration without hydraulic hammer.",
        "Integrated mechanical safety maintenance props ensure operator safety during service."
      ],
      "cons": [
        "Requires periodic fluid maintenance and seal inspection to prevent oil seepage.",
        "High initial inrush current (120A for 0.5s) requires heavy battery wiring."
      ],
      "industrialLimitations": "Non-linear relationship between cylinder stroke and vertical platform velocity requires software look-up tables for constant lift speeds."
    },
    "futureScope": [
      "Replacing hydraulic oil with bio-degradable vegetable ester fluid for environmentally sensitive food and pharma plants.",
      "Integrating automated AGV wheel base for autonomous mobile warehouse pallet transport.",
      "Adding multi-axis load cells to display real-time weight on digital LCD and sound overload alarms."
    ],
    "references": [
      "Fluid Power with Applications, 7th Edition, Anthony Esposito.",
      "Hydraulic Control Systems, Noah D. Manring and R. C. Fales.",
      "ASME B20.1: Safety Standard for Conveyors and Related Equipment (Industrial Scissor Lifts)."
    ],
    "reportChapters": [
      {
        "chapterNumber": 1,
        "title": "Introduction & Ergonomic Material Handling",
        "summary": "Industrial ergonomics, workplace injury statistics, and comparison of pneumatic, screw, and hydraulic lifting mechanisms."
      },
      {
        "chapterNumber": 2,
        "title": "Pantograph Kinematics & Geometric Synthesis",
        "summary": "Virtual work principle, trigonometric force resolution, and cylinder mounting angle optimization."
      },
      {
        "chapterNumber": 3,
        "title": "Hydraulic System Architecture & Circuit Schematic",
        "summary": "Pump displacement calculation, reservoir thermal dissipation sizing, and manifold valve selection."
      },
      {
        "chapterNumber": 4,
        "title": "Mechanical Design, Buckling & FEA Verification",
        "summary": "Euler column buckling of piston rods, bending stress in rectangular hollow links, and pin shear analysis."
      },
      {
        "chapterNumber": 5,
        "title": "Testing, Dynamic Pressure Transients & Drift",
        "summary": "Experimental pressure curves across full angle range, soft-start deceleration graphs, and proof load test."
      },
      {
        "chapterNumber": 6,
        "title": "Safety Compliance, Cost Auditing & Future Outlook",
        "summary": "OSHA & CE scissor lift compliance, breakdown of total fabrication budget ($355), and mobile robot adaptation."
      }
    ],
    "planning": {
      "durationWeeks": 12,
      "scheduleType": "12-Week Heavy Machinery & Fluid Power Project Roadmap",
      "phases": [
        {
          "number": 1,
          "title": "Scissor Linkage Kinematics & Cylinder Stroke Sizing",
          "weeks": "W1 - W2",
          "status": "Completed",
          "completionPercent": 100,
          "milestone": "Toggle Angle & Peak Hydraulic Pressure Formulated",
          "leadRole": "Fluid Power Lead"
        },
        {
          "number": 2,
          "title": "Structural FEA of Pantograph Arms & Base Chassis",
          "weeks": "W3 - W4",
          "status": "Completed",
          "completionPercent": 100,
          "milestone": "350 kg Safe Working Load (SWL) FEA Approved",
          "leadRole": "Structural Analyst"
        },
        {
          "number": 3,
          "title": "Pin Bushing Machining & Steel Linkage Laser Cutting",
          "weeks": "W5 - W7",
          "status": "Completed",
          "completionPercent": 100,
          "milestone": "Hardened Chrome Pins & Oilite Bronze Bushings Fitted",
          "leadRole": "Workshop Lead"
        },
        {
          "number": 4,
          "title": "Hydraulic Power Pack, Solenoid Valves & Hose Plumbing",
          "weeks": "W8 - W9",
          "status": "In Progress",
          "completionPercent": 85,
          "milestone": "Pressure Relief Valve Calibrated to 140 Bar; Leak Free",
          "leadRole": "Hydraulics Specialist"
        },
        {
          "number": 5,
          "title": "Safety Velocity Fuse, Interlocks & Electric Pendant",
          "weeks": "W10 - W11",
          "status": "In Progress",
          "completionPercent": 65,
          "milestone": "Hose Burst Anti-Drop Test Passed at 100% Load",
          "leadRole": "Safety / Electrical Engineer"
        },
        {
          "number": 6,
          "title": "Proof Load Testing (125% Overload) & Final Defense",
          "weeks": "W11 - W12",
          "status": "Planned",
          "completionPercent": 15,
          "milestone": "EN 280 Mobile Elevating Work Platform Standard Passed",
          "leadRole": "Project Lead"
        }
      ],
      "wbs": [
        {
          "id": "1.0",
          "name": "Scissor Linkage Kinematics & Cylinder Stroke Sizing",
          "owner": "Fluid Power Lead",
          "duration": "W1 - W2",
          "subtasks": [
            {
              "id": "1.1",
              "name": "Toggle Angle & Peak Hydraulic Pressure Formulated",
              "estHours": 12,
              "status": "Done"
            }
          ]
        },
        {
          "id": "2.0",
          "name": "Structural FEA of Pantograph Arms & Base Chassis",
          "owner": "Structural Analyst",
          "duration": "W3 - W4",
          "subtasks": [
            {
              "id": "2.1",
              "name": "350 kg Safe Working Load (SWL) FEA Approved",
              "estHours": 12,
              "status": "Done"
            }
          ]
        },
        {
          "id": "3.0",
          "name": "Pin Bushing Machining & Steel Linkage Laser Cutting",
          "owner": "Workshop Lead",
          "duration": "W5 - W7",
          "subtasks": [
            {
              "id": "3.1",
              "name": "Hardened Chrome Pins & Oilite Bronze Bushings Fitted",
              "estHours": 12,
              "status": "Done"
            }
          ]
        },
        {
          "id": "4.0",
          "name": "Hydraulic Power Pack, Solenoid Valves & Hose Plumbing",
          "owner": "Hydraulics Specialist",
          "duration": "W8 - W9",
          "subtasks": [
            {
              "id": "4.1",
              "name": "Pressure Relief Valve Calibrated to 140 Bar; Leak Free",
              "estHours": 12,
              "status": "In Progress"
            }
          ]
        },
        {
          "id": "5.0",
          "name": "Safety Velocity Fuse, Interlocks & Electric Pendant",
          "owner": "Safety / Electrical Engineer",
          "duration": "W10 - W11",
          "subtasks": [
            {
              "id": "5.1",
              "name": "Hose Burst Anti-Drop Test Passed at 100% Load",
              "estHours": 12,
              "status": "In Progress"
            }
          ]
        },
        {
          "id": "6.0",
          "name": "Proof Load Testing (125% Overload) & Final Defense",
          "owner": "Project Lead",
          "duration": "W11 - W12",
          "subtasks": [
            {
              "id": "6.1",
              "name": "EN 280 Mobile Elevating Work Platform Standard Passed",
              "estHours": 12,
              "status": "Planned"
            }
          ]
        }
      ],
      "fmea": [
        {
          "subsystem": "Hydraulic Cylinder Hose",
          "failureMode": "High pressure hose rupture under load",
          "effect": "Platform rapid uncontrolled descent, severe crush hazard",
          "cause": "Hydraulic pressure surge or hose abrasion against sharp steel scissor corner",
          "severity": 10,
          "occurrence": 2,
          "detection": 2,
          "rpn": 40,
          "action": "Threaded velocity fuse safety cartridge directly into cylinder port; encase hoses in heavy-duty spiral wrap.",
          "postActionRPN": 10
        },
        {
          "subsystem": "Pivot Hinge Pins",
          "failureMode": "Pin seizure due to galling under heavy load",
          "effect": "Scissor arms bind, hydraulic pressure spikes and relief valve opens",
          "cause": "Unlubricated steel-on-steel contact with high bearing surface pressure",
          "severity": 8,
          "occurrence": 3,
          "detection": 3,
          "rpn": 72,
          "action": "Install press-fit sintered bronze bushings impregnated with SAE 30 oil; add grease nipples at every pivot.",
          "postActionRPN": 16
        }
      ],
      "raciMatrix": [
        {
          "activity": "Kinematic synthesis calculations & MATLAB simulation",
          "leadMech": "A/R",
          "embedded": "I",
          "feaAnalyst": "C",
          "machinist": "I"
        },
        {
          "activity": "SolidWorks 3D CAD modeling & tolerance allocation",
          "leadMech": "A/R",
          "embedded": "C",
          "feaAnalyst": "C",
          "machinist": "C"
        },
        {
          "activity": "ANSYS dynamic stress FEA & contact pressure study",
          "leadMech": "C",
          "embedded": "I",
          "feaAnalyst": "A/R",
          "machinist": "I"
        },
        {
          "activity": "Raw material procurement & vendor quotes",
          "leadMech": "A",
          "embedded": "C",
          "feaAnalyst": "I",
          "machinist": "R"
        },
        {
          "activity": "CNC VMC toolpath generation & Wire EDM slotting",
          "leadMech": "C",
          "embedded": "I",
          "feaAnalyst": "I",
          "machinist": "A/R"
        },
        {
          "activity": "Microcontroller PWM coding & optical sensor wiring",
          "leadMech": "C",
          "embedded": "A/R",
          "feaAnalyst": "I",
          "machinist": "I"
        },
        {
          "activity": "Mechanical subassembly, bearing shimming & runout alignment",
          "leadMech": "A/R",
          "embedded": "C",
          "feaAnalyst": "I",
          "machinist": "R"
        },
        {
          "activity": "Laser displacement repeatability logging & DVT validation",
          "leadMech": "A",
          "embedded": "R",
          "feaAnalyst": "R",
          "machinist": "C"
        },
        {
          "activity": "Final academic report synthesis & thesis compilation",
          "leadMech": "A/R",
          "embedded": "R",
          "feaAnalyst": "R",
          "machinist": "R"
        }
      ],
      "manufacturingRouting": [
        {
          "opNo": 11,
          "part": "Phase 1: Scissor Linkage & Chassis Fabrication",
          "machine": "Horizontal Bandsaw & Radial Drilling Machine",
          "operation": "Cutting & Boring of Scissor Hollow Sections",
          "parameters": "Center-to-center hole spacing tolerance ±0.05 mm",
          "tolerance": "Center-to-center hole spacing tolerance ±0.05 mm",
          "qcCheck": "Clamp all 8 arms in a single gang jig to ensure identical hole center spacing."
        },
        {
          "opNo": 12,
          "part": "Phase 1: Scissor Linkage & Chassis Fabrication",
          "machine": "Hand Hydraulic Press & Adjustable Reamer",
          "operation": "Bronze Bushing Press-Fitting & Reaming",
          "parameters": "Ream to 20.00 mm (+0.02 / -0.00 mm)",
          "tolerance": "Ream to 20.00 mm (+0.02 / -0.00 mm)",
          "qcCheck": "Apply lubrication oil; do not hammer bushings directly."
        },
        {
          "opNo": 13,
          "part": "Phase 1: Scissor Linkage & Chassis Fabrication",
          "machine": "MIG Welding Machine (AWS ER70S-6 Wire)",
          "operation": "Base Chassis & Guide Track Welding",
          "parameters": "Ensure parallel tracks within 0.5 mm across length",
          "tolerance": "Ensure parallel tracks within 0.5 mm across length",
          "qcCheck": "Wear auto-darkening welding helmet and flame-resistant leather gloves."
        },
        {
          "opNo": 24,
          "part": "Phase 2: Hydraulic Integration & Testing",
          "machine": "Hydraulic Flaring & Torque Wrenches",
          "operation": "Hydraulic Cylinder & Manifold Plumbing",
          "parameters": "Torque JIC fittings to 35 Nm with clean O-rings",
          "tolerance": "Torque JIC fittings to 35 Nm with clean O-rings",
          "qcCheck": "Flush hoses with clean ISO 46 oil before connecting to prevent valve contamination."
        },
        {
          "opNo": 25,
          "part": "Phase 2: Hydraulic Integration & Testing",
          "machine": "Pressure Test Gauge & Bleed Valves",
          "operation": "System Air Bleeding & Relief Valve Setting",
          "parameters": "Cycle lift 5 times with bleeder open to expel air bubbles",
          "tolerance": "Cycle lift 5 times with bleeder open to expel air bubbles",
          "qcCheck": "Never use hands to check for pinhole hydraulic leaks; hydraulic injection injury is life-threatening."
        },
        {
          "opNo": 26,
          "part": "Phase 2: Hydraulic Integration & Testing",
          "machine": "Arduino IDE Serial Plotter",
          "operation": "Electronic Flow Ramp Tuning",
          "parameters": "Tune PWM soft-start curve to 1.5s ramp",
          "tolerance": "Tune PWM soft-start curve to 1.5s ramp",
          "qcCheck": "Engage mechanical safety maintenance chocks before inspecting under raised platform."
        }
      ],
      "dvtTesting": [
        {
          "id": "DVT-01",
          "title": "Maximum Tested Payload",
          "standard": "ISO / ASTM Engineering Benchmark",
          "equipment": "Precision Calibrated Laboratory Rig",
          "procedure": "Evaluate Maximum Tested Payload under standard operating regime. Theoretical reference: 250 kg.",
          "acceptanceCriteria": "Deviation within acceptable tolerance (observed: +10.0%)",
          "observedResult": "275 kg (Deviation: +10.0%)",
          "status": "Passed"
        },
        {
          "id": "DVT-02",
          "title": "Full Lift Ascent Time (0 to 950 mm)",
          "standard": "ISO / ASTM Engineering Benchmark",
          "equipment": "Precision Calibrated Laboratory Rig",
          "procedure": "Evaluate Full Lift Ascent Time (0 to 950 mm) under standard operating regime. Theoretical reference: 14.5 seconds.",
          "acceptanceCriteria": "Deviation within acceptable tolerance (observed: +4.8%)",
          "observedResult": "15.2 seconds (Deviation: +4.8%)",
          "status": "Passed"
        },
        {
          "id": "DVT-03",
          "title": "Holding Drift over 4 Hours (Full Load)",
          "standard": "ISO / ASTM Engineering Benchmark",
          "equipment": "Precision Calibrated Laboratory Rig",
          "procedure": "Evaluate Holding Drift over 4 Hours (Full Load) under standard operating regime. Theoretical reference: 0.0 mm.",
          "acceptanceCriteria": "Deviation within acceptable tolerance (observed: +0.5 mm)",
          "observedResult": "0.5 mm (Deviation: +0.5 mm)",
          "status": "Passed"
        },
        {
          "id": "DVT-04",
          "title": "Platform Diagonal Level Deviation",
          "standard": "ISO / ASTM Engineering Benchmark",
          "equipment": "Precision Calibrated Laboratory Rig",
          "procedure": "Evaluate Platform Diagonal Level Deviation under standard operating regime. Theoretical reference: < 2.0 mm.",
          "acceptanceCriteria": "Deviation within acceptable tolerance (observed: -0.8 mm)",
          "observedResult": "1.2 mm (Deviation: -0.8 mm)",
          "status": "Passed"
        }
      ],
      "budgetAnalysis": {
        "budgetPlannedINR": 26000,
        "budgetActualINR": 25100,
        "varianceINR": -900,
        "budgetPlannedUSD": 310,
        "budgetActualUSD": 300,
        "contingencyReserve": "10% included",
        "savingsHighlights": "Optimized vendor sourcing & shared workshop equipment reduced fabrication expenditure."
      }
    }
  },
  {
    "id": "hybrid-savonius-darrieus-wt",
    "title": "Dual-Rotor Hybrid Savonius-Darrieus Vertical Axis Wind Turbine with MagLev Bearings",
    "shortTitle": "Hybrid MagLev Wind Turbine",
    "category": "Renewable Energy",
    "categorySlug": "renewable-energy",
    "level": "B.Tech Final Year",
    "difficulty": "Advanced",
    "durationWeeks": 14,
    "teamSize": "4 Members",
    "featured": true,
    "rating": 4.8,
    "estimatedCost": {
      "inr": 24000,
      "usd": 290
    },
    "tags": [
      "Renewable Energy",
      "Wind Turbine",
      "Aerodynamics",
      "MagLev",
      "Fluid Dynamics"
    ],
    "badge": "Urban Clean Energy",
    "abstract": "This project presents the aerodynamic design, CFD simulation, and fabrication of a dual-rotor hybrid Vertical Axis Wind Turbine (VAWT) combining an inner Savonius drag-type rotor with an outer Darrieus (NACA 0018) lift-type rotor mounted on a magnetic levitation (MagLev) passive permanent magnet thrust bearing. The hybrid configuration overcomes the poor self-starting capability of Darrieus turbines while achieving higher aerodynamic power coefficients (C_p = 0.34) at cut-in wind speeds as low as 1.8 m/s.",
    "problemStatement": "Traditional Horizontal Axis Wind Turbines (HAWT) require complex yaw mechanisms to face changing wind directions and perform poorly in turbulent urban rooftop environments. Standard Darrieus VAWTs cannot self-start at low wind speeds, while pure Savonius rotors suffer from low peak aerodynamic efficiency (C_p < 0.18). Furthermore, mechanical thrust bearings produce friction losses that drag down low-wind energy harvesting.",
    "objectives": [
      "Perform 2D and 3D ANSYS Fluent unsteady CFD simulations to optimize the Savonius-to-Darrieus diameter ratio.",
      "Design symmetrical NACA 0018 aerodynamic aerofoils using lightweight fiberglass-reinforced composite layups.",
      "Design a frictionless passive magnetic levitation thrust bearing using neodymium (NdFeB N52) ring magnets.",
      "Fabricate a 300W coreless axial-flux permanent magnet generator (AFPMG) with zero cogging torque.",
      "Measure cut-in speed, power coefficient C_p vs tip speed ratio (TSR), and electrical output across 2 m/s to 12 m/s wind speeds."
    ],
    "workingPrinciple": {
      "summary": "The turbine operates omnidirectionally without requiring yaw control. At low wind speeds (1.8 to 3.5 m/s), the inner helical Savonius rotor utilizes aerodynamic drag differential across concave and convex buckets to generate high starting torque. Once rotation accelerates above a tip speed ratio (TSR) of 1.2, the outer Darrieus blades (NACA 0018) generate aerodynamic lift forces that take over propulsion, rapidly accelerating the turbine to optimal operating speeds. Neodymium repulsion magnets levitate the central shaft, eliminating mechanical thrust friction.",
      "fundamentalLaws": [
        "Betz's Law of Wind Power Extraction (Max Theoretical C_p = 16/27 = 59.3%)",
        "Kutta-Joukowski Theorem of Aerodynamic Lift (L' = rho * V_inf * Gamma)",
        "Earnshaw's Theorem & Diamagnetic / Constraint Magnetostatic Levitation",
        "Wind Power Available: P_wind = 0.5 * rho * A * v³"
      ],
      "operatingSequence": [
        {
          "step": 1,
          "title": "Omnidirectional Wind Capture",
          "description": "Turbine accepts wind from any 360-degree direction without needing yaw alignment motors."
        },
        {
          "step": 2,
          "title": "Low-Wind Drag Self-Start",
          "description": "Inner helical Savonius buckets capture wind at 1.8 m/s, overcoming residual mechanical inertia and initiating rotation."
        },
        {
          "step": 3,
          "title": "Transition to High-Speed Lift Mode",
          "description": "As RPM rises, outer NACA 0018 aerofoils generate high lift vectors directed forward along the circular blade trajectory."
        },
        {
          "step": 4,
          "title": "Coreless Direct-Drive Generation",
          "description": "Levitated shaft spins dual rotor plates carrying 16 Neodymium magnets past coreless copper coils, generating clean 3-phase AC power."
        }
      ],
      "energyTransfer": "Wind Atmospheric Kinetic Energy -> Aerodynamic Drag (Savonius) & Lift (Darrieus) -> Levitated Shaft Rotary Kinetic Energy -> Coreless Axial-Flux Generator -> 3-Phase AC -> MPPT Rectifier -> 12V/24V Battery Storage."
    },
    "cadAndSpecs": {
      "dimensions": {
        "length": "850 mm Rotor Dia",
        "width": "850 mm",
        "height": "1200 mm Blade Height",
        "totalWeight": "16.8 kg"
      },
      "tolerances": "Blade profile contour deviation < 0.5 mm, Shaft dynamic runout < 0.03 mm",
      "materialsMain": [
        "Fiberglass Reinforced Epoxy (NACA 0018 Aerofoil Blades)",
        "Aluminium 6061-T6 (Central Hub & Struts)",
        "Neodymium N52 Ring Magnets (MagLev Bearing)",
        "Carbon Fiber Shaft (Central Mast)"
      ],
      "cadSoftwareRecommended": [
        "SolidWorks 2024",
        "QBlade (Wind Turbine Aerodynamic Synthesis)",
        "ANSYS Fluent CFD (Sliding Mesh)"
      ],
      "assemblyPartsCount": 42,
      "blueprintFeatures": [
        {
          "view": "Hybrid Rotor Plan View",
          "description": "Shows 3 outer Darrieus blades at 120° spacing on 850 mm diameter circle and inner 2-bucket helical Savonius rotor.",
          "criticalDimensions": "Rotor Diameter: 850.0 mm, Savonius Dia: 320.0 mm"
        },
        {
          "view": "Passive MagLev Bearing Stack",
          "description": "Opposing repulsive N52 ring magnets (OD 60mm x ID 30mm x 15mm thk) with radial ceramic guide ball bearings.",
          "criticalDimensions": "Magnetic Air Gap: 4.2 mm under full rotor weight"
        },
        {
          "view": "Coreless Axial-Flux Generator Stator",
          "description": "Dual-rotor single-stator layout with 12 vacuum-potted trapezoidal copper coils and zero iron cogging.",
          "criticalDimensions": "Coil Wire: 18 AWG, 110 turns per coil"
        }
      ],
      "visualType": "wind-turbine"
    },
    "billOfMaterials": [
      {
        "itemNumber": 1,
        "partName": "NACA 0018 Composite Blades (Set of 3)",
        "specification": "Chord 120mm x Length 900mm, Symmetrical Aerofoil with Internal Carbon Spar",
        "material": "Fiberglass / Epoxy Composite",
        "quantity": 3,
        "unitCostINR": 2400,
        "unitCostUSD": 29,
        "procurementType": "Custom CNC Machined"
      },
      {
        "itemNumber": 2,
        "partName": "Helical Savonius Inner Rotor",
        "specification": "Diameter 320mm x Height 500mm, 180° Helix Angle for Uniform Torque",
        "material": "Thermoformed Polycarbonate Sheet 2.5mm",
        "quantity": 1,
        "unitCostINR": 2800,
        "unitCostUSD": 33.7,
        "procurementType": "Laser Cut / Welded"
      },
      {
        "itemNumber": 3,
        "partName": "High-Grade Neodymium N52 Ring Magnets",
        "specification": "OD 60mm x ID 32mm x 15mm thickness, Axial Magnetization, Nickel Plated",
        "material": "NdFeB Rare Earth N52",
        "quantity": 4,
        "unitCostINR": 950,
        "unitCostUSD": 11.5,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 4,
        "partName": "Ceramic Hybrid Radial Bearings",
        "specification": "Si3N4 Ceramic Balls with Stainless Steel Races (6006-2RS)",
        "material": "Silicon Nitride / SS440C",
        "quantity": 2,
        "unitCostINR": 850,
        "unitCostUSD": 10.2,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 5,
        "partName": "Aluminium Aero-Struts & Central Flanges",
        "specification": "CNC Milled Aerofoil Strut Arms with Pitch Angle Adjustment",
        "material": "Aluminium 6061-T6",
        "quantity": 6,
        "unitCostINR": 420,
        "unitCostUSD": 5.1,
        "procurementType": "Custom CNC Machined"
      },
      {
        "itemNumber": 6,
        "partName": "Axial-Flux Generator Magnet Discs",
        "specification": "OD 220mm x 8mm thick, 16 Wedge Neodymium Magnets per Disc",
        "material": "Laser Cut Mild Steel Backing Plates",
        "quantity": 2,
        "unitCostINR": 1800,
        "unitCostUSD": 21.7,
        "procurementType": "Laser Cut / Welded"
      },
      {
        "itemNumber": 7,
        "partName": "Stator Coil Assembly & Rectifier",
        "specification": "12 Enamelled Copper Coils cast in Epoxy Resin with 3-Phase Schottky Bridge",
        "material": "Copper 18 AWG & Epoxy",
        "quantity": 1,
        "unitCostINR": 2600,
        "unitCostUSD": 31.3,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 8,
        "partName": "Mast Stand & Ground Flange Mounting",
        "specification": "Heavy 60mm OD Galvanized Steel Pipe with 4 Guy Wire Turnbuckles",
        "material": "Galvanized Steel",
        "quantity": 1,
        "unitCostINR": 1900,
        "unitCostUSD": 22.9,
        "procurementType": "Laser Cut / Welded"
      }
    ],
    "costBreakdown": {
      "mechanicalHardware": 10200,
      "electronicsAndSensors": 5800,
      "rawMaterials": 4800,
      "machiningAndFabrication": 3200
    },
    "electronicsAndSensors": {
      "microcontroller": "ESP32 IoT Node with LoRa Telemetry Transmitter",
      "sensors": [
        {
          "name": "Digital Ultrasonic Anemometer",
          "model": "Davis Instruments 6410",
          "function": "Measures instantaneous wind speed and direction without moving cups",
          "operatingVoltage": "5V DC"
        },
        {
          "name": "Non-Contact Optical RPM Tachometer",
          "model": "Speed Sensor Module with Slotted Disc",
          "function": "Measures rotor rotational speed and computes Tip Speed Ratio (TSR)",
          "operatingVoltage": "3.3V - 5V DC"
        },
        {
          "name": "INA219 High-Side Power Sensor",
          "model": "I2C Voltage & Current Monitor (0-26V, 3.2A)",
          "function": "Measures instantaneous electrical power output and battery charging efficiency",
          "operatingVoltage": "3.3V - 5V I2C"
        }
      ],
      "actuators": [
        {
          "name": "Electromagnetic Dump-Load Brake",
          "type": "PWM Solid-State Relay with 100W Ceramic Resistor",
          "torqueOrForce": "Dynamic Braking Torque",
          "powerRating": "24V 15A"
        }
      ],
      "powerSupply": "Self-powered from wind generator output with 12V 20Ah LiFePO4 battery storage buffer",
      "wiringSummary": "3-phase AC generator lines routed through mast hollow interior to 3-phase Schottky diode bridge rectifier with MPPT charge regulator.",
      "circuitPinouts": [
        {
          "pin": "I2C SDA/SCL",
          "component": "INA219 Power Monitor",
          "signalType": "I2C Serial Data"
        },
        {
          "pin": "GPIO 19",
          "component": "Optical Tachometer Pulses",
          "signalType": "Hardware Pulse Interrupt"
        },
        {
          "pin": "GPIO 22",
          "component": "Dump Load Brake Relay",
          "signalType": "High-Current Mosfet Trigger"
        }
      ]
    },
    "designCalculations": {
      "title": "Wind Kinetic Power, Betz Limit, and Tip Speed Ratio (TSR)",
      "overview": "Evaluates the total kinetic power available in the wind through the 0.765 m² swept area at 8 m/s wind speed, the actual turbine mechanical power output, and the MagLev bearing repulsive levitation capacity.",
      "formulas": [
        {
          "name": "Total Wind Power Available (P_wind)",
          "symbol": "P_wind = 0.5 * rho * A_swept * v³",
          "formula": "P_{wind} = \\frac{1}{2} \\cdot \\rho \\cdot (D \\cdot H) \\cdot v^3",
          "explanation": "Available wind power at sea level (rho = 1.225 kg/m³) with swept area A = 0.85 m * 0.90 m = 0.765 m² at wind speed v = 8.0 m/s.",
          "exampleCalculation": "P_wind = 0.5 * 1.225 * 0.765 * (8)³ = 0.4686 * 512 = 239.9 Watts",
          "result": "240.0 Watts Wind Power"
        },
        {
          "name": "Turbine Actual Mechanical Power (P_mech)",
          "symbol": "P_mech = C_p * P_wind",
          "formula": "P_{mech} = C_p \\cdot P_{wind}",
          "explanation": "Mechanical shaft power generated with optimal hybrid aerodynamic power coefficient C_p = 0.32.",
          "exampleCalculation": "P_mech = 0.32 * 239.9 W = 76.77 Watts",
          "result": "76.8 Watts Mechanical Power"
        },
        {
          "name": "Tip Speed Ratio (TSR / lambda)",
          "symbol": "lambda = (omega * R) / v_wind",
          "formula": "\\lambda = \\frac{\\omega \\cdot R}{v}",
          "explanation": "Ratio of the peripheral blade tip speed to incoming wind speed at 250 RPM (omega = 26.18 rad/s) and v = 8 m/s.",
          "exampleCalculation": "lambda = (26.18 * 0.425) / 8.0 = 11.12 / 8.0 = 1.39",
          "result": "1.39 Tip Speed Ratio"
        }
      ],
      "calculatorConfig": {
        "title": "Wind Turbine Output & TSR Calculator",
        "param1Name": "windSpeedMps",
        "param1Label": "Wind Speed",
        "param1Unit": "m/s",
        "param1Default": 8,
        "param1Min": 2,
        "param1Max": 15,
        "param1Step": 0.5,
        "param2Name": "rotorRpm",
        "param2Label": "Turbine Rotor Speed",
        "param2Unit": "RPM",
        "param2Default": 240,
        "param2Min": 50,
        "param2Max": 500,
        "param2Step": 10,
        "formulaType": "wind_power"
      }
    },
    "fabricationSequence": [
      {
        "phase": "Phase 1: Composite Blade Fabrication & MagLev Hub",
        "steps": [
          {
            "order": 1,
            "operation": "CNC Machining of Blade Moulds",
            "machineOrTool": "3-Axis CNC Router & High-Density Polyurethane Tooling Board",
            "parametersOrTolerance": "NACA 0018 contour profile accuracy ±0.2 mm",
            "safetyPrecaution": "Apply multiple coats of release wax and PVA parting agent to prevent epoxy bonding."
          },
          {
            "order": 2,
            "operation": "Vacuum Infusion of Fiberglass Aerofoils",
            "machineOrTool": "Vacuum Bagging Setup & Epoxy Infusion Pump",
            "parametersOrTolerance": "Pull vacuum to -0.85 bar, cure for 24h at 25°C",
            "safetyPrecaution": "Operate in well-ventilated workshop; wear respirator and gloves during resin handling."
          },
          {
            "order": 3,
            "operation": "Permanent Magnet Levitation Ring Assembly",
            "machineOrTool": "Non-Magnetic Brass Clamping Tool",
            "parametersOrTolerance": "Maintain axial repulsive polarity; air gap 4.0 mm",
            "safetyPrecaution": "N52 magnets exert over 60 kg attractive/repulsive pinch force; never allow fingers between poles."
          }
        ]
      },
      {
        "phase": "Phase 2: Axial-Flux Generator & Dynamic Balancing",
        "steps": [
          {
            "order": 4,
            "operation": "Winding and Vacuum Potting of Stator Coils",
            "machineOrTool": "Coil Winding Machine & Vacuum Desiccator",
            "parametersOrTolerance": "Exact 110 turns per coil, resistance balanced within 0.05 Ohm",
            "safetyPrecaution": "Degas epoxy resin prior to pouring to eliminate internal micro-voids."
          },
          {
            "order": 5,
            "operation": "Rotor Structural Assembly & Hub Dynamic Tramming",
            "machineOrTool": "Laser Level & Dual-Plane Dynamic Balancer",
            "parametersOrTolerance": "Dynamic blade tracking deviation < 1.0 mm at tip",
            "safetyPrecaution": "Torque all strut mounting fasteners to 12 Nm with blue Loctite 242."
          },
          {
            "order": 6,
            "operation": "Wind Tunnel & Field Anemometer Testing",
            "machineOrTool": "Centrifugal Wind Tunnel / Outdoor Mast",
            "parametersOrTolerance": "Log power curves across 2 m/s to 12 m/s wind speeds",
            "safetyPrecaution": "Connect automatic dump load brake before testing above 10 m/s wind speed."
          }
        ]
      }
    ],
    "testingAndResults": {
      "testMethodology": "Tested in both a calibrated subsonic wind tunnel and on an open rooftop test mast over 14 days. Instantaneous wind speed, rotor RPM, electrical voltage, current, and vibration spectrum were logged continuously via LoRa telemetry.",
      "performanceMetrics": [
        {
          "metric": "Cut-In Wind Speed",
          "theoreticalValue": "1.80",
          "experimentalValue": "1.92",
          "unit": "m/s",
          "deviationPercent": "+6.7%",
          "status": "Optimal"
        },
        {
          "metric": "Peak Power Coefficient (C_p)",
          "theoreticalValue": "0.34",
          "experimentalValue": "0.315",
          "unit": "Ratio",
          "deviationPercent": "-7.3%",
          "status": "Optimal"
        },
        {
          "metric": "Maximum Electrical Power (at 11 m/s)",
          "theoreticalValue": "165",
          "experimentalValue": "152",
          "unit": "Watts",
          "deviationPercent": "-7.8%",
          "status": "Passed"
        },
        {
          "metric": "Mechanical Bearing Friction Loss",
          "theoreticalValue": "< 2.0",
          "experimentalValue": "1.4",
          "unit": "Watts",
          "deviationPercent": "-30.0%",
          "status": "Passed"
        }
      ],
      "chartData": {
        "xLabel": "Wind Speed (m/s)",
        "yTheoreticalLabel": "Theoretical Electrical Power (Watts)",
        "yActualLabel": "Measured Generator Power (Watts)",
        "dataPoints": [
          {
            "x": 2,
            "yTheoretical": 2.5,
            "yActual": 1.8
          },
          {
            "x": 3,
            "yTheoretical": 8.5,
            "yActual": 7.2
          },
          {
            "x": 4,
            "yTheoretical": 20,
            "yActual": 17.5
          },
          {
            "x": 5,
            "yTheoretical": 39,
            "yActual": 34.8
          },
          {
            "x": 6,
            "yTheoretical": 67,
            "yActual": 61.2
          },
          {
            "x": 7,
            "yTheoretical": 106,
            "yActual": 98
          },
          {
            "x": 8,
            "yTheoretical": 158,
            "yActual": 147.5
          }
        ]
      },
      "conclusions": "The hybrid Savonius-Darrieus wind turbine demonstrated reliable self-starting at 1.92 m/s without electrical assistance. The passive MagLev bearing reduced starting mechanical resistance by 82% compared to conventional steel thrust bearings, resulting in an impressive 0.315 peak power coefficient."
    },
    "softwareStack": {
      "cad": [
        "SolidWorks 2024 (Rotor Assembly)",
        "Autodesk Inventor Professional"
      ],
      "caeSimulation": [
        "ANSYS Fluent 2023 R2 (Sliding Mesh Unsteady CFD)",
        "QBlade (Blade Element Momentum & Aerofoil Polar Synthesis)"
      ],
      "programmingAndIde": [
        "Arduino IDE (LoRa Telemetry Firmware)",
        "Python NumPy & Plotly (Wind Resource & Weibull Analysis)"
      ]
    },
    "prosAndCons": {
      "pros": [
        "Self-starts autonomously at low wind speeds (1.92 m/s) where pure Darrieus turbines fail to rotate.",
        "Omnidirectional design captures turbulent and gusting urban winds without noisy yaw tracking motors.",
        "Passive MagLev bearings eliminate mechanical contact friction, boosting low-wind generation by 22%.",
        "Aesthetic vertical profile and low acoustic noise level (< 38 dB at 5m) suitable for residential rooftops."
      ],
      "cons": [
        "Lower maximum peak power coefficient (C_p = 0.32) compared to large utility-scale HAWTs (C_p = 0.45).",
        "Blade structural fatigue under cyclic aerodynamic centrifugal loads requires robust composite layups."
      ],
      "industrialLimitations": "Requires active storm overspeed protection (dump-load resistive braking) to prevent structural damage in gales exceeding 60 km/h."
    },
    "futureScope": [
      "Integrating active variable-pitch mechanism on the Darrieus aerofoils using micro-servos to optimize angle of attack dynamically across all azimuths.",
      "Employing flexible biomimetic leading-edge tubercles (humpback whale flipper geometry) to delay aerodynamic stall.",
      "Combining with building-integrated solar photovoltaic (BIPV) arrays on the central mast for 24/7 hybrid renewable power."
    ],
    "references": [
      "Wind Energy Explained: Theory, Design and Application, 2nd Edition, J. F. Manwell, J. G. McGowan, and A. L. Rogers.",
      "Aerodynamics of Wind Turbines, Martin O. L. Hansen.",
      "Renewable and Sustainable Energy Reviews: Review on Vertical Axis Wind Turbine Technologies and Hybrids (Vol. 119, 2020)."
    ],
    "reportChapters": [
      {
        "chapterNumber": 1,
        "title": "Introduction & Urban Wind Energy Challenges",
        "summary": "Global urban wind potential, boundary layer turbulence, and comparison between horizontal and vertical axis wind machines."
      },
      {
        "chapterNumber": 2,
        "title": "Aerodynamic Theory & Blade Element Momentum",
        "summary": "Double-multiple streamtube (DMS) models, NACA 0018 lift/drag polar data, and self-starting torque deficit in Darrieus rotors."
      },
      {
        "chapterNumber": 3,
        "title": "Computational Fluid Dynamics (CFD) Simulations",
        "summary": "2D and 3D unsteady Reynolds-Averaged Navier-Stokes (URANS) modeling of sliding mesh rotor interaction."
      },
      {
        "chapterNumber": 4,
        "title": "MagLev Magnetic Bearing & Coreless Generator Design",
        "summary": "NdFeB permanent magnet repulsion finite element simulation and axial-flux ironless stator coil winding."
      },
      {
        "chapterNumber": 5,
        "title": "Experimental Field Testing, C_p vs TSR Curves",
        "summary": "Wind tunnel test validation, rooftop anemometer logging, and Weibull distribution wind yield calculations."
      },
      {
        "chapterNumber": 6,
        "title": "Levelized Cost of Electricity (LCOE) & Conclusions",
        "summary": "Payback audit, urban noise level measurements, and carbon footprint reduction over 15-year operational life."
      }
    ],
    "planning": {
      "durationWeeks": 14,
      "scheduleType": "14-Week Aerodynamics & Clean Energy Research Roadmap",
      "phases": [
        {
          "number": 1,
          "title": "Computational Fluid Dynamics (CFD) Aerofoil Optimization",
          "weeks": "W1 - W3",
          "status": "Completed",
          "completionPercent": 100,
          "milestone": "NACA 0018 Self-Starting Drag vs Lift Ratio Validated",
          "leadRole": "Aerodynamics / CFD Lead"
        },
        {
          "number": 2,
          "title": "Rotor Mast & Permanent Magnet Generator CAD Design",
          "weeks": "W4 - W5",
          "status": "Completed",
          "completionPercent": 100,
          "milestone": "MagLev Axial Repulsion Bearing Assembly PDR",
          "leadRole": "Mechanical CAD Lead"
        },
        {
          "number": 3,
          "title": "Composite Blade Layup & MagLev Rotor Fabrication",
          "weeks": "W6 - W8",
          "status": "Completed",
          "completionPercent": 100,
          "milestone": "Carbon-Fiber Reinforced Blades Balanced Dynamically",
          "leadRole": "Composites & Fabrication Lead"
        },
        {
          "number": 4,
          "title": "Coreless Axial Flux PMG Stator Coiling & Rectifier",
          "weeks": "W9 - W10",
          "status": "In Progress",
          "completionPercent": 80,
          "milestone": "Zero-Cogging Torque Generator Output Verified on Bench",
          "leadRole": "Electrical / Power Lead"
        },
        {
          "number": 5,
          "title": "Subsonic Wind Tunnel Testing & Anemometer Data Logging",
          "weeks": "W11 - W12",
          "status": "In Progress",
          "completionPercent": 60,
          "milestone": "Cut-in Wind Speed < 1.8 m/s Confirmed in Wind Tunnel",
          "leadRole": "Experimental Test Lead"
        },
        {
          "number": 6,
          "title": "Betz Limit Power Coefficient Audit & Final Thesis",
          "weeks": "W13 - W14",
          "status": "Planned",
          "completionPercent": 15,
          "milestone": "Aerodynamic Power Coefficient Cp = 0.38 Confirmed; Defense",
          "leadRole": "Project Lead"
        }
      ],
      "wbs": [
        {
          "id": "1.0",
          "name": "Computational Fluid Dynamics (CFD) Aerofoil Optimization",
          "owner": "Aerodynamics / CFD Lead",
          "duration": "W1 - W3",
          "subtasks": [
            {
              "id": "1.1",
              "name": "NACA 0018 Self-Starting Drag vs Lift Ratio Validated",
              "estHours": 12,
              "status": "Done"
            }
          ]
        },
        {
          "id": "2.0",
          "name": "Rotor Mast & Permanent Magnet Generator CAD Design",
          "owner": "Mechanical CAD Lead",
          "duration": "W4 - W5",
          "subtasks": [
            {
              "id": "2.1",
              "name": "MagLev Axial Repulsion Bearing Assembly PDR",
              "estHours": 12,
              "status": "Done"
            }
          ]
        },
        {
          "id": "3.0",
          "name": "Composite Blade Layup & MagLev Rotor Fabrication",
          "owner": "Composites & Fabrication Lead",
          "duration": "W6 - W8",
          "subtasks": [
            {
              "id": "3.1",
              "name": "Carbon-Fiber Reinforced Blades Balanced Dynamically",
              "estHours": 12,
              "status": "Done"
            }
          ]
        },
        {
          "id": "4.0",
          "name": "Coreless Axial Flux PMG Stator Coiling & Rectifier",
          "owner": "Electrical / Power Lead",
          "duration": "W9 - W10",
          "subtasks": [
            {
              "id": "4.1",
              "name": "Zero-Cogging Torque Generator Output Verified on Bench",
              "estHours": 12,
              "status": "In Progress"
            }
          ]
        },
        {
          "id": "5.0",
          "name": "Subsonic Wind Tunnel Testing & Anemometer Data Logging",
          "owner": "Experimental Test Lead",
          "duration": "W11 - W12",
          "subtasks": [
            {
              "id": "5.1",
              "name": "Cut-in Wind Speed < 1.8 m/s Confirmed in Wind Tunnel",
              "estHours": 12,
              "status": "In Progress"
            }
          ]
        },
        {
          "id": "6.0",
          "name": "Betz Limit Power Coefficient Audit & Final Thesis",
          "owner": "Project Lead",
          "duration": "W13 - W14",
          "subtasks": [
            {
              "id": "6.1",
              "name": "Aerodynamic Power Coefficient Cp = 0.38 Confirmed; Defense",
              "estHours": 12,
              "status": "Planned"
            }
          ]
        }
      ],
      "fmea": [
        {
          "subsystem": "Darrieus Rotor Blades",
          "failureMode": "Cyclic fatigue delamination at strut attachment",
          "effect": "Blade detaches at high tip speed ratio (TSR > 3.0), rotor destroys itself",
          "cause": "Alternating centrifugal and cyclic aerodynamic lift bending stresses",
          "severity": 9,
          "occurrence": 3,
          "detection": 2,
          "rpn": 54,
          "action": "Design multi-bolt CNC aluminum root bracket with rubber vibration isolation damper pads.",
          "postActionRPN": 18
        },
        {
          "subsystem": "MagLev Bearings",
          "failureMode": "Neodymium magnet demagnetization from friction heat",
          "effect": "Rotor drops onto safety ball bearings, high friction stops rotation",
          "cause": "Shaft temperature exceeding Curie temperature of grade N35 NdFeB magnets",
          "severity": 7,
          "occurrence": 3,
          "detection": 3,
          "rpn": 63,
          "action": "Use high-temperature grade N42SH magnets rated up to 150°C; add natural convective cooling fins.",
          "postActionRPN": 14
        }
      ],
      "raciMatrix": [
        {
          "activity": "Kinematic synthesis calculations & MATLAB simulation",
          "leadMech": "A/R",
          "embedded": "I",
          "feaAnalyst": "C",
          "machinist": "I"
        },
        {
          "activity": "SolidWorks 3D CAD modeling & tolerance allocation",
          "leadMech": "A/R",
          "embedded": "C",
          "feaAnalyst": "C",
          "machinist": "C"
        },
        {
          "activity": "ANSYS dynamic stress FEA & contact pressure study",
          "leadMech": "C",
          "embedded": "I",
          "feaAnalyst": "A/R",
          "machinist": "I"
        },
        {
          "activity": "Raw material procurement & vendor quotes",
          "leadMech": "A",
          "embedded": "C",
          "feaAnalyst": "I",
          "machinist": "R"
        },
        {
          "activity": "CNC VMC toolpath generation & Wire EDM slotting",
          "leadMech": "C",
          "embedded": "I",
          "feaAnalyst": "I",
          "machinist": "A/R"
        },
        {
          "activity": "Microcontroller PWM coding & optical sensor wiring",
          "leadMech": "C",
          "embedded": "A/R",
          "feaAnalyst": "I",
          "machinist": "I"
        },
        {
          "activity": "Mechanical subassembly, bearing shimming & runout alignment",
          "leadMech": "A/R",
          "embedded": "C",
          "feaAnalyst": "I",
          "machinist": "R"
        },
        {
          "activity": "Laser displacement repeatability logging & DVT validation",
          "leadMech": "A",
          "embedded": "R",
          "feaAnalyst": "R",
          "machinist": "C"
        },
        {
          "activity": "Final academic report synthesis & thesis compilation",
          "leadMech": "A/R",
          "embedded": "R",
          "feaAnalyst": "R",
          "machinist": "R"
        }
      ],
      "manufacturingRouting": [
        {
          "opNo": 11,
          "part": "Phase 1: Composite Blade Fabrication & MagLev Hub",
          "machine": "3-Axis CNC Router & High-Density Polyurethane Tooling Board",
          "operation": "CNC Machining of Blade Moulds",
          "parameters": "NACA 0018 contour profile accuracy ±0.2 mm",
          "tolerance": "NACA 0018 contour profile accuracy ±0.2 mm",
          "qcCheck": "Apply multiple coats of release wax and PVA parting agent to prevent epoxy bonding."
        },
        {
          "opNo": 12,
          "part": "Phase 1: Composite Blade Fabrication & MagLev Hub",
          "machine": "Vacuum Bagging Setup & Epoxy Infusion Pump",
          "operation": "Vacuum Infusion of Fiberglass Aerofoils",
          "parameters": "Pull vacuum to -0.85 bar, cure for 24h at 25°C",
          "tolerance": "Pull vacuum to -0.85 bar, cure for 24h at 25°C",
          "qcCheck": "Operate in well-ventilated workshop; wear respirator and gloves during resin handling."
        },
        {
          "opNo": 13,
          "part": "Phase 1: Composite Blade Fabrication & MagLev Hub",
          "machine": "Non-Magnetic Brass Clamping Tool",
          "operation": "Permanent Magnet Levitation Ring Assembly",
          "parameters": "Maintain axial repulsive polarity; air gap 4.0 mm",
          "tolerance": "Maintain axial repulsive polarity; air gap 4.0 mm",
          "qcCheck": "N52 magnets exert over 60 kg attractive/repulsive pinch force; never allow fingers between poles."
        },
        {
          "opNo": 24,
          "part": "Phase 2: Axial-Flux Generator & Dynamic Balancing",
          "machine": "Coil Winding Machine & Vacuum Desiccator",
          "operation": "Winding and Vacuum Potting of Stator Coils",
          "parameters": "Exact 110 turns per coil, resistance balanced within 0.05 Ohm",
          "tolerance": "Exact 110 turns per coil, resistance balanced within 0.05 Ohm",
          "qcCheck": "Degas epoxy resin prior to pouring to eliminate internal micro-voids."
        },
        {
          "opNo": 25,
          "part": "Phase 2: Axial-Flux Generator & Dynamic Balancing",
          "machine": "Laser Level & Dual-Plane Dynamic Balancer",
          "operation": "Rotor Structural Assembly & Hub Dynamic Tramming",
          "parameters": "Dynamic blade tracking deviation < 1.0 mm at tip",
          "tolerance": "Dynamic blade tracking deviation < 1.0 mm at tip",
          "qcCheck": "Torque all strut mounting fasteners to 12 Nm with blue Loctite 242."
        },
        {
          "opNo": 26,
          "part": "Phase 2: Axial-Flux Generator & Dynamic Balancing",
          "machine": "Centrifugal Wind Tunnel / Outdoor Mast",
          "operation": "Wind Tunnel & Field Anemometer Testing",
          "parameters": "Log power curves across 2 m/s to 12 m/s wind speeds",
          "tolerance": "Log power curves across 2 m/s to 12 m/s wind speeds",
          "qcCheck": "Connect automatic dump load brake before testing above 10 m/s wind speed."
        }
      ],
      "dvtTesting": [
        {
          "id": "DVT-01",
          "title": "Cut-In Wind Speed",
          "standard": "ISO / ASTM Engineering Benchmark",
          "equipment": "Precision Calibrated Laboratory Rig",
          "procedure": "Evaluate Cut-In Wind Speed under standard operating regime. Theoretical reference: 1.80 m/s.",
          "acceptanceCriteria": "Deviation within acceptable tolerance (observed: +6.7%)",
          "observedResult": "1.92 m/s (Deviation: +6.7%)",
          "status": "Passed"
        },
        {
          "id": "DVT-02",
          "title": "Peak Power Coefficient (C_p)",
          "standard": "ISO / ASTM Engineering Benchmark",
          "equipment": "Precision Calibrated Laboratory Rig",
          "procedure": "Evaluate Peak Power Coefficient (C_p) under standard operating regime. Theoretical reference: 0.34 Ratio.",
          "acceptanceCriteria": "Deviation within acceptable tolerance (observed: -7.3%)",
          "observedResult": "0.315 Ratio (Deviation: -7.3%)",
          "status": "Passed"
        },
        {
          "id": "DVT-03",
          "title": "Maximum Electrical Power (at 11 m/s)",
          "standard": "ISO / ASTM Engineering Benchmark",
          "equipment": "Precision Calibrated Laboratory Rig",
          "procedure": "Evaluate Maximum Electrical Power (at 11 m/s) under standard operating regime. Theoretical reference: 165 Watts.",
          "acceptanceCriteria": "Deviation within acceptable tolerance (observed: -7.8%)",
          "observedResult": "152 Watts (Deviation: -7.8%)",
          "status": "Passed"
        },
        {
          "id": "DVT-04",
          "title": "Mechanical Bearing Friction Loss",
          "standard": "ISO / ASTM Engineering Benchmark",
          "equipment": "Precision Calibrated Laboratory Rig",
          "procedure": "Evaluate Mechanical Bearing Friction Loss under standard operating regime. Theoretical reference: < 2.0 Watts.",
          "acceptanceCriteria": "Deviation within acceptable tolerance (observed: -30.0%)",
          "observedResult": "1.4 Watts (Deviation: -30.0%)",
          "status": "Passed"
        }
      ],
      "budgetAnalysis": {
        "budgetPlannedINR": 22000,
        "budgetActualINR": 21300,
        "varianceINR": -700,
        "budgetPlannedUSD": 265,
        "budgetActualUSD": 255,
        "contingencyReserve": "10% included",
        "savingsHighlights": "Optimized vendor sourcing & shared workshop equipment reduced fabrication expenditure."
      }
    }
  },
  {
    "id": "bionic-myoelectric-prosthetic",
    "title": "Multi-Grip 3D Printed Bionic Prosthetic Hand with Surface EMG Neural Control",
    "shortTitle": "Bionic Prosthetic Hand",
    "category": "Biomechanical",
    "categorySlug": "biomechanical",
    "level": "B.Tech Final Year",
    "difficulty": "Advanced",
    "durationWeeks": 14,
    "teamSize": "4 Members",
    "featured": true,
    "rating": 5,
    "estimatedCost": {
      "inr": 22500,
      "usd": 270
    },
    "tags": [
      "Biomechanical",
      "Prosthetics",
      "EMG Sensors",
      "3D Printing",
      "Bionics"
    ],
    "badge": "Healthcare Impact Award",
    "abstract": "This project details the anatomical mechanical design, tendon-driven kinematic synthesis, and embedded biosignal processing of a multi-articulated 5-finger bionic prosthetic hand for transradial amputees. Controlled by non-invasive surface electromyography (sEMG) sensors placed over forearm muscle groups, the device utilizes a machine learning classifier on an ESP32 microcontroller to recognize user muscle intent and execute 6 distinct grip patterns (Power Grip, Precision Pinch, Key Grip, Pointing Index, Tripod, and Rest) with tactile force feedback.",
    "problemStatement": "Commercial multi-grip bionic hands from manufacturers like Otto Bock or Touch Bionics cost between $25,000 and $70,000, making them completely inaccessible to over 95% of amputees in developing countries. Body-powered hook prosthetics offer limited functionality, high mechanical fatigue, and zero tactile feedback, leading to high rejection rates among users. A lightweight, anatomically responsive, low-cost bionic hand is desperately needed.",
    "objectives": [
      "Design an anatomically accurate 5-digit mechanical hand using parametric anthropomorphic CAD data in SolidWorks.",
      "Fabricate the skeleton using high-impact carbon-fiber reinforced PETG via additive manufacturing, keeping total weight under 420 grams.",
      "Implement a tendon-driven underactuated flexor tendon mechanism utilizing high-tensile Dyneema cords and micro metal geared DC motors.",
      "Capture and filter real-time dual-channel forearm sEMG signals using analog bandpass instrumentation amplifiers.",
      "Implement a lightweight machine learning pattern recognition algorithm on an ESP32 to achieve >95% grip classification accuracy."
    ],
    "workingPrinciple": {
      "summary": "When an amputee attempts to flex or extend their phantom fingers, the remaining motor units in the forearm muscles (Flexor Carpi Radialis and Extensor Digitorum) depolarize, generating microvolt-level electrical action potentials. Dry surface EMG electrodes detect these potentials. After differential amplification and bandpass filtering (20-500 Hz), features (Root Mean Square and Waveform Length) are extracted. An embedded classifier maps the muscle contraction patterns to specific motor commands. Micro-geared DC motors reel in Dyneema tendon cables, curling the joint linkages around objects.",
      "fundamentalLaws": [
        "Huxley's Muscle Sliding Filament Theory & Motor Unit Action Potentials (MUAP)",
        "Underactuated Mechanical Kinematics & Adaptive Grasping (Compliant Finger Envelopment)",
        "Tendon Friction & Capstan Equation: T_2 = T_1 * e^(mu * theta)",
        "Nyquist-Shannon Sampling Theorem for Biosignal Digitization"
      ],
      "operatingSequence": [
        {
          "step": 1,
          "title": "Surface EMG Muscle Signal Acquisition",
          "description": "Bipolar Ag/AgCl dry electrodes placed on the forearm detect user contraction intent (voltage 50 uV to 3 mV)."
        },
        {
          "step": 2,
          "title": "Analog Filtering & Feature Extraction",
          "description": "Hardware instrumentation amplifier suppresses 50 Hz power hum; software calculates RMS muscle energy in real-time."
        },
        {
          "step": 3,
          "title": "Machine Learning Intent Classification",
          "description": "Trained Random Forest / SVM classifier categorizes signal into 6 grip patterns within 80 milliseconds."
        },
        {
          "step": 4,
          "title": "Tendon Spool Actuation & Compliant Grasp",
          "description": "Five independent micro DC motors reel high-tensile Dyneema lines, conforming fingers around the object shape until fingertip pressure sensors signal contact."
        }
      ],
      "energyTransfer": "Neural Action Potentials -> Forearm Muscle Fiber Depolarization -> Differential Surface EMG Signal -> Microcontroller Decision -> H-Bridge PWM -> Micro DC Motor Spool -> Dyneema Cable Tension -> Finger Joint Flexion."
    },
    "cadAndSpecs": {
      "dimensions": {
        "length": "195 mm (Wrist to Tip)",
        "width": "88 mm Across Palm",
        "height": "48 mm Palm Thickness",
        "totalWeight": "385 grams"
      },
      "tolerances": "Joint pivot clearance 0.1 mm, Tendon guide channel radius > 2.5 mm to prevent cable chafing",
      "materialsMain": [
        "Carbon-Fiber PETG (Bone Links & Palm Chassis)",
        "Thermoplastic Polyurethane TPU 95A (Soft Fingertip Grip Pads)",
        "Dyneema SK78 Synthetic Fiber (45 kg Test Tendon Line)",
        "Stainless Steel Dowel Pins (Joint Axles)"
      ],
      "cadSoftwareRecommended": [
        "SolidWorks 2024",
        "Autodesk Fusion 360",
        "Blender (Ergonomic Surface Sculpting)"
      ],
      "assemblyPartsCount": 56,
      "blueprintFeatures": [
        {
          "view": "Index Finger 3-Phalanx Exploded Assembly",
          "description": "Shows proximal, middle, and distal phalanges connected by cross dowels with silicone elastic return ligaments.",
          "criticalDimensions": "Finger Length: 92.0 mm, Flexion Angle: 85°"
        },
        {
          "view": "Palm Motor Spool Housing Section",
          "description": "Five N20 micro metal gearmotors arranged in compact fan layout with integrated magnetic quadrature encoders.",
          "criticalDimensions": "Palm Internal Cavity: 75 x 65 x 32 mm"
        },
        {
          "view": "Fingertip Tactile Sensor Recess",
          "description": "Molded TPU grip pad pocket housing miniature piezoresistive pressure sensors for contact force regulation.",
          "criticalDimensions": "Pad Surface Area: 16 x 14 mm"
        }
      ],
      "visualType": "prosthetic-hand"
    },
    "billOfMaterials": [
      {
        "itemNumber": 1,
        "partName": "N20 Micro Metal Geared DC Motors",
        "specification": "6V, 150 RPM, 100:1 Gear Ratio, Stall Torque 2.8 kg-cm with Magnetic Encoders",
        "material": "All-Metal Micro Brass Gearing",
        "quantity": 5,
        "unitCostINR": 650,
        "unitCostUSD": 7.8,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 2,
        "partName": "MyoWare 2.0 Muscle Sensor Module",
        "specification": "Medical-grade EMG sensor with built-in reference pin and envelope filter",
        "material": "Advancer Technologies PCB",
        "quantity": 2,
        "unitCostINR": 3200,
        "unitCostUSD": 38.5,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 3,
        "partName": "Dyneema Synthetic Tendon Cord",
        "specification": "0.6mm Diameter, 45 kg breaking strength, pre-stretched low friction",
        "material": "Ultra-High-Molecular-Weight Polyethylene",
        "quantity": 1,
        "unitCostINR": 450,
        "unitCostUSD": 5.4,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 4,
        "partName": "3D Printed Hand Skeleton & Phalanges",
        "specification": "Carbon-Fiber Reinforced PETG, 0.16mm layer height, 100% infill",
        "material": "PETG-CF Filament",
        "quantity": 1,
        "unitCostINR": 1400,
        "unitCostUSD": 17,
        "procurementType": "3D Printed (Additive)"
      },
      {
        "itemNumber": 5,
        "partName": "Flexible TPU Fingertip Friction Pads",
        "specification": "TPU 95A Shore Hardness with textured anti-slip surface",
        "material": "Thermoplastic Polyurethane",
        "quantity": 5,
        "unitCostINR": 350,
        "unitCostUSD": 4.2,
        "procurementType": "3D Printed (Additive)"
      },
      {
        "itemNumber": 6,
        "partName": "Fingertip Force Sensing Resistors",
        "specification": "Interlink FSR 400 (5mm active diameter, 0.1N to 10N range)",
        "material": "Piezoresistive Polymer Film",
        "quantity": 5,
        "unitCostINR": 480,
        "unitCostUSD": 5.8,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 7,
        "partName": "ESP32-S3 Microcontroller Module",
        "specification": "Dual-Core 240MHz, 8MB Flash, Bluetooth 5.0 BLE & Wi-Fi",
        "material": "Espressif Systems SoC",
        "quantity": 1,
        "unitCostINR": 950,
        "unitCostUSD": 11.5,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 8,
        "partName": "Multi-Channel Motor Driver Board",
        "specification": "Dual DRV8833 Dual H-Bridge Drivers (1.5A per channel)",
        "material": "SMD Driver PCB",
        "quantity": 3,
        "unitCostINR": 280,
        "unitCostUSD": 3.4,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 9,
        "partName": "Rechargeable 7.4V LiPo Battery Pack",
        "specification": "7.4V 2200mAh 2S 25C with Integrated Battery Management System (BMS)",
        "material": "Lithium Polymer Cell",
        "quantity": 1,
        "unitCostINR": 1600,
        "unitCostUSD": 19.3,
        "procurementType": "Bought-out (Commercial)"
      }
    ],
    "costBreakdown": {
      "mechanicalHardware": 5800,
      "electronicsAndSensors": 11200,
      "rawMaterials": 3200,
      "machiningAndFabrication": 2300
    },
    "electronicsAndSensors": {
      "microcontroller": "ESP32-S3 Dual-Core 240MHz with Hardware Vector Instructions (Edge AI ML Processing)",
      "sensors": [
        {
          "name": "Dual-Channel Surface EMG Sensors",
          "model": "MyoWare 2.0 with Stainless Dry Contacts",
          "function": "Measures forearm flexor and extensor muscle contractions",
          "operatingVoltage": "3.3V Analog (0 - 3.3V)"
        },
        {
          "name": "Fingertip Tactile Contact Sensors",
          "model": "FSR 400 Piezoresistive Film",
          "function": "Detects grasping contact force and prevents crushing delicate objects (e.g. egg/paper cup)",
          "operatingVoltage": "3.3V Analog"
        },
        {
          "name": "Motor Position Magnetic Encoders",
          "model": "Hall Effect Quadrature Sensors on N20 shafts",
          "function": "Tracks exact finger joint curl angle and motor travel",
          "operatingVoltage": "3.3V DC"
        }
      ],
      "actuators": [
        {
          "name": "Five N20 Micro DC Tendon Actuators",
          "type": "Brushed DC Metal Geared",
          "torqueOrForce": "2.8 kg-cm Stall Torque",
          "powerRating": "6V 0.5A Peak per motor"
        }
      ],
      "powerSupply": "7.4V 2200mAh 2S LiPo Battery with 5V 3A DC-DC Synchronous Step-Down Buck Converter",
      "wiringSummary": "Modular quick-disconnect wrist harness with silicone ultra-flexible wiring routed through wrist tunnel.",
      "circuitPinouts": [
        {
          "pin": "GPIO 36 (ADC1_CH0)",
          "component": "Flexor Muscle EMG Sensor",
          "signalType": "Analog Input (12-bit)"
        },
        {
          "pin": "GPIO 39 (ADC1_CH3)",
          "component": "Extensor Muscle EMG Sensor",
          "signalType": "Analog Input (12-bit)"
        },
        {
          "pin": "GPIO 12-16 (PWM)",
          "component": "DRV8833 Motor Speed Controls",
          "signalType": "PWM Output (20 kHz)"
        },
        {
          "pin": "GPIO 32-35",
          "component": "Fingertip FSR Force Sensors",
          "signalType": "Analog Voltage Dividers"
        }
      ]
    },
    "designCalculations": {
      "title": "Grip Force, Tendon Tension, and Power Autonomy Calculations",
      "overview": "Evaluates the mechanical grip force delivered at the fingertips, the maximum tension sustained by the Dyneema tendon cables, and the battery autonomy across continuous usage cycles.",
      "formulas": [
        {
          "name": "Fingertip Pinch Force (F_tip)",
          "symbol": "F_tip = (T_tendon * r_pulley) / L_finger",
          "formula": "F_{tip} = \\frac{T_{cable} \\cdot r_{spool}}{L_{finger}} \\cdot \\eta_{joint}",
          "explanation": "Mechanical leverage with motor spool radius r = 5.0 mm, finger length L = 85 mm, and spool tension T = 22 N.",
          "exampleCalculation": "F_tip = (22 N * 5.0 mm / 85 mm) * 0.85 = (110 / 85) * 0.85 = 1.10 N per finger (Total 5-finger power grip = 5.5 N to 12.0 N)",
          "result": "1.1 N Pinch / 12 N Power Grip"
        },
        {
          "name": "Dyneema Tendon Safety Margin (FOS_tendon)",
          "symbol": "FOS = Breaking_strength / Max_working_tension",
          "formula": "FOS = \\frac{F_{break}}{T_{max}}",
          "explanation": "Safety factor of 45 kg (441 N) rated Dyneema line under peak motor stall tension (22 N).",
          "exampleCalculation": "FOS = 441 N / 22 N = 20.04",
          "result": "FOS = 20.0 (Zero Cable Snap Risk)"
        },
        {
          "name": "Daily Battery Operating Autonomy (t_hours)",
          "symbol": "t_hours = Battery_capacity_mAh / Average_current_draw_mA",
          "formula": "t = \\frac{C_{battery}}{I_{avg}}",
          "explanation": "Autonomy with 2200 mAh battery operating at an average consumption of 180 mA (sleep standby + 300 daily grasps).",
          "exampleCalculation": "t = 2200 mAh / 180 mA = 12.22 hours",
          "result": "12.2 Hours Continuous Autonomy"
        }
      ],
      "calculatorConfig": {
        "title": "Bionic Finger Grip Force & Autonomy Sizing",
        "param1Name": "motorTorqueKgcm",
        "param1Label": "Motor Stall Torque",
        "param1Unit": "kg-cm",
        "param1Default": 2.8,
        "param1Min": 1,
        "param1Max": 6,
        "param1Step": 0.2,
        "param2Name": "batteryCapMah",
        "param2Label": "Battery Capacity",
        "param2Unit": "mAh",
        "param2Default": 2200,
        "param2Min": 1000,
        "param2Max": 4000,
        "param2Step": 200,
        "formulaType": "stress"
      }
    },
    "fabricationSequence": [
      {
        "phase": "Phase 1: 3D Printing & Skeleton Assembly",
        "steps": [
          {
            "order": 1,
            "operation": "High-Resolution FDM 3D Printing of Hand Skeleton",
            "machineOrTool": "Enclosed CoreXY 3D Printer (0.4mm Hardened Nozzle)",
            "parametersOrTolerance": "Layer height 0.16 mm, 100% infill, PETG-CF",
            "safetyPrecaution": "Dry filament at 65°C for 6 hours prior to printing to prevent stringing."
          },
          {
            "order": 2,
            "operation": "Dowel Pin Press-Fitting & Joint Reaming",
            "machineOrTool": "Hand Pin Vise & 2.0mm Precision Reamer",
            "parametersOrTolerance": "Phalanges must pivot freely under gravity with zero side play",
            "safetyPrecaution": "Deburr all pin ends to avoid cutting synthetic tendon cables."
          },
          {
            "order": 3,
            "operation": "Tendon Cable Threading & Elastic Spring Return",
            "machineOrTool": "Surgical Tweezers & Loctite 401 Gel",
            "parametersOrTolerance": "Thread Dyneema through low-friction PTFE guide tubes",
            "safetyPrecaution": "Pre-stretch Dyneema cords with 5 kg static weight before securing."
          }
        ]
      },
      {
        "phase": "Phase 2: Electronics & Machine Learning Calibration",
        "steps": [
          {
            "order": 4,
            "operation": "Motor Spool Installation & Tactile Sensor Gluing",
            "machineOrTool": "Silicone Adhesive & Soldering Iron",
            "parametersOrTolerance": "Seal FSR sensors flush with TPU fingertip pads",
            "safetyPrecaution": "Avoid excessive heat on sensor tails; limit soldering iron to 280°C."
          },
          {
            "order": 5,
            "operation": "EMG Electrode Placement & Skin Impedance Prep",
            "machineOrTool": "Alcohol Swabs & Bio-Sensor Electrodes",
            "parametersOrTolerance": "Inter-electrode distance 20 mm along muscle fibers",
            "safetyPrecaution": "Ensure user skin is dry and free of oils for clean signal-to-noise ratio."
          },
          {
            "order": 6,
            "operation": "Edge AI Grip Model Training & Latency Verification",
            "machineOrTool": "ESP-IDF / Edge Impulse Studio",
            "parametersOrTolerance": "Model execution time < 35 ms, classification accuracy > 95%",
            "safetyPrecaution": "Set motor stall current cut-off at 450 mA to prevent motor winding burnout."
          }
        ]
      }
    ],
    "testingAndResults": {
      "testMethodology": "Evaluated with 5 human subjects across 6 standardized grasping tasks (holding a pen, picking up a key, holding a credit card, lifting an empty soda can, gripping an apple, and typing on a keyboard). Signal classification accuracy, grip response latency, and maximum payload were measured.",
      "performanceMetrics": [
        {
          "metric": "Total Hand Mass (including motors)",
          "theoreticalValue": "< 400",
          "experimentalValue": "385",
          "unit": "grams",
          "deviationPercent": "-3.8%",
          "status": "Optimal"
        },
        {
          "metric": "EMG Intent Classification Accuracy",
          "theoreticalValue": "96.0",
          "experimentalValue": "94.8",
          "unit": "%",
          "deviationPercent": "-1.2%",
          "status": "Optimal"
        },
        {
          "metric": "Grasp Execution Latency",
          "theoreticalValue": "< 100",
          "experimentalValue": "85",
          "unit": "milliseconds",
          "deviationPercent": "-15.0%",
          "status": "Optimal"
        },
        {
          "metric": "Max Cylinder Grasp Load Capacity",
          "theoreticalValue": "2.0",
          "experimentalValue": "1.85",
          "unit": "kg",
          "deviationPercent": "-7.5%",
          "status": "Passed"
        }
      ],
      "chartData": {
        "xLabel": "Muscle Contraction Effort (% MVC)",
        "yTheoreticalLabel": "Theoretical Grip Force (N)",
        "yActualLabel": "Measured Fingertip Contact Force (N)",
        "dataPoints": [
          {
            "x": 10,
            "yTheoretical": 0.8,
            "yActual": 0.7
          },
          {
            "x": 25,
            "yTheoretical": 2.5,
            "yActual": 2.3
          },
          {
            "x": 50,
            "yTheoretical": 5.5,
            "yActual": 5.1
          },
          {
            "x": 75,
            "yTheoretical": 8.8,
            "yActual": 8.2
          },
          {
            "x": 90,
            "yTheoretical": 10.5,
            "yActual": 9.8
          },
          {
            "x": 100,
            "yTheoretical": 12,
            "yActual": 11.2
          }
        ]
      },
      "conclusions": "The multi-grip bionic prosthetic hand successfully recognized user muscle intent with 94.8% accuracy and an ultra-fast response latency of 85 ms. The underactuated Dyneema tendon mechanism conformed reliably to irregularly shaped objects, while weighing only 385 grams and costing under $270."
    },
    "softwareStack": {
      "cad": [
        "SolidWorks 2024 (Ergonomic Skeletal Design)",
        "Blender (Mesh Optimization)"
      ],
      "caeSimulation": [
        "ANSYS Mechanical (Phalanx Bending & Impact Stress)",
        "OpenSim (Musculoskeletal Biomechanical Modeling)"
      ],
      "programmingAndIde": [
        "ESP-IDF / Arduino IDE (C++)",
        "Edge Impulse (Embedded TinyML Neural Classifier)",
        "Python Scikit-Learn"
      ]
    },
    "prosAndCons": {
      "pros": [
        "Weighs only 385g—substantially lighter than human adult hand (~450g), reducing socket fatigue.",
        "Fabrication cost is under $270 compared to $30,000+ for commercial bionic prosthetics.",
        "Underactuated tendons naturally conform around complex objects without requiring complex joint sensors.",
        "Edge AI classifier provides responsive, natural control over 6 essential daily grasp patterns."
      ],
      "cons": [
        "Surface EMG signals are sensitive to sweat, electrode displacement, and user fatigue over prolonged days.",
        "Dyneema tendon cables require inspection and periodic re-tensioning every 6 to 12 months."
      ],
      "industrialLimitations": "Not waterproof (IP54 rating); cannot be submerged in water during hand washing without protective cosmetic silicone glove."
    },
    "futureScope": [
      "Integrating vibrotactile sensory feedback actuators inside the arm socket to deliver haptic sensations when touching surfaces.",
      "Developing flexible capacitive e-skin sensor arrays over the entire palm for high-resolution pressure distribution.",
      "Incorporating Bluetooth Low Energy (BLE) mobile smartphone app for user-customizable grip strength and electrode calibration."
    ],
    "references": [
      "Biomedical Engineering Principles in Sports and Bio-Robotics, Joseph D. Bronzino.",
      "IEEE Transactions on Neural Systems and Rehabilitation Engineering: Machine Learning in Prosthetic Control (Vol. 28, 2020).",
      "Prosthetics and Orthotics International: User Preferences and Functional Rejection Factors in Upper Limb Bionics."
    ],
    "reportChapters": [
      {
        "chapterNumber": 1,
        "title": "Introduction & Upper-Limb Amputation Challenges",
        "summary": "Anatomy of the human hand, degree of freedom breakdown, and socio-economic impact of limb loss."
      },
      {
        "chapterNumber": 2,
        "title": "Surface Electromyography (sEMG) & Neurophysiology",
        "summary": "Action potentials, motor unit recruitment, skin-electrode impedance, and analog filtering circuits."
      },
      {
        "chapterNumber": 3,
        "title": "Anthropomorphic CAD Synthesis & Underactuation",
        "summary": "Kinematics of finger flexion, capstan tendon friction equations, and 3D printing with carbon-fiber composites."
      },
      {
        "chapterNumber": 4,
        "title": "Embedded Machine Learning Intent Recognition",
        "summary": "Feature extraction (RMS, MAV, WL), tinyML model deployment on ESP32, and latency benchmark optimization."
      },
      {
        "chapterNumber": 5,
        "title": "Clinical Experimental Trials & Object Grasp Metrology",
        "summary": "Shadmehr grasping taxonomy testing, force sensor calibration, and battery autonomy logs."
      },
      {
        "chapterNumber": 6,
        "title": "Conclusion, Humanitarian Open-Source Impact & Future Scope",
        "summary": "Open-source accessibility roadmap, low-cost scaling in developing nations, and sensory feedback roadmaps."
      }
    ],
    "planning": {
      "durationWeeks": 14,
      "scheduleType": "14-Week Biomechatronics & Human Prosthetics Roadmap",
      "phases": [
        {
          "number": 1,
          "title": "Hand Anthropometry, Tendon Kinematics & Bio-Mechanics",
          "weeks": "W1 - W3",
          "status": "Completed",
          "completionPercent": 100,
          "milestone": "5-Finger Underactuated Tendon Mechanism Validated",
          "leadRole": "Biomechanical Engineer"
        },
        {
          "number": 2,
          "title": "Ergonomic 3D CAD Modeling & SLA 3D Printing",
          "weeks": "W4 - W5",
          "status": "Completed",
          "completionPercent": 100,
          "milestone": "Lightweight Finger Phalanx Assembly (< 450 grams total)",
          "leadRole": "CAD & Additive Lead"
        },
        {
          "number": 3,
          "title": "Dyneema Tendon Stringing & Micro Servo Winch Sizing",
          "weeks": "W6 - W7",
          "status": "Completed",
          "completionPercent": 100,
          "milestone": "Individual Finger Full Flexion/Extension Verified",
          "leadRole": "Mechanical Assembly Lead"
        },
        {
          "number": 4,
          "title": "MyoWare EMG Muscle Sensor Conditioning & DSP Filters",
          "weeks": "W8 - W10",
          "status": "In Progress",
          "completionPercent": 85,
          "milestone": "Real-Time Forearm Muscle Signal Envelope Classifier",
          "leadRole": "Bio-Signals / Firmware Lead"
        },
        {
          "number": 5,
          "title": "Grip Pattern Selection (Pinch, Power, Cylindrical, Point)",
          "weeks": "W11 - W12",
          "status": "In Progress",
          "completionPercent": 65,
          "milestone": "Adaptive Conformal Grip on Irregular Everyday Objects",
          "leadRole": "Embedded Controls Lead"
        },
        {
          "number": 6,
          "title": "User Ergonomic Testing, Grip Force Calibration & Defense",
          "weeks": "W13 - W14",
          "status": "Planned",
          "completionPercent": 15,
          "milestone": "Grip Force > 22 N Achieved; Academic Viva Complete",
          "leadRole": "Project Lead"
        }
      ],
      "wbs": [
        {
          "id": "1.0",
          "name": "Hand Anthropometry, Tendon Kinematics & Bio-Mechanics",
          "owner": "Biomechanical Engineer",
          "duration": "W1 - W3",
          "subtasks": [
            {
              "id": "1.1",
              "name": "5-Finger Underactuated Tendon Mechanism Validated",
              "estHours": 12,
              "status": "Done"
            }
          ]
        },
        {
          "id": "2.0",
          "name": "Ergonomic 3D CAD Modeling & SLA 3D Printing",
          "owner": "CAD & Additive Lead",
          "duration": "W4 - W5",
          "subtasks": [
            {
              "id": "2.1",
              "name": "Lightweight Finger Phalanx Assembly (< 450 grams total)",
              "estHours": 12,
              "status": "Done"
            }
          ]
        },
        {
          "id": "3.0",
          "name": "Dyneema Tendon Stringing & Micro Servo Winch Sizing",
          "owner": "Mechanical Assembly Lead",
          "duration": "W6 - W7",
          "subtasks": [
            {
              "id": "3.1",
              "name": "Individual Finger Full Flexion/Extension Verified",
              "estHours": 12,
              "status": "Done"
            }
          ]
        },
        {
          "id": "4.0",
          "name": "MyoWare EMG Muscle Sensor Conditioning & DSP Filters",
          "owner": "Bio-Signals / Firmware Lead",
          "duration": "W8 - W10",
          "subtasks": [
            {
              "id": "4.1",
              "name": "Real-Time Forearm Muscle Signal Envelope Classifier",
              "estHours": 12,
              "status": "In Progress"
            }
          ]
        },
        {
          "id": "5.0",
          "name": "Grip Pattern Selection (Pinch, Power, Cylindrical, Point)",
          "owner": "Embedded Controls Lead",
          "duration": "W11 - W12",
          "subtasks": [
            {
              "id": "5.1",
              "name": "Adaptive Conformal Grip on Irregular Everyday Objects",
              "estHours": 12,
              "status": "In Progress"
            }
          ]
        },
        {
          "id": "6.0",
          "name": "User Ergonomic Testing, Grip Force Calibration & Defense",
          "owner": "Project Lead",
          "duration": "W13 - W14",
          "subtasks": [
            {
              "id": "6.1",
              "name": "Grip Force > 22 N Achieved; Academic Viva Complete",
              "estHours": 12,
              "status": "Planned"
            }
          ]
        }
      ],
      "fmea": [
        {
          "subsystem": "Dyneema Tendon Cable",
          "failureMode": "Tendon fraying and snap inside finger knuckle channel",
          "effect": "Finger loses flexion, stays locked in extended state",
          "cause": "Sharp corner radius on 3D printed nylon internal routing channel",
          "severity": 7,
          "occurrence": 4,
          "detection": 2,
          "rpn": 56,
          "action": "Insert PTFE Teflon guide tubes inside all internal knuckle channels; radius all transition fillets to R2.5 mm.",
          "postActionRPN": 14
        },
        {
          "subsystem": "EMG Electrodes",
          "failureMode": "False grip trigger caused by perspiration or electrode shift",
          "effect": "Prosthetic hand opens unexpectedly, dropping water glass",
          "cause": "Skin impedance drops when user sweats, distorting signal baseline",
          "severity": 8,
          "occurrence": 4,
          "detection": 2,
          "rpn": 64,
          "action": "Implement software rolling baseline RMS thresholding with a mandatory 200 ms confirmation hold time.",
          "postActionRPN": 16
        }
      ],
      "raciMatrix": [
        {
          "activity": "Kinematic synthesis calculations & MATLAB simulation",
          "leadMech": "A/R",
          "embedded": "I",
          "feaAnalyst": "C",
          "machinist": "I"
        },
        {
          "activity": "SolidWorks 3D CAD modeling & tolerance allocation",
          "leadMech": "A/R",
          "embedded": "C",
          "feaAnalyst": "C",
          "machinist": "C"
        },
        {
          "activity": "ANSYS dynamic stress FEA & contact pressure study",
          "leadMech": "C",
          "embedded": "I",
          "feaAnalyst": "A/R",
          "machinist": "I"
        },
        {
          "activity": "Raw material procurement & vendor quotes",
          "leadMech": "A",
          "embedded": "C",
          "feaAnalyst": "I",
          "machinist": "R"
        },
        {
          "activity": "CNC VMC toolpath generation & Wire EDM slotting",
          "leadMech": "C",
          "embedded": "I",
          "feaAnalyst": "I",
          "machinist": "A/R"
        },
        {
          "activity": "Microcontroller PWM coding & optical sensor wiring",
          "leadMech": "C",
          "embedded": "A/R",
          "feaAnalyst": "I",
          "machinist": "I"
        },
        {
          "activity": "Mechanical subassembly, bearing shimming & runout alignment",
          "leadMech": "A/R",
          "embedded": "C",
          "feaAnalyst": "I",
          "machinist": "R"
        },
        {
          "activity": "Laser displacement repeatability logging & DVT validation",
          "leadMech": "A",
          "embedded": "R",
          "feaAnalyst": "R",
          "machinist": "C"
        },
        {
          "activity": "Final academic report synthesis & thesis compilation",
          "leadMech": "A/R",
          "embedded": "R",
          "feaAnalyst": "R",
          "machinist": "R"
        }
      ],
      "manufacturingRouting": [
        {
          "opNo": 11,
          "part": "Phase 1: 3D Printing & Skeleton Assembly",
          "machine": "Enclosed CoreXY 3D Printer (0.4mm Hardened Nozzle)",
          "operation": "High-Resolution FDM 3D Printing of Hand Skeleton",
          "parameters": "Layer height 0.16 mm, 100% infill, PETG-CF",
          "tolerance": "Layer height 0.16 mm, 100% infill, PETG-CF",
          "qcCheck": "Dry filament at 65°C for 6 hours prior to printing to prevent stringing."
        },
        {
          "opNo": 12,
          "part": "Phase 1: 3D Printing & Skeleton Assembly",
          "machine": "Hand Pin Vise & 2.0mm Precision Reamer",
          "operation": "Dowel Pin Press-Fitting & Joint Reaming",
          "parameters": "Phalanges must pivot freely under gravity with zero side play",
          "tolerance": "Phalanges must pivot freely under gravity with zero side play",
          "qcCheck": "Deburr all pin ends to avoid cutting synthetic tendon cables."
        },
        {
          "opNo": 13,
          "part": "Phase 1: 3D Printing & Skeleton Assembly",
          "machine": "Surgical Tweezers & Loctite 401 Gel",
          "operation": "Tendon Cable Threading & Elastic Spring Return",
          "parameters": "Thread Dyneema through low-friction PTFE guide tubes",
          "tolerance": "Thread Dyneema through low-friction PTFE guide tubes",
          "qcCheck": "Pre-stretch Dyneema cords with 5 kg static weight before securing."
        },
        {
          "opNo": 24,
          "part": "Phase 2: Electronics & Machine Learning Calibration",
          "machine": "Silicone Adhesive & Soldering Iron",
          "operation": "Motor Spool Installation & Tactile Sensor Gluing",
          "parameters": "Seal FSR sensors flush with TPU fingertip pads",
          "tolerance": "Seal FSR sensors flush with TPU fingertip pads",
          "qcCheck": "Avoid excessive heat on sensor tails; limit soldering iron to 280°C."
        },
        {
          "opNo": 25,
          "part": "Phase 2: Electronics & Machine Learning Calibration",
          "machine": "Alcohol Swabs & Bio-Sensor Electrodes",
          "operation": "EMG Electrode Placement & Skin Impedance Prep",
          "parameters": "Inter-electrode distance 20 mm along muscle fibers",
          "tolerance": "Inter-electrode distance 20 mm along muscle fibers",
          "qcCheck": "Ensure user skin is dry and free of oils for clean signal-to-noise ratio."
        },
        {
          "opNo": 26,
          "part": "Phase 2: Electronics & Machine Learning Calibration",
          "machine": "ESP-IDF / Edge Impulse Studio",
          "operation": "Edge AI Grip Model Training & Latency Verification",
          "parameters": "Model execution time < 35 ms, classification accuracy > 95%",
          "tolerance": "Model execution time < 35 ms, classification accuracy > 95%",
          "qcCheck": "Set motor stall current cut-off at 450 mA to prevent motor winding burnout."
        }
      ],
      "dvtTesting": [
        {
          "id": "DVT-01",
          "title": "Total Hand Mass (including motors)",
          "standard": "ISO / ASTM Engineering Benchmark",
          "equipment": "Precision Calibrated Laboratory Rig",
          "procedure": "Evaluate Total Hand Mass (including motors) under standard operating regime. Theoretical reference: < 400 grams.",
          "acceptanceCriteria": "Deviation within acceptable tolerance (observed: -3.8%)",
          "observedResult": "385 grams (Deviation: -3.8%)",
          "status": "Passed"
        },
        {
          "id": "DVT-02",
          "title": "EMG Intent Classification Accuracy",
          "standard": "ISO / ASTM Engineering Benchmark",
          "equipment": "Precision Calibrated Laboratory Rig",
          "procedure": "Evaluate EMG Intent Classification Accuracy under standard operating regime. Theoretical reference: 96.0 %.",
          "acceptanceCriteria": "Deviation within acceptable tolerance (observed: -1.2%)",
          "observedResult": "94.8 % (Deviation: -1.2%)",
          "status": "Passed"
        },
        {
          "id": "DVT-03",
          "title": "Grasp Execution Latency",
          "standard": "ISO / ASTM Engineering Benchmark",
          "equipment": "Precision Calibrated Laboratory Rig",
          "procedure": "Evaluate Grasp Execution Latency under standard operating regime. Theoretical reference: < 100 milliseconds.",
          "acceptanceCriteria": "Deviation within acceptable tolerance (observed: -15.0%)",
          "observedResult": "85 milliseconds (Deviation: -15.0%)",
          "status": "Passed"
        },
        {
          "id": "DVT-04",
          "title": "Max Cylinder Grasp Load Capacity",
          "standard": "ISO / ASTM Engineering Benchmark",
          "equipment": "Precision Calibrated Laboratory Rig",
          "procedure": "Evaluate Max Cylinder Grasp Load Capacity under standard operating regime. Theoretical reference: 2.0 kg.",
          "acceptanceCriteria": "Deviation within acceptable tolerance (observed: -7.5%)",
          "observedResult": "1.85 kg (Deviation: -7.5%)",
          "status": "Passed"
        }
      ],
      "budgetAnalysis": {
        "budgetPlannedINR": 19500,
        "budgetActualINR": 18900,
        "varianceINR": -600,
        "budgetPlannedUSD": 235,
        "budgetActualUSD": 228,
        "contingencyReserve": "10% included",
        "savingsHighlights": "Optimized vendor sourcing & shared workshop equipment reduced fabrication expenditure."
      }
    }
  },
  {
    "id": "ai-predictive-maintenance-twin",
    "title": "AI-Powered Predictive Maintenance & Digital Twin for Industrial Rotating Machinery",
    "shortTitle": "Digital Twin & Predictive Maintenance",
    "category": "Industry 4.0 & AI",
    "categorySlug": "industry-4-ai",
    "level": "B.Tech Final Year",
    "difficulty": "Expert",
    "durationWeeks": 16,
    "teamSize": "4 Members",
    "featured": true,
    "rating": 5,
    "estimatedCost": {
      "inr": 36000,
      "usd": 430
    },
    "tags": [
      "Digital Twin",
      "Predictive Maintenance",
      "Industry 4.0",
      "Vibration Analysis",
      "AI/ML"
    ],
    "badge": "Flagship Project",
    "abstract": "This flagship Industry 4.0 project presents an end-to-end intelligent predictive-maintenance platform and interactive 3D digital twin for critical rotating industrial machinery (induction motors, bearing housings, shafts, and gearboxes). Continuous 10 Hz telemetry streams 6 critical sensor channels—triaxial vibration, temperature, speed (RPM), line pressure, motor torque, and load percentage. An on-edge AI machine learning model detects bearing micro-faults, unbalance, and misalignment before catastrophic downtime occurs.",
    "problemStatement": "In heavy manufacturing, mining, and power generation, unplanned downtime of rotating machinery costs industries over $50 billion annually. Traditional periodic scheduled maintenance replaces healthy components prematurely or fails to detect sudden bearing spalls between inspection intervals. Reactive maintenance leads to catastrophic asset destruction, worker safety hazards, and prolonged plant outages.",
    "objectives": [
      "Construct a laboratory-scale rotating machinery test bench with modular fault injection (bearing outer race fault, unbalance, and angular misalignment).",
      "Stream synchronized high-frequency triaxial vibration, infrared surface temperature, optical RPM, and load torque telemetry at 10 Hz.",
      "Develop an interactive Three.js / WebGL 3D Digital Twin reflecting physical machine health, rotational speeds, and localized sensor alerts.",
      "Deploy an AI Random Forest / Deep Autoencoder anomaly detection model capable of classifying machine health and estimating Remaining Useful Life (RUL).",
      "Provide an automated prescriptive maintenance dashboard generating actionable work orders and downtime risk alerts."
    ],
    "workingPrinciple": {
      "summary": "The system operates as a closed cyber-physical loop. High-bandwidth piezoelectric and MEMS vibration accelerometers capture radial and axial mechanical oscillations. Fast Fourier Transform (FFT) converts time-domain acceleration into frequency spectra, isolating characteristic bearing fault frequencies: Ball Pass Frequency Outer Race (BPFO), Ball Pass Frequency Inner Race (BPFI), and Fundamental Train Frequency (FTF). Edge microprocessors feed these spectral features into machine learning models. A synchronized 3D Digital Twin renders the machine's state in real time for remote engineering oversight.",
      "fundamentalLaws": [
        "ISO 10816-3 Vibration Severity Standards for Industrial Machines",
        "Fast Fourier Transform (FFT) Discrete Spectral Decomposition: X_k = sum(x_n * e^(-i*2*pi*k*n/N))",
        "Rolling Element Bearing Defect Frequencies (BPFO = (n/2) * f_r * (1 - (d/D)*cos(theta)))",
        "Arrhenius Chemical Degradation Model for Insulation & Lubricant Thermal Aging"
      ],
      "operatingSequence": [
        {
          "step": 1,
          "title": "Multi-Sensor Telemetry Acquisition",
          "description": "Vibration, temperature, and speed sensors capture mechanical signals continuously at 10 Hz sampling rate."
        },
        {
          "step": 2,
          "title": "Spectral Signal Processing & FFT",
          "description": "Raw vibration acceleration is converted to RMS velocity (mm/s) and FFT peak frequencies are extracted."
        },
        {
          "step": 3,
          "title": "AI Anomaly Detection & RUL Inference",
          "description": "Trained ML model scores anomaly confidence (96%), identifies bearing fatigue, and projects Remaining Useful Life."
        },
        {
          "step": 4,
          "title": "Digital Twin Synchronization & Work Orders",
          "description": "3D virtual model updates color-coded stress zones, and the system issues automated maintenance repair orders."
        }
      ],
      "energyTransfer": "Mechanical Shaft Rotation -> Dynamic Vibration Oscillation -> Piezoelectric Crystal Stress Polarization -> High-Speed ADC Sampling -> Cloud MQTT Broker -> 3D Digital Twin WebGL Rendering."
    },
    "cadAndSpecs": {
      "dimensions": {
        "length": "920 mm",
        "width": "380 mm",
        "height": "320 mm",
        "totalWeight": "26.5 kg"
      },
      "tolerances": "Shaft radial runout < 0.015 mm, Coupling alignment angular offset < 0.05°",
      "materialsMain": [
        "AISI 1045 Carbon Steel (Ground Shaft 25mm Dia)",
        "Cast Iron Bearing Pillow Blocks (UCP 205)",
        "Aluminium 6061-T6 (Base Bedplate)",
        "Neoprene Jaw Flexible Spider Couplings"
      ],
      "cadSoftwareRecommended": [
        "SolidWorks 2024",
        "Autodesk Fusion 360",
        "Three.js / React Three Fiber"
      ],
      "assemblyPartsCount": 48,
      "blueprintFeatures": [
        {
          "view": "Rotating Machinery Test Rig Elevation",
          "description": "Shows 1.5 kW 3-phase induction motor, flexible coupling, dual bearing blocks, and eddy-current brake disc.",
          "criticalDimensions": "Shaft Length: 650.0 mm, Centerline Height: 120.0 mm"
        },
        {
          "view": "Vibration Sensor Mounting Geometry",
          "description": "Triaxial accelerometer studs drilled and tapped directly on the top and side of the drive-end bearing cap.",
          "criticalDimensions": "Thread: 1/4-28 UNF Stud Mount"
        },
        {
          "view": "Digital Twin 3D Mesh Hierarchy",
          "description": "Segmented parent-child hierarchy allowing independent rotation of motor rotor, shaft, couplings, and cooling fans in Three.js.",
          "criticalDimensions": "Model Polygon Count: 42,000 Triangles"
        }
      ],
      "visualType": "digital-twin"
    },
    "billOfMaterials": [
      {
        "itemNumber": 1,
        "partName": "Three-Phase Induction Motor (1.5 kW / 2 HP)",
        "specification": "415V, 1450 RPM, 4-Pole, Foot Mounted, TEFC Enclosure with Inverter Grade Winding",
        "material": "Cast Iron Frame & Copper Stator",
        "quantity": 1,
        "unitCostINR": 8500,
        "unitCostUSD": 102,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 2,
        "partName": "Variable Frequency Drive (VFD)",
        "specification": "2 HP Single Phase to 3-Phase Inverter, RS485 Modbus RTU, 0-60 Hz",
        "material": "Industrial Inverter Unit",
        "quantity": 1,
        "unitCostINR": 6500,
        "unitCostUSD": 78,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 3,
        "partName": "Industrial Triaxial Accelerometer",
        "specification": "MEMS / Piezoelectric Accelerometer (±16g range, 10 kHz bandwidth, 4-20mA / SPI)",
        "material": "Titanium / Stainless Steel Enclosure",
        "quantity": 2,
        "unitCostINR": 4200,
        "unitCostUSD": 50.5,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 4,
        "partName": "Precision Ground Shaft & Pillow Blocks",
        "specification": "25mm Dia x 650mm L ground shaft with SKF Explorer 6205 bearings in UCP 205 blocks",
        "material": "AISI 1045 Ground & Polished Steel",
        "quantity": 1,
        "unitCostINR": 3200,
        "unitCostUSD": 38.5,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 5,
        "partName": "Infrared Contactless Temperature Sensor",
        "specification": "Melexis MLX90614 DCI (Field of View 5°, high accuracy medical/industrial grade)",
        "material": "Stainless TO-39 Canister",
        "quantity": 2,
        "unitCostINR": 1100,
        "unitCostUSD": 13.2,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 6,
        "partName": "Torque & Load Cell Dynamometer Disc",
        "specification": "Eddy-current brake disc with S-type load cell (0-50 kg) for torque measurement",
        "material": "Copper Disc & Alloy Steel Load Cell",
        "quantity": 1,
        "unitCostINR": 3800,
        "unitCostUSD": 46,
        "procurementType": "Custom CNC Machined"
      },
      {
        "itemNumber": 7,
        "partName": "Edge IoT Gateway Computer",
        "specification": "Raspberry Pi 4 / ESP32-S3 with Ethernet, Wi-Fi, and WebSockets telemetry server",
        "material": "Aluminium Heatsink Enclosure",
        "quantity": 1,
        "unitCostINR": 5200,
        "unitCostUSD": 62.5,
        "procurementType": "Bought-out (Commercial)"
      },
      {
        "itemNumber": 8,
        "partName": "Machined Heavy-Duty Base Bedplate",
        "specification": "920mm x 380mm x 12mm ground steel plate with T-slots for modular realignment",
        "material": "Mild Steel IS 2062",
        "quantity": 1,
        "unitCostINR": 3500,
        "unitCostUSD": 42,
        "procurementType": "Laser Cut / Welded"
      }
    ],
    "costBreakdown": {
      "mechanicalHardware": 15200,
      "electronicsAndSensors": 14500,
      "rawMaterials": 3800,
      "machiningAndFabrication": 2500
    },
    "electronicsAndSensors": {
      "microcontroller": "Raspberry Pi 4 Model B (Edge Gateway & ML Inference) + ESP32 Sensor Nodes (High-Speed ADC Sampling)",
      "sensors": [
        {
          "name": "Triaxial Vibration Accelerometer",
          "model": "ADXL345 / Industrial Piezo Sensor",
          "function": "Continuous radial and axial vibration acceleration capture (RMS mm/s)",
          "operatingVoltage": "3.3V SPI / I2C"
        },
        {
          "name": "Infrared Thermal Sensor",
          "model": "MLX90614 (0 to 380°C)",
          "function": "Monitors non-contact bearing race temperature rise",
          "operatingVoltage": "3.3V I2C"
        },
        {
          "name": "Optical RPM Sensor",
          "model": "Reflective Infrared Tachometer",
          "function": "Measures instantaneous shaft speed (0-3000 RPM)",
          "operatingVoltage": "5V Pulse"
        },
        {
          "name": "Line Pressure Transducer",
          "model": "0-10 Bar Piezo-Resistive Sensor",
          "function": "Monitors lubrication oil supply line pressure",
          "operatingVoltage": "5V Analog"
        }
      ],
      "actuators": [
        {
          "name": "Three-Phase Induction Motor",
          "type": "1.5 kW 4-Pole AC Motor",
          "torqueOrForce": "9.8 N-m Rated Torque",
          "powerRating": "415V 3.2A"
        },
        {
          "name": "Eddy-Current Controllable Brake",
          "type": "Electromagnetic Load Simulator",
          "torqueOrForce": "0 - 15 N-m Dynamic Braking",
          "powerRating": "24V 5A"
        }
      ],
      "powerSupply": "3-Phase 415V AC Mains with Industrial Step-Down 24V 10A DC Power Supply for Control Electronics",
      "wiringSummary": "Industrial shielded twisted-pair cables with ground drain wire; isolated RS485 Modbus RTU communication to the motor VFD.",
      "circuitPinouts": [
        {
          "pin": "SPI Bus (MOSI, MISO, SCK, CS0)",
          "component": "Vibration Accelerometer",
          "signalType": "High-Speed Digital SPI"
        },
        {
          "pin": "I2C Bus (SDA, SCL)",
          "component": "Thermal Sensor & Pressure ADC",
          "signalType": "I2C 400 kHz Fast Mode"
        },
        {
          "pin": "USB / WebSocket",
          "component": "Edge Gateway <-> 3D Web Dashboard",
          "signalType": "Bidirectional JSON Telemetry Stream (10 Hz)"
        }
      ]
    },
    "designCalculations": {
      "title": "Bearing Defect Frequency, Vibration Severity, and RUL Estimation",
      "overview": "Evaluates the Ball Pass Frequency Outer Race (BPFO) for a 6205 deep-groove ball bearing at 1450 RPM and calculates overall vibration velocity severity according to ISO 10816-3.",
      "formulas": [
        {
          "name": "Outer Race Defect Frequency (BPFO)",
          "symbol": "BPFO = (n / 2) * f_r * (1 - (d / D) * cos(contact_angle))",
          "formula": "BPFO = \\frac{n}{2} \\cdot f_r \\cdot \\left(1 - \\frac{d}{D}\\cos\\theta\\right)",
          "explanation": "For SKF 6205 bearing: n = 9 balls, ball dia d = 7.94 mm, pitch dia D = 39.0 mm, shaft speed 1450 RPM (f_r = 24.17 Hz).",
          "exampleCalculation": "BPFO = (9 / 2) * 24.17 * (1 - (7.94 / 39.0) * cos(0°)) = 4.5 * 24.17 * (1 - 0.2036) = 108.76 * 0.7964 = 86.6 Hz",
          "result": "86.6 Hz Characteristic Peak"
        },
        {
          "name": "Vibration Severity RMS Velocity (V_rms)",
          "symbol": "V_rms = sqrt((1 / T) * integral(v(t)² dt))",
          "formula": "V_{rms} = \\sqrt{\\frac{1}{N} \\sum_{i=1}^N v_i^2}",
          "explanation": "Integrated velocity amplitude across 10 Hz - 1000 Hz. Under ISO 10816-3 Class II: < 2.8 mm/s is Good, > 4.5 mm/s triggers Warning.",
          "exampleCalculation": "Current healthy machine measurement: V_rms = 2.4 mm/s (Within Zone A/B Satisfactory).",
          "result": "2.4 mm/s (Class II Healthy)"
        },
        {
          "name": "Remaining Useful Life (RUL) Projection",
          "symbol": "RUL = t_current * ((Health_critical - Health_current) / Rate_of_degradation)",
          "formula": "RUL = \\frac{H_{threshold} - H_{current}}{\\Delta H / \\Delta t}",
          "explanation": "Projected operating hours remaining before vibration breaches critical threshold (V_rms > 7.1 mm/s).",
          "exampleCalculation": "RUL estimated at 1,240 hours based on continuous degradation trajectory slope.",
          "result": "1,240 Operating Hours"
        }
      ],
      "calculatorConfig": {
        "title": "Vibration Severity & Bearing Fault Frequency Sizer",
        "param1Name": "shaftRpm",
        "param1Label": "Shaft Operating RPM",
        "param1Unit": "RPM",
        "param1Default": 1450,
        "param1Min": 300,
        "param1Max": 3600,
        "param1Step": 50,
        "param2Name": "vibrationRms",
        "param2Label": "Vibration Velocity RMS",
        "param2Unit": "mm/s",
        "param2Default": 2.4,
        "param2Min": 0.5,
        "param2Max": 12,
        "param2Step": 0.1,
        "formulaType": "stress"
      }
    },
    "fabricationSequence": [
      {
        "phase": "Phase 1: Test Rig Alignment & Mechanical Setup",
        "steps": [
          {
            "order": 1,
            "operation": "Base Bedplate Milling & T-Slot Machining",
            "machineOrTool": "Plano Miller / CNC Bed Mill",
            "parametersOrTolerance": "Top surface flatness within 0.03 mm across 900 mm",
            "safetyPrecaution": "Stress-relieve steel plate prior to final finishing cut."
          },
          {
            "order": 2,
            "operation": "Shaft Turning, Keyway Broaching & Pillow Block Fit",
            "machineOrTool": "Center Lathe & Slotting Machine",
            "parametersOrTolerance": "Shaft diameter 25.00 mm (ISO h6 tolerance)",
            "safetyPrecaution": "Deburr all keyways to prevent seal damage during bearing installation."
          },
          {
            "order": 3,
            "operation": "Laser Alignment of Motor and Shaft Coupling",
            "machineOrTool": "Dual-Laser Shaft Alignment Tool (Pruftechnik)",
            "parametersOrTolerance": "Parallel offset < 0.03 mm, angular misalignment < 0.04°",
            "safetyPrecaution": "Lockout-Tagout (LOTO) 3-phase motor breaker during physical alignment."
          }
        ]
      },
      {
        "phase": "Phase 2: Digital Twin & Cloud Architecture",
        "steps": [
          {
            "order": 4,
            "operation": "Sensor Installation & Shielded Cabling",
            "machineOrTool": "Stud Mounting Tap & Torque Screwdriver",
            "parametersOrTolerance": "Torque accelerometer studs to 4.5 Nm with silicone couplant",
            "safetyPrecaution": "Ensure solid metal-to-metal contact without paint or dirt between sensor and bearing housing."
          },
          {
            "order": 5,
            "operation": "High-Frequency Telemetry Pipeline Configuration",
            "machineOrTool": "Python / Node.js WebSocket Bridge",
            "parametersOrTolerance": "Telemetry packet latency < 80 ms, 10 Hz refresh",
            "safetyPrecaution": "Test buffer overflow safeguards under high vibration signal bursts."
          },
          {
            "order": 6,
            "operation": "Interactive 3D Digital Twin Mesh Programming",
            "machineOrTool": "React Three Fiber / Three.js WebGL",
            "parametersOrTolerance": "60 FPS rendering performance on desktop and mobile browsers",
            "safetyPrecaution": "Isolate client-rendered Three.js components to prevent SSR hydration errors."
          }
        ]
      }
    ],
    "testingAndResults": {
      "testMethodology": "The rig was run under 4 distinct baseline and faulty scenarios: (1) Healthy baseline, (2) Outer race seeded bearing spall, (3) Shaft unbalance (50g eccentric weight), and (4) Angular misalignment (0.2°). AI model classification and RUL accuracy were logged.",
      "performanceMetrics": [
        {
          "metric": "Fault Detection Accuracy",
          "theoreticalValue": "98.0",
          "experimentalValue": "96.4",
          "unit": "%",
          "deviationPercent": "-1.6%",
          "status": "Optimal"
        },
        {
          "metric": "Bearing Anomaly Early Warning Lead Time",
          "theoreticalValue": "> 100",
          "experimentalValue": "140",
          "unit": "hours ahead",
          "deviationPercent": "+40h",
          "status": "Optimal"
        },
        {
          "metric": "Telemetry Latency to 3D Digital Twin",
          "theoreticalValue": "< 100",
          "experimentalValue": "68",
          "unit": "milliseconds",
          "deviationPercent": "-32ms",
          "status": "Passed"
        },
        {
          "metric": "Reduction in Unplanned Downtime",
          "theoreticalValue": "35",
          "experimentalValue": "38",
          "unit": "%",
          "deviationPercent": "+3.0%",
          "status": "Optimal"
        }
      ],
      "chartData": {
        "xLabel": "Vibration Frequency (Hz)",
        "yTheoreticalLabel": "Healthy Baseline Spectral Velocity (mm/s)",
        "yActualLabel": "Fault Injected Spectral Velocity (mm/s)",
        "dataPoints": [
          {
            "x": 24,
            "yTheoretical": 0.8,
            "yActual": 2.9
          },
          {
            "x": 48,
            "yTheoretical": 0.4,
            "yActual": 1.2
          },
          {
            "x": 86,
            "yTheoretical": 0.1,
            "yActual": 3.8
          },
          {
            "x": 120,
            "yTheoretical": 0.2,
            "yActual": 0.5
          },
          {
            "x": 172,
            "yTheoretical": 0.05,
            "yActual": 2.1
          },
          {
            "x": 250,
            "yTheoretical": 0.1,
            "yActual": 0.4
          }
        ]
      },
      "conclusions": "The AI-powered predictive maintenance platform successfully diagnosed early bearing micro-faults 140 operating hours prior to physical damage. The live 3D Digital Twin provided seamless real-time visualization of machine health, reducing simulated plant downtime by 38%."
    },
    "softwareStack": {
      "cad": [
        "SolidWorks 2024 (Rig CAD & Digital Twin Assets)",
        "Blender (GLTF Optimization)"
      ],
      "caeSimulation": [
        "ANSYS Mechanical (Modal Vibration FEA)",
        "React Three Fiber / Three.js (WebGL Digital Twin)"
      ],
      "programmingAndIde": [
        "Python (Scikit-Learn, SciPy FFT)",
        "TypeScript / React 19",
        "Vite & TanStack Start"
      ]
    },
    "prosAndCons": {
      "pros": [
        "Eliminates up to 38% of unplanned industrial machine downtime through early predictive warnings.",
        "Interactive 3D Digital Twin allows remote engineers to inspect component health from anywhere on any device.",
        "Continuous 10 Hz multi-parameter correlation catches multi-failure modes (e.g. combined thermal and vibration).",
        "Directly integrates with the existing live dashboard, analytics, and telemetry features of this platform."
      ],
      "cons": [
        "Requires initial baseline calibration period for the machine learning model under clean operational conditions.",
        "Industrial high-frequency accelerometers and VFDs require proper electrical shielding against EMI."
      ],
      "industrialLimitations": "High-temperature environments (>120°C) require specialized charge-mode accelerometers with external charge amplifiers."
    },
    "futureScope": [
      "Extending AI predictive algorithms to federated learning across multi-factory fleets without sharing proprietary raw telemetry.",
      "Augmented Reality (AR) glasses integration (e.g. Apple Vision Pro / HoloLens) projecting thermal holograms over physical machinery.",
      "Integrating automated acoustic emission ultrasonic listening sensors to detect nano-cracks prior to vibration emergence."
    ],
    "references": [
      "Machinery Vibration Analysis and Predictive Maintenance, Paresh Girdhar and Cornelis Scheffer.",
      "ISO 10816-3: Mechanical Vibration - Evaluation of Machine Vibration by Measurements on Non-Rotating Parts.",
      "IEEE Transactions on Industrial Informatics: Digital Twin-Driven Smart Manufacturing (Vol. 17, 2021)."
    ],
    "reportChapters": [
      {
        "chapterNumber": 1,
        "title": "Industry 4.0 & Predictive Maintenance Paradigm",
        "summary": "The economics of industrial uptime, failure curve progression (P-F curve), and transition from preventive to predictive paradigms."
      },
      {
        "chapterNumber": 2,
        "title": "Vibration Spectral Analysis & ISO Standards",
        "summary": "FFT decomposition, harmonic frequency isolation, bearing defect equations (BPFO, BPFI), and ISO 10816 severity guidelines."
      },
      {
        "chapterNumber": 3,
        "title": "Rotating Machinery Test Rig CAD & Alignment",
        "summary": "Dynamic shaft balancing, laser coupling alignment protocols, and modal resonance verification in ANSYS."
      },
      {
        "chapterNumber": 4,
        "title": "Edge Computing & AI Anomaly Detection Pipeline",
        "summary": "Feature extraction algorithms, time-frequency wavelets, Random Forest anomaly classification, and RUL estimation."
      },
      {
        "chapterNumber": 5,
        "title": "3D Digital Twin Engineering & WebGL Telemetry",
        "summary": "Parametric 3D mesh rendering in Three.js, WebSocket data streaming, and interactive component inspection."
      },
      {
        "chapterNumber": 6,
        "title": "Industrial Payback Audit & Future Extensions",
        "summary": "Calculated payback period of 4.2 months in paper mills and chemical plants, and roadmap for AR integration."
      }
    ],
    "planning": {
      "durationWeeks": 12,
      "scheduleType": "12-Week Industry 4.0 & Rotating Machinery IoT Roadmap",
      "phases": [
        {
          "number": 1,
          "title": "Bearing Kinematics, Defect Frequencies (BPFO/BPFI) & ISO 10816",
          "weeks": "W1 - W2",
          "status": "Completed",
          "completionPercent": 100,
          "milestone": "Theoretical Fault Signature Frequencies Calculated",
          "leadRole": "Vibration & Reliability Lead"
        },
        {
          "number": 2,
          "title": "Rotating Machinery Test Rig CAD Design & Dynamic Balancing",
          "weeks": "W3 - W4",
          "status": "Completed",
          "completionPercent": 100,
          "milestone": "Test Rig PDR & Shaft Alignment Verification",
          "leadRole": "Mechanical Design Lead"
        },
        {
          "number": 3,
          "title": "Test Bench Machining, Plummer Blocks & Fault Seed Induction",
          "weeks": "W5 - W6",
          "status": "Completed",
          "completionPercent": 100,
          "milestone": "Seeded Outer-Race EDM Micro-Notch (0.2 mm) Ready",
          "leadRole": "Manufacturing Specialist"
        },
        {
          "number": 4,
          "title": "Tri-Axial Accelerometer, Eddy Probe & High-Speed ADC Rig",
          "weeks": "W7 - W8",
          "status": "In Progress",
          "completionPercent": 85,
          "milestone": "20 kHz Synchronous Sampling & Hardware Anti-Aliasing Filter",
          "leadRole": "Data Acquisition Specialist"
        },
        {
          "number": 5,
          "title": "Edge AI FFT Feature Extraction & Remaining Useful Life (RUL)",
          "weeks": "W9 - W10",
          "status": "In Progress",
          "completionPercent": 70,
          "milestone": "Random Forest Anomaly Classifier > 96% Accuracy",
          "leadRole": "AI / Machine Learning Engineer"
        },
        {
          "number": 6,
          "title": "Three.js WebGL Digital Twin Telemetry & Thesis Defense",
          "weeks": "W11 - W12",
          "status": "Planned",
          "completionPercent": 20,
          "milestone": "Real-Time 3D Digital Twin Synchronized with Physical Rig",
          "leadRole": "Project Lead"
        }
      ],
      "wbs": [
        {
          "id": "1.0",
          "name": "Bearing Kinematics, Defect Frequencies (BPFO/BPFI) & ISO 10816",
          "owner": "Vibration & Reliability Lead",
          "duration": "W1 - W2",
          "subtasks": [
            {
              "id": "1.1",
              "name": "Theoretical Fault Signature Frequencies Calculated",
              "estHours": 12,
              "status": "Done"
            }
          ]
        },
        {
          "id": "2.0",
          "name": "Rotating Machinery Test Rig CAD Design & Dynamic Balancing",
          "owner": "Mechanical Design Lead",
          "duration": "W3 - W4",
          "subtasks": [
            {
              "id": "2.1",
              "name": "Test Rig PDR & Shaft Alignment Verification",
              "estHours": 12,
              "status": "Done"
            }
          ]
        },
        {
          "id": "3.0",
          "name": "Test Bench Machining, Plummer Blocks & Fault Seed Induction",
          "owner": "Manufacturing Specialist",
          "duration": "W5 - W6",
          "subtasks": [
            {
              "id": "3.1",
              "name": "Seeded Outer-Race EDM Micro-Notch (0.2 mm) Ready",
              "estHours": 12,
              "status": "Done"
            }
          ]
        },
        {
          "id": "4.0",
          "name": "Tri-Axial Accelerometer, Eddy Probe & High-Speed ADC Rig",
          "owner": "Data Acquisition Specialist",
          "duration": "W7 - W8",
          "subtasks": [
            {
              "id": "4.1",
              "name": "20 kHz Synchronous Sampling & Hardware Anti-Aliasing Filter",
              "estHours": 12,
              "status": "In Progress"
            }
          ]
        },
        {
          "id": "5.0",
          "name": "Edge AI FFT Feature Extraction & Remaining Useful Life (RUL)",
          "owner": "AI / Machine Learning Engineer",
          "duration": "W9 - W10",
          "subtasks": [
            {
              "id": "5.1",
              "name": "Random Forest Anomaly Classifier > 96% Accuracy",
              "estHours": 12,
              "status": "In Progress"
            }
          ]
        },
        {
          "id": "6.0",
          "name": "Three.js WebGL Digital Twin Telemetry & Thesis Defense",
          "owner": "Project Lead",
          "duration": "W11 - W12",
          "subtasks": [
            {
              "id": "6.1",
              "name": "Real-Time 3D Digital Twin Synchronized with Physical Rig",
              "estHours": 12,
              "status": "Planned"
            }
          ]
        }
      ],
      "fmea": [
        {
          "subsystem": "Piezoelectric Accelerometer",
          "failureMode": "Signal clipping during transient shock impact",
          "effect": "FFT spectrum shows broad-band noise floor, bearing defect peak masked",
          "cause": "Accelerometer dynamic range (±50g) exceeded due to resonant loose mounting",
          "severity": 7,
          "occurrence": 3,
          "detection": 2,
          "rpn": 42,
          "action": "Direct stud mount sensor using M5 threaded stud with cyanoacrylate adhesive on flat spot-faced surface.",
          "postActionRPN": 14
        },
        {
          "subsystem": "Edge Computing Gateway",
          "failureMode": "Data packet loss during continuous high-frequency streaming",
          "effect": "Transient vibration bursts missed, anomaly detection delayed",
          "cause": "WiFi network latency spike or serial buffer overrun at 20 kHz sample rate",
          "severity": 7,
          "occurrence": 4,
          "detection": 2,
          "rpn": 56,
          "action": "Perform local edge FFT calculation directly on ESP32-S3 microcontroller; transmit only compressed spectral features via MQTT.",
          "postActionRPN": 14
        }
      ],
      "raciMatrix": [
        {
          "activity": "Kinematic synthesis calculations & MATLAB simulation",
          "leadMech": "A/R",
          "embedded": "I",
          "feaAnalyst": "C",
          "machinist": "I"
        },
        {
          "activity": "SolidWorks 3D CAD modeling & tolerance allocation",
          "leadMech": "A/R",
          "embedded": "C",
          "feaAnalyst": "C",
          "machinist": "C"
        },
        {
          "activity": "ANSYS dynamic stress FEA & contact pressure study",
          "leadMech": "C",
          "embedded": "I",
          "feaAnalyst": "A/R",
          "machinist": "I"
        },
        {
          "activity": "Raw material procurement & vendor quotes",
          "leadMech": "A",
          "embedded": "C",
          "feaAnalyst": "I",
          "machinist": "R"
        },
        {
          "activity": "CNC VMC toolpath generation & Wire EDM slotting",
          "leadMech": "C",
          "embedded": "I",
          "feaAnalyst": "I",
          "machinist": "A/R"
        },
        {
          "activity": "Microcontroller PWM coding & optical sensor wiring",
          "leadMech": "C",
          "embedded": "A/R",
          "feaAnalyst": "I",
          "machinist": "I"
        },
        {
          "activity": "Mechanical subassembly, bearing shimming & runout alignment",
          "leadMech": "A/R",
          "embedded": "C",
          "feaAnalyst": "I",
          "machinist": "R"
        },
        {
          "activity": "Laser displacement repeatability logging & DVT validation",
          "leadMech": "A",
          "embedded": "R",
          "feaAnalyst": "R",
          "machinist": "C"
        },
        {
          "activity": "Final academic report synthesis & thesis compilation",
          "leadMech": "A/R",
          "embedded": "R",
          "feaAnalyst": "R",
          "machinist": "R"
        }
      ],
      "manufacturingRouting": [
        {
          "opNo": 11,
          "part": "Phase 1: Test Rig Alignment & Mechanical Setup",
          "machine": "Plano Miller / CNC Bed Mill",
          "operation": "Base Bedplate Milling & T-Slot Machining",
          "parameters": "Top surface flatness within 0.03 mm across 900 mm",
          "tolerance": "Top surface flatness within 0.03 mm across 900 mm",
          "qcCheck": "Stress-relieve steel plate prior to final finishing cut."
        },
        {
          "opNo": 12,
          "part": "Phase 1: Test Rig Alignment & Mechanical Setup",
          "machine": "Center Lathe & Slotting Machine",
          "operation": "Shaft Turning, Keyway Broaching & Pillow Block Fit",
          "parameters": "Shaft diameter 25.00 mm (ISO h6 tolerance)",
          "tolerance": "Shaft diameter 25.00 mm (ISO h6 tolerance)",
          "qcCheck": "Deburr all keyways to prevent seal damage during bearing installation."
        },
        {
          "opNo": 13,
          "part": "Phase 1: Test Rig Alignment & Mechanical Setup",
          "machine": "Dual-Laser Shaft Alignment Tool (Pruftechnik)",
          "operation": "Laser Alignment of Motor and Shaft Coupling",
          "parameters": "Parallel offset < 0.03 mm, angular misalignment < 0.04°",
          "tolerance": "Parallel offset < 0.03 mm, angular misalignment < 0.04°",
          "qcCheck": "Lockout-Tagout (LOTO) 3-phase motor breaker during physical alignment."
        },
        {
          "opNo": 24,
          "part": "Phase 2: Digital Twin & Cloud Architecture",
          "machine": "Stud Mounting Tap & Torque Screwdriver",
          "operation": "Sensor Installation & Shielded Cabling",
          "parameters": "Torque accelerometer studs to 4.5 Nm with silicone couplant",
          "tolerance": "Torque accelerometer studs to 4.5 Nm with silicone couplant",
          "qcCheck": "Ensure solid metal-to-metal contact without paint or dirt between sensor and bearing housing."
        },
        {
          "opNo": 25,
          "part": "Phase 2: Digital Twin & Cloud Architecture",
          "machine": "Python / Node.js WebSocket Bridge",
          "operation": "High-Frequency Telemetry Pipeline Configuration",
          "parameters": "Telemetry packet latency < 80 ms, 10 Hz refresh",
          "tolerance": "Telemetry packet latency < 80 ms, 10 Hz refresh",
          "qcCheck": "Test buffer overflow safeguards under high vibration signal bursts."
        },
        {
          "opNo": 26,
          "part": "Phase 2: Digital Twin & Cloud Architecture",
          "machine": "React Three Fiber / Three.js WebGL",
          "operation": "Interactive 3D Digital Twin Mesh Programming",
          "parameters": "60 FPS rendering performance on desktop and mobile browsers",
          "tolerance": "60 FPS rendering performance on desktop and mobile browsers",
          "qcCheck": "Isolate client-rendered Three.js components to prevent SSR hydration errors."
        }
      ],
      "dvtTesting": [
        {
          "id": "DVT-01",
          "title": "Fault Detection Accuracy",
          "standard": "ISO / ASTM Engineering Benchmark",
          "equipment": "Precision Calibrated Laboratory Rig",
          "procedure": "Evaluate Fault Detection Accuracy under standard operating regime. Theoretical reference: 98.0 %.",
          "acceptanceCriteria": "Deviation within acceptable tolerance (observed: -1.6%)",
          "observedResult": "96.4 % (Deviation: -1.6%)",
          "status": "Passed"
        },
        {
          "id": "DVT-02",
          "title": "Bearing Anomaly Early Warning Lead Time",
          "standard": "ISO / ASTM Engineering Benchmark",
          "equipment": "Precision Calibrated Laboratory Rig",
          "procedure": "Evaluate Bearing Anomaly Early Warning Lead Time under standard operating regime. Theoretical reference: > 100 hours ahead.",
          "acceptanceCriteria": "Deviation within acceptable tolerance (observed: +40h)",
          "observedResult": "140 hours ahead (Deviation: +40h)",
          "status": "Passed"
        },
        {
          "id": "DVT-03",
          "title": "Telemetry Latency to 3D Digital Twin",
          "standard": "ISO / ASTM Engineering Benchmark",
          "equipment": "Precision Calibrated Laboratory Rig",
          "procedure": "Evaluate Telemetry Latency to 3D Digital Twin under standard operating regime. Theoretical reference: < 100 milliseconds.",
          "acceptanceCriteria": "Deviation within acceptable tolerance (observed: -32ms)",
          "observedResult": "68 milliseconds (Deviation: -32ms)",
          "status": "Passed"
        },
        {
          "id": "DVT-04",
          "title": "Reduction in Unplanned Downtime",
          "standard": "ISO / ASTM Engineering Benchmark",
          "equipment": "Precision Calibrated Laboratory Rig",
          "procedure": "Evaluate Reduction in Unplanned Downtime under standard operating regime. Theoretical reference: 35 %.",
          "acceptanceCriteria": "Deviation within acceptable tolerance (observed: +3.0%)",
          "observedResult": "38 % (Deviation: +3.0%)",
          "status": "Passed"
        }
      ],
      "budgetAnalysis": {
        "budgetPlannedINR": 21000,
        "budgetActualINR": 20100,
        "varianceINR": -900,
        "budgetPlannedUSD": 250,
        "budgetActualUSD": 240,
        "contingencyReserve": "10% included",
        "savingsHighlights": "Optimized vendor sourcing & shared workshop equipment reduced fabrication expenditure."
      }
    }
  }
];
