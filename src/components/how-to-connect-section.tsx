import styles from "./how-to-connect-section.module.css";

export function HowToConnectSection() {
  return (
    <section id="how-to-connect" className="section">
      <div className="container">
        <div className="sectionHead">
          <p className="eyebrow">How to Connect</p>
          <h2 className="h2">How to Become Part of Bifrost</h2>
          <p className="body" style={{ marginTop: 16 }}>
            Bifrost is still being built. Here&apos;s how it comes together for both players and
            game developers once the bridge opens.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <span className={styles.badge}>Coming soon</span>
            <p className={styles.title}>For players</p>
            <p className={styles.text}>
              With the Bifrost app, you get one global gaming profile that follows you across the
              games connected to Bifrost — with progression and rewards gathered in one place.
            </p>
          </div>

          <div className={styles.card}>
            <span className={styles.badge}>Coming soon</span>
            <p className={styles.title}>For game developers &amp; companies</p>
            <p className={styles.text}>
              Want to connect your game to the Bifrost ecosystem through the Bifrost API? We&apos;re
              opening up for partnerships as the platform develops.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
