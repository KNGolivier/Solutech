export default function DeveloppementPage() {
  return (
    <section className="w-full">

      {/* IMAGE */}
      <div className="w-full h-[70vh]">
        <img
          src="/developpement-hero.jpg"
          alt="Développement d'applications et logiciels"
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="w-full py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 text-center">
            Développement d’applications & solutions logicielles
          </h1>

          {/* INTRO */}
          <p className="mt-8 text-lg text-gray-600 max-w-4xl mx-auto text-center leading-relaxed">
            Le développement logiciel est au cœur de la transformation digitale
            des entreprises. Chez <strong>Solutech One</strong>, nous concevons
            des applications performantes, sécurisées et évolutives, adaptées
            aux besoins métiers spécifiques de chaque organisation.
          </p>

          {/* SERVICES */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* WEB */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 text-center">
                Développement d’applications web
              </h3>
              <p className="mt-4 text-gray-600 text-center leading-relaxed">
                Conception et développement d’applications web modernes,
                accessibles depuis tous les navigateurs. Nous réalisons des
                solutions sur mesure, performantes et sécurisées, adaptées
                aux besoins métiers et aux usages actuels.
              </p>
            </div>

            {/* MOBILE */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 text-center">
                Développement d’applications mobiles
              </h3>
              <p className="mt-4 text-gray-600 text-center leading-relaxed">
                Développement d’applications mobiles intuitives et fiables,
                compatibles Android et iOS. Nous créons des expériences
                utilisateurs fluides, pensées pour la mobilité et la
                performance.
              </p>
            </div>

            {/* LOGICIEL */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 text-center">
                Développement logiciel
              </h3>
              <p className="mt-4 text-gray-600 text-center leading-relaxed">
                Conception de logiciels métiers sur mesure pour automatiser,
                optimiser et sécuriser les processus internes de votre
                entreprise, avec des solutions évolutives et maintenables.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
