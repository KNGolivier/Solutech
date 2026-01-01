export default function ProjectsSection() {
  const filters = [
    { label: "Tout", count: 20, active: false },
    { label: "Presentations", count: 10, active: true },
    { label: "Pour l'entreprise", count: 5, active: false },
    { label: "National", count: 5, active: false },
  ];

  const projects = [
    {
      id: 1,
      title: "Site de recherche de concours",
      image: "../assets/concours.png",
    },
    {
      id: 2,
      title: "Reservation de docteur",
      image: "/assets/doctor.jpg",
    },
    {
      id: 3,
      title: "Système de distribution",
      image: "../assets/distribution.jpg",
    },
  ];

  return (
    <section className="w-full py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Card container */}
        <div className="rounded-3xl bg-gradient-to-br from-black via-gray-900 to-gray-800 p-10 md:p-14 shadow-xl">

          {/* Title */}
          <h2 className="text-center text-2xl md:text-3xl font-medium text-white max-w-3xl mx-auto">
            Liste des projets penser, conçu et développer pour vous faciliter la vie.
          </h2>



          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {projects.map((project) => (
              <div
                key={project.id}
                  className="group relative rounded-2xl overflow-hidden bg-gray-700"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30"></div>

                {/* Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">
                    {project.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
