(() => {
  const pages = {
    overview: { title: 'Overview', body: '<p class="compatibility-notice">Welcome to MallSphere. This demo workspace uses illustrative sample data.</p><div class="dashboard-grid"><section class="dashboard-card"><h2>Tenant operations</h2><p>Manage tenant records, leasing and unit occupancy.</p></section><section class="dashboard-card"><h2>Finance</h2><p>Review invoice and receivable records. No payments are collected.</p></section><section class="dashboard-card"><h2>Facilities</h2><p>Track maintenance work orders and vendor activity.</p></section></div>' },
    tenants: { title: 'Tenants', body: '<section class="dashboard-card"><h2>Tenant directory</h2><p>Tenant records are not available in this initial compatibility-safe build.</p></section>' },
    leasing: { title: 'Leasing & Units', body: '<section class="dashboard-card"><h2>Leasing & Units</h2><p>Unit and lease management view.</p></section>' },
    finance: { title: 'Finance', body: '<section class="dashboard-card"><h2>Finance</h2><p>Illustrative invoice and receivable view. No payments are processed.</p></section>' },
    maintenance: { title: 'Maintenance', body: '<section class="dashboard-card"><h2>Maintenance</h2><p>Maintenance work-order view.</p></section>' },
    events: { title: 'Events & Promotions', body: '<section class="dashboard-card"><h2>Events & Promotions</h2><p>Event scheduling view.</p></section>' },
    footfall: { title: 'Footfall', body: '<section class="dashboard-card"><h2>Footfall analytics</h2><p>Illustrative estimates only; no live sensors are connected.</p></section>' },
    parking: { title: 'Parking', body: '<section class="dashboard-card"><h2>Parking</h2><p>Illustrative parking-capacity view; no live equipment is connected.</p></section>' },
    vendors: { title: 'Vendors', body: '<section class="dashboard-card"><h2>Vendors</h2><p>Vendor directory view.</p></section>' },
    security: { title: 'Security & Incidents', body: '<section class="dashboard-card"><h2>Security & Incidents</h2><p>Incident register view.</p></section>' },
    reports: { title: 'Reports', body: '<section class="dashboard-card"><h2>Reports</h2><p>Reporting view.</p></section>' },
    settings: { title: 'Settings', body: '<section class="dashboard-card"><h2>Settings</h2><p>Demo workspace settings.</p></section>' }
  };
  const content = document.getElementById('pageContent');
  const breadcrumb = document.getElementById('breadcrumbPage');
  const nav = document.getElementById('nav');
  if (!content || !nav) return;
  const render = (key) => {
    const page = pages[key] || pages.overview;
    if (breadcrumb) breadcrumb.textContent = page.title;
    content.innerHTML = '<header class="page-heading"><p class="eyebrow">ORION SQUARE · DEMO</p><h1>' + page.title + '</h1><p>Shopping mall operations workspace</p></header>' + page.body;
    nav.querySelectorAll('[data-page]').forEach(button => {
      const active = button.dataset.page === key;
      button.classList.toggle('active', active);
      if (active) button.setAttribute('aria-current', 'page'); else button.removeAttribute('aria-current');
    });
    content.focus({ preventScroll: true });
  };
  nav.addEventListener('click', event => {
    const button = event.target.closest('[data-page]');
    if (button) render(button.dataset.page);
  });
  const search = document.getElementById('globalSearch');
  if (search) search.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      const query = search.value.trim().toLowerCase();
      const match = Object.entries(pages).find(([, page]) => page.title.toLowerCase().includes(query));
      if (match) render(match[0]);
      else {
        const region = document.getElementById('toastRegion');
        if (region) region.textContent = query ? 'No page matched “' + search.value.trim() + '”.' : 'Enter a page name to search.';
      }
    }
  });
  const mobileMenu = document.getElementById('mobileMenu');
  const sidebar = document.getElementById('sidebar');
  if (mobileMenu && sidebar) mobileMenu.addEventListener('click', () => sidebar.classList.toggle('sidebar-open'));
  ['helpBtn', 'helpTop'].forEach(id => {
    const button = document.getElementById(id);
    if (button) button.addEventListener('click', () => {
      const region = document.getElementById('toastRegion');
      if (region) region.textContent = 'Use the navigation to explore the MallSphere demo. Data is illustrative only.';
    });
  });
  render(location.hash.slice(1) || 'overview');
})();