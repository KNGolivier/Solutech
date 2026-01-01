import { useState } from "react";

export default function FaqSection() {
  const faqs = [
    {
      question: "Comment rejoindre solutech-one ?",
      answer:
        "Pour obtenir un entretien avec Solutech One, vous devez envoyer votre CV, une lettre de motivation, votre casier judiciaire à l’email example@gmail.com",
    },
    {
      question: "Quels types de services offrez-vous ?",
      answer:
        "Nous offrons des services de développement web, mobile, UI/UX design, solutions blockchain, maintenance et accompagnement digital.",
    },
    {
      question: "Besoin de la création d’un site ou d’une maintenance ?",
      answer:
        "Nous prenons en charge aussi bien la création complète de votre site que la maintenance et l’amélioration de solutions existantes.",
    },
    {
      question: "Combien de temps mettez-vous pour développer ?",
      answer:
        "Les délais varient selon la complexité du projet. En moyenne, un site vitrine prend 2 à 4 semaines.",
    },
    {
      question: "Dans quels types de projets vous êtes spécialisés ?",
      answer:
        "Nous sommes spécialisés dans les sites vitrines, plateformes web, solutions d’entreprise et projets innovants.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full py-28 px-6 bg-[#faf7f5]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* LEFT */}
        <div className="relative">
         

          <h2 className="relative text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
            Questions <br /> Fréquemment <br /> Demandés
          </h2>
        </div>

        {/* RIGHT */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-xl bg-white border border-gray-200 px-6 py-5"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-sm font-medium text-gray-900">
                    {faq.question}
                  </span>

                  <span className="text-xl text-gray-500">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
