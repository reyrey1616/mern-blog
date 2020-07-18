import { createSelector } from 'reselect';

export const selectPosts = (state) => state.posts;

export const selectAllPosts = createSelector(
  [selectPosts],
  (posts) => posts.posts
);
