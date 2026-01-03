import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />
{/* CONTACT SECTION */}
<section className="w-full bg-[#faf7f5] px-6 py-20 flex items-center justify-center">

  <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl">

    {/* LEFT - INFOS */}
    <div className="bg-[#0A56B3] text-white px-10 py-20 flex flex-col justify-center">
      <h2 className="text-xl font-semibold mb-10">
        Informations de contact
      </h2>

      <div className="space-y-6 text-sm">
        <div className="flex items-center gap-4">
          <FaEnvelope />
          <span>solutechone@gmail.com</span>
        </div>

        <div className="flex items-center gap-4">
          <FaPhoneAlt />
          <span>+241 62 XX XX XX</span>
        </div>

        <div className="flex items-center gap-4">
          <FaMapMarkerAlt />
          <span>Rue Nkong Akore, Libreville, Gabon</span>
        </div>
      </div>
    </div>

    {/* RIGHT - FORM */}
    <div className="bg-white px-10 py-20 flex flex-col justify-center">
      <h2 className="text-xl font-semibold mb-10">
        Envoyez-nous un message
      </h2>

      <form className="space-y-6 max-w-xl">

        <input
          type="text"
          placeholder="Nom complet"
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

        <select
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option>Objet : Demande d'information</option>
          <option>Devis</option>
          <option>Support technique</option>
          <option>Autre</option>
        </select>

        <textarea
          rows="5"
          placeholder="Message ici ..."
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
        />

       

        <button
          type="submit"
          className="mt-6 rounded-full bg-[#0A56B3] px-10 py-3 text-white text-sm font-medium hover:bg-sky-600 transition"
        >
          Soumettre
        </button>

      </form>
    </div>

  </div>

</section>


   

      {/* FOOTER */}
      <Footer />
    </>
  );
}
