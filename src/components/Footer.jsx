export default function Footer() {
  return (
    <footer className="w-full bg-[#0f5bb5] text-white">
      {/* Top */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Découvrir */}
          <div>
            <h3 className="text-sm font-semibold mb-6">Decouvrir</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="hover:text-white cursor-pointer">A propos</li>
              <li className="hover:text-white cursor-pointer">Newsletters</li>
              <li className="hover:text-white cursor-pointer">Environnement</li>
              <li className="hover:text-white cursor-pointer">Services</li>
              <li className="hover:text-white cursor-pointer">PC</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="hover:text-white cursor-pointer">Prestations</li>
              <li className="hover:text-white cursor-pointer">Maintenances</li>
              <li className="hover:text-white cursor-pointer">Digitalisations</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-6">Contact</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="hover:text-white cursor-pointer">
                Nous rejoindre
              </li>
              <li className="text-white font-medium">
                +241 765 044 43
              </li>
              <li className="text-white font-medium">
                +241 765 044 43
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20"></div>

      {/* Bottom */}
      <div className="py-6 text-center text-xs text-white/70">
        © 2026 Solutech-one | Tous les droits réservés
      </div>
    </footer>
  );
}
