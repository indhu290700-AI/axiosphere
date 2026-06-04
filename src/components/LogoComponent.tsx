import React from 'react';

interface LogoComponentProps {
  className?: string;
  size?: number;
  theme?: 'dark' | 'light';
}

export const LogoComponent: React.FC<LogoComponentProps> = ({ 
  className = "", 
  size = 32, 
  theme = 'dark' 
}) => {
  // Determine color of the left main 'A' chevron based on theme:
  // In light theme: dark gray/black. In dark theme: white.
  const mainColor = theme === 'light' ? '#0F172A' : '#FFFFFF';
  const redColor = '#EF4444'; // Radiant corporate red-orange matching the uploaded logo design

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none transition-colors duration-300 ${className}`}
    >
      {/* 
        PRECISE HIGH-FIDELITY GEOMETRIC RECREATION OF THE NEW AXIOSPHERE SPLIT-A CORPORATE EMBLEM.
        This vector trace replicates the clean mathematical angles, perfect parallel offsets,
        and premium architectural gaps shown in the light/dark brand guidelines.
      */}
      {/* Main Left/Top Frame (A-segment) */}
      <path
        d="M 50,12 
           L 14,85 
           L 27,85 
           L 50,40 
           L 57,54 
           L 71,54 
           Z"
        fill={mainColor}
        className="transition-colors duration-300"
      />

      {/* Secondary Bottom-Right Red Accent (Vibrant energy segment) */}
      <path
        d="M 73,58 
           L 86,85 
           L 73,85 
           L 59,58 
           Z"
        fill={redColor}
      />
    </svg>
  );
};
