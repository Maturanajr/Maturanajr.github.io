import { ReactNode, ButtonHTMLAttributes } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { getCurrentTheme } from '../../themes/themeConfig';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  className = '',
  ...props 
}: ButtonProps) => {
  const { isDark, currentTheme } = useTheme();
  const theme = getCurrentTheme(currentTheme);

  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl';
  
  const variants = {
    primary: `${theme.colors.primary} text-white hover:opacity-90`,
    secondary: `${theme.colors.secondary} text-white hover:opacity-90`,
    outline: `border-2 ${isDark ? 'border-gray-600 text-gray-100 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:bg-gray-100'}`,
    ghost: `${isDark ? 'text-gray-100 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`,
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
