# Design QA

## Target

- Reference URL: `https://dshopen.org/zh/`
- Purpose: personal homepage and multi-page technical blog
- Viewports: desktop `1440px`; mobile CSS viewport `390px`
- Constraint: use the reference's visual language without copying its brand, text, mascot, or third-party assets

## Evidence

- Reference desktop: `C:\CODEX\dshopen-reference\dshopen-desktop.png`
- Reference mobile: `C:\CODEX\dshopen-reference\dshopen-mobile.png`
- Combined comparison: `C:\CODEX\site-qa\compare-desktop.png`
- Prototype desktop: `C:\CODEX\site-qa\home-desktop.png`
- Prototype mobile: `C:\CODEX\site-qa\home-mobile-scaled.png`
- Article mobile: `C:\CODEX\site-qa\article-mobile-scaled.png`
- Blog desktop: `C:\CODEX\site-qa\blog-desktop.png`
- Projects desktop: `C:\CODEX\site-qa\projects-desktop-final.png`
- About desktop: `C:\CODEX\site-qa\about-desktop-final.png`

## Checks

- All eight routes return HTTP 200 locally.
- All internal links resolve to local files.
- Mobile page width and scroll width both measure `390px`; no horizontal overflow.
- Mobile menu opens and closes through the visible navigation control.
- Article category filtering updates the visible card count.
- Article keyword search updates results and empty-state visibility.
- Theme toggle switches the page to night mode and persists the selection.
- Navigation, article cards, project links, GitHub links, and back links are present.
- No third-party screenshots or reference-site assets are included in the deployable folder.

## Intentional Differences

- The source is not cloned verbatim because it is a third-party site.
- The playful mascot is replaced with an original terminal/build-log composition.
- The index directory is replaced with an original article catalog and project pages.
- All names, copy, article content, and project descriptions are original.

## Remaining Polish

- P3: add a real personal avatar later if Bowen wants one.
- P3: add RSS output after a content publishing workflow is chosen.

## Final Result

passed
