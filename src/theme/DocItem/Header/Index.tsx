import React from 'react';
import Heading from '@theme/Heading';
import EditThisPage from '@theme/EditThisPage';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

import styles from './styles.module.css';

type Author =
  | string
  | {
      name?: string;
      username: string;
    };

function formatLastUpdated(lastUpdatedAt?: number) {
  if (!lastUpdatedAt) return null;
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(lastUpdatedAt * 1000));
}

function AuthorBadge({author}: {author: Author}) {
  const username = typeof author === 'string' ? author : author.username;
  const name = typeof author === 'string' ? undefined : author.name;

  const url = `https://github.com/${username}`;
  const avatar = `https://github.com/${username}.png?size=80`;

  return (
    <a className={styles.author} href={url} target="_blank" rel="noreferrer">
      <img className={styles.avatar} src={avatar} alt={username} />
      <span className={styles.authorName}>
        {name ? name : `@${username}`}
        {name ? <span className={styles.authorUser}>@{username}</span> : null}
      </span>
    </a>
  );
}

export default function DocItemHeader(): JSX.Element {
  const {metadata, frontMatter, contentTitle} = useDoc();
  const title = contentTitle ?? metadata.title;

  const fm = frontMatter as any;

  // Soporta:
  // authors: ["ethlima", "otro"]
  // authors:
  //  - username: ethlima
  //    name: Ethereum Lima
  const authorsFromFrontMatter = fm?.authors as Author[] | undefined;

  // Fallback: lastUpdatedBy (si coincide con username)
  const lastUpdatedBy = metadata.lastUpdatedBy;
  const authors: Author[] =
    Array.isArray(authorsFromFrontMatter) && authorsFromFrontMatter.length > 0
      ? authorsFromFrontMatter
      : lastUpdatedBy
        ? [lastUpdatedBy]
        : [];

  const lastUpdated = formatLastUpdated(metadata.lastUpdatedAt);

  return (
    <header className={styles.header}>
      <div className={styles.titleRow}>
        <Heading as="h1" className={styles.title}>
          {title}
        </Heading>

        {metadata.editUrl && (
          <div className={styles.editBtn}>
            <EditThisPage editUrl={metadata.editUrl} />
          </div>
        )}
      </div>

      <div className={styles.metaRow}>
        {authors.length > 0 && (
          <div className={styles.authors}>
            {authors.map((a, idx) => (
              <AuthorBadge key={idx} author={a} />
            ))}
          </div>
        )}

        {lastUpdated && (
          <div className={styles.updated}>
            <span className={styles.updatedLabel}>Page last updated:</span>{' '}
            <span className={styles.updatedDate}>{lastUpdated}</span>
          </div>
        )}
      </div>
    </header>
  );
}