import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

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
        <FloatingWhatsApp
        phoneNumber="+919998154353"
        accountName="Havcon Infrastructures"
        avatar="/ui_avatar.png"
        statusMessage="Available"
      />
        <ScrollToTop />
      </body>
    </html>
  );
}
