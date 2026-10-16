---
name: git-commit
description: Use this skill whenever the user asks to analyze changes, create a git commit, or write a commit message.
---

# Git Commit Rules

Analyze the current changes and create a commit following this project's convention.

## Steps

1. Run `git status` and `git diff` (both staged and unstaged) to understand what changed.
2. Run `git diff --cached` to see what is already staged.
3. Stage all relevant changed files with `git add` (be specific — avoid `git add .` unless all changes are intentional; skip files like `.env`, lock files that weren't intentionally changed, and large binaries).
4. Compose a commit message following the convention below.
5. Show the user the proposed commit message and the list of files being committed. **Wait for explicit approval before committing.**
6. After approval, create the commit.
7. **Never push** unless the user explicitly says to push.

## Commit Message Convention

**Format:**

**Types:**
- `feat:` — feature additions, UI changes, new functionality. Use this for the vast majority of changes. When in doubt, use `feat`.
- `refactor:` — restructuring existing code without behavior changes (moving files, renaming, extracting components)
- `docs:` — documentation only (README, comments, translation copy that is purely informational)
- `style:` — pure visual/CSS style changes with no logic impact
- `merge:` — merge commits
- `chore:` — dependency updates, config file changes, build tooling. Use when the dominant change is config/tooling even if accompanied by minor code changes.

**Choosing the type:** Pick the most dominant change. If a PR adds a new button (feat) but also touches a config file, use `feat`. If the main change is a config overhaul with minor code adjustments, use `chore`.

**Message rules:**
- Start with a lowercase verb: `add`, `change`, `simplify`, `remove`, `update`, `replace`, `implement`, `enhance`, `fix`, `move`, `extract`, `rename`
- Keep it short and specific — one line ideally under 72 characters
- No period at the end
- If there are many distinct changes, add a blank line then a brief bullet-point b