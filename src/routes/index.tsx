import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { MinistryIntro } from "@/components/site/MinistryIntro";
import { MinistryFocus } from "@/components/site/MinistryFocus";
import { ScriptureBreak } from "@/components/site/ScriptureBreak";
import { SermonsLiveRow } from "@/components/site/SermonsAndLive";
import { MinistrySchedule } from "@/components/site/MinistrySchedule";
import { PrayerRequest } from "@/components/site/PrayerRequest";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { OutreachGiveContactRow } from "@/components/site/OutreachGiveContact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stanley Suresh Ministries — Deliverance • Healing • Restoration" },
      {
        name: "description",
        content:
          "Stanley Suresh Ministries serves people through prayer, deliverance, Gospel ministry, spiritual encouragement, and community outreach.",
      },
      { property: "og:title", content: "Stanley Suresh Ministries" },
      {
        property: "og:description",
        content: "Hope. Prayer. A Deeper Walk With Christ. Prayer meetings, sermons, live prayer, gallery and outreach.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MinistryIntro />
      <MinistryFocus />
      <ScriptureBreak />
      <SermonsLiveRow />
      <MinistrySchedule />
      <PrayerRequest />
      <Gallery />
      <Testimonials />
      <OutreachGiveContactRow />
      <Footer />
    </main>
  );
}
