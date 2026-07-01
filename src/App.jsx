import { useRef, useEffect, useState } from "react";
import "./App.css";
import Scene from "../components/scene/scene.jsx";
import Navbar from "../components/Navbar/Navbar";
import BottomBar from "../components/BottomBar/BottomBar";
import Page1 from "../components/page1/page1.jsx";
import Page2 from "../components/page2/page2.jsx";
import Philosophy from "../components/Philosophy/Philosophy";
import Page3 from "../components/page3/page3.jsx";
import Page4 from "../components/page4/page4.jsx";
import CV from "../components/CV/CV";
import Page5 from "../components/page5/page5.jsx";
import Cursor from "../components/Cursor/cursor.jsx";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
import { useTheme } from "./ThemeContext";

const sectionImages = [
  'img/cat.jpg',
  'img/Me.jpeg',
  'img/byron-breytenbach-FNhCeH1eBAA-unsplash.jpg',
  'img/justin-veenema-gf03H-I7C9Y-unsplash.jpg',
  'img/nathan-dumlao-zi5vRoAP3WY-unsplash.jpg',
  'img/olena-bohovyk-DmeZC9riGkk-unsplash.jpg',
];

const sectionImageMap = {
  home: sectionImages[0],
  mission: sectionImages[1],
  philosophy: sectionImages[2],
  skills: sectionImages[3],
  cv: sectionImages[4],
  contact: sectionImages[5],
};

const sectionIds = ['home', 'mission', 'philosophy', 'skills', 'projects', 'cv', 'contact'];

function App() {
  const { setOverrideTheme } = useTheme();
  const contentRef = useRef(null);
  const [meshHidden, setMeshHidden] = useState(false);
  const [activeImage, setActiveImage] = useState(sectionImages[0]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let cancelled = false;
    let loaded = 0;
    const total = sectionImages.length;

    sectionImages.forEach((src) => {
      const img = new Image();
      img.onload = () => {
        if (cancelled) return;
        loaded++;
        setProgress((loaded / total) * 100);
        if (loaded >= total) {
          setTimeout(() => setLoading(false), 400);
        }
      };
      img.onerror = () => {
        if (cancelled) return;
        loaded++;
        setProgress((loaded / total) * 100);
        if (loaded >= total) {
          setTimeout(() => setLoading(false), 400);
        }
      };
      img.src = src;
    });

    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const handleScroll = () => {
      const idx = Math.round(el.scrollTop / window.innerHeight);
      const activeId = sectionIds[idx] || 'home';

      if (activeId === 'projects') {
        setOverrideTheme('blue');
        setMeshHidden(true);
      } else {
        setOverrideTheme(null);
        setMeshHidden(false);
      }

      const imgSrc = sectionImageMap[activeId];
      if (imgSrc && activeImage !== imgSrc) {
        setActiveImage(imgSrc);
      }
    };

    el.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => el.removeEventListener('scroll', handleScroll);
  }, [setOverrideTheme, activeImage]);

  return (
    <>
      <LoadingScreen progress={progress} visible={loading} />
      <div className="canvas-wrapper">
        <Scene meshHidden={meshHidden} imagePath={activeImage} />
      </div>
      <Navbar />
      <div className="content" ref={contentRef}>
        <Page1 />
        <Page2 />
        <Philosophy />
        <Page3 />
        <Page4 />
        <CV />
        <Page5 />
      </div>
      <BottomBar />
      <Cursor />
    </>
  );
}

export default App;
