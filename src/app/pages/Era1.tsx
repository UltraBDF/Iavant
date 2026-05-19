import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import MuseumNav from '@/app/components/MuseumNav';

const terminalLines = [
  '> SYSTEM INITIALIZING...',
  '> CONNECTING TO ARPANET NODE...',
  '> CONNECTION ESTABLISHED',
  '',
  '================================================================================',
  "ÈRE 1 : L'ÈRE FONDATRICE (1950-1979)",
  'Le réseau des chercheurs',
  '================================================================================',
  '',
  'DESCRIPTION:',
  "Cette première période correspond à la genèse d'Internet dans un contexte",
  'essentiellement militaire et académique. Les recherches menées aux États-Unis,',
  "notamment par l'ARPA (Advanced Research Projects Agency), visent à concevoir",
  'un réseau de communication résilient et décentralisé.',
  '',
  "La création d'ARPANET in 1969 marque la première concrétisation de ces",
  "concepts. Internet n'existe pas encore comme média ou espace social : il",
  "s'agit d'un outil expérimental réservé à une élite scientifique.",
  '',
  '================================================================================',
  'ARPANET (1969) - Premier réseau à commutation de paquets',
  '================================================================================',
  '',
  'LOGIN: arpa_user',
  'PASSWORD: ********',
  '',
  'CONNECTING TO NODE 2...',
  'CONNECTION ESTABLISHED',
  '',
  '// Premier message envoyé: "LO" (tentative d\'envoyer "LOGIN")',
  '// Le système planta avant la fin du mot',
  '',
  '================================================================================',
  'ARCHITECTURE RÉSEAU',
  '================================================================================',
  '',
  '[NODE 1] --- UCLA',
  '    |',
  '[NODE 2] --- Stanford Research Institute (SRI)',
  '    |',
  '[NODE 3] --- UC Santa Barbara (UCSB)',
  '    |',
  '[NODE 4] --- University of Utah',
  '',
  'PROTOCOLE: NCP (Network Control Protocol)',
  'VITESSE: 50 kbit/s',
  'TECHNOLOGIE: Commutation de paquets',
  '',
  '================================================================================',
  'CONCEPTS FONDAMENTAUX',
  '================================================================================',
  '',
  '1. RÉSEAU DISTRIBUÉ',
  '   - Architecture décentralisée pour la résilience',
  '   - Pas de point de défaillance unique',
  '   - Capacité à router autour des pannes',
  '',
  '2. COMMUTATION DE PAQUETS',
  '   - Division des données en petits paquets',
  '   - Transmission indépendante de chaque paquet',
  '   - Réassemblage à destination',
  '',
  '3. CONTEXTE MILITAIRE',
  '   - Financement ARPA (Département de la Défense)',
  '   - Objectif: Communication résistante à une attaque nucléaire',
  '   - Collaboration avec universités américaines',
  '',
  '================================================================================',
  'USAGES DOMINANTS',
  '================================================================================',
  '',
  '- Partage de ressources informatiques entre universités',
  '- Collaboration sur des projets de recherche scientifique',
  '- Expérimentation de protocoles réseau',
  '- Communication point-à-point entre chercheurs',
  '',
  '================================================================================',
  'CONTEXTE CULTUREL',
  '================================================================================',
  '',
  "ORDINATEURS DE L'ÉPOQUE:",
  "- Taille d'une pièce entière (mainframes)",
  '- Coût: plusieurs millions de dollars',
  '- Accès réservé aux experts et scientifiques',
  '- Interfaces: cartes perforées, télétype',
  '',
  'PERCEPTION PUBLIQUE:',
  '- Machines complexes et mystérieuses',
  '- Réservées aux élites académiques et militaires',
  '- Aucune notion d\'usage "personnel"',
  "- Science-fiction: HAL 9000 (2001 l'Odyssée de l'espace)",
  '',
  '================================================================================',
  'ACTEURS CLÉS',
  '================================================================================',
  '',
  'J.C.R. LICKLIDER - Vision de "Intergalactic Computer Network" (1962)',
  'PAUL BARAN - Concept de réseau distribué',
  'LEONARD KLEINROCK - Théorie de la commutation de paquets',
  "LARRY ROBERTS - Architecte en chef d'ARPANET",
  'BOB TAYLOR - Directeur ARPA',
  '',
  '================================================================================',
  'ÉVÉNEMENTS MARQUANTS',
  '================================================================================',
  '',
  '1969 - 29 OCTOBRE : Premier message ARPANET',
  '       Envoi de "LO" entre UCLA et Stanford (crash avant "LOGIN")',
  '',
  '1971 - Invention du courrier électronique par Ray Tomlinson',
  '       Choix du symbole @ pour séparer utilisateur et machine',
  '',
  '1973 - Première connexion internationale (Norvège et Angleterre)',
  '',
  '1974 - Spécification TCP/IP par Vint Cerf et Bob Kahn',
  '',
  '================================================================================',
  "TRANSITION VERS L'ÈRE SUIVANTE",
  '================================================================================',
  '',
  "L'augmentation progressive du nombre de machines connectées rend nécessaire",
  'la standardisation des protocoles et des modes de communication. Internet',
  'quitte peu à peu le stade expérimental pour devenir une infrastructure',
  "pérenne, ouvrant la voie à l'adoption de standards essentiels dans les",
  'années 1980.',
  '',
  'NEXT: Adoption de TCP/IP et création du DNS',
  '',
  '================================================================================',
  '',
  'Commandes disponibles:',
  "  NEXT    - Passer à l'ère suivante",
  '  BACK    - Retour au menu principal',
  "  HELP    - Afficher l'aide",
  '',
];

export default function Era1() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (currentLine < terminalLines.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + terminalLines[currentLine] + '\n');
        setCurrentLine((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [currentLine]);

  useEffect(() => {
    // Only scroll to bottom if the user is typing a command or specifically requested (like HELP)
    // Avoid scrolling during the initial sequence to let the user read from the top as requested
  }, [displayedText, currentLine]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputValue.toUpperCase().trim();

    if (cmd === 'NEXT') {
      navigate('/era/2');
    } else if (cmd === 'BACK') {
      navigate('/');
    } else if (cmd === 'HELP') {
      setDisplayedText(
        (prev) =>
          prev +
          '\n> HELP\n\n' +
          "SYSTÈME D'AIDE ARPANET v1.0\n" +
          '---------------------------\n' +
          "NEXT : Passer à l'ère suivante (Adoption de TCP/IP)\n" +
          'BACK : Retour au menu principal (Accueil)\n' +
          "HELP : Afficher ce message d'aide\n\n" +
          'Note : Vous pouvez aussi utiliser la barre de navigation en bas.\n',
      );
      // Ensure we scroll to bottom when help is displayed
      setTimeout(scrollToBottom, 50);
    } else {
      setDisplayedText((prev) => prev + `\n> ${inputValue}\nERREUR: COMMANDE INCONNUE "${cmd}"\n`);
      setTimeout(scrollToBottom, 50);
    }
    setInputValue('');
  };

  const renderHighlightedText = () => {
    // Split text by lines first to handle line-based highlighting
    const lines = displayedText.split('\n');

    return lines.map((line, lineIdx) => {
      // If line contains specific keywords, highlight the whole line or parts of it
      if (
        line.includes('Commandes disponibles:') ||
        line.includes('NEXT    -') ||
        line.includes('BACK    -') ||
        line.includes('HELP    -')
      ) {
        const parts = line.split(/(NEXT|BACK|HELP)/g);
        return (
          <div key={lineIdx} className="bg-green-500/10">
            {parts.map((part, i) => {
              if (['NEXT', 'BACK', 'HELP'].includes(part)) {
                return (
                  <span key={i} className="bg-green-500 text-black px-1 font-bold animate-pulse">
                    {part}
                  </span>
                );
              }
              return part;
            })}
          </div>
        );
      }

      // Normal line with word-based highlighting
      const parts = line.split(/(NEXT|BACK|HELP)/g);
      return (
        <div key={lineIdx}>
          {parts.map((part, i) => {
            if (['NEXT', 'BACK', 'HELP'].includes(part)) {
              return (
                <span key={i} className="bg-green-500 text-black px-1 font-bold">
                  {part}
                </span>
              );
            }
            return part;
          })}
        </div>
      );
    });
  };

  return (
    <div className="min-h-screen bg-black text-green-500 p-4 font-mono pb-24 text-base sm:text-lg">
      <MuseumNav currentEra={1} style="terminal" />
      <div className="max-w-4xl mx-auto">
        <div className="whitespace-pre-wrap break-words">{renderHighlightedText()}</div>

        {currentLine >= terminalLines.length && (
          <form onSubmit={handleCommand} className="mt-4 flex items-center">
            <span className="mr-2">&gt;</span>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="bg-transparent border-none outline-none text-green-500 font-mono w-full"
              aria-label="Terminal input"
            />
            <span className="animate-pulse bg-green-500 text-black px-1 ml-1">█</span>
          </form>
        )}
        <div ref={terminalEndRef} />
      </div>
    </div>
  );
}
