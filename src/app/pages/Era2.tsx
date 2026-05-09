import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MuseumNav from '@/app/components/MuseumNav';

// Ère 2 (années 1980) : Texte pur style BBS/Terminal (pas de CSS, juste du texte)
export default function Era2() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'F1') {
        e.preventDefault();
        navigate('/');
      } else if (e.key === 'F2') {
        e.preventDefault();
        navigate('/era/1');
      } else if (e.key === 'F3') {
        e.preventDefault();
        navigate('/era/3');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  return (
    <div style={{
      backgroundColor: '#0000AA',
      color: '#AAAAAA',
      minHeight: '100vh',
      fontFamily: 'monospace',
      padding: '0',
      margin: '0'
    }}>
      <MuseumNav currentEra={2} style="dos" />

      {/* Tout en texte brut, comme sur un vrai BBS/terminal années 80 */}
      <pre
        style={{
          color: '#AAAAAA',
          padding: '20px',
          margin: '0',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
        }}
      >
        {`
╔═══════════════════════════════════════════════════════════════════════════╗
║                     INTERNET HISTORY ARCHIVE - BBS                        ║
║                           ERA 2 OF 6 - 1980s                              ║
╚═══════════════════════════════════════════════════════════════════════════╝

 ATDT 555-0180
 CONNECT 1200

 Welcome to the INTERNET HISTORY ARCHIVE BBS
 Running on VAX/VMS - 300 baud connection
 
 Please wait while system loads...
 
════════════════════════════════════════════════════════════════════════════

 ÈRE 2 : L'INTERNET ACADÉMIQUE (ANNÉES 1980)
 L'ère institutionnelle

════════════════════════════════════════════════════════════════════════════

[DESCRIPTION]

Les années 1980 voient l'adoption de TCP/IP comme protocole standard
(1er janvier 1983), la création du DNS pour gérer les noms de domaine,
et l'expansion d'Internet au-delà des frontières américaines.

Internet devient un "réseau de réseaux", interconnectant les universités
du monde entier. C'est l'époque des premiers services en ligne comme
Usenet, les BBS (Bulletin Board Systems), et les premières messageries
électroniques.

Les utilisateurs se connectent via modem à 300-2400 bauds sur des
terminaux monochromes. Pas d'images, pas de couleurs (sauf ANSI), 
juste du texte et des caractères ASCII.

════════════════════════════════════════════════════════════════════════════

[1] 1983 : L'ADOPTION DE TCP/IP

Le 1er janvier 1983, ARPANET bascule officiellement vers TCP/IP,
abandonnant l'ancien protocole NCP.

TCP (Transmission Control Protocol)
  └─ Assure la fiabilité de la transmission
  └─ Gère la segmentation et le réassemblage
  └─ Contrôle le flux de données

IP (Internet Protocol)
  └─ Routage des paquets
  └─ Adressage unique pour chaque machine
  └─ Permet l'interconnexion de réseaux hétérogènes

Ce changement est si important qu'on le considère comme la véritable
naissance d'Internet tel qu'on le connaît aujourd'hui.

────────────────────────────────────────────────────────────────────────────

[2] 1984 : CRÉATION DU DNS

Le Domain Name System remplace le fichier HOSTS.TXT central.

AVANT (fichier HOSTS.TXT téléchargé depuis Stanford):
  192.168.1.1    computer-a.arpa
  192.168.1.2    computer-b.arpa
  192.168.1.3    computer-c.arpa

APRÈS (DNS hiérarchique):
  Structure en arbre inversé
  .com    .edu    .gov    .mil    .org    .net

Premiers noms de domaine enregistrés:
  • symbolics.com (15 mars 1985) - toujours actif aujourd'hui!
  • bbn.com (24 avril 1985)
  • think.com (24 mai 1985)

────────────────────────────────────────────────────────────────────────────

[3] USENET : LES NEWSGROUPS

Créé en 1980 par des étudiants de Duke University, Usenet est un
système de forums distribués fonctionnant sans serveur central.

Hiérarchies principales:
  comp.*      - Informatique (comp.lang.c, comp.os.unix)
  sci.*       - Sciences (sci.physics, sci.math)
  rec.*       - Loisirs (rec.games.video, rec.music)
  talk.*      - Débats (talk.politics, talk.religion)
  misc.*      - Divers

En 1988, création de la hiérarchie alt.* (alternative)
  → Espace de liberté totale, sans modération
  → alt.folklore.computers devient légendaire

Messages propagés de serveur en serveur via UUCP

────────────────────────────────────────────────────────────────────────────

[4] BBS (BULLETIN BOARD SYSTEMS)

Les BBS sont des serveurs locaux accessibles par modem.
Une seule personne peut se connecter à la fois (ou quelques-unes
sur les systèmes multilignes luxueux).

Connexion typique:

  ATDT 555-1234
  
  RING... RING...
  
  CONNECT 1200
  
  ╔══════════════════════════════════════════╗
  ║     Welcome to THE MATRIX BBS            ║
  ║     Running on Commodore 64              ║
  ║     SysOp: Neo                           ║
  ╚══════════════════════════════════════════╝
  
  Login: morpheus
  Password: ********
  
  Last caller: Trinity (30 minutes ago)
  
  MAIN MENU:
  ──────────
  [1] Messages Board
  [2] File Library (warez, demos, docs)
  [3] Online Games (Door Games)
  [4] Chat with SysOp
  [5] User List
  [6] Upload/Download
  [Q] Logoff
  
  Your choice: _

Culture BBS:
  • ANSI art pour décorer les menus
  • Ratios upload/download
  • Elite boards avec accès réservé
  • FidoNet pour connecter les BBS entre eux

────────────────────────────────────────────────────────────────────────────

[5] EXPANSION GÉOGRAPHIQUE

1980 - Usenet créé (Duke & UNC)
1981 - BITNET relie les universités américaines
1983 - ARPANET se scinde (ARPANET + MILNET)
1984 - Janet (UK) se connecte à ARPANET
       Plus de 1,000 ordinateurs connectés
1986 - NSFNET créé (National Science Foundation)
       Backbone à 56 kbit/s
1988 - Connexion de la France via INRIA
       Internet Relay Chat (IRC) inventé
1989 - 100,000 ordinateurs connectés dans le monde

────────────────────────────────────────────────────────────────────────────

[6] USAGES DOMINANTS

• Email entre chercheurs et étudiants
  Format: user@host.domain.arpa
  
• Newsgroups (Usenet) pour discussions thématiques
  Lecture avec 'rn' (readnews) ou 'nn'
  
• FTP (File Transfer Protocol) pour échanger des fichiers
  Mode texte uniquement
  
• Telnet pour accès distant aux mainframes
  Permet de se connecter à des systèmes à distance
  
• Archie (1990) - premier moteur de recherche FTP

• IRC (1988) - chat en temps réel, ancêtre de Discord

────────────────────────────────────────────────────────────────────────────

[7] MATÉRIEL & CONTEXTE

ORDINATEURS DE L'ÉPOQUE:
  • IBM PC (1981) - 4.77 MHz, 64 Ko de RAM
  • Apple II (1977-1993)
  • Commodore 64 (1982) - ordinateur le plus vendu
  • Apple Macintosh (1984)

MODEMS:
  • 300 bauds (1980) - 30 caractères/seconde
  • 1200 bauds (1984)
  • 2400 bauds (1986)
  
  Le modem fait "SCREEEEEE KRRRRR BEEEEEP" en se connectant

ÉCRANS:
  • Monochromes verts (P1 phosphor)
  • Monochromes ambrés
  • 24 lignes × 80 colonnes
  • Pas de souris!

STOCKAGE:
  • Disquettes 5"1/4 - 360 Ko
  • Cassettes audio pour Commodore

────────────────────────────────────────────────────────────────────────────

[8] CULTURE & RÉFÉRENCES

FILMS & MÉDIAS:
  • "WarGames" (1983) - popularise le hacking
    "Shall we play a game?"
  
  • "TRON" (1982) - esthétique digitale
  
  • "Blade Runner" (1982) - cyberpunk naissant

LITTÉRATURE:
  • "Neuromancer" de William Gibson (1984)
    Invention du terme "cyberspace"
  
  • Jargon File - dictionnaire de la culture hacker
  
  • Phrack Magazine - zine hacker (1985)

HACKING:
  • 414s gang (1983)
  • Kevin Mitnick commence ses exploits
  • Premiers virus: Elk Cloner (1982), Brain (1986)
  • Legion of Doom vs Masters of Deception

────────────────────────────────────────────────────────────────────────────

[9] TÉMOIGNAGES

"Je me souviens passer des heures sur mon modem 300 bauds à télécharger
un seul fichier. On voyait le texte s'afficher ligne par ligne. C'était
magique de communiquer avec quelqu'un à l'autre bout du pays."
                                                    - SysOp, Texas BBS

"Sur Usenet, on avait des débats passionnés qui duraient des semaines.
Chaque message était réfléchi parce qu'il fallait du temps pour poster.
Pas de spam, pas de trolls... enfin presque."
                                                    - Chercheur, MIT

"Les BBS étaient des communautés fermées. Il fallait connaître le numéro
de téléphone, avoir un modem, et souvent un mot de passe. C'était élitiste
mais c'était aussi très convivial."
                                                    - Utilisateur BBS

────────────────────────────────────────────────────────────────────────────

[TRANSITION VERS L'ÈRE SUIVANTE]

À la fin des années 1980, l'infrastructure est en place. TCP/IP est
standardisé, le DNS fonctionne, les réseaux s'interconnectent.

Au CERN, un chercheur britannique nommé Tim Berners-Lee travaille sur
un système pour gérer la documentation scientifique. Il ne le sait pas
encore, mais son invention va transformer Internet d'un réseau de texte
en un média visuel universel.

En 1989, il propose le "World Wide Web". En 1990, il crée le premier
navigateur. En 1991, le Web devient public.

Tout va changer.

════════════════════════════════════════════════════════════════════════════

Press [F3] to continue to ERA 3: The Birth of the Web...

Connection time: 45 minutes
Thank you for calling INTERNET HISTORY ARCHIVE BBS
Goodbye!

NO CARRIER
`}
      </pre>
    </div>
  );
}
