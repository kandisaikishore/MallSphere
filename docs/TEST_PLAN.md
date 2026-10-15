# MallSphere Test Plan

## Automated checks
- `node --check app.js` verifies JavaScript syntax.
- `npm run test:smoke` checks required shell elements, navigation pages, core behavior markers, documentation and responsive styling.
- `npm run test:e2e` runs Playwright/Chromium tests for navigation, tenant create/edit/delete, persistence, search, status filtering, mobile menu and CSV download.
- GitHub Actions runs syntax, smoke and browser tests on pushes, pull requests, manual dispatch and daily schedule.

## Regression checklist
- [ ] Open Overview and each navigation section.
- [ ] Add a record; ensure it appears in the list.
- [ ] Edit a record and verify values persist after reload.
- [ ] Cancel a delete and confirm the record remains; confirm a delete and verify removal.
- [ ] Search by a visible field and filter by status.
- [ ] Export CSV with commas, quotes and Unicode characters; inspect quoting.
- [ ] Reset local data and verify the seed data returns.
- [ ] Test mobile menu open/close at narrow viewport widths.
- [ ] Check keyboard navigation, visible focus and reduced-motion preference.
- [ ] Verify no live-data claims appear for footfall, parking or payment workflows.

## Known limits
The CI suite is static/smoke-level. It does not yet run browser automation, accessibility audits, security scans, multi-browser tests or integration tests because the app has no backend or third-party service integrations.