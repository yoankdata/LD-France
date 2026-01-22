import { ContactForm } from "@/components/forms/ContactForm";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Contactez LD France pour recevoir le catalogue 2026. Réponse garantie sous 24h.",
};

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-white pt-32 pb-20">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-xl mx-auto">
                        <div className="text-center mb-12">
                            <span className="text-[11px] font-bold tracking-[0.3em] text-blue-600 uppercase mb-4 block">
                                Professionnels uniquement
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                                Recevoir le Catalogue 2026
                            </h1>
                            <p className="text-slate-500 text-lg font-light">
                                Accès exclusif réservé aux professionnels validés.
                            </p>
                            <p className="text-blue-600 font-medium mt-2 text-sm">
                                ✓ Réponse garantie sous 24h
                            </p>
                        </div>

                        <div className="bg-slate-50 p-8 md:p-10 rounded-sm border border-slate-100">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
