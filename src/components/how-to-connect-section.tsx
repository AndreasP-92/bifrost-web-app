import { RuneSteps } from "./ui";
import styles from "./how-to-connect-section.module.css";

const STEPS = [
  { label: "Download Bifrost", description: "Get the latest version of the Bifrost app." },
  { label: "Install Steam", description: "If you don't have Steam installed yet." },
  { label: "Log In or Register", description: "Create your Bifrost profile in seconds." },
  { label: "Connect Your Game", description: "Select your game and installation folder." },
  { label: "You're Ready", description: "Game connected — Bifrost is ready." },
];

export function HowToConnectSection() {
  return (
    <section id="how-to-connect" className="section">
      <div className="container">
        <div className="sectionHead sectionHead--center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            How to Connect
          </p>
          <h2 className="h2">How to Get Started</h2>
          <p className={styles.subhead}>Get Connected in Minutes</p>
        </div>

        <RuneSteps steps={STEPS} className={styles.steps} />
      </div>
    </section>
  );
}
