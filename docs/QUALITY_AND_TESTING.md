# Mall Operations Demo: QA and Data-Recovery Guide

MallSphere is a shopping-mall operations dashboard prototype using fictional Orion Square data and browser `localStorage`. The README states that it is not connected to a live database, payment gateway, tenant ERP, access-control system, footfall sensors, parking equipment, or government services.

## Run locally

Follow the repository's existing instructions and open the static application in a modern browser. Use the configured static deployment process only after confirming it in repository settings and workflow runs.

## Workflow validation

For implemented modules, test:
- Tenant records and lease/unit assignments
- Rent-invoice totals and date boundaries
- Facilities work-order state transitions
- Event, vendor, parking, security-incident, and report interactions
- Search/filter behavior, CSV export, and repeated submissions
- Refresh behavior, malformed stored data, and browser storage failure

## Demo data and financial boundary

All fictional demo values must remain clearly labeled and must not be used for financial or operational decisions. Do not imply that invoices are sent, payments are collected, parking equipment is controlled, or security incidents reach real responders unless a real integration is implemented and verified.

## Persistence and recovery

Because browser-local storage can be cleared or become unavailable, test backup/export and restore paths where implemented. Validate imported data before replacing existing records. If saved state is invalid, provide a recoverable message instead of crashing or silently discarding data.

## Accessibility and security

Test keyboard navigation, visible focus, labels, responsive tables/cards, and readable validation messages. Avoid storing credentials or sensitive incident details in demo storage or logs.

## Pull-request checklist

- [ ] Add regression tests for the changed workflow.
- [ ] Verify export/import and malformed-state behavior where supported.
- [ ] Run available build/test checks.
- [ ] Keep fictional/demo and integration boundaries explicit.
- [ ] Report checks that could not be performed.
