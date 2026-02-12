# Issue #6 Traceability — i18n Dictionaries and Typed Map

This document provides traceability for issue #6:
`feat(i18n): add EN/FR dictionaries and typed i18n map`.

## Status

Already implemented on branch `tp` before this issue execution window.

## Evidence

- English dictionary exists in `src/i18n/dictionnaries/en.ts`
- French dictionary exists in `src/i18n/dictionnaries/fr.ts`
- Typed i18n key map exists in `src/i18n/map.ts`
  - recursive map builder (`buildI18nMap`)
  - exported typed keys object: `i18nMap`

## Scope note

No runtime code change was required for this issue.
This PR is intentionally minimal and for project traceability only.
