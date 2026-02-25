import React from 'react';
import Link from '@docusaurus/Link';

export default function EditThisPage({editUrl}: {editUrl: string}): JSX.Element {
  return (
    <Link to={editUrl} className="button button--secondary button--sm" target="_blank" rel="noreferrer">
      Editar página
    </Link>
  );
}