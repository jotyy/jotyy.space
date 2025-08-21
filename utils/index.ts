/**
 * Converts a given string to a dashed lowercase format.
 * This function replaces any occurrences of one or more consecutive spaces with a dash, and converts the resulting string to lowercase.
 * @param text The input text to be dasherized.
 * @returns The dasherized version of the input text.
 */
export const dasherize = (text: React.ReactNode) =>
  String(text).replace(/ +/g, '-').toLowerCase();

/**
 * Checks whether a given link is an external link by evaluating its href attribute.
 * If the href is empty or null, it is considered an internal link.
 * Otherwise, if the href does not start with '/' or '#', it is regarded as an external link.
 * @param href The href attribute value of the link to be checked.
 * @returns A boolean value indicating whether the link is an external link.
 */
export const isExternalLink = (href: string) => {
  if (!href) {
    return false;
  }
  return !(href.startsWith('/') || href.startsWith('#'));
};
