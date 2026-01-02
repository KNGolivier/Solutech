import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function TestimonialSection() {
  return (
    <section className="w-full py-20 px-6 bg-[#faf7f5]">
      <div className="max-w-6xl mx-auto">
         {/* Title */}
          <h2 className="text-center pb-10  text-2xl md:text-3xl font-medium text-black max-w-3xl mx-auto">
            Témoignage de nos équipes
          </h2>
        {/* Card */}
        <div className="relative rounded-2xl border border-gray-300 bg-gradient-to-br from-white via-[#f4f1ee] to-[#ebe7e3] p-10 md:p-14 shadow-sm">

          {/* Quote */}
          <p className="text-lg md:text-xl leading-relaxed text-gray-900 max-w-4xl">
           “Solutech-One a su comprendre rapidement nos besoins et nous proposer une solution fiable et parfaitement adaptée à notre infrastructure. Grâce à leur accompagnement, nous avons amélioré la sécurité de nos systèmes et optimisé nos performances. Une équipe sérieuse, réactive et compétente.”
          </p>

          {/* Footer */}
          <div className="mt-10 flex items-center justify-between">
            
            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-gray-300"></div>
              <div>
                <p className="text-sm font-medium text-gray-900">OBAME ESSONO Nasser Mohammed</p>
                <p className="text-xs text-gray-500">Développeur Fullstack</p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              <button className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-700 hover:bg-gray-200 transition">
                <FaArrowLeft />
              </button>

              <span className="text-xs text-gray-500">01 / 09</span>

              <button className="h-10 w-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition">
                <FaArrowRight />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
