import { DownloadSection } from "@/components/download-section";
import { FeatureCardsSection } from "@/components/feature-cards-section";
import { Hero } from "@/components/hero";
// import { HowToConnectSection } from "@/components/how-to-connect-section"; // temporarily hidden, keep for later reuse
import { IntegrationSection } from "@/components/integration-section";
import { ProgressionSection } from "@/components/progression-section";
import { RoadmapSection } from "@/components/roadmap-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <FeatureCardsSection />
        <ProgressionSection />
        <IntegrationSection />
        {/* <HowToConnectSection /> temporarily hidden, keep for later reuse */}
        <RoadmapSection />
        <DownloadSection />
      </main>
      <SiteFooter />
    </>
  );
}
