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
import { useTheme } from "./ThemeContext";

const sectionImages = {
  home: 'img/cat.jpg',
  mission: 'img/Me.jpeg',
  philosophy: 'img/edit.jpg',
  skills: 'img/DSC_1050.JPG',
  cv: 'img/CSC_1146.JPG',
  contact: 'img/DSC_0881.JPG',
};

const sectionIds = ['home', 'mission', 'philosophy', 'skills', 'projects', 'cv', 'contact'];

function App() {
  const { setOverrideTheme } = useTheme();
  const contentRef = useRef(null);
  const [meshHidden, setMeshHidden] = useState(false);
  const [activeImage, setActiveImage] = useState('img/cat.jpg');

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

      if (sectionImages[activeId] && activeImage !== sectionImages[activeId]) {
        setActiveImage(sectionImages[activeId]);
      }
    };

    el.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => el.removeEventListener('scroll', handleScroll);
  }, [setOverrideTheme, activeImage]);

  return (
    <>
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
