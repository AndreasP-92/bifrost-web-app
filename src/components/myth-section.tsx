import Image from "next/image";
import { Frame } from "./frame";
import styles from "./myth-section.module.css";

export function MythSection() {
  return (
    <section id="myth" className="section section--tight">
      <div className="container">
        <div className={styles.layout}>
          <Frame className={styles.plate}>
            <Image
              src="/images/bifrost-poster.jpg"
              alt="Project Bifrost emblem: a hooded figure and a wolf before a glowing rune portal"
              width={900}
              height={1274}
              className={styles.image}
              sizes="(max-width: 860px) 90vw, 420px"
            />
          </Frame>

          <div className={styles.copy}>
            <p className="eyebrow">Norse mythology</p>
            <h2 className="h2">The Bridge Between Worlds</h2>
            <p className="body" style={{ marginTop: 16 }}>
              In Norse mythology, Bifrost is the burning rainbow bridge that connects Midgard, the
              world of humans, with Asgard, the realm of the gods. The bridge is guarded by
              Heimdall and crossed only by those who dare. Project Bifrost carries the name
              forward as a gaming ecosystem built to connect players, games and companies in one
              unified universe.
            </p>
            <p className={styles.quote}>&ldquo;We build the bridge. Together.&rdquo;</p>
          </div>
        </div>
      </div>
    </section>
  );
}
