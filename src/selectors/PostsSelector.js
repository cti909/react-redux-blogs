// export const searchTextSelector = (state) => state.filters.search;
// export const filterStatusSelector = (state) => state.filters.status;
// export const filterPrioritiesSelector = (state) => state.filters.priorities;
console.log("selector note");

export const PostsSelector = (state) => {
  console.log("tree state/posts:", state.posts);
  return state.posts;
};
