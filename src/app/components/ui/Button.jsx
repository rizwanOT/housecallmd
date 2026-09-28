import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Button = ({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon, 
  onClick,
  disabled = false,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-green-700 hover:bg-[#0072BC] text-white shadow-lg hover:shadow-xl focus:ring-green-700 hover-shake',
    secondary: 'border-2 border-white text-white hover:bg-white hover:text-blue-900 focus:ring-white',
    outline: 'border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white focus:ring-green-700',
    ghost: 'text-white hover:bg-white/10 focus:ring-white/50'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  const content = (
    <>
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </>
  );
  
  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }
  
  return (
    <button 
      className={classes} 
      onClick={onClick} 
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
