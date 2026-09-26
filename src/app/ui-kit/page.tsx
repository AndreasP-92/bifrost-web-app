import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import {
  RUNE_ICONS,
  UI_ART,
  FEATURE_CARD_IMAGES,
  RuneArrowButton,
  RuneBadge,
  RuneButton,
  RuneCheckbox,
  RuneDivider,
  RuneFeatureCard,
  RuneGem,
  RunePanel,
  RuneProgress,
  RuneRadio,
  RuneSearch,
  RuneSelect,
  RuneSteps,
  RuneTabs,
  RuneToggle,
  ChestIcon,
  ChevronDownIcon,
  CommunityIcon,
  SwordsIcon,
  TrophyIcon,
  WindowsIcon,
} from "@/components/ui";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "UI Kit — Project Bifrost",
  robots: { index: false },
};

function Block({ title, children, wide }: { title: string; children: ReactNode; wide?: boolean }) {
  return (
    <section className={`${styles.block} ${wide ? styles.wide : ""}`}>
      <h2 className={styles.blockTitle}>{title}</h2>
      {children}
    </section>
  );
}

export default function UiKitPage() {
  return (
    <main className={styles.page}>
      <header className={styles.head}>
        <p className="eyebrow">Design system</p>
        <h1 className="h2">Bifrost UI Kit</h1>
        <p className="body">
          Elements extracted from <code>docs/design art element.png</code>. Components live in{" "}
          <code>src/components/ui</code>, raster art in <code>public/images/ui</code>.
        </p>
      </header>

      <div className={styles.grid}>
        <Block title="Logo & variations (PNG)">
          <div className={styles.row}>
            <Image {...UI_ART.logoWordmark} alt="Bifrost" className={styles.logoMain} />
          </div>
          <div className={styles.row}>
            <Image {...UI_ART.logoWordmarkSmall} alt="Bifrost" className={styles.logoSmall} />
            <Image {...UI_ART.logoB} alt="B" className={styles.logoB} />
            <RuneGem size={56} />
          </div>
        </Block>

        <Block title="Buttons">
          <div className={styles.stack}>
            <RuneButton icon={<WindowsIcon />}>Download Bifrost</RuneButton>
            <RuneButton variant="secondary" trailingIcon={<ChevronDownIcon />}>
              Learn more
            </RuneButton>
            <RuneButton variant="accent">Play now</RuneButton>
            <div className={styles.row}>
              <RuneButton size="sm" variant="secondary">Learn more</RuneButton>
              <RuneButton size="sm">Learn more</RuneButton>
              <RuneButton size="sm" disabled>Disabled</RuneButton>
            </div>
            <div className={styles.row}>
              <RuneArrowButton direction="left" />
              <RuneArrowButton active />
              <RuneArrowButton />
            </div>
          </div>
        </Block>

        <Block title="Feature cards" wide>
          <div className={styles.cards}>
            <RuneFeatureCard image={FEATURE_CARD_IMAGES.playTogether} icon={<SwordsIcon />} title="Play together" href="#">
              Connect your games, play with friends and meet new players worldwide.
            </RuneFeatureCard>
            <RuneFeatureCard image={FEATURE_CARD_IMAGES.compete} icon={<TrophyIcon />} title="Compete" href="#">
              Matchmaking, tournaments and events across multiple games.
            </RuneFeatureCard>
            <RuneFeatureCard image={FEATURE_CARD_IMAGES.beRewarded} icon={<ChestIcon />} title="Be rewarded" href="#">
              Earn, collect and unlock unique rewards across your games.
            </RuneFeatureCard>
            <RuneFeatureCard image={FEATURE_CARD_IMAGES.buildCommunity} icon={<CommunityIcon />} title="Build community" href="#">
              Join a global community, make friends and be part of something bigger.
            </RuneFeatureCard>
          </div>
        </Block>

        <Block title="Icons (SVG)">
          <div className={styles.icons}>
            {Object.entries(RUNE_ICONS).map(([name, Icon]) => (
              <figure key={name} className={styles.iconCell}>
                <Icon />
                <figcaption>{name}</figcaption>
              </figure>
            ))}
          </div>
        </Block>

        <Block title="Panels & frames">
          <div className={styles.panels}>
            <RunePanel>Plain</RunePanel>
            <RunePanel variant="gem">Gem</RunePanel>
            <RunePanel variant="glow">Glow</RunePanel>
          </div>
        </Block>

        <Block title="Portraits & ornaments (PNG)" wide>
          <div className={styles.row}>
            <Image {...UI_ART.ornamentDragons} alt="" className={styles.ornament} />
            <Image {...UI_ART.ornamentShield} alt="" className={styles.ornament} />
            <Image {...UI_ART.ornamentCorner} alt="" className={styles.ornament} />
            <Image {...UI_ART.runeLarge} alt="" className={styles.ornament} />
            <Image {...UI_ART.runeCircle} alt="" className={styles.ornament} />
          </div>
        </Block>

        <Block title="Dividers & separators">
          <div className={styles.stack}>
            <RuneDivider />
            <RuneDivider variant="glow" />
            <div className={styles.row}>
              <RuneGem size={20} />
              <RuneGem size={32} />
              <RuneGem size={32} tone="bronze" />
              <RuneGem size={32} framed={false} />
            </div>
          </div>
        </Block>

        <Block title="Step indicators" wide>
          <RuneSteps
            current={2}
            steps={["Download Bifrost", "Install Steam", "Log in or register", "Connect your game", "You're ready"]}
          />
        </Block>

        <Block title="Badges & tags">
          <div className={styles.row}>
            <RuneBadge tone="new">New</RuneBadge>
            <RuneBadge tone="popular">Popular</RuneBadge>
            <RuneBadge tone="soon">Soon</RuneBadge>
          </div>
          <div className={styles.row}>
            <RuneBadge tone="alpha">Alpha</RuneBadge>
            <RuneBadge tone="beta">Beta</RuneBadge>
            <RuneBadge tone="live">Live</RuneBadge>
          </div>
        </Block>

        <Block title="Progress bars">
          <div className={styles.stack}>
            <RuneProgress value={72} label="Download" />
            <RuneProgress value={64} tone="gold" label="Season pass" />
            <RuneProgress value={0} label="Queued" />
          </div>
        </Block>

        <Block title="Misc UI elements">
          <div className={styles.controls}>
            <div className={styles.stack}>
              <RuneRadio name="demo-radio" label="Option" />
              <RuneToggle defaultChecked label="On" />
              <RuneToggle label="Off" />
            </div>
            <div className={styles.stack}>
              <RuneCheckbox defaultChecked label="Checked" />
              <RuneCheckbox label="Unchecked" />
            </div>
            <div className={styles.stack}>
              <RuneSelect defaultValue="" aria-label="Select">
                <option value="" disabled>
                  Select…
                </option>
                <option>Valheim</option>
                <option>Rust</option>
              </RuneSelect>
              <RuneSearch placeholder="Search…" aria-label="Search" />
            </div>
          </div>
          <RuneTabs tabs={[{ label: "Tab 1" }, { label: "Tab 2" }, { label: "Tab 3" }]} />
        </Block>

        <Block title="Backgrounds (WebP)" wide>
          <div className={styles.backgrounds}>
            {[UI_ART.bgMountains, UI_ART.bgCitadel, UI_ART.bgLongship].map((bg) => (
              <Image key={bg.src} {...bg} alt="" className={styles.bg} />
            ))}
          </div>
        </Block>
      </div>
    </main>
  );
}
