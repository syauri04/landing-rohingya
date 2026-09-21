"use client";

import { useRef, useState } from "react";
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
  date?: string;
  /** Shown below the title for written stories. */
  summary?: string;
  /** Audio file path, used by audio stories. */
  audio?: string;
  image: string;
  alt?: string;
};

export type StorySection = {
  id: string;
  title: string;
  /** Shown below the section title. */
  subtitle?: string;
  slug?: string;
  stories: Story[];
  /** `end` follows the Visual Stories title placement in the reference. */
  titleAlign?: "start" | "end";
  tone?: "sage" | "sun";
  /** Controls how each card in this section is rendered. Defaults to the date-based "visual" layout. */
  cardVariant?: "written" | "audio" | "visual";
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
            className={`mb-10 flex flex-col gap-3 ${isEnd ? "items-start sm:items-end" : "items-start"}`}
          >
            <h2
              id={`${section.id}-title`}
              className={`rounded-[15px] px-8 py-2 text-2xl font-semibold tracking-[-0.04em] text-black md:text-[40px] ${
                isSun ? "bg-[#b4c598]" : "bg-[#edffc5]"
              }`}
            >
              {section.title}
            </h2>
            {section.subtitle && (
              <p
                className={`max-w-xl text-base leading-[22px] text-black font-semibold sm:mt-5 sm:text-lg sm:leading-[24px] md:mt-6 md:text-lg md:leading-[25px] lg:text-xl ${isEnd ? "text-left sm:text-right" : "text-left"}`}
              >
                {section.subtitle}
              </p>
            )}
          </motion.div>

          <motion.div
            variants={container}
            className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3"
          >
            {section.stories.map((story) => {
              if (section.cardVariant === "written") {
                return <WrittenStoryCard key={story.id} story={story} />;
              }
              if (section.cardVariant === "audio") {
                return <AudioStoryCard key={story.id} story={story} />;
              }
              return <VisualStoryCard key={story.id} story={story} />;
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function VisualStoryCard({ story }: { story: Story }) {
  return (
    <motion.article variants={item}>
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
  );
}

function WrittenStoryCard({ story }: { story: Story }) {
  return (
    <motion.article variants={item} className="h-full">
      <a
        href={`/stories-on-home/${story.slug ?? story.id}`}
        className="group flex h-full flex-col overflow-hidden rounded-xl shadow-sm outline-offset-4 transition focus-visible:outline-2 focus-visible:outline-black"
      >
        <div className="aspect-[1.58/1] shrink-0 overflow-hidden bg-black">
          <img
            src={story.image}
            alt={story.alt ?? story.title}
            className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col justify-center bg-[#949E7A] px-8 py-6 sm:px-10">
          <h3 className="text-center leading-[110%] text-2xl font-semibold tracking-[-0.04em] text-black md:text-[40px]">
            {story.title}
          </h3>
          {story.summary && (
            <p className="mt-3 text-center text-base leading-[22px] text-black sm:mt-5 sm:text-lg sm:leading-[24px] md:mt-6 md:text-lg md:leading-[25px] lg:text-xl">
              {story.summary}
            </p>
          )}
        </div>
      </a>
    </motion.article>
  );
}

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

function AudioStoryCard({ story }: { story: Story }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  return (
    <motion.article variants={item} className="h-full">
      <button
        type="button"
        onClick={togglePlay}
        disabled={!story.audio}
        aria-label={`${isPlaying ? "Pause" : "Play"} ${story.title}`}
        className="group flex h-full w-full flex-col cursor-pointer overflow-hidden rounded-xl text-left shadow-sm outline-offset-4 transition focus-visible:outline-2 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-60"
      >
        <div className="relative aspect-[1.58/1] shrink-0 overflow-hidden bg-black">
          <img
            src={story.image}
            alt={story.alt ?? story.title}
            className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/10 transition group-hover:bg-black/20">
            {isPlaying ? (
              <svg
                viewBox="0 0 24 24"
                className="h-12 w-12 text-white drop-shadow-lg sm:h-14 sm:w-14"
                fill="currentColor"
              >
                <rect x="6" y="5" width="4" height="14" />
                <rect x="14" y="5" width="4" height="14" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-14 w-14 text-white drop-shadow-lg sm:h-16 sm:w-16"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </span>

          {story.audio && (
            <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 sm:px-5">
              <div
                aria-hidden="true"
                className="flex h-5 flex-1 items-end gap-[3px]"
              >
                {Array.from({ length: 28 }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-full flex-1 origin-bottom rounded-full bg-white ${
                      isPlaying ? "animate-eq" : ""
                    }`}
                    style={
                      isPlaying
                        ? {
                            animationDelay: `${(i % 7) * 0.08}s`,
                            animationDuration: `${0.7 + (i % 5) * 0.08}s`,
                          }
                        : { transform: "scaleY(0.15)" }
                    }
                  />
                ))}
              </div>
              {duration > 0 && (
                <span className="shrink-0 text-xs font-medium text-white drop-shadow sm:text-sm">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              )}
            </div>
          )}

          {story.audio && (
            <audio
              ref={audioRef}
              src={story.audio}
              preload="metadata"
              onEnded={(e) => {
                setIsPlaying(false);
                e.currentTarget.currentTime = 0;
                setCurrentTime(0);
              }}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
              onDurationChange={(e) => setDuration(e.currentTarget.duration)}
              onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
              className="hidden"
            />
          )}
        </div>
        <div className="flex flex-1 flex-col justify-center bg-[#BFBC80] px-6 py-6 sm:px-7">
          <h3 className="text-2xl text-center leading-[110%] font-semibold tracking-[-0.04em] text-black md:text-[40px]">
            {story.title}
          </h3>
        </div>
      </button>
    </motion.article>
  );
}
