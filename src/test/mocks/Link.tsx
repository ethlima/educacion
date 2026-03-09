import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
}

export default function Link({ to, children, ...props }: LinkProps) {
  return (
    <a href={to} {...props}>
      {children}
    </a>
  );
}
