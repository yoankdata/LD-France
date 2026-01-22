import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
});

export const viewport: Viewport = {
    themeColor: "#FFFFFF",
    width: "device-width",
    initialScale: 1,
};

export const metadata: Metadata = {
    title: {
        default: "LD FRANCE | Grossiste B2B Hygiène & K-Beauty",
        template: "%s | LD FRANCE"
    },
    description: "Grossiste B2B basé en France : hygiène, cosmétique, K-Beauty et FMCG. Distribution professionnelle avec stock en Île-de-France. Expédition 24/48h.",
    keywords: ["grossiste", "B2B", "logistique", "K-Beauty", "hygiène", "cosmétique", "FMCG", "distribution", "France", "LD France"],
    authors: [{ name: "LD France Distribution" }],
    robots: { index: true, follow: true },
    metadataBase: new URL("https://ldfranceimport.com"),
    openGraph: {
        type: "website",
        locale: "fr_FR",
        siteName: "LD France Distribution",
        title: "LD FRANCE | Grossiste B2B Hygiène & K-Beauty",
        description: "Grossiste B2B basé en France : hygiène, cosmétique, K-Beauty et FMCG. Distribution professionnelle.",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "LD France - Grossiste B2B",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "LD FRANCE | Grossiste B2B Hygiène & K-Beauty",
        description: "Grossiste B2B basé en France : hygiène, cosmétique, K-Beauty et FMCG.",
        images: ["/og-image.png"],
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr" className="scroll-smooth antialiased">
            <body className={cn(
                fontSans.variable,
                "min-h-screen bg-background text-foreground selection:bg-[#25D366] selection:text-white font-sans"
            )}>
                <a href="#main-content" className="sr-only focus:not-sr-only">Passer au contenu</a>
                {children}
            </body>
        </html>
    );
}