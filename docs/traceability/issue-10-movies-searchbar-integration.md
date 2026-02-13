# Issue #10 Traceability — SearchBar Integration in Movies Page

This document provides traceability for issue #10:
`feat(movies): integrate SearchBar in Movies page`.

## Status

Already implemented on branch `tp` before this issue execution window.

## Evidence

- Movies page renders the reusable SearchBar component:
  - `src/pages/Movies/index.tsx`
  - `import SearchBar from "../../components/SearchBar";`
  - `<SearchBar ... />`
- Placeholder is translated through i18n map:
  - `placeholder={t(i18nMap.movies.searchBar.placeholder)}`
- Search callback is handled with page state via context:
  - `const { searchTerm, setSearchTerm } = useSearchTermContext();`
  - `const onSearch = (term: string) => { setSearchTerm(term); };`
  - `onSearch={onSearch}`
- SearchBar value is initialized from current page/search state:
  - `defaultSearchTerm={searchTerm}`
- EN/FR dictionary keys exist for placeholder:
  - `src/i18n/dictionnaries/en.ts` → `movies.searchBar.placeholder`
  - `src/i18n/dictionnaries/fr.ts` → `movies.searchBar.placeholder`

## Scope note

No runtime code change was required for this issue.
This PR is intentionally minimal and for project traceability only.
