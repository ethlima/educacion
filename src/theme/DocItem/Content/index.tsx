import React from 'react';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

type Author = string | {username: string; name?: string};

function formatEsPE(unixSeconds?: number) {
  if (!unixSeconds) return null;
  return new Intl.DateTimeFormat('es-PE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(unixSeconds * 1000));
}

function normalizeAuthors(a: any): {username: string; name?: string}[] {
  if (!Array.isArray(a)) return [];
  return a
    .map((x) => {
      if (typeof x === 'string') return {username: x};
      if (x && typeof x.username === 'string') return {username: x.username, name: x.name};
      return null;
    })
    .filter(Boolean);
}

function Avatar({username}: {username: string}) {
  return (
    <a
      className={styles.avatarLink}
      href={`https://github.com/${username}`}
      target="_blank"
      rel="noreferrer"
      title={`@${username}`}
    >
      <img className={styles.avatar} src={`https://github.com/${username}.png?size=80`} alt={`@${username}`} />
    </a>
  );
}

export default function DocItemContent({children}: {children: React.ReactNode}) {
  const {metadata, frontMatter, contentTitle} = useDoc();
  const title = contentTitle ?? metadata.title;

  const fm = frontMatter as any;
  const authors = normalizeAuthors(fm?.authors as Author[] | undefined);
  const lastUpdated = formatEsPE(metadata?.lastUpdatedAt);

  const maxShown = 3;
  const shown = authors.slice(0, maxShown);
  const remaining = Math.max(0, authors.length - shown.length);

  return (
    <div className={styles.wrap}>
      {/* Header custom */}
      <header className={styles.header}>
        <Heading as="h1" className={styles.title}>
          {title}
        </Heading>

        {lastUpdated ? (
          <div className={styles.updatedLine}>
            Última actualización de la página: <strong>{lastUpdated}</strong>
          </div>
        ) : null}

        {authors.length > 0 ? (
          <div className={styles.collabRow}>
            <div className={styles.avatars}>
              {shown.map((a) => (
                <Avatar key={a.username} username={a.username} />
              ))}
              {remaining > 0 ? <span className={styles.moreBadge}>+{remaining}</span> : null}
            </div>
            <span className={styles.collabText}>Ver colaboradores</span>
          </div>
        ) : null}
      </header>

      {/* Aquí va el contenido del markdown */}
      <div>{children}</div>
    </div>
  );
}