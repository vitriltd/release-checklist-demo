# release-checklist-demo

Demo consumer for [`vitriltd/release-checklist-action`](https://github.com/vitriltd/release-checklist-action).

A tiny Express service. Conventional-commit pushes to `main` trigger Release Please, which opens a release PR. The release-checklist-action then scans those commits for `[release: ...]` tags and posts a sign-off checklist comment on that PR.

## What to look at

1. **`.github/workflows/cd.yaml`** — the reference CI/CD pipeline. Two jobs: `release-please` (opens/updates the release PR) and `release-checklist` (`needs: release-please`, posts the checklist).
2. **The Release Please PR's checklist comment** — open the latest release PR in this repo. Look for the comment with `## 📋 Release Checklist`. Tick a box, push another commit, watch the state get preserved.
3. **The seed commits** — `git log --oneline` shows commits with inline `[release: ...]` tags. Each variation exercises a different facet of the action: dedup, multi-tag commits, tag-only subjects, control commits with no tag.

## How to use the convention

In any commit message or PR description body:

```
feat: add supplier invoice webhook [release: add INVOICE_WEBHOOK_SECRET to prod env]
```

The bracketed text is freeform — it should describe what the release manager (or whoever is deploying) needs to remember to do at release time. Multiple tags per commit are fine.

## License

MIT
