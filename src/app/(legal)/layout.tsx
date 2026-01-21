export default function LegalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-zinc-50 py-12 md:py-24">
            <div className="container mx-auto px-4 max-w-4xl">
                <article className="prose prose-zinc lg:prose-xl bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-zinc-100">
                    {children}
                </article>
            </div>
        </div>
    );
}
