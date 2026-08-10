import type { Metadata } from "next";
import {
  Fredoka,
  Nunito,
} from "next/font/google";

import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://boomza.co.za"),

  title: {
    default: "Boomza | Stories, Colouring, Play & Adventures",
    template: "%s | Boomza",
  },

  description:
    "Step into Boomza's world of stories, colouring, play and little adventures made for big imaginations.",

  applicationName: "Boomza",

  keywords: [
    "Boomza",
    "children's stories",
    "colouring pages",
    "kids activities",
    "children's books",
    "South Africa",
  ],

  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://boomza.co.za",
    siteName: "Boomza",
    title: "Boomza | Little adventures. Big imagination.",
    description:
      "Stories, colouring, play and adventures from Boomza's world.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-ZA"
      className={`${fredoka.variable} ${nunito.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
