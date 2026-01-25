import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
   return (
      <button
         {...rest}
         className={clsx(
            "flex h-10 items-center bg-foreground px-4 text-sm font-medium text-white transition-colors hover:bg-foreground/95 focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-foreground/90 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 cursor-pointer",
            className,
         )}
      >
         {children}
      </button>
   );
}
