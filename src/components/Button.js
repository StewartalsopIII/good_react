import React from 'react';

const Button = ({ onClick, children, color = 'blue', size = 'medium' }) => {
  const baseClasses = 'font-bold rounded transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-50';
  
  const colorClasses = {
    blue: 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-500 text-white',
    green: 'bg-green-500 hover:bg-green-600 focus:ring-green-500 text-white',
    red: 'bg-red-500 hover:bg-red-600 focus:ring-red-500 text-white',
  };

  const sizeClasses = {
    small: 'py-1 px-2 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${colorClasses[color]} ${sizeClasses[size]}`}
    >
      {children}
    </button>
  );
};

export default Button;