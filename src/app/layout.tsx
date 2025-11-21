import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "RevvMaxx_Media — Automotive Digital Marketing Agency",
  description: "Bold creativity & performance-driven digital marketing for automotive brands. Pune-based agency specializing in Instagram-first content, Meta ads, and creator partnerships.",
  keywords: ["digital marketing", "automotive marketing", "social media management", "Instagram marketing", "Meta ads", "Pune", "content creation", "influencer marketing"],
  authors: [{ name: "RevvMaxx_Media" }],
  openGraph: {
    title: "RevvMaxx_Media — Automotive Digital Marketing Agency",
    description: "Bold creativity & performance-driven digital marketing for automotive brands.",
    url: "https://revvmaxx-media.vercel.app",
    siteName: "RevvMaxx_Media",
    images: [
      {
        url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6acef080-08e1-4d14-9586-130b7ac071a0/generated_images/revvmaxx-media-brand-logo-design-with-vi-b46fc7cc-20251119151227.jpg",
        width: 1200,
        height: 630,
        alt: "RevvMaxx_Media - Automotive Digital Marketing Agency",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RevvMaxx_Media — Automotive Digital Marketing Agency",
    description: "Bold creativity & performance-driven digital marketing for automotive brands.",
    images: ["https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6acef080-08e1-4d14-9586-130b7ac071a0/generated_images/revvmaxx-media-brand-logo-design-with-vi-b46fc7cc-20251119151227.jpg"],
  },
  icons: {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6acef080-08e1-4d14-9586-130b7ac071a0/generated_images/simple-professional-favicon-icon-for-rev-1336d1ab-20251121064446.jpg",
    apple: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/6acef080-08e1-4d14-9586-130b7ac071a0/generated_images/simple-professional-favicon-icon-for-rev-1336d1ab-20251121064446.jpg",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
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
    <html lang="en">
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}