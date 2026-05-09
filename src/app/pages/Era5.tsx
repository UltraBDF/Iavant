import { useState } from 'react';
import MuseumNav from '../components/MuseumNav';

export default function Era5() {
  const [activeTab, setActiveTab] = useState('facebook');

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '100vh',
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        padding: '0',
        margin: '0',
      }}
    >
      <MuseumNav currentEra={5} style="web2" />
      <div
        style={{
          background: 'linear-gradient(180deg, #1e3c72 0%, #2a5298 50%, #1e3c72 100%)',
          borderBottom: '1px solid rgba(255,255,255,0.2)',
          boxShadow: '0 3px 10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.3)',
          padding: '0',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '20px 30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <h1
            style={{
              margin: '0',
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#ffffff',
              textShadow: '0 2px 4px rgba(0,0,0,0.5), 0 0 30px rgba(255,255,255,0.3)',
              letterSpacing: '-1px',
            }}
          >
            L'Internet d'Avant - Salle 5/6
          </h1>
        </div>
      </div>

      <div
        style={{
          maxWidth: '1200px',
          margin: '30px auto',
          padding: '0 20px',
        }}
      >
        <div
          style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #f0f0f0 100%)',
            borderRadius: '15px',
            padding: '30px',
            marginBottom: '30px',
            boxShadow: '0 5px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.8)',
            border: '1px solid rgba(255,255,255,0.5)',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              margin: '0 0 10px 0',
              fontSize: '42px',
              fontWeight: 'bold',
              background: 'linear-gradient(180deg, #1e3c72 0%, #2a5298 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-1px',
            }}
          >
            ÈRE 5 : LE WEB 2.0
          </h1>
          <p
            style={{
              margin: '0',
              fontSize: '24px',
              color: '#666',
              fontWeight: '300',
            }}
          >
            Plateformes et participation (2004-2010)
          </p>
        </div>

        <div
          style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)',
            borderRadius: '12px',
            padding: '25px',
            marginBottom: '30px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.8)',
            border: '1px solid #ddd',
          }}
        >
          <p
            style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#333',
              margin: '0 0 15px 0',
            }}
          >
            Le <strong style={{ color: '#2a5298' }}>Web 2.0</strong> marque l'ère des réseaux
            sociaux et du contenu généré par les utilisateurs. Les plateformes centralisées comme
            <strong> Facebook</strong>, <strong>YouTube</strong>, et <strong>Twitter</strong>{' '}
            dominent l'Internet et transforment les internautes en producteurs de contenu.
          </p>
          <p
            style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#333',
              margin: '0',
            }}
          >
            L'AJAX, les flux RSS, et les APIs ouvertes permettent une expérience utilisateur
            beaucoup plus riche et interactive. C'est l'apogée de l'Internet participatif avant la
            concentration des pouvoirs.
          </p>
        </div>

        <div
          style={{
            background: '#ffffff',
            borderRadius: '12px 12px 0 0',
            overflow: 'hidden',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            marginBottom: '0',
          }}
        >
          <div
            style={{
              display: 'flex',
              background: 'linear-gradient(180deg, #f5f5f5 0%, #e0e0e0 100%)',
              borderBottom: '1px solid #ccc',
            }}
          >
            {['facebook', 'youtube', 'twitter', 'wikipedia'].map((tab) => (
              <div
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  flex: 1,
                  padding: '15px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  background:
                    activeTab === tab
                      ? 'linear-gradient(180deg, #ffffff 0%, #f8f8f8 100%)'
                      : 'transparent',
                  borderRight: '1px solid #ddd',
                  borderTop: activeTab === tab ? '3px solid #2a5298' : '3px solid transparent',
                  fontWeight: activeTab === tab ? 'bold' : 'normal',
                  color: activeTab === tab ? '#2a5298' : '#666',
                  transition: 'all 0.3s ease',
                  boxShadow: activeTab === tab ? 'inset 0 1px 0 rgba(255,255,255,0.8)' : 'none',
                }}
              >
                {tab === 'facebook' && '👥 Facebook'}
                {tab === 'youtube' && '📺 YouTube'}
                {tab === 'twitter' && '🐦 Twitter'}
                {tab === 'wikipedia' && '📚 Wikipedia'}
              </div>
            ))}
          </div>

          <div style={{ padding: '30px', background: '#ffffff' }}>
            {activeTab === 'facebook' && (
              <div>
                <h2
                  style={{
                    margin: '0 0 20px 0',
                    fontSize: '28px',
                    color: '#3b5998',
                    fontWeight: 'bold',
                  }}
                >
                  📘 Facebook : Le réseau social universel
                </h2>
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: '1.7',
                    color: '#333',
                    marginBottom: '20px',
                  }}
                >
                  Lancé en 2004 pour les étudiants de Harvard, Facebook s'ouvre au grand public en
                  2006 et connaît une croissance explosive. Il devient LE réseau social dominant
                  avec ses profils, le mur, les pokes, et les applications tierces.
                </p>

                <div
                  style={{
                    background: 'linear-gradient(180deg, #3b5998 0%, #2d4373 100%)',
                    borderRadius: '8px',
                    padding: '15px',
                    marginBottom: '20px',
                    boxShadow: '0 3px 10px rgba(0,0,0,0.3)',
                    color: 'white',
                  }}
                >
                  <div
                    style={{
                      background: 'rgba(255,255,255,0.9)',
                      borderRadius: '5px',
                      padding: '15px',
                      color: '#333',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '15px',
                        paddingBottom: '15px',
                        borderBottom: '1px solid #e0e0e0',
                      }}
                    >
                      <div
                        style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '5px',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          marginRight: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '24px',
                          color: 'white',
                          fontWeight: 'bold',
                        }}
                      >
                        M
                      </div>
                      <div>
                        <div style={{ fontWeight: 'bold', fontSize: '14px', color: '#3b5998' }}>
                          Marie Dubois
                        </div>
                        <div style={{ fontSize: '12px', color: '#999' }}>il y a 2 heures</div>
                      </div>
                    </div>
                    <div style={{ fontSize: '14px', marginBottom: '15px', lineHeight: '1.6' }}>
                      Super soirée hier! Merci à tous d'être venus 🎉
                    </div>
                    <div
                      style={{
                        background: '#f0f0f0',
                        height: '200px',
                        borderRadius: '5px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#999',
                        fontSize: '14px',
                        marginBottom: '12px',
                      }}
                    >
                      [Photo de groupe]
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        gap: '20px',
                        fontSize: '13px',
                        color: '#666',
                        borderTop: '1px solid #e0e0e0',
                        paddingTop: '12px',
                      }}
                    >
                      <span style={{ cursor: 'pointer', color: '#3b5998', fontWeight: 'bold' }}>
                        👍 J'aime
                      </span>
                      <span style={{ cursor: 'pointer' }}>💬 Commenter</span>
                      <span style={{ cursor: 'pointer' }}>↗️ Partager</span>
                    </div>
                  </div>
                </div>

                <ul style={{ fontSize: '14px', lineHeight: '1.8', color: '#555' }}>
                  <li>
                    <strong>2004</strong> : Création à Harvard par Mark Zuckerberg
                  </li>
                  <li>
                    <strong>2006</strong> : Ouverture au grand public (13 ans et +)
                  </li>
                  <li>
                    <strong>2007</strong> : Lancement de la plateforme Facebook Platform (apps)
                  </li>
                  <li>
                    <strong>2008</strong> : 100 millions d'utilisateurs
                  </li>
                  <li>
                    <strong>2009</strong> : Introduction du bouton "J'aime"
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'youtube' && (
              <div>
                <h2
                  style={{
                    margin: '0 0 20px 0',
                    fontSize: '28px',
                    color: '#FF0000',
                    fontWeight: 'bold',
                  }}
                >
                  📺 YouTube : Broadcast Yourself
                </h2>
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: '1.7',
                    color: '#333',
                    marginBottom: '20px',
                  }}
                >
                  Fondé en 2005, YouTube démocratise la vidéo en ligne. N'importe qui peut devenir
                  créateur de contenu. Le slogan "Broadcast Yourself" incarne parfaitement l'esprit
                  Web 2.0.
                </p>

                <div
                  style={{
                    background: '#f9f9f9',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    marginBottom: '20px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  }}
                >
                  <div
                    style={{
                      background: '#CC0000',
                      height: '250px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                    }}
                  >
                    <video controls style={{ width: '100%', height: '100%' }}>
                      <source
                        src="/assets/videos/Charlie%20bit%20my%20finger%20-%20again%20!.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <div style={{ padding: '15px' }}>
                    <h3
                      style={{
                        margin: '0 0 8px 0',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#111',
                      }}
                    >
                      Charlie bit my finger
                    </h3>
                    <div style={{ fontSize: '13px', color: '#606060', marginBottom: '10px' }}>
                      1,234,567 vues • 12 mai 2007
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                      }}
                    >
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontWeight: 'bold',
                        }}
                      >
                        H
                      </div>
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: '600' }}>HDCYT</div>
                        <div style={{ fontSize: '12px', color: '#606060' }}>856K abonnés</div>
                      </div>
                    </div>
                  </div>
                </div>

                <ul style={{ fontSize: '14px', lineHeight: '1.8', color: '#555' }}>
                  <li>
                    <strong>2005</strong> : Fondation par trois anciens employés de PayPal
                  </li>
                  <li>
                    <strong>2006</strong> : Rachat par Google pour 1,65 milliard de dollars
                  </li>
                  <li>
                    <strong>2007</strong> : Programme de partenariat (monétisation)
                  </li>
                  <li>
                    <strong>2009</strong> : Vidéos virales ("Charlie bit my finger", "Evolution of
                    Dance")
                  </li>
                  <li>
                    <strong>Impact</strong> : Naissance des YouTubeurs professionnels
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'twitter' && (
              <div>
                <h2
                  style={{
                    margin: '0 0 20px 0',
                    fontSize: '28px',
                    color: '#1DA1F2',
                    fontWeight: 'bold',
                  }}
                >
                  🐦 Twitter : What are you doing?
                </h2>
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: '1.7',
                    color: '#333',
                    marginBottom: '20px',
                  }}
                >
                  Lancé en 2006, Twitter révolutionne la communication avec ses messages de 140
                  caractères. Le concept du "microblogging" crée un nouveau mode d'expression et
                  d'information en temps réel.
                </p>

                <div
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e1e8ed',
                    borderRadius: '8px',
                    padding: '15px',
                    marginBottom: '20px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      gap: '12px',
                      marginBottom: '15px',
                    }}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #1DA1F2 0%, #0d8bd9 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        flexShrink: 0,
                      }}
                    >
                      @
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                          marginBottom: '5px',
                        }}
                      >
                        <span style={{ fontWeight: 'bold', fontSize: '15px' }}>Jack Dorsey</span>
                        <span style={{ color: '#657786', fontSize: '14px' }}>
                          @jack · 21 mars 2006
                        </span>
                      </div>
                      <div style={{ fontSize: '15px', lineHeight: '1.5', marginBottom: '12px' }}>
                        just setting up my twttr
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          gap: '40px',
                          fontSize: '13px',
                          color: '#657786',
                        }}
                      >
                        <span style={{ cursor: 'pointer' }}>💬 Répondre</span>
                        <span style={{ cursor: 'pointer' }}>🔁 Retweet</span>
                        <span style={{ cursor: 'pointer' }}>❤️ J'aime</span>
                      </div>
                    </div>
                  </div>
                </div>

                <ul style={{ fontSize: '14px', lineHeight: '1.8', color: '#555' }}>
                  <li>
                    <strong>2006</strong> : Lancement avec la question "What are you doing?"
                  </li>
                  <li>
                    <strong>2007</strong> : Adoption massive lors du festival SXSW
                  </li>
                  <li>
                    <strong>2009</strong> : Introduction des Retweets officiels et des Listes
                  </li>
                  <li>
                    <strong>Innovations</strong> : # hashtags, @ mentions, RT (retweet)
                  </li>
                  <li>
                    <strong>Impact</strong> : Information en temps réel, révolutions (Printemps
                    arabe)
                  </li>
                </ul>
              </div>
            )}

            {activeTab === 'wikipedia' && (
              <div>
                <h2
                  style={{
                    margin: '0 0 20px 0',
                    fontSize: '28px',
                    color: '#000000',
                    fontWeight: 'bold',
                  }}
                >
                  📚 Wikipedia : L'encyclopédie libre
                </h2>
                <p
                  style={{
                    fontSize: '15px',
                    lineHeight: '1.7',
                    color: '#333',
                    marginBottom: '20px',
                  }}
                >
                  Fondée en 2001 mais explosant durant l'ère Web 2.0, Wikipedia incarne
                  l'intelligence collective. Des millions de contributeurs créent ensemble
                  l'encyclopédie la plus complète jamais réalisée.
                </p>

                <div
                  style={{
                    background: '#ffffff',
                    border: '1px solid #a2a9b1',
                    borderRadius: '4px',
                    padding: '20px',
                    marginBottom: '20px',
                    fontFamily: 'Georgia, serif',
                  }}
                >
                  <h1
                    style={{
                      fontSize: '28px',
                      margin: '0 0 10px 0',
                      borderBottom: '1px solid #a2a9b1',
                      paddingBottom: '5px',
                      fontWeight: 'normal',
                      color: '#000',
                    }}
                  >
                    Web 2.0
                  </h1>
                  <div
                    style={{
                      fontSize: '12px',
                      color: '#54595d',
                      marginBottom: '15px',
                      fontStyle: 'italic',
                    }}
                  >
                    Un article de Wikipédia, l'encyclopédie libre.
                  </div>
                  <div
                    style={{
                      fontSize: '14px',
                      lineHeight: '1.6',
                      color: '#202122',
                    }}
                  >
                    Le <strong>Web 2.0</strong> est un terme désignant l'ensemble des techniques,
                    des fonctionnalités et des usages du World Wide Web qui ont suivi la forme
                    originelle du web, en particulier les interfaces permettant aux internautes
                    d'interagir à la fois avec le contenu des pages mais aussi entre eux, créant
                    ainsi le{' '}
                    <a href="#" style={{ color: '#0645ad' }}>
                      web social
                    </a>
                    .
                  </div>
                </div>

                <ul style={{ fontSize: '14px', lineHeight: '1.8', color: '#555' }}>
                  <li>
                    <strong>2001</strong> : Lancement de Wikipedia par Jimmy Wales et Larry Sanger
                  </li>
                  <li>
                    <strong>2004</strong> : 1 million d'articles (toutes langues)
                  </li>
                  <li>
                    <strong>2007</strong> : 2 millions d'articles en anglais
                  </li>
                  <li>
                    <strong>Principe</strong> : N'importe qui peut éditer (presque) n'importe quelle
                    page
                  </li>
                  <li>
                    <strong>Impact</strong> : Démocratisation du savoir, modèle collaboratif
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div
          style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)',
            borderRadius: '12px',
            padding: '25px',
            marginTop: '30px',
            marginBottom: '30px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.8)',
            border: '1px solid #ddd',
          }}
        >
          <h2
            style={{
              margin: '0 0 20px 0',
              fontSize: '24px',
              color: '#333',
              fontWeight: 'bold',
            }}
          >
            💻 Technologies clés du Web 2.0
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '15px',
            }}
          >
            {[
              { title: 'AJAX', desc: 'Rechargement partiel des pages', icon: '⚡' },
              { title: 'RSS/Atom', desc: 'Syndication de contenu', icon: '📡' },
              { title: 'APIs REST', desc: 'Intégration de services', icon: '🔗' },
              { title: 'Mashups', desc: 'Combinaison de services', icon: '🎭' },
              { title: 'Widgets', desc: 'Composants réutilisables', icon: '🧩' },
              { title: 'Tags', desc: 'Classification collaborative', icon: '🏷️' },
            ].map((tech) => (
              <div
                key={tech.title}
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '8px',
                  padding: '15px',
                  color: 'white',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>{tech.icon}</div>
                <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '5px' }}>
                  {tech.title}
                </div>
                <div style={{ fontSize: '13px', opacity: 0.9 }}>{tech.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            background: 'linear-gradient(135deg, #FF512F 0%, #DD2476 100%)',
            borderRadius: '12px',
            padding: '30px',
            color: 'white',
            textAlign: 'center',
            boxShadow: '0 5px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)',
            border: '1px solid rgba(255,255,255,0.2)',
          }}
        >
          <h3
            style={{
              margin: '0 0 15px 0',
              fontSize: '26px',
              fontWeight: 'bold',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            🚀 Vers l'épilogue
          </h3>
          <p
            style={{
              fontSize: '16px',
              lineHeight: '1.8',
              margin: '0',
              textShadow: '0 1px 2px rgba(0,0,0,0.2)',
            }}
          >
            Le Web 2.0 a créé un Internet participatif et social, mais au prix d'une concentration
            du pouvoir entre les mains de quelques plateformes. La promesse d'un web décentralisé
            s'est transformée en oligopole des GAFAM. L'ère suivante nous invite à une réflexion
            critique sur cette transformation et sur la nostalgie d'un Internet plus libre et
            personnel.
          </p>
        </div>
      </div>

      <div
        style={{
          background: 'linear-gradient(180deg, #1e3c72 0%, #2a5298 100%)',
          borderTop: '1px solid rgba(255,255,255,0.2)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
          padding: '20px',
          textAlign: 'center',
          color: 'rgba(255,255,255,0.8)',
          fontSize: '13px',
          marginTop: '40px',
        }}
      >
        <p style={{ margin: '0' }}>
          © 2010 L'Internet d'Avant | Propulsé par le Web 2.0 | Optimisé pour Firefox 3.6, Chrome 5,
          Safari 5
        </p>
      </div>
    </div>
  );
}
