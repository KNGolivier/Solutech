export default function PartnersSlider() {
  const partners = [
    { name: "ESITECH", logo: "esiitech.png" },
    { name: "USTM", logo: "Ustm.png" },
    { name: "CHUL", logo: "chul.png" },
    { name: "BakoAI", logo: "bakoai.png" },
  ];

  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <p className="text-center text-sm text-gray-600 mb-12">
          Confiance auprès de plus de <span className="font-medium">1,000</span> dans le monde
        </p>

        {/* Slider */}
        <div className="relative">
          <div className="flex gap-20 animate-partners">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[180px]"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-14 object-contain  transition"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
