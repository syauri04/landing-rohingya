"use client";

import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export type Story = {
  id: string;
  title: string;
  slug?: string;
  date: string;
  image: string;
  alt?: string;
};

export type StorySection = {
  id: string;
  title: string;
  slug?: string;
  stories: Story[];
  /** `end` follows the Visual Stories title placement in the reference. */
  titleAlign?: "start" | "end";
  tone?: "sage" | "sun";
};

type StoriesShowcaseProps = {
  sections: StorySection[];
  className?: string;
};

/**
 * Reusable three-column story layout. Supply any number of sections and cards;
 * on narrow screens it naturally becomes a single-column reading experience.
 */
export function StoriesShowcase({
  sections,
  className = "",
}: StoriesShowcaseProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      {sections.map((section) => (
        <StoryGridSection key={section.id} section={section} />
      ))}
    </div>
  );
}

export function StoryGridSection({ section }: { section: StorySection }) {
  const isEnd = section.titleAlign === "end";
  const isSun = section.tone === "sun";

  return (
    <section
      aria-labelledby={`${section.id}-title`}
      className={
        isSun
          ? "bg-[url('/assets/bg-texture-yellow.png')] bg-cover bg-center"
          : "bg-[#B1BF92]"
      }
    >
      <div className="mx-auto  max-w-screen-2xl py-16 px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          variants={container}
        >
          <motion.div
            variants={item}
            className={`mb-10 flex ${isEnd ? "justify-start sm:justify-end" : "justify-start"}`}
          >
            <h2
              id={`${section.id}-title`}
              className={`rounded-[15px] px-8 py-2 text-2xl font-semibold tracking-[-0.04em] text-black md:text-[40px] ${
                isSun ? "bg-[#b4c598]" : "bg-[#edffc5]"
              }`}
            >
              {section.title}
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3"
          >
            {section.stories.map((story) => (
              <motion.article key={story.id} variants={item}>
                <a
                  href={`/stories-on-home/${story.slug ?? story.id}`}
                  className="group block rounded-xl outline-offset-4 transition focus-visible:outline-2 focus-visible:outline-black"
                >
                  <div className="aspect-[1.58/1] overflow-hidden rounded-xl bg-black shadow-sm">
                    <img
                      src={story.image}
                      alt={story.alt ?? story.title}
                      className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-5 line-clamp-2 text-lg font-semibold leading-tight text-black sm:text-xl">
                    {story.title}
                  </h3>
                  <p className="mt-3 text-sm leading-none text-[#5C5C5C] sm:text-base">
                    {story.date}
                  </p>
                </a>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
