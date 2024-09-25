/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useState, useMemo, useEffect} from 'react';

import Layout from '@theme/Layout';
import clsx from 'clsx';

import FavoriteIcon from '../../components/svgIcons/FavoriteIcon';

import ShowcaseTagSelect, {
  readSearchTags,
} from '../../components/gallery/ShowcaseTagSelect';

import ShowcaseFilterToggle, {
  type Operator,
  readOperator,
} from '../../components/gallery/ShowcaseFilterToggle';

import ShowcaseCard from '../../components/gallery/ShowcaseCard';
import ShowcaseTooltip from '../../components/gallery/ShowcaseTooltip';

import {
  Tags,
  type User,
  type TagType,
} from '../../data/tags';

import {
  sortedUsers,
  TagList,
} from '../../data/users';


import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Translate, {translate} from '@docusaurus/Translate';
import {useHistory, useLocation} from '@docusaurus/router';
import {usePluralForm} from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

const TITLE = 'Community Gallery';
const DESCRIPTION = 'A community-contributed showcase gallery';

type UserState = {
  scrollTopPosition: number;
  focusedElementId: string | undefined;
};

function restoreUserState(userState: UserState | null) {
  const {scrollTopPosition, focusedElementId} = userState ?? {
    scrollTopPosition: 0,
    focusedElementId: undefined,
  };
  // @ts-expect-error: if focusedElementId is undefined it returns null
  document.getElementById(focusedElementId)?.focus();
  window.scrollTo({top: scrollTopPosition});
}

export function prepareUserState(): UserState | undefined {
  if (ExecutionEnvironment.canUseDOM) {
    return {
      scrollTopPosition: window.scrollY,
      focusedElementId: document.activeElement?.id,
    };
  }

  return undefined;
}

const SearchNameQueryKey = 'name';

function readSearchName(search: string) {
  return new URLSearchParams(search).get(SearchNameQueryKey);
}

function filterUsers(
  users: User[],
  selectedTags: TagType[],
  operator: Operator,
  searchName: string | null,
) {
  if (searchName) {
    // eslint-disable-next-line no-param-reassign
    users = users.filter((user) =>
      user.title.toLowerCase().includes(searchName.toLowerCase()),
    );
  }
  if (selectedTags.length === 0) {
    return users;
  }
  return users.filter((user) => {
    if (user.tags.length === 0) {
      return false;
    }
    if (operator === 'AND') {
      return selectedTags.every((tag) => user.tags.includes(tag));
    }
    return selectedTags.some((tag) => user.tags.includes(tag));
  });
}

function useFilteredUsers() {
  const location = useLocation<UserState>();
  const [operator, setOperator] = useState<Operator>('OR');
  // On SSR / first mount (hydration) no tag is selected
  const [selectedTags, setSelectedTags] = useState<TagType[]>([]);
  const [searchName, setSearchName] = useState<string | null>(null);
  // Sync tags from QS to state (delayed on purpose to avoid SSR/Client
  // hydration mismatch)
  useEffect(() => {
    setSelectedTags(readSearchTags(location.search));
    setOperator(readOperator(location.search));
    setSearchName(readSearchName(location.search));
    restoreUserState(location.state);
  }, [location]);

  return useMemo(
    () => filterUsers(sortedUsers, selectedTags, operator, searchName),
    [selectedTags, operator, searchName],
  );
}

function ShowcaseHeader() {
  return (
    <header className={clsx("hero hero--primary heroAzureHome")} style={{ backgroundImage: 'url(../img/hero-bg.png)', padding: '8rem 0rem' }}>
      <div className="container text--center">
        <div className="row" style={{ alignItems: 'center' }}>
          <div className="col col--6 text--left">
              <h1 className="hero__title">
                  Community Gallery
              </h1>
              <p>Explore the Community Showcase for videos, blog posts and open-source projects from the community.</p>
          </div>
          <div className="col col--6 hide-on-mobile">
          </div>
        </div>
      </div>
    </header>
  );
}

function useSiteCountPlural() {
  const {selectMessage} = usePluralForm();
  return (sitesCount: number) =>
    selectMessage(
      sitesCount,
      translate(
        {
          id: 'showcase.filters.resultCount',
          description:
            'Pluralized label for the number of sites found on the showcase. Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: '1 post|{sitesCount} posts',
        },
        {sitesCount},
      ),
    );
}

function ShowcaseFilters() {
  const filteredUsers = useFilteredUsers();
  const siteCountPlural = useSiteCountPlural();
  return (
    <section className="container margin-top--lg">
      <div className={clsx('margin-bottom--sm', styles.filterCheckbox)}>
        <div>
          <h2>
            <Translate id="showcase.filters.title">Filters</Translate>
          </h2>
          <span>{siteCountPlural(filteredUsers.length)}</span>
        </div>
        <ShowcaseFilterToggle />
      </div>
      <hr></hr>
      <ul className={styles.checkboxList}>
        {TagList.map((tag, i) => {
          const {label, description, color} = Tags[tag];
          const id = `showcase_checkbox_id_${tag}`;

          return (
            <li key={i} className={styles.checkboxListItem}>
              <ShowcaseTooltip
                id={id}
                text={description}
                anchorEl="#__docusaurus">
                <ShowcaseTagSelect
                  tag={tag}
                  id={id}
                  label={label}
                  icon={(
                      <span
                        style={{
                          backgroundColor: color,
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          marginLeft: 8,
                        }}
                      />
                    )
                  }
                />
              </ShowcaseTooltip>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

const featuredUsers = sortedUsers.filter((user) =>
  user.tags.includes('featured'),
);
// const helpWanted = sortedUsers.filter((user) =>
//   user.tags.includes('helpwanted'),
// );
// const otherUsers = sortedUsers.filter(
//   (user) => !user.tags.includes('featured')&&!user.tags.includes('helpwanted'),
// );

function SearchBar() {
  const history = useHistory();
  const location = useLocation();
  const [value, setValue] = useState<string | null>(null);
  useEffect(() => {
    setValue(readSearchName(location.search));
  }, [location]);
  return (
    <div className={styles.searchContainer}>
      <input
        id="searchbar"
        placeholder={translate({
          message: 'Search posts by name...',
          id: 'showcase.searchBar.placeholder',
        })}
        value={value ?? undefined}
        aria-label='Search posts by name...'
        onInput={(e) => {
          setValue(e.currentTarget.value);
          const newSearch = new URLSearchParams(location.search);
          newSearch.delete(SearchNameQueryKey);
          if (e.currentTarget.value) {
            newSearch.set(SearchNameQueryKey, e.currentTarget.value);
          }
          history.push({
            ...location,
            search: newSearch.toString(),
            state: prepareUserState(),
          });
          setTimeout(() => {
            document.getElementById('searchbar')?.focus();
          }, 0);
        }}
      />
    </div>
  );
}

function ShowcaseCards() {
  const filteredUsers = useFilteredUsers();

  if (filteredUsers.length === 0) {
    return (
      <section className="margin-top--lg margin-bottom--xl">
        <div className="container padding-vert--md text--center">
          <h2>
            <Translate id="showcase.usersList.noResult">
              No results found for this search
              </Translate>
          </h2>
          <SearchBar />
        </div>
      </section>
    );
  }

  return (
    <section className="margin-top--lg margin-bottom--xl">
      {filteredUsers.length === sortedUsers.length ? (
        <>
          <div className={styles.showcaseFavorite}>
            <div className="container">
              <div
                className={clsx(
                  'margin-bottom--md',
                  styles.showcaseFavoriteHeader,
                )}>
                <h2>
                  <Translate id="showcase.favoritesList.title">
                    Featured Posts
                  </Translate>
                </h2>
                {/* <FavoriteIcon svgClass={styles.svgIconFavorite} /> */}
                <SearchBar />
              </div>
              <hr></hr>
              <ul className={clsx('container', styles.showcaseList)}>
                {featuredUsers.map((user) => (
                  <ShowcaseCard key={user.title} user={user} />
                ))}
              </ul>
            </div>
          </div>


          <div className="container margin-top--lg">
            <h2 className={styles.showcaseHeader}>
              <Translate id="showcase.usersList.allUsers">
               All Posts
             </Translate>
            </h2>
            <hr></hr>
            <ul className={styles.showcaseList}>
              {sortedUsers.map((user) => (
                <ShowcaseCard key={user.title} user={user} />
              ))}
            </ul>
          </div>

        </>
      ) : (
        <div className="container">
          <div
            className={clsx(
              'margin-bottom--md',
              styles.showcaseFavoriteHeader,
            )}>
            <SearchBar />
          </div>
          <ul className={styles.showcaseList}>
            {filteredUsers.map((user) => (
              <ShowcaseCard key={user.title} user={user} />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default function Showcase(): JSX.Element {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main>
        <ShowcaseHeader />
        <ShowcaseFilters />
        <ShowcaseCards />
      </main>
    </Layout>
  );
}