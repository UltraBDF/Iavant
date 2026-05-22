import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Target, Calendar, CheckCircle, BookOpen } from 'lucide-react';

const team = [
  {
    name: 'Marc-Antoine Daux',
    role: 'Chargé Communication',
    icon: '📢',
    description: 'Gestion de la communication, coordination des livrables et présentation du projet.',
  },
  {
    name: 'Alan Bourlard',
    role: 'Chargé Gestion de Projet (Jira)',
    icon: '📋',
    description: 'Suivi des tâches, planification des sprints et reporting via Jira.',
  },
  {
    name: 'Alexis Daugé',
    role: 'Chargé Gestion de Projet (Git)',
    icon: '🌿',
    description: 'Gestion des branches, revues de code et intégrité du dépôt Git.',
  },
  {
    name: 'Enzo Boudes',
    role: 'Chargé Qualité',
    icon: '✅',
    description: 'Tests utilisateurs, contrôle qualité et respect des critères de réussite.',
  },
];

const objectives = [
  'Concevoir un site reconstituant de manière fiable l\'histoire d\'Internet',
  'S\'inspirer des musées virtuels existants pour une expérience pédagogique',
  'Interface accessible et centrée sur l\'UX pour tous les publics',
  'Sélection d\'artefacts produisant un effet "Madeleine de Proust"',
  'Présenter une plateforme stable portant sur un internet inconstant',
];

const phases = [
  { period: 'Septembre – Toussaint', label: 'Phase 1', tasks: ['État de l\'art', 'Maquettage', 'Direction artistique'], color: 'border-green-400 text-green-400' },
  { period: 'Toussaint – Hiver', label: 'Phase 2', tasks: ['Formation Web', 'Développement front', 'Intégration du contenu'], color: 'border-yellow-400 text-yellow-400' },
  { period: 'Hiver – Mai 2026', label: 'Phase 3', tasks: ['Tests utilisateurs', 'Corrections', 'Soutenance finale'], color: 'border-cyan-400 text-cyan-400' },
];

const successCriteria = [
  'Expérience immersive et accessible à tous les publics',
  'Navigation fluide permettant de comprendre l\'évolution du Web',
  'Rigueur historique alliée à une dimension nostalgique',
  'Intérêt suscité auprès de publics curieux, nostalgiques et néophytes',
];

export default function GestionProjet() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <motion.header
        className="border-b border-green-500/30 px-6 py-4 flex items-center gap-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          to="/"
          className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm font-mono"
        >
          <ArrowLeft size={16} />
          Retour à l'accueil
        </Link>
        <span className="text-green-500/40 font-mono">|</span>
      </motion.header>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-20">

        {/* Hero */}
        <motion.section
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="text-green-500 font-mono text-sm tracking-widest uppercase">
            Projet TransDisciplinaire N°7
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            L'Internet
            <span className="block text-green-400">d'Avant</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Un musée virtuel retraçant l'évolution des usages, des modes et des technologies
            qui ont façonné Internet depuis ses débuts.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm font-mono">
            <span className="px-3 py-1 border border-green-500/40 rounded text-green-400">Bordeaux INP ENSC</span>
            <span className="px-3 py-1 border border-green-500/40 rounded text-green-400">Septembre 2025</span>
            <span className="px-3 py-1 border border-green-500/40 rounded text-green-400">Soutenance Mai 2026</span>
          </div>
        </motion.section>

        {/* Contexte */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <BookOpen size={20} className="text-green-400" />
            <h2 className="text-2xl font-bold text-green-400 font-mono">Contexte du projet</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-green-500/20 rounded-lg p-6 bg-green-500/5 space-y-3">
              <h3 className="font-semibold text-white">Utilisateurs finaux</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex gap-2"><span className="text-green-400">›</span>Les nouvelles générations : un musée innovant et pédagogique sur l'histoire d'Internet.</li>
                <li className="flex gap-2"><span className="text-green-400">›</span>Les générations précédentes : un voyage nostalgique à travers leur vécu d'internautes.</li>
              </ul>
            </div>
            <div className="border border-green-500/20 rounded-lg p-6 bg-green-500/5 space-y-3">
              <h3 className="font-semibold text-white">Domaines techniques</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex gap-2"><span className="text-green-400">›</span>Programmation Web — React, TypeScript, Tailwind CSS</li>
                <li className="flex gap-2"><span className="text-green-400">›</span>Conception centrée utilisateur (CCU) — enquêtes, témoignages</li>
                <li className="flex gap-2"><span className="text-green-400">›</span>Ergonomie informatique — accessibilité, UX design</li>
                <li className="flex gap-2"><span className="text-green-400">›</span>Histoire des technologies — retracer l'histoire d'Internet</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 border border-green-500/20 rounded-lg p-6 bg-green-500/5">
            <h3 className="font-semibold text-white mb-3">Finalité du produit</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Créer un site web innovant retraçant l'histoire d'Internet, afin de renforcer les
              connaissances des nouvelles générations, et rappeler aux précédentes générations ce
              qu'elles ont connu à travers des témoignages, artefacts et designs de l'époque.
            </p>
          </div>
        </motion.section>

        {/* Équipe */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Users size={20} className="text-green-400" />
            <h2 className="text-2xl font-bold text-green-400 font-mono">L'équipe</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                className="border border-green-500/20 rounded-lg p-6 bg-green-500/5 hover:bg-green-500/10 hover:border-green-500/40 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-3xl mb-3">{member.icon}</div>
                <p className="text-xs font-mono text-green-500 mb-1 uppercase tracking-wider">{member.role}</p>
                <h3 className="font-bold text-white text-lg mb-2">{member.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Objectifs */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Target size={20} className="text-green-400" />
            <h2 className="text-2xl font-bold text-green-400 font-mono">Objectifs du projet</h2>
          </div>
          <div className="space-y-3">
            {objectives.map((obj, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4 border border-green-500/20 rounded-lg p-4 bg-green-500/5"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <span className="text-green-400 font-mono text-sm mt-0.5 shrink-0">0{i + 1}</span>
                <p className="text-gray-300 text-sm leading-relaxed">{obj}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Planning */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Calendar size={20} className="text-green-400" />
            <h2 className="text-2xl font-bold text-green-400 font-mono">Planning prévisionnel</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.label}
                className={`border rounded-lg p-6 bg-black space-y-4 ${phase.color.split(' ')[0]}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
              >
                <div>
                  <p className={`font-mono text-xs font-bold uppercase tracking-wider ${phase.color.split(' ')[1]}`}>
                    {phase.label}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">{phase.period}</p>
                </div>
                <ul className="space-y-2">
                  {phase.tasks.map((task) => (
                    <li key={task} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${phase.color.split(' ')[1].replace('text-', 'bg-')}`} />
                      {task}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 border border-green-500/20 rounded-lg p-4 bg-green-500/5">
            <p className="text-gray-400 text-sm text-center font-mono">
              Soutenance intermédiaire entre Phase 1 et Phase 2 · Soutenance finale Mai 2026
            </p>
          </div>
        </motion.section>

        {/* Critères de réussite */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle size={20} className="text-green-400" />
            <h2 className="text-2xl font-bold text-green-400 font-mono">Critères de réussite</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {successCriteria.map((criterion, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 border border-green-500/20 rounded-lg p-4 bg-green-500/5"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <CheckCircle size={16} className="text-green-400 shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm leading-relaxed">{criterion}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Footer nav */}
        <motion.div
          className="flex justify-center pb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/"
            className="flex items-center gap-2 px-6 py-3 border border-green-500 text-green-400 hover:bg-green-500 hover:text-black rounded-lg font-mono text-sm transition-all"
          >
            <ArrowLeft size={16} />
            Retour à l'accueil
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
