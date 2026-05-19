import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function EndPage() {
  const [zoomLevel, setZoomLevel] = useState(3);
  const [showContent, setShowContent] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const eras = [
    {
      id: 1,
      year: '1950-1969',
      title: 'Les Pionniers',
      color: '#00FF00',
      description: 'ARPANET, premiers réseaux',
    },
    {
      id: 2,
      year: '1970-1984',
      title: 'Les Protocoles',
      color: '#00DD00',
      description: 'TCP/IP, Email, Usenet',
    },
    {
      id: 3,
      year: '1985-1994',
      title: 'Le Web Naît',
      color: '#00BB00',
      description: 'WWW, HTML, premiers navigateurs',
    },
    {
      id: 4,
      year: '1995-2004',
      title: 'Grand Public',
      color: '#FFFF00',
      description: 'Forums, MSN, Skyblog, P2P',
    },
    {
      id: 5,
      year: '2005-2009',
      title: 'Web 2.0',
      color: '#FFA500',
      description: 'Réseaux sociaux, YouTube, smartphones',
    },
    {
      id: 6,
      year: '2010+',
      title: "L'Ère Moderne",
      color: '#00FFFF',
      description: 'Cloud, IA, IoT, Big Data',
    },
  ];

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setZoomLevel(1);
    }, 500);

    const timer2 = setTimeout(() => {
      setShowContent(true);
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Timeline avec effet de dézoom */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 2px 2px, rgba(0, 255, 0, 0.15) 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <motion.div
          className="relative w-full px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20"
          initial={{ scale: zoomLevel }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : -50 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-green-500 font-mono mb-3 sm:mb-4 px-4"
              style={{
                textShadow: '0 0 30px rgba(34, 197, 94, 0.8)',
              }}
            >
              L'INTERNET D'AVANT
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-green-400 font-mono px-4">
              Un voyage à travers 60 ans d'histoire numérique
            </p>
          </motion.div>

          {/* Timeline horizontale */}
          <div className="relative max-w-7xl mx-auto overflow-x-auto">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: showContent ? 1 : 0 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="absolute top-1/2 left-0 right-0 h-1 sm:h-2 bg-gradient-to-r from-green-500 via-yellow-500 to-cyan-500 rounded-full hidden sm:block"
              style={{
                transformOrigin: 'left',
                boxShadow: '0 0 20px rgba(34, 197, 94, 0.6)',
              }}
            />

            <div className="relative flex flex-col sm:flex-row justify-between items-center sm:pt-32 gap-6 sm:gap-0 overflow-hidden ">
              {eras.map((era, index) => (
                <motion.div
                  key={era.id}
                  initial={{ opacity: 0, scale: 0, y: 100 }}
                  animate={{
                    opacity: showContent ? 1 : 0,
                    scale: showContent ? 1 : 0,
                    y: showContent ? 0 : 100,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 1.5 + index * 0.2,
                    type: 'spring',
                  }}
                  className="flex flex-col items-center w-full sm:w-auto"
                  style={{ flex: 1 }}
                >
                  <div
                    className="w-4 h-4 sm:w-6 sm:h-6 rounded-full sm:-mt-32 mb-3 sm:mb-4 relative"
                    style={{
                      backgroundColor: era.color,
                      boxShadow: `0 0 20px ${era.color}`,
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: era.color }}
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.8, 0, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                  </div>
                  <a href={`/era/${era.id}`} className="hover:scale-105 transition-transform">
                    <div
                      className="bg-black/80 border-2 rounded-lg p-3 sm:p-4 backdrop-blur-sm w-full sm:min-w-[160px] text-center"
                      style={{
                        borderColor: era.color,
                        boxShadow: `0 0 15px ${era.color}40`,
                      }}
                    >
                      <div
                        className="text-xl sm:text-2xl font-bold font-mono mb-1 sm:mb-2"
                        style={{ color: era.color }}
                      >
                        ÈRE {era.id}
                      </div>
                      <div className="text-xs text-gray-400 mb-1 sm:mb-2">{era.year}</div>
                      <div className="text-xs sm:text-sm font-semibold text-white mb-1 sm:mb-2">
                        {era.title}
                      </div>
                      <div className="text-xs text-gray-300">{era.description}</div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Points importants */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 50 }}
            transition={{ duration: 1, delay: 3 }}
            className="max-w-5xl mx-auto mt-12 sm:mt-16 md:mt-24 mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-500 font-mono text-center mb-8 sm:mb-10 md:mb-12 px-4">
              Points Clés de l'Histoire
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {[
                { title: 'De 4 à 5 milliards', desc: "D'utilisateurs connectés en 60 ans" },
                { title: 'Du 56k au 5G', desc: 'Evolution exponentielle des débits' },
                {
                  title: 'Décentralisé à Centralisé',
                  desc: 'Du réseau libre aux plateformes géantes',
                },
                {
                  title: 'Communication Globale',
                  desc: 'Messages instantanés aux 4 coins du monde',
                },
                { title: 'Ordinateur à Poche', desc: 'Du desktop au smartphone universel' },
                { title: 'Création Démocratisée', desc: 'Chacun devient créateur de contenu' },
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: showContent ? 1 : 0, scale: showContent ? 1 : 0.8 }}
                  transition={{ duration: 0.6, delay: 3.5 + index * 0.1 }}
                  className="bg-gray-900/50 border border-green-500/30 rounded-lg p-4 sm:p-6 text-center backdrop-blur-sm hover:border-green-500 transition-all hover:scale-105"
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-green-400 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300">{point.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Section témoignage vidéo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 1, delay: 4 }}
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20"
      >
        <div className="max-w-5xl w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-500 font-mono text-center mb-3 sm:mb-4">
            Témoignage
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-green-400 text-center mb-8 sm:mb-10 md:mb-12 font-mono">
            M. Placin, Professeur à l'ENSC
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: showContent ? 1 : 0, scale: showContent ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 4.5 }}
            className="relative bg-black border-4 border-green-500 rounded-lg overflow-hidden"
            style={{
              boxShadow: '0 0 40px rgba(34, 197, 94, 0.4)',
            }}
          >
            <div className="relative aspect-video bg-gray-900">
              {!showVideo ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90" />

                  <div className="relative z-10 text-center px-4">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-4 sm:mb-5 md:mb-6 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24 bg-gray-900 rounded-full flex items-center justify-center">
                        <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-green-500 rounded-full flex items-center justify-center font-mono text-2xl sm:text-3xl md:text-4xl">
                          PP
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
                      M. Frédéric Placin
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-green-400 mb-6 sm:mb-7 md:mb-8 max-w-xl mx-auto">
                      "L'histoire d'Internet est celle de l'humanité connectée. Chaque ère a apporté
                      son lot d'innovations et de transformations sociales."
                    </p>
                    <button
                      onClick={() => setShowVideo(true)}
                      className="group inline-flex items-center gap-2 sm:gap-3 bg-green-500 hover:bg-green-400 text-black font-mono font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all hover:scale-105 text-sm sm:text-base"
                      style={{
                        boxShadow: '0 0 30px rgba(34, 197, 94, 0.6)',
                      }}
                    >
                      <Play className="w-5 h-5 sm:w-6 sm:h-6" />
                      Lancer le témoignage
                    </button>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <video controls className="w-full h-full">
                    <source
                      src="/assets/videos/Charlie%20bit%20my%20finger%20-%20again%20!.mp4"
                      type="video/mp4"
                    />
                    Votre navigateur ne supporte pas la lecture de vidéos.
                  </video>
                </div>
              )}
            </div>

            <div className="bg-gray-950 border-t-2 border-green-500/30 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="text-green-500 font-mono text-sm">Témoignage • M. Placin</div>
                <div className="text-gray-400 font-mono text-xs">Durée: 0:56</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 5 }}
            className="mt-8 sm:mt-10 md:mt-12 text-center"
          >
            <div className="max-w-3xl mx-auto bg-gray-900/50 border border-green-500/30 rounded-lg p-6 sm:p-8 backdrop-blur-sm">
              <div className="text-4xl sm:text-5xl md:text-6xl text-green-500 mb-3 sm:mb-4">"</div>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 italic leading-relaxed mb-3 sm:mb-4">
                Internet n'est pas qu'une technologie, c'est un miroir de notre société. Chaque
                époque a façonné le réseau à son image, et le réseau a transformé notre façon de
                vivre, de communiquer et de penser.
              </p>
              <p className="text-sm sm:text-base text-green-400 font-mono">
                — Frédéric Placin, Professeur à l'ENSC
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer final */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 1, delay: 5.5 }}
        className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-500 font-mono mb-4 sm:mb-5 md:mb-6">
            Merci de votre visite
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 md:mb-12 leading-relaxed">
            Vous avez parcouru 60 ans d'histoire numérique. De l'ARPANET aux réseaux sociaux, d'un
            réseau militaire de 4 ordinateurs à un écosystème mondial de 5 milliards d'utilisateurs,
            Internet continue d'évoluer et de nous surprendre.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
            <Link
              to="/"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-green-500 hover:bg-green-400 text-black font-mono font-bold rounded-lg transition-all hover:scale-105 text-sm sm:text-base"
              style={{
                boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)',
              }}
            >
              Recommencer le parcours
            </Link>
            <Link
              to="/era/1"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-800 hover:bg-gray-700 text-green-500 font-mono font-bold rounded-lg border-2 border-green-500 transition-all hover:scale-105 text-sm sm:text-base"
            >
              Revenir à l'Ère 1
            </Link>
          </div>

          <div className="text-xs sm:text-sm text-gray-500 font-mono">
            <p>L'Internet d'Avant • Musée Virtuel Immersif</p>
            <p className="mt-2">© 2026 • Projet éducatif et culturel</p>
          </div>
        </div>
      </motion.div>

      {/* Questionnaire Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 50 }}
        transition={{ duration: 1, delay: 6 }}
        className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-green-500/5 border-t border-green-500/20"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-500 font-mono mb-4">
              Votre Avis Nous Intéresse
            </h2>
            <p className="text-gray-400 font-mono">
              Aidez-nous à améliorer cette expérience en répondant à quelques questions.
            </p>
          </div>

          <form className="space-y-6 bg-gray-900/50 p-6 sm:p-8 rounded-xl border border-green-500/30 backdrop-blur-sm">
            <div className="space-y-2">
              <label className="block text-green-400 font-mono text-sm">
                Quelle ère avez-vous préférée ?
              </label>
              <select className="w-full bg-black border border-green-500/50 rounded-lg px-4 py-3 text-white font-mono focus:border-green-500 outline-none">
                <option>Sélectionnez une option...</option>
                <option>Ère 1 : L'Ère Fondatrice</option>
                <option>Ère 2 : L'Ère des Protocoles</option>
                <option>Ère 3 : L'Ère du Web</option>
                <option>Ère 4 : L'Ère du Grand Public</option>
                <option>Ère 5 : L'Ère du Web 2.0</option>
                <option>Ère 6 : L'Ère Moderne</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-green-400 font-mono text-sm">
                L'expérience était-elle immersive ?
              </label>
              <div className="flex gap-4">
                {[1, 2, 3, 4, 5].map((num) => (
                  <label key={num} className="flex-1 text-center cursor-pointer">
                    <input type="radio" name="immersion" className="sr-only peer" />
                    <div className="py-2 border border-green-500/30 rounded peer-checked:bg-green-500 peer-checked:text-black transition-all">
                      {num}
                    </div>
                  </label>
                ))}
              </div>
              <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                <span>Pas du tout</span>
                <span>Totalement</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-green-400 font-mono text-sm">
                Vos suggestions ou commentaires :
              </label>
              <textarea
                className="w-full bg-black border border-green-500/50 rounded-lg px-4 py-3 text-white font-mono focus:border-green-500 outline-none h-32"
                placeholder="Dites-nous ce que vous en pensez..."
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full py-4 bg-green-500 hover:bg-green-400 text-black font-mono font-bold rounded-lg transition-all hover:scale-[1.02]"
              onClick={() => alert('Merci pour votre retour !')}
            >
              Envoyer mon avis
            </button>
          </form>
        </div>
      </motion.div>

      {/* Scanlines effect */}
      <div
        className="fixed inset-0 pointer-events-none opacity-5 z-50"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(0, 255, 0, 0.1) 0px, transparent 1px, transparent 2px, rgba(0, 255, 0, 0.1) 3px)',
        }}
      />
    </div>
  );
}
