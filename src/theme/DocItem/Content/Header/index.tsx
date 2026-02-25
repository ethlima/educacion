// src/theme/DocItem/Content/Header/index.tsx
import React, {useState} from 'react';
import Heading from '@theme/Heading';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
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
      <img
        className={styles.avatar}
        src={`https://github.com/${username}.png?size=80`}
        alt={`@${username}`}
      />
    </a>
  );
}

export default function DocItemContentHeader() {
  const {metadata, frontMatter, contentTitle} = useDoc();
  const title = contentTitle ?? metadata.title;

  const fm = frontMatter as any;
  const authors = normalizeAuthors(fm?.authors as Author[] | undefined);

  const lastUpdated = formatEsPE(metadata?.lastUpdatedAt);

  const maxShown = 3;
  const shown = authors.slice(0, maxShown);
  const remaining = Math.max(0, authors.length - shown.length);

  const [open, setOpen] = useState(false);

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
        <div className={styles.collabRow}>
          <div className={styles.avatars}>
            {shown.map((a) => (
              <Avatar key={a.username} username={a.username} />
            ))}
            {remaining > 0 ? (
              <button
                type="button"
                className={styles.moreBadge}
                onClick={() => setOpen((v) => !v)}
                aria-label={`Ver ${remaining} colaboradores más`}
              >
                +{remaining}
              </button>
            ) : null}
          </div>

          <button
            type="button"
            className={styles.collabLink}
            onClick={() => setOpen((v) => !v)}
          >
            Ver colaboradores
          </button>

          {open && authors.length > 0 ? (
            <div className={styles.popover} role="dialog" aria-label="Colaboradores">
              <div className={styles.popoverGrid}>
                {authors.map((a) => (
                  <a
                    key={a.username}
                    className={styles.popoverItem}
                    href={`https://github.com/${a.username}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className={styles.popoverAvatar}
                      src={`https://github.com/${a.username}.png?size=80`}
                      alt={`@${a.username}`}
                    />
                    <div className={styles.popoverText}>
                      <div className={styles.popoverName}>{a.name ?? `@${a.username}`}</div>
                      {a.name ? <div className={styles.popoverUser}>@{a.username}</div> : null}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </header>
  );
}