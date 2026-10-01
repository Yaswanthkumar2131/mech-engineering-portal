// ===================================================================
// MechNexus: Project Catalog, Filtering, Comparison & Matchmaker Wizard
// ===================================================================

const MechCatalog = {
  projects: [],
  categories: [],
  currentCategory: 'all',
  searchQuery: '',
  selectedLevels: new Set(),
  selectedDifficulties: new Set(),
  maxBudgetINR: 50000,
  sortBy: 'featured',
  comparedProjectIds: new Set(),
  currentCurrency: 'INR',

  init() {
    this.projects = window.MECH_PROJECTS || [];
    this.categories = window.MECH_CATEGORIES || [];
    this.renderCategoryChips();
    this.renderProjects();
    this.setupListeners();
  },

  setCurrency(curr) {
    this.currentCurrency = curr;
    this.renderProjects();
    this.updateCompareBar();
  },

  renderCategoryChips() {
    const container = document.getElementById('domainChipsContainer');
    if (!container) return;

    let html = `
      <button class="domain-chip ${this.currentCategory === 'all' ? 'active' : ''}" onclick="MechCatalog.filterByCategory('all')">
        <span>🌐</span> All Disciplines
        <span class="chip-count">${this.projects.length}</span>
      </button>
    `;

    this.categories.forEach(cat => {
      const count = this.projects.filter(p => p.category === cat.name).length;
      const isActive = this.currentCategory === cat.slug;
      html += `
        <button class="domain-chip ${isActive ? 'active' : ''}" onclick="MechCatalog.filterByCategory('${cat.slug}')">
          <span>⚙️</span> ${cat.name}
          <span class="chip-count">${count}</span>
        </button>
      `;
    });

    container.innerHTML = html;
  },

  filterByCategory(slug) {
    this.currentCategory = slug;
    this.renderCategoryChips();
    this.renderProjects();
  },

  getFilteredProjects() {
    return this.projects.filter(p => {
      // Category filter
      if (this.currentCategory !== 'all' && p.categorySlug !== this.currentCategory) {
        return false;
      }

      // Search query
      if (this.searchQuery) {
        const q = this.searchQuery.toLowerCase();
        const matchTitle = p.title.toLowerCase().includes(q) || p.shortTitle.toLowerCase().includes(q);
        const matchTags = (p.tags || []).some(t => t.toLowerCase().includes(q));
        const matchAbstract = (p.abstract || '').toLowerCase().includes(q);
        const matchSoftware = (p.softwareStack && p.softwareStack.cad ? p.softwareStack.cad.join(' ') : '').toLowerCase().includes(q);
        if (!matchTitle && !matchTags && !matchAbstract && !matchSoftware) return false;
      }

      // Academic level
      if (this.selectedLevels.size > 0 && !this.selectedLevels.has(p.level)) {
        return false;
      }

      // Difficulty
      if (this.selectedDifficulties.size > 0 && !this.selectedDifficulties.has(p.difficulty)) {
        return false;
      }

      // Budget
      if (p.estimatedCost && p.estimatedCost.inr > this.maxBudgetINR) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (this.sortBy === 'featured') return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      if (this.sortBy === 'rating') return (b.rating || 4.5) - (a.rating || 4.5);
      if (this.sortBy === 'budget-asc') return a.estimatedCost.inr - b.estimatedCost.inr;
      if (this.sortBy === 'budget-desc') return b.estimatedCost.inr - a.estimatedCost.inr;
      if (this.sortBy === 'duration') return a.durationWeeks - b.durationWeeks;
      return 0;
    });
  },

  renderProjects() {
    const grid = document.getElementById('projectsGrid');
    const countEl = document.getElementById('projectCountDisplay');
    if (!grid) return;

    const filtered = this.getFilteredProjects();
    if (countEl) countEl.innerText = `${filtered.length} Projects Available`;

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 60px 20px; text-align: center; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-subtle);">
          <div style="font-size: 2.5rem; margin-bottom: 12px;">🔍</div>
          <h3 style="font-size: 1.25rem; margin-bottom: 8px;">No Projects Match Your Filter Criteria</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 20px;">Try adjusting your search keyword, category, or maximum budget slider.</p>
          <button class="btn btn-secondary btn-sm" onclick="MechCatalog.resetFilters()">Reset All Filters</button>
        </div>
      `;
      return;
    }

    const isINR = this.currentCurrency === 'INR';
    const sym = isINR ? '₹' : '$';

    let html = '';
    filtered.forEach(p => {
      const isCompared = this.comparedProjectIds.has(p.id);
      const costVal = isINR ? p.estimatedCost.inr.toLocaleString() : p.estimatedCost.usd.toLocaleString();

      html += `
        <div class="project-card" id="card-${p.id}">
          <div class="card-top-bar">
            <!-- Simulated Blueprint Canvas -->
            <div style="position:absolute; width:100%; height:100%; display:flex; align-items:center; justify-content:center; opacity:0.15; font-size:4rem; pointer-events:none;">
              ⚙️
            </div>
            
            <div class="card-badge-tag ${p.featured ? 'card-badge-featured' : ''}">
              ${p.badge || p.category}
            </div>

            <div class="card-badge-rating">
              <span>★</span> ${p.rating || 4.9}
            </div>

            <!-- Visual Type Tag -->
            <div style="position:absolute; bottom:10px; left:14px; z-index:2; background:rgba(0,0,0,0.7); backdrop-filter:blur(6px); padding:3px 8px; border-radius:4px; font-size:0.7rem; color:var(--accent-cyan); font-family:var(--font-mono);">
              3D Model: ${p.cadAndSpecs ? p.cadAndSpecs.visualType : 'Rig'}
            </div>
          </div>

          <div class="card-body">
            <div class="card-category">
              <span>⚡</span> ${p.category}
            </div>

            <h3 class="card-title" title="${p.title}">
              ${p.title}
            </h3>

            <p class="card-abstract">
              ${p.abstract}
            </p>

            <div class="card-meta-row">
              <span class="meta-chip">🎓 ${p.level}</span>
              <span class="meta-chip">⏱️ ${p.durationWeeks} Wks</span>
              <span class="meta-chip">📊 ${p.difficulty}</span>
              <span class="meta-chip">👥 ${p.teamSize}</span>
            </div>

            <div style="display:flex; flex-wrap:wrap; gap:4px; margin-bottom:18px;">
              ${(p.tags || []).slice(0, 4).map(t => `<span style="font-size:0.7rem; background:rgba(255,255,255,0.04); color:var(--text-dim); padding:2px 6px; border-radius:3px;">#${t}</span>`).join('')}
            </div>

            <div class="card-footer">
              <div class="card-cost-block">
                <span class="cost-label">Est. Prototype Cost</span>
                <span class="cost-value">${sym} ${costVal}</span>
              </div>

              <div class="card-action-btns">
                <button class="btn btn-outline btn-sm" onclick="MechCatalog.toggleCompare('${p.id}', event)" title="Compare with other projects">
                  ${isCompared ? '✓ Compared' : '+ Compare'}
                </button>
                <button class="btn btn-primary btn-sm" onclick="MechApp.openProjectModal('${p.id}')">
                  Open Dossier ➔
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    grid.innerHTML = html;
  },

  resetFilters() {
    this.currentCategory = 'all';
    this.searchQuery = '';
    this.selectedLevels.clear();
    this.selectedDifficulties.clear();
    this.maxBudgetINR = 50000;
    this.sortBy = 'featured';

    const searchInput = document.getElementById('catalogSearchInput');
    if (searchInput) searchInput.value = '';

    const budgetSlider = document.getElementById('budgetSlider');
    if (budgetSlider) budgetSlider.value = 50000;

    const checkboxes = document.querySelectorAll('.filter-sidebar input[type="checkbox"]');
    checkboxes.forEach(cb => cb.checked = false);

    this.renderCategoryChips();
    this.renderProjects();
  },

  toggleCompare(id, event) {
    if (event) event.stopPropagation();

    if (this.comparedProjectIds.has(id)) {
      this.comparedProjectIds.delete(id);
    } else {
      if (this.comparedProjectIds.size >= 3) {
        alert('You can compare a maximum of 3 projects simultaneously.');
        return;
      }
      this.comparedProjectIds.add(id);
    }

    this.renderProjects();
    this.updateCompareBar();
  },

  updateCompareBar() {
    const bar = document.getElementById('compareFloatingBar');
    const countEl = document.getElementById('compareCount');
    if (!bar) return;

    if (this.comparedProjectIds.size > 0) {
      bar.classList.add('active');
      if (countEl) countEl.innerText = `${this.comparedProjectIds.size} Project${this.comparedProjectIds.size > 1 ? 's' : ''} Selected`;
    } else {
      bar.classList.remove('active');
    }
  },

  openComparisonModal() {
    if (this.comparedProjectIds.size === 0) return;

    const selectedProjects = this.projects.filter(p => this.comparedProjectIds.has(p.id));
    const isINR = this.currentCurrency === 'INR';
    const sym = isINR ? '₹' : '$';

    let tableHtml = `
      <div class="data-table-wrap" style="max-height:75vh; overflow-y:auto;">
        <table class="mech-table" style="font-size:0.9rem;">
          <thead>
            <tr>
              <th style="min-width:200px;">Engineering Metric</th>
              ${selectedProjects.map(p => `<th style="color:var(--accent-cyan); font-size:0.95rem;">${p.shortTitle}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Discipline / Category</strong></td>
              ${selectedProjects.map(p => `<td><span class="badge">${p.category}</span></td>`).join('')}
            </tr>
            <tr>
              <td><strong>Academic Target Level</strong></td>
              ${selectedProjects.map(p => `<td>${p.level}</td>`).join('')}
            </tr>
            <tr>
              <td><strong>Prototype Budget</strong></td>
              ${selectedProjects.map(p => `<td style="color:var(--accent-emerald); font-weight:800;">${sym} ${isINR ? p.estimatedCost.inr.toLocaleString() : p.estimatedCost.usd.toLocaleString()}</td>`).join('')}
            </tr>
            <tr>
              <td><strong>Project Duration</strong></td>
              ${selectedProjects.map(p => `<td><strong>${p.durationWeeks} Weeks</strong> (${p.planning ? p.planning.phases.length : 6} Execution Phases)</td>`).join('')}
            </tr>
            <tr>
              <td><strong>Team Recommendation</strong></td>
              ${selectedProjects.map(p => `<td>${p.teamSize}</td>`).join('')}
            </tr>
            <tr>
              <td><strong>BOM Components Count</strong></td>
              ${selectedProjects.map(p => `<td>${p.billOfMaterials ? p.billOfMaterials.length : 0} Specified Parts</td>`).join('')}
            </tr>
            <tr>
              <td><strong>Recommended CAD Software</strong></td>
              ${selectedProjects.map(p => `<td>${p.cadAndSpecs ? p.cadAndSpecs.cadSoftwareRecommended.join(', ') : 'SolidWorks'}</td>`).join('')}
            </tr>
            <tr>
              <td><strong>CAE & Multi-Physics Tools</strong></td>
              ${selectedProjects.map(p => `<td>${p.softwareStack && p.softwareStack.caeSimulation ? p.softwareStack.caeSimulation.join(', ') : 'ANSYS'}</td>`).join('')}
            </tr>
            <tr>
              <td><strong>Primary Actuators / Motor</strong></td>
              ${selectedProjects.map(p => `<td>${p.electronicsAndSensors && p.electronicsAndSensors.actuators ? p.electronicsAndSensors.actuators.map(a => a.name).join(', ') : 'Mechanical drive'}</td>`).join('')}
            </tr>
            <tr>
              <td><strong>Key Kinematic Mechanism</strong></td>
              ${selectedProjects.map(p => `<td>${p.workingPrinciple ? p.workingPrinciple.energyTransfer : '-'}</td>`).join('')}
            </tr>
            <tr>
              <td><strong>Action</strong></td>
              ${selectedProjects.map(p => `<td><button class="btn btn-primary btn-sm" onclick="MechApp.openProjectModal('${p.id}')">View Dossier</button></td>`).join('')}
            </tr>
          </tbody>
        </table>
      </div>
    `;

    const modalBody = document.getElementById('comparisonModalBody');
    if (modalBody) {
      modalBody.innerHTML = tableHtml;
      const modal = document.getElementById('comparisonModalBackdrop');
      if (modal) modal.classList.add('open');
    }
  },

  setupListeners() {
    const searchInput = document.getElementById('catalogSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim();
        this.renderProjects();
      });
    }

    const sortSelect = document.getElementById('catalogSortSelect');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        this.sortBy = e.target.value;
        this.renderProjects();
      });
    }

    const budgetSlider = document.getElementById('budgetSlider');
    const budgetVal = document.getElementById('budgetSliderValue');
    if (budgetSlider && budgetVal) {
      budgetSlider.addEventListener('input', (e) => {
        this.maxBudgetINR = parseInt(e.target.value);
        budgetVal.innerText = `₹${this.maxBudgetINR.toLocaleString()}`;
        this.renderProjects();
      });
    }

    // Level checkboxes
    document.querySelectorAll('.filter-level-cb').forEach(cb => {
      cb.addEventListener('change', (e) => {
        if (e.target.checked) this.selectedLevels.add(e.target.value);
        else this.selectedLevels.delete(e.target.value);
        this.renderProjects();
      });
    });

    // Difficulty checkboxes
    document.querySelectorAll('.filter-diff-cb').forEach(cb => {
      cb.addEventListener('change', (e) => {
        if (e.target.checked) this.selectedDifficulties.add(e.target.value);
        else this.selectedDifficulties.delete(e.target.value);
        this.renderProjects();
      });
    });
  }
};

window.MechCatalog = MechCatalog;
