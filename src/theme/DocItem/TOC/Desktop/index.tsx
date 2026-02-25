import React from 'react';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import EditThisPage from '@theme/EditThisPage';
import TOC from '@theme/TOC';

import styles from './styles.module.css';

export default function DocItemTOC(props: any) {
  const {metadata} = useDoc();
  const toc = Array.isArray(props?.toc) ? props.toc : [];

  // Si no hay TOC y no hay editUrl, no mostramos nada
  if (toc.length === 0 && !metadata?.editUrl) return null;

  return (
    <div className={styles.tocWrapper}>
      {metadata?.editUrl ? (
        <div className={styles.editWrap}>
          <EditThisPage editUrl={metadata.editUrl} />
        </div>
      ) : null}

      {toc.length > 0 ? <TOC {...props} toc={toc} /> : null}
    </div>
  );
}