import React, { ReactNode } from 'react';

interface HeaderProps {
  backgroundColor: string,
  children: ReactNode
}

const Header: React.FC<HeaderProps> = ({ backgroundColor, children }) => {
  return (
    <div style={{ backgroundColor }}>
      {children}
    </div>
  );
};

export default Header;