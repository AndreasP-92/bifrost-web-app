import { BuildingIcon, GameIcon, UsersIcon } from "./icons";
import { Frame } from "./frame";
import styles from "./feature-cards-section.module.css";
import pillars from "./pillars.module.css";

const PILLARS = [
  {
    icon: UsersIcon,
    title: "Players",
    text: "One shared identity and progression that follows you across the games you play.",
  },
  {
    icon: GameIcon,
    title: "Games",
    text: "Existing and new games can connect to Bifrost and become part of the shared universe.",
  },
  {
    icon: BuildingIcon,
    title: "Companies",
    text: "Access to a shared ecosystem of players and games through the Bifrost platform.",
  },
];

export function FeatureCardsSection() {
  return (
    <section id="bifrost" className="section">
      <div className={`${styles.dragon} ${styles.dragonLeft}`} aria-hidden="true" />
      <div className={`${styles.dragon} ${styles.dragonRight}`} aria-hidden="true" />

      <div className={styles.wrap}>
        <div className="sectionHead">
          <p className="eyebrow">Bifrost: The Ecosystem</p>
          <h2 className="h2">One Unified Gaming Ecosystem</h2>
          <p className="body" style={{ marginTop: 16 }}>
            Project Bifrost is built around one global gaming profile. The profile carries your
            identity across the games connected to Bifrost, bringing players, games and
            companies together in one universe.
          </p>
        </div>

        <div className={pillars.grid}>
          {PILLARS.map(({ icon: Icon, title, text }) => (
            <Frame key={title}>
              <Icon className={pillars.icon} />
              <p className={pillars.title}>{title}</p>
              <p className={pillars.text}>{text}</p>
            </Frame>
          ))}
        </div>
      </div>
    </section>
  );
}
