import Link from "next/link";

const navLinks = [
   { href: "#", label: "Home" },
   { href: "#blog", label: "Blog" },
   { href: "#features", label: "Features" },
   { href: "#community", label: "Community" },
];

export function NavLinks() {
   return (
      <div className="hidden items-center gap-1 lg:flex">
         {navLinks.map((link) => (
            <Link
               key={link.label}
               href={link.href}
               className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
            >
               {link.label}
            </Link>
         ))}
      </div>
   );
}

export function MobileNavLinks() {
   return (
      <div className="flex flex-col gap-1">
         {navLinks.map((link) => (
            <Link
               key={link.label}
               href={link.href}
               className="px-4 py-3 text-base text-muted-foreground hover:text-foreground hover:bg-secondary/80 rounded-lg transition-colors"
            >
               {link.label}
            </Link>
         ))}
      </div>
   );
}
