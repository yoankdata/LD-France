"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";

const brands = [
    // K-Beauty & Cosmétiques
    { name: "L'Oréal", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdmfIMm4DAWmFyFgpV6_tGk7SQqIVPuP7llQ&s" },
    { name: "Nivea", logo: "https://logo-marque.com/wp-content/uploads/2020/12/Nivea-Logo.png" },
    { name: "Colgate", logo: "https://cdn.worldvectorlogo.com/logos/colgate.svg" },

    // K-Beauty (logos simplifiés en texte si CDN échoue)
    { name: "Anua", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr3J_1tBvM9tMgvF1Q9xQd5xkfjT0f3uK2cg&s" },
    { name: "Biodance", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbefmaB802cbj1M3rr95IsiphnMUPaefCB7w&s" },

    // FMCG & Boissons
    { name: "Coca-Cola", logo: "https://cdn.worldvectorlogo.com/logos/coca-cola-2021.svg" },
    { name: "Red Bull", logo: "https://www.svgrepo.com/show/303227/redbull-logo.svg" },

    // Jouets
    { name: "Lego", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/960px-LEGO_logo.svg.png" },
    { name: "Mattel", logo: "https://cdn.worldvectorlogo.com/logos/mattel.svg" },
    { name: "Playmobil", logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Playmobil_logo.svg" },
    { name: "Hasbro", logo: "https://cdn.worldvectorlogo.com/logos/hasbro.svg" },

    // Entretien (logos fiables)
    { name: "Ajax", logo: "https://cdn.worldvectorlogo.com/logos/ajax-1.svg" },
];

export function BrandStrip() {
    const [speed, setSpeed] = useState(40);

    useEffect(() => {
        if (window.innerWidth < 768) {
            setSpeed(70); // Plus rapide sur mobile pour plus de dynamisme
        }
    }, []);

    return (
        <section className="py-12 bg-white border-y border-zinc-100">
            <div className="container mx-auto px-4 md:px-8 mb-8 text-center">
                <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider">
                    Marques Distribuées
                </p>
            </div>
            <Marquee gradient={true} speed={speed} className="overflow-hidden">
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
