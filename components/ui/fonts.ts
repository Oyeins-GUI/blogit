import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";

export const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
export const geist_mono = Geist_Mono({
   subsets: ["latin"],
   variable: "--font-mono",
   weight: ["400", "700"],
});
export const playfair_display = Playfair_Display({
   subsets: ["latin"],
   variable: "--font-serif",
   weight: ["400", "700"],
});
