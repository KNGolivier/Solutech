import { FaGithub, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/LOGO.png";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-[#c3c3c5] to-[#dedfdd] shadow-sm">
      <div className="flex items-center justify-between px-12 py-6">

        {/* Logo */}
<Link to="/">
  <img
    src={logo}
    alt="Solutech One logo"
    className="h-7 w-auto object-contain cursor-pointer"
  />
</Link>

        {/* Menu */}
        <ul className="flex gap-8 text-sm text-gray-700">
          <li className="cursor-pointer hover:text-blue-600">A propos</li>
          <li className="cursor-pointer hover:text-blue-600">Services</li>
          <li className="cursor-pointer hover:text-blue-600">Solutions</li>
          <li className="cursor-pointer hover:text-blue-600">Témoignages</li>
          <li className="cursor-pointer hover:text-blue-600">Partenaires</li>
          <li className="cursor-pointer hover:text-blue-600">FAQ</li>
        </ul>

        {/* CTA */}
       <div className="flex items-center gap-6">
  <Link
    to="/contact"
    className="rounded-full bg-[#0A56B3] px-6 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
  >
    Nous contacter
  </Link>



          <div className="flex gap-4 text-gray-600">
            <FaGithub className="cursor-pointer hover:text-black" />
            <FaFacebook className="cursor-pointer hover:text-blue-600" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaTwitter className="cursor-pointer hover:text-blue-400" />
          </div>
        </div>

      </div>
    </nav>
  );
}
