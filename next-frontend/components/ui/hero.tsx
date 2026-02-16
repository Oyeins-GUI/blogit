import Image from "next/image";
import heroImg from "@/public/images/hero-bg.webp";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { Stats } from "./stats";
import { Cta } from "./cta";

export function Hero() {
   return (
      <section className="relative min-h-dvh flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 z-0">
            <Image
               src={heroImg}
               alt="hero image"
               fill
               className="object-cover"
               priority
               quality={75}
            />

            <div className="absolute inset-0 bg-linear-to-b from-background via-background/60 to-background" />
            <div className="absolute inset-0 bg-linear-to-r from-background/80 via-transparent to-background/80" />
         </div>

         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-90" />
         <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/15 rounded-full blur-2xl opacity-90" />

         <div className="relative z-10 mx-auto max-w-5xl px-6 py-32 text-center lg:px-8 lg:py-40">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary backdrop-blur-sm">
               <SparklesIcon className="h-4 w-4" />
               <span>Where Stories Come to Life</span>
            </div>

            <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
               <span className="block text-balance">Unleash Your</span>
               <span className="block mt-2 bg-linear-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                  Creative Voice
               </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-secondary-foreground sm:text-xl">
               Join a global community of writers and storytellers. Transform
               your ideas into beautifully crafted stories that inspire,
               connect, and resonate with readers everywhere.
            </p>

            <Cta />

            <Stats />
         </div>
      </section>
   );
}
