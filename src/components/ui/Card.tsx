import { ReactNode } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

const Card = ({ children, className = '', hover = true, gradient = false }: CardProps) => {
  const { isDark } = useTheme();

  const baseStyles = 'rounded-xl shadow-lg transition-all duration-300';
  const hoverStyles = hover ? 'hover:shadow-2xl hover:-translate-y-2' : '';
  const bgStyles = gradient 
    ? 'bg-linear-to-br from-blue-500 to-purple-600 text-white'
    : isDark 
      ? 'bg-gray-800 border border-gray-700' 
      : 'bg-white border border-gray-200';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${bgStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
