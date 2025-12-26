/**
 * Mixes a hex color with white to create a tint.
 * @param hex The hex color code (e.g., "#FF0000" or "FF0000")
 * @param intensity The intensity of the original color (0 to 1).
 *                  0 means 100% white, 1 means 100% original color.
 * @returns The resulting hex color code.
 */
export const mixWithWhite = (hex: string, intensity: number): string => {
  const hexValue = hex.replace("#", "");
  const r = parseInt(hexValue.substring(0, 2), 16);
  const g = parseInt(hexValue.substring(2, 4), 16);
  const b = parseInt(hexValue.substring(4, 6), 16);

  const newR = Math.round(r * intensity + 255 * (1 - intensity));
  const newG = Math.round(g * intensity + 255 * (1 - intensity));
  const newB = Math.round(b * intensity + 255 * (1 - intensity));

  return `#${newR.toString(16).padStart(2, "0")}${newG
    .toString(16)
    .padStart(2, "0")}${newB.toString(16).padStart(2, "0")}`;
};

/**
 * Mixes a hex color with black to create a shade.
 * @param hex The hex color code (e.g., "#FF0000" or "FF0000")
 * @param intensity The intensity of the original color (0 to 1).
 *                  0 means 100% black, 1 means 100% original color.
 * @returns The resulting hex color code.
 */
export const mixWithBlack = (hex: string, intensity: number): string => {
  const hexValue = hex.replace("#", "");
  const r = parseInt(hexValue.substring(0, 2), 16);
  const g = parseInt(hexValue.substring(2, 4), 16);
  const b = parseInt(hexValue.substring(4, 6), 16);

  const newR = Math.round(r * intensity);
  const newG = Math.round(g * intensity);
  const newB = Math.round(b * intensity);

  return `#${newR.toString(16).padStart(2, "0")}${newG
    .toString(16)
    .padStart(2, "0")}${newB.toString(16).padStart(2, "0")}`;
};
