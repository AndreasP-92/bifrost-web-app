import { AboutSection } from "@/components/about-section";
import { DownloadSection } from "@/components/download-section";
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
        <MythSection />
        <AboutSection />
        <ProgressionSection />
        <IntegrationSection />
        <HowToConnectSection />
        <DownloadSection />
      </main>
      <SiteFooter />
    </>
  );
}
