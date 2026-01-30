import Link from "next/link";
import { BlogitLogo } from "./blogit-logo";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
   return (
      <footer className="mt-24">
         <div className="max-w-6xl mx-auto py-4 text-sm text-gray-500 px-3 lg:px-0 transition-colors">
            <div className="flex flex-col md:flex-row md:justify-between mb-8">
               <div>
                  <BlogitLogo />
                  <p className="lg:max-w-xs mt-2">
                     Blogit is a modern blogging platform where ideas come to
                     life. Share your thoughts, connect with readers, and be
                     part of a vibrant community.
                  </p>
               </div>
               <div className="flex gap-10 lg:gap-20 mt-8">
                  <div className="flex flex-col gap-3">
                     <Link href="/" className="hover:text-muted-foreground/50">
                        Home
                     </Link>
                     <Link
                        href="/blog"
                        className="hover:text-muted-foreground/50"
                     >
                        Blog
                     </Link>
                     <Link
                        href="/features"
                        className="hover:text-muted-foreground/50"
                     >
                        Feature
                     </Link>
                     <Link
                        href="/community"
                        className="hover:text-muted-foreground/50"
                     >
                        Community
                     </Link>
                  </div>
                  <div className="flex flex-col gap-3">
                     <Link
                        href="/privacy-policy"
                        className="hover:text-muted-foreground/50"
                     >
                        Privacy Policy
                     </Link>
                     <Link
                        href="/terms-of-service"
                        className="hover:text-muted-foreground/50"
                     >
                        Terms of Service
                     </Link>
                     <Link
                        href="/contact-us"
                        className="hover:text-muted-foreground/50"
                     >
                        Contact Us
                     </Link>
                  </div>
               </div>
            </div>
            <div className="border-t py-3 flex flex-col md:flex-row justify-between items-center">
               <div className="flex gap-2 transition-colors">
                  <div className="w-6 h-6 rounded-full border flex justify-center items-center p-4 hover:border-muted-foreground/50 ">
                     <Link href="#">
                        <Facebook className="size-4" />
                     </Link>
                  </div>
                  <div className="w-6 h-6 rounded-full border flex justify-center items-center p-4 hover:border-muted-foreground/50">
                     <Link href="#">
                        <Instagram className="size-4" />
                     </Link>
                  </div>
                  <div className="w-6 h-6 rounded-full border flex justify-center items-center p-4 hover:border-muted-foreground/50">
                     <Link href="#">
                        <Twitter className="size-4" />
                     </Link>
                  </div>
                  <div className="w-6 h-6 rounded-full border flex justify-center items-center p-4 hover:border-muted-foreground/50">
                     <Link href="#">
                        <Linkedin className="size-4" />
                     </Link>
                  </div>
               </div>

               <p className="mt-4">
                  &copy; {new Date().getFullYear()} BlogIt. All rights reserved.
               </p>
            </div>
         </div>
      </footer>
   );
}
