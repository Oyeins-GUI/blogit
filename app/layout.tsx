import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/ui/navbar";

export const metadata: Metadata = {
   title: "Blog It",
   description: "Share your story with the world",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className="relative min-h-dvh">
            <Navbar />
            <main>{children}</main>
         </body>
      </html>
   );
}
