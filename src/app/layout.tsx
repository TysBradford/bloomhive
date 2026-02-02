import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MooHive — Where AI video creators thrive",
  description: "Discover, share, and connect with the pioneers shaping AI video. Browse portfolios, explore techniques, and join the community.",
  openGraph: {
    title: "MooHive — Where AI video creators thrive",
    description: "Discover, share, and connect with the pioneers shaping AI video.",
    type: "website",
    siteName: "MooHive",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MooHive - Where AI video creators thrive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MooHive — Where AI video creators thrive",
    description: "Discover, share, and connect with the pioneers shaping AI video.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
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
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
