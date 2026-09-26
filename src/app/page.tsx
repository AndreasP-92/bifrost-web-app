import { DownloadSection } from "@/components/download-section";
import { FeatureCardsSection } from "@/components/feature-cards-section";
import { Hero } from "@/components/hero";
import { HowToConnectSection } from "@/components/how-to-connect-section";
import { IntegrationSection } from "@/components/integration-section";
import { MythSection } from "@/components/myth-section";
import { ProgressionSection } from "@/components/progression-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <FeatureCardsSection />
        <MythSection />
        <ProgressionSection />
        <IntegrationSection />
        <HowToConnectSection />
        <DownloadSection />
      </main>
      <SiteFooter />
    </>
  );
}
