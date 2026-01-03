import heroImg from "../assets/Hero.jpg";

export default function Hero() {
  return (
    <section
      className="w-full h-screen flex justify-center text-center"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 mt-16">

        <h1 className="text-5xl md:text-6xl font-light tracking-wide">
          <span className="text-blue-600">Innov</span>
          <span className="text-blue-600">ation Tech</span>
          <span className="text-blue-600">nologique</span>
        </h1>

        <h2 className="text-3xl md:text-4xl font-medium mt-3 text-black">
          Solutech One
        </h2>

        <p className="max-w-2xl mt-6 mx-auto text-gray-700 text-sm leading-relaxed">
          Solutech-One est une entreprise spécialisée dans la conception de
          solutions numériques modernes et sécurisées. Nous accompagnons les
          organisations dans leur transformation digitale à travers le
          développement logiciel, la cybersécurité et les solutions cloud.
        </p>

      </div>
    </section>
  );
}
