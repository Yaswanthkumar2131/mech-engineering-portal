// ===================================================================
// MechNexus: Master Application Coordinator & View Engine
// ===================================================================

const MechApp = {
  currentProject: null,
  activeViewer: null,
  currentModalTab: 'overview',
  activePlanningSubTab: 'gantt',
  chartInstance: null,

  init() {
    console.log('Initializing MechNexus Mechanical Engineering Portal...');
    MechCatalog.init();
    this.initGlobalListeners();
    this.renderCalculatorsSuite();
    this.setupWizard();
  },

  // Switch Currency
  setCurrency(curr) {
    document.querySelectorAll('.currency-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-curr') === curr);
    });
    MechCatalog.setCurrency(curr);
    if (this.currentProject) {
      this.renderPlanningSubTab(this.activePlanningSubTab);
      this.renderBOM();
    }
  },

  // Open Project Detail Modal
  openProjectModal(projectId) {
    const project = (window.MECH_PROJECTS || []).find(p => p.id === projectId);
    if (!project) return;

    this.currentProject = project;
    this.currentModalTab = 'overview';
    this.activePlanningSubTab = 'gantt';

    // Populate Header
    document.getElementById('modalTitle').innerText = project.title;
    document.getElementById('modalCategoryBadge').innerText = project.category;
    document.getElementById('modalLevelBadge').innerText = project.level;
    document.getElementById('modalDifficultyBadge').innerText = project.difficulty;

    // Reset Tabs
    document.querySelectorAll('.modal-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === 'overview');
    });

    this.renderModalContent();

    const backdrop = document.getElementById('projectModalBackdrop');
    if (backdrop) {
      backdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  },

  closeProjectModal() {
    const backdrop = document.getElementById('projectModalBackdrop');
    if (backdrop) {
      backdrop.classList.remove('open');
      document.body.style.overflow = 'auto';
    }
    if (this.activeViewer) {
      this.activeViewer.destroy();
      this.activeViewer = null;
    }
    if (this.chartInstance) {
      this.chartInstance.destroy();
      this.chartInstance = null;
    }
  },

  switchModalTab(tabName) {
    this.currentModalTab = tabName;
    document.querySelectorAll('.modal-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabName);
    });

    document.querySelectorAll('.tab-pane').forEach(pane => {
      pane.classList.remove('active');
    });

    const activePane = document.getElementById(`tab-pane-${tabName}`);
    if (activePane) {
      activePane.classList.add('active');
    }

    if (tabName === '3d-sim') {
      this.init3DViewer();
    } else if (tabName === 'testing') {
      this.initTestingChart();
    }
  },

  renderModalContent() {
    const p = this.currentProject;
    if (!p) return;

    // 1. Overview Tab
    const overviewEl = document.getElementById('tab-pane-overview');
    if (overviewEl) {
      overviewEl.innerHTML = `
        <div style="display:grid; grid-template-columns: 1.2fr 0.8fr; gap:32px;">
          <div>
            <h3 style="font-size:1.3rem; margin-bottom:12px; color:var(--accent-cyan);">Project Synopsis & Abstract</h3>
            <p style="font-size:0.95rem; color:var(--text-main); line-height:1.7; margin-bottom:24px;">
              ${p.abstract}
            </p>

            <h3 style="font-size:1.2rem; margin-bottom:12px; color:var(--text-main);">Industrial Problem Statement</h3>
            <p style="font-size:0.9rem; color:var(--text-muted); line-height:1.7; margin-bottom:24px;">
              ${p.problemStatement}
            </p>

            <h3 style="font-size:1.2rem; margin-bottom:12px; color:var(--text-main);">Core Engineering Objectives</h3>
            <ul style="padding-left:20px; color:var(--text-muted); font-size:0.9rem; line-height:1.8; margin-bottom:24px;">
              ${(p.objectives || []).map(obj => `<li>${obj}</li>`).join('')}
            </ul>

            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px;">
              <div style="background:var(--bg-card); padding:16px; border-radius:var(--radius-md); border:1px solid rgba(16,185,129,0.3);">
                <h4 style="color:#34d399; font-size:0.95rem; margin-bottom:8px;">✓ Engineering Advantages</h4>
                <ul style="font-size:0.8rem; color:var(--text-muted); padding-left:16px; line-height:1.6;">
                  ${(p.prosAndCons && p.prosAndCons.pros ? p.prosAndCons.pros : []).map(pr => `<li>${pr}</li>`).join('')}
                </ul>
              </div>
              <div style="background:var(--bg-card); padding:16px; border-radius:var(--radius-md); border:1px solid rgba(244,63,94,0.3);">
                <h4 style="color:#f87171; font-size:0.95rem; margin-bottom:8px;">⚠️ Technical Challenges</h4>
                <ul style="font-size:0.8rem; color:var(--text-muted); padding-left:16px; line-height:1.6;">
                  ${(p.prosAndCons && p.prosAndCons.cons ? p.prosAndCons.cons : []).map(co => `<li>${co}</li>`).join('')}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div style="background:var(--bg-card); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:24px; margin-bottom:24px;">
              <h4 style="font-size:1rem; color:var(--accent-amber); margin-bottom:16px; text-transform:uppercase; letter-spacing:0.06em;">
                Engineering Tooling & Software
              </h4>
              <div style="margin-bottom:14px;">
                <span style="font-size:0.75rem; color:var(--text-dim); text-transform:uppercase; font-weight:700;">3D CAD Software:</span>
                <div style="display:flex; flex-wrap:wrap; gap:6px; margin-top:6px;">
                  ${(p.softwareStack && p.softwareStack.cad ? p.softwareStack.cad : ['SolidWorks']).map(s => `<span class="badge" style="background:rgba(0,240,255,0.1); color:var(--accent-cyan);">${s}</span>`).join('')}
                </div>
              </div>
              <div style="margin-bottom:14px;">
                <span style="font-size:0.75rem; color:var(--text-dim); text-transform:uppercase; font-weight:700;">CAE Multi-Physics & FEA:</span>
                <div style="display:flex; flex-wrap:wrap; gap:6px; margin-top:6px;">
                  ${(p.softwareStack && p.softwareStack.caeSimulation ? p.softwareStack.caeSimulation : ['ANSYS']).map(s => `<span class="badge" style="background:rgba(245,158,11,0.1); color:var(--accent-amber);">${s}</span>`).join('')}
                </div>
              </div>
              <div>
                <span style="font-size:0.75rem; color:var(--text-dim); text-transform:uppercase; font-weight:700;">Programming & IDE:</span>
                <div style="display:flex; flex-wrap:wrap; gap:6px; margin-top:6px;">
                  ${(p.softwareStack && p.softwareStack.programmingAndIde ? p.softwareStack.programmingAndIde : ['C++', 'Python']).map(s => `<span class="badge" style="background:rgba(168,85,247,0.1); color:#c084fc;">${s}</span>`).join('')}
                </div>
              </div>
            </div>

            <div style="background:var(--bg-card); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:24px;">
              <h4 style="font-size:1rem; color:var(--accent-cyan); margin-bottom:14px; text-transform:uppercase; letter-spacing:0.06em;">
                Quick Project Specs
              </h4>
              <div style="display:flex; flex-direction:column; gap:10px; font-size:0.85rem;">
                <div style="display:flex; justify-content:space-between; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:6px;">
                  <span style="color:var(--text-dim);">Execution Duration:</span>
                  <span style="font-weight:700; color:var(--text-main);">${p.durationWeeks} Weeks (${p.planning ? p.planning.phases.length : 8} Phases)</span>
                </div>
                <div style="display:flex; justify-content:space-between; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:6px;">
                  <span style="color:var(--text-dim);">Recommended Team:</span>
                  <span style="font-weight:700; color:var(--text-main);">${p.teamSize}</span>
                </div>
                <div style="display:flex; justify-content:space-between; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:6px;">
                  <span style="color:var(--text-dim);">Total Weight:</span>
                  <span style="font-weight:700; color:var(--text-main);">${p.cadAndSpecs && p.cadAndSpecs.dimensions ? p.cadAndSpecs.dimensions.totalWeight : '12.5 kg'}</span>
                </div>
                <div style="display:flex; justify-content:space-between; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:6px;">
                  <span style="color:var(--text-dim);">Machining Tolerances:</span>
                  <span style="font-weight:700; color:var(--accent-amber);">${p.cadAndSpecs ? p.cadAndSpecs.tolerances : 'ISO 2768-m'}</span>
                </div>
                <div style="display:flex; justify-content:space-between; padding-top:4px;">
                  <span style="color:var(--text-dim);">BOM Line Items:</span>
                  <span style="font-weight:700; color:var(--accent-emerald);">${p.billOfMaterials ? p.billOfMaterials.length : 0} Components</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // 2. Kinematics Tab
    const kinEl = document.getElementById('tab-pane-kinematics');
    if (kinEl && p.workingPrinciple) {
      kinEl.innerHTML = `
        <div style="display:grid; grid-template-columns: 1.1fr 0.9fr; gap:32px;">
          <div>
            <h3 style="font-size:1.25rem; color:var(--accent-cyan); margin-bottom:12px;">Kinematic Operating Sequence</h3>
            <p style="font-size:0.9rem; color:var(--text-main); margin-bottom:20px;">${p.workingPrinciple.summary}</p>

            <div style="display:flex; flex-direction:column; gap:14px; margin-bottom:28px;">
              ${(p.workingPrinciple.operatingSequence || []).map(seq => `
                <div style="background:var(--bg-card); border-left:3px solid var(--accent-cyan); padding:14px 18px; border-radius:0 var(--radius-sm) var(--radius-sm) 0;">
                  <h4 style="font-size:0.95rem; color:var(--text-main); margin-bottom:4px;">
                    Step ${seq.step}: ${seq.title}
                  </h4>
                  <p style="font-size:0.85rem; color:var(--text-muted); line-height:1.5;">${seq.description}</p>
                </div>
              `).join('')}
            </div>

            <div style="background:rgba(245,158,11,0.1); border:1px solid rgba(245,158,11,0.3); border-radius:var(--radius-md); padding:16px;">
              <h4 style="font-size:0.9rem; color:var(--accent-amber); margin-bottom:6px;">Governing Physical & Thermodynamic Laws</h4>
              <ul style="font-size:0.85rem; color:var(--text-muted); padding-left:18px;">
                ${(p.workingPrinciple.fundamentalLaws || []).map(law => `<li>${law}</li>`).join('')}
              </ul>
            </div>
          </div>

          <div>
            <div style="background:var(--bg-card); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:24px; margin-bottom:24px;">
              <h4 style="font-size:1rem; color:var(--accent-cyan); margin-bottom:14px; text-transform:uppercase;">
                CAD Dimensions & Envelope
              </h4>
              ${p.cadAndSpecs && p.cadAndSpecs.dimensions ? `
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px; font-size:0.85rem;">
                  <div style="background:rgba(0,0,0,0.2); padding:10px; border-radius:6px;">
                    <span style="color:var(--text-dim); font-size:0.75rem;">Length:</span><br>
                    <strong style="color:var(--text-main);">${p.cadAndSpecs.dimensions.length}</strong>
                  </div>
                  <div style="background:rgba(0,0,0,0.2); padding:10px; border-radius:6px;">
                    <span style="color:var(--text-dim); font-size:0.75rem;">Width:</span><br>
                    <strong style="color:var(--text-main);">${p.cadAndSpecs.dimensions.width}</strong>
                  </div>
                  <div style="background:rgba(0,0,0,0.2); padding:10px; border-radius:6px;">
                    <span style="color:var(--text-dim); font-size:0.75rem;">Height:</span><br>
                    <strong style="color:var(--text-main);">${p.cadAndSpecs.dimensions.height}</strong>
                  </div>
                  <div style="background:rgba(0,0,0,0.2); padding:10px; border-radius:6px;">
                    <span style="color:var(--text-dim); font-size:0.75rem;">Total Weight:</span><br>
                    <strong style="color:var(--accent-amber);">${p.cadAndSpecs.dimensions.totalWeight}</strong>
                  </div>
                </div>
              ` : ''}
            </div>

            <div style="background:var(--bg-card); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:24px;">
              <h4 style="font-size:1rem; color:var(--text-main); margin-bottom:12px;">Critical Blueprint Features</h4>
              <div style="display:flex; flex-direction:column; gap:10px;">
                ${(p.cadAndSpecs && p.cadAndSpecs.blueprintFeatures ? p.cadAndSpecs.blueprintFeatures : []).map(bf => `
                  <div style="font-size:0.85rem; border-bottom:1px solid rgba(255,255,255,0.04); padding-bottom:8px;">
                    <strong style="color:var(--accent-cyan);">${bf.view}:</strong> ${bf.description}<br>
                    <small style="color:var(--accent-amber); font-family:var(--font-mono);">Critical Dim: ${bf.criticalDimensions}</small>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // 4. Planning Tab (THE HEART)
    this.renderPlanningSubTab(this.activePlanningSubTab);

    // 5. Calculations Tab
    this.renderCalculationsTab();

    // 6. BOM Tab
    this.renderBOM();

    // 7. Machining Tab
    const machEl = document.getElementById('tab-pane-machining');
    if (machEl) {
      machEl.innerHTML = MechPlanner.renderRouting(p);
    }

    // 8. Electronics Tab
    const elecEl = document.getElementById('tab-pane-electronics');
    if (elecEl) {
      const elec = p.electronicsAndSensors;
      if (elec) {
        elecEl.innerHTML = `
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:28px;">
            <div>
              <h3 style="font-size:1.15rem; color:var(--accent-cyan); margin-bottom:14px;">Sensors & Transducers</h3>
              <div class="data-table-wrap">
                <table class="mech-table">
                  <thead>
                    <tr><th>Sensor Name</th><th>Model</th><th>Function</th><th>Voltage</th></tr>
                  </thead>
                  <tbody>
                    ${(elec.sensors || []).map(s => `
                      <tr>
                        <td><strong>${s.name}</strong></td>
                        <td style="font-family:var(--font-mono); color:var(--accent-cyan);">${s.model}</td>
                        <td style="font-size:0.8rem; color:var(--text-muted);">${s.function}</td>
                        <td style="font-size:0.8rem; color:var(--accent-amber);">${s.operatingVoltage}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>

              <h3 style="font-size:1.15rem; color:var(--accent-cyan); margin:20px 0 14px;">Actuators & Motors</h3>
              <div class="data-table-wrap">
                <table class="mech-table">
                  <thead>
                    <tr><th>Actuator</th><th>Type</th><th>Rating</th><th>Power</th></tr>
                  </thead>
                  <tbody>
                    ${(elec.actuators || []).map(a => `
                      <tr>
                        <td><strong>${a.name}</strong></td>
                        <td style="font-size:0.8rem;">${a.type}</td>
                        <td style="font-weight:700; color:var(--accent-amber);">${a.torqueOrForce}</td>
                        <td style="font-size:0.8rem;">${a.powerRating}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <div style="background:var(--bg-card); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:24px; margin-bottom:24px;">
                <h4 style="font-size:1rem; color:var(--text-main); margin-bottom:12px;">Microcontroller & Architecture</h4>
                <div style="font-size:0.9rem; color:var(--accent-cyan); font-weight:700; margin-bottom:8px;">
                  💻 Controller: ${elec.microcontroller}
                </div>
                <div style="font-size:0.85rem; color:var(--text-muted); line-height:1.6; margin-bottom:12px;">
                  <strong>Power Supply:</strong> ${elec.powerSupply}
                </div>
                <div style="font-size:0.85rem; color:var(--text-dim); line-height:1.6;">
                  <strong>Wiring Summary:</strong> ${elec.wiringSummary}
                </div>
              </div>

              <h3 style="font-size:1.15rem; color:var(--accent-cyan); margin-bottom:14px;">Microcontroller Pinout Configuration</h3>
              <div class="data-table-wrap">
                <table class="mech-table">
                  <thead>
                    <tr><th>Pin ID</th><th>Connected Hardware</th><th>Signal Protocol</th></tr>
                  </thead>
                  <tbody>
                    ${(elec.circuitPinouts || []).map(cp => `
                      <tr>
                        <td style="font-family:var(--font-mono); font-weight:700; color:var(--accent-amber);">${cp.pin}</td>
                        <td>${cp.component}</td>
                        <td style="font-size:0.8rem; color:var(--text-dim);">${cp.signalType}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        `;
      } else {
        elecEl.innerHTML = '<p class="text-muted">This project is primarily a pure mechanical assembly without embedded microcontrollers.</p>';
      }
    }

    // 9. Testing Tab
    const testEl = document.getElementById('tab-pane-testing');
    if (testEl && p.testingAndResults) {
      testEl.innerHTML = `
        <div style="margin-bottom:24px;">
          <h3 style="font-size:1.2rem; color:var(--accent-cyan); margin-bottom:8px;">Experimental Validation Methodology</h3>
          <p style="font-size:0.9rem; color:var(--text-main);">${p.testingAndResults.testMethodology}</p>
        </div>

        <div style="display:grid; grid-template-columns: 1fr 1fr; gap:28px; margin-bottom:30px;">
          <div>
            <h4 style="font-size:1rem; color:var(--text-main); margin-bottom:12px;">Theoretical vs Experimental Curve</h4>
            <div style="background:var(--bg-card); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:20px; height:320px;">
              <canvas id="testingChartCanvas"></canvas>
            </div>
          </div>
          <div>
            <h4 style="font-size:1rem; color:var(--text-main); margin-bottom:12px;">Engineering Conclusions</h4>
            <div style="background:var(--bg-card); border:1px solid var(--border-subtle); border-radius:var(--radius-lg); padding:24px; font-size:0.9rem; color:var(--text-muted); line-height:1.7;">
              ${p.testingAndResults.conclusions}
            </div>
          </div>
        </div>

        ${MechPlanner.renderDVT(p)}
      `;
    }

    // 10. Report Tab
    const reportEl = document.getElementById('tab-pane-report');
    if (reportEl) {
      reportEl.innerHTML = MechPlanner.generateThesisReport(p);
    }
  },

  // 3D Viewer Initialization
  init3DViewer() {
    const p = this.currentProject;
    if (!p) return;

    const visualType = p.cadAndSpecs ? p.cadAndSpecs.visualType : 'geneva';

    setTimeout(() => {
      if (this.activeViewer) {
        this.activeViewer.destroy();
      }
      this.activeViewer = new Mech3DViewer('modal3DCanvasContainer', {
        visualType: visualType,
        speed: 1.0,
        wireframe: false
      });
    }, 100);
  },

  // Planning Sub-Tab Switching
  switchPlanningSubTab(subTab) {
    this.activePlanningSubTab = subTab;
    document.querySelectorAll('.planning-subtab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-subtab') === subTab);
    });
    this.renderPlanningSubTab(subTab);
  },

  renderPlanningSubTab(subTab) {
    const container = document.getElementById('planningSubContent');
    const p = this.currentProject;
    if (!container || !p) return;

    switch (subTab) {
      case 'gantt':
        container.innerHTML = MechPlanner.renderGantt(p);
        break;
      case 'wbs':
        container.innerHTML = MechPlanner.renderWBS(p);
        break;
      case 'fmea':
        container.innerHTML = MechPlanner.renderFMEA(p);
        break;
      case 'raci':
        container.innerHTML = MechPlanner.renderRACI(p);
        break;
      case 'budget':
        container.innerHTML = MechPlanner.renderBudget(p, MechCatalog.currentCurrency);
        break;
      default:
        container.innerHTML = MechPlanner.renderGantt(p);
    }
  },

  // Render BOM Table
  renderBOM() {
    const bomEl = document.getElementById('tab-pane-bom');
    const p = this.currentProject;
    if (!bomEl || !p) return;

    const bom = p.billOfMaterials || [];
    const isINR = MechCatalog.currentCurrency === 'INR';
    const sym = isINR ? '₹' : '$';

    let totalINR = 0;
    let totalUSD = 0;

    let rowsHtml = '';
    bom.forEach(item => {
      const uINR = item.unitCostINR || 100;
      const uUSD = item.unitCostUSD || 1.5;
      const tINR = uINR * item.quantity;
      const tUSD = uUSD * item.quantity;
      totalINR += tINR;
      totalUSD += tUSD;

      rowsHtml += `
        <tr>
          <td style="text-align:center; font-family:var(--font-mono); color:var(--text-dim);">${item.itemNumber}</td>
          <td><strong style="color:var(--text-main);">${item.partName}</strong></td>
          <td style="font-size:0.8rem; color:var(--text-muted);">${item.specification}</td>
          <td style="font-size:0.8rem; color:var(--accent-cyan);">${item.material}</td>
          <td style="text-align:center; font-weight:700;">${item.quantity}</td>
          <td style="font-family:var(--font-mono);">${sym} ${isINR ? uINR.toLocaleString() : uUSD.toLocaleString()}</td>
          <td style="font-family:var(--font-mono); font-weight:700; color:var(--accent-emerald);">${sym} ${isINR ? tINR.toLocaleString() : tUSD.toLocaleString()}</td>
          <td><span style="font-size:0.75rem; background:rgba(255,255,255,0.06); padding:2px 8px; border-radius:4px;">${item.procurementType}</span></td>
        </tr>
      `;
    });

    bomEl.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
        <div>
          <h3 style="font-size:1.2rem; color:var(--accent-cyan);">Complete Engineering Bill of Materials (BOM)</h3>
          <p style="font-size:0.85rem; color:var(--text-dim);">
            Total Components: <strong>${bom.length} Lines</strong> | Total Sourced Cost: <strong style="color:var(--accent-emerald);">${sym} ${isINR ? totalINR.toLocaleString() : totalUSD.toLocaleString()}</strong>
          </p>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="MechApp.exportBOMCSV()">
          <span>📥</span> Export BOM to CSV
        </button>
      </div>

      <div class="data-table-wrap">
        <table class="mech-table">
          <thead>
            <tr>
              <th style="text-align:center;">#</th>
              <th>Part Name</th>
              <th>Technical Specification</th>
              <th>Material</th>
              <th style="text-align:center;">Qty</th>
              <th>Unit Price</th>
              <th>Total Cost</th>
              <th>Procurement Channel</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    `;
  },

  exportBOMCSV() {
    const p = this.currentProject;
    if (!p || !p.billOfMaterials) return;

    let csv = "Item,Part Name,Specification,Material,Qty,Unit Price INR,Unit Price USD,Procurement Type\n";
    p.billOfMaterials.forEach(b => {
      csv += `"${b.itemNumber}","${b.partName}","${b.specification}","${b.material}","${b.quantity}","${b.unitCostINR}","${b.unitCostUSD}","${b.procurementType}"\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${p.id}-BOM.csv`;
    a.click();
    URL.revokeObjectURL(url);
  },

  // Calculations Tab Logic
  renderCalculationsTab() {
    const calcEl = document.getElementById('tab-pane-calculations');
    const p = this.currentProject;
    if (!calcEl || !p) return;

    const calcData = p.designCalculations;
    if (!calcData) {
      calcEl.innerHTML = '<p class="text-muted">No calculation data available.</p>';
      return;
    }

    let formulasHtml = '';
    (calcData.formulas || []).forEach(f => {
      formulasHtml += `
        <div style="background:var(--bg-card); border:1px solid var(--border-subtle); border-radius:var(--radius-md); padding:18px; margin-bottom:16px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <strong style="color:var(--text-main); font-size:1rem;">${f.name}</strong>
            <span style="font-family:var(--font-mono); font-size:0.85rem; color:var(--accent-cyan); background:var(--accent-cyan-dim); padding:2px 8px; border-radius:4px;">
              ${f.symbol}
            </span>
          </div>
          <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:8px;">${f.explanation}</div>
          <div style="background:#050810; padding:10px 14px; border-radius:4px; font-family:var(--font-mono); font-size:0.8rem; color:#93c5fd; margin-bottom:6px;">
            ${f.exampleCalculation}
          </div>
          <div style="font-size:0.85rem; color:#86efac; font-weight:700;">
            Result: ${f.result}
          </div>
        </div>
      `;
    });

    calcEl.innerHTML = `
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:32px;">
        <div>
          <h3 style="font-size:1.2rem; color:var(--accent-cyan); margin-bottom:8px;">${calcData.title}</h3>
          <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:20px;">${calcData.overview}</p>
          ${formulasHtml}
        </div>

        <div>
          <div class="calc-box">
            <h3 style="font-size:1.15rem; color:var(--accent-amber); margin-bottom:16px; display:flex; align-items:center; gap:8px;">
              <span>🧮</span> Live Parametric Sizing Calculator
            </h3>
            <div id="liveProjectCalcInputs">
              <!-- Dynamically populated calculator based on project visual type -->
            </div>
            <div class="calc-output-box" id="liveProjectCalcOutputs">
              <!-- Dynamically updated -->
            </div>
          </div>
        </div>
      </div>
    `;

    this.initProjectLiveCalculator(p);
  },

  initProjectLiveCalculator(project) {
    const inputsEl = document.getElementById('liveProjectCalcInputs');
    const outputsEl = document.getElementById('liveProjectCalcOutputs');
    if (!inputsEl || !outputsEl) return;

    if (project.id === 'geneva-mechanism-conveyor') {
      inputsEl.innerHTML = `
        <div class="calc-param-group">
          <label>Drive Speed: <span id="val-geneva-rpm" style="color:var(--accent-cyan);">60 RPM</span></label>
          <input type="range" id="input-geneva-rpm" min="10" max="150" value="60" step="5">
        </div>
        <div class="calc-param-group">
          <label>Crank Pin Radius: <span id="val-geneva-r" style="color:var(--accent-cyan);">60 mm</span></label>
          <input type="range" id="input-geneva-r" min="30" max="120" value="60" step="5">
        </div>
        <div class="calc-param-group">
          <label>Driven Inertia: <span id="val-geneva-j" style="color:var(--accent-cyan);">0.012 kg·m²</span></label>
          <input type="range" id="input-geneva-j" min="0.005" max="0.05" value="0.012" step="0.002">
        </div>
      `;

      const update = () => {
        const rpm = document.getElementById('input-geneva-rpm').value;
        const r = document.getElementById('input-geneva-r').value;
        const j = document.getElementById('input-geneva-j').value;
        document.getElementById('val-geneva-rpm').innerText = `${rpm} RPM`;
        document.getElementById('val-geneva-r').innerText = `${r} mm`;
        document.getElementById('val-geneva-j').innerText = `${j} kg·m²`;

        const res = MechCalculators.calculateGeneva({ rpm, radius: r, inertia: j });
        outputsEl.innerHTML = `
          <h4 style="font-size:0.9rem; color:var(--text-dim); text-transform:uppercase; margin-bottom:12px;">Real-Time Calculation Outputs</h4>
          ${res.outputs.map(o => `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; border-bottom:1px solid rgba(255,255,255,0.05); padding-bottom:6px;">
              <div>
                <span style="font-size:0.85rem; color:var(--text-main); font-weight:600;">${o.label}</span><br>
                <small style="color:var(--text-dim); font-family:var(--font-mono);">${o.formula}</small>
              </div>
              <strong style="font-size:1.1rem; color:${o.status === 'Danger' ? '#f43f5e' : 'var(--accent-cyan)'};">${o.value}</strong>
            </div>
          `).join('')}
        `;
      };

      ['input-geneva-rpm', 'input-geneva-r', 'input-geneva-j'].forEach(id => {
        document.getElementById(id).addEventListener('input', update);
      });
      update();
    } else {
      // Generic calculation output
      outputsEl.innerHTML = `
        <div style="font-size:0.9rem; color:var(--accent-cyan); font-weight:700; margin-bottom:8px;">
          Calculated Parameters Ready
        </div>
        <p style="font-size:0.85rem; color:var(--text-muted);">
          Explore full design parameters in the Engineering Calculators Suite section.
        </p>
      `;
    }
  },

  // Testing Chart
  initTestingChart() {
    const canvas = document.getElementById('testingChartCanvas');
    const p = this.currentProject;
    if (!canvas || !p || !p.testingAndResults || !p.testingAndResults.chartData) return;

    if (this.chartInstance) {
      this.chartInstance.destroy();
    }

    if (typeof Chart === 'undefined') return;

    const cData = p.testingAndResults.chartData;
    const labels = cData.dataPoints.map(dp => dp.x);
    const theoretical = cData.dataPoints.map(dp => dp.yTheoretical);
    const actual = cData.dataPoints.map(dp => dp.yActual);

    this.chartInstance = new Chart(canvas, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: cData.yTheoreticalLabel,
            data: theoretical,
            borderColor: '#00f0ff',
            backgroundColor: 'rgba(0, 240, 255, 0.1)',
            borderDash: [5, 5],
            tension: 0.3
          },
          {
            label: cData.yActualLabel,
            data: actual,
            borderColor: '#f59e0b',
            backgroundColor: 'rgba(245, 158, 11, 0.2)',
            fill: true,
            tension: 0.3
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: '#cbd5e1' } }
        },
        scales: {
          x: {
            title: { display: true, text: cData.xLabel, color: '#94a3b8' },
            grid: { color: 'rgba(255,255,255,0.06)' },
            ticks: { color: '#94a3b8' }
          },
          y: {
            title: { display: true, text: 'Measured Output', color: '#94a3b8' },
            grid: { color: 'rgba(255,255,255,0.06)' },
            ticks: { color: '#94a3b8' }
          }
        }
      }
    });
  },

  // Render Calculators Suite on Home Page
  renderCalculatorsSuite() {
    const container = document.getElementById('calculatorsSuiteContainer');
    if (!container) return;

    container.innerHTML = `
      <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:24px;">
        <div class="calc-box">
          <h4 style="color:var(--accent-cyan); font-size:1.05rem; margin-bottom:8px;">1. Geneva Kinematic & Shock</h4>
          <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:16px;">Evaluates peak angular acceleration, dynamic torque, and pin shear stress.</p>
          <button class="btn btn-secondary btn-sm" onclick="MechApp.openProjectModal('geneva-mechanism-conveyor')">Open Sizer ➔</button>
        </div>

        <div class="calc-box">
          <h4 style="color:var(--accent-amber); font-size:1.05rem; margin-bottom:8px;">2. Solar Trough Thermal Yield</h4>
          <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:16px;">Calculates geometric concentration ratio, heat collection, and thermal efficiency.</p>
          <button class="btn btn-secondary btn-sm" onclick="MechApp.openProjectModal('solar-parabolic-trough')">Open Sizer ➔</button>
        </div>

        <div class="calc-box">
          <h4 style="color:#38bdf8; font-size:1.05rem; margin-bottom:8px;">3. 6-DOF Joint Torque & Motor</h4>
          <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:16px;">Determines cantilevered link torque, dynamic factor, and stall torque rating.</p>
          <button class="btn btn-secondary btn-sm" onclick="MechApp.openProjectModal('six-dof-robotic-arm')">Open Sizer ➔</button>
        </div>

        <div class="calc-box">
          <h4 style="color:#34d399; font-size:1.05rem; margin-bottom:8px;">4. EV Regenerative Braking</h4>
          <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:16px;">Calculates kinetic energy recuperation and battery Watt-hours recovered.</p>
          <button class="btn btn-secondary btn-sm" onclick="MechApp.openProjectModal('regenerative-braking-ev')">Open Sizer ➔</button>
        </div>

        <div class="calc-box">
          <h4 style="color:#f43f5e; font-size:1.05rem; margin-bottom:8px;">5. 3-Axis CNC Speeds & Feeds</h4>
          <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:16px;">Calculates spindle RPM, table feed rate, MRR, and spindle power required.</p>
          <button class="btn btn-secondary btn-sm" onclick="MechApp.openProjectModal('desktop-3axis-cnc')">Open Sizer ➔</button>
        </div>

        <div class="calc-box">
          <h4 style="color:#a855f7; font-size:1.05rem; margin-bottom:8px;">6. Hydraulic Scissor Lift Thrust</h4>
          <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:16px;">Sizes hydraulic cylinder bore and required operating pressure.</p>
          <button class="btn btn-secondary btn-sm" onclick="MechApp.openProjectModal('electro-hydraulic-scissor-lift')">Open Sizer ➔</button>
        </div>
      </div>
    `;
  },

  // Project Matchmaker Wizard Setup
  setupWizard() {
    this.wizardData = { level: '', category: '', budget: '', workshop: '' };
  },

  openWizard() {
    const modal = document.getElementById('wizardModalBackdrop');
    if (modal) modal.classList.add('open');
    this.showWizardStep(1);
  },

  closeWizard() {
    const modal = document.getElementById('wizardModalBackdrop');
    if (modal) modal.classList.remove('open');
  },

  showWizardStep(step) {
    document.querySelectorAll('.wizard-step-wrap').forEach(el => el.classList.remove('active'));
    const stepEl = document.getElementById(`wizardStep${step}`);
    if (stepEl) stepEl.classList.add('active');
  },

  selectWizardOption(field, value, nextStep) {
    this.wizardData[field] = value;
    if (nextStep <= 4) {
      this.showWizardStep(nextStep);
    } else {
      this.finishWizard();
    }
  },

  finishWizard() {
    this.closeWizard();
    // Recommends best match
    const projects = window.MECH_PROJECTS || [];
    let match = projects.find(p => p.categorySlug === this.wizardData.category) || projects[0];

    alert(`🎉 Recommended Capstone Project: "${match.title}"\nOpening complete project dossier and planning schedule...`);
    this.openProjectModal(match.id);
  },

  initGlobalListeners() {
    // Theme toggle
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
        document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
        themeBtn.innerHTML = isDark ? '🌙' : '☀️';
      });
    }

    // Modal close outside click
    window.addEventListener('click', (e) => {
      const pModal = document.getElementById('projectModalBackdrop');
      if (e.target === pModal) this.closeProjectModal();

      const cModal = document.getElementById('comparisonModalBackdrop');
      if (e.target === cModal) cModal.classList.remove('open');

      const wModal = document.getElementById('wizardModalBackdrop');
      if (e.target === wModal) this.closeWizard();
    });

    // Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeProjectModal();
        const cModal = document.getElementById('comparisonModalBackdrop');
        if (cModal) cModal.classList.remove('open');
        this.closeWizard();
      }
    });
  }
};

window.MechApp = MechApp;

// Auto-run on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  MechApp.init();
});
