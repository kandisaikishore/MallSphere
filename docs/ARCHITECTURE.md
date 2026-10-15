# MallSphere Architecture

## Current implementation
MallSphere is a static HTML/CSS/JavaScript application. `index.html` defines the shell and navigation; `styles.css` provides responsive presentation; `app.js` owns sample records, rendering, browser persistence, forms and CSV export. There is no API server or database.

## Data flow
1. Seeded sample records initialize each collection.
2. On startup, the application attempts to merge saved `mallsphere-data` from localStorage with seeded defaults.
3. Navigation renders a page into `#pageContent`.
4. Form submission validates numeric fields, updates the in-memory collection, writes localStorage and re-renders.
5. CSV exports are generated in the browser and downloaded by the user.

## Safety and limitations
- All data is browser-local and device-specific; clearing browser storage can remove it.
- This prototype has no authentication or authorization and must not hold real tenant or payment information.
- Operational numbers for footfall and parking are fixed illustrative values, not sensor-derived data.
- User-provided display values should be escaped before insertion into HTML.

## Potential production evolution
A production implementation would require an authenticated API, relational database, role-based authorization, audit logs, input validation on the server, backups, monitoring, privacy controls and contract-tested integrations. Payment processing and physical access controls should be implemented only through appropriately secured providers.