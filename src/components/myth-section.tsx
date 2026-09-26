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
              src="/images/bifrost-bridge.png"
              alt="Illustration af Bifrost, den mytiske regnbue-bro, der forbinder verdenerne"
              width={1086}
              height={1448}
              className={styles.image}
              sizes="(max-width: 860px) 90vw, 420px"
            />
          </Frame>

          <div className={styles.copy}>
            <p className="eyebrow">Nordisk mytologi</p>
            <h2 className="h2">Broen imellem verdener</h2>
            <p className="body" style={{ marginTop: 16 }}>
              I den nordiske mytologi er Bifrost den brændende regnbue, der forbinder Midgård,
              menneskenes verden, med Asgård, gudernes rige. Broen vogtes af Heimdall og krydses
              kun af dem, der tør. Project Bifrost bærer navnet videre som et gaming-økosystem
              bygget til at forbinde spillere, spil og virksomheder i ét samlet univers.
            </p>
            <p className={styles.quote}>&bdquo;Vi bygger broen. Sammen.&rdquo;</p>
          </div>
        </div>
      </div>
    </section>
  );
}
