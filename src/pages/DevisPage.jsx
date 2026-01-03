import { FaFileInvoiceDollar, FaClock, FaShieldAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DevisPage() {
  return (
    <>
      <Navbar />

      {/* DEVIS SECTION */}
      <section className="w-full bg-[#faf7f5] px-6 py-24 flex items-center justify-center">

        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl">

          {/* LEFT - INFOS */}
          <div className="bg-[#020F3E] text-white px-10 py-20 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-10">
              Demande de devis
            </h2>

            <p className="text-sm text-gray-200 leading-relaxed mb-10">
              Décrivez votre besoin et obtenez un devis clair, détaillé et adapté
              à vos objectifs. Notre équipe analyse chaque demande avec attention
              afin de proposer la solution la plus pertinente.
            </p>

            <div className="space-y-6 text-sm">
              <div className="flex items-center gap-4">
                <FaFileInvoiceDollar />
                <span>Devis gratuit et sans engagement</span>
              </div>

              <div className="flex items-center gap-4">
                <FaClock />
                <span>Réponse rapide sous 24 à 48h</span>
              </div>

              <div className="flex items-center gap-4">
                <FaShieldAlt />
                <span>Données traitées en toute confidentialité</span>
              </div>
            </div>
          </div>

          {/* RIGHT - FORM */}
          <div className="bg-white px-10 py-20 flex flex-col justify-center">
            <h2 className="text-xl font-semibold mb-10">
              Décrivez votre projet
            </h2>

            <form className="space-y-6 max-w-xl">

              <input
                type="text"
                placeholder="Nom & Prénom"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="email"
                placeholder="Email professionnel"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />


              <select
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option>Service concerné</option>
                <option>Développement Web</option>
                <option>Développement Mobile</option>
                <option>Logiciel métier</option>
                <option>Cybersécurité</option>
                <option>Autre</option>
              </select>

              <textarea
                rows="5"
                placeholder="Décrivez votre besoin (objectifs, délais, contraintes, budget estimatif...)"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <div className="flex items-start gap-2 text-xs text-gray-600">
                <input type="checkbox" className="mt-1" />
                <p>
                  J’accepte que mes données soient utilisées uniquement pour le
                  traitement de ma demande de devis.
                </p>
              </div>

              <button
                type="submit"
                className="mt-6 rounded-full bg-blue-600 px-10 py-3 text-white text-sm font-medium hover:bg-blue-700 transition"
              >
                Envoyer la demande
              </button>

            </form>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}
