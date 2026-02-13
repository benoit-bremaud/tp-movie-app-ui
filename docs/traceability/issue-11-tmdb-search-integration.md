# Issue #11 Traceability — TMDB Search Service Integration

This document provides traceability for issue #11:
`feat(api): add TmdbApiService search integration`.

## Status

Already implemented on branch `tp` before this issue execution window.

## Evidence

- Dedicated TMDB API service exists:
  - `src/services/api/tmdb/index.ts`
  - `export class TmdbApiService`
- Search method is implemented with `term` and `lang` parameters:
  - `public search(term: string, lang: string): Promise<SearchMoviesResponseModel>`
- Search requests target the TMDB search endpoint:
  - ```${this.baseUrl}/search/movie?...&language=${lang}&query=${term}...```
- Language parameter is passed dynamically from page context:
  - `src/pages/Movies/index.tsx` gets `currentLang` from i18n
  - `src/queries/useSearchMoviesQuery/index.ts` calls `tmdbApiService.search(searchTerm, lang)`
- Movies page relies on query/service layer (no inlined fetch logic in page):
  - `src/pages/Movies/index.tsx` uses `useSearchMoviesQuery(searchTerm, currentLang)`

## Scope note

No runtime code change was required for this issue.
This PR is intentionally minimal and for project traceability only.
