import StoriesHomeHero from "@/components/StoriesHomeHero";
import {
  StoriesShowcase,
  type StorySection,
} from "@/components/StoriesShowcase";
import { stories, formatLabel, type StoryFormat } from "@/data/stories";

const sectionMeta: Record<StoryFormat, Omit<StorySection, "id" | "stories">> =
  {
    written: {
      title: formatLabel.written,
      subtitle:
        "Explore stories written by our fellows to learn more about the world from the perspectives of a Rohingya youth",
      tone: "sage",
      cardVariant: "written",
    },
    audio: {
      title: formatLabel.audio,
      subtitle:
        "Immerse yourself in the stories of home and hope narrated by our fellows.",
      tone: "sun",
      cardVariant: "audio",
    },
    visual: {
      title: formatLabel.visual,
      tone: "sun",
      titleAlign: "end",
    },
  };

const storySections: StorySection[] = (
  ["written", "audio", "visual"] as const
).map((format) => ({
  id: format,
  ...sectionMeta[format],
  stories: stories.filter((story) => story.format === format),
}));

export default function StoriesOnHome() {
  return (
    <>
      <StoriesHomeHero />
      <StoriesShowcase sections={storySections} />
    </>
  );
}
