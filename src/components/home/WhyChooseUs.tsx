"use client";

import { ShieldCheck, Truck, LayoutGrid, ArrowUpRight, CheckCircle2 } from "lucide-react";

const features = [
    {
        id: "01",
        icon: LayoutGrid,
        title: "Catalogue Multi-Catégories",
        description: "Une profondeur de gamme unique : Hygiène, K-Beauty, Cosmétique et FMCG. Nous centralisons vos besoins auprès des plus grandes marques mondiales.",
        className: "lg:col-span-2", // Prend plus de place pour l'équilibre visuel
        tags: ["Hygiène", "K-Beauty", "FMCG"]
    },
    {
        id: "02",
        icon: Truck,
        title: "Logistique Intégrée",
        description: "Stock localisé en Île-de-France. Nous maîtrisons l'intégralité du flux, de la réception à l'expédition finale.",
        className: "lg:col-span-1",
        label: "Expédition 24/48h"
    },
    {
        id: "03",
        icon: ShieldCheck,
        title: "Engagement & Conformité",
        description: "Traçabilité totale et respect rigoureux des normes européennes. Une relation basée sur la transparence contractuelle.",
        className: "lg:col-span-3", // Barre horizontale basse pour fermer la grille
        stats: "98% de taux de service"
    },
];

export function WhyChooseUs() {
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-4 md:px-8">

                {/* En-tête de section minimaliste */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
                    <div className="max-w-2xl">
                        <span className="text-[11px] font-bold tracking-[0.3em] text-blue-600 uppercase mb-4 block">
                            Expertise Grossiste
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tighter">
                            L'excellence opérationnelle <br />
                            <span className="text-slate-400">au service de votre commerce.</span>
                        </h2>
                    </div>
                    <p className="text-slate-500 max-w-sm text-sm leading-relaxed border-l border-slate-100 pl-6">
                        Nous ne nous contentons pas de livrer des produits. Nous bâtissons l'infrastructure qui soutient votre croissance quotidienne.
                    </p>
                </div>

                {/* Grille Bento */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className={`group relative bg-slate-50/50 border border-slate-100 p-6 md:p-10 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 ease-in-out ${feature.className}`}
                        >
                            <div className="flex justify-between items-start mb-12">
                                <div className="p-3 bg-white shadow-sm rounded-none border border-slate-100 group-hover:border-blue-200 transition-colors">
                                    <feature.icon className="h-6 w-6 text-slate-900 group-hover:text-blue-600 transition-colors" />
                                </div>
                                <span className="text-[10px] font-mono text-slate-300 font-bold">{feature.id}</span>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                    {feature.title}
                                    <ArrowUpRight className="w-4 h-4 text-slate-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed max-w-md">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Éléments visuels spécifiques aux cartes (Micro-données) */}
                            <div className="mt-8 pt-8 border-t border-slate-100/50 flex flex-wrap gap-2">
                                {feature.tags && feature.tags.map(tag => (
                                    <span key={tag} className="text-[9px] font-bold uppercase tracking-widest px-2 py-1 bg-white border border-slate-100 text-slate-400">
                                        {tag}
                                    </span>
                                ))}
                                {feature.label && (
                                    <div className="flex items-center gap-2 text-[10px] font-bold text-blue-600 uppercase">
                                        <CheckCircle2 className="w-3 h-3" /> {feature.label}
                                    </div>
                                )}
                                {feature.stats && (
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">
                                        — {feature.stats}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}