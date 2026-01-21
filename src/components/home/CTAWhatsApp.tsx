"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTAWhatsApp() {
    return (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce-subtle">
            <Button
                size="lg"
                className="h-16 w-16 rounded-full bg-green-500 hover:bg-green-600 shadow-xl shadow-green-500/30 flex items-center justify-center transition-transform hover:scale-110"
                onClick={() => window.open('https://wa.me/33771029911', '_blank')}
            >
                <MessageCircle className="h-8 w-8 text-white fill-current" />
                <span className="sr-only">Contacter sur WhatsApp</span>

                {/* Notification Dot */}
                <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-red-500 border-2 border-white"></span>
            </Button>
        </div>
    );
}
