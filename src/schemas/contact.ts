import { z } from "zod";

// Regex simplifiée pour TVA EU (commence par 2 lettres majuscules suivies de chiffres/lettres)
const vatRegex = /^[A-Z]{2}[0-9A-Z]{2,13}$/;

export const contactFormSchema = z.object({
    name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    company: z.string().min(2, "Le nom de l'entreprise est obligatoire"),
    email: z.string().email("Email invalide").refine((email) => {
        // Optionnel: Rejeter les emails gratuits pour forcer le B2B
        // return !/@(gmail|hotmail|yahoo|outlook)\./.test(email);
        return true;
    }, "Veuillez utiliser une adresse email professionnelle"),
    phone: z.string().min(10, "Numéro de téléphone invalide"),
    vatNumber: z.string().regex(vatRegex, "Numéro de TVA invalide (ex: FR12345678901)"),
    message: z.string().min(10, "Votre message doit contenir au moins 10 caractères"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
