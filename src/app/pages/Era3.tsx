import { Link } from 'react-router-dom';
import MuseumNav from '@/app/components/MuseumNav';

// Ère 3 : HTML PUR sans CSS (1990s) - comme les vrais premiers sites web
export default function Era3() {
  return (
    <div
      style={{
        backgroundColor: '#C0C0C0',
        color: '#000000',
        fontFamily: 'Times New Roman, Times, serif',
        margin: '0',
        padding: '20px',
        minHeight: '100vh',
      }}
    >
      {/* Barre de navigation style navigateur années 90 */}
      <div
        style={{
          backgroundColor: '#C0C0C0',
          border: '2px outset #FFFFFF',
          padding: '5px',
          marginBottom: '10px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <b>Location:</b> http://www.internet-history.net/era3.html
      </div>

      <MuseumNav currentEra={3} style="html" />

      {/* Navigation */}
      <p style={{ textAlign: 'center', color: '#666666', marginTop: '20px' }}>
        💡 Navigation en bas de page
      </p>

      <hr />

      {/* Titre */}
      <center>
        <h1>ÈRE 3 : LA NAISSANCE DU WEB</h1>
        <h2>L'Internet des pionniers</h2>
        <p>
          <i>Années 1990</i>
        </p>
      </center>

      <hr />

      {/* Description */}
      <h2>Description</h2>
      <p>
        L'invention du <b>World Wide Web</b> par Tim Berners-Lee au CERN en 1989 repose sur trois
        éléments clés :
      </p>
      <ul>
        <li>
          <b>HTML</b> (HyperText Markup Language) : langage de balisage pour structurer le contenu
        </li>
        <li>
          <b>HTTP</b> (HyperText Transfer Protocol) : protocole de transfert
        </li>
        <li>
          <b>URL</b> (Uniform Resource Locator) : système d'adressage universel
        </li>
      </ul>
      <p>
        Cette trinité révolutionne l'accès à l'information. L'apparition de navigateurs graphiques
        comme <b>Mosaic</b> (1993) puis <b>Netscape Navigator</b> (1994) rend Internet accessible à
        un public beaucoup plus large.
      </p>

      <hr />

      {/* La première page web */}
      <h2>La première page web (1991)</h2>
      <p>
        Tim Berners-Lee crée la toute première page web au CERN, expliquant le concept du World Wide
        Web. Voici à quoi elle ressemblait :
      </p>

      <blockquote
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #000000',
          padding: '10px',
          fontFamily: 'Courier New, monospace',
        }}
      >
        <p>
          <b>World Wide Web</b>
        </p>
        <p>
          The WorldWideWeb (W3) is a wide-area
          <a href="#" style={{ color: '#0000EE' }}>
            hypermedia
          </a>{' '}
          information retrieval initiative aiming to give universal access to a large universe of
          documents.
        </p>
        <p>
          Everything there is online about W3 is linked directly or indirectly to this document,
          including an{' '}
          <a href="#" style={{ color: '#0000EE' }}>
            executive summary
          </a>{' '}
          of the project,{' '}
          <a href="#" style={{ color: '#0000EE' }}>
            Mailing lists
          </a>
          ,
          <a href="#" style={{ color: '#0000EE' }}>
            Policy
          </a>
          , November's
          <a href="#" style={{ color: '#0000EE' }}>
            W3 news
          </a>
          ,
          <a href="#" style={{ color: '#0000EE' }}>
            Frequently Asked Questions
          </a>
          .
        </p>
      </blockquote>

      <p>
        <i>Note : Cette page utilisait UNIQUEMENT du HTML. Pas de CSS, pas de JavaScript.</i>
      </p>

      <hr />

      {/* Navigateurs */}
      <h2>Mosaic et Netscape : La démocratisation</h2>
      <p>
        Les premiers navigateurs graphiques transforment l'Internet en un média visuel accessible.
      </p>

      <table border={1} cellPadding="5" cellSpacing="0" style={{ borderCollapse: 'collapse' }}>
        <tr style={{ backgroundColor: '#E0E0E0' }}>
          <th>Année</th>
          <th>Navigateur</th>
          <th>Événement</th>
        </tr>
        <tr>
          <td align="center">1993</td>
          <td>
            <b>Mosaic</b>
          </td>
          <td>Premier navigateur graphique grand public</td>
        </tr>
        <tr style={{ backgroundColor: '#F0F0F0' }}>
          <td align="center">1994</td>
          <td>
            <b>Netscape Navigator</b>
          </td>
          <td>Domine le marché avec 80% de parts</td>
        </tr>
        <tr>
          <td align="center">1995</td>
          <td>
            <b>Internet Explorer</b>
          </td>
          <td>Microsoft entre dans la bataille des navigateurs</td>
        </tr>
      </table>

      <hr />

      {/* Exemple de page perso */}
      <h2>L'esthétique des sites pionniers</h2>
      <p>
        Les codes graphiques sont rudimentaires mais porteurs d'une forte identité. Fond gris
        (#C0C0C0), texte noir, liens bleus soulignés, et l'utilisation intensive de balises
        &lt;center&gt; et &lt;font&gt; définissent l'époque.
      </p>

      <blockquote
        style={{
          backgroundColor: '#FFFFFF',
          border: '3px ridge #808080',
          padding: '15px',
        }}
      >
        <center>
          <h3>★ Bienvenue sur ma page personnelle! ★</h3>
          <p>
            <font color="red">Dernière mise à jour: 15 mars 1998</font>
          </p>
          <p>
            <img src="/assets/images/club_internet.png" alt="NEW" width="100" height="100" />
            <font size="+1">
              <b>Club Internet</b>
            </font>
          </p>
          <hr style={{ width: '50%' }} />
          <p>
            <font size="-1">
              Vous êtes le visiteur n° <b>00042</b>
            </font>
          </p>
          <p>
            <font size="-2">Site optimisé pour Netscape Navigator 4.0</font>
          </p>
        </center>
      </blockquote>

      <hr />

      {/* Services web */}
      <h2>Les premiers services web</h2>
      <p>L'écosystème du Web années 90 :</p>
      <ul>
        <li>
          <b>Yahoo!</b> (1994) - Annuaire web organisé par catégories
        </li>
        <li>
          <b>AltaVista</b> (1995) - Premier moteur de recherche puissant
        </li>
        <li>
          <b>GeoCities</b> (1994) - Hébergement gratuit de pages personnelles
        </li>
        <li>
          <b>Tripod</b> (1995) - Autre service de pages perso
        </li>
        <li>
          <b>Amazon.com</b> (1995) - Librairie en ligne
        </li>
        <li>
          <b>eBay</b> (1995) - Enchères en ligne
        </li>
      </ul>

      <hr />

      {/* Usages */}
      <h2>Usages dominants</h2>
      <p>Le Web des années 1990 est un terrain d'expérimentation et de découverte personnelle :</p>
      <ol>
        <li>
          <b>Consultation de pages web</b> : Découverte de contenus multimédia (images, parfois du
          son)
        </li>
        <li>
          <b>Pages personnelles</b> : GeoCities, Tripod, espaces perso chez les FAI
        </li>
        <li>
          <b>Annuaires web</b> : Yahoo!, Lycos pour trouver des sites
        </li>
        <li>
          <b>Exploration libre</b> : Surf de lien en lien, découverte aléatoire
        </li>
      </ol>

      <hr />

      {/* Contexte culturel */}
      <h2>Contexte culturel et technique</h2>

      <h3>Matériel typique :</h3>
      <ul>
        <li>Pentium 100 MHz, 16 Mo de RAM</li>
        <li>Modem 28.8k ou 56k</li>
        <li>Écran 15" CRT, 640x480 ou 800x600</li>
        <li>Windows 95 ou Mac OS 8</li>
      </ul>

      <h3>Expérience utilisateur :</h3>
      <ul>
        <li>Connexion par modem : bruit caractéristique de connexion</li>
        <li>Chargement des images ligne par ligne</li>
        <li>Tarification à la minute (forfaits limités)</li>
        <li>"Maman, raccroche pas le téléphone, je suis sur Internet!"</li>
      </ul>

      <h3>Culture populaire :</h3>
      <ul>
        <li>"You've Got Mail" (1998) - Film romantique autour d'AOL</li>
        <li>Émergence de la "Netiquette"</li>
        <li>Premiers canulars (hoaxes) et chaînes de mails</li>
        <li>Début des webzines et de la presse en ligne</li>
      </ul>

      <hr />

      {/* Code source exemple */}
      <h2>Exemple de code HTML de l'époque</h2>
      <pre
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #000000',
          padding: '10px',
          overflow: 'auto',
        }}
      >
        {`<html>
<head>
<title>Ma page perso</title>
</head>
<body bgcolor="#C0C0C0" text="#000000" link="#0000EE" vlink="#551A8B">
<center>
<h1><font color="blue">Bienvenue!</font></h1>
<img src="construction.gif" alt="En construction">
<p>Cette page est en construction!</p>
<hr>
<a href="index.html">Retour à l'accueil</a>
</center>
</body>
</html>`}
      </pre>

      <hr />

      {/* Transition */}
      <center>
        <table border={2} cellPadding="10" style={{ backgroundColor: '#FFFFCC', width: '80%' }}>
          <tr>
            <td>
              <h3>Transition vers l'ère suivante</h3>
              <p>
                Avec l'augmentation du nombre d'internautes, Internet devient progressivement un
                espace social et économique, dépassant la simple logique d'exploration. La
                démocratisation de l'<b>ADSL</b> (fin des années 90) et l'explosion du
                <b>e-commerce</b> vont transformer le Web en un lieu de vie quotidienne.
              </p>
              <p>
                L'apparition de technologies comme le <b>CSS</b> (1996) et du
                <b>JavaScript</b> dynamique va permettre de créer des sites beaucoup plus riches et
                interactifs, ouvrant la voie à l'ère communautaire.
              </p>
            </td>
          </tr>
        </table>
      </center>

      <hr />

      {/* Footer */}
      <center>
        <p>
          <font size="-1">
            <i>
              Page créée avec : Notepad | Meilleure résolution : 800x600 | Dernière mise à jour :
              1999
            </i>
          </font>
        </p>
        <p>
          <Link to="/era/4" style={{ color: '#0000EE' }}>
            <b>&gt;&gt; Continuer vers l'Ère 4 : L'Internet Grand Public &gt;&gt;</b>
          </Link>
        </p>
      </center>

      <hr />
    </div>
  );
}
