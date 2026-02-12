# Issue #4 Traceability — Header and Navigation Bar

This document provides traceability for issue #4:
`feat(header): implement navbar with active-tab navigation`.

## Status

Already implemented on branch `tp` before this issue execution window.

## Evidence

- Header component includes:
  - main title (`<Typography component="h1" ...>`) in `src/components/Header/index.tsx`
  - description text in `src/components/Header/index.tsx`
  - embedded `<NavBar />` in `src/components/Header/index.tsx`
- NavBar component implementation exists in `src/components/Header/NavBar/index.tsx`
- Active-tab logic is implemented using `useMatch`:
  - `useMatch("/")` for Home
  - `useMatch("/movies/*")` for Movies and nested routes
- Navigation actions are implemented with `useNavigate`:
  - navigate to `/`
  - navigate to `/movies`

## Scope note

No runtime code change was required for this issue.
This PR is intentionally minimal and for project traceability only.
