import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { LiveChat } from "@/components/live-chat";
import { NewsletterPopup } from "@/components/newsletter-popup";
import { ScrollToTop } from "@/components/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Havcon Infrastructures - Engineered to Perform, Constructed to Last",
  description:
    "Professional engineers and contractors.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <LiveChat />
        <ScrollToTop />
      </body>
    </html>
  );
}
