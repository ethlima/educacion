import React, {useMemo, useState} from 'react';
import Heading from '@theme/Heading';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

import styles from './styles.module.css';

type Author =
  | string
  | {
      name?: string;
      username: string;
    };

function formatLastUpdatedEs(lastUpdatedAt?: number) {
  if (!lastUpdatedAt) return null;

  // 21 de diciembre de 2025 (como tu ejemplo)
  return new Intl.DateTimeFormat('es-PE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(lastUpdatedAt * 1000));
}

function normalizeAuthors(input?: Author[]): {username: string; name?: string}[] {
  if (!Array.isArray(input)) return [];
  return input
    .map((a) => {
      if (typeof a === 'string') return {username: a};
      if (a && typeof a.username === 'string') return {username: a.username, name: a.name};
      return null;
    })
    .filter(Boolean) as {username: string; name?: string}[];
}

function GithubAvatar({username}: {username: string}) {
  const url = `https://github.com/${username}`;
  const avatar = `https://github.com/${username}.png?size=80`;
  return (
    <a className={styles.avatarLink} href={url} target="_blank" rel="noreferrer" title={`@${username}`}>
      <img className={styles.avatar} src={avatar} alt={`@${username}`} />
    </a>
  );
}

export default function DocItemHeader(): JSX.Element {
  const {metadata, frontMatter, contentTitle} = useDoc();
  const title = contentTitle ?? metadata.title;

  const fm = frontMatter as any;

  // authors puede ser:
  // authors: ["ethlima", "otro"]
  // authors:
  //  - username: ethlima
  //    name: Ethereum Lima
  const authors = normalizeAuthors(fm?.authors as Author[] | undefined);

  // Si no defines authors, al menos muestra el lastUpdatedBy (si es útil)
  const fallback = metadata.lastUpdatedBy ? [{username: metadata.lastUpdatedBy as string}] : [];
  const all = authors.length ? authors : fallback;

  const lastUpdated = formatLastUpdatedEs(metadata.lastUpdatedAt);

  // UI tipo “+14”
  const maxShown = 3;
  const shown = all.slice(0, maxShown);
  const remaining = Math.max(0, all.length - shown.length);

  const [open, setOpen] = useState(false);

  const collaboratorsHref = useMemo(() => {
    // Mejor que nada: llevar a GitHub (editUrl). Si luego quieres “history”, lo afinamos.
    return metadata.editUrl ?? '#';
  }, [metadata.editUrl]);

  return (
    <header className={styles.header}>
      <Heading as="h1" className={styles.title}>
        {title}
      </Heading>

      {lastUpdated && (
        <div className={styles.updatedLine}>
          <span className={styles.updatedLabel}>Última actualización de la página:</span>{' '}
          <span className={styles.updatedDate}>{lastUpdated}</span>
        </div>
      )}

      {all.length > 0 && (
        <div className={styles.collabRow}>
          <div className={styles.avatars}>
            {shown.map((a) => (
              <GithubAvatar key={a.username} username={a.username} />
            ))}
            {remaining > 0 && (
              <button
                type="button"
                className={styles.moreBadge}
                onClick={() => setOpen((v) => !v)}
                aria-label={`Ver ${remaining} colaboradores más`}
              >
                +{remaining}
              </button>
            )}
          </div>

          <a className={styles.collabLink} href={collaboratorsHref} target="_blank" rel="noreferrer">
            Ver colaboradores
          </a>

          {open && remaining > 0 && (
            <div className={styles.popover} role="dialog" aria-label="Colaboradores">
              <div className={styles.popoverGrid}>
                {all.map((a) => (
                  <a
                    key={a.username}
                    className={styles.popoverItem}
                    href={`https://github.com/${a.username}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img className={styles.popoverAvatar} src={`https://github.com/${a.username}.png?size=80`} alt={`@${a.username}`} />
                    <div className={styles.popoverText}>
                      <div className={styles.popoverName}>{a.name ?? `@${a.username}`}</div>
                      {a.name ? <div className={styles.popoverUser}>@{a.username}</div> : null}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
}