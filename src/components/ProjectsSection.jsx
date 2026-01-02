import { useEffect, useState } from "react";

export default function ProjectsSection() {
  const projects = [
    { id: 1, title: "E-Concours", image: "/concours.png" },
    { id: 2, title: "Mon Bon Docteur", image: "/logo mbd.jpeg" },
    { id: 3, title: "LeBonContact", image: "/logo lbc.png" },
    { id: 4, title: "Voyageur", image: "/LOGO.png" },
    { id: 5, title: "E-Contravention", image: "/LOGO.png" },
    
  ];

  const itemsPerView = 3;

  // Découpage en pages
  const pages = [];
  for (let i = 0; i < projects.length; i += itemsPerView) {
    pages.push(projects.slice(i, i + itemsPerView));
  }

  const [currentPage, setCurrentPage] = useState(0);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) =>
        prev === pages.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [pages.length]);

  return (
    <section className="w-full py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-br from-black via-gray-900 to-gray-800 p-10 md:p-14 shadow-xl overflow-hidden">

          <h2 className="text-center text-2xl md:text-3xl font-medium text-white max-w-3xl mx-auto">
            Liste des projets pensés, conçus et développés pour vous faciliter la vie.
          </h2>

          {/* SLIDER */}
          <div className="relative mt-14 overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentPage * 100}%)`,
              }}
            >
              {pages.map((page, index) => (
                <div
                  key={index}
                  className="min-w-full grid grid-cols-3 gap-8 px-8"
                >
                  {page.map((project) => (
                    <div
                      key={project.id}
                      className="rounded-2xl bg-gray-600 p-6 flex flex-col items-center hover:bg-gray-700 transition"
                    >
                      <div className="flex items-center justify-center h-32 w-full">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="max-h-28 object-contain"
                        />
                      </div>

                      <p className="mt-6 text-center text-sm font-medium text-white">
                        {project.title}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* INDICATORS */}
          <div className="mt-8 flex justify-center gap-3">
            {pages.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentPage
                    ? "bg-white"
                    : "bg-white/40"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
