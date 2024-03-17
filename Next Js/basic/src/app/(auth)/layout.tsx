import React from 'react';

interface LayoutProps {
  children: React.ReactNode; // Represents the content of the page that will be placed within the layout
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
<div>
<h2>Inner Style</h2>
{children}
<h2>Outer Style</h2>
</div>
  );
};

export default Layout;
