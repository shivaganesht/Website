import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shiva Ganesh Talikota | AI/ML Engineer & EdTech Innovator",
  description: "Founder & CEO @ matriXO | Building AI-powered solutions and communities that shape the future of education and technology. Specializing in EdTech, AI/ML, and open source innovation.",
  keywords: ["Shiva Ganesh Talikota", "AI", "Machine Learning", "EdTech", "matriXO", "Startup Founder", "Innovation", "Technology"],
  authors: [{ name: "Shiva Ganesh Talikota" }],
  creator: "Shiva Ganesh Talikota",
  publisher: "Shiva Ganesh Talikota",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shivaganesh.dev",
    title: "Shiva Ganesh Talikota | AI/ML Engineer & EdTech Innovator",
    description: "Founder & CEO @ matriXO | Building AI-powered solutions and communities that shape the future of education and technology.",
    siteName: "Shiva Ganesh Talikota Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shiva Ganesh Talikota | AI/ML Engineer & EdTech Innovator",
    description: "Founder & CEO @ matriXO | Building AI-powered solutions and communities.",
    creator: "@shivaganesh22",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-site-verification-id", // Replace with actual verification ID
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
