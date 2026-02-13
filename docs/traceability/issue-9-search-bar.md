# Issue #9 Traceability — Reusable SearchBar Component

This document provides traceability for issue #9:
`feat(search): build reusable SearchBar component`.

## Status

Already implemented on branch `tp` before this issue execution window.

## Evidence

- Reusable search component exists in:
  - `src/components/SearchBar/index.tsx`
- Component API is generic and reusable (no page-specific coupling):
  - `placeholder?: string`
  - `onSearch?: (searchTerm: string) => void`
  - `defaultSearchTerm?: string`
- Search callback is triggered on Enter key:
  - `handleKeyDown` checks `event.key === "Enter"` and calls `onSearch(searchTerm)`
- Search callback is triggered on search icon click:
  - `IconButton onClick={handleClick}` calls `onSearch(searchTerm)`
- Component is consumed by Movies page through props (composition-based reuse):
  - `src/pages/Movies/index.tsx`
  - `<SearchBar placeholder={...} onSearch={...} defaultSearchTerm={...} />`

## Scope note

No runtime code change was required for this issue.
This PR is intentionally minimal and for project traceability only.
