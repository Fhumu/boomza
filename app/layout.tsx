import type { Metadata, Viewport } from "next";
import {
  Fredoka,
  Nunito,
} from "next/font/google";

import BoomzaFooter from "@/components/site/boomza-footer";
import BoomzaHeader from "@/components/site/boomza-header";

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

const siteUrl = "https://boomza.co.za";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Boomza | Little Adventures. Big Imagination.",
    template: "%s | Boomza",
  },

  description:
    "Step into Boomza's world of children's stories, colouring pages, playful activities and little adventures made for big imaginations.",

  applicationName: "Boomza",

  keywords: [
    "Boomza",
    "Boomza stories",
    "children's stories",
    "kids stories",
    "colouring pages",
    "kids colouring pages",
    "kids activities",
    "children's activities",
    "children's books",
    "colouring books",
    "preschool activities",
    "South Africa",
  ],

  authors: [
    {
      name: "Boomza",
    },
  ],

  creator: "Boomza",
  publisher: "Boomza",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],

    shortcut: "/favicon-32x32.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: siteUrl,
    siteName: "Boomza",
    title: "Boomza | Little Adventures. Big Imagination.",
    description:
      "Stories, colouring, play and little adventures made for big imaginations.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Boomza | Little Adventures. Big Imagination.",
    description:
      "Stories, colouring, play and little adventures made for big imaginations.",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "children",

  other: {
    "geo.region": "ZA",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fff9ed",
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
      <body>
        <BoomzaHeader />

        {children}

        <BoomzaFooter />
      </body>
    </html>
  );
}
