import { useState } from "react";

export default function FaqSection() {
  const faqs = [
    {
      question: "Quels services propose Solutech-One ?",
      answer:
        "Solutech-One accompagne les entreprises dans leur transformation digitale en proposant des services en cloud computing, développement d’applications (web, mobile et logiciels métiers) et cybersécurité. Nos solutions sont conçues pour être performantes, sécurisées et adaptées aux besoins spécifiques de chaque organisation.",
    },
    {
      question: "Comment garantissez-vous la sécurité des données et des systèmes ?",
      answer:
        "La sécurité est au cœur de nos prestations. Nous mettons en place des mécanismes de protection avancés tels que la supervision en temps réel, le chiffrement des communications, la gestion sécurisée des accès et des audits réguliers. Notre approche vise à prévenir les incidents et à assurer la disponibilité et l’intégrité des données.",
    },
    {
      question: "Proposez-vous des solutions sur mesure ?",
      answer:
        "Oui. Chaque projet débute par une analyse approfondie des besoins du client. Nous concevons ensuite des solutions sur mesure, évolutives et adaptées aux contraintes techniques, fonctionnelles et budgétaires de votre entreprise.",
    },
    {
      question: "Assurez-vous la maintenance et le support après la mise en production ?",
      answer:
        "Absolument. Nous proposons des services de maintenance, de support technique et de supervision continue afin de garantir le bon fonctionnement, la performance et la sécurité des solutions déployées sur le long terme.",
    },
    {
      question: "Comment puis-je obtenir un devis ou démarrer un projet avec vous ?",
      answer:
        "Il vous suffit de nous contacter via notre formulaire en ligne ou par email. Après un premier échange pour comprendre vos besoins, nous vous proposons une étude personnalisée et un devis détaillé, sans engagement.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full py-28 px-6 bg-[#faf7f5]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* LEFT */}
        <div className="relative ">
            <div className="absolute -left-50 -top-50 w-72 h-72 rounded-full border-8 border-gray-300/40" />
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
