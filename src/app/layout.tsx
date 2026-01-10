import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "GIDS-MARTZ Industrial Suppliers | Electrical Equipment Zimbabwe",
    template: "%s | GIDS-MARTZ",
  },
  description:
    "Zimbabwe's trusted supplier of industrial electrical equipment, switchgear, automation, and mining supplies. Serving Bulawayo, Harare & SADC region since 1997. Quality products from Siemens, ABB, Schneider & more.",
  keywords: [
    "electrical suppliers zimbabwe",
    "industrial equipment bulawayo",
    "switchgear harare",
    "mining equipment",
    "VFD drives",
    "contactors zimbabwe",
    "electrical wholesaler",
    "GIDS-MARTZ",
    "siemens zimbabwe",
    "ABB zimbabwe",
    "schneider zimbabwe",
  ],
  authors: [{ name: "GIDS-MARTZ Industrial Suppliers" }],
  creator: "GIDS-MARTZ Industrial Suppliers (Pvt) Ltd",
  publisher: "GIDS-MARTZ Industrial Suppliers (Pvt) Ltd",
  metadataBase: new URL("https://www.gidsmartz.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: "https://www.gidsmartz.com",
    siteName: "GIDS-MARTZ Industrial Suppliers",
    title: "GIDS-MARTZ Industrial Suppliers | Electrical Equipment Zimbabwe",
    description:
      "Zimbabwe's trusted supplier of industrial electrical equipment, switchgear, automation, and mining supplies since 1997.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GIDS-MARTZ Industrial Suppliers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GIDS-MARTZ Industrial Suppliers | Electrical Equipment Zimbabwe",
    description:
      "Zimbabwe's trusted supplier of industrial electrical equipment since 1997.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: 'verification_code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
