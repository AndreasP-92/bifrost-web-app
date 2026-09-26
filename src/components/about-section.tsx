import { BuildingIcon, GameIcon, UsersIcon } from "./icons";
import pillars from "./pillars.module.css";

const PILLARS = [
  {
    icon: UsersIcon,
    title: "Spillere",
    text: "Én fælles identitet og progression, der følger dig på tværs af de spil, du spiller.",
  },
  {
    icon: GameIcon,
    title: "Spil",
    text: "Eksisterende og nye spil kan forbindes til Bifrost og blive en del af det samlede univers.",
  },
  {
    icon: BuildingIcon,
    title: "Virksomheder",
    text: "Adgang til et fælles økosystem af spillere og spil gennem Bifrost-platformen.",
  },
];

export function AboutSection() {
  return (
    <section id="bifrost" className="section">
      <div className="container">
        <div className="sectionHead">
          <p className="eyebrow">Bifrost: Broen imellem verdner</p>
          <h2 className="h2">Ét samlet gaming-økosystem</h2>
          <p className="body" style={{ marginTop: 16 }}>
            I nordisk mytologi er Bifrost den magiske bro, der forbinder verdenerne. Project
            Bifrost er vores moderne tolkning af den bro — et gaming-økosystem bygget omkring én
            global gaming-profil. Profilen samler din identitet på tværs af de spil, der er
            forbundet til Bifrost, og bringer spillere, spil og virksomheder sammen i ét univers.
          </p>
        </div>

        <div className={pillars.grid}>
          {PILLARS.map(({ icon: Icon, title, text }) => (
            <div key={title} className={pillars.card}>
              <Icon className={pillars.icon} />
              <p className={pillars.title}>{title}</p>
              <p className={pillars.text}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
