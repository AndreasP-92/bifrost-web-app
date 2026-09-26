import { ChestIcon, CommunityIcon, FEATURE_CARD_IMAGES, RuneFeatureCard, SwordsIcon, TrophyIcon } from "./ui";
import styles from "./feature-cards-section.module.css";

const FEATURES = [
  {
    image: FEATURE_CARD_IMAGES.playTogether,
    icon: <SwordsIcon />,
    title: "Play Together",
    text: "Connect your games, play with friends and meet new players worldwide.",
  },
  {
    image: FEATURE_CARD_IMAGES.compete,
    icon: <TrophyIcon />,
    title: "Compete",
    text: "Matchmaking, tournaments and events across multiple games.",
  },
  {
    image: FEATURE_CARD_IMAGES.beRewarded,
    icon: <ChestIcon />,
    title: "Be Rewarded",
    text: "Earn, collect and unlock unique rewards across your games.",
  },
  {
    image: FEATURE_CARD_IMAGES.buildCommunity,
    icon: <CommunityIcon />,
    title: "Build Community",
    text: "Join a global community, make friends and be part of something bigger.",
  },
];

export function FeatureCardsSection() {
  return (
    <section id="bifrost" className="section">
      <div className={styles.wrap}>
        <div className="sectionHead sectionHead--center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Bifrost: The Ecosystem
          </p>
          <h2 className="h2">One Unified Gaming Ecosystem</h2>
          <p className="body" style={{ marginTop: 16, marginInline: "auto" }}>
            Project Bifrost is built around one global gaming profile. The profile carries your
            identity across the games connected to Bifrost, bringing players, games and companies
            together in one universe.
          </p>
        </div>

        <div className={styles.grid}>
          {FEATURES.map(({ image, icon, title, text }) => (
            <RuneFeatureCard key={title} image={image} icon={icon} title={title} href="#roadmap">
              {text}
            </RuneFeatureCard>
          ))}
        </div>
      </div>
    </section>
  );
}
