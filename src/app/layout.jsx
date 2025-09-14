import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://havconinfra.com"), // 👈 non-www preferred
  title: {
    default: "Havcon Infrastructures | Civil & Industrial Construction Experts",
    template: "%s | Havcon Infrastructures",
  },
  description:
    "Havcon Infrastructures specializes in RCC works, industrial sheds, flooring, roads, and turnkey civil projects across India. Delivering quality, safety, and timely completion.",
  keywords: [
    "civil engineering",
    "infrastructure",
    "construction",
    "RCC works",
    "industrial sheds",
    "roads",
    "Havcon Infrastructures",
  ],
  alternates: {
    canonical: "https://havconinfra.com",
  },
  openGraph: {
    title: "Havcon Infrastructures | Civil Engineering & Construction",
    description:
      "Trusted civil engineering company for industrial and residential infrastructure.",
    url: "https://havconinfra.com",
    siteName: "Havcon Infrastructures",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Havcon Infrastructures",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@havconinfra",
    creator: "@havconinfra",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({ children }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Havcon Infrastructures",
    url: "https://havconinfra.com",
    logo: "https://havconinfra.com/logo.png",
    sameAs: [
    ],
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp
        phoneNumber="+919998154353"
        accountName="Havcon Infrastructures"
        avatar="/ui_avatar.png"
        statusMessage="Available"
      />
        <ScrollToTop />

        {/* ✅ Global structured data (JSON-LD) */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
