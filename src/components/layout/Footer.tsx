import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
    return (
        <footer className="bg-white text-muted-foreground py-24 border-t border-black/5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-24 mb-20">

                    {/* Brand */}
                    <div className="lg:col-span-5 space-y-8">
                        <Link href="/" className="inline-block">
                            <Image
                                src="/logo.jpg"
                                alt="LD France"
                                width={200}
                                height={60}
                                className="h-16 w-auto object-contain mix-blend-multiply"
                            />
                        </Link>
                        <p className="text-lg leading-relaxed font-light max-w-md text-foreground/80">
                            Partenaire logistique de référence pour la distribution B2B. <br />
                            Nous simplifions l'approvisionnement des professionnels.
                        </p>
                        <div className="flex gap-6 pt-4">
                            <Link href="#" className="opacity-60 hover:opacity-100 hover:text-primary transition-all"><Instagram className="h-6 w-6" /></Link>
                            <Link href="#" className="opacity-60 hover:opacity-100 hover:text-primary transition-all"><Linkedin className="h-6 w-6" /></Link>
                        </div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden lg:block lg:col-span-2"></div>

                    {/* Contact CTA */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <div className="space-y-6 bg-zinc-50 p-8 rounded-2xl border border-zinc-100/80 shadow-sm">
                            <h4 className="text-foreground text-2xl font-bold tracking-tight">Une question sur nos stocks ?</h4>
                            <p className="font-light text-sm">Notre équipe commerciale répond à vos demandes de devis sous 2h ouvrées.</p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button asChild className="h-12 bg-primary text-white hover:bg-primary/90 font-semibold rounded-lg px-6 shadow-md shadow-primary/10">
                                    <a href="https://wa.me/33771029911" target="_blank" className="flex items-center gap-2">
                                        <Phone className="h-4 w-4" />
                                        WhatsApp Business
                                    </a>
                                </Button>
                                <Button asChild variant="outline" className="h-12 border-zinc-200 text-foreground hover:bg-slate-900 hover:text-white hover:border-slate-900 font-medium rounded-lg px-6 bg-white transition-all">
                                    <a href="mailto:contact@ldfrance.fr" className="flex items-center gap-2">
                                        <Mail className="h-4 w-4" />
                                        Email Support
                                    </a>
                                </Button>
                            </div>

                            <div className="flex items-center gap-3 pt-4 text-sm text-muted-foreground/80 border-t border-zinc-200/50 mt-6">
                                <MapPin className="h-4 w-4 shrink-0" />
                                <span>Entrepôts : Île-de-France (93)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-black/5 pt-12 flex flex-col md:flex-row justify-between items-center text-sm font-medium">
                    <p>© {new Date().getFullYear()} LD FRANCE. Tous droits réservés.</p>
                    <div className="flex gap-8 mt-6 md:mt-0">
                        <Link href="/mentions-legales" className="hover:text-primary transition-colors">Mentions Légales</Link>
                        <Link href="/cgv" className="hover:text-primary transition-colors">CGV</Link>
                        <span className="text-muted-foreground/60">Paiement 100% Sécurisé</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
