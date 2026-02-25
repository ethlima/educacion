import React from 'react';
import Link from '@docusaurus/Link';
import type {Props} from '@theme/EditThisPage';

export default function EditThisPage({editUrl}: Props): JSX.Element {
  return (
    <Link to={editUrl} className="button button--secondary button--sm" target="_blank" rel="noreferrer">
      Edit on GitHub
    </Link>
  );
}