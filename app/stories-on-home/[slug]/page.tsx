import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Story = {
  slug: string;
  category: string;
  title: string;
  date: string;
  image: string;
  bannerImage: string;
  bannerCaption?: string;
  excerpt: string;
  body: string[];
};

// Replace this with data from your CMS/database when it is available.
const stories: Story[] = [
  {
    slug: "what-hope-means-to-me",
    category: "Written Stories",
    title: "What Hope Means to Me",
    date: "27 Agustus 2024",
    image: "/assets/carimage-1.png",
    bannerImage: "/assets/detail-hero.png",
    bannerCaption: "Photo credit: Roemah Inspirit",
    excerpt:
      "Pada akhir Februari hingga awal bulan Maret lalu, Roemah Inspirirt bersama dengan dua lembaga dari India Indonesia—PLUS dan KEHATI—mendapat kesempatan pergi ke Cape Town, Afrika Selatan untuk menghadiri pertemuan luring perdana dari inisiatif global Weaving Resilience.",
    body: [
      "Inisiatif ini bertujuan memperkuat dan menghubungkan organisasi serta gerakan masyarakat sipil dari belahan dunia Selatan. Berlandaskan pada tiga pilar dukungan: Institutional Resilience (Ketahanan Lembaga), Strategic Relevance (Relevansi Strategis), dan Holistic Well-Being (Kesejahteraan Holistik), Weaving Resilience mengumpulkan 34 lembaga dari belahan Selatan dunia untuk saling mengenal dan mendalami kerja satu sama lain.",
      "Kesan bahwa pertemuan tidak biasa-biasa saja sudah muncul sejak jam pertama pertemuan ini dilangsungkan. Roemah Inspirirt memimpin proses perkenalan awal menggunakan kartu-kartu pertanyaan yang diceritakan dalam kelompok kecil berisi dua, empat, dan enam orang. Metode perkenalan selanjutnya yang difasilitasi Pretahub dari Brazil menggunakan metode River of Life. Metode ini menarik semua peserta merefleksikan dan berbagi cerita perjalanan hidupnya sebagai aktivis dan perjalanan organisasi dalam merintis inisiatif Weaving Resilience di negara masing-masing.",
    ],
  },
  {
    slug: "merayakan-perempuan-yang-berdiri-di-periferi",
    category: "Written Stories",
    title: "Merayakan Perempuan yang Berdiri di Periferi",
    date: "12 Juni 2026",
    image: "/assets/carimage-2.png",
    bannerImage: "/assets/detail-hero.png",
    excerpt:
      "Cerita tentang perempuan, ruang pinggiran, dan keberanian untuk tetap berdiri.",
    body: ["Artikel ini sedang disiapkan."],
  },
  {
    slug: "tentang-kota-alienasi-dan-menangis-di-transjakarta",
    category: "Written Stories",
    title: "Tentang Kota, Alienasi, dan Menangis di TransJakarta",
    date: "5 Juni 2026",
    image: "/assets/carimage-3.png",
    bannerImage: "/assets/detail-hero.png",
    excerpt:
      "Menyusuri kota dan emosi yang hadir dalam perjalanan sehari-hari.",
    body: ["Artikel ini sedang disiapkan."],
  },
];

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
    <main className="pb-20 pt-10 text-[#202845] sm:pt-16 lg:pb-28">
      {/* Banner */}
      <div className="mx-auto max-w-screen-2xl px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[32px]  sm:aspect-[16/7] sm:rounded-[48px]">
          <Image
            src={story.bannerImage}
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

      <article className="mx-auto w-full max-w-3xl px-5 pt-9 sm:px-8 sm:pt-12">
        <p className="text-lg leading-[24px] font-bold text-[#676E55] sm:leading-[32px] sm:text-2xl">
          {story.category}
        </p>
        <h1 className="mt-1 text-3xl font-bold sm:leading-[40px] sm:text-4xl lg:leading-[56px] lg:text-5xl">
          {story.title}
        </h1>

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
          <time className="text-xl text-[#222640]" dateTime="2024-08-27">
            {story.date}
          </time>
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
          <p>{story.excerpt}</p>
          {story.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
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
              <p className="mt-1 text-sm text-black/65">{item.date}</p>
            </Link>
          ))}
        </div>
      </section>

      <section
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
      </section>
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
