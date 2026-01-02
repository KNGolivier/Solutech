export default function CybersecuritePage() {
  return (
    <section className="w-full">

      {/* IMAGE */}
      <div className="w-full h-[70vh]">
        <img
          src="/cyber-hero.jpeg"
          alt="Cybersécurité et protection des systèmes"
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="w-full py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          {/* TITLE */}
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 text-center">
            Cybersécurité & Infrastructures Sécurisées
          </h1>

          {/* INTRO */}
          <p className="mt-8 text-lg text-gray-600 max-w-4xl mx-auto text-center leading-relaxed">
            La cybersécurité est un enjeu critique pour les entreprises modernes.
            Chez <strong>Solutech One</strong>, nous mettons en place des solutions
            robustes de surveillance, de protection et de continuité afin de
            sécuriser vos systèmes d’information, vos données et vos communications.
          </p>

          {/* SERVICES */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* ZABBIX */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Supervision Zabbix
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Surveillance proactive et en temps réel de votre infrastructure
                (serveurs, réseaux, applications) grâce à Zabbix, avec configuration
                d’alertes automatiques.
                <br /><br />
                <strong>Disponibilité maximale :</strong> détection et résolution
                des incidents avant qu’ils n’impactent votre activité.
              </p>
            </div>

            {/* VPN SITE TO SITE */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                VPN Site-to-Site (Cisco & FortiGate)
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Mise en place de connexions sécurisées et chiffrées entre vos sites
                distants à l’aide d’équipements leaders du marché.
                <br /><br />
                <strong>Sécurité et continuité :</strong> communications inter-sites
                fiables, protégées et performantes.
              </p>
            </div>

            {/* GED */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Plateforme GED (Gestion Électronique des Documents)
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Solution complète de gestion électronique des documents permettant
                le classement, l’indexation et l’accès sécurisé à l’ensemble de vos
                fichiers d’entreprise.
                <br /><br />
                <strong>Efficacité opérationnelle :</strong> accès rapide,
                organisation optimale et conformité des documents.
              </p>
            </div>

            {/* PORTAIL CAPTIF */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Portail Captif avec pfSense (RADIUS / LDAP)
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Déploiement d’un portail captif sécurisé avec pfSense, intégrant
                l’authentification RADIUS via LDAP (Windows & Linux).
                <br /><br />
                Solution idéale pour contrôler et sécuriser l’accès réseau au sein
                des entreprises.
              </p>
            </div>

            {/* OPENSTACK */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Déploiement Cloud Privé avec OpenStack
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Installation et configuration d’une infrastructure cloud privée
                basée sur OpenStack, avec gestion simplifiée des machines virtuelles,
                du réseau et du stockage en mode IaaS.
              </p>
            </div>

            {/* DATA RECOVERY */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Outils de récupération de données
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Restauration de fichiers supprimés ou perdus à partir de supports
                de stockage (disques durs, clés USB, etc.) à l’aide de logiciels
                spécialisés.
                <br /><br />
                <strong>Récupération fiable :</strong> analyse approfondie,
                reconstruction des fichiers et restauration rapide en cas de perte
                accidentelle.
              </p>
            </div>

            {/* VPN CLIENT */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                VPN Site-to-Client avec WireGuard
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                Mise en place d’un tunnel sécurisé entre un poste client distant
                et le réseau interne de l’entreprise via le protocole WireGuard.
                <br /><br />
                <strong>Connexion sécurisée :</strong> accès confidentiel aux
                ressources internes avec chiffrement performant et configuration
                simplifiée.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
