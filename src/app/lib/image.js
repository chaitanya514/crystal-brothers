export function getImageUrl(asset) {
  if (!asset?.fields?.file?.url) return null;
  return `https:${asset?.fields?.file?.url}`;
}
