# Issue #8 Traceability — Default Error Boundary

This document provides traceability for issue #8:
`feat(error-boundary): add default error boundary around routed content`.

## Status

Already implemented on branch `tp` before this issue execution window.

## Evidence

- Reusable error boundary component exists in:
  - `src/components/DefaultErrorBoundary/index.tsx`
- Component uses `react-error-boundary` with translated fallback message:
  - `i18nMap.error.defaultMessage`
- Routed page content is wrapped in the page template:
  - `src/pages/PageTemplate/index.tsx`
  - `<DefaultErrorBoundary key={route}><Outlet /></DefaultErrorBoundary>`
- Route-based key reset is implemented through `useLocation()` and `location.pathname`

## Scope note

No runtime code change was required for this issue.
This PR is intentionally minimal and for project traceability only.
