# Accessibility Baseline & Repository Architecture Audit

This repository contains the deliverables for Task 2, focusing on web accessibility and repository architecture.

## Deliverables Included

1.  **Accessibility Audit:** An audit of a sample public service portal identifying 5 accessibility issues based on WCAG standards.
    *   [Audit Worksheet (CSV)](./accessibility-audit-report.csv)
    *   [Detailed Audit & Architecture Report](./docs/audit_report.md)
2.  **Monorepo Skeleton:** A maintainable full-stack project foundation using npm workspaces.
    *   `client/`: Frontend application skeleton
    *   `server/`: Backend service skeleton
    *   `docs/`: Documentation and architecture trees
    *   `tests/`: End-to-end and integration tests

## Project Structure

This project is set up as a monorepo.

```bash
├── client/          # Frontend code
├── server/          # Backend code
├── docs/            # Audit reports and architecture documents
├── tests/           # Integration and E2E tests
├── package.json     # Root package.json managing workspaces
└── README.md        # This file
```

## Getting Started

To install dependencies across all workspaces:

```bash
npm install
```
