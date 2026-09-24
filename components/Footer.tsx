import Image from "next/image";

const partners = [
  {
    src: "/assets/footer/Logo-AJAR.png",
    alt: "British Council",
    width: 82,
    height: 26,
  },
  {
    src: "/assets/footer/Logo-CRRIC.png",
    alt: "Partner 2",
    width: 95,
    height: 44,
  },
  {
    src: "/assets/footer/Logo-Kait.png",
    alt: "Partner 3",
    width: 75,
    height: 44,
  },
  {
    src: "/assets/footer/Logo-SEAHRN.png",
    alt: "Partner 4",
    width: 95,
    height: 44,
  },
  {
    src: "/assets/footer/Roemah Inspirit_Horizontal_Full Color.png",
    alt: "Partner 5",
    width: 95,
    height: 44,
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#676E55]">
      <div className="mx-auto flex min-h-16.5 max-w-screen-2xl flex-col items-center justify-center gap-3 px-5 py-3 sm:px-8 md:min-h-16.5 md:flex-row md:justify-between md:px-10 lg:px-14 xl:px-16">
        <p className="font-google-sans text-xl font-medium text-[#FBF1D5] md:text-[25px]">
          Organized by :
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 md:flex-nowrap md:justify-end lg:gap-1">
          {partners.map((logo) => (
            <Image
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-8 w-auto object-contain sm:h-10 md:h-16"
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
