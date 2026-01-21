"use client";

import Link from "next/link";
import { MessageCircle, Package, Clock, ShieldCheck, MapPin, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative w-full min-h-[70vh] md:min-h-[85vh] bg-white flex flex-col justify-center overflow-hidden pt-32 md:pt-48 pb-16 md:pb-24">

            {/* Arrière-plan épuré - Suppression de la Grid et ajout d'un dégradé radial très subtil */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent"></div>

            <div className="container mx-auto px-6 z-10 relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left Content (Cols 1-7) */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-bold tracking-[0.1em] text-slate-500 uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                            Logistique France & Europe
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 leading-[1.05] tracking-tight">
                            Grossiste B2B <br />
                            <span className="text-slate-400">Produits FMCG.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-xl">
                            LD France sécurise votre chaîne d'approvisionnement en <strong>produits d'hygiène et K-Beauty</strong>. Un stock localisé en région parisienne pour une réactivité totale.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button
                                asChild
                                className="h-14 px-8 text-base font-semibold bg-slate-900 hover:bg-slate-800 text-white rounded-none transition-all shadow-2xl shadow-slate-200"
                            >
                                <a href="https://wa.me/33771029911" target="_blank" className="flex items-center gap-2">
                                    Accéder au catalogue
                                    <ChevronRight className="w-4 h-4" />
                                </a>
                            </Button>
                            <Button
                                asChild
                                variant="outline"
                                className="h-14 px-8 text-base font-semibold border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900 rounded-none transition-all"
                            >
                                <Link href="/contact">Nous contacter</Link>
                            </Button>
                        </div>

                        {/* Trust Badges - Clean Version */}
                        <div className="pt-12 grid grid-cols-3 gap-8 border-t border-slate-100 max-w-lg">
                            {[
                                { icon: ShieldCheck, text: "Sourcing Certifié" },
                                { icon: MapPin, text: "Stock Parisien" },
                                { icon: Clock, text: "Expédition 24/48h" }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col gap-2">
                                    <item.icon className="w-5 h-5 text-slate-400" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Visual (Cols 8-12) - Dashboard Card - Hidden on mobile */}
                    <div className="hidden lg:block lg:col-span-5 relative group">
                        <div className="absolute -inset-4 bg-blue-600/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                        <div className="relative bg-white border border-slate-100 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] rounded-xl overflow-hidden">
                            <div className="p-6 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                                        </span>
                                        <h3 className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">Inventaire Temps Réel</h3>
                                    </div>
                                    <p className="text-[9px] text-slate-400 mt-1 uppercase font-medium">Mise à jour : Il y a 24h</p>
                                </div>
                            </div>

                            <div className="p-6 space-y-5">
                                {[
                                    { name: "Anua Heartleaf 77%", ref: "SKU-KO-042", stock: 85, status: "Disponible" },
                                    { name: "Sanytol Désinfectant", ref: "SKU-FR-118", stock: 32, status: "Flux Tendu" },
                                    { name: "Beauty of Joseon Sun", ref: "SKU-KO-009", stock: 100, status: "Disponible" },
                                ].map((item, i) => (
                                    <div key={i} className="space-y-2">
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <p className="text-xs font-bold text-slate-800">{item.name}</p>
                                                <p className="text-[9px] font-mono text-slate-400">{item.ref}</p>
                                            </div>
                                            <span className={`text-[10px] font-bold uppercase tracking-wider ${item.status === "Disponible" ? "text-blue-600" : "text-amber-500"}`}>
                                                {item.status}
                                            </span>
                                        </div>
                                        <div className="h-1 w-full bg-slate-50 rounded-full overflow-hidden">
                                            <div className={`h-full transition-all duration-1000 ${item.status === "Disponible" ? "bg-blue-600" : "bg-amber-500"}`} style={{ width: `${item.stock}%` }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="m-6 mt-2 p-4 bg-slate-900 rounded-lg flex items-center justify-between shadow-xl">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-white/10 rounded-md">
                                        <Package className="w-4 h-4 text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-white uppercase tracking-tight">Dernier Départ</p>
                                        <p className="text-[11px] text-blue-100/70">En transit vers Paris</p>
                                    </div>
                                </div>
                                <ArrowRight className="w-4 h-4 text-white/50" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}