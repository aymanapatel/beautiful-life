import { BackgroundLines } from "@/components/ui/background-lines";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBrandX, IconFaceMask, IconGift, IconHome } from "@tabler/icons-react";
import Image from "next/image";


export default function Home() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "dashboard",
    },
 
    {
      title: "Products",
      icon: (
        <IconFaceMask className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Components",
      icon: (
        <IconGift className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Aceternity UI",
      icon: (
        <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
      ),
      href: "#",
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-elliot">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 bg-elliot">
        <h2 className="text-alderson bg-clip-text text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Sanjana Airlines, <br /> Ayman 
        </h2>
        <p className="text-banks max-w-xl mx-auto text-sm md:text-lg dark:text-neutral-400 text-center">
          Get the best advices from our experts, including expert artists,
          painters, marathon enthusiasts and RDX, totally free.
        </p>
      </BackgroundLines>
      {/* <h1 className="text-ayman"></h1> */}

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <FloatingDock
            mobileClassName="translate-y-20" // only for demo, remove for production
            items={links}
          />
      </footer>
      </>
    // </div>
  );
}
