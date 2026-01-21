export default function MentionsLegales() {
    return (
        <>
            <h1 className="text-3xl font-bold mb-8">Mentions Légales</h1>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">1. Éditeur du site</h2>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Dénomination sociale :</strong> LD FRANCE</li>
                    <li><strong>Forme juridique :</strong> Société par Actions Simplifiée (SAS) au capital social de 20 euros</li>
                    <li><strong>Siège social :</strong> 10 Rue Béranger, 77300 Fontainebleau, France</li>
                    <li><strong>SIRET :</strong> 931 462 014 00016</li>
                    <li><strong>Numéro de TVA intracommunautaire :</strong> FR63 931462014</li>
                    <li><strong>Responsable de la publication :</strong> M. Léo Marillier</li>
                    <li><strong>E-mail :</strong> contact@ldfrance.fr</li>
                    <li><strong>Téléphone :</strong> 07 83 91 85 40</li>
                    <li><strong>Site web :</strong> www.ldfranceimport.com</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">2. Hébergement du site</h2>
                <p>Le site est hébergé par :</p>
                <p className="mt-2">
                    <strong>Framer B.V.</strong><br />
                    Houthavens, Danzigerkade 23A, 1013 AP Amsterdam, Pays-Bas<br />
                    Site web : https://www.framer.com
                </p>
                <p className="text-sm text-zinc-500 mt-2 italic">
                    Note technique : La version actuelle du site (Espace Pro) peut être hébergée sur une infrastructure différente (Vercel) pour la partie applicative, tout en conservant les mêmes garanties de sécurité.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">3. Activité</h2>
                <p>
                    LD France est une entreprise française spécialisée dans la distribution en gros de produits multimarques.
                    Nous travaillons exclusivement avec une clientèle professionnelle : commerçants, pharmacies, parapharmacies, centrales d’achat, magasins indépendants, revendeurs Amazon / TikTok Shop, et enseignes de grande distribution.
                </p>
                <p className="mt-2 font-semibold">Nos gammes de produits incluent notamment :</p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Cosmétiques & Parapharmacie</li>
                    <li>Produits de papeterie et fournitures de bureau</li>
                    <li>Jouets, figurines et objets de collection</li>
                    <li>Produits alimentaires, boissons et confiseries</li>
                    <li>Articles de bazar, électroménager léger et accessoires divers</li>
                </ul>
                <p className="mt-2">Notre siège est basé à Fontainebleau (77) et nous livrons sur l’ensemble du territoire français et européen.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">4. Propriété intellectuelle</h2>
                <p>
                    L’ensemble du contenu du Site (textes, visuels, logos, images, catalogues, fiches produits, etc.) est la propriété exclusive de LD France, sauf mention contraire.
                    Toute reproduction, représentation, modification, distribution ou exploitation, totale ou partielle, sans autorisation écrite préalable, est strictement interdite et constitue une contrefaçon au sens des articles L.335-2 et suivants du Code de la propriété intellectuelle.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">5. Protection des données personnelles</h2>
                <p>
                    Les données collectées sur le site (formulaire de contact, inscription à la newsletter, demande de catalogue, etc.) sont utilisées uniquement par LD France à des fins commerciales et administratives.
                    Conformément au Règlement Général sur la Protection des Données (RGPD – UE 2016/679) et à la Loi Informatique et Libertés, vous disposez d’un droit d’accès, de rectification, d’opposition et de suppression de vos données personnelles.
                </p>
                <p className="mt-2">
                    Pour exercer ces droits, vous pouvez nous contacter à : <strong>contact@ldfrance.fr</strong>
                </p>
                <p>LD France s’engage à ne jamais vendre, louer ni partager vos données à des tiers sans votre accord.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">6. Responsabilité</h2>
                <p>
                    LD France s’efforce de fournir sur son site des informations exactes et à jour. Cependant, des erreurs ou omissions peuvent subsister.
                    Le site peut être suspendu pour maintenance ou mise à jour sans préavis.
                    LD France ne saurait être tenue responsable des conséquences liées à l’utilisation du site ou à une interruption temporaire de service.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">7. Liens externes</h2>
                <p>
                    Des liens hypertextes peuvent renvoyer vers d’autres sites internet.
                    LD France décline toute responsabilité concernant le contenu ou la politique de confidentialité de ces sites tiers.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-4">8. Droit applicable</h2>
                <p>
                    Les présentes mentions légales sont régies par le droit français.
                    Tout litige relatif à l’utilisation du site www.ldfranceimport.com relève de la compétence exclusive des tribunaux du ressort de <strong>Fontainebleau (77)</strong>.
                </p>
            </section>
        </>
    );
}
