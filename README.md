# Shima Kabare Ebenezer — Portfolio

Personal portfolio for a full-stack developer based in Kigali, Rwanda, and Software Engineering student at African Leadership University (2026–2029).

**Website:** https://shima-kabare-ebenezer.vercel.app/

## Experience

The site includes an interactive Three.js shader scene, light/dark themes, a project-focused blue theme, selected public projects, technology categories, experience, education, a downloadable CV, and contact links. Project entries distinguish prototypes from live websites and link to public source repositories.

## Stack

React 18, Vite, React Three Fiber, Drei, Three.js, Framer Motion, GSAP, and CSS. The displayed technology categories describe the developer's wider project work; they are not all dependencies of this site.

## Development

Use a supported Node.js version compatible with the lockfile (verified with Node.js 22):

```bash
npm ci
npm run dev
```

Vite starts the local development server on port 4000.

```bash
npm run build
npm run preview
```

The production build is written to `dist/`. Deploy as a Vite site on Vercel with build command `npm run build` and output directory `dist`.

## Updating content

- `src/data/portfolio.js`: selected work, project links, and technology categories.
- `components/page1/page1.jsx`: introduction and calls to action.
- `components/page2/page2.jsx`: background and mission.
- `src/data/cv.json`: shared experience, education, and CV content.
- `components/CV/CV.jsx`: experience and education presentation.
- `public/cv.pdf`: downloadable CV. Regenerate from shared data with `python3 scripts/build_cv.py`.
- `components/page5/page5.jsx`: public contact details.
- `index.html`: search and social metadata.
- `public/social-card.png`: social sharing image.

The scroll container supports sections taller than one viewport. Theme changes follow the actual section position rather than assuming every section has an identical height.

## Visual credit

The home scene uses a still frame of the animation selected by the portfolio owner: [GIFER DVx4](https://gifer.com/en/DVx4). The animated version appears on the [GitHub profile](https://github.com/ekshm4).

## Project notes

The Kigali Smart Bus entry is a frontend simulation, not a live vehicle-tracking service. E-SHIME is an application prototype, not a validated clinical service. Public project links and stack descriptions were reviewed against repository files in November 2026. Private source code and repository names are not published here.
