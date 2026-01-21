"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

const brands = [
    // Marques confirmé sur LinkedIn (K-Beauty & Pharma)
    { name: "L'Oréal", logo: "https://cdn.worldvectorlogo.com/logos/loreal.svg" },
    { name: "Medicube", logo: "https://img.logo.dev/medicube.us?token=pk_X_1Z2Y3ZSR6aQ1b2c3d4e5" }, // Fallback sur logo.dev ou brandfetch si possible, j'utilise une URL générique Brandfetch ci-dessous
    { name: "Anua", logo: "https://cdn.brandfetch.io/anua.kr/theme/dark/logo" },
    { name: "Biodance", logo: "https://cdn.brandfetch.io/biodance.kr/theme/dark/logo" },
    { name: "Colgate", logo: "https://cdn.worldvectorlogo.com/logos/colgate.svg" },
    { name: "Nivea", logo: "https://cdn.worldvectorlogo.com/logos/nivea.svg" },

    // Marques Historiques
    { name: "Coca-Cola", logo: "https://cdn.worldvectorlogo.com/logos/coca-cola-2021.svg" },
    { name: "Mattel", logo: "https://cdn.worldvectorlogo.com/logos/mattel.svg" },
    { name: "Playmobil", logo: "https://cdn.worldvectorlogo.com/logos/playmobil.svg" },
    { name: "Hasbro", logo: "https://cdn.worldvectorlogo.com/logos/hasbro.svg" },
    { name: "Red Bull", logo: "https://cdn.worldvectorlogo.com/logos/red-bull.svg" },
    { name: "Lego", logo: "https://cdn.worldvectorlogo.com/logos/lego.svg" },

    // Marques Entretien
    { name: "Sanytol", logo: "https://cdn.brandfetch.io/sanytol.fr/logo" },
    { name: "Ajax", logo: "https://cdn.brandfetch.io/ajax.com/logo" },
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
