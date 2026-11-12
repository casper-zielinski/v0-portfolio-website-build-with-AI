---
name: new-certificate
description: Use this skill whenever the user wants to add a new certificate, badge, or course credential (a "New-Badge" / "New-Certificate") to the portfolio's certificates section and /certificates page.
---

# New Certificate / Badge

Adds a new certificate or badge to the portfolio. Talk to the user in German.

## How the certificates work (read before editing)

The certificate cards are rendered **generically**. `CertificatesSection.tsx` (home, featured only) and `CertificatesPage.tsx` (`/certificates`, all) both render the output of `useCertificatesCards()` / `useAllCertificatesCards()` from `app/[locale]/hooks/useCertificatesCards.ts`. For a normal new certificate **no component or hook changes are needed**.

Everything hangs on one camelCase `key` that must be consistent in these places:

1. **Union type** `CertificateConfig["key"]` in `app/[locale]/info/certificates.ts`
2. **Entry** in the `certificateCards` array in the same file. The array order is the display order.
3. **Translations** `certificates.items.<key>` in `messages/en.json`, `messages/de.json` and `messages/pl.json`, each with `title`, `issuer` and `description`.

The hook builds the card from these:

| Field in `certificateCards` | Effect |
| --- | --- |
| `featured` | `true` shows it in the home section as well; all certificates are on `/certificates` |
| `issued` (ISO `YYYY-MM-DD`, optional) | Shown as "Issued <date>", formatted per locale. Without it nothing is shown |
| `image`, `imageWidth`, `imageHeight` | Card image from `public/`. `next/image` needs the real pixel size |
| `imageCrop` (optional) | Crops to the center, only for screenshots with a lot of empty space around the badge |
| `link` (optional) | "View Badge" button (online verification or badge page, opens in a new tab) |
| `profileLink` (optional) | "View Profile" button (profile the badge belongs to, opens in a new tab) |
| `pdf` (optional) | "Download PDF" button (file in `public/`, plain `download`, no new tab) |

The labels `viewBadge`, `viewProfile`, `downloadPdf`, `issued` already exist in the JSON files. Do not duplicate them.

Typical combinations:

- Claude Academy badge: `link` + `pdf`
- School or paper certificate: only `pdf`
- Google Developer badge: `link` + `profileLink` + `imageCrop: true`

## Steps

### 1. Detect the files the user added

Before asking anything, look at what the user already put into the project:

```bash
git status --short
git diff --stat
git diff --cached --stat
```

`git diff` alone does **not** list brand-new untracked files, so always use `git status --short` (`??` = new file) as well. Look especially for new files in `public/` (images `.png`/`.jpg`/`.jpeg`, `.pdf`) and for already modified `messages/*.json` or `info/certificates.ts`.

From the new files, estimate:

- the **card image** (new `.png`/`.jpg`/`.jpeg`, usually named `*badge*` or `*certificate*`)
- the **PDF** (new `.pdf` with a matching name, so `pdf` is set)
- whether there is **no PDF** or **no image** (then ask for it)

Do not use unrelated new files (CV changes, project screenshots, `.claude/` files). Tell the user which files you picked and let them correct you. If there are several candidates, ask which one is meant. If the user already named the files, use those.

### 2. Collect the information from the user

Ask for everything the user has not already given. Use AskUserQuestion for choices, plain questions for free text. **Never invent** titles, dates, links or file names. If the user gave a badge/verification URL, you may open it to read the title, issuer and issue date, and still confirm anything uncertain.

- **Image for the card**: the image found in step 1, or a path the user gives. If it is not in `public/` yet, copy it there with a descriptive name (e.g. `claude-academy-badge-<slug>.png`, matching the existing files). If the user has no image yet, ask for it and wait.
- **Title** and **issuer** (e.g. "Claude Academy")
- **Description**: the user provides it, or draft one from the course information the user gives and let them confirm it.
- **Issue date** (optional)
- **Type of certificate**: which of `link` (online badge page), `profileLink` (profile page) and `pdf` (PDF file, must be in `public/`) apply. Get the URLs or file paths.
- **Featured**: should it be shown on the home page or only on `/certificates`?
- **Position**: where in the order it should appear. Default: sorted by issue date, newest first among the dated ones, but ask if it is unclear.
- **imageCrop**: only if the image is a screenshot with lots of empty space. Default `false`.
- **Translations**: does the user give German and Polish text, or should you translate? Default from CLAUDE.md: use the English text as a placeholder in `de.json` and `pl.json` and say so at the end.

### 2. Get the image size

Use the real pixel size for `imageWidth` / `imageHeight`:

```powershell
Add-Type -AssemblyName System.Drawing; $i = [System.Drawing.Image]::FromFile("<absolute path to the image>"); "$($i.Width)x$($i.Height)"; $i.Dispose()
```

### 3. Create the key

Make a camelCase key from the title (e.g. "Claude Code in Action" becomes `claudeCodeInAction`). It must be unique, so check the existing keys in `app/[locale]/info/certificates.ts` first.

### 4. Edit `app/[locale]/info/certificates.ts`

- Add the new key to the union in `CertificateConfig.key`.
- Insert the entry into `certificateCards` at the agreed position. Only include fields that are actually set (`key`, `featured`, `issued?`, `image`, `imageWidth`, `imageHeight`, `imageCrop?`, `link?`, `profileLink?`, `pdf?`).
- No translated text in this file. Image and PDF paths start with `/` (relative to `public/`).

### 5. Edit the three message files

In `messages/en.json`, `messages/de.json` and `messages/pl.json`, add under `certificates.items`:

```json
"<key>": {
  "title": "...",
  "issuer": "...",
  "description": "..."
}
```

- Same position as in the `certificateCards` array.
- Keep valid JSON (commas), 2-space indentation, and match the style of the neighbouring entries. Prettier only formats `.ts`/`.tsx` automatically, not JSON.

### 6. Only if a new kind of button or field is needed

Normally skip this. If the user wants something the current fields cannot express, change everything consistently: the `Certificate` and `CertificateConfig` types in `info/certificates.ts`, the mapping in `useCertificatesCards.ts`, **both** `CertificatesSection.tsx` and `CertificatesPage.tsx`, and the new label in all three JSON files. Follow CLAUDE.md: external links use `target="_blank" rel="noopener noreferrer"`, PDF downloads use `<a href={pdf} download>`, and the hover scales are `1.05` in the section and `1.02` on the page, as in the existing buttons.

### 7. Verify

- All three JSON files parse:
  `node -e "for (const l of ['en','de','pl']) JSON.parse(require('fs').readFileSync('messages/'+l+'.json','utf8'))"`
- Type check: `npm run type-check` (if the script does not exist, use `npx tsc --noEmit`).
- Every file referenced by `image` and `pdf` exists in `public/`.
- The key exists in the union, in `certificateCards` and in all three JSON files.
- Optional: start `npm run dev` and look at `/en/certificates` (and the home section if `featured: true`).

### 8. Finish

Give the user a short summary: changed files, the `key`, featured yes/no, position, and which German/Polish texts are still English placeholders and need translating.

**Do not commit.** Offer to use the `git-commit` skill. **Never push** unless the user explicitly asks.
