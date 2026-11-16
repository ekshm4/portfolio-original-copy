import { useTheme } from "../../src/ThemeContext";
import "./BottomBar.css";

export default function BottomBar() {
  const { toggleTheme } = useTheme();

  return (
    <div className="bottombar">
      <p className="bb-left" onClick={toggleTheme}>Dark mode.</p>
      <p className="bb-right">Anything you prefer.</p>
    </div>
  );
}
