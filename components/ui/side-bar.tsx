"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { MobileNavLinks } from "./nav-links";
import { Button } from "./button";

export function Sidebar({ setIsOpen }: { setIsOpen: (open: boolean) => void }) {
   return (
      <div className="absolute inset-0 w-full min-h-dvh bg-primary-foreground/80">
         <div className="w-xs ml-auto bg-primary-foreground h-full">
            <div className="flex flex-col gap-8 pt-6 h-full">
               <div>
                  <XMarkIcon
                     className="size-5 ml-auto mr-4 mb-2 text-foreground"
                     onClick={() => setIsOpen(false)}
                  />
                  <MobileNavLinks />
               </div>

               <div className="flex flex-col gap-3 px-4 py-4 border-t border-muted-foreground/30">
                  <Button className="items-center justify-center bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground border border-muted-foreground/30 rounded-lg">
                     Sign In
                  </Button>
                  <Button className="items-center justify-center bg-primary text-primary-foreground rounded-lg">
                     Start Writing
                  </Button>
               </div>
            </div>
         </div>
      </div>
   );
}
