# Issue #12 Traceability — tsyringe and reflect-metadata Setup

This document provides traceability for issue #12:
`chore(di): setup tsyringe and reflect-metadata`.

## Status

Already implemented on branch `tp` before this issue execution window.

## Evidence

- Required dependencies are installed:
  - `package.json`
  - `"tsyringe": "^4.8.0"`
  - `"reflect-metadata": "^0.2.2"`
- TypeScript decorator metadata is enabled:
  - `tsconfig.json`
  - `"experimentalDecorators": true`
  - `"emitDecoratorMetadata": true`
- `reflect-metadata` is initialized at app entrypoint and loaded first:
  - `src/index.tsx`
  - `import "reflect-metadata";`
- DI container is actively used to resolve service instances:
  - `src/index.tsx` → `container.resolve(EnvService)`
  - `src/services/api/tmdb/index.ts` with `@singleton()` and container-based resolves
  - `src/queries/useSearchMoviesQuery/index.ts` and `src/queries/useGetMovieQuery/index.ts` resolve `TmdbApiService`

## Scope note

No runtime code change was required for this issue.
This PR is intentionally minimal and for project traceability only.
