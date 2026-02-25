import React from 'react';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import TagsListInline from '@theme/TagsListInline';

export default function DocItemFooter(): JSX.Element | null {
  const {metadata} = useDoc();
  const tags = metadata.tags ?? [];

  // Si no hay tags, no renderices footer (así no duplicas nada)
  if (tags.length === 0) return null;

  return (
    <footer className="theme-doc-footer margin-top--lg">
      <TagsListInline tags={tags} />
    </footer>
  );
}