import React from 'react';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import EditThisPage from '@theme/EditThisPage';
import TOC from '@theme/TOC';

import styles from './styles.module.css';

export default function DocItemTOCDesktop(props: any): JSX.Element | null {
  const {metadata} = useDoc();

  // ✅ TOC siempre array
  const toc = Array.isArray(props?.toc) ? props.toc : [];

  // Si no hay toc ni editUrl, no muestres nada
  if (toc.length === 0 && !metadata?.editUrl) return null;

  return (
    <div className={styles.tocWrapper}>
      {metadata?.editUrl ? (
        <div className={styles.editWrap}>
          <EditThisPage editUrl={metadata.editUrl} />
        </div>
      ) : null}

      {/* ✅ Solo renderiza TOC si hay items */}
      {toc.length > 0 ? <TOC {...props} toc={toc} /> : null}
    </div>
  );
}