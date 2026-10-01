// ===================================================================
// MechNexus: Comprehensive Project Planning Suite Engine
// Interactive Gantt Charts, WBS Tree, FMEA Risk Matrices,
// Team RACI Matrices, Manufacturing Routing & Thesis Report Generator
// ===================================================================

const MechPlanner = {
  // 1. Render Interactive Gantt Timeline
  renderGantt(project) {
    const planning = project.planning;
    if (!planning || !planning.phases) return '<p class="text-muted">No planning schedule available.</p>';

    let html = `
      <div class="gantt-chart-container">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:18px;">
          <div>
            <h3 style="font-size:1.15rem; color:var(--accent-cyan); display:flex; align-items:center; gap:8px;">
              <span>📅</span> ${planning.scheduleType || '12-Week Agile Engineering Lifecycle Plan'}
            </h3>
            <p style="font-size:0.8rem; color:var(--text-dim); margin-top:2px;">
              Duration: <strong>${planning.durationWeeks} Weeks</strong> | Milestones: <strong>${planning.phases.length} Verified Gates</strong>
            </p>
          </div>
          <div style="display:flex; gap:8px;">
            <button class="btn btn-secondary btn-sm" onclick="MechPlanner.filterGantt('all')">All</button>
            <button class="btn btn-secondary btn-sm" onclick="MechPlanner.filterGantt('Completed')">Completed</button>
            <button class="btn btn-secondary btn-sm" onclick="MechPlanner.filterGantt('In Progress')">In Progress</button>
            <button class="btn btn-secondary btn-sm" onclick="MechPlanner.filterGantt('Planned')">Planned</button>
          </div>
        </div>

        <div class="gantt-header-row">
          <div>Phase & Deliverables</div>
          <div>Execution Schedule (Weeks 1 - ${planning.durationWeeks})</div>
          <div>Milestone Target</div>
          <div>Responsible Role</div>
        </div>
        <div class="gantt-rows-list" id="ganttRowsList">
    `;

    planning.phases.forEach(phase => {
      const isCompleted = phase.status === 'Completed';
      const isInProgress = phase.status === 'In Progress';
      const barClass = isCompleted ? 'gantt-bar-completed' : (isInProgress ? 'gantt-bar-progress' : 'gantt-bar-planned');
      const widthPct = phase.completionPercent || (isCompleted ? 100 : (isInProgress ? 65 : 20));

      html += `
        <div class="gantt-item-row" data-status="${phase.status}">
          <div class="gantt-task-meta">
            <h4>Phase ${phase.number}: ${phase.title}</h4>
            <p>Duration: ${phase.weeks} | Status: <span style="color:${isCompleted ? '#34d399' : (isInProgress ? '#00f0ff' : '#94a3b8')}; font-weight:700;">${phase.status}</span></p>
          </div>
          <div>
            <div class="gantt-bar-wrap">
              <div class="gantt-bar-fill ${barClass}" style="width: ${widthPct}%;">
                ${widthPct}% ${isCompleted ? '✓' : ''}
              </div>
            </div>
            <div style="display:flex; justify-content:space-between; font-size:0.7rem; color:var(--text-dim); margin-top:4px;">
              <span>W1</span>
              <span>W4</span>
              <span>W8</span>
              <span>W12</span>
              ${planning.durationWeeks > 12 ? `<span>W${planning.durationWeeks}</span>` : ''}
            </div>
          </div>
          <div style="font-size:0.8rem; color:var(--accent-amber); font-weight:600;">
            🚩 ${phase.milestone}
          </div>
          <div style="font-size:0.8rem; color:var(--text-main); display:flex; align-items:center; gap:6px;">
            <span>👤</span> ${phase.leadRole || 'Mechanical Engineer'}
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;

    return html;
  },

  filterGantt(status) {
    const rows = document.querySelectorAll('.gantt-item-row');
    rows.forEach(r => {
      if (status === 'all' || r.getAttribute('data-status') === status) {
        r.style.display = 'grid';
      } else {
        r.style.display = 'none';
      }
    });
  },

  // 2. Render Work Breakdown Structure (WBS)
  renderWBS(project) {
    const planning = project.planning;
    if (!planning || !planning.wbs) return '<p class="text-muted">No WBS data available.</p>';

    let html = `
      <div class="wbs-container">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:18px;">
          <h3 style="font-size:1.15rem; color:var(--accent-cyan); display:flex; align-items:center; gap:8px;">
            <span>🌳</span> Work Breakdown Structure (WBS Level 1 to 3)
          </h3>
          <span style="font-size:0.8rem; color:var(--text-dim);">Click nodes to expand/collapse subtasks</span>
        </div>
        <div class="wbs-tree">
    `;

    planning.wbs.forEach((node, idx) => {
      html += `
        <div class="wbs-node">
          <div class="wbs-node-header" onclick="MechPlanner.toggleWBS(${idx})">
            <div style="display:flex; align-items:center; gap:12px;">
              <span style="background:var(--accent-cyan-dim); color:var(--accent-cyan); font-weight:800; font-size:0.8rem; padding:2px 8px; border-radius:4px;">
                ${node.id}
              </span>
              <strong style="color:var(--text-main); font-size:0.95rem;">${node.name}</strong>
            </div>
            <div style="display:flex; align-items:center; gap:16px;">
              <span style="font-size:0.75rem; color:var(--text-dim);">👤 ${node.owner}</span>
              <span style="font-size:0.75rem; color:var(--accent-amber); font-weight:600;">⏱️ ${node.duration}</span>
              <span id="wbs-arrow-${idx}" style="font-size:0.8rem; color:var(--text-dim); transition:transform 0.2s;">▼</span>
            </div>
          </div>
          <div class="wbs-subtask-list" id="wbs-subtasks-${idx}">
      `;

      if (node.subtasks && node.subtasks.length) {
        node.subtasks.forEach(st => {
          const isDone = st.status === 'Done';
          html += `
            <div class="wbs-subtask-item">
              <div style="display:flex; align-items:center; gap:10px;">
                <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-dim);">${st.id}</span>
                <span>${st.name}</span>
              </div>
              <div style="display:flex; align-items:center; gap:12px;">
                <span style="font-size:0.75rem; color:var(--text-dim);">${st.estHours} hrs</span>
                <span style="font-size:0.7rem; font-weight:700; padding:2px 6px; border-radius:4px; background:${isDone ? 'rgba(16,185,129,0.2)' : 'rgba(0,240,255,0.15)'}; color:${isDone ? '#34d399' : '#00f0ff'};">
                  ${st.status}
                </span>
              </div>
            </div>
          `;
        });
      }

      html += `
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;

    return html;
  },

  toggleWBS(idx) {
    const el = document.getElementById(`wbs-subtasks-${idx}`);
    const arrow = document.getElementById(`wbs-arrow-${idx}`);
    if (el) {
      if (el.style.display === 'none') {
        el.style.display = 'flex';
        if (arrow) arrow.style.transform = 'rotate(0deg)';
      } else {
        el.style.display = 'none';
        if (arrow) arrow.style.transform = 'rotate(-90deg)';
      }
    }
  },

  // 3. Render Failure Mode & Effects Analysis (FMEA)
  renderFMEA(project) {
    const planning = project.planning;
    if (!planning || !planning.fmea) return '<p class="text-muted">No FMEA data available.</p>';

    let html = `
      <div class="fmea-container">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
          <div>
            <h3 style="font-size:1.15rem; color:var(--accent-cyan); display:flex; align-items:center; gap:8px;">
              <span>⚠️</span> Design FMEA & Risk Mitigation Matrix
            </h3>
            <p style="font-size:0.8rem; color:var(--text-dim); margin-top:2px;">
              RPN = Severity (1-10) × Occurrence (1-10) × Detection (1-10) | Red indicates RPN &gt; 80
            </p>
          </div>
        </div>

        <div class="data-table-wrap">
          <table class="mech-table">
            <thead>
              <tr>
                <th>Subsystem / Part</th>
                <th>Potential Failure Mode</th>
                <th>Potential Effect</th>
                <th>Root Cause</th>
                <th style="text-align:center;">S</th>
                <th style="text-align:center;">O</th>
                <th style="text-align:center;">D</th>
                <th style="text-align:center;">RPN</th>
                <th>Engineering Mitigation Action</th>
                <th style="text-align:center;">Post RPN</th>
              </tr>
            </thead>
            <tbody>
    `;

    planning.fmea.forEach(row => {
      const rpn = row.rpn || (row.severity * row.occurrence * row.detection);
      const rpnClass = rpn >= 80 ? 'rpn-high' : (rpn >= 45 ? 'rpn-med' : 'rpn-low');
      const postClass = (row.postActionRPN || 20) <= 30 ? 'rpn-low' : 'rpn-med';

      html += `
        <tr>
          <td><strong style="color:var(--accent-cyan);">${row.subsystem}</strong></td>
          <td style="color:#fca5a5;">${row.failureMode}</td>
          <td style="font-size:0.8rem; color:var(--text-muted);">${row.effect}</td>
          <td style="font-size:0.8rem; color:var(--text-dim);">${row.cause}</td>
          <td style="text-align:center; font-weight:700;">${row.severity}</td>
          <td style="text-align:center; font-weight:700;">${row.occurrence}</td>
          <td style="text-align:center; font-weight:700;">${row.detection}</td>
          <td style="text-align:center;"><span class="rpn-badge ${rpnClass}">${rpn}</span></td>
          <td style="font-size:0.8rem; color:#86efac;">${row.action}</td>
          <td style="text-align:center;"><span class="rpn-badge ${postClass}">${row.postActionRPN || Math.round(rpn / 3)}</span></td>
        </tr>
      `;
    });

    html += `
            </tbody>
          </table>
        </div>
      </div>
    `;

    return html;
  },

  // 4. Render Team RACI Matrix
  renderRACI(project) {
    const planning = project.planning;
    const raci = (planning && planning.raciMatrix) || [];
    if (!raci.length) return '<p class="text-muted">No RACI data available.</p>';

    let html = `
      <div class="raci-container">
        <div style="margin-bottom:16px;">
          <h3 style="font-size:1.15rem; color:var(--accent-cyan); display:flex; align-items:center; gap:8px;">
            <span>👥</span> Engineering Team RACI Responsibility Matrix
          </h3>
          <p style="font-size:0.8rem; color:var(--text-dim); margin-top:2px;">
            <strong style="color:#38bdf8;">R</strong> = Responsible, 
            <strong style="color:#fbbf24;">A</strong> = Accountable, 
            <strong style="color:#a78bfa;">C</strong> = Consulted, 
            <strong style="color:#94a3b8;">I</strong> = Informed
          </p>
        </div>

        <div class="data-table-wrap">
          <table class="mech-table">
            <thead>
              <tr>
                <th>Lifecycle Engineering Activity</th>
                <th style="text-align:center;">Lead Mechanical</th>
                <th style="text-align:center;">Mechatronics / Embedded</th>
                <th style="text-align:center;">FEA / Simulation</th>
                <th style="text-align:center;">Machinist / Metrologist</th>
              </tr>
            </thead>
            <tbody>
    `;

    raci.forEach(row => {
      const getBadge = (val) => {
        if (!val) return '-';
        if (val.includes('A') || val.includes('R')) {
          return `<span style="display:inline-block; padding:2px 8px; border-radius:4px; font-weight:800; background:rgba(56,189,248,0.2); color:#38bdf8; border:1px solid rgba(56,189,248,0.4);">${val}</span>`;
        }
        if (val === 'C') {
          return `<span style="display:inline-block; padding:2px 8px; border-radius:4px; font-weight:800; background:rgba(167,139,250,0.2); color:#a78bfa;">C</span>`;
        }
        return `<span style="display:inline-block; padding:2px 8px; border-radius:4px; font-weight:800; background:rgba(148,163,184,0.1); color:#94a3b8;">I</span>`;
      };

      html += `
        <tr>
          <td><strong>${row.activity}</strong></td>
          <td style="text-align:center;">${getBadge(row.leadMech)}</td>
          <td style="text-align:center;">${getBadge(row.embedded)}</td>
          <td style="text-align:center;">${getBadge(row.feaAnalyst)}</td>
          <td style="text-align:center;">${getBadge(row.machinist)}</td>
        </tr>
      `;
    });

    html += `
            </tbody>
          </table>
        </div>
      </div>
    `;

    return html;
  },

  // 5. Render Budget & Variance Analysis
  renderBudget(project, currency = 'INR') {
    const planning = project.planning;
    const b = (planning && planning.budgetAnalysis) || {};
    const cost = project.costBreakdown || {};

    const isINR = currency === 'INR';
    const sym = isINR ? '₹' : '$';
    const rate = isINR ? 1 : 1 / 83;

    const planned = isINR ? (b.budgetPlannedINR || project.estimatedCost.inr) : (b.budgetPlannedUSD || project.estimatedCost.usd);
    const actual = isINR ? (b.budgetActualINR || Math.round(planned * 0.96)) : (b.budgetActualUSD || Math.round(planned * 0.96));
    const variance = actual - planned;
    const varPct = ((variance / planned) * 100).toFixed(1);

    return `
      <div class="budget-container">
        <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:16px; margin-bottom:24px;">
          <div style="background:var(--bg-tertiary); padding:18px; border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
            <div style="font-size:0.75rem; text-transform:uppercase; color:var(--text-dim);">Planned Budget</div>
            <div style="font-size:1.5rem; font-weight:800; color:var(--text-main); font-family:var(--font-heading);">${sym} ${planned.toLocaleString()}</div>
          </div>
          <div style="background:var(--bg-tertiary); padding:18px; border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
            <div style="font-size:0.75rem; text-transform:uppercase; color:var(--text-dim);">Actual Sourced Total</div>
            <div style="font-size:1.5rem; font-weight:800; color:var(--accent-emerald); font-family:var(--font-heading);">${sym} ${actual.toLocaleString()}</div>
          </div>
          <div style="background:var(--bg-tertiary); padding:18px; border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
            <div style="font-size:0.75rem; text-transform:uppercase; color:var(--text-dim);">Budget Variance</div>
            <div style="font-size:1.5rem; font-weight:800; color:${variance <= 0 ? '#34d399' : '#f43f5e'}; font-family:var(--font-heading);">
              ${variance <= 0 ? '-' : '+'}${sym} ${Math.abs(variance).toLocaleString()} (${varPct}%)
            </div>
          </div>
          <div style="background:var(--bg-tertiary); padding:18px; border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
            <div style="font-size:0.75rem; text-transform:uppercase; color:var(--text-dim);">Contingency Reserve</div>
            <div style="font-size:1.5rem; font-weight:800; color:var(--accent-amber); font-family:var(--font-heading);">${b.contingencyReserve || '10%'}</div>
          </div>
        </div>

        <div style="background:var(--bg-card); padding:20px; border-radius:var(--radius-md); border:1px solid var(--border-subtle); margin-bottom:20px;">
          <h4 style="font-size:1rem; color:var(--accent-cyan); margin-bottom:12px;">Subsystem Expenditure Allocation</h4>
          <div style="display:grid; grid-template-columns: repeat(4, 1fr); gap:14px;">
            <div style="background:rgba(0,0,0,0.2); padding:12px; border-radius:6px;">
              <div style="font-size:0.75rem; color:var(--text-dim);">Mechanical Hardware</div>
              <div style="font-weight:700; color:var(--text-main); font-size:1.1rem;">${sym} ${Math.round((cost.mechanicalHardware || 5000) * rate).toLocaleString()}</div>
            </div>
            <div style="background:rgba(0,0,0,0.2); padding:12px; border-radius:6px;">
              <div style="font-size:0.75rem; color:var(--text-dim);">Electronics & Sensors</div>
              <div style="font-weight:700; color:var(--text-main); font-size:1.1rem;">${sym} ${Math.round((cost.electronicsAndSensors || 3500) * rate).toLocaleString()}</div>
            </div>
            <div style="background:rgba(0,0,0,0.2); padding:12px; border-radius:6px;">
              <div style="font-size:0.75rem; color:var(--text-dim);">Raw Materials (Alloy/Plate)</div>
              <div style="font-weight:700; color:var(--text-main); font-size:1.1rem;">${sym} ${Math.round((cost.rawMaterials || 4000) * rate).toLocaleString()}</div>
            </div>
            <div style="background:rgba(0,0,0,0.2); padding:12px; border-radius:6px;">
              <div style="font-size:0.75rem; color:var(--text-dim);">Machining & CNC Services</div>
              <div style="font-weight:700; color:var(--text-main); font-size:1.1rem;">${sym} ${Math.round((cost.machiningAndFabrication || 4500) * rate).toLocaleString()}</div>
            </div>
          </div>
          <div style="margin-top:16px; padding:12px; background:rgba(16,185,129,0.1); border-left:3px solid var(--accent-emerald); border-radius:4px; font-size:0.85rem; color:#6ee7b7;">
            💡 <strong>Cost Optimization Strategy:</strong> ${b.savingsHighlights || 'In-house machining and direct wholesale bought-out sourcing achieved significant budget savings.'}
          </div>
        </div>
      </div>
    `;
  },

  // 6. Render Manufacturing Routing Sheet
  renderRouting(project) {
    const planning = project.planning;
    const routing = (planning && planning.manufacturingRouting) || [];
    if (!routing.length) return '<p class="text-muted">No manufacturing routing sheet available.</p>';

    let html = `
      <div class="routing-container">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
          <div>
            <h3 style="font-size:1.15rem; color:var(--accent-cyan); display:flex; align-items:center; gap:8px;">
              <span>⚙️</span> Precision Manufacturing & CNC Operations Routing Sheet
            </h3>
            <p style="font-size:0.8rem; color:var(--text-dim); margin-top:2px;">
              Standard Machining Sequence, Tooling, Feeds/Speeds, and Quality Control Specifications
            </p>
          </div>
        </div>

        <div class="data-table-wrap">
          <table class="mech-table">
            <thead>
              <tr>
                <th style="text-align:center;">Op #</th>
                <th>Component / Subassembly</th>
                <th>Machine Tool / Process</th>
                <th>Process Operations Description</th>
                <th>Cutting Tool / Setup</th>
                <th>Speeds, Feeds & Cut Parameters</th>
                <th>Tolerance Specification</th>
                <th>Quality Control & Metrology</th>
              </tr>
            </thead>
            <tbody>
    `;

    routing.forEach(r => {
      html += `
        <tr>
          <td style="text-align:center; font-family:var(--font-mono); font-weight:800; color:var(--accent-amber);">${r.opNo}</td>
          <td><strong style="color:var(--text-main);">${r.part}</strong></td>
          <td style="color:var(--accent-cyan); font-weight:600;">${r.machine}</td>
          <td style="font-size:0.8rem; color:var(--text-muted);">${r.operation}</td>
          <td style="font-size:0.8rem; color:var(--text-dim);">${r.tooling || 'Carbide standard'}</td>
          <td style="font-size:0.8rem; font-family:var(--font-mono); color:#93c5fd;">${r.parameters || '-'}</td>
          <td style="font-size:0.8rem; font-weight:700; color:#fde047;">${r.tolerance || '±0.05 mm'}</td>
          <td style="font-size:0.8rem; color:#86efac;">${r.qcCheck || 'Vernier inspection'}</td>
        </tr>
      `;
    });

    html += `
            </tbody>
          </table>
        </div>
      </div>
    `;

    return html;
  },

  // 7. Render Design Verification Testing (DVT) Protocol
  renderDVT(project) {
    const planning = project.planning;
    const dvt = (planning && planning.dvtTesting) || [];
    if (!dvt.length) return '<p class="text-muted">No DVT protocol available.</p>';

    let html = `
      <div class="dvt-container">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
          <div>
            <h3 style="font-size:1.15rem; color:var(--accent-cyan); display:flex; align-items:center; gap:8px;">
              <span>🔬</span> Design Verification Testing (DVT) Protocol & Results
            </h3>
            <p style="font-size:0.8rem; color:var(--text-dim); margin-top:2px;">
              ISO & ASTM Engineering Test Standards, Instrumentation, and Pass/Fail Criteria
            </p>
          </div>
        </div>

        <div class="data-table-wrap">
          <table class="mech-table">
            <thead>
              <tr>
                <th>Test ID</th>
                <th>Test Benchmark Title</th>
                <th>Governing Standard</th>
                <th>Instrumentation Used</th>
                <th>Testing Procedure Overview</th>
                <th>Acceptance Criteria</th>
                <th>Empirical Observed Value</th>
                <th style="text-align:center;">Verdict</th>
              </tr>
            </thead>
            <tbody>
    `;

    dvt.forEach(t => {
      const isPassed = t.status === 'Passed';
      html += `
        <tr>
          <td><strong style="color:var(--accent-amber); font-family:var(--font-mono);">${t.id}</strong></td>
          <td><strong style="color:var(--text-main);">${t.title}</strong></td>
          <td style="font-size:0.8rem; color:var(--accent-cyan);">${t.standard}</td>
          <td style="font-size:0.8rem; color:var(--text-muted);">${t.equipment}</td>
          <td style="font-size:0.8rem; color:var(--text-dim);">${t.procedure}</td>
          <td style="font-size:0.8rem; color:#fde047;">${t.acceptanceCriteria}</td>
          <td style="font-size:0.85rem; font-weight:700; color:#38bdf8;">${t.observedResult}</td>
          <td style="text-align:center;">
            <span style="display:inline-block; padding:3px 10px; border-radius:999px; font-size:0.75rem; font-weight:800; background:${isPassed ? 'rgba(16,185,129,0.2)' : 'rgba(245,158,11,0.2)'}; color:${isPassed ? '#34d399' : '#fbbf24'}; border:1px solid ${isPassed ? 'rgba(16,185,129,0.4)' : 'rgba(245,158,11,0.4)'};">
              ${t.status}
            </span>
          </td>
        </tr>
      `;
    });

    html += `
            </tbody>
          </table>
        </div>
      </div>
    `;

    return html;
  },

  // 8. Generate Academic Thesis Report (Printable & Formal)
  generateThesisReport(project) {
    const chapters = project.reportChapters || [];
    const planning = project.planning || {};

    let chaptersHtml = '';
    chapters.forEach(ch => {
      chaptersHtml += `
        <div class="report-chapter-block">
          <h3>Chapter ${ch.chapterNumber}: ${ch.title}</h3>
          <p>${ch.summary}</p>
        </div>
      `;
    });

    return `
      <div style="margin-bottom:20px; display:flex; justify-content:flex-end;">
        <button class="btn btn-primary" onclick="window.print()">
          <span>🖨️</span> Print / Save Complete Dossier (PDF)
        </button>
      </div>

      <div class="report-paper">
        <div class="report-header-formal">
          <h1>TECHNICAL PROJECT REPORT & ENGINEERING DOSSIER</h1>
          <h2 style="font-size:1.3rem; color:#2563eb; margin: 12px 0;">${project.title}</h2>
          <p style="font-size:0.9rem; color:#4b5563;">
            Academic Level: <strong>${project.level}</strong> | Department of Mechanical Engineering<br>
            Project Duration: <strong>${project.durationWeeks} Weeks</strong> | Recommended Team: <strong>${project.teamSize}</strong>
          </p>
        </div>

        <div class="report-chapter-block">
          <h3>Abstract & Executive Summary</h3>
          <p>${project.abstract}</p>
        </div>

        <div class="report-chapter-block">
          <h3>Problem Statement & Industrial Relevance</h3>
          <p>${project.problemStatement}</p>
        </div>

        <div class="report-chapter-block">
          <h3>Key Engineering Objectives</h3>
          <ul>
            ${(project.objectives || []).map(obj => `<li>${obj}</li>`).join('')}
          </ul>
        </div>

        <div class="report-chapter-block">
          <h3>Working Principle & Thermodynamic / Kinematic Foundations</h3>
          <p>${project.workingPrinciple ? project.workingPrinciple.summary : 'Standard engineering kinematics.'}</p>
          <p><strong>Energy Conversion Pathway:</strong> ${project.workingPrinciple ? project.workingPrinciple.energyTransfer : 'Kinematic transformation.'}</p>
        </div>

        <div class="report-chapter-block">
          <h3>Project Execution Schedule & Milestone Audit</h3>
          <p>This project was planned across a ${planning.durationWeeks || 12}-week structured engineering lifecycle:</p>
          <ul>
            ${(planning.phases || []).map(ph => `<li><strong>${ph.weeks} (${ph.title}):</strong> ${ph.milestone} [Status: ${ph.status}]</li>`).join('')}
          </ul>
        </div>

        <div class="report-chapter-block">
          <h3>Bill of Materials (BOM) Financial Summary</h3>
          <p>Total Estimated Budget: <strong>₹${project.estimatedCost.inr.toLocaleString()} ($${project.estimatedCost.usd})</strong> across ${project.billOfMaterials ? project.billOfMaterials.length : 0} detailed line items.</p>
        </div>

        ${chaptersHtml}

        <div class="report-chapter-block">
          <h3>Academic & Technical References</h3>
          <ol>
            ${(project.references || []).map(ref => `<li>${ref}</li>`).join('')}
          </ol>
        </div>

        <div style="margin-top:48px; display:flex; justify-content:space-between; border-top:1px solid #9ca3af; padding-top:20px; font-size:0.85rem;">
          <div>
            <strong>Project Lead Signature:</strong><br><br>
            _______________________________
          </div>
          <div>
            <strong>Faculty Advisor / Guide Signature:</strong><br><br>
            _______________________________
          </div>
          <div>
            <strong>Date of Submission:</strong><br><br>
            September 2026
          </div>
        </div>
      </div>
    `;
  }
};

window.MechPlanner = MechPlanner;
