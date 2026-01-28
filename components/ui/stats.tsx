export function Stats() {
   return (
      <div className="mt-16 grid grid-cols-3 gap-8 border-t border-muted-foreground/15 pt-10">
         <div className="text-center">
            <p className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
               50K+
            </p>
            <p className="mt-1 text-sm text-muted-foreground">Active Writers</p>
         </div>
         <div className="text-center">
            <p className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
               1M+
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
               Stories Published
            </p>
         </div>
         <div className="text-center">
            <p className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
               10M+
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
               Monthly Readers
            </p>
         </div>
      </div>
   );
}
