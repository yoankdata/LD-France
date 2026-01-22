"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const categories = [
    {
        title: "Hygiène & Entretien",
        description: "Sanytol, Colgate, Ajax et grandes marques.",
        image: "/images/categories/hygiene.jpg",
        link: "#",
        size: "md:col-span-2 lg:col-span-2"
    },
    {
        title: "K-Beauty",
        description: "Soins coréens innovants.",
        image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?q=80&w=800",
        link: "#",
        size: "md:col-span-1 lg:col-span-1"
    },
    {
        title: "Alimentaire & Boissons",
        description: "FMCG et produits tendance.",
        image: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?q=80&w=800",
        link: "#",
        size: "md:col-span-1 lg:col-span-1"
    },
    {
        title: "Jouets & Lifestyle",
        description: "Grandes marques et nouveautés.",
        image: "/images/categories/toys.jpg",
        link: "#",
        size: "md:col-span-2 lg:col-span-2"
    }
];

export function CategoryGrid() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <h2 className="text-3xl font-bold tracking-tighter text-slate-900">
                        Explorer par <span className="text-slate-400">Catégorie</span>
                    </h2>
                    <p className="text-sm text-slate-500 font-medium">Flux de stock mis à jour quotidiennement</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat, i) => (
                        <div
                            key={i}
                            className={`group relative overflow-hidden bg-slate-100 min-h-[300px] md:min-h-[400px] flex flex-col justify-end p-6 md:p-8 ${cat.size}`}
                        >
                            {/* Image de fond avec overlay progressif */}
                            <Image
                                src={cat.image}
                                alt={cat.title}
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                            {/* Contenu */}
                            <div className="relative z-10 space-y-2">
                                <h3 className="text-2xl font-bold text-white tracking-tight">{cat.title}</h3>
                                <p className="text-white/70 text-sm max-w-[250px]">{cat.description}</p>
                                <div className="pt-4 overflow-hidden">
                                    <a href={cat.link} className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest group/btn">
                                        Voir le catalogue
                                        <ArrowRight className="w-4 h-4 translate-x-0 group-hover/btn:translate-x-2 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}