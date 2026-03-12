import { ReactNode, InputHTMLAttributes } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

const Input = ({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  className = '',
  icon,
  ...props 
}: InputProps) => {
  const { isDark } = useTheme();

  const baseStyles = 'w-full px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500';
  const bgStyles = isDark 
    ? 'bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500' 
    : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-400';

  return (
    <div className="relative">
      {icon && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${baseStyles} ${bgStyles} ${icon ? 'pl-10' : ''} ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;
