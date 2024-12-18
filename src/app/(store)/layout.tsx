import type { Metadata } from "next";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/layout/Header";
import { SanityLive } from "@/sanity/lib/live";

export const metadata: Metadata = {
 title: "Eccommerce website",
 description: "Generated by create next app",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <ClerkProvider dynamic>
   <html lang="en">
    <body>
     <main>
      <Header />
      <SanityLive />
      {children}
     </main>
    </body>
   </html>
  </ClerkProvider>
 );
}
