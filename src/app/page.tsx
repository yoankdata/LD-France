import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { BrandStrip } from "@/components/home/BrandStrip";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Footer } from "@/components/layout/Footer";
import { CTAWhatsApp } from "@/components/home/CTAWhatsApp";

export default function Home() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WholesaleStore",
        "name": "LD France Distribution",
        "image": "https://ldfranceimport.com/logo.png",
        "description": "Grossiste B2B en cosmétiques coréens et produits d'hygiène.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Paris Region",
            "addressCountry": "FR"
        },
        "url": "https://ldfranceimport.com/"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <main id="main-content" className="relative">
                <Hero />
                <BrandStrip />
                <WhyChooseUs />
                <CategoryGrid />
            </main>
            <Footer />
            <CTAWhatsApp />
        </>
    );
}