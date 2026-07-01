import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { siteUrl } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Altter Keshav | AI Marketing Expert & Consultant",
    template: "%s | Altter Keshav",
  },
  description:
    "Premium AI marketing consulting for automation, lead generation, customer journeys, and scalable growth systems.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Altter Keshav | AI Marketing Expert & Consultant",
    description:
      "Helping businesses leverage artificial intelligence to automate marketing, generate leads, and scale faster.",
    url: siteUrl,
    siteName: "Altter Keshav",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Altter Keshav | AI Marketing Expert & Consultant",
    description: "AI-powered marketing strategy, automation, and consulting.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-white text-[#111827] antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
