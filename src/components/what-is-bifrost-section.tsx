import {
  ControllerIcon,
  GiftIcon,
  LinkIcon,
  MountainIcon,
  PlayIcon,
  RunePanel,
  SwordsIcon,
  UserIcon,
} from "./ui";
import styles from "./what-is-bifrost-section.module.css";

const STEPS = [
  {
    icon: <LinkIcon />,
    title: "Connect Your Game",
    text: "Link your account and show Bifrost where your game is installed.",
  },
  {
    icon: <PlayIcon />,
    title: "Play Through Bifrost",
    text: "Start supported games through the Bifrost client and stay connected to your profile.",
  },
  {
    icon: <GiftIcon />,
    title: "Do More Than Play",
    text: "Earn rewards, join events and explore the built-in PVE experience.",
  },
];

const BADGES = [
  {
    icon: <ControllerIcon />,
    title: "Play Your Games",
    text: "Launch supported games through Bifrost",
  },
  {
    icon: <UserIcon />,
    title: "One Profile",
    text: "Keep your progress in one place",
  },
  {
    icon: <SwordsIcon />,
    title: "Matches & Events",
    text: "Join competitions and community activities",
  },
  {
    icon: <MountainIcon />,
    title: "PVE Adventure",
    text: "Explore Bifrost's own game world",
  },
];

export function WhatIsBifrostSection() {
  return (
    <section id="what-is-bifrost" className="section">
      <div className="container">
        <div className={styles.layout}>
          <RunePanel variant="gem">
            <ol className={styles.steps}>
              {STEPS.map((step, i) => (
                <li key={step.title}>
                  <div className={styles.step}>
                    <span className={styles.stepIcon}>{step.icon}</span>
                    <div>
                      <p className={styles.stepTitle}>{step.title}</p>
                      <p className={styles.stepText}>{step.text}</p>
                    </div>
                  </div>
                  {i < STEPS.length - 1 && <div className={styles.divider} aria-hidden="true" />}
                </li>
              ))}
            </ol>
          </RunePanel>

          <div className={styles.copy}>
            <p className="eyebrow">For Gamers</p>
            <h2 className="h2">What is Project Bifrost</h2>
            <p className="body" style={{ marginTop: 16 }}>
              Project Bifrost is a gaming platform that connects your games to one shared profile.
              Play supported games through the Bifrost client, track your progress, join matches
              and events, and explore our own PVE game — all in one place.
            </p>

            <div className={styles.badges}>
              {BADGES.map((badge) => (
                <div key={badge.title} className={styles.badge}>
                  <span className={styles.badgeIcon}>{badge.icon}</span>
                  <p className={styles.badgeTitle}>{badge.title}</p>
                  <p className={styles.badgeText}>{badge.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
