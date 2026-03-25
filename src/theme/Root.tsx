import React from 'react';

// The Root component wraps the entire app, including the Navbar/Footer.
// Perfect for global things like providers or global meta.
export default function Root({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
