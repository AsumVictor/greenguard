import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { siteConfig } from "@/config/site"
import { Inter } from "next/font/google"
import { Navbar } from "@/components/navbar"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"
import QueryWrapper from "@/components/wrapper/query-wrapper"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
    "Shadcn UI",
    "Plant Disease Detection",
    "GreenGuard",
  ],
  creator: "Asum Victor",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@iamasum369",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  authors: [
    {
      name: "Asum Victor",
      url: "https://greenguard.tech",
    },
  ],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryWrapper>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            {children}
            <Footer />
            <Toaster />
          </ThemeProvider>
        </QueryWrapper>
      </body>
    </html>
  )
}
