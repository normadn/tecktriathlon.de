/**
 * Helper function to get the URL string from an imported image
 * Handles both string URLs and object imports (with .default or .src)
 */
export const getImageUrl = (image) => {
  if (typeof image === 'string') {
    return image;
  }
  if (image?.default) {
    return image.default;
  }
  if (image?.src) {
    return image.src;
  }
  // Fallback: try to stringify if it's an object
  return image;
};

