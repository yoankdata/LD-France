"use client";

import Link from "next/link";
import { Home, ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
            {/* Background Decoration */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/30 via-transparent to-transparent"></div>

            <div className="relative z-10 text-center max-w-md">
                {/* 404 Number */}
                <div className="mb-8">
                    <span className="text-[150px] md:text-[200px] font-bold text-slate-100 leading-none select-none">
                        404
                    </span>
                </div>

                {/* Message */}
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                    Page introuvable
                </h1>
                <p className="text-slate-500 mb-8 text-lg font-light">
                    La page que vous recherchez n'existe pas ou a été déplacée.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="h-12 px-6 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-none">
                        <Link href="/" className="flex items-center gap-2">
                            <Home className="w-4 h-4" />
                            Retour à l'accueil
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-12 px-6 border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900 font-semibold rounded-none transition-all">
                        <a href="https://wa.me/33771029911" target="_blank" className="flex items-center gap-2">
                            <MessageCircle className="w-4 h-4" />
                            Nous contacter
                        </a>
                    </Button>
                </div>

                {/* Brand Footer */}
                <div className="mt-16 pt-8 border-t border-slate-100">
                    <p className="text-sm text-slate-400">
                        © {new Date().getFullYear()} LD France Distribution
                    </p>
                </div>
            </div>
        </main>
    );
}
