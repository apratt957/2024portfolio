import React, { ReactNode } from "react";
import styles from "./page.module.css";

interface HeaderProps {
  backgroundColor: string;
  color: string;
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  backgroundColor,
  color,
  children,
}) => {
  return (
    <div className={styles.workHeader} style={{ backgroundColor, color }}>
      {children}
    </div>
  );
};

export default Header;
