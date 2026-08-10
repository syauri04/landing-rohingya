import Link from "next/link";

type HeaderProps = {
  leftText?: string;
  rightText?: string;
};

export default function Header({
  leftText = "Rohingya Storytelling Fellowship",
  rightText = "Stories on Home",
}: HeaderProps) {
  return (
    <header className="h-20 bg-[#676E55] z-20">
      <div className="mx-auto flex h-full max-w-screen-2xl justify-between px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16 z-20">
        <Link
          href="/"
          className="flex items-center px-6 font-google-sans text-base font-semibold text-white transition-colors duration-200 hover:bg-[#FFA800] md:text-lg"
        >
          {leftText}
        </Link>

        <Link
          href="/stories-on-home"
          className="flex items-center px-6 font-google-sans text-base font-semibold text-white transition-colors duration-200 hover:bg-[#FFA800] md:text-lg"
        >
          {rightText}
        </Link>
      </div>
    </header>
  );
}
