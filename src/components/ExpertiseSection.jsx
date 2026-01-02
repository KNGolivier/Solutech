import { FaCloud, FaCode, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ExpertiseSection() {
  const expertises = [
    {
      title: "Cloud Computing",
      desc: "Infrastructure cloud scalable, performante et sécurisée.",
      icon: <FaCloud />,
      link: "/services/cloud",
      styles: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      title: "Développement",
      desc: "Applications web et mobiles modernes et robustes.",
      icon: <FaCode />,
      link: "/services/developpement",
      styles: "bg-indigo-50 text-indigo-600 border-indigo-200",
    },
    {
      title: "Cybersécurité",
      desc: "Protection, audit et sécurisation de vos systèmes.",
      icon: <FaShieldAlt />,
      link: "/services/cybersecurite",
      styles: "bg-red-50 text-red-600 border-red-200",
    },
  ];

  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Ce que l'on fait 
          </h2>
          <p className="mt-4 text-sm text-gray-600">
            Trois piliers solides pour accompagner votre transformation digitale.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {expertises.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 bg-white p-8 text-center hover:shadow-md transition flex flex-col"
            >
              {/* Icon */}
              <div
                className={`mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full ${item.styles}`}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-sm font-semibold text-gray-900">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-gray-600 flex-grow">
                {item.desc}
              </p>

              {/* Button */}
              <Link
                to={item.link}
                className="mt-6 inline-block rounded-full border border-gray-900 px-6 py-2 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition"
              >
                En savoir plus
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
