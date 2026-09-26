import type { ReactNode, SVGProps } from "react";

/**
 * Line-icon set traced from docs/design art element.png ("Icons").
 * 24×24 grid, stroke = currentColor, so size and colour come from CSS.
 */
type IconProps = Omit<SVGProps<SVGSVGElement>, "children"> & { title?: string };

function Icon({ title, children, ...rest }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      focusable="false"
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

export const HomeIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3 11.5 12 4l9 7.5" />
    <path d="M5.5 9.5V20h4.5v-5.5h4V20h4.5V9.5" />
  </Icon>
);

export const CommunityIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="7.5" r="3" />
    <circle cx="5.5" cy="9.5" r="2.2" />
    <circle cx="18.5" cy="9.5" r="2.2" />
    <path d="M6.5 20c0-3.6 2.4-6 5.5-6s5.5 2.4 5.5 6" />
    <path d="M2 19c0-2.6 1.5-4.4 3.8-4.6M22 19c0-2.6-1.5-4.4-3.8-4.6" />
  </Icon>
);

export const TrophyIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
    <path d="M7 6H4v1.5A3.5 3.5 0 0 0 7.5 11M17 6h3v1.5a3.5 3.5 0 0 1-3.5 3.5" />
    <path d="M12 14v3.5M8.5 20.5h7M9.5 17.5h5v3h-5z" />
  </Icon>
);

export const ChestIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M3.5 10a4 4 0 0 1 4-4h9a4 4 0 0 1 4 4v1h-17v-1Z" />
    <path d="M3.5 11h17v8.5h-17z" />
    <path d="M8 6v13.5M16 6v13.5" />
    <path d="M10.5 11v3h3v-3" />
  </Icon>
);

export const SwordsIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 4l10 10M4 4h3l9.5 9.5M4 4v3l9.5 9.5" />
    <path d="M20 4 10 14M20 4h-3l-4 4M20 4v3l-4 4" />
    <path d="m13 16 5-5M11 11l-5 5M6.5 15.5 4 20M17.5 15.5 20 20" />
  </Icon>
);

export const SettingsIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1" />
    <circle cx="12" cy="12" r="6.5" />
  </Icon>
);

export const DownloadIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3.5v11M7.5 10l4.5 4.5 4.5-4.5" />
    <path d="M4 15v4.5h16V15" />
  </Icon>
);

export const PlayIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M7 4.5v15l12-7.5-12-7.5Z" />
  </Icon>
);

export const MenuIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 6.5h16M4 12h16M4 17.5h16" />
  </Icon>
);

export const CheckIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Icon>
);

export const PlusIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 5v14M5 12h14" />
  </Icon>
);

export const MinusIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 12h14" />
  </Icon>
);

export const CloseIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Icon>
);

export const ChevronLeftIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m14.5 6-6 6 6 6" />
  </Icon>
);

export const ChevronRightIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m9.5 6 6 6-6 6" />
  </Icon>
);

export const ChevronDownIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m6 9.5 6 6 6-6" />
  </Icon>
);

export const ChevronUpIcon = (p: IconProps) => (
  <Icon {...p}>
    <path d="m6 14.5 6-6 6 6" />
  </Icon>
);

export const SearchIcon = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="10.5" cy="10.5" r="6" />
    <path d="m15 15 5 5" />
  </Icon>
);

/* Brand marks: simplified, filled glyphs for social links. */

export const WindowsIcon = (p: IconProps) => (
  <Icon {...p} stroke="none" fill="currentColor">
    <path d="M3 5.2 10.4 4.2v7.2H3zM11.4 4 21 2.7v8.7h-9.6zM3 12.5h7.4v7.3L3 18.8zM11.4 12.5H21v8.8l-9.6-1.3z" />
  </Icon>
);

export const DiscordIcon = (p: IconProps) => (
  <Icon {...p} stroke="none" fill="currentColor">
    <path d="M19.3 5.4A16.4 16.4 0 0 0 15.2 4l-.5 1a15 15 0 0 0-5.4 0l-.5-1a16.4 16.4 0 0 0-4.1 1.4C2.1 9.3 1.4 13.1 1.7 16.9a16.6 16.6 0 0 0 5 2.6l1.1-1.7a10.7 10.7 0 0 1-1.7-.8l.4-.3a11.8 11.8 0 0 0 11 0l.4.3c-.5.3-1.1.6-1.7.8l1.1 1.7a16.5 16.5 0 0 0 5-2.6c.4-4.4-.7-8.2-3-11.5ZM8.7 14.6c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm6.6 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z" />
  </Icon>
);

export const YouTubeIcon = (p: IconProps) => (
  <Icon {...p} stroke="none" fill="currentColor">
    <path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12c0 1.3.1 2.6.4 3.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1c.3-1.2.4-2.5.4-3.8s-.1-2.6-.4-3.8ZM10 15V9l5.2 3L10 15Z" />
  </Icon>
);

export const XIcon = (p: IconProps) => (
  <Icon {...p} stroke="none" fill="currentColor">
    <path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.3L5.3 21H2.2l7.2-8.3L1.8 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z" />
  </Icon>
);

export const RUNE_ICONS = {
  home: HomeIcon,
  community: CommunityIcon,
  trophy: TrophyIcon,
  chest: ChestIcon,
  swords: SwordsIcon,
  settings: SettingsIcon,
  download: DownloadIcon,
  play: PlayIcon,
  menu: MenuIcon,
  check: CheckIcon,
  plus: PlusIcon,
  minus: MinusIcon,
  close: CloseIcon,
  chevronLeft: ChevronLeftIcon,
  chevronRight: ChevronRightIcon,
  chevronDown: ChevronDownIcon,
  chevronUp: ChevronUpIcon,
  search: SearchIcon,
  windows: WindowsIcon,
  discord: DiscordIcon,
  youtube: YouTubeIcon,
  x: XIcon,
} as const;

export type RuneIconName = keyof typeof RUNE_ICONS;
