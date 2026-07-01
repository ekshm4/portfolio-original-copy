# Portfolio Gaps & Action Items

## 1. Hero Section (page1/page1.jsx)
- [ ] Replace `"xx"` placeholder text with real intro blurb
- [ ] Unused `.navigation` CSS block -- either populate or remove

## 2. Projects Section (page4/page4.jsx)
- [ ] Replace "Project One" with **AgenticERP** -- description, tech stack, link
- [ ] Replace "Project Two" with **GMC Kimihurura** -- description, stack, real image
- [ ] Replace "Project Three" with **Kigali Smart Bus** or **Chat General**
- [ ] Add live demo URLs and GitHub repo links for each project
- [ ] Replace generic DSC_*.JPG images with actual project screenshots
- [ ] Add "In Progress" / "Complete" badges per project

## 3. CV Section (components/CV/CV.jsx)
- [ ] Replace vague companies ("Freelance", "Various Projects", "Independent") with:
  - **Verlet Robotics** -- Teleoperations Technician (Apr 2026-Present)
  - **AI Factory Dynamics** -- Frontend Developer, AgenticERP (May 2026-Present)
- [ ] Replace "University" with **African Leadership University** -- BSc Software Engineering
- [ ] Generate and include `/public/cv.pdf` (downloadable PDF)

## 4. Contact Links (page5/page5.jsx)
- [ ] Fix GitHub `href="#"` -> `https://github.com/ekshm4`
- [ ] Fix LinkedIn `href="#"` -> `https://linkedin.com/in/shima-kabare-ebinezer-92b71437b/`

## 5. index.html / Meta
- [ ] Replace default Vite favicon (`/vite.svg`) with custom favicon
- [ ] Add OG image meta tag for social sharing

## 6. README.md
- [ ] Replace default Vite template with custom project description, setup, and deployment instructions

## 7. Cleanup
- [ ] Remove vim swap file: `components/scene/.shader.js.swp`
- [ ] Remove unused `react-router-dom` from package.json (imported nowhere)

## 8. Portfolio Data Source (CV.md -> Portfolio)
- [ ] Sync CV section with `/home/shm/projects/CV.md` (source of truth)
- [ ] Ensure GMC Kimihurura timeline (Oct 2024-Dec 2025) is reflected
- [ ] Add Verlet Robotics start date: **April 2026**
- [ ] Add Kinyarwanda language mention
- [ ] Reflect AgenticERP as collaboration with **Senga Emmanuel / AI Factory Dynamics** (not solo project)
- [ ] Kigali Smart Bus: annotate as **frontend-only prototype** (simulated, not real-time GPS)

## 9. Build & Deploy
- [ ] Rebuild: `npm run build` after content updates
- [ ] Verify `dist/` includes all assets and `cv.pdf`
