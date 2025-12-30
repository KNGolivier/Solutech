import { FaGithub, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import logo from "../assets/LOGO.png";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0  bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-12 py-6">
               <img 
          src={logo} 
          alt="Solutech One logo" 
          className="h-7 w-auto object-contain"
        />



        <ul className="flex gap-8 text-sm text-gray-700">
          <li className="cursor-pointer hover:text-blue-600">A propos</li>
          <li className="cursor-pointer hover:text-blue-600">Services</li>
          <li className="cursor-pointer hover:text-blue-600">Solutions</li>
          <li className="cursor-pointer hover:text-blue-600">Projets</li>
          <li className="cursor-pointer hover:text-blue-600">Partenaires</li>
        </ul>

        <div className="flex gap-4 text-gray-600">
          <FaGithub className="cursor-pointer hover:text-black" />
          <FaFacebook className="cursor-pointer hover:text-blue-600" />
          <FaInstagram className="cursor-pointer hover:text-pink-500" />
          <FaTwitter className="cursor-pointer hover:text-blue-400" />
        </div>
      </nav>

            {/* HERO */}
          <div className="flex flex-col items-center justify-center text-center px-6 mt-24">

            <h1 className="text-5xl md:text-6xl font-light tracking-wide">

              {/* Bleu au début */}
              <span className="text-blue-600">Innov</span>

              {/* Noir du a jusqu'à Tech */}
              <span className="text-black">ation Tech</span>

              {/* Bleu à partir de “nologique” */}
              <span className="text-blue-600">nologique</span>

            </h1>

            <h2 className="text-3xl md:text-4xl font-medium mt-3 text-black">
              Solutech One
            </h2>



        <p className="max-w-2xl mt-6 text-gray-600 text-sm leading-relaxed">
          Our technology performing fast blockchain (120K TPS) and it has
          guaranteed AI-based data security. Proof of Stake, its consensus
          algorithm enables unlimited speeds.
        </p>

        <div className="flex gap-6 mt-10">
          <button className="px-8 py-3 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition">
            Get started
          </button>

          <button className="px-8 py-3 rounded-full border border-gray-800 hover:bg-gray-800 hover:text-white transition">
            Ecosystems
          </button>
        </div>
      </div>
    </header>
  )
}
