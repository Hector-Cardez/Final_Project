export const shareFavourites = (favourites) => {
  if (!favourites || favourites.length === 0) {
    return "No favourite movies to share.";
  }

  // Generate a shareable link
  const movieTitles = favourites.map((movie) => movie.title).join(", ");
  const shareableLink = `Check out my favorite movies: ${movieTitles}`;

  if (navigator.share) {
    navigator
      .share({
        title: "My Favourite Movies",
        text: "http://localhost:3000/favourites",
        url: "http://localhost:3000/favourites",
      })
      .then(() => {
        console.log("Share successful");
      })
      .catch((error) => {
        console.error("Error sharing:", error);
      });
  } else {
    // Fallback for browsers that don't support the Web Share API
    alert(shareableLink);
  }

  return shareableLink;
};
