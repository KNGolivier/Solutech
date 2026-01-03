import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function CybersecuritePage() {
  const services = [
    {
      title: "Supervision Zabbix",
      text:
        "Surveillance proactive et en temps réel de votre infrastructure (serveurs, réseaux, applications) avec alertes automatiques. Détection et résolution des incidents avant qu’ils n’impactent votre activité.",
    },
    {
      title: "VPN Site-to-Site (Cisco & FortiGate)",
      text:
        "Connexions sécurisées et chiffrées entre vos sites distants à l’aide d’équipements leaders du marché, garantissant des communications fiables et protégées.",
    },
    {
      title: "Plateforme GED",
      text:
        "Solution de gestion électronique des documents pour le classement, l’indexation et l’accès sécurisé à vos fichiers, assurant organisation optimale et conformité.",
    },
    {
      title: "Portail Captif avec pfSense (RADIUS / LDAP)",
      text:
        "Mise en place d’un portail captif sécurisé intégrant l’authentification RADIUS via LDAP (Windows & Linux) pour un contrôle strict des accès réseau.",
    },
    {
      title: "Déploiement Cloud Privé avec OpenStack",
      text:
        "Installation et configuration d’une infrastructure cloud privée avec OpenStack, permettant une gestion simplifiée des machines virtuelles, du réseau et du stockage.",
    },
    {
      title: "Récupération de données",
      text:
        "Restauration de fichiers supprimés ou perdus à partir de supports de stockage avec analyse approfondie et reconstruction fiable des données.",
    },
    {
      title: "VPN Site-to-Client avec WireGuard",
      text:
        "Mise en place d’un tunnel sécurisé entre un poste distant et le réseau interne, offrant un accès confidentiel avec chiffrement performant.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* IMAGE */}
      <div className="w-full h-[60vh]">
        <img
          src="/cyber-hero.jpeg"
          alt="Cybersécurité et protection des systèmes"
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <section className="w-full py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 text-center">
            Cybersécurité & Infrastructures Sécurisées
          </h1>

          {/* INTRO */}
          <p className="mt-10 text-lg text-gray-600 max-w-4xl mx-auto text-center leading-relaxed">
            La cybersécurité est un enjeu critique pour les entreprises modernes.
            Chez <strong>Solutech One</strong>, nous déployons des solutions
            robustes de surveillance, de protection et de continuité afin de
            sécuriser vos systèmes d’information, vos données et vos communications.
          </p>

          {/* SERVICES CARDS */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 p-8 flex flex-col hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm text-gray-600 leading-relaxed flex-grow">
                  {service.text}
                </p>

                {/* CTA */}
                <Link
                  to={`/devis?service=${encodeURIComponent(service.title)}`}
                  className="mt-6 inline-block rounded-full border border-blue-600 px-6 py-2 text-sm font-medium text-blue-600 text-center hover:bg-blue-600 hover:text-white transition"
                >
                  Demander un devis
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
