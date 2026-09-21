import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { stories, formatLabel } from "@/data/stories";

export default async function StoryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = stories.find((item) => item.slug === slug);

  if (!story) notFound();

  const latestStories = stories
    .filter((item) => item.slug !== story.slug)
    .slice(0, 3);

  return (
    <main className="pb-20  text-[#202845]  lg:pb-28">
      {/* Banner */}
      <div className="mx-auto bg-[#BFBC80] py-16 max-w-screen-2xl px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[32px]  sm:aspect-[16/7] sm:rounded-[48px]">
          <Image
            src={story.image}
            alt={story.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1152px"
          />
          {story.bannerCaption ? (
            <span className="absolute bottom-3 left-4 font-google-sans text-[11px] text-white/80 sm:bottom-4 sm:left-6 sm:text-xs">
              {story.bannerCaption}
            </span>
          ) : null}
        </div>
      </div>

      <article className="mx-auto w-full max-w-4xl px-5 pt-9 sm:px-8 sm:pt-12">
        <p className="text-lg leading-[24px] font-bold text-[#676E55] sm:leading-[32px] sm:text-2xl">
          {formatLabel[story.format]}
        </p>
        <h1 className="mt-1 text-3xl font-bold sm:leading-[40px] sm:text-4xl lg:leading-[56px] lg:text-5xl">
          {story.title}
        </h1>
        {story.author && (
          <p className="mt-2 text-base text-[#535a6d] sm:text-lg">
            By {story.author}
          </p>
        )}

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#535a6d] sm:text-base">
          <button
            type="button"
            className="inline-flex items-center gap-2 text-xl font-semibold hover:text-[#7f9462]"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="size-4 fill-current"
            >
              <path d="M18 8.5a3.5 3.5 0 0 0-2.69 5.74l-5.37 3.13a3.5 3.5 0 1 0 .75 1.3l5.37-3.13a3.5 3.5 0 1 0-1.06-1.79L9.63 10.6A3.5 3.5 0 1 0 8.88 12l5.37 3.13A3.48 3.48 0 0 0 15.5 12 3.5 3.5 0 0 0 18 8.5Z" />
            </svg>
            Share
          </button>
          {story.date && (
            <time className="text-xl text-[#222640]">{story.date}</time>
          )}
        </div>

        <div className="relative mt-7 aspect-[16/10] overflow-hidden rounded-xl bg-[#e9e9e9] sm:mt-9 sm:rounded-2xl">
          <Image
            src={story.image}
            alt={story.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        <div className="mt-7 space-y-5 text-base leading-[1.62] text-[#303750] sm:mt-9 sm:text-lg">
          {story.body.map((paragraph, index) => {
            if (paragraph === "• • •") {
              return (
                <p
                  key={index}
                  aria-hidden="true"
                  className="text-center tracking-[0.3em] text-[#8b8f9a]"
                >
                  {paragraph}
                </p>
              );
            }
            if (paragraph.startsWith("## ")) {
              return (
                <h2
                  key={index}
                  className="pt-2 text-xl font-bold text-[#202845] sm:text-2xl"
                >
                  {paragraph.slice(3)}
                </h2>
              );
            }
            return (
              <p key={index} className="whitespace-pre-line">
                {paragraph}
              </p>
            );
          })}
        </div>
      </article>

      <section
        aria-labelledby="latest-stories"
        className="mx-auto mt-20 w-full max-w-6xl px-5 sm:mt-28 sm:px-8"
      >
        <h2
          id="latest-stories"
          className="inline-block rounded-xl bg-[#e3f7b5] px-5 py-2 text-3xl font-bold tracking-[-0.04em] text-black sm:text-4xl"
        >
          Latest Stories
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {latestStories.map((item) => (
            <Link
              key={item.slug}
              href={`/stories-on-home/${item.slug}`}
              className="group block outline-offset-4 focus-visible:outline-2 focus-visible:outline-[#202845]"
            >
              <div className="relative aspect-[1.45/1] overflow-hidden rounded-xl bg-[#e9e9e9]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="mt-3 text-base font-bold leading-tight text-black sm:text-lg">
                {item.title}
              </h3>
              {item.date && (
                <p className="mt-1 text-sm text-black/65">{item.date}</p>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* <section
        aria-labelledby="comment-title"
        className="mx-auto mt-20 w-full max-w-3xl border-t border-[#d8dbe1] px-5 pt-8 sm:mt-28 sm:px-8"
      >
        <h2 id="comment-title" className="text-xl font-bold">
          Add a comment
        </h2>
        <form className="mt-7 space-y-5">
          <Field label="Name" name="name" />
          <Field label="E-mail" name="email" type="email" />
          <Field label="Comment" name="comment" textarea />
          <button
            type="submit"
            className="rounded-lg bg-[#b4c598] px-5 py-2.5 font-bold text-black transition hover:bg-[#9eaf83] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Post
          </button>
        </form>
      </section> */}
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
}) {
  return (
    <label className="block text-sm font-medium sm:text-base">
      {label}
      {textarea ? (
        <textarea
          name={name}
          rows={7}
          className="mt-2 block w-full resize-y rounded-xl border-0 bg-[#f4f4f5] px-4 py-3 text-black outline-none ring-1 ring-transparent transition focus:ring-[#b4c598]"
        />
      ) : (
        <input
          name={name}
          type={type}
          className="mt-2 block w-full rounded-xl border-0 bg-[#f4f4f5] px-4 py-3 text-black outline-none ring-1 ring-transparent transition focus:ring-[#b4c598]"
        />
      )}
    </label>
  );
}
