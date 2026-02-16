import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Button } from "./button";

export function Cta() {
   return (
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
         <Button className="group gap-2 px-8 bg-primary text-primary-foreground rounded-lg">
            Start Writing Free
            <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
         </Button>
         <Button className="px-8 bg-transparent border border-muted-foreground text-foreground rounded-lg hover:bg-primary hover:text-primary-foreground">
            Explore Stories
         </Button>
      </div>
   );
}
