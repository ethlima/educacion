import React from 'react';
import Heading from '@theme/Heading';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import styles from './styles.module.css';

type Author = string | {username: string; name?: string};

function formatEsPE(lastUpdatedAt?: number) {
  if (!lastUpdatedAt) return null;
  const ms = lastUpdatedAt < 10_000_000_000 ? lastUpdatedAt * 1000 : lastUpdatedAt;
  return new Intl.DateTimeFormat('es-PE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(ms));
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

export default function DocItemHeader() {
  const {metadata, frontMatter, contentTitle} = useDoc();
  const title = contentTitle ?? metadata.title;

  const fm = frontMatter as any;
  const authors = normalizeAuthors(fm?.authors as Author[] | undefined);
  const lastUpdated = formatEsPE(metadata?.lastUpdatedAt);

  return (
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
        <div className={styles.authorsRow}>
          <div className={styles.avatars}>
            {authors.slice(0, 3).map((a) => (
              <Avatar key={a.username} username={a.username} />
            ))}
            {authors.length > 3 ? <span className={styles.more}>+{authors.length - 3}</span> : null}
          </div>
          <span className={styles.see}>Ver colaboradores</span>
        </div>
      ) : null}
    </header>
  );
}