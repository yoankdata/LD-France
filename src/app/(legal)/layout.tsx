import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function LegalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-zinc-50 pt-28 md:pt-32 pb-12 md:pb-24">
                <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                    <article className="prose prose-zinc lg:prose-xl bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-zinc-100">
                        {children}
                    </article>
                </div>
            </div>
            <Footer />
        </>
    );
}
