import { createSelector } from 'reselect';

const selectPosts = (state) => state.posts;

const selectAllPosts = createSelector([selectPosts], (posts) => posts.posts);
