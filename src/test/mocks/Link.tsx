import React from 'react';

export default function Link({ to, children, ...props }: any) {
    return (
        <a href={to} {...props}>
            {children}
        </a>
    );
}
