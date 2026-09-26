export * from "./rune-icons";
export { RuneGem } from "./rune-gem";
export { RuneButton, RuneArrowButton } from "./rune-button";
export { RuneBadge, type BadgeTone } from "./rune-badge";
export { RuneProgress } from "./rune-progress";
export { RuneSteps } from "./rune-steps";
export { RuneDivider } from "./rune-divider";
export { RunePanel } from "./rune-panel";
export { RuneToggle, RuneCheckbox, RuneRadio, RuneSelect, RuneSearch } from "./rune-controls";
export { RuneTabs } from "./rune-tabs";
export { RuneFeatureCard, FEATURE_CARD_IMAGES } from "./rune-feature-card";

/** Raster art cut from docs/design art element.png, served from /public. */
export const UI_ART = {
  logoWordmark: { src: "/images/ui/logo-wordmark.png", width: 760, height: 180 },
  logoWordmarkSmall: { src: "/images/ui/logo-wordmark-small.png", width: 434, height: 120 },
  logoB: { src: "/images/ui/logo-b.png", width: 112, height: 140 },
  ornamentDragons: { src: "/images/ui/ornament-dragons.png", width: 332, height: 302 },
  ornamentShield: { src: "/images/ui/ornament-shield.png", width: 250, height: 280 },
  ornamentCorner: { src: "/images/ui/ornament-corner.png", width: 246, height: 234 },
  runeCircle: { src: "/images/ui/rune-circle.png", width: 256, height: 272 },
  runeLarge: { src: "/images/ui/rune-large.png", width: 160, height: 264 },
  bgMountains: { src: "/images/ui/bg-mountains.webp", width: 556, height: 266 },
  bgCitadel: { src: "/images/ui/bg-citadel.webp", width: 568, height: 266 },
  bgLongship: { src: "/images/ui/bg-longship.webp", width: 356, height: 266 },
} as const;
