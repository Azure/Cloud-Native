/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import { sortBy } from '../utils/jsUtils';
import { TagType, User, Tags } from './tags';
import templates from '../../static/templates.json'

// *** ADDING DATA TO AZD GALLERY ****/

// Currently using Custom Issues on Repo
// TODO: Define acceptable process for PR-based contributions

// *************** CARD DATA STARTS HERE ***********************
// Add your site to this list
// prettier-ignore

const Users: User[] = templates as User[]

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  return result;
}

export const sortedUsers = sortUsers();