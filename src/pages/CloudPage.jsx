import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CloudPage() {
  return (
    <>
      <Navbar />

      {/* IMAGE */}
      <div className="w-full h-[60vh]">
        <img
          src="/cloud-computing.jpg"
          alt="Cloud Computing"
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <section className="w-full py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 text-center">
            Solutions Cloud performantes et sécurisées
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-10 text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed text-center">
            Le cloud computing est aujourd’hui un levier stratégique majeur pour
            les entreprises souhaitant gagner en agilité, en performance et en
            sécurité. Chez <strong>Solutech One</strong>, nous accompagnons les
            organisations dans la conception, la mise en place et l’exploitation
            de solutions cloud modernes, adaptées à leurs besoins métiers et à
            leurs contraintes techniques.
            <br /><br />
            Grâce à une approche axée sur la sécurité et la résilience, nous
            garantissons la protection de vos données et la disponibilité de vos
            services, tout en vous offrant la flexibilité nécessaire pour faire
            évoluer vos ressources en fonction de vos usages. Nos équipes
            s’appuient sur des technologies éprouvées et des bonnes pratiques
            reconnues afin de vous fournir une infrastructure cloud robuste et
            performante.
          </p>

          {/* CTA */}
          <div className="mt-20 text-center">
            <a
              href="https://site-cloud.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-blue-600 px-12 py-4 text-white font-medium hover:bg-blue-700 transition"
            >
              Découvrir notre plateforme Cloud
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
