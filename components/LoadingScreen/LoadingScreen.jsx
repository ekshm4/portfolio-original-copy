import "./LoadingScreen.css";

export default function LoadingScreen({ progress, visible }) {
  return (
    <div className={`loading-overlay ${!visible ? 'loading-hidden' : ''}`}>
      <div className="loading-content">
        <h1 className="loading-title">SEK</h1>
        <div className="loading-bar-track">
          <div className="loading-bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <p className="loading-percent">{Math.round(progress)}%</p>
      </div>
    </div>
  );
}
