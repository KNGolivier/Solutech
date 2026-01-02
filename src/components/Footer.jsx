import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A56B3] text-white">
      
      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <h3 className="text-lg font-semibold uppercase">
              Solutech-One
            </h3>
            <p className="mt-4 text-sm text-blue-100 leading-relaxed">
              Technology innovation is our challenge
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-md font-semibold mb-4">
              Contact
            </h4>

            <ul className="space-y-3 text-sm text-blue-100">
              <li className="flex items-center gap-3">
                <FaPhoneAlt />
                <span>+241 62 XX XX XX</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope />
                <span>solutechone@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt />
                <span>Rue Nkong Akore, Libreville, Gabon</span>
              </li>
            </ul>
          </div>

          {/* LIENS UTILES */}
          <div>
            <h4 className="text-md font-semibold mb-4">
              Liens utiles
            </h4>

            <ul className="space-y-3 text-sm text-blue-100">
              <li className="hover:text-white cursor-pointer">
                Mon BonDocteur
              </li>
              <li className="hover:text-white cursor-pointer">
                Le BonContact
              </li>
              <li className="hover:text-white cursor-pointer">
                Ogouee-Cloud
              </li>
            </ul>
          </div>

          {/* DOCUMENTATION */}
          <div>
            <h4 className="text-md font-semibold mb-4">
              Information légale
            </h4>

            <ul className="space-y-3 text-sm text-blue-100">
              <li className="hover:text-white cursor-pointer">
                Mention légale
              </li>
              <li className="hover:text-white cursor-pointer">
                Politique de confidentialité
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-blue-600">
        <p className="text-center text-sm py-6 text-blue-100">
          © 2025 Solutech-One. Tous droits réservés.
        </p>
      </div>

    </footer>
  );
}
