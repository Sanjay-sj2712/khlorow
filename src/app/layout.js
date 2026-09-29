import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/components/ThemeRegistry";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Cormorant Garamond — headings (h1–h6)
const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
});

// Plus Jakarta Sans — body, buttons, captions, nav, etc.
const jakarta = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata = {
  title: "Khlorow – Interior & Architecture",
  description:
    "Khlorow is a premium interior design and architecture firm crafting timeless spaces that inspire. Explore our portfolio of residential and commercial projects.",
  keywords: "interior design, architecture, Khlorow, luxury interiors, home design",
  openGraph: {
    title: "Khlorow – Interior & Architecture",
    description: "Crafting timeless spaces that inspire.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body>
        <ThemeRegistry>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
