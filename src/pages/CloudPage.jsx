export default function CloudPage() {
  return (
    <section className="w-full min-h-screen relative">
      
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/cloud-computing.jpg')",
        }}
      />

      {/* Overlay pour lisibilité */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenu */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-semibold text-white max-w-3xl">
            Solutions Cloud performantes et sécurisées
          </h1>

          <p className="mt-6 text-lg text-gray-200 max-w-2xl leading-relaxed">
           Le cloud computing est aujourd’hui un levier stratégique majeur pour les entreprises souhaitant gagner en agilité, en performance et en sécurité. Chez Solutech One, nous accompagnons les organisations dans la conception, la mise en place et l’exploitation de solutions cloud modernes, adaptées à leurs besoins métiers et à leurs contraintes techniques.

Grâce à une approche axée sur la sécurité et la résilience, nous garantissons la protection de vos données et la disponibilité de vos services, tout en vous offrant la flexibilité nécessaire pour faire évoluer vos ressources en fonction de vos usages. Nos équipes s’appuient sur des technologies éprouvées et des bonnes pratiques reconnues afin de vous fournir une infrastructure cloud robuste et performante.
Pour découvrir l’ensemble de nos solutions cloud, nos offres détaillées et nos fonctionnalités avancées, nous vous invitons à consulter notre site dédié via le lien ci-dessous.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="https://site-cloud.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-blue-600 px-10 py-4 text-white font-medium hover:bg-blue-700 transition"
            >
              Découvrir notre plateforme Cloud
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
