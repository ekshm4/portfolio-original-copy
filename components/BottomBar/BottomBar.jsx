import { useTheme } from "../../src/ThemeContext";
import "./BottomBar.css";

export default function BottomBar() {
  const { toggleTheme } = useTheme();

  return (
    <div className="bottombar">
      <button type="button" className="bb-left" onClick={toggleTheme} aria-label="Switch between light and dark theme">Toggle theme.</button>
      <a className="bb-right" href="https://github.com/ekshm4" target="_blank" rel="noopener noreferrer">Built by @ekshm4 ↗</a>
    </div>
  );
}
