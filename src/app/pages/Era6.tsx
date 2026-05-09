import { useState } from 'react';
import { Link } from 'react-router-dom';
import MuseumNav from '../components/MuseumNav';

export default function Era6() {
  const [activeTab, setActiveTab] = useState<'overview' | 'tech' | 'impact'>('overview');
  const [currentTech, setCurrentTech] = useState(0);

  const technologies = [
    {
      title: 'Cloud Computing',
      year: '2010',
      description: "Infrastructure as a Service transforme l'IT",
      color: '#3b82f6',
    },
    {
      title: 'Intelligence Artificielle',
      year: '2015',
      description: 'Deep Learning révolutionne le traitement des données',
      color: '#8b5cf6',
    },
    {
      title: 'Internet of Things',
      year: '2018',
      description: "Milliards d'objets connectés créent un réseau invisible",
      color: '#06b6d4',
    },
    {
      title: 'Edge Computing',
      year: '2020',
      description: 'Traitement décentralisé au plus près des utilisateurs',
      color: '#ec4899',
    },
    {
      title: '5G Networks',
      year: '2022',
      description: 'Connectivité ultra-rapide partout',
      color: '#10b981',
    },
  ];

  const impacts = [
    {
      domain: 'Économie',
      desc: 'Plateformes numériques dominent les marchés mondiaux',
    },
    {
      domain: 'Société',
      desc: 'Réseaux sociaux redéfinissent les interactions humaines',
    },
    {
      domain: 'Politique',
      desc: 'Désinformation et influence numérique',
    },
    {
      domain: 'Environnement',
      desc: "Data centers consomment 2% de l'électricité mondiale",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      <MuseumNav currentEra={6} style="modern" />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-spin"
            style={{ animationDuration: '20s' }}
          />
        </div>

        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6">
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent animate-fade-in">
            ÈRE 6
          </h1>
          <p
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-2 sm:mb-4 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            L'Ère Moderne
          </p>
          <p
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            2010 - Aujourd'hui • Cloud, IA, IoT et l'omniprésence du numérique
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 sm:mb-16">
          {[
            { id: 'overview', label: "Vue d'ensemble" },
            { id: 'tech', label: 'Technologies' },
            { id: 'impact', label: 'Impact' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'overview' | 'tech' | 'impact')}
              className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full font-semibold transition-all text-sm sm:text-base ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-12 sm:space-y-16">
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-12">
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-purple-400">
                  L'Explosion du Numérique
                </h2>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                  Les années 2010 marquent l'avènement du cloud computing, libérant les entreprises
                  de l'infrastructure physique. Amazon, Microsoft et Google deviennent les piliers
                  de l'économie numérique mondiale.
                </p>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  L'intelligence artificielle, après des décennies de recherche, connaît une
                  renaissance explosive grâce au deep learning et à la disponibilité massive de
                  données.
                </p>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-pink-500/20 hover:border-pink-500/40 transition-all">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-pink-400">
                  Internet Ubiquitaire
                </h2>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                  Plus de 5 milliards de personnes connectées. Les smartphones deviennent
                  l'extension de notre cerveau, gérant nos vies, nos relations et notre identité.
                </p>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  L'Internet of Things connecte des milliards d'objets : thermostats, voitures,
                  montres, réfrigérateurs. La frontière entre physique et numérique s'estompe.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { value: '5 Md', label: 'Utilisateurs', color: 'purple' },
                { value: '90%', label: 'Données créées depuis 2016', color: 'pink' },
                { value: '50 Md', label: 'Objets IoT connectés', color: 'cyan' },
                { value: '2 ZB', label: 'Données générées/jour', color: 'violet' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-purple-500/30 text-center hover:scale-105 transition-all"
                >
                  <div className="text-2xl sm:text-4xl font-bold text-purple-400 mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tech' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technologies Clés
            </h2>

            <div className="relative">
              <div
                className="bg-slate-900/70 backdrop-blur-sm rounded-3xl p-6 sm:p-12 border-2 transition-all"
                style={{
                  borderColor: technologies[currentTech].color,
                  boxShadow: `0 20px 60px ${technologies[currentTech].color}40`,
                }}
              >
                <div className="text-center">
                  <div
                    className="text-4xl sm:text-6xl font-bold mb-3 sm:mb-4"
                    style={{ color: technologies[currentTech].color }}
                  >
                    {technologies[currentTech].year}
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
                    {technologies[currentTech].title}
                  </h3>
                  <p className="text-base sm:text-xl text-gray-300 leading-relaxed">
                    {technologies[currentTech].description}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 sm:mt-8">
                <button
                  onClick={() =>
                    setCurrentTech((prev) => (prev > 0 ? prev - 1 : technologies.length - 1))
                  }
                  className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all text-sm sm:text-base"
                >
                  ← Précédent
                </button>
                <div className="flex items-center gap-2">
                  {technologies.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTech(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                        index === currentTech ? 'bg-purple-500 w-6 sm:w-8' : 'bg-slate-600'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() =>
                    setCurrentTech((prev) => (prev < technologies.length - 1 ? prev + 1 : 0))
                  }
                  className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-all text-sm sm:text-base"
                >
                  Suivant →
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Impact Tab */}
        {activeTab === 'impact' && (
          <div className="space-y-8 sm:space-y-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Impact sur la Société
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {impacts.map((impact, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-purple-400 mb-3 sm:mb-4">
                    {impact.domain}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {impact.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Critical Reflection */}
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-sm rounded-2xl p-6 sm:p-10 border border-red-500/30">
              <h3 className="text-2xl sm:text-3xl font-bold text-red-400 mb-4 sm:mb-6 text-center">
                Les Limites du Modèle Actuel
              </h3>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-red-300">Surveillance de masse :</strong> Nos données
                  personnelles alimentent des algorithmes de tracking et de profilage sans
                  précédent.
                </p>
                <p>
                  <strong className="text-orange-300">Centralisation :</strong> Quelques géants
                  technologiques contrôlent l'infrastructure mondiale, créant des monopoles
                  numériques.
                </p>
                <p>
                  <strong className="text-yellow-300">Crise climatique :</strong> L'empreinte
                  carbone du numérique équivaut désormais à celle de l'aviation civile.
                </p>
                <p>
                  <strong className="text-green-300">Fracture numérique :</strong> Des milliards
                  restent exclus de l'accès à Internet et aux opportunités qu'il offre.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 sm:mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-6 sm:p-12 border border-purple-500/30">
            <h3 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Et maintenant ?
            </h3>
            <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              L'histoire d'Internet n'est pas terminée. Chaque jour apporte de nouvelles
              technologies, de nouveaux défis et de nouvelles opportunités. Le futur du réseau
              dépend des choix que nous faisons aujourd'hui.
            </p>
            <Link
              to="/end"
              className="inline-block px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-base sm:text-xl rounded-xl transition-all hover:scale-105 shadow-2xl shadow-purple-500/50"
            >
              Découvrir la conclusion
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
