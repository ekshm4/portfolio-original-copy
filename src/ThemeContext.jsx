/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) { // eslint-disable-line react/prop-types
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      return saved || 'light';
    } catch {
      return 'light';
    }
  });
  const [overrideTheme, setOverrideTheme] = useState(null);

  useEffect(() => {
    const effective = overrideTheme || theme;
    document.documentElement.setAttribute('data-theme', effective);
    if (!overrideTheme) {
      try { localStorage.setItem('theme', theme); } catch { /* localStorage unavailable */ }
    }
  }, [theme, overrideTheme]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: overrideTheme || theme, toggleTheme, setOverrideTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
