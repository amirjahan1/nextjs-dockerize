import React from 'react';
import './globals.css';


export const metadata = {
  icons: {
    icon: "/faveicon.png",
  },
};

function RootLayout({ children }) {
  return (
    <html>
      <body>
      {children}
      </body>
    </html>
  );
}

export default RootLayout;
