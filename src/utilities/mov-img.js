// ============= use For only Vite-rect ===========

// function getImgUrl(name) {
//   return new URL(`../assets/movie-covers/${name}`, import.meta.url);
// }

// =================================================================

function getImgUrl(name) {
  return require(`../assets/movie-covers/${name}`);
}
export { getImgUrl };
