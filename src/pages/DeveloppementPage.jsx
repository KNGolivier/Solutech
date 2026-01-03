import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function DeveloppementPage() {
  const services = [
    {
      title: "Développement d’applications web",
      text:
        "Conception et développement d’applications web modernes, accessibles depuis tous les navigateurs. Nous réalisons des solutions sur mesure, performantes et sécurisées, adaptées aux besoins métiers et aux usages actuels.",
    },
    {
      title: "Développement d’applications mobiles",
      text:
        "Développement d’applications mobiles intuitives et fiables, compatibles Android et iOS. Nous créons des expériences utilisateurs fluides, pensées pour la mobilité et la performance.",
    },
    {
      title: "Développement logiciel",
      text:
        "Conception de logiciels métiers sur mesure pour automatiser, optimiser et sécuriser les processus internes de votre entreprise, avec des solutions évolutives et maintenables.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* IMAGE */}
      <div className="w-full h-[60vh]">
        <img
          src="/developpement-hero.jpg"
          alt="Développement d'applications et logiciels"
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <section className="w-full py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 text-center">
            Développement d’applications & solutions logicielles
          </h1>

          {/* INTRO */}
          <p className="mt-10 text-lg text-gray-600 max-w-4xl mx-auto text-center leading-relaxed">
            Le développement logiciel est au cœur de la transformation digitale
            des entreprises. Chez <strong>Solutech One</strong>, nous concevons
            des applications performantes, sécurisées et évolutives, adaptées
            aux besoins métiers spécifiques de chaque organisation.
          </p>

          {/* SERVICES CARDS */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
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
