// src/theme/DocItem/TOC/Desktop/index.tsx
import React from 'react';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import EditThisPage from '@theme/EditThisPage';
import TOC from '@theme/TOC';

import styles from '../styles.module.css';

export default function DocItemTOCDesktop(props: any) {
  const {metadata} = useDoc();

  // ✅ Docusaurus v3 suele usar tocItems, pero soportamos ambos
  const tocItems = Array.isArray(props?.tocItems)
    ? props.tocItems
    : Array.isArray(props?.toc)
      ? props.toc
      : [];

  if (tocItems.length === 0 && !metadata?.editUrl) {
    return null;
  }

  return (
    <div className={styles.tocWrapper}>
      {metadata?.editUrl ? (
        <div className={styles.editWrap}>
          <EditThisPage editUrl={metadata.editUrl} />
        </div>
      ) : null}

      {/* ✅ TOC en v3 espera tocItems */}
      {tocItems.length > 0 ? <TOC {...props} tocItems={tocItems} /> : null}
    </div>
  );
}