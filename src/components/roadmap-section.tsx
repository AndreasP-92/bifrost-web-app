import { RuneSteps } from "./ui";
import styles from "./roadmap-section.module.css";

const STEPS = [
  { label: "Web App Development", description: "Building the store window for the platform." },
  { label: "Desktop App Development", description: "Building the platform." },
  { label: "Game Integration", description: "Integrate the first game into the platform." },
  { label: "Game Development", description: "Small game to make shard earnings fun." },
  { label: "Alpha Launch", description: "Ready for you to enjoy the platform." },
];

export function RoadmapSection() {
  return (
    <section id="roadmap" className="section">
      <div className="container">
        <div className="sectionHead sectionHead--center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Roadmap
          </p>
          <h2 className="h2">How We&apos;re Getting Started</h2>
          <p className={styles.subhead}>From Build to Alpha Launch</p>
        </div>

        <RuneSteps steps={STEPS} current={1} className={styles.steps} />
      </div>
    </section>
  );
}
