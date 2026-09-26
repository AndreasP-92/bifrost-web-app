import type { Metadata } from "next";
import { Cinzel, Cinzel_Decorative, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-display-heavy",
  subsets: ["latin"],
  weight: ["700", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project Bifrost — The Bridge Between Gaming Worlds",
  description:
    "Project Bifrost is one unified gaming ecosystem with one global gaming profile that connects players, games and companies.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cinzelDecorative.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
