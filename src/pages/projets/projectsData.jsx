const basePath = import.meta.env.BASE_URL;

const projectsData = [
  {
    title: "Maufeb Mode",
    subtitle: "Boutique en ligne",
    description: (
      <>
        <p>
          Dans ce projet, j&apos;ai utilisé un CMS pour créer l&apos;e-shop de la marque Maufeb Mode. La créatrice m&apos;a contacté car elle n&apos;avait aucune compétence en développement web et en communication. Elle m&apos;a demandé de gérer toute la partie digitale de son projet. Elle s&apos;est lancée en investissant pas mal d&apos;argent dans la création de ses produits, donc il lui fallait rapidement générer des revenus. C&apos;est pourquoi je lui ai proposé de créer rapidement une boutique en ligne afin de rendre ses articles disponibles et de toucher un plus large ..
        </p>
        <p>
          J&apos;ai donc utilisé un CMS pour créer son site et j&apos;ai également géré la partie communication en créant des visuels pour ses réseaux sociaux. Je l&apos;ai aidée à refaire son logo selon ses souhaits, en utilisant la suite Adobe et notamment Illustrator. J&apos;ai également géré la partie SEO pour qu&apos;elle soit bien référencée sur Google. Ce site est une version de base car il fallait rapidement réaliser des ventes. Je travaille encore activement sur ce projet pour lui créer un site plus complet, plus personnel et plus professionnel, avec WordPress.
        </p>
      </>
    ),
    link: "https://www.maufeb-mode.com/",
    imgSrc: `${basePath}assets/images/projets/maufeb.png`,
  },
  {
    title: "Jeevons Website",
    subtitle: "Création de mon site Internet",
    description: (
      <>
        <p>
          Je suis actuellement en train de développer mon propre site internet, un site vitrine utilisant Next.js avec Vite, et PostgreSQL. Pour l&apos;instant il n&apos;y a que la page portfolio et contact de disponible. Next.js me permet de gérer à la fois le front-end et le back-end avec React
        </p>
        <p>
          Le projet est né de mon besoin de créer un portfolio. Cependant, la création d&apos;un portfolio simple ne me semblait pas assez stimulante. Je voulais un projet qui me permettrait de découvrir des fonctionnalités avancées en JavaScript et React. Avec ce site je touche à React pour la première fois. En utilisant Next.js, je peux tirer parti de fonctionnalités telles que le rendu côté serveur (SSR) et la génération de sites statiques (SSG). Je me sert aussi de quelques librairies comme Three.js pour faire du rendu 3D
        </p>
        <p>
          J&apos;ai donc décidé de créer un site complet qui représenterait mon univers et ma personnalité. Ce site ne sera pas seulement un portfolio, mais également un moyen de découvrir ma personne. Mon objectif est de construire un espace en ligne qui non seulement affiche mes compétences, mais aussi reflète ma passion pour la programmation et les technologies modernes.
        </p>
      </>
    ),
    link: "/",
    imgSrc: `${basePath}assets/images/projets/jeevonsWebsite.png`,
  },
  {
    title: "Quantum Website",
    subtitle: "Projet de fin d'année",
    description: (
      <>
        <p>
          Nous sommes des brasseurs, mais avant tout, des conteurs et des rêveurs. Chaque bière que nous créons est infusée avec une histoire, un voyage à entreprendre, une expérience à vivre. Nous puisons notre inspiration dans les mystères de la physique quantique, où l&apos;impossible devient possible, et nous l&apos;infusons dans l&apos;art de la brasserie pour créer quelque chose d&apos;unique : des bières qui ne sont pas seulement à boire, mais aussi à vivre.
        </p>
        <p>
          Sur ce projet, nous avons créé une marque de bière fictive. Du concept au site web, en passant par toute l&apos;identité marketing et artistique, nous avons réalisé de A à Z ce que nous avons ironiquement nommé : Un voyage à travers l&apos;écho des vibrations de l&apos;espace-temps.
        </p>
        <p>
          La plupart des illustrations, le logo et les designs ont été réalisés sur Adobe Illustrator et Photoshop. Les .ités ont été montées à l&apos;aide de Premiere Pro, et After Effect, et nous avons développé notre site web avec PHP, JavaScript, HTML et CSS.
        </p>
        <p>
          Ce projet est une petite fierté pour moi car il reflète un peu ma vision du monde et de l&apos;univers. C&apos;est une aventure, une invitation à expérimenter. Nous avons mis en œuvre un procédé narratif pour raconter une histoire. Nous ne voulions pas simplement créer une marque de bière, mais surtout montrer une autre vision du monde. Je me suis principalement occupé du site web. J&apos;ai utilisé PHP pour le backend et JavaScript pour le front. Les données sont gérées par une base de données MySQL. Sur le site, j&apos;ai codé toutes les pages sauf la page &apos;About Us&apos; et la page &apos;Fiche de bières&apos;. Je me suis occupé des commentaires, du panier, ainsi que des composants communs comme le header et le footer. J&apos;ai aussi codé la vérification de l&apos;âge de l&apos;utilisateur et supervisé la gestion des sessions et des données.
        </p>
      </>
    ),
    link: "https://quantum.2024.mmibut1.org/index.php",
    imgSrc: `${basePath}assets/images/projets/quantum.png`,
  },
];

export default projectsData;
