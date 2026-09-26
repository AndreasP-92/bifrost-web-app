/** Natural size of /public/images/hero-background.jpg */
export const HERO_IMAGE_SIZE = { w: 2172, h: 724 };

/** Must match .backdrop's background-position in hero.module.css */
export const HERO_BG_POSITION = { x: 0.62, y: 0.5 };

/**
 * Reproduces the `background-size: cover` formula to map a point given as a
 * fraction of the source image (fx, fy, both 0–1) to pixel coordinates
 * within the element the image is displayed in — so overlays stay anchored
 * to a specific spot in the artwork regardless of the container's size or
 * aspect ratio.
 */
export function coverPoint(containerW: number, containerH: number, fx: number, fy: number) {
  const scale = Math.max(containerW / HERO_IMAGE_SIZE.w, containerH / HERO_IMAGE_SIZE.h);
  const renderedW = HERO_IMAGE_SIZE.w * scale;
  const renderedH = HERO_IMAGE_SIZE.h * scale;
  const offsetX = (containerW - renderedW) * HERO_BG_POSITION.x;
  const offsetY = (containerH - renderedH) * HERO_BG_POSITION.y;
  return { left: offsetX + fx * renderedW, top: offsetY + fy * renderedH };
}
