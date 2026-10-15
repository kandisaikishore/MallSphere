# MallSphere — Shopping Mall Management System

MallSphere is a responsive mall-operations dashboard prototype for managing tenant accounts, leases and units, rent invoices, facilities work orders, events, visitor estimates, parking, vendors, security incidents and operational reports. It is designed as a practical portfolio starter for a shopping-mall operator.

> **Demo / production boundary:** This build uses fictional Orion Square data and browser `localStorage`. It does not connect to a live database, payment gateway, tenant ERP, access-control system, footfall sensors, parking equipment, or government services. Demo values must not be used for financial or operational decisions.

## Features

- **Operations overview:** KPIs, revenue trend visualization, floor occupancy, tenant list, maintenance queue and events.
- **Tenant directory:** Create, edit, delete, search and export tenant records.
- **Leasing & units:** Track unit, floor, area, rent, tenant assignment and occupancy status.
- **Finance:** Invoice and receivable records with payment method, due date and status. No payment is collected.
- **Maintenance:** Work orders with location, priority, assignee and status.
- **Events & promotions:** Event schedule, venue, budget and status.
- **Footfall & parking:** Illustrative analytics and capacity views with explicit demo-data warnings.
- **Vendors and incidents:** Service partner directory and incident register.
- **Reports:** CSV exports for supported record tables.
- **Usability:** Responsive layout, global search, modal forms, destructive-action confirmation, status indicators, local persistence and keyboard shortcut `Ctrl/Cmd + K`.

## Run locally

No package manager or build step is required. Use any static HTTP server, or open `index.html` directly.

```bash
python -m http.server 8000
# open http://localhost:8000
```

## Repository layout

```text
MallSphere/
├── index.html
├── styles.css
├── app.js
├── docs/
│   ├── PRD.md
│   ├── ARCHITECTURE.md
│   ├── TEST_PLAN.md
│   └── RESEARCH.md
└── .github/workflows/
    ├── ci.yml
    └── pages.yml
```

## Requirements and scope

See [Product Requirements Document](docs/PRD.md), [Architecture](docs/ARCHITECTURE.md), [Test Plan](docs/TEST_PLAN.md), and [Research Notes](docs/RESEARCH.md). Domain workflows are a synthesized product scope based on common mall operations; linked references inform engineering practices, not a claim of compliance or certification.

## Tests and CI

GitHub Actions runs JavaScript syntax checks, static regression checks and Playwright browser tests for navigation, tenant CRUD, persistence, search/filtering, mobile navigation and CSV download on pushes, pull requests, daily schedule and manual dispatch. Browser tests improve confidence but do not replace accessibility, security or business-acceptance testing.

## Deploy to GitHub Pages

1. In **Settings → Pages**, choose **GitHub Actions** as the build and deployment source.
2. The `pages.yml` workflow deploys the static app when changes reach `main`.
3. After the workflow succeeds, the expected URL is `https://kandisaikishore.github.io/MallSphere/`.

## Research references

- [OWASP Application Security Verification Standard](https://owasp.org/www-project-application-security-verification-standard/)
- [React Learn](https://react.dev/learn)
- [Vite Guide](https://vite.dev/guide/)
- [Tailwind CSS documentation](https://tailwindcss.com/docs)
- [GitHub Actions documentation](https://docs.github.com/actions)

## License

See [LICENSE](LICENSE).
