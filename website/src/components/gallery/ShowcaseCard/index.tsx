/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import Image from '@theme/IdealImage';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';

import styles from './styles.module.css';
import FavoriteIcon from './../../svgIcons/FavoriteIcon';
import Tooltip from '../ShowcaseTooltip';
import {
  Tag,
  Tags,
  type User,
  type TagType,
} from '../../../data/tags';
import {
  TagList,
} from '../../../data/users';
import {sortBy} from '../../../../src/utils/jsUtils';

const TagComp = React.forwardRef<HTMLLIElement, Tag>(
  ({label, color, description}, ref) => (
    <div ref={ref} className={styles.tag} title={description}>
      <span className={styles.textLabel}>{label.toLowerCase()}</span>
      <span className={styles.colorLabel} style={{backgroundColor: color}} />
    </div>
  ),
);

function ShowcaseCardTag({tags}: {tags: TagType[]}) {
  const tagObjects = tags.map((tag) => ({tag, ...Tags[tag]}));

  // Keep same order for all tags
  const tagObjectsSorted = sortBy(tagObjects, (tagObject) =>
    TagList.indexOf(tagObject.tag),
  );

  return (
    <>
      {tagObjectsSorted.map((tagObject, index) => {
        const id = `showcase_card_tag_${tagObject.tag}`;

        return (
          <Tooltip
            key={index}
            text={tagObject.description}
            anchorEl="#__docusaurus"
            id={id}>
            <TagComp key={index} {...tagObject} />
          </Tooltip>
        );
      })}
    </>
  );
}

function ShowcaseMultipleWebsites(authorName: string, websiteLink: string) {
  return (
    <li>
      <a
        className="dropdown__link"
        href={websiteLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {authorName}
      </a>
    </li>
  );
}

function ShowcaseMultipleAuthorsDropdown({ user }: { user: User }) {
  const authors = user.author;
  const websites = user.website;

  if (authors.includes("|")) {
    var multiWebsites = websites.split("|");
    var multiAuthors = authors.split("|");
    const links = [];

    return (
      <div className="dropdown dropdown--right dropdown--hoverable">
        <button
          className={clsx(
            'button button--secondary button--sm',
            styles.showcaseCardSrcBtn,
          )}
        >
          Author
        </button>
        <ul className="dropdown__menu">
          {multiWebsites.map((value, index) => {
            // Append tracking parameter to URL
            const trackedUrl = `${value}?ocid=biafy25h1_communitygallery_webpage_azuremktg`;
            return ShowcaseMultipleWebsites(
              multiAuthors[index],
              trackedUrl // Use the tracked URL
            );
          })}
        </ul>
      </div>
    );
  }

  // Append tracking parameter to single URL
  const trackedUrl = `${websites}?ocid=biafy25h1_communitygallery_webpage_azuremktg`;

  return (
    <div className="author">
      <a href={trackedUrl} target="_blank" rel="noopener noreferrer">
        {authors}
      </a>
    </div>
  );
}

function ShowcaseCard({ user }: { user: User }) {
  // Function to determine if the URL contains a specific tracking parameter
  function urlContainsParameter(url, parameter) {
    return url.includes(parameter);
  }

  // Determine the URL to use
  let urlToUse = user.source;

  // Check if the URL contains the tracking parameter "?ocid=biafy25h1_communitygallery_webpage_azuremktg"
  if (!urlContainsParameter(urlToUse, '?ocid=biafy25h1_communitygallery_webpage_azuremktg')) {
    // If the tracking parameter "?ocid=biafy25h1_communitygallery_webpage_azuremktg" is not present, append "?ocid=biafy25h1_communitygallery_webpage_azuremktg"
    const trackingParameter = '?ocid=biafy25h1_communitygallery_webpage_azuremktg';

    // Check if the URL already has query parameters
    if (urlToUse.includes('?')) {
      // URL already has parameters, use '&' to append the new parameter
      urlToUse += `&ocid=biafy25h1_communitygallery_webpage_azuremktg`;
    } else {
      // URL does not have any parameters, use '?' to append the new parameter
      urlToUse += trackingParameter;
    }
  }

  // Return the card with the determined URL
  return (
    <li key={user.title} className="card">
      <Link
        className="card-link"
        to={urlToUse}
        target="_blank"
        rel="noopener noreferrer"
        data-bi-area="BodyGrid"
        data-bi-name={user.title}
      >
        {/* Image goes here */}
        {/* <div className={clsx('card__image', styles.showcaseCardImage)}>
          <Image img={user.preview} alt={user.title} />
        </div> */}
        <div className="card__body">
          <div>
            <h3>{user.title}</h3>
            {user.source && <ShowcaseMultipleAuthorsDropdown user={user} />}
          </div>
          <p>{user.description}</p>
          {/* {user.tags.includes('featured') && (
            <FavoriteIcon svgClass={styles.svgIconFavorite} size="small" />
          )} */}
        </div>
        <div className={clsx('card__footer', styles.cardFooter)}>
          <div className="margin-bottom--md">
            <ShowcaseCardTag tags={user.tags} />
          </div>
        </div>
      </Link>
    </li>
  );
}

export default React.memo(ShowcaseCard);
