import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ThemeLanguageProvider } from "@/components/layout/theme-language-provider";
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
  keywords: [
    "AI marketing consultant",
    "marketing automation Nepal",
    "AI lead generation",
    "Altter Keshav",
    "AI consulting Kathmandu",
  ],
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
        <ThemeLanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeLanguageProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Altter Keshav",
              description: "AI marketing consulting, automation, lead generation, and growth systems.",
              email: "info@altterkeshav.com",
              telephone: "9851121734",
              areaServed: "Nepal",
              url: siteUrl,
            }),
          }}
        />
      </body>
    </html>
  );
}
