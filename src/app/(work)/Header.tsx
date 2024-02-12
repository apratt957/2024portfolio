import React, { ReactNode } from 'react';

interface HeaderProps {
  backgroundColor: string,
  color: string,
  children: ReactNode
}

const Header: React.FC<HeaderProps> = ({ backgroundColor, color, children }) => {
  return (
    <div style={{ backgroundColor, color }}>
      {children}
    </div>
  );
};

export default Header;