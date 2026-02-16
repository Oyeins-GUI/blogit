import {
   ArrowTrendingUpIcon,
   SparklesIcon,
   UsersIcon,
} from "@heroicons/react/24/solid";

const features = [
   {
      icon: SparklesIcon,
      title: "Creative Freedom",
      description:
         "Express your ideas without limitations and explore your creativity through meaningful stories, fresh perspectives, and authentic self-expression.",
   },
   {
      icon: UsersIcon,
      title: "Community Support",
      description:
         "Join a global community of creative minds and storytellers. Share your thoughts, ideas, and experiences, connect with readers everywhere, and turn your words into beautifully crafted blog posts that inspire conversation.",
   },
   {
      icon: ArrowTrendingUpIcon,
      title: "Professional Growth",
      description:
         "Enhance your skills and build a professional portfolio that highlights your knowledge, creativity, and commitment to continuous growth.",
   },
];

export function WhyChooseUs() {
   return (
      <section className="max-w-6xl mx-auto mb-10 px-4 lg:px-0 bg-background">
         <div className="flex items-center gap-4">
            <span className="w-full border-t border-t-muted-foreground/20" />
            <p className="uppercase font-bold text-sm text-muted-foreground min-w-max">
               why choose us
            </p>
            <span className="w-full border-t border-t-muted-foreground/20" />
         </div>
         <h2 className="text-balance text-center mx-auto mt-4 font-serif max-w-2xl text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Dedicated to Creativity, Culture & Growth.
         </h2>
         <div className="grid gap-0 lg:grid-cols-3 lg:gap-8">
            {features.map((feature, index) => {
               return (
                  <div
                     key={feature.title}
                     className="group relative overflow-hidden rounded-2xl border border-muted-foreground/30 bg-primary-foreground p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_40px_rgba(0,200,255,0.08)] md:p-10 mt-10"
                  >
                     <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110">
                        <feature.icon className="size-6" />
                     </div>

                     <h3 className="mb-4 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                        {feature.title}
                     </h3>
                     <p className="leading-relaxed text-muted-foreground">
                        {feature.description}
                     </p>

                     <span className="absolute -bottom-7 -right-2 font-serif text-[120px] font-bold leading-none text-primary/6 transition-all duration-300 group-hover:text-primary/10">
                        {String(index + 1).padStart(2, "0")}
                     </span>
                  </div>
               );
            })}
         </div>
      </section>
   );
}
