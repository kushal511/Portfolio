import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kushal Adhyaru - AI/ML Engineer & Full-Stack Builder",
  description: "AI/ML Engineer focused on GenAI, RAG, recommenders, and full-stack systems. Building intelligent products end-to-end.",
  keywords: ["AI", "Machine Learning", "GenAI", "RAG", "Full-Stack", "Software Engineer"],
  authors: [{ name: "Kushal Adhyaru" }],
  creator: "Kushal Adhyaru",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kushal-adhyaru.com",
    title: "Kushal Adhyaru - AI/ML Engineer",
    description: "Building AI-powered products end-to-end",
    siteName: "Kushal Adhyaru Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kushal Adhyaru - AI/ML Engineer",
    description: "Building AI-powered products end-to-end",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen flex flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
