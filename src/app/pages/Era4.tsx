import { useState, useEffect } from 'react';
import MuseumNav from '@/app/components/MuseumNav';

// Ère 4 (1995-2004) : CSS basique, tables, GIFs animés, style GeoCities/Lycos
export default function Era4() {
  const [dvdX, setDvdX] = useState(50);
  const [dvdY, setDvdY] = useState(50);
  const [dvdSpeedX, setDvdSpeedX] = useState(0.8);
  const [dvdSpeedY, setDvdSpeedY] = useState(0.6);
  const [dvdColor, setDvdColor] = useState('#FF00FF');

  // Animation DVD bouncing logo
  useEffect(() => {
    const colors = [
      '#FF00FF',
      '#00FFFF',
      '#FFFF00',
      '#FF0000',
      '#00FF00',
      '#0000FF',
      '#FF6600',
      '#FF00AA',
    ];
    const interval = setInterval(() => {
      setDvdX((prev) => {
        let newX = prev + dvdSpeedX;
        if (newX <= 0 || newX >= 95) {
          setDvdSpeedX((s) => -s);
          newX = prev - dvdSpeedX;
          // Change color on bounce
          setDvdColor(colors[Math.floor(Math.random() * colors.length)]);
        }
        return newX;
      });
      setDvdY((prev) => {
        let newY = prev + dvdSpeedY;
        if (newY <= 0 || newY >= 90) {
          setDvdSpeedY((s) => -s);
          newY = prev - dvdSpeedY;
          // Change color on bounce
          setDvdColor(colors[Math.floor(Math.random() * colors.length)]);
        }
        return newY;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [dvdSpeedX, dvdSpeedY]);

  return (
    <div
      style={{
        backgroundColor: '#000000',
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0z' fill='%23000'/%3E%3Cpath d='M10 0L0 20h20z' fill='%23111'/%3E%3C/svg%3E\")",
        minHeight: '100vh',
        fontFamily: 'Verdana, Geneva, sans-serif',
      }}
    >
      {/* DVD Logo qui rebondit (référence années 2000) */}
      <div
        style={{
          position: 'fixed',
          left: `${dvdX}%`,
          top: `${dvdY}%`,
          width: '80px',
          height: '40px',
          backgroundColor: dvdColor,
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
          fontSize: '14px',
          border: '2px solid #FFFFFF',
          zIndex: 1,
          pointerEvents: 'none',
          boxShadow: `0 0 10px ${dvdColor}`,
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        DVD
      </div>

      {/* Header avec gradient et effet Web 2.0 */}
      <div
        style={{
          background: 'linear-gradient(180deg, #003366 0%, #0066CC 100%)',
          borderBottom: '3px solid #FFD700',
          padding: '15px 20px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.5)',
        }}
      >
        <table width="100%" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <td>
                <span
                  style={{
                    fontSize: '28px',
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                    textShadow: '2px 2px 4px #000000',
                    fontFamily: 'Comic Sans MS, cursive',
                  }}
                >
                  ★ L'Internet d'Avant ★
                </span>
              </td>
              <td align="right">
                <marquee width="300" style={{ color: '#FFFF00', fontSize: '12px' }}>
                  ✨ Bienvenue sur le meilleur site d'histoire d'Internet! ✨
                </marquee>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <MuseumNav currentEra={4} style="geocities" />

      {/* Contenu principal dans un tableau (méthode classique de l'époque) */}
      <table
        width="95%"
        align="center"
        cellPadding="0"
        cellSpacing="0"
        style={{
          marginTop: '20px',
          marginBottom: '40px',
          maxWidth: 'auto',
          borderCollapse: 'separate',
          borderSpacing: '15px',
        }}
      >
        <tbody>
          <tr>
            {/* Sidebar gauche */}
            <td
              width="220"
              valign="top"
              style={{
                backgroundColor: '#003366',
                border: '3px ridge #FFD700',
                borderRadius: '10px',
                padding: '15px',
              }}
            >
              <div
                style={{
                  backgroundColor: '#0066CC',
                  color: '#FFFFFF',
                  padding: '10px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  borderRadius: '5px',
                  marginBottom: '15px',
                  boxShadow: 'inset 0 2px 5px rgba(255,255,255,0.3)',
                }}
              >
                ⭐ MENU ⭐
              </div>
              <div style={{ padding: '0 10px' }}>
                <p>
                  <a href="#description" style={{ color: '#FFFF00', textDecoration: 'none' }}>
                    » Description
                  </a>
                </p>
                <p>
                  <a href="#msn" style={{ color: '#FFFF00', textDecoration: 'none' }}>
                    » MSN Messenger
                  </a>
                </p>
                <p>
                  <a href="#forums" style={{ color: '#FFFF00', textDecoration: 'none' }}>
                    » Forums
                  </a>
                </p>
                <p>
                  <a href="#skyblog" style={{ color: '#FFFF00', textDecoration: 'none' }}>
                    » Skyblog
                  </a>
                </p>
                <p>
                  <a href="#p2p" style={{ color: '#FFFF00', textDecoration: 'none' }}>
                    » P2P
                  </a>
                </p>
              </div>

              <div
                style={{
                  backgroundColor: '#0066CC',
                  color: '#FFFFFF',
                  padding: '10px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  borderRadius: '5px',
                  marginTop: '20px',
                  marginBottom: '15px',
                  boxShadow: 'inset 0 2px 5px rgba(255,255,255,0.3)',
                }}
              >
                📊 STATS
              </div>
              <div style={{ padding: '0 10px', fontSize: '12px', color: '#FFFF00' }}>
                <p>🔥 Visiteurs en ligne: 42</p>
                <p>👥 Total visiteurs: 13,547</p>
                <p>📅 Ouvert depuis: 2001</p>
              </div>

              {/* GIF animé simulé */}
              <div
                style={{
                  marginTop: '20px',
                  textAlign: 'center',
                  animation: 'blink 1s infinite',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#FF00FF',
                    color: '#FFFF00',
                    padding: '10px',
                    border: '2px solid #FFFF00',
                    fontWeight: 'bold',
                    fontSize: '11px',
                  }}
                >
                  ✨ NEW! ✨
                </div>
              </div>
            </td>

            {/* Contenu principal */}
            <td
              valign="top"
              style={{
                backgroundColor: '#FFFFFF',
                border: '3px ridge #FFD700',
                borderRadius: '10px',
                padding: '20px',
              }}
            >
              {/* Titre de la page */}
              <div
                id="description"
                style={{
                  background: 'linear-gradient(180deg, #FF9900 0%, #FF6600 100%)',
                  padding: '15px',
                  borderRadius: '10px',
                  border: '3px solid #FFD700',
                  textAlign: 'center',
                  marginBottom: '20px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                }}
              >
                <h1
                  style={{
                    margin: '0',
                    color: '#FFFFFF',
                    textShadow: '3px 3px 6px #000000',
                    fontFamily: 'Comic Sans MS, cursive',
                    fontSize: '32px',
                  }}
                >
                  ÈRE 4 : L'INTERNET GRAND PUBLIC
                </h1>
                <p
                  style={{
                    margin: '5px 0 0 0',
                    color: '#FFFF00',
                    fontSize: '18px',
                    fontWeight: 'bold',
                  }}
                >
                  L'ère communautaire (1995-2004)
                </p>
              </div>

              {/* Description */}
              <div
                style={{
                  backgroundColor: '#FFFFCC',
                  border: '2px dashed #FF6600',
                  padding: '15px',
                  borderRadius: '8px',
                  marginBottom: '20px',
                }}
              >
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#000000' }}>
                  Cette période marque l'entrée d'Internet dans les foyers. La démocratisation de l'
                  <b style={{ color: '#FF0000' }}>ADSL</b>, l'explosion des sites commerciaux, et le
                  développement des forums et messageries instantanées transforment Internet en un
                  espace de sociabilité accessible à tous.
                </p>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#000000' }}>
                  Internet devient un <b>lieu de sociabilité</b>. Les internautes produisent du
                  contenu sans intermédiaire institutionnel, créant leurs blogs, forums et
                  communautés thématiques.
                </p>
              </div>

              {/* Icons grid */}
              <table
                width="100%"
                cellPadding="10"
                cellSpacing="10"
                style={{ marginBottom: '20px' }}
              >
                <tbody>
                  <tr>
                    <td
                      align="center"
                      style={{
                        backgroundColor: '#E6F3FF',
                        border: '2px solid #0066CC',
                        borderRadius: '8px',
                        padding: '15px',
                      }}
                    >
                      <div style={{ fontSize: '40px' }}>💬</div>
                      <b>Forums</b>
                      <br />
                      <span style={{ fontSize: '12px' }}>Discussions communautaires</span>
                    </td>
                    <td
                      align="center"
                      style={{
                        backgroundColor: '#FFE6F0',
                        border: '2px solid #FF0099',
                        borderRadius: '8px',
                        padding: '15px',
                      }}
                    >
                      <div style={{ fontSize: '40px' }}>👥</div>
                      <b>MSN/AIM</b>
                      <br />
                      <span style={{ fontSize: '12px' }}>Messagerie instantanée</span>
                    </td>
                  </tr>
                  <tr>
                    <td
                      align="center"
                      style={{
                        backgroundColor: '#F0FFE6',
                        border: '2px solid #00CC00',
                        borderRadius: '8px',
                        padding: '15px',
                      }}
                    >
                      <div style={{ fontSize: '40px' }}>📥</div>
                      <b>P2P</b>
                      <br />
                      <span style={{ fontSize: '12px' }}>Napster, Kazaa, eMule</span>
                    </td>
                    <td
                      align="center"
                      style={{
                        backgroundColor: '#FFF9E6',
                        border: '2px solid #FFCC00',
                        borderRadius: '8px',
                        padding: '15px',
                      }}
                    >
                      <div style={{ fontSize: '40px' }}>📝</div>
                      <b>Blogs</b>
                      <br />
                      <span style={{ fontSize: '12px' }}>Skyblog, LiveJournal</span>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* MSN Messenger */}
              <div
                id="msn"
                style={{
                  backgroundColor: '#E8F4FF',
                  border: '3px solid #0078D7',
                  borderRadius: '10px',
                  padding: '15px',
                  marginBottom: '20px',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                }}
              >
                <h2
                  style={{
                    color: '#0078D7',
                    margin: '0 0 15px 0',
                    fontFamily: 'Trebuchet MS, sans-serif',
                  }}
                >
                  💬 L'ère de la messagerie instantanée
                </h2>
                <p style={{ fontSize: '14px', marginBottom: '15px' }}>
                  <b>MSN Messenger</b>, AIM, ICQ révolutionnent la communication en temps réel. Les
                  statuts personnalisés, les émoticônes et les "nudges" deviennent partie intégrante
                  de la culture web.
                </p>

                {/* Interface MSN */}
                <div
                  style={{
                    background: 'linear-gradient(180deg, #5B9BD5 0%, #2E5C8A 100%)',
                    border: '2px solid #1F4E78',
                    borderRadius: '5px',
                    padding: '15px',
                    color: '#FFFFFF',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: 'rgba(0,0,0,0.3)',
                      padding: '8px',
                      borderRadius: '3px',
                      marginBottom: '10px',
                      fontSize: '13px',
                      fontWeight: 'bold',
                    }}
                  >
                    MSN Messenger - Connecté
                  </div>
                  <div style={{ fontSize: '13px', marginBottom: '5px' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        width: '12px',
                        height: '12px',
                        backgroundColor: '#00FF00',
                        borderRadius: '50%',
                        marginRight: '5px',
                      }}
                    ></span>
                    sarah_2003@hotmail.com
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      fontStyle: 'italic',
                      color: '#FFFF99',
                      marginBottom: '10px',
                    }}
                  >
                    Statut: "~ En train d'écouter Avril Lavigne ♫ ♪ ~"
                  </div>
                  <div style={{ fontSize: '20px', marginTop: '10px' }}>😊 😂 ❤️ 😎 🎵</div>
                </div>
              </div>

              {/* Forums */}
              <div
                id="forums"
                style={{
                  backgroundColor: '#F0F0F0',
                  border: '3px solid #666666',
                  borderRadius: '10px',
                  padding: '15px',
                  marginBottom: '20px',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                }}
              >
                <h2 style={{ color: '#333333', margin: '0 0 15px 0' }}>
                  🗨️ Les forums : l'âge d'or des communautés
                </h2>
                <p style={{ fontSize: '14px', marginBottom: '15px' }}>
                  Forums phpBB, vBulletin et communautés spécialisées fleurissent. Chaque passion a
                  son forum, avec ses modérateurs, ses habitués et sa culture propre.
                </p>

                <table
                  width="100%"
                  cellPadding="8"
                  cellSpacing="0"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #CCCCCC',
                  }}
                >
                  <thead>
                    <tr style={{ backgroundColor: '#4A90E2', color: '#FFFFFF' }}>
                      <th align="left">Forums-Exemple.fr</th>
                      <th align="right">Messages: 1,547</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={2} style={{ padding: '15px' }}>
                        <table width="100%">
                          <tbody>
                            <tr>
                              <td width="60" valign="top">
                                <div
                                  style={{
                                    width: '50px',
                                    height: '50px',
                                    backgroundColor: '#4A90E2',
                                    borderRadius: '5px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#FFFFFF',
                                    fontSize: '24px',
                                  }}
                                >
                                  👤
                                </div>
                              </td>
                              <td>
                                <div style={{ color: '#4A90E2', fontWeight: 'bold' }}>
                                  SuperModo
                                </div>
                                <div style={{ fontSize: '11px', color: '#999999' }}>
                                  Administrateur
                                </div>
                                <div style={{ marginTop: '8px', fontSize: '13px' }}>
                                  Re: Bienvenue aux nouveaux membres!
                                </div>
                                <div style={{ marginTop: '10px' }}>
                                  <span
                                    style={{
                                      display: 'inline-block',
                                      backgroundColor: '#5CB85C',
                                      color: '#FFFFFF',
                                      padding: '4px 10px',
                                      fontSize: '11px',
                                      borderRadius: '3px',
                                      marginRight: '5px',
                                      cursor: 'pointer',
                                    }}
                                  >
                                    Citation
                                  </span>
                                  <span
                                    style={{
                                      display: 'inline-block',
                                      backgroundColor: '#5BC0DE',
                                      color: '#FFFFFF',
                                      padding: '4px 10px',
                                      fontSize: '11px',
                                      borderRadius: '3px',
                                      cursor: 'pointer',
                                    }}
                                  >
                                    Répondre
                                  </span>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Skyblog */}
              <div
                id="skyblog"
                style={{
                  background: 'linear-gradient(180deg, #FF69B4 0%, #FF1493 100%)',
                  border: '3px solid #FF00FF',
                  borderRadius: '10px',
                  padding: '15px',
                  marginBottom: '20px',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                }}
              >
                <h2
                  style={{
                    color: '#FFFFFF',
                    textShadow: '2px 2px 4px #000000',
                    margin: '0 0 15px 0',
                    fontFamily: 'Comic Sans MS, cursive',
                    textAlign: 'center',
                  }}
                >
                  ★ Skyblog : La démocratisation des blogs ★
                </h2>
                <div
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    borderRadius: '8px',
                    padding: '15px',
                    color: '#000000',
                  }}
                >
                  <div style={{ textAlign: 'center', marginBottom: '15px' }}>
                    <h3
                      style={{
                        fontFamily: 'Comic Sans MS, cursive',
                        color: '#FF1493',
                        margin: '0 0 5px 0',
                      }}
                    >
                      ★ Mon Skyblog ★
                    </h3>
                    <div style={{ fontSize: '12px', color: '#999999' }}>
                      xX-sarah-03-Xx.skyblog.com
                    </div>
                  </div>
                  <div
                    style={{
                      backgroundColor: '#FFE6F0',
                      border: '2px dashed #FF69B4',
                      padding: '12px',
                      borderRadius: '5px',
                      marginBottom: '10px',
                    }}
                  >
                    <div style={{ color: '#FF1493', fontWeight: 'bold', marginBottom: '5px' }}>
                      Titre: Ma journée au collège
                    </div>
                    <div style={{ fontSize: '11px', color: '#999999', marginBottom: '8px' }}>
                      Posté le 12/10/2004 à 18:42
                    </div>
                    <div style={{ fontSize: '13px', lineHeight: '1.5' }}>
                      Aujourd'hui c'était trop bien en récré on a joué au foot avec les copines...
                      Vivement le week-end!!!
                    </div>
                  </div>
                  <div style={{ fontSize: '12px', color: '#666666' }}>
                    💬 Commentaires (24) | ❤️ Kiffs (12)
                  </div>
                </div>
              </div>

              {/* P2P */}
              <div
                id="p2p"
                style={{
                  backgroundColor: '#2D2D2D',
                  border: '3px solid #00FF00',
                  borderRadius: '10px',
                  padding: '15px',
                  color: '#00FF00',
                  fontFamily: 'Courier New, monospace',
                  marginBottom: '20px',
                  boxShadow: '0 2px 5px rgba(0,255,0,0.3)',
                }}
              >
                <h2 style={{ color: '#00FF00', margin: '0 0 15px 0' }}>
                  📥 Le P2P et le partage de fichiers
                </h2>
                <div style={{ fontSize: '13px', marginBottom: '10px', color: '#CCCCCC' }}>
                  Napster, Kazaa, eMule, BitTorrent... Le partage de fichiers peer-to-peer
                  bouleverse l'industrie musicale et cinématographique.
                </div>
                <div
                  style={{
                    backgroundColor: '#000000',
                    border: '1px solid #00FF00',
                    padding: '12px',
                    borderRadius: '5px',
                  }}
                >
                  <div style={{ marginBottom: '10px' }}>=== Client P2P - eMule v0.47 ===</div>
                  <div style={{ marginBottom: '8px' }}>
                    <div style={{ marginBottom: '5px' }}>📄 album_favorites.zip</div>
                    <div style={{ fontSize: '12px' }}>████████████░░░░░ 75%</div>
                  </div>
                  <div style={{ fontSize: '12px', marginBottom: '8px' }}>
                    Sources: 142 | Vitesse: 256 KB/s
                  </div>
                  <div style={{ fontSize: '11px', color: '#FF6600', marginTop: '10px' }}>
                    ⚠️ Note: Le partage de fichiers protégés par droit d'auteur était illégal
                  </div>
                </div>
              </div>

              {/* Transition */}
              <div
                style={{
                  background: 'linear-gradient(135deg, #667EEA 0%, #764BA2 100%)',
                  border: '3px solid #FFFFFF',
                  borderRadius: '10px',
                  padding: '20px',
                  color: '#FFFFFF',
                  textAlign: 'center',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                }}
              >
                <h3 style={{ margin: '0 0 15px 0', fontSize: '20px' }}>
                  ⚡ Transition vers l'ère suivante ⚡
                </h3>
                <p style={{ fontSize: '14px', lineHeight: '1.6', margin: '0' }}>
                  La multiplication des contenus pose la question de leur organisation et de leur
                  visibilité, ouvrant la voie à des plateformes centralisées. Le <b>Web 2.0</b>
                  s'apprête à transformer les internautes en producteurs de contenu à grande
                  échelle, tout en concentrant le pouvoir dans les mains de quelques grandes
                  plateformes.
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Footer */}
      <div
        style={{
          background: 'linear-gradient(180deg, #0066CC 0%, #003366 100%)',
          borderTop: '3px solid #FFD700',
          padding: '15px',
          textAlign: 'center',
          color: '#FFFFFF',
          marginTop: '20px',
        }}
      >
        <p style={{ margin: '0 0 10px 0', fontSize: '12px' }}>
          © 2004 L'Internet d'Avant | Tous droits réservés | Optimisé pour Internet Explorer 6 |
          Meilleure résolution: 1024x768
        </p>
        <p style={{ margin: '0', fontSize: '11px', color: '#FFFF00' }}>
          <marquee width="400">
            ✨ Ce site est compatible Netscape Navigator 7 et Firefox 1.0 ✨
          </marquee>
        </p>
      </div>

      <style>
        {`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
}
