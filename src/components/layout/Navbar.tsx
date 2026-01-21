"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md transition-all duration-300 border-b border-transparent shadow-soft">
                <div className="container mx-auto px-4 h-24 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center group relative z-50">
                        <Image
                            src="/logo.jpg"
                            alt="LD France - Grossiste B2B"
                            width={200}
                            height={60}
                            className="h-14 w-auto object-contain mix-blend-multiply transition-opacity duration-300 group-hover:opacity-90"
                            priority
                        />
                    </Link>

                    {/* Actions - Clean & Minimal */}
                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex flex-col items-end text-right mr-2">
                            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold mb-1">Service Pro</span>
                            <span className="text-sm font-medium text-foreground tracking-tight">Support En Ligne 7j/7</span>
                        </div>

                        <Button asChild variant="ghost" className="hidden md:flex font-medium text-muted-foreground hover:text-primary hover:bg-transparent transition-colors">
                            <Link href="/contact">Contact</Link>
                        </Button>
                        <Button asChild className="hidden sm:flex bg-primary text-white font-medium rounded-full px-6 shadow-soft hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                            <a href="https://wa.me/33771029911?text=Bonjour,%20je%20souhaite%20accéder%20au%20catalogue." target="_blank" rel="noopener noreferrer">
                                Accès Catalogue
                            </a>
                        </Button>

                        {/* Mobile Menu Trigger */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden text-foreground"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                        aria-hidden="true"
                    />

                    {/* Menu Panel */}
                    <nav className="absolute top-24 left-0 right-0 bg-white border-b border-slate-100 shadow-xl p-6 space-y-4 animate-in slide-in-from-top duration-300">
                        <Link
                            href="/"
                            className="block py-3 text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors border-b border-slate-50"
                            onClick={() => setIsOpen(false)}
                        >
                            Accueil
                        </Link>
                        <Link
                            href="/contact"
                            className="block py-3 text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors border-b border-slate-50"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link>

                        {/* WhatsApp CTA Mobile */}
                        <a
                            href="https://wa.me/33771029911?text=Bonjour,%20je%20souhaite%20accéder%20au%20catalogue."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-4 mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            <MessageCircle className="w-5 h-5" />
                            Accéder au Catalogue
                        </a>
                    </nav>
                </div>
            )}
        </>
    );
}
