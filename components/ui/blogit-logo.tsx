import { PencilSquareIcon } from "@heroicons/react/24/solid";

export function BlogitLogo() {
   return (
      <div className="flex items-center gap-1">
         <PencilSquareIcon className="size-6" />
         <p className="text-lg font-bold">blogit</p>
      </div>
   );
}
