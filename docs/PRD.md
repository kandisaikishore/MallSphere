# MallSphere Product Requirements

## Purpose
MallSphere is a browser-based prototype for shopping-mall operations. It provides a single workspace for illustrative tenant, unit, invoice, maintenance, event, vendor, incident, footfall and parking workflows.

## Users
- Mall administrator: reviews operational status and maintains demo records.
- Leasing team: reviews tenant assignments and unit availability.
- Finance team: reviews sample invoices and receivables.
- Facilities and security teams: track work orders and incidents.

## Core requirements
1. Provide navigation to all workspace sections on desktop and mobile.
2. Show overview KPIs derived from current browser-stored demo data.
3. Support create, edit, delete, search, status filtering and CSV export for record-based sections.
4. Persist demo changes in browser localStorage and allow reset to seeded examples.
5. Escape user-provided strings before inserting them into HTML.
6. Identify footfall, parking and finance figures as illustrative and not connected to live systems.

## Out of scope
Authentication, multi-user synchronization, live payments, backend persistence, tenant ERP integration, live sensors, parking gates and government verification are not implemented. Do not use this prototype for production financial or operational decisions.

## Acceptance criteria
- Required pages load without JavaScript syntax errors.
- Navigation and mobile menu work.
- Record forms validate non-negative numeric values and persist successful changes.
- Delete and reset actions require confirmation.
- CSV output quotes cells and escapes embedded double quotes.
- CI passes syntax, static contract and regression checks.