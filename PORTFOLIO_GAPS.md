# Portfolio maintenance

## Content baseline

- Education: African Leadership University, BSc Software Engineering, 2026–2029 (expected), confirmed by the owner.
- Public project descriptions and links: `src/data/portfolio.js`.
- Shared experience and education: `src/data/cv.json`, used by the page and downloadable CV generator.
- Prototype projects retain their labels. Transit positions and ETAs are simulated.
- Private repository names and contents are excluded from public project links.

## Ongoing improvements

- Add real project screenshots or short demonstrations as they become available.
- Add case studies describing contribution, decisions, and measured outcomes when supporting evidence is available.
- Recheck live project URLs periodically; inspect the content before restoring a stale deployment link.
- Evaluate lazy-loading or splitting the Three.js bundle if initial-load performance becomes a priority.
- Recheck employment details and regenerate the CV when shared data changes.

## Release checks

```bash
python3 scripts/build_cv.py
npm run build
git diff --check
```

Also check desktop and mobile navigation, project links, section theme changes, reduced-motion preferences, the CV download, and social metadata when relevant files change.
