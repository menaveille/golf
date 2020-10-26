
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Guide de l'entrepreneur",
  title: "Bonjour les Entrepreneurs, vous cherchez:",
  o1: emoji("Des programmes de financement et de subventions 💰"),
  o2: emoji("Des fiches de projets et une banque d'idées 🧐 "),
  o3: emoji("Des données et des statistiques multi-sectorielles 🧮 "),
  o4: emoji("Une analyse et un accompagnement de votre projet 🔎 "),
};

// Your Social Media Link

const socialMediaLinks = {

  linkedin: "https://www.linkedin.com/in/mena-veille-82764317b/",
  gmail: "contactvarka@gmail.com",
  facebook: "https://www.facebook.com/menaveille"
};

// Your Skills Section

const skillsSection = {
  title: "Notre offre de valeur",
  subTitle: "PREMIERE PLATEFORME MAROCAINE DE LA VEILLE INFORMATIONNELLE QUI PERMET AUX ENTREPRENEURS DE SUIVRE : ",
  skills: [
    emoji("⚡ Les aides publiques et privées de financement et de soutien des entreprises "),
    emoji("⚡ Des dossiers spéciaux et des décryptages illustrés de plusieurs projets à travers l'accés à une banque d'idée"),
    emoji("⚡ Des statistiques sur l’actualité économique de l'industrie Marocaine : investissements, conjoncture ... "),
	emoji("⚡ Un accompagnement sur mesure, orienté résultat, pour le développement de votre activité")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "organisme",
      fontAwesomeClassname: "fas fa-building"
    },
    {
      skillName: "valeur",
      fontAwesomeClassname: "fas fa-hand-holding-medical"
    },
    {
      skillName: "accompagnement",
      fontAwesomeClassname: "fas fa-hands-helping"
    },
    {
      skillName: "décollage",
      fontAwesomeClassname: "fas fa-plane-departure"
    },
    
    
  ]
};



const achievementSection = {

  title: emoji("Des programmes de financement et de subventions 💰 "),
  subtitle: "Des dossiers spéciaux d'actualités sur les programmes de soutien des entrepreneurs : Les aides publiques et privées de financement et de soutien des entreprises  ",

  achivementsCards: [
    {
      title: "MAROC PME",
      subtitle: "Subvention IMTIAZ/ISTITMAR pour le soutien des TPE, PME et des porteurs de projets",
      image:"https://i.postimg.cc/0NT3kw6L/marocpme.png",
      footerLink: [{ name: "Détails sur le programme", url: "https://github.com/menaveille/doc/raw/main/anpme.pdf" },
        
      ]
    },
	
    {
      title: "Caisse Centrale de Garantie - CCG",
      subtitle: "Programme intégré INTILAKA (avec les Banques)",
      image: "https://i.postimg.cc/s25MJmHn/logo.png",
      footerLink: [{ name: "Détails sur le programme", url: "https://github.com/menaveille/doc/raw/main/intilaka.pdf" }]
    },

    {
      title: "Caisse Centrale de Garantie - CCG",
      subtitle: "Programme Mezzanine PME (avec les Banques)",
      image: "https://i.postimg.cc/s25MJmHn/logo.png",
      footerLink: [{ name: "Détails sur le programme", url: "https://github.com/menaveille/doc/raw/main/mezzanine.pdf" }]
    },
	
	{
      title: "Caisse Centrale de Garantie - CCG",
      subtitle: "Programme MORSEFF (avec les Banques)",
      image: "https://i.postimg.cc/s25MJmHn/logo.png",
      footerLink: [{ name: "Détails sur le programme", url: "https://github.com/menaveille/doc/raw/main/morseff.pdf" }]
    },
	
	{
      title: "Caisse Centrale de Garantie - CCG",
      subtitle: "Programme MDM (Marocains du Monde)",
      image: "https://i.postimg.cc/s25MJmHn/logo.png",
      footerLink: [{ name: "Détails sur le programme", url: "https://github.com/menaveille/doc/raw/main/mdm.pdf" }]
    },
	
	{
      title: "Caisse Centrale de Garantie - CCG",
      subtitle: "Programme Ligne Française",
      image: "https://i.postimg.cc/s25MJmHn/logo.png",
      footerLink: [{ name: "Détails sur le programme", url: "https://github.com/menaveille/doc/raw/main/lignefr.pdf" }]
    },
	
	{
      title: "Ministére de l'Industrie",
      subtitle: "Fonds de Développement Industriel",
      image: "https://i.postimg.cc/pdshyC01/ministere-industrie.jpg",
      footerLink: [{ name: "Détails sur le programme", url: "https://github.com/menaveille/doc/raw/main/FDI.pdf" }]
    },
	
	{
      title: "Ministére de l'Industrie",
      subtitle: "Conventions de l'investissement",
      image: "https://i.postimg.cc/pdshyC01/ministere-industrie.jpg",
      footerLink: [{ name: "Détails sur le programme", url: "https://github.com/menaveille/doc/raw/main/conv.pdf" }]
    },
	{
      title: "Fonds Hassan II & Ministére de l'Industrie",
      subtitle: "Fonds HASSAN II",
      image: "https://i.postimg.cc/pdshyC01/ministere-industrie.jpg",
      footerLink: [{ name: "Détails sur le programme", url: "https://github.com/menaveille/doc/raw/main/hassan2.pdf" }]
    },
	
	{
      title: "Agence de Développement Agricole",
      subtitle: "Fonds de Développement Agricole",
      image: "https://i.postimg.cc/zGW9kD4n/Tlj-Oe-SSW7cag2-Et-G2-Vsq-Tp-Fx-Q6-Eo-UNMEHJmmt-N9-In1-Jhb2-Vu7-TWi-Kvvl-Nz-ZKV4-QXIorq-QJng6-QCQe-Dg-VZ2-ASYs-X0x-Caytvg-Tnca.gif",
      footerLink: [{ name: "Détails sur le programme", url: "https://github.com/menaveille/doc/raw/main/ADA.pdf" }]
    },
	
  ]
};

// Blogs Section

const blogSection = {

  title: emoji("Fiches de projets et une banque d'idée proposées par le Ministére de l'Industrie 🧐"),
  subtitle: "Des nouvelles idées de Business pour vous lancer ou pour développer votre actvité",

  blogs: [
    {
      url: 'https://github.com/menaveille/doc/raw/main/agro.pdf',
    
      title: "Secteur agro-alimentaire",
      description: "Fromages fondus, Biscuits, Fruits secs, Conserves et sauces tomates, fruits et légumes pressés..."
    },    

    {
      url: 'https://github.com/menaveille/doc/raw/main/CHIMIE.pdf',
	  
      title: "Secteur Chimie-ParaChimie",
      description: "Papier, Menuiserie, Peinture, Résine, Désinfectants, Cosmétique...."
    },
    {
      url: 'https://github.com/menaveille/doc/raw/main/CUIR.pdf',
	 
      title: "Secteur du Cuir",
      description: "Chaussures techniques, Chaussures de ville, Maroquinerie et produits en cuir "
    },
	{
      url: 'https://github.com/menaveille/doc/raw/main/IEE.pdf',
      title: "Secteur électrique et électronique",
      description: "Convertisseurs, Pompes, Panneaux photovoltaïques, tableaux et d’armoires électriques"
    },
	{
      url: 'https://github.com/menaveille/doc/raw/main/IMM.pdf',
	  
      title: "Secteur mécanique et métallurgique",
      description: "Tôles, Emballage métallique, Fil en fer, Tubes hydrauliques..."
    },
    {
      url: 'https://github.com/menaveille/doc/raw/main/MDC.pdf',
	 
      title: "Secteur matériaux de construction",
      description: "Production des émaux et colorants..."
    },
	{
      url: 'https://github.com/menaveille/doc/raw/main/PLASTURGIE.pdf',
      title: "Secteur plastique",
      description: "raccords et tuyaux pour irrigation, Palettes, Stretch film, Préforme BG..."
    },
  {
      url: 'https://github.com/menaveille/doc/raw/main/TEXTILE.pdf',
      title: "Secteur textile",
      description: "Linge de maison, Tissage denim, Chaine et trame, Filature, Tricotage"
    },
	
   {
      url: 'https://github.com/menaveille/doc/raw/main/TRANSPORT.pdf',
      title: "Secteur transport",
      description: "Navires de pêche, Réparation navale, Triporteurs électriques, Pare-brise..."
    },
  
	
  ]
};

// Talks Sections

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      company: "Identification du besoin",
      desc: "Qualifier  les  besoins  d’accompagnement  des  projets des entreprises  et  identifier  les  parcours d’accompagnement.",
      
    },
    {
      company:"Proposition de l'offre adaptée",
      desc: "Cadrage et choix d'une solution répondant aux besoins de l'entreprise en termes d'axes de développement et de croissance."
    },
    {
      company: "Mise en oeuvre & suivi",
      desc: " Définition des modalités de la mise en oeuvre opérationnelle et accompagnement de l'entreprise jusqu'à la concrétisation de son projet ."
    },
  ]
};

// Podcast Section

const podcastSection = {
 


	title: emoji("Contactez-nous ☎️"),
	subtitle: "Contactez-nous pour vous assister dans le développement de votre entreprise/projet",
	number: "Téléphone: +212 661 47 98 96",
	email: "E-mail: contactvarka@gmail.com"
 
 
};



export { greeting, socialMediaLinks, skillsSection, achievementSection, workExperiences, blogSection,  podcastSection};
