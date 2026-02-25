import React from 'react';
import DocItemPaginator from '@theme/DocItem/Paginator';
import TagsListInline from '@theme/TagsListInline';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

export default function DocItemFooter(): JSX.Element {
  const {metadata} = useDoc();
  const tags = metadata.tags ?? [];

  return (
    <footer className="theme-doc-footer">
      {tags.length > 0 ? (
        <div className="margin-top--md">
          <TagsListInline tags={tags} />
        </div>
      ) : null}

      <div className="margin-top--lg">
        <DocItemPaginator />
      </div>
    </footer>
  );
}