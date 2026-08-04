import StoriesHomeHero from "@/components/StoriesHomeHero";
import {
  StoriesShowcase,
  type StorySection,
} from "@/components/StoriesShowcase";

const storySections: StorySection[] = [
  {
    id: "written",
    title: "Written Stories",
    tone: "sage",
    stories: [
      {
        id: "hope",
        title: "What Hope Means to Me",
        slug: "what-hope-means-to-me",
        date: "23 Juli 2026",
        image: "/assets/carimage-1.png",
      },
      {
        id: "periferi",
        title: "Merayakan Perempuan yang Berdiri di Periferi",
        slug: "merayakan-perempuan-yang-berdiri-di-periferi",
        date: "12 Juni 2026",
        image: "/assets/carimage-2.png",
      },
      {
        id: "transjakarta",
        title: "Tentang Kota, Alienasi, dan Menangis di TransJakarta",
        slug: "tentang-kota-alienasi-dan-menangis-di-transjakarta",
        date: "5 Juni 2026",
        image: "/assets/carimage-3.png",
      },
    ],
  },

  {
    id: "audiovisual",
    title: "Audiovisual Stories",
    tone: "sage",
    stories: [
      {
        id: "what-hope-means-to-me",
        title: "Merayakan Perempuan yang Berdiri di Periferi",
        slug: "merayakan-perempuan-yang-berdiri-di-periferi",
        date: "12 Juni 2026",
        image: "/assets/carimage-2.png",
      },
      {
        id: "transjakarta",
        title: "Tentang Kota, Alienasi, dan Menangis di TransJakarta",
        slug: "tentang-kota-alienasi-dan-menangis-di-transjakarta",
        date: "5 Juni 2026",
        image: "/assets/carimage-3.png",
      },
      {
        id: "hope",
        title: "What Hope Means to Me",
        slug: "what-hope-means-to-me",
        date: "23 Juli 2026",
        image: "/assets/carimage-1.png",
      },
    ],
  },
  {
    id: "visual",
    title: "Visual Stories",
    tone: "sun",
    titleAlign: "end",
    stories: [
      {
        id: "transjakarta",
        title: "Tentang Kota, Alienasi, dan Menangis di TransJakarta",
        slug: "tentang-kota-alienasi-dan-menangis-di-transjakarta",
        date: "5 Juni 2026",
        image: "/assets/carimage-3.png",
      },
      {
        id: "hope",
        title: "What Hope Means to Me",
        slug: "what-hope-means-to-me",
        date: "23 Juli 2026",
        image: "/assets/carimage-1.png",
      },
      {
        id: "periferi",
        title: "Merayakan Perempuan yang Berdiri di Periferi",
        slug: "merayakan-perempuan-yang-berdiri-di-periferi",
        date: "12 Juni 2026",
        image: "/assets/carimage-2.png",
      },
    ],
  },
];

export default function StoriesOnHome() {
  return (
    <>
      <StoriesHomeHero />
      <StoriesShowcase sections={storySections} />
    </>
  );
}
