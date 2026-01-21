"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const brands = [
    // K-Beauty & Cosmétiques
    { name: "L'Oréal", logo: "https://cdn.worldvectorlogo.com/logos/loreal.svg" },
    { name: "Nivea", logo: "https://cdn.worldvectorlogo.com/logos/nivea.svg" },
    { name: "Colgate", logo: "https://cdn.worldvectorlogo.com/logos/colgate.svg" },

    // K-Beauty (logos simplifiés en texte si CDN échoue)
    { name: "Anua", logo: "https://logo.clearbit.com/anua.kr" },
    { name: "Biodance", logo: "https://logo.clearbit.com/biodance.kr" },

    // FMCG & Boissons
    { name: "Coca-Cola", logo: "https://cdn.worldvectorlogo.com/logos/coca-cola-2021.svg" },
    { name: "Red Bull", logo: "https://cdn.worldvectorlogo.com/logos/red-bull.svg" },

    // Jouets
    { name: "Lego", logo: "https://cdn.worldvectorlogo.com/logos/lego.svg" },
    { name: "Mattel", logo: "https://cdn.worldvectorlogo.com/logos/mattel.svg" },
    { name: "Playmobil", logo: "https://cdn.worldvectorlogo.com/logos/playmobil.svg" },
    { name: "Hasbro", logo: "https://cdn.worldvectorlogo.com/logos/hasbro.svg" },

    // Entretien (logos fiables)
    { name: "Ajax", logo: "https://cdn.worldvectorlogo.com/logos/ajax-1.svg" },
];

export function BrandStrip() {
    return (
        <section className="py-12 bg-white border-y border-zinc-100">
            <div className="container mx-auto px-4 mb-8 text-center">
                <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider">
                    Marques Distribuées
                </p>
            </div>
            <Marquee gradient={true} speed={40} className="overflow-hidden">
                <div className="flex items-center gap-16 px-8">
                    {brands.map((brand, i) => (
                        <div key={i} className="relative h-16 w-32 md:w-40 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-pointer flex items-center justify-center">
                            {/* Utilisation d'un fallback visuel si l'image casse via onError (non implémenté ici en SSR, mais URL brandfetch assez stable) */}
                            <Image
                                src={brand.logo}
                                alt={brand.name}
                                fill
                                className="object-contain"
                                unoptimized
                            />
                        </div>
                    ))}
                </div>
            </Marquee>
        </section>
    );
}
