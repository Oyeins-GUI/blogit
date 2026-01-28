import { PencilSquareIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export function BlogitLogo() {
   return (
      <Link href="/" className="flex items-center gap-2 group">
         <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
            <PencilSquareIcon className="size-5 text-primary" />
         </div>
         <span className="font-serif text-xl font-semibold text-foreground">
            blogit
         </span>
      </Link>
   );
}
