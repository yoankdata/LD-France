"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormValues } from "@/schemas/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // À créer ou utiliser input standard si manquant
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            company: "",
            email: "",
            phone: "",
            vatNumber: "",
            message: "",
        },
    });

    async function onSubmit(data: ContactFormValues) {
        setIsSubmitting(true);
        // Simulation d'envoi API
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Lead B2B reçu:", data);
        setIsSubmitting(false);
        setIsSuccess(true);
        form.reset();
    }

    if (isSuccess) {
        return (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center animate-in fade-in zoom-in">
                <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-800 mb-2">Demande Envoyée !</h3>
                <p className="text-green-700">
                    Notre équipe commerciale analysera votre dossier (SIRET/TVA) sous 48h.
                    <br />Vous recevrez vos accès PRO par email.
                </p>
                <Button
                    variant="outline"
                    className="mt-6 border-green-200 text-green-700 hover:bg-green-100"
                    onClick={() => setIsSuccess(false)}
                >
                    Envoyer une autre demande
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Nom complet
                    </label>
                    <Input
                        placeholder="Jean Dupont"
                        {...form.register("name")}
                        className={form.formState.errors.name ? "border-red-500" : ""}
                    />
                    {form.formState.errors.name && (
                        <p className="text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" /> {form.formState.errors.name.message}
                        </p>
                    )}
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">
                        Société
                    </label>
                    <Input
                        placeholder="LDFRANCE IMPORT"
                        {...form.register("company")}
                        className={form.formState.errors.company ? "border-red-500" : ""}
                    />
                    {form.formState.errors.company && (
                        <p className="text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" /> {form.formState.errors.company.message}
                        </p>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">Email Pro</label>
                    <Input
                        type="email"
                        placeholder="contact@entreprise.com"
                        {...form.register("email")}
                        className={form.formState.errors.email ? "border-red-500" : ""}
                    />
                    {form.formState.errors.email && (
                        <p className="text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" /> {form.formState.errors.email.message}
                        </p>
                    )}
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">Téléphone</label>
                    <Input
                        type="tel"
                        placeholder="+33 6 12 34 56 78"
                        {...form.register("phone")}
                        className={form.formState.errors.phone ? "border-red-500" : ""}
                    />
                    {form.formState.errors.phone && (
                        <p className="text-sm text-red-500 flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" /> {form.formState.errors.phone.message}
                        </p>
                    )}
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium leading-none">N° TVA Intracommunautaire</label>
                <Input
                    placeholder="FR12345678901"
                    {...form.register("vatNumber")}
                    className={form.formState.errors.vatNumber ? "border-red-500" : ""}
                />
                <p className="text-xs text-muted-foreground">Obligatoire pour validation de compte PRO.</p>
                {form.formState.errors.vatNumber && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {form.formState.errors.vatNumber.message}
                    </p>
                )}
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium leading-none">Message / Besoin</label>
                <textarea
                    className={`flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${form.formState.errors.message ? "border-red-500" : ""}`}
                    placeholder="Je souhaite obtenir un devis pour..."
                    {...form.register("message")}
                />
                {form.formState.errors.message && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" /> {form.formState.errors.message.message}
                    </p>
                )}
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 h-11 text-lg" disabled={isSubmitting}>
                {isSubmitting ? "Envoi en cours..." : "Demander l'ouverture de compte"}
            </Button>
        </form>
    );
}
