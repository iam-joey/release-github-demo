# semantic-release-demo

A demo Next.js app to showcase automated versioning, tagging, and GitHub Releases using semantic-release and conventional commits.

---

## Purpose

This repo exists to demonstrate:
- How conventional commits drive automatic versioning
- How `release.yml` creates tags and GitHub Releases automatically
- How multiple developers working on separate branches all contribute to one release

No Docker. No deployments. Just commits → tags → releases.

---

## Branch Structure

```
main        ← production-ready, releases happen from here
develop     ← integration branch, all features merge here first
feat/add1   ← Dev 1's feature branch (from develop)
feat/add2   ← Dev 2's feature branch (from feat/add1)
feat/add3   ← Dev 3's feature branch (from develop)
```

---

## Commit Convention (must follow)

```
feat:      → new feature       → minor bump  (v1.0.0 → v1.1.0)
fix:       → bug fix           → patch bump  (v1.0.0 → v1.0.1)
feat!:     → breaking change   → major bump  (v1.0.0 → v2.0.0)
chore:     → maintenance       → no release
docs:      → documentation     → no release
refactor:  → code cleanup      → no release
```

**Examples**
```
feat: add homepage hero section
fix: resolve nav link broken on mobile
feat: add contact form
chore: update dependencies
feat!: redesign entire page layout
```

---

## Demo Scenario — 3 Developers

**Dev 1** branches from `develop` → `feat/add1`
```
feat: add homepage hero section
fix: resolve nav link alignment
```

**Dev 2** branches from `feat/add1` → `feat/add2`
```
feat: add about page
```

**Dev 3** branches from `develop` → `feat/add3`
```
fix: fix broken footer links
```

### Merge order
```
1. Dev 2 merges feat/add2 → feat/add1
2. Dev 1 merges feat/add1 → develop
3. Dev 3 merges feat/add3 → develop
4. develop → main (PR)
5. Trigger release.yml
```

---

## Triggering a Release

**GitHub → Actions → `release` → Run workflow → Run**

No inputs. Just click.

### What happens
```
1. semantic-release scans commits since last tag
2. Decides version based on commit types
3. Creates Git tag  (e.g. v1.1.0)
4. Creates GitHub Release with auto-generated notes
5. Creates/updates CHANGELOG.md → commits to main
```

### Version decision
```
Only fix: commits   → patch  → v1.0.1
feat: found         → minor  → v1.1.0
feat!: found        → major  → v2.0.0
only chore:/docs:   → no release, workflow exits cleanly
```

---

## Setup

```bash
# Clone repo
git clone <repo-url>
cd semantic-release-demo

# Install dependencies
npm install

# Run dev server
npm run dev
```

---

## Required GitHub Secret

| Secret | Purpose |
|---|---|
| `GH_TOKEN` | Allows semantic-release to create tags, releases, and commit CHANGELOG.md back to main |

> Generate at: GitHub → Settings → Developer Settings → Personal Access Tokens → Fine-grained token → give `contents: write` and `pull-requests: write` permissions on this repo.

