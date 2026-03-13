import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleDark: () => void;
  currentTheme: string;
  changeTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : true;
  });

  const [currentTheme, setCurrentTheme] = useState<string>(() => {
    return localStorage.getItem('theme') || 'default';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  const toggleDark = () => setIsDark(!isDark);
  
  const changeTheme = (theme: string) => setCurrentTheme(theme);

  return (
    <ThemeContext.Provider value={{ isDark, toggleDark, currentTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
