import React from "react";
import "./layout.css";

interface LayoutProps {
  children?: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return <div className="wrapper">{children}</div>;
}

export default Layout;
