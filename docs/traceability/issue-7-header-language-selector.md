# Issue #7 Traceability — Header Language Selector and Translations

This document provides traceability for issue #7:
`feat(header): add language selector and translate header/navbar`.

## Status

Already implemented on branch `tp` before this issue execution window.

## Evidence

- Language selector component exists in:
  - `src/components/Header/LanguageSelector/index.tsx`
  - `src/components/Header/LanguageSelector/classes.module.css`
- Selector updates current language through `i18n.changeLanguage(...)`
- Header uses translations via `useTranslation()` and `i18nMap` keys:
  - title (`i18nMap.header.title`)
  - description (`i18nMap.header.description`)
- Header embeds `<LanguageSelector />`
- NavBar labels are translated from dictionary keys (`i18nMap.header.nav.*`)

## Scope note

No runtime code change was required for this issue.
This PR is intentionally minimal and for project traceability only.
