import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kiaanai.com"),
  title: {
    default: "Kiaan AI - Innovating the Future",
    template: "%s | Kiaan AI",
  },
  description: "Premier AI solutions and services. Transforming businesses with cutting-edge artificial intelligence.",
  keywords: ["AI", "Artificial Intelligence", "Machine Learning", "Software Development", "Kiaan AI", "Tech Solutions", "Automation"],
  authors: [{ name: "Kiaan AI Team" }],
  creator: "Mohammad Areeb Ansari",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.kiaanai.com",
    title: "Kiaan AI - Innovating the Future",
    description: "Premier AI solutions and services. Transforming businesses with cutting-edge artificial intelligence.",
    siteName: "Kiaan AI",
    images: [
      {
        url: "/thumbnail.png", // We should ensure this image exists or use a placeholder
        width: 1200,
        height: 630,
        alt: "Kiaan AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiaan AI - Innovating the Future",
    description: "Premier AI solutions and services. Transforming businesses with cutting-edge artificial intelligence.",
    images: ["/thumbnail.png"], // We should ensure this image exists or use a placeholder
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
