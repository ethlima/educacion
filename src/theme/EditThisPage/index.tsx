import React from 'react';
import Link from '@docusaurus/Link';
import type {Props} from '@theme/EditThisPage';
import IconEdit from '@theme/Icon/Edit';

import styles from './styles.module.css';

export default function EditThisPage({editUrl}: Props): JSX.Element {
  return (
    <Link
      to={editUrl}
      className={styles.editButton}
      target="_blank"
      rel="noreferrer"
      aria-label="Editar página en GitHub"
    >
      <span className={styles.icon} aria-hidden="true">
        <IconEdit />
      </span>
      Editar página
    </Link>
  );
}