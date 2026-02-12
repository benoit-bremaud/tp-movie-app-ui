# Issue #2 Traceability — Routing Foundation

This document provides traceability for issue #2:
`feat(routing): add core pages and route definitions`.

## Status

Already implemented on branch `tp` before this issue execution window.

## Evidence

- Router configuration exists in `src/Router/index.tsx`
  - `/` → `Home`
  - `/movies` → `Movies`
  - `/movies/:movieId` → `Movie`
  - `*` → `NotFound`
- Required pages exist and are wired:
  - `src/pages/Home/index.tsx`
  - `src/pages/Movies/index.tsx`
  - `src/pages/Movie/index.tsx`
  - `src/pages/NotFound/index.tsx`

## Scope note

No runtime code change was required for this issue.
This PR is intentionally minimal and for project traceability only.
