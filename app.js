const storageKeys = {
  theme: "hg-dashboard-theme",
  students: "hg-dashboard-students",
  language: "hg-dashboard-language",
  timerSound: "hg-dashboard-timer-sound",
  helpBoard: "hg-dashboard-help-board",
  correctionTags: "hg-dashboard-correction-tags",
  shortcuts: "hg-dashboard-shortcuts",
  homeTools: "hg-dashboard-home-tools"
};

const translations = {
  fr: {
    nav: ["Accueil", "Date", "Minuteur", "Cartes", "OSM", "Frises", "Consignes", "Relecture", "Balises", "Groupes", "Aide"],
    title: "Mon tableau de bord HG",
    subtitle: "Mes outils de classe en un seul endroit",
    dateTitle: "Calendrier",
    dateSubtitle: "La boite à outils du prof d'Histoire et Géographie",
    toolHeaders: {
      homeCard: ["Mon tableau de bord HG", "Mes outils de classe en un seul endroit"],
      timerCard: ["Minuteur", "Organiser les temps de travail et de pause."],
      mapCard: ["Cartes", "Afficher des cartes thématiques et des fonds de carte."],
      osmCard: ["Explorer", "Rechercher des lieux, voyager dans l'espace... et dans le temps !"],
      groupsCard: ["Travailler ensemble", "Créer des groupes ou tirer au sort des élèves."],
      helpCard: ["Aide", "Organiser l'entraide dans la classe."],
      instructionsCard: ["Consignes", "Expliciter les verbes de consignes pour réaliser un travail."],
      correctionTagsCard: ["Balises de correction", "Identifier des erreurs et envisager des pistes pour les corriger."],
      proofreadingCard: ["Relecture", "Vérifier et améliorer une production écrite."],
      timelineCard: ["Frises chronologiques", "Situer des grands repères chronologiques dans le temps."],
    },
    homeToolsTitle: "Mes outils",
    homeToolsIntro: "Ouvrez rapidement l'outil dont vous avez besoin.",
    homeShortcutsTitle: "Mes raccourcis",
    homeShortcutsIntro: "Ajoutez vos sites et ressources habituels.",
    backupTitle: "Sauvegarde",
    backupIntro: "Conservez vos données pour les retrouver sur un autre navigateur.",
    exportData: "Exporter",
    importData: "Importer",
    backupImported: "Données importées",
    backupInvalid: "Fichier de sauvegarde invalide",
    shortcutName: "Nom du raccourci",
    shortcutUrl: "Adresse URL",
    shortcutAdd: "Ajouter",
    shortcutEmpty: "Aucun raccourci pour le moment.",
    shortcutRemove: "Supprimer le raccourci",
    homeToolLabels: {
      dateBanner: "Calendrier",
      timerCard: "Minuteur",
      mapCard: "Cartes",
      osmCard: "Explorer",
      timelineCard: "Frises chronologiques",
      instructionsCard: "Consignes",
      proofreadingCard: "Relecture",
      correctionTagsCard: "Balises de correction",
      groupsCard: "Travailler ensemble",
      helpCard: "Aide"
    },
    timerTitle: "Minuteur",
    work: "Travail",
    short: "Pause",
    duration: "Duree",
    start: "Demarrer",
    resume: "Reprendre",
    pause: "Pause",
    next: "Suivant",
    reset: "Reset",
    sound: "Sonnerie",
    testSound: "Tester",
    remaining: "restant",
    readyWork: "Pret pour une session de travail.",
    running: "en cours : il reste",
    warning: "Attention, il reste",
    nearingEnd: "Il reste {time}. On approche de la fin.",
    finished: "{mode} termine. Passage a l'etape suivante.",
    mapsTitle: "Cartes",
    thematicMapsLabel: "Carte thematique",
    blankMapsLabel: "Fonds de cartes",
    mapChoose: "Choisir...",
    mapWorldGroup: "Monde",
    mapRegionsGroup: "Regions",
    thematicMapLabels: {
      "world-reliefs-thematic": "Monde | Reliefs",
      "world-oceans-thematic": "Monde | Océans",
      "world-political-equal-earth": "Monde | Politique (Equal Earth)",
      "world-political-equal-earth-asia": "Monde | Politique (Equal Earth Asia)",
      "world-political-equal-earth-americas": "Monde | Politique (Equal Earth America)",
      "eu-capitals-thematic": "Europe | Capitales des pays de l'UE",
      "france-outre-mer-thematic": "France | Outre-mer",
      "france-regions-departments-thematic": "France | Régions et départements",
      "france-relief-thematic": "France | Relief"
    },
    blankMapLabels: {
      "world-blank-equal-earth-graticule": "Planisphere vierge Equal Earth",
      "world-blank-bertin-1953-graticule": "Planisphere vierge Bertin 1953",
      "world-blank-mollweide-interrupted-hemispheres-graticule": "Mollweide interrompue 2 hemispheres",
      "africa-blank-natural-earth-graticule": "Afrique vierge Natural Earth",
      "asia-blank-natural-earth-graticule": "Asie vierge Natural Earth",
      "europe-blank-equal-earth-graticule": "Europe vierge Equal Earth",
      "france-blank-mercator-graticule": "France hexagonale Equal Earth",
      "united-states-blank-hatier-2018": "États-Unis",
      "china-blank-hatier-2020": "Chine",
      "united-kingdom-blank-hatier-2024": "Royaume-Uni"
    },
    osmTitle: "OpenStreetMap",
    osmProviderOsm: "OpenStreetMap",
    osmProviderCartesGouv: "Cartes.gouv.fr",
    osmProviderHistory: "Remonter le temps",
    osmCartesGouvHint: "Recherche en France : utilisez le moteur intégré de Cartes.gouv.fr.",
    osmOpenCartesGouv: "Ouvrir Cartes.gouv.fr",
    osmHistoryHint: "Comparez les cartes et photographies aériennes historiques de l'IGN.",
    osmOpenHistory: "Ouvrir Remonter le temps",
    search: "Chercher",
    location: "Lieu",
    layer: "Couche",
    groupsTitle: "Groupes",
    groupsView: "Faire des groupes",
    wheelView: "Tirer au sort",
    namesButton: "Noms",
    saveNames: "Enregistrer",
    namesHelp: "Un nom par ligne. Vous pouvez coller une liste complète.",
    students: "Eleves",
    size: "Taille",
    mode: "Mode",
    groupsOfSize: "Groupes de N",
    numberOfGroups: "N groupes",
    groupName: "Groupe {count}",
    generate: "Generer",
    shuffle: "Melanger",
    moveStudent: "Déplacer cet élève",
    spinWheel: "Lancer la roue",
    resetWheel: "Réinitialiser",
    noStudents: "Ajoutez des élèves puis lancez la roue.",
    winner: "Élève tiré.e au sort : {name}",
    winnerHistory: "Tirages précédents : {names}",
    wheelPool: "{count} nom(s) dans la roue.",
    wheelEmpty: "Tous les noms ont été retirés de la roue.",
    helpNeedsTitle: "J'ai besoin d'aide",
    helpOffersTitle: "Je peux aider",
    helpNeedPlaceholder: "Prénom ou besoin",
    helpOfferPlaceholder: "Prénom ou domaine d'aide",
    helpAdd: "Ajouter",
    helpNeedsEmpty: "Personne n'a encore demandé d'aide.",
    helpOffersEmpty: "Personne ne s'est encore proposé pour aider.",
    helpRemove: "Retirer",
    helpGuidanceToggle: "Conseils",
    helpNeedsGuidance: {
      intro: "Avant de demander de l'aide :",
      items: [
        "J'essaie d'abord par moi-même.",
        "Je choisis une personne qui peut m'aider.",
        "J'écoute ses explications et je pose mes questions.",
        "Je peux décider d'arrêter de me faire aider."
      ]
    },
    helpOffersGuidance: {
      intro: "Pour bien aider :",
      items: [
        "J'ai terminé mon travail ou je peux faire une pause.",
        "Je vérifie que j'ai bien compris la consigne.",
        "J'explique avec mes mots, je donne des exemples, j'aide à lire, je donne des astuces.",
        "Je n'offre pas la réponse : j'encourage et je laisse chercher."
      ]
    },
    instructionsTitle: "Consignes",
    correctionTagsTitle: "Balises de correction",
    correctionTagsChoose: "Balises affichées ({count})",
    correctionTagsDialogTitle: "Choisir les balises à afficher",
    correctionTagsSelectAll: "Tout sélectionner",
    correctionTagsDeselectAll: "Tout désélectionner",
    correctionTagsClose: "Fermer",
    correctionTagsValidate: "Valider",
    correctionTagsEmpty: "Aucune balise n'est sélectionnée.",
    correctionTagsErrors: "Erreurs possibles",
    correctionTagsRemediation: "Pistes de remédiation",
    proofreadingTitle: "Relecture",
    verb: "Verbe",
    timelineTitle: "Frises chronologiques",
    allLevels: "Tous les niveaux",
    allPeriods: "Toutes periodes",
    timelineOverview: "Repères essentiels",
    timelineAllMarkers: "Tous les repères",
    timelineDetailLabel: "Détail du repère",
    timelinePeriodLegend: "Grandes périodes historiques",
    timelinePeriods: {
      "Préhistoire": "Préhistoire",
      "Antiquité": "Antiquité",
      "Moyen Âge": "Moyen Âge",
      "Temps modernes": "Temps modernes",
      "Époque contemporaine": "Époque contemporaine"
    },
    langButton: "FR",
    langLabel: "Passer en anglais",
    locale: "fr-FR"
  },
  en: {
    nav: ["Home", "Date", "Timer", "Maps", "OSM", "Timelines", "Instructions", "Proofread", "Tags", "Groups", "Help"],
    title: "My HG dashboard",
    subtitle: "Find all your classroom tools in one place.",
    dateTitle: "Calendar",
    dateSubtitle: "The History-Geography teacher's toolbox",
    toolHeaders: {
      homeCard: ["My HG dashboard", "Find all your classroom tools in one place."],
      timerCard: ["Timer", "Organize work and break times."],
      mapCard: ["Maps", "Display thematic maps and blank maps."],
      osmCard: ["Explore", "Find places and compare territorial maps."],
      groupsCard: ["Work together", "Create groups and select a student at random."],
      helpCard: ["Help", "Organize peer support in the classroom."],
      instructionsCard: ["Instructions", "Understand the expected action verbs."],
      correctionTagsCard: ["Correction tags", "Identify errors and find ways to correct them."],
      proofreadingCard: ["Proofreading", "Check and improve a written piece of work."],
      timelineCard: ["Timelines", "Place landmarks in time."],
    },
    homeToolsTitle: "My tools",
    homeToolsIntro: "Open the tool you need in one click.",
    homeShortcutsTitle: "My shortcuts",
    homeShortcutsIntro: "Add your regular websites and resources.",
    backupTitle: "Backup",
    backupIntro: "Keep your data to restore it in another browser.",
    exportData: "Export",
    importData: "Import",
    backupImported: "Data imported",
    backupInvalid: "Invalid backup file",
    shortcutName: "Shortcut name",
    shortcutUrl: "URL address",
    shortcutAdd: "Add",
    shortcutEmpty: "No shortcuts yet.",
    shortcutRemove: "Remove shortcut",
    homeToolLabels: {
      dateBanner: "Calendar",
      timerCard: "Timer",
      mapCard: "Maps",
      osmCard: "Explore",
      timelineCard: "Timelines",
      instructionsCard: "Instructions",
      proofreadingCard: "Proofreading",
      correctionTagsCard: "Correction tags",
      groupsCard: "Work together",
      helpCard: "Help"
    },
    timerTitle: "Timer",
    work: "Work",
    short: "Break",
    duration: "Duration",
    start: "Start",
    resume: "Resume",
    pause: "Pause",
    next: "Next",
    reset: "Reset",
    sound: "Sound",
    testSound: "Test",
    remaining: "left",
    readyWork: "Ready for a work session.",
    running: "in progress: time left",
    warning: "Careful, time left",
    nearingEnd: "{time} left. Almost done.",
    finished: "{mode} done. Moving to the next step.",
    mapsTitle: "Maps",
    thematicMapsLabel: "Thematic maps",
    blankMapsLabel: "Blank maps",
    mapChoose: "Choose...",
    mapWorldGroup: "World",
    mapRegionsGroup: "Regions",
    thematicMapLabels: {
      "world-reliefs-thematic": "World | Relief",
      "world-oceans-thematic": "World | Oceans",
      "world-political-equal-earth": "World | Political (Equal Earth)",
      "world-political-equal-earth-asia": "World | Political (Equal Earth Asia)",
      "world-political-equal-earth-americas": "World | Political (Equal Earth America)",
      "eu-capitals-thematic": "Europe | EU country capitals",
      "france-outre-mer-thematic": "France | Overseas France",
      "france-regions-departments-thematic": "France | Regions and departments",
      "france-relief-thematic": "France | Relief"
    },
    blankMapLabels: {
      "world-blank-equal-earth-graticule": "Blank Equal Earth world map",
      "world-blank-bertin-1953-graticule": "Blank Bertin 1953 world map",
      "world-blank-mollweide-interrupted-hemispheres-graticule": "Interrupted Mollweide, 2 hemispheres",
      "africa-blank-natural-earth-graticule": "Blank Natural Earth map of Africa",
      "asia-blank-natural-earth-graticule": "Blank Natural Earth map of Asia",
      "europe-blank-equal-earth-graticule": "Blank Equal Earth map of Europe",
      "france-blank-mercator-graticule": "Blank Equal Earth map of mainland France",
      "united-states-blank-hatier-2018": "United States",
      "china-blank-hatier-2020": "China",
      "united-kingdom-blank-hatier-2024": "United Kingdom"
    },
    osmTitle: "OpenStreetMap",
    osmProviderOsm: "OpenStreetMap",
    osmProviderCartesGouv: "Cartes.gouv.fr",
    osmProviderHistory: "Time travel",
    osmCartesGouvHint: "For places in France, use the built-in Cartes.gouv.fr search.",
    osmOpenCartesGouv: "Open Cartes.gouv.fr",
    osmHistoryHint: "Compare IGN historical maps and aerial photographs.",
    osmOpenHistory: "Open Time travel",
    search: "Search",
    location: "Place",
    layer: "Layer",
    groupsTitle: "Groups",
    groupsView: "Make groups",
    wheelView: "Draw",
    namesButton: "Names",
    saveNames: "Save",
    namesHelp: "One name per line. You can paste a full list.",
    students: "Students",
    size: "Size",
    mode: "Mode",
    groupsOfSize: "Groups of N",
    numberOfGroups: "N groups",
    groupName: "Group {count}",
    generate: "Generate",
    shuffle: "Mix",
    moveStudent: "Move this student",
    spinWheel: "Spin the wheel",
    resetWheel: "Reset",
    noStudents: "Add students, then spin the wheel.",
    winner: "Selected student: {name}",
    winnerHistory: "Previous draws: {names}",
    wheelPool: "{count} name(s) in the wheel.",
    wheelEmpty: "All names have been removed from the wheel.",
    helpNeedsTitle: "I need help",
    helpOffersTitle: "I can help",
    helpNeedPlaceholder: "Name or need",
    helpOfferPlaceholder: "Name or area of support",
    helpAdd: "Add",
    helpNeedsEmpty: "No one has asked for help yet.",
    helpOffersEmpty: "No one has offered help yet.",
    helpRemove: "Remove",
    helpGuidanceToggle: "Guidance",
    helpNeedsGuidance: {
      intro: "Before asking for help:",
      items: [
        "I try on my own first.",
        "I choose someone who can help me.",
        "I listen to their explanations and ask my questions.",
        "I remain in charge of my work."
      ]
    },
    helpOffersGuidance: {
      intro: "To help well:",
      items: [
        "I have finished my work or can take a short break.",
        "I make sure I understand the instruction.",
        "I explain, give examples, or offer tips.",
        "I do not give the answer: I encourage and let the other person think."
      ]
    },
    instructionsTitle: "Instructions",
    correctionTagsTitle: "Tags",
    correctionTagsChoose: "Displayed tags ({count})",
    correctionTagsDialogTitle: "Choose the tags to display",
    correctionTagsSelectAll: "Select all",
    correctionTagsDeselectAll: "Deselect all",
    correctionTagsClose: "Close",
    correctionTagsValidate: "Confirm",
    correctionTagsEmpty: "No tags are selected.",
    correctionTagsErrors: "Possible errors",
    correctionTagsRemediation: "Ways to improve",
    proofreadingTitle: "Proofread",
    verb: "Verb",
    timelineTitle: "Timelines",
    allLevels: "All levels",
    allPeriods: "All periods",
    timelineOverview: "Key milestones",
    timelineAllMarkers: "All markers",
    timelineDetailLabel: "Timeline detail",
    timelinePeriodLegend: "Major historical periods",
    timelinePeriods: {
      "Préhistoire": "Prehistory",
      "Antiquité": "Antiquity",
      "Moyen Âge": "Middle Ages",
      "Temps modernes": "Early Modern period",
      "Époque contemporaine": "Contemporary era"
    },
    langButton: "EN",
    langLabel: "Switch to French",
    locale: "en-US"
  }
};

const mapDefinitions = {
  "world-reliefs-thematic": {
    src: "assets/maps/world-reliefs-thematic.png",
    alt: "Carte thematique du monde montrant les grands reliefs",
    caption: "",
    source: "Source : HGSempai"
  },
  "world-oceans-thematic": {
    src: "assets/maps/world-oceans-thematic.png",
    alt: "Carte thematique du monde localisant les oceans",
    caption: "",
    source: "Source : HGSempai"
  },
  "world-blank-equal-earth-graticule": {
    src: "assets/maps/equal-earth-blank-graticule.png",
    alt: "Planisphere vierge Equal Earth realise avec Graticule",
    caption: "",
    source: "Source : Equal Earth - Réalisé avec Graticule"
  },
  "world-blank-bertin-1953-graticule": {
    src: "assets/maps/world-blank-bertin-1953-graticule.png",
    alt: "Planisphere vierge en projection Bertin 1953 realise avec Graticule",
    caption: "",
    source: "Source : Bertin 1953 - Réalisé avec Graticule"
  },
  "world-blank-mollweide-interrupted-hemispheres-graticule": {
    src: "assets/maps/world-blank-mollweide-interrupted-hemispheres-graticule.png",
    alt: "Planisphere vierge en projection Mollweide interrompue en deux hemispheres realise avec Graticule",
    caption: "",
    source: "Source : Mollweide interrompue 2 hémisphères - Réalisé avec Graticule"
  },
  "world-political-equal-earth": {
    src: {
      fr: "assets/maps/equal-earth-world-political-fr.jpg",
      en: "assets/maps/equal-earth-world-political-en.jpg"
    },
    alt: {
      fr: "Planisphere politique Equal Earth en francais centre sur Greenwich",
      en: "Equal Earth political world map in English centered on Greenwich"
    },
    caption: {
      fr: "",
      en: ""
    },
    source: `Source : <a href="https://equal-earth.com" target="_blank" rel="noopener">equal-earth.com</a> · Auteur : Tom Patterson`
  },
  "world-political-equal-earth-asia": {
    src: "assets/maps/equal-earth-asia-150e-en.jpg",
    alt: "Equal Earth political world map centered on Asia, 150E, English",
    caption: "",
    source: `Source : <a href="https://equal-earth.com" target="_blank" rel="noopener">equal-earth.com</a> · Auteur : Tom Patterson`
  },
  "world-political-equal-earth-americas": {
    src: "assets/maps/equal-earth-americas-90w-en.jpg",
    alt: "Equal Earth political world map centered on the Americas, 90W, English",
    caption: "",
    source: `Source : <a href="https://equal-earth.com" target="_blank" rel="noopener">equal-earth.com</a> · Auteur : Tom Patterson`
  },
  "eu-capitals-thematic": {
    src: "assets/maps/eu-capitals-thematic.png",
    alt: "Carte thematique des capitales des pays de l'Union europeenne",
    caption: "",
    source: "Source : HG Sempai"
  },
  "france-outre-mer-thematic": {
    src: "assets/maps/france-outre-mer-thematic.png",
    alt: "Carte thematique localisant la France d'outre-mer dans le monde",
    caption: "",
    source: "Source : d-maps.com"
  },
  "france-regions-departments-thematic": {
    src: "assets/maps/france-regions-departements-thematic.webp",
    alt: "Carte thematique des regions et departements francais",
    caption: "",
    source: "Source : Lelivrescolaire.fr, Licence CC BY-SA-NC."
  },
  "france-relief-thematic": {
    src: "assets/maps/france-relief-thematic.webp",
    alt: "Carte thematique du relief de la France",
    caption: "",
    source: "Source : Lelivrescolaire.fr, Licence CC BY-SA-NC."
  },
  "africa-blank-natural-earth-graticule": {
    src: "assets/maps/africa-blank-natural-earth-graticule.png",
    alt: "Fond de carte vierge de l'Afrique en projection Natural Earth realise avec Graticule",
    caption: "",
    source: "Source : Natural Earth - Réalisé avec Graticule"
  },
  "asia-blank-natural-earth-graticule": {
    src: "assets/maps/asia-blank-natural-earth-graticule.png",
    alt: "Fond de carte vierge de l'Asie en projection Natural Earth realise avec Graticule",
    caption: "",
    source: "Source : Natural Earth - Réalisé avec Graticule"
  },
  "france-blank-mercator-graticule": {
    src: "assets/maps/france-blank-mercator-graticule.png",
    alt: "Fond de carte vierge de la France hexagonale en projection Equal Earth realise avec Graticule",
    caption: "",
    source: "Source : Equal Earth - Réalisé avec Graticule"
  },
  "europe-blank-equal-earth-graticule": {
    src: "assets/maps/europe-blank-equal-earth-graticule.png",
    alt: "Fond de carte vierge de l'Europe en projection Equal Earth realise avec Graticule",
    caption: "",
    source: "Source : Equal Earth - Réalisé avec Graticule"
  },
  "united-states-blank-hatier-2018": {
    src: "assets/maps/united-states-blank-hatier-2018.png",
    alt: "Fond de carte vierge des Etats-Unis",
    caption: "",
    source: "Source : Cartothèque Hatier 2018, Noël Meunier."
  },
  "china-blank-hatier-2020": {
    src: "assets/maps/china-blank-hatier-2020.png",
    alt: "Fond de carte vierge de la Chine",
    caption: "",
    source: "Source : Cartothèque Hatier 2020, Noël Meunier."
  },
  "united-kingdom-blank-hatier-2024": {
    src: "assets/maps/united-kingdom-blank-hatier-2024.jpg",
    alt: "Fond de carte vierge du Royaume-Uni",
    caption: "",
    source: "Source : Cartothèque Hatier, 2024, Jean-Pierre Crivellari."
  }
};

const timerSounds = {
  bell: {
    label: "Bell",
    src: "assets/sounds/bell.mp3"
  },
  gameOver: {
    label: "Game Over",
    src: "assets/sounds/game-over.mp3"
  },
  buzzer: {
    label: "Buzzer",
    src: "assets/sounds/wrong-answer.mp3"
  },
  stop: {
    label: "Stop",
    src: "assets/sounds/stop-it.mp3"
  },
  disappointed: {
    label: "Disappointed",
    src: "assets/sounds/disappointed-trombone.mp3"
  },
  backToWork: {
    label: "Back to work",
    src: "assets/sounds/back-to-work.mp3"
  },
  odeToJoy: {
    label: "Ode to joy",
    src: "assets/sounds/ode-to-joy.mp3"
  }
};

const timelineEvents = [
  {
    "date": "Vers 400 000 AEC",
    "order": -400000,
    "title": "Domestication du feu",
    "level": "6e",
    "period": "Préhistoire",
    "subject": "Histoire",
    "note": "Paléolithique ; feu ; chasseurs-cueilleurs ; premiers humains ; archéologie",
    "image": "assets/timeline/fire-friction.jpg",
    "imageAlt": "Allumage du feu par friction"
  },
  {
    "date": "Vers 300 000 AEC",
    "order": -300000,
    "title": "Plus anciennes traces connues d’Homo sapiens, dans le Maroc actuel",
    "level": "6e",
    "period": "Préhistoire",
    "subject": "Histoire",
    "note": "Homo sapiens ; Afrique ; Maroc ; migrations ; archéologie",
    "image": "assets/timeline/jebel-irhoud.jpg",
    "imageAlt": "Crâne d’Homo sapiens de Jebel Irhoud"
  },
  {
    "date": "Vers 10 000-9 000 AEC",
    "order": -10000,
    "title": "Début du Néolithique au Proche-Orient",
    "level": "6e",
    "period": "Préhistoire",
    "subject": "Histoire",
    "note": "Néolithique ; agriculture ; élevage ; domestication ; sédentarisation ; village",
    "image": "assets/timeline/catalhoyuk.jpg",
    "imageAlt": "Fouilles du site néolithique de Çatalhöyük"
  },
  {
    "date": "Vers 4 000 AEC",
    "order": -4000,
    "title": "Invention de la roue",
    "level": "6e",
    "period": "Préhistoire",
    "subject": "Histoire",
    "note": "Néolithique ; roue ; invention ; transport ; artisanat",
    "image": "assets/timeline/ljubljana-wheel.jpg",
    "imageAlt": "Roue des marais de Ljubljana"
  },
  {
    "date": "IVe millénaire AEC",
    "order": -3001,
    "title": "Début de l’Antiquité avec la naissance de l’écriture",
    "level": "6e",
    "period": "Antiquité",
    "subject": "Histoire",
    "note": "écriture ; Antiquité ; chronologie ; période ; convention",
    "image": "assets/timeline/cuneiform-tablet.jpg",
    "imageAlt": "Tablette en écriture cunéiforme"
  },
  {
    "date": "Vers 3 000 AEC",
    "order": -3000,
    "title": "Invention de l’écriture cunéiforme, premières cités-États en Mésopotamie et premier royaume unifié d’Égypte",
    "level": "6e",
    "period": "Antiquité",
    "subject": "Histoire",
    "note": "écriture cunéiforme ; Mésopotamie ; cité-État ; Égypte ; royaume ; scribe",
    "image": "assets/timeline/cuneiform-tablet.jpg",
    "imageAlt": "Tablette en écriture cunéiforme"
  },
  {
    "date": "IXe siècle AEC",
    "order": -801,
    "title": "Début de la rédaction de la Bible hébraïque",
    "level": "6e",
    "period": "Antiquité",
    "subject": "Histoire",
    "note": "Bible hébraïque ; judaïsme ; monothéisme ; Torah ; Yahvé ; Israël et Juda",
    "image": "assets/timeline/aleppo-codex.jpg",
    "imageAlt": "Page du Codex d’Alep"
  },
  {
    "date": "VIIIe siècle AEC",
    "order": -701,
    "title": "Mise à l’écrit de L’Iliade et de L’Odyssée",
    "level": "6e",
    "period": "Antiquité",
    "subject": "Histoire",
    "note": "Homère ; Iliade ; Odyssée ; mythe ; monde grec ; culture commune",
    "image": "assets/timeline/ambrosian-iliad.jpg",
    "imageAlt": "Miniature de l’Iliade ambrosienne"
  },
  {
    "date": "650-550 AEC",
    "order": -650,
    "title": "Tombes princières de Vix et de Lavau",
    "level": "6e",
    "period": "Antiquité",
    "subject": "Histoire",
    "note": "Celtes ; tombe princière ; Vix ; Lavau ; archéologie ; artisanat",
    "image": "assets/timeline/vix-krater.jpg",
    "imageAlt": "Détail du cratère de Vix"
  },
  {
    "date": "Vers 600 AEC",
    "order": -600,
    "title": "Fondation de Massalia par des colons grecs",
    "level": "6e",
    "period": "Antiquité",
    "subject": "Histoire",
    "note": "Massalia ; colons grecs ; Marseille ; commerce ; Méditerranée ; Gaules",
    "image": "assets/timeline/marseille-vieux-port.jpg",
    "imageAlt": "Vieux-Port de Marseille"
  },
  {
    "date": "450-50 AEC",
    "order": -450,
    "title": "Second âge du fer, dit « culture de La Tène »",
    "level": "6e",
    "period": "Antiquité",
    "subject": "Histoire",
    "note": "Celtes ; âge du fer ; culture de La Tène ; oppidum ; artisanat ; commerce",
    "image": "assets/timeline/la-tene-sword.png",
    "imageAlt": "Épées et fourreaux celtiques de la culture de La Tène"
  },
  {
    "date": "Ve siècle AEC",
    "order": -401,
    "title": "Puissance d’Athènes sous Périclès",
    "level": "6e",
    "period": "Antiquité",
    "subject": "Histoire",
    "note": "Athènes ; Périclès ; démocratie ; citoyen ; esclavage ; Acropole",
    "image": "assets/timeline/pericles-bust.jpg",
    "imageAlt": "Buste de Périclès"
  },
  {
    "date": "336-323 AEC",
    "order": -336,
    "title": "Règne d’Alexandre le Grand",
    "level": "6e",
    "period": "Antiquité",
    "subject": "Histoire",
    "note": "Alexandre le Grand ; Macédoine ; conquêtes ; empire ; monde grec",
    "image": "assets/timeline/alexander-mosaic.jpg",
    "imageAlt": "Alexandre le Grand dans la mosaïque d’Issos"
  },
  {
    "date": "52 AEC",
    "order": -52,
    "title": "Fin de la guerre des Gaules ; Jules César vainqueur de Vercingétorix",
    "level": "6e",
    "period": "Antiquité",
    "subject": "Histoire",
    "note": "Jules César ; Vercingétorix ; guerre des Gaules ; Alésia ; romanisation",
    "image": "assets/timeline/vercingetorix-alesia.jpg",
    "imageAlt": "Statue de Vercingétorix à Alésia"
  },
  {
    "date": "Ier siècle",
    "order": 30,
    "title": "Débuts du christianisme",
    "level": "6e",
    "period": "Antiquité",
    "subject": "Histoire",
    "note": "Jésus ; christianisme ; monothéisme ; Empire romain ; premiers chrétiens",
    "image": "assets/timeline/roman-empire-395.jpg",
    "imageAlt": "Carte de l’Empire romain"
  },
  {
    "date": "Ier-IIe siècles",
    "order": 100,
    "title": "Paix romaine",
    "level": "6e",
    "period": "Antiquité",
    "subject": "Histoire",
    "note": "Empire romain ; paix romaine ; routes ; échanges ; villes ; romanisation",
    "image": "assets/timeline/roman-empire-395.jpg",
    "imageAlt": "Carte de l’Empire romain"
  },
  {
    "date": "395 ou 476 apr. J.-C.",
    "order": 395,
    "title": "Fin de l’Antiquité",
    "level": "6e",
    "period": "Antiquité",
    "subject": "Histoire",
    "note": "Empire romain ; fin de l’Antiquité ; Moyen Âge ; convention chronologique",
    "image": "assets/timeline/roman-empire-395.jpg",
    "imageAlt": "Carte de l’Empire romain vers 395"
  },
  {
    "date": "395",
    "order": 395,
    "title": "Partage de l’Empire romain",
    "level": "5e",
    "period": "Antiquité",
    "subject": "Histoire",
    "note": "Empire romain ; Empire romain d’Occident ; Empire romain d’Orient ; Constantinople ; Rome",
    "image": "assets/timeline/roman-empire-395.jpg",
    "imageAlt": "Carte de l’Empire romain vers 395"
  },
  {
    "date": "476",
    "order": 476,
    "title": "Chute de l’Empire romain d’Occident",
    "level": "5e",
    "period": "Moyen Âge",
    "subject": "Histoire",
    "note": "Empire romain d’Occident ; peuples germaniques ; fin de l’Antiquité ; début du Moyen Âge",
    "image": "assets/timeline/roman-empire-395.jpg",
    "imageAlt": "Carte de l’Empire romain d’Occident et d’Orient"
  },
  {
    "date": "476-1492",
    "order": 476,
    "title": "Moyen Âge",
    "level": "CM1",
    "period": "Moyen Âge",
    "subject": "Histoire",
    "note": "Moyen Âge ; seigneurie ; Église ; château ; paysans ; ville",
    "image": "assets/timeline/riches-heures-juin.jpg",
    "imageAlt": "Scène de travaux agricoles dans Les Très Riches Heures du duc de Berry"
  },
  {
    "date": "XIe-XIIIe siècles",
    "order": 1001,
    "title": "Abbaye de Cluny et Notre-Dame de Paris",
    "level": "CM1",
    "period": "Moyen Âge",
    "subject": "Histoire",
    "note": "abbaye de Cluny ; Notre-Dame de Paris ; Église ; art roman ; art gothique"
  },
  {
    "date": "527-565",
    "order": 527,
    "title": "Règne de Justinien",
    "level": "5e",
    "period": "Moyen Âge",
    "subject": "Histoire",
    "note": "Justinien ; Empire byzantin ; Constantinople ; basilique Sainte-Sophie ; droit romain",
    "image": "assets/timeline/justinian-mosaic.jpg",
    "imageAlt": "Mosaïque de l’empereur Justinien à Ravenne"
  },
  {
    "date": "622",
    "order": 622,
    "title": "Hégire et début de l’ère musulmane",
    "level": "5e",
    "period": "Moyen Âge",
    "subject": "Histoire",
    "note": "Muhammad ; La Mecque ; Médine ; Hégire ; calendrier musulman ; islam",
    "image": "assets/timeline/hejaz-622.png",
    "imageAlt": "Carte du Hedjaz vers 622"
  },
  {
    "date": "800",
    "order": 800,
    "title": "Couronnement impérial de Charlemagne",
    "level": "5e",
    "period": "Moyen Âge",
    "subject": "Histoire",
    "note": "Charlemagne ; pape Léon III ; Rome ; Empire carolingien ; chrétienté occidentale",
    "image": "assets/timeline/charlemagne-durer.jpg",
    "imageAlt": "Portrait de Charlemagne par Albrecht Dürer"
  },
  {
    "date": "843",
    "order": 843,
    "title": "Partage de Verdun",
    "level": "5e",
    "period": "Moyen Âge",
    "subject": "Histoire",
    "note": "Empire carolingien ; petits-fils de Charlemagne ; Francie occidentale ; Francie médiane ; Francie orientale",
    "image": "assets/timeline/charlemagne-durer.jpg",
    "imageAlt": "Portrait de Charlemagne par Albrecht Dürer"
  },
  {
    "date": "987",
    "order": 987,
    "title": "Avènement de Hugues Capet et début de la dynastie des Capétiens",
    "level": "5e",
    "period": "Moyen Âge",
    "subject": "Histoire",
    "note": "Hugues Capet ; sacre ; Capétiens ; domaine royal ; monarchie",
    "image": "assets/timeline/hugues-capet-coronation.jpg",
    "imageAlt": "Couronnement d’Hugues Capet"
  },
  {
    "date": "XIe-XIVe siècles",
    "order": 1001,
    "title": "Doublement de la population européenne",
    "level": "5e",
    "period": "Moyen Âge",
    "subject": "Histoire",
    "note": "croissance démographique ; défrichements ; agriculture ; seigneuries ; villes",
    "image": "assets/timeline/moines-defrichant.jpg",
    "imageAlt": "Moines défrichant une forêt"
  },
  {
    "date": "1054",
    "order": 1054,
    "title": "Excommunication mutuelle du pape et du patriarche de Constantinople",
    "level": "5e",
    "period": "Moyen Âge",
    "subject": "Histoire",
    "note": "pape ; patriarche ; Rome ; Constantinople ; catholiques ; orthodoxes",
    "image": "assets/timeline/hagia-sophia.jpg",
    "imageAlt": "Basilique Sainte-Sophie à Constantinople"
  },
  {
    "date": "1095-1099",
    "order": 1095,
    "title": "Première croisade",
    "level": "5e",
    "period": "Moyen Âge",
    "subject": "Histoire",
    "note": "Urbain II ; Clermont ; Jérusalem ; chrétienté occidentale ; monde musulman",
    "image": "assets/timeline/crusaders-constantinople.jpg",
    "imageAlt": "Croisés devant Constantinople"
  },
  {
    "date": "Milieu du XIIe siècle",
    "order": 1150,
    "title": "Construction des cathédrales en Europe",
    "level": "5e",
    "period": "Moyen Âge",
    "subject": "Histoire",
    "note": "cathédrales ; art gothique ; villes ; Église ; évêque ; chantiers",
    "image": "assets/timeline/notre-dame-reims.jpg",
    "imageAlt": "Détail de la façade de Notre-Dame de Reims"
  },
  {
    "date": "1204",
    "order": 1204,
    "title": "Sac de Constantinople par les croisés",
    "level": "5e",
    "period": "Moyen Âge",
    "subject": "Histoire",
    "note": "quatrième croisade ; sac de Constantinople ; croisés ; rupture des chrétientés",
    "image": "assets/timeline/crusaders-constantinople.jpg",
    "imageAlt": "Prise de Constantinople par les croisés"
  },
  {
    "date": "1214",
    "order": 1214,
    "title": "Bataille de Bouvines",
    "level": "5e",
    "period": "Moyen Âge",
    "subject": "Histoire",
    "note": "Philippe Auguste ; bataille de Bouvines ; victoire royale ; Capétiens ; monarchie",
    "image": "assets/timeline/bouvines.jpg",
    "imageAlt": "Bataille de Bouvines"
  },
  {
    "date": "1258",
    "order": 1258,
    "title": "Prise de Bagdad par les Mongols",
    "level": "5e",
    "period": "Moyen Âge",
    "subject": "Histoire",
    "note": "Bagdad ; Mongols ; califat abbasside ; Houlagou Khan ; monde musulman",
    "image": "assets/timeline/aleppo-codex.jpg",
    "imageAlt": "Manuscrit médiéval du Proche-Orient"
  },
  {
    "date": "1337-1453",
    "order": 1337,
    "title": "Guerre de Cent Ans",
    "level": "5e",
    "period": "Moyen Âge",
    "subject": "Histoire",
    "note": "France ; Angleterre ; guerre de Cent Ans ; Jeanne d’Arc ; Charles VII ; royaume national",
    "image": "assets/timeline/riches-heures-juin.jpg",
    "imageAlt": "Miniature médiévale des Très Riches Heures du duc de Berry"
  },
  {
    "date": "1453 ou 1492",
    "order": 1453,
    "title": "Fin du Moyen Âge et début des Temps modernes",
    "level": "6e",
    "period": "Moyen Âge",
    "subject": "Histoire",
    "note": "prise de Constantinople ; Christophe Colomb ; fin du Moyen Âge ; Temps modernes",
    "image": "assets/timeline/siege-constantinople-1453.png",
    "imageAlt": "Carte du siège de Constantinople en 1453"
  },
  {
    "date": "1453",
    "order": 1453,
    "title": "Prise de Constantinople par les Ottomans",
    "level": "5e",
    "period": "Moyen Âge",
    "subject": "Histoire",
    "note": "Constantinople ; Empire ottoman ; Mehmed II ; fin de l’Empire byzantin ; Méditerranée",
    "image": "assets/timeline/siege-constantinople-1453.png",
    "imageAlt": "Carte du siège de Constantinople en 1453"
  },
  {
    "date": "1492",
    "order": 1492,
    "title": "Christophe Colomb arrive en Amérique",
    "level": "CM1",
    "period": "Moderne",
    "subject": "Histoire",
    "note": "Christophe Colomb ; Amérique ; caravelle ; empire colonial ; colonisation",
    "image": "assets/timeline/christopher-columbus.jpg",
    "imageAlt": "Portrait attribué à Christophe Colomb"
  },
  {
    "date": "1492",
    "order": 1492,
    "title": "Arrivée de Christophe Colomb en Amérique",
    "level": "5e",
    "period": "Moderne",
    "subject": "Histoire",
    "note": "Christophe Colomb ; Amérique ; exploration ; conquête ; première mondialisation",
    "image": "assets/timeline/christopher-columbus.jpg",
    "imageAlt": "Portrait attribué à Christophe Colomb"
  },
  {
    "date": "1515-1519",
    "order": 1515,
    "title": "Séjour de Léonard de Vinci en France",
    "level": "CM1",
    "period": "Moderne",
    "subject": "Histoire",
    "note": "François Ier ; Léonard de Vinci ; Renaissance ; artiste ; mécène",
    "image": "assets/timeline/leonardo-da-vinci.png",
    "imageAlt": "Portrait de Léonard de Vinci"
  },
  {
    "date": "1517",
    "order": 1517,
    "title": "Publication des 95 thèses de Luther",
    "level": "5e",
    "period": "Moderne",
    "subject": "Histoire",
    "note": "Luther ; 95 thèses ; Réforme protestante ; indulgences ; rupture religieuse",
    "image": "assets/timeline/martin-luther.jpg",
    "imageAlt": "Portrait de Martin Luther"
  },
  {
    "date": "1519-1522",
    "order": 1519,
    "title": "L’expédition de Magellan fait le tour du monde",
    "level": "CM1",
    "period": "Moderne",
    "subject": "Histoire",
    "note": "Magellan ; Elcano ; tour du monde ; navigation ; carte ; exploration",
    "image": "assets/timeline/ferdinand-magellan.jpg",
    "imageAlt": "Portrait de Ferdinand Magellan"
  },
  {
    "date": "1562-1598",
    "order": 1562,
    "title": "Guerres de religion",
    "level": "5e",
    "period": "Moderne",
    "subject": "Histoire",
    "note": "catholiques ; protestants ; Henri IV ; édit de Nantes ; paix religieuse",
    "image": "assets/timeline/henri-iv.jpg",
    "imageAlt": "Portrait d’Henri IV"
  },
  {
    "date": "1598",
    "order": 1598,
    "title": "Édit de Nantes",
    "level": "CM1",
    "period": "Moderne",
    "subject": "Histoire",
    "note": "Henri IV ; édit de Nantes ; catholiques ; protestants ; guerres de Religion ; paix",
    "image": "assets/timeline/henri-iv.jpg",
    "imageAlt": "Portrait d’Henri IV"
  },
  {
    "date": "1598",
    "order": 1598,
    "title": "Édit de Nantes",
    "level": "5e",
    "period": "Moderne",
    "subject": "Histoire",
    "note": "Henri IV ; édit de Nantes ; protestants ; catholiques ; paix religieuse",
    "image": "assets/timeline/henri-iv.jpg",
    "imageAlt": "Portrait d’Henri IV"
  },
  {
    "date": "1643-1715",
    "order": 1643,
    "title": "Règne de Louis XIV",
    "level": "CM1",
    "period": "Moderne",
    "subject": "Histoire",
    "note": "Louis XIV ; Versailles ; monarchie absolue ; noblesse ; Cour ; société d’ordres",
    "image": "assets/timeline/louis-xiv.jpg",
    "imageAlt": "Portrait de Louis XIV par Hyacinthe Rigaud"
  },
  {
    "date": "1661-1715",
    "order": 1661,
    "title": "Règne de Louis XIV",
    "level": "5e",
    "period": "Moderne",
    "subject": "Histoire",
    "note": "Louis XIV ; Versailles ; monarchie absolue ; noblesse ; pouvoir royal ; roi guerrier",
    "image": "assets/timeline/louis-xiv.jpg",
    "imageAlt": "Portrait de Louis XIV par Hyacinthe Rigaud"
  },
  {
    "date": "1643-1715",
    "order": 1643,
    "title": "Règne de Louis XIV",
    "level": "4e",
    "period": "Moderne",
    "subject": "Histoire",
    "note": "Louis XIV ; Versailles ; monarchie absolue ; noblesse ; Cour ; société d’ordres",
    "image": "assets/timeline/louis-xiv.jpg",
    "imageAlt": "Portrait de Louis XIV par Hyacinthe Rigaud"
  },
  {
    "date": "Années 1670-années 1750",
    "order": 1670,
    "title": "Essor de la traite atlantique",
    "level": "4e",
    "period": "Moderne",
    "subject": "Histoire",
    "note": "traite atlantique ; esclavage ; commerce triangulaire ; ports ; plantations ; négociants",
    "image": "assets/timeline/brookes-slave-ship.jpg",
    "imageAlt": "Plan du navire négrier Brookes"
  },
  {
    "date": "1685",
    "order": 1685,
    "title": "Édit royal de Louis XIV dit « Code noir »",
    "level": "CM1",
    "period": "Moderne",
    "subject": "Histoire",
    "note": "Code noir ; esclavage ; traite ; plantation ; colonies",
    "image": "assets/timeline/brookes-slave-ship.jpg",
    "imageAlt": "Plan du navire négrier Brookes"
  },
  {
    "date": "XVIIIe siècle",
    "order": 1701,
    "title": "Siècle des Lumières",
    "level": "4e",
    "period": "Moderne",
    "subject": "Histoire",
    "note": "Lumières ; Diderot ; Voltaire ; Rousseau ; raison ; critique de l’absolutisme",
    "image": "assets/timeline/diderot-portrait.jpg",
    "imageAlt": "Portrait de Denis Diderot"
  },
  {
    "date": "1751-1772",
    "order": 1751,
    "title": "Publication de L’Encyclopédie",
    "level": "4e",
    "period": "Moderne",
    "subject": "Histoire",
    "note": "Encyclopédie ; Diderot ; d’Alembert ; Lumières ; raison ; diffusion des idées",
    "image": "assets/timeline/diderot-portrait.jpg",
    "imageAlt": "Portrait de Denis Diderot"
  },
  {
    "date": "Dernier tiers du XVIIIe siècle",
    "order": 1771,
    "title": "Débuts de la révolution industrielle en Angleterre",
    "level": "4e",
    "period": "Moderne",
    "subject": "Histoire",
    "note": "Angleterre ; révolution industrielle ; charbon ; machine à vapeur ; textile ; usine",
    "image": "assets/timeline/stephenson-rocket.jpg",
    "imageAlt": "Locomotive Rocket de George Stephenson"
  },
  {
    "date": "Fin du XVIIIe siècle",
    "order": 1771,
    "title": "Apogée de la traite atlantique",
    "level": "4e",
    "period": "Moderne",
    "subject": "Histoire",
    "note": "apogée de la traite ; déportation d’Africains ; plantations ; esclavage ; commerce atlantique ; commerce triangulaire",
    "image": "assets/timeline/brookes-slave-ship.jpg",
    "imageAlt": "Plan du navire négrier Brookes"
  },
  {
    "date": "1789 ou 1815",
    "order": 1789,
    "title": "Fin des Temps modernes et début de l’époque contemporaine",
    "level": "6e",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "Révolution française ; Napoléon ; fin des Temps modernes ; époque contemporaine",
    "image": "assets/timeline/bastille-1789.jpg",
    "imageAlt": "Prise de la Bastille en 1789"
  },
  {
    "date": "1789",
    "order": 1789,
    "title": "Début de la Révolution française",
    "level": "4e",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "Révolution française ; souveraineté nationale ; droits de l’Homme ; fin de l’absolutisme ; citoyens",
    "image": "assets/timeline/bastille-1789.jpg",
    "imageAlt": "Prise de la Bastille en 1789"
  },
  {
    "date": "14 juillet 1789",
    "order": 1789.0714,
    "title": "Prise de la Bastille",
    "level": "4e",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "Bastille ; peuple de Paris ; Révolution française ; monarchie absolue ; liberté",
    "image": "assets/timeline/bastille-1789.jpg",
    "imageAlt": "Prise de la Bastille en 1789"
  },
  {
    "date": "20 juin 1789",
    "order": 1789.062,
    "title": "Serment du Jeu de paume",
    "level": "4e",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "Serment du Jeu de paume ; Assemblée nationale ; députés ; souveraineté nationale ; Révolution française",
    "image": "assets/timeline/serment-jeu-paume.jpg",
    "imageAlt": "Le Serment du Jeu de paume"
  },
  {
    "date": "1789-1804",
    "order": 1789,
    "title": "Révolution française",
    "level": "CM1",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "Révolution française ; droits de l’Homme ; République ; citoyenneté ; Napoléon Bonaparte",
    "image": "assets/timeline/bastille-1789.jpg",
    "imageAlt": "Prise de la Bastille en 1789"
  },
  {
    "date": "Printemps 1789",
    "order": 1789.03,
    "title": "Rédaction des cahiers de doléances et réunion des États généraux",
    "level": "CM1",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "cahiers de doléances ; États généraux ; Ancien Régime ; société d’ordres ; Lumières",
    "image": "assets/timeline/serment-jeu-paume.jpg",
    "imageAlt": "Le Serment du Jeu de paume"
  },
  {
    "date": "14 juillet 1789",
    "order": 1789.0714,
    "title": "Prise de la Bastille",
    "level": "CM1",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "Bastille ; peuple de Paris ; Révolution ; monarchie absolue ; liberté",
    "image": "assets/timeline/bastille-1789.jpg",
    "imageAlt": "Prise de la Bastille en 1789"
  },
  {
    "date": "4 août 1789",
    "order": 1789.0804,
    "title": "Abolition des privilèges",
    "level": "CM1",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "abolition des privilèges ; égalité ; fin de la société d’ordres ; Assemblée nationale",
    "image": "assets/timeline/abolition-privileges-1789.jpg",
    "imageAlt": "Abolition des privilèges dans la nuit du 4 août 1789"
  },
  {
    "date": "26 août 1789",
    "order": 1789.0826,
    "title": "Déclaration des droits de l’Homme et du Citoyen",
    "level": "CM1",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "droits de l’Homme ; liberté ; égalité ; souveraineté nationale ; citoyenneté",
    "image": "assets/timeline/first-republic-seal.svg",
    "imageAlt": "Sceau de la Première République française"
  },
  {
    "date": "5-6 octobre 1789",
    "order": 1789.1005,
    "title": "Marche des femmes à Versailles",
    "level": "CM1",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "femmes de Paris ; marche sur Versailles ; roi ; pain ; Révolution",
    "image": "assets/timeline/womens-march-versailles-1789.jpg",
    "imageAlt": "Marche des femmes sur Versailles le 5 octobre 1789"
  },
  {
    "date": "Mars 1792",
    "order": 1792.0301,
    "title": "Pétition de 319 femmes, dont Pauline Léon, pour s’organiser en garde nationale",
    "level": "CM2",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "Pauline Léon ; femmes citoyennes ; garde nationale ; Révolution ; engagement politique",
    "image": "assets/timeline/revolution-women-tricoteuses.jpg",
    "imageAlt": "Femmes pendant la Révolution française"
  },
  {
    "date": "Avril 1792",
    "order": 1792.0401,
    "title": "Composition de La Marseillaise",
    "level": "CM2",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "Rouget de Lisle ; Marseillaise ; chant révolutionnaire ; armée ; République",
    "image": "assets/timeline/rouget-de-lisle.jpg",
    "imageAlt": "Portrait de Rouget de Lisle"
  },
  {
    "date": "Septembre 1792",
    "order": 1792.0901,
    "title": "Naissance de la République",
    "level": "CM2",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "République ; fin de la monarchie ; Convention ; citoyens",
    "image": "assets/timeline/first-republic-seal.svg",
    "imageAlt": "Sceau de la Première République française"
  },
  {
    "date": "1792",
    "order": 1792,
    "title": "Proclamation de la Première République",
    "level": "4e",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "Première République ; Convention nationale ; fin de la monarchie ; citoyens ; souveraineté nationale",
    "image": "assets/timeline/first-republic-seal.svg",
    "imageAlt": "Sceau de la Première République française"
  },
  {
    "date": "1794",
    "order": 1794,
    "title": "Première abolition de l’esclavage",
    "level": "CM2",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "abolition de l’esclavage ; République ; colonies ; liberté ; égalité",
    "image": "assets/timeline/abolition-esclavage-1794.png",
    "imageAlt": "Décret d’abolition de l’esclavage de 1794"
  },
  {
    "date": "1799-1814/1815",
    "order": 1799,
    "title": "Napoléon Bonaparte au pouvoir",
    "level": "4e",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "Napoléon Bonaparte ; Consulat ; Empire ; Code civil ; administration ; guerres européennes",
    "image": "assets/timeline/napoleon-emperor.jpg",
    "imageAlt": "Portrait de Napoléon Ier empereur"
  },
  {
    "date": "1815",
    "order": 1815,
    "title": "Congrès de Vienne",
    "level": "4e",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "Congrès de Vienne ; restauration ; équilibre européen ; monarchies ; frontières",
    "image": "assets/timeline/congress-vienna.jpg",
    "imageAlt": "Le Congrès de Vienne"
  },
  {
    "date": "1802",
    "order": 1802,
    "title": "Rétablissement de l’esclavage",
    "level": "CM2",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "Napoléon Bonaparte ; rétablissement de l’esclavage ; colonies ; plantation",
    "image": "assets/timeline/brookes-slave-ship.jpg",
    "imageAlt": "Plan du navire négrier Brookes"
  },
  {
    "date": "2 décembre 1804",
    "order": 1804.1202,
    "title": "Sacre de Napoléon Bonaparte, qui devient Napoléon Ier",
    "level": "CM2",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "Napoléon Ier ; empereur ; Empire ; sacre ; pouvoir",
    "image": "assets/timeline/napoleon-emperor.jpg",
    "imageAlt": "Portrait de Napoléon Ier empereur"
  },
  {
    "date": "1804",
    "order": 1804,
    "title": "Sacre de Napoléon Ier",
    "level": "4e",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "Napoléon Ier ; empereur ; Empire ; sacre ; pouvoir personnel",
    "image": "assets/timeline/napoleon-emperor.jpg",
    "imageAlt": "Portrait de Napoléon Ier empereur"
  },
  {
    "date": "Début du XIXe siècle",
    "order": 1806,
    "title": "Invention de la locomotive par George Stephenson",
    "level": "CM2",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "Stephenson ; locomotive ; vapeur ; charbon ; chemin de fer ; industrialisation",
    "image": "assets/timeline/stephenson-rocket.jpg",
    "imageAlt": "Locomotive à vapeur de Stephenson"
  },
  {
    "date": "1848",
    "order": 1848,
    "title": "Suffrage universel masculin",
    "level": "CM2",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "Deuxième République ; suffrage universel masculin ; démocratie ; citoyens ; vote",
    "image": "assets/timeline/suffrage-universel-1848.jpg",
    "imageAlt": "Allégorie du suffrage universel en 1848"
  },
  {
    "date": "1848",
    "order": 1848,
    "title": "Abolition définitive de l’esclavage",
    "level": "CM2",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "abolition définitive de l’esclavage ; Victor Schœlcher ; République ; liberté ; colonies",
    "image": "assets/timeline/victor-schoelcher.jpg",
    "imageAlt": "Portrait de Victor Schœlcher"
  },
  {
    "date": "1848",
    "order": 1848,
    "title": "Printemps des peuples et seconde abolition de l’esclavage en France",
    "level": "4e",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "Printemps des peuples ; révolutions ; nations ; Deuxième République ; abolition de l’esclavage",
    "image": "assets/timeline/victor-schoelcher.jpg",
    "imageAlt": "Portrait de Victor Schœlcher"
  },
  {
    "date": "1848",
    "order": 1848,
    "title": "Adoption du suffrage universel masculin",
    "level": "4e",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "suffrage universel masculin ; vote ; citoyens ; Deuxième République ; démocratie",
    "image": "assets/timeline/suffrage-universel-1848.jpg",
    "imageAlt": "Allégorie du suffrage universel en 1848"
  },
  {
    "date": "1830",
    "order": 1830,
    "title": "Début de la colonisation française de l’Algérie",
    "level": "4e",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "Charles X ; Algérie ; colonisation ; conquête ; empire colonial français ; Méditerranée",
    "image": "assets/timeline/algeria-flag.svg",
    "imageAlt": "Drapeau de l’Algérie"
  },
  {
    "date": "1848",
    "order": 1848.01,
    "title": "Abolition de l’esclavage",
    "level": "4e",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "abolition de l’esclavage ; Victor Schœlcher ; Deuxième République ; liberté ; colonies",
    "image": "assets/timeline/victor-schoelcher.jpg",
    "imageAlt": "Portrait de Victor Schœlcher"
  },
  {
    "date": "Seconde moitié du XIXe siècle",
    "order": 1851,
    "title": "Reconnaissance du droit de grève et de la liberté syndicale",
    "level": "CM2",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "ouvriers ; grève ; syndicat ; usine ; luttes sociales ; industrialisation",
    "image": "assets/timeline/eiffel-construction.jpg",
    "imageAlt": "Chantier de construction de la tour Eiffel"
  },
  {
    "date": "1870",
    "order": 1870,
    "title": "Proclamation de la Troisième République",
    "level": "4e",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "Troisième République ; défaite de Sedan ; chute du Second Empire ; République",
    "image": "assets/timeline/troisieme-republique-1870.jpg",
    "imageAlt": "Naissance de la Troisième République en 1870"
  },
  {
    "date": "Années 1870",
    "order": 1870,
    "title": "Début de la seconde révolution industrielle",
    "level": "4e",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "seconde révolution industrielle ; électricité ; pétrole ; acier ; chimie ; innovations",
    "image": "assets/timeline/eiffel-construction.jpg",
    "imageAlt": "Construction de la tour Eiffel"
  },
  {
    "date": "1870-1914",
    "order": 1870,
    "title": "Seconde mondialisation et relance de la colonisation",
    "level": "4e",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "seconde mondialisation ; colonisation ; empires coloniaux ; migrations ; capitaux ; domination européenne",
    "image": "assets/timeline/almanach-petit-colon-1893.jpg",
    "imageAlt": "Almanach du petit colon, illustration d’Alphonse Birck, 1893"
  },
  {
    "date": "1871",
    "order": 1871,
    "title": "Commune de Paris",
    "level": "4e",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "Commune de Paris ; insurrection ; République ; mouvement ouvrier ; Semaine sanglante ; Versailles",
    "image": "assets/timeline/commune-paris-1871.jpg",
    "imageAlt": "Barricade de la Commune de Paris, place de la Concorde, en 1871"
  },
  {
    "date": "1871",
    "order": 1871.01,
    "title": "Proclamation de l’Empire allemand",
    "level": "4e",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "Empire allemand ; unification allemande ; Guillaume Ier ; Bismarck ; Versailles ; puissance européenne",
    "image": "assets/timeline/german-empire-1871.jpg",
    "imageAlt": "Proclamation de l’Empire allemand à Versailles en 1871"
  },
  {
    "date": "Fin du XIXe siècle",
    "order": 1871,
    "title": "Invention du vaccin contre la rage par Louis Pasteur",
    "level": "CM2",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "Pasteur ; vaccin ; rage ; médecine ; progrès scientifique",
    "image": "assets/timeline/louis-pasteur.jpg",
    "imageAlt": "Portrait de Louis Pasteur"
  },
  {
    "date": "1882-1886",
    "order": 1882,
    "title": "Lois Ferry sur l’École",
    "level": "CM2",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "Jules Ferry ; école gratuite ; école laïque ; école obligatoire ; République",
    "image": "assets/timeline/jules-ferry.jpg",
    "imageAlt": "Portrait de Jules Ferry"
  },
  {
    "date": "1882",
    "order": 1882,
    "title": "École gratuite, laïque et obligatoire",
    "level": "4e",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "Jules Ferry ; école gratuite ; laïque ; obligatoire ; République",
    "image": "assets/timeline/jules-ferry.jpg",
    "imageAlt": "Portrait de Jules Ferry"
  },
  {
    "date": "1894-1906",
    "order": 1894,
    "title": "Affaire Dreyfus",
    "level": "4e",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "Dreyfus ; antisémitisme ; justice ; presse ; dreyfusards ; République",
    "image": "assets/timeline/dreyfus-degradation.jpg",
    "imageAlt": "Dégradation du capitaine Alfred Dreyfus"
  },
  {
    "date": "1900",
    "order": 1900,
    "title": "Exposition universelle de Paris",
    "level": "4e",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "Exposition universelle ; Paris ; progrès ; industrie ; métropolitain ; puissance française",
    "image": "assets/timeline/paris-expo-1900.jpg",
    "imageAlt": "Vue de l’Exposition universelle de Paris en 1900"
  },
  {
    "date": "1905",
    "order": 1905,
    "title": "Loi de séparation des Églises et de l’État",
    "level": "4e",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "laïcité ; séparation des Églises et de l’État ; liberté de conscience ; République",
    "image": "assets/timeline/loi-separation-1905.png",
    "imageAlt": "Première page de la loi de séparation des Églises et de l’État de 1905"
  },
  {
    "date": "1914-1918",
    "order": 1914,
    "title": "Première Guerre mondiale",
    "level": "4e",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "Grande Guerre ; guerre totale ; tranchées ; violences de masse ; civils et militaires ; génocide arménien",
    "image": "assets/timeline/wwi-tank-1916.jpg",
    "imageAlt": "Char britannique pendant la bataille de la Somme en 1916"
  },
  {
    "date": "9 décembre 1905",
    "order": 1905.1209,
    "title": "Séparation des Églises et de l’État",
    "level": "CM2",
    "period": "XIXe siècle",
    "subject": "Histoire",
    "note": "laïcité ; séparation des Églises et de l’État ; liberté de conscience ; République",
    "image": "assets/timeline/loi-separation-1905.png",
    "imageAlt": "Première page de la loi de séparation des Églises et de l’État de 1905"
  },
  {
    "date": "1914-1918",
    "order": 1914,
    "title": "Première Guerre mondiale",
    "level": "CM2",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "Première Guerre mondiale ; poilus ; front ; tranchées ; mobilisation ; guerre totale",
    "image": "assets/timeline/wwi-tank-1916.jpg",
    "imageAlt": "Char britannique pendant la bataille de la Somme en 1916"
  },
  {
    "date": "1914-1918 — date au choix",
    "order": 1914,
    "title": "Une grande bataille de la Première Guerre mondiale en France",
    "level": "CM2",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "Marne (1914) ; Gallipoli (1915) ; Verdun (1916) ; Somme (1916) ; Chemin des Dames (1917)",
    "image": "assets/timeline/wwi-tank-1916.jpg",
    "imageAlt": "Char britannique pendant la bataille de la Somme en 1916"
  },
  {
    "date": "1914-1918",
    "order": 1914,
    "title": "Première Guerre mondiale",
    "level": "3e",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "Grande Guerre ; guerre totale ; tranchées ; violences de masse ; civils et militaires ; génocide arménien",
    "image": "assets/timeline/wwi-tank-1916.jpg",
    "imageAlt": "Char britannique pendant la bataille de la Somme en 1916"
  },
  {
    "date": "1917",
    "order": 1917,
    "title": "Révolution russe",
    "level": "3e",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "révolutions russes ; Lénine ; bolcheviks ; communisme ; sortie de guerre",
    "image": "assets/timeline/lenin-portrait.png",
    "imageAlt": "Portrait de Vladimir Lénine"
  },
  {
    "date": "11 novembre 1918",
    "order": 1918.1111,
    "title": "Armistice",
    "level": "CM2",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "armistice ; fin des combats ; victoire ; commémoration ; Rethondes",
    "image": "assets/timeline/armistice-1918-document.jpg",
    "imageAlt": "Dernière page de la convention d’armistice du 11 novembre 1918"
  },
  {
    "date": "1919",
    "order": 1919,
    "title": "Traité de Versailles",
    "level": "3e",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "Traité de Versailles ; paix ; Allemagne ; réparations ; Société des Nations ; Europe",
    "image": "assets/timeline/treaty-versailles-1919.jpg",
    "imageAlt": "Signature du Traité de Versailles en 1919"
  },
  {
    "date": "1924",
    "order": 1924,
    "title": "Staline dirige l’URSS à la mort de Lénine",
    "level": "3e",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "Staline ; URSS ; communisme ; parti unique ; totalitarisme ; Grande Terreur",
    "image": "assets/timeline/stalin-cropped-1943.jpg",
    "imageAlt": "Portrait de Joseph Staline"
  },
  {
    "date": "1933",
    "order": 1933,
    "title": "Hitler nommé chancelier",
    "level": "3e",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "Hitler ; nazisme ; totalitarisme ; antisémitisme ; génocide",
    "image": "assets/timeline/hitler-1933-portrait.jpeg",
    "imageAlt": "Portrait d'Adolf Hitler en 1933"
  },
  {
    "date": "1936",
    "order": 1936,
    "title": "Front populaire en France",
    "level": "3e",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "Front populaire ; Léon Blum ; grèves ; accords Matignon ; congés payés",
    "image": "assets/timeline/leon-blum-1936.jpg",
    "imageAlt": "Portrait de Léon Blum"
  },
  {
    "date": "1939-1945",
    "order": 1939,
    "title": "Seconde Guerre mondiale",
    "level": "CM2",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "Seconde Guerre mondiale ; défaite ; Occupation ; collaboration ; Résistance ; Libération",
    "image": "assets/timeline/wwii-normandy-landing.jpg",
    "imageAlt": "Débarquement allié en Normandie en 1944"
  },
  {
    "date": "1939-1945",
    "order": 1939,
    "title": "Seconde Guerre mondiale",
    "level": "3e",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "Seconde Guerre mondiale ; guerre d’anéantissement ; Shoah ; génocide des Tziganes ; Résistance ; collaboration",
    "image": "assets/timeline/wwii-normandy-landing.jpg",
    "imageAlt": "Débarquement allié en Normandie en 1944"
  },
  {
    "date": "18 juin 1940",
    "order": 1940.0618,
    "title": "Appel du général de Gaulle",
    "level": "CM2",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "de Gaulle ; appel du 18 Juin ; Londres ; France libre ; Résistance",
    "image": "assets/timeline/de-gaulle-1940.png",
    "imageAlt": "Portrait du général de Gaulle"
  },
  {
    "date": "1942",
    "order": 1942,
    "title": "Rafle du Vélodrome d’Hiver",
    "level": "CM2",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "rafle du Vel d’Hiv ; Juifs ; antisémitisme ; régime de Vichy ; déportation",
    "image": "assets/timeline/vel-dhiv-letter-1942.jpg",
    "imageAlt": "Lettre sur l’organisation de la rafle du Vel d’Hiv en juillet 1942"
  },
  {
    "date": "1944",
    "order": 1944,
    "title": "Droit de vote accordé aux femmes",
    "level": "CM2",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "droit de vote des femmes ; citoyenneté ; égalité ; démocratie",
    "image": "assets/timeline/louise-weiss-1935.jpg",
    "imageAlt": "Louise Weiss et des suffragettes parisiennes en 1935"
  },
  {
    "date": "1944",
    "order": 1944.01,
    "title": "Droit de vote accordé aux femmes en France",
    "level": "3e",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "femmes ; droit de vote ; citoyenneté ; démocratie ; égalité",
    "image": "assets/timeline/louise-weiss-1935.jpg",
    "imageAlt": "Louise Weiss et des suffragettes parisiennes en 1935"
  },
  {
    "date": "1944-1945",
    "order": 1944,
    "title": "Libération, Gouvernement provisoire de la République française et droit de vote des femmes",
    "level": "3e",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "Libération ; GPRF ; de Gaulle ; programme du CNR ; Sécurité sociale ; droit de vote des femmes",
    "image": "assets/timeline/de-gaulle-1940.png",
    "imageAlt": "Portrait du général de Gaulle"
  },
  {
    "date": "6 juin 1944",
    "order": 1944.0606,
    "title": "Débarquement des Alliés en Normandie",
    "level": "CM2",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "débarquement ; Alliés ; Normandie ; Libération",
    "image": "assets/timeline/wwii-normandy-landing.jpg",
    "imageAlt": "Débarquement allié en Normandie en 1944"
  },
  {
    "date": "1945",
    "order": 1945,
    "title": "Création de l’Organisation des Nations unies",
    "level": "3e",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "ONU ; paix ; sécurité collective ; Conseil de sécurité ; coopération internationale",
    "image": "assets/timeline/un-emblem-blue.svg",
    "imageAlt": "Emblème de l’Organisation des Nations unies"
  },
  {
    "date": "8 mai 1945",
    "order": 1945.0508,
    "title": "Capitulation de l’Allemagne nazie",
    "level": "CM2",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "capitulation allemande ; victoire alliée ; fin de la guerre en Europe",
    "image": "assets/timeline/wwii-normandy-landing.jpg",
    "imageAlt": "Débarquement allié en Normandie en 1944"
  },
  {
    "date": "1947-1991",
    "order": 1947,
    "title": "Guerre froide",
    "level": "3e",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "guerre froide ; États-Unis ; URSS ; monde bipolaire ; crises ; dissuasion nucléaire",
    "image": "assets/timeline/cold-war-map-1980.svg",
    "imageAlt": "Carte du monde pendant la guerre froide"
  },
  {
    "date": "1947",
    "order": 1947.01,
    "title": "Indépendance de l’Inde et du Pakistan",
    "level": "3e",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "décolonisation ; Inde ; Pakistan ; Empire britannique ; partition",
    "image": "assets/timeline/india-pakistan-independence.jpg",
    "imageAlt": "Lord et Lady Mountbatten rencontrent Muhammad Ali Jinnah en 1947"
  },
  {
    "date": "1948",
    "order": 1948,
    "title": "Blocus de Berlin, création de l’État d’Israël, Déclaration universelle des droits de l’homme",
    "level": "3e",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "Berlin ; Israël ; ONU ; droits humains ; guerre froide",
    "image": "assets/timeline/udhr-1948.jpg",
    "imageAlt": "Déclaration universelle des droits de l’homme de 1948"
  },
  {
    "date": "1949",
    "order": 1949,
    "title": "Création de l’OTAN et division de l’Allemagne",
    "level": "3e",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "OTAN ; RFA ; RDA ; Allemagne ; guerre froide ; blocs",
    "image": "assets/timeline/nato-flag.svg",
    "imageAlt": "Drapeau de l’OTAN"
  },
  {
    "date": "1954-1962",
    "order": 1954,
    "title": "Guerre d’Algérie",
    "level": "3e",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "Algérie ; guerre d’indépendance ; décolonisation ; accords d’Évian",
    "image": "assets/timeline/algeria-flag.svg",
    "imageAlt": "Drapeau de l’Algérie"
  },
  {
    "date": "1957",
    "order": 1957,
    "title": "Traité de Rome créant la Communauté économique européenne",
    "level": "CM2",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "traité de Rome ; CEE ; six pays fondateurs ; construction européenne",
    "image": "assets/timeline/eec.svg",
    "imageAlt": "Carte de la Communauté économique européenne"
  },
  {
    "date": "1957",
    "order": 1957,
    "title": "Traité de Rome",
    "level": "3e",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "traité de Rome ; CEE ; construction européenne ; paix ; marché commun",
    "image": "assets/timeline/eec.svg",
    "imageAlt": "Carte de la Communauté économique européenne"
  },
  {
    "date": "1958",
    "order": 1958,
    "title": "Fondation de la Ve République avec le général de Gaulle",
    "level": "CM2",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "Ve République ; de Gaulle ; Constitution ; président de la République",
    "image": "assets/timeline/de-gaulle-1940.png",
    "imageAlt": "Portrait du général de Gaulle"
  },
  {
    "date": "1958",
    "order": 1958,
    "title": "Instauration de la Ve République en France",
    "level": "3e",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "Ve République ; de Gaulle ; Constitution ; pouvoir exécutif ; président",
    "image": "assets/timeline/de-gaulle-president-1958.jpg",
    "imageAlt": "Portrait de Charles de Gaulle en 1958"
  },
  {
    "date": "1962",
    "order": 1962,
    "title": "Crise des missiles de Cuba",
    "level": "3e",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "Cuba ; Kennedy ; Khrouchtchev ; États-Unis ; URSS ; guerre froide ; crise nucléaire",
    "image": "assets/timeline/cuban-missile-crisis-map.jpg",
    "imageAlt": "Carte de la portée des missiles pendant la crise de Cuba"
  },
  {
    "date": "1962",
    "order": 1962,
    "title": "Adoption de l’élection du président de la République au suffrage universel direct",
    "level": "3e",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "suffrage universel direct ; président de la République ; référendum ; pouvoir présidentiel",
    "image": "assets/timeline/de-gaulle-1940.png",
    "imageAlt": "Portrait du général de Gaulle"
  },
  {
    "date": "1964-1975",
    "order": 1964,
    "title": "Guerre du Vietnam",
    "level": "3e",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "Vietnam ; États-Unis ; guerre froide ; communisme ; décolonisation",
    "image": "assets/timeline/vietnam-helicopters-1966.jpg",
    "imageAlt": "Hélicoptères américains pendant la guerre du Vietnam"
  },
  {
    "date": "1965",
    "order": 1965,
    "title": "Les Françaises peuvent travailler sans l’autorisation de leur époux et ouvrir un compte bancaire",
    "level": "CM2",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "droits des femmes ; travail ; compte bancaire ; autonomie ; égalité",
    "image": "assets/timeline/louise-weiss-1935.jpg",
    "imageAlt": "Louise Weiss et des suffragettes parisiennes en 1935"
  },
  {
    "date": "1975",
    "order": 1975,
    "title": "Loi Veil relative à l’interruption volontaire de grossesse",
    "level": "3e",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "Simone Veil ; loi Veil ; IVG ; droits des femmes ; débat démocratique",
    "image": "assets/timeline/simone-veil-1984.jpg",
    "imageAlt": "Portrait de Simone Veil"
  },
  {
    "date": "1981",
    "order": 1981,
    "title": "Abolition de la peine de mort",
    "level": "3e",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "Robert Badinter ; justice ; droits humains ; République",
    "image": "assets/timeline/robert-badinter-2007.jpg",
    "imageAlt": "Portrait de Robert Badinter en 2007"
  },
  {
    "date": "1981",
    "order": 1981.01,
    "title": "Première alternance politique sous la Ve République",
    "level": "3e",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "François Mitterrand ; alternance ; gauche ; élection présidentielle ; Ve République",
    "image": "assets/timeline/mitterrand-1981.jpg",
    "imageAlt": "Portrait de François Mitterrand"
  },
  {
    "date": "1989",
    "order": 1989,
    "title": "Chute du mur de Berlin",
    "level": "3e",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "mur de Berlin ; Allemagne ; bloc de l’Est ; fin de la guerre froide ; chute du communisme",
    "image": "assets/timeline/berlin-wall-1989.jpg",
    "imageAlt": "Allemands de l’Est et de l’Ouest à la porte de Brandebourg en 1989"
  },
  {
    "date": "1991",
    "order": 1991,
    "title": "Démembrement de l’URSS",
    "level": "3e",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "URSS ; Gorbatchev ; indépendances ; Russie",
    "image": "assets/timeline/gorbachev-1987.jpg",
    "imageAlt": "Portrait de Mikhaïl Gorbatchev"
  },
  {
    "date": "1992",
    "order": 1992,
    "title": "Traité de Maastricht",
    "level": "3e",
    "period": "XXe siècle",
    "subject": "Histoire",
    "note": "Union Européenne ; citoyenneté européenne",
    "image": "assets/timeline/eu-flag.svg",
    "imageAlt": "Drapeau de l’Union européenne"
  },
  {
    "date": "2000",
    "order": 2000,
    "title": "Loi sur la parité en politique",
    "level": "3e",
    "period": "Monde contemporain",
    "subject": "Histoire",
    "note": "parité ; femmes ; hommes ; vie politique ; égalité",
    "image": "assets/timeline/assemblee-hemicycle-2022.jpg",
    "imageAlt": "Hémicycle de l’Assemblée nationale"
  },
  {
    "date": "2000",
    "order": 2000,
    "title": "L’euro remplace le franc",
    "level": "CM2",
    "period": "Monde contemporain",
    "subject": "Histoire",
    "note": "euro ; monnaie unique ; Union européenne ; construction européenne",
    "image": "assets/timeline/euro-banknotes-coins.jpg",
    "imageAlt": "Billets et pièces en euros"
  },
  {
    "date": "2001",
    "order": 2001,
    "title": "Attentats du 11 septembre aux États-Unis",
    "level": "3e",
    "period": "Monde contemporain",
    "subject": "Histoire",
    "note": "États-Unis ; terrorisme ; Al-Qaïda ; New York ; mondialisation",
    "image": "assets/timeline/wtc-9-11.jpeg",
    "imageAlt": "Tours du World Trade Center le 11 septembre 2001"
  },
  {
    "date": "2002",
    "order": 2002,
    "title": "Mise en circulation de l’euro",
    "level": "3e",
    "period": "Monde contemporain",
    "subject": "Histoire",
    "note": "euro ; monnaie unique ; Union européenne ; intégration européenne",
    "image": "assets/timeline/euro-banknotes-coins.jpg",
    "imageAlt": "Billets et pièces en euros"
  },
  {
    "date": "2013",
    "order": 2013,
    "title": "Mariage pour tous",
    "level": "3e",
    "period": "Monde contemporain",
    "subject": "Histoire",
    "note": "mariage ; égalité des droits ; société ; République",
    "image": "assets/timeline/mariage-pour-tous-2013.jpg",
    "imageAlt": "Manifestation en faveur du mariage pour tous à Paris en 2013"
  }
];

const timelineTitleTranslations = {
  "Domestication du feu": "Domestication of fire",
  "Plus anciennes traces connues d’Homo sapiens, dans le Maroc actuel": "Earliest known traces of Homo sapiens, in present-day Morocco",
  "Début du Néolithique au Proche-Orient": "Beginning of the Neolithic in the Near East",
  "Invention de la roue": "Invention of the wheel",
  "Début de l’Antiquité avec la naissance de l’écriture": "Beginning of Antiquity with the birth of writing",
  "Invention de l’écriture cunéiforme, premières cités-États en Mésopotamie et premier royaume unifié d’Égypte": "Invention of cuneiform writing, first city-states in Mesopotamia and first unified kingdom of Egypt",
  "Début de la rédaction de la Bible hébraïque": "Beginning of the writing of the Hebrew Bible",
  "Mise à l’écrit de L’Iliade et de L’Odyssée": "The Iliad and the Odyssey are written down",
  "Tombes princières de Vix et de Lavau": "Princely tombs of Vix and Lavau",
  "Fondation de Massalia par des colons grecs": "Foundation of Massalia by Greek settlers",
  "Second âge du fer, dit « culture de La Tène »": "Second Iron Age, known as La Tene culture",
  "Puissance d’Athènes sous Périclès": "Power of Athens under Pericles",
  "Règne d’Alexandre le Grand": "Reign of Alexander the Great",
  "Fin de la guerre des Gaules ; Jules César vainqueur de Vercingétorix": "End of the Gallic Wars; Julius Caesar defeats Vercingetorix",
  "Débuts du christianisme": "Beginnings of Christianity",
  "Paix romaine": "Roman Peace",
  "Fin de l’Antiquité": "End of Antiquity",
  "Partage de l’Empire romain": "Division of the Roman Empire",
  "Chute de l’Empire romain d’Occident": "Fall of the Western Roman Empire",
  "Moyen Âge": "Middle Ages",
  "Règne de Justinien": "Reign of Justinian",
  "Hégire et début de l’ère musulmane": "Hijra and beginning of the Muslim era",
  "Couronnement impérial de Charlemagne": "Imperial coronation of Charlemagne",
  "Partage de Verdun": "Treaty of Verdun",
  "Avènement de Hugues Capet et début de la dynastie des Capétiens": "Accession of Hugh Capet and beginning of the Capetian dynasty",
  "Doublement de la population européenne": "Doubling of the European population",
  "Abbaye de Cluny et Notre-Dame de Paris": "Cluny Abbey and Notre-Dame de Paris",
  "Excommunication mutuelle du pape et du patriarche de Constantinople": "Mutual excommunication of the Pope and the Patriarch of Constantinople",
  "Première croisade": "First Crusade",
  "Construction des cathédrales en Europe": "Construction of cathedrals in Europe",
  "Sac de Constantinople par les croisés": "Sack of Constantinople by the Crusaders",
  "Bataille de Bouvines": "Battle of Bouvines",
  "Prise de Bagdad par les Mongols": "Capture of Baghdad by the Mongols",
  "Guerre de Cent Ans": "Hundred Years' War",
  "Fin du Moyen Âge et début des Temps modernes": "End of the Middle Ages and beginning of the Early Modern period",
  "Prise de Constantinople par les Ottomans": "Capture of Constantinople by the Ottomans",
  "Christophe Colomb arrive en Amérique": "Christopher Columbus reaches America",
  "Arrivée de Christophe Colomb en Amérique": "Christopher Columbus's arrival in America",
  "Séjour de Léonard de Vinci en France": "Leonardo da Vinci's stay in France",
  "Publication des 95 thèses de Luther": "Publication of Luther's 95 Theses",
  "L’expédition de Magellan fait le tour du monde": "Magellan's expedition circumnavigates the globe",
  "Guerres de religion": "Wars of Religion",
  "Édit de Nantes": "Edict of Nantes",
  "Règne de Louis XIV": "Reign of Louis XIV",
  "Essor de la traite atlantique": "Rise of the Atlantic slave trade",
  "Édit royal de Louis XIV dit « Code noir »": "Royal edict of Louis XIV known as the Black Code",
  "Siècle des Lumières": "Age of Enlightenment",
  "Publication de L’Encyclopédie": "Publication of the Encyclopedie",
  "Débuts de la révolution industrielle en Angleterre": "Beginnings of the Industrial Revolution in England",
  "Apogée de la traite atlantique": "Peak of the Atlantic slave trade",
  "Fin des Temps modernes et début de l’époque contemporaine": "End of the Early Modern period and beginning of the Contemporary era",
  "Début de la Révolution française": "Beginning of the French Revolution",
  "Prise de la Bastille": "Storming of the Bastille",
  "Serment du Jeu de paume": "Tennis Court Oath",
  "Révolution française": "French Revolution",
  "Rédaction des cahiers de doléances et réunion des États généraux": "Writing of the cahiers de doleances and meeting of the Estates-General",
  "Abolition des privilèges": "Abolition of privileges",
  "Déclaration des droits de l’Homme et du Citoyen": "Declaration of the Rights of Man and of the Citizen",
  "Marche des femmes à Versailles": "Women's march on Versailles",
  "Pétition de 319 femmes, dont Pauline Léon, pour s’organiser en garde nationale": "Petition by 319 women, including Pauline Leon, to organize as a national guard",
  "Composition de La Marseillaise": "Composition of La Marseillaise",
  "Naissance de la République": "Birth of the Republic",
  "Proclamation de la Première République": "Proclamation of the First Republic",
  "Première abolition de l’esclavage": "First abolition of slavery",
  "Napoléon Bonaparte au pouvoir": "Napoleon Bonaparte in power",
  "Congrès de Vienne": "Congress of Vienna",
  "Rétablissement de l’esclavage": "Re-establishment of slavery",
  "Sacre de Napoléon Bonaparte, qui devient Napoléon Ier": "Coronation of Napoleon Bonaparte, who becomes Napoleon I",
  "Sacre de Napoléon Ier": "Coronation of Napoleon I",
  "Invention de la locomotive par George Stephenson": "Invention of the locomotive by George Stephenson",
  "Suffrage universel masculin": "Universal male suffrage",
  "Abolition définitive de l’esclavage": "Definitive abolition of slavery",
  "Printemps des peuples et seconde abolition de l’esclavage en France": "Springtime of the Peoples and second abolition of slavery in France",
  "Adoption du suffrage universel masculin": "Adoption of universal male suffrage",
  "Début de la colonisation française de l’Algérie": "Beginning of French colonization of Algeria",
  "Abolition de l’esclavage": "Abolition of slavery",
  "Reconnaissance du droit de grève et de la liberté syndicale": "Recognition of the right to strike and trade-union freedom",
  "Proclamation de la Troisième République": "Proclamation of the Third Republic",
  "Début de la seconde révolution industrielle": "Beginning of the Second Industrial Revolution",
  "Seconde mondialisation et relance de la colonisation": "Second globalization and renewed colonization",
  "Commune de Paris": "Paris Commune",
  "Proclamation de l’Empire allemand": "Proclamation of the German Empire",
  "Invention du vaccin contre la rage par Louis Pasteur": "Invention of the rabies vaccine by Louis Pasteur",
  "Lois Ferry sur l’École": "Ferry laws on schooling",
  "École gratuite, laïque et obligatoire": "Free, secular and compulsory schooling",
  "Affaire Dreyfus": "Dreyfus Affair",
  "Exposition universelle de Paris": "Paris World's Fair",
  "Loi de séparation des Églises et de l’État": "Law separating Churches and State",
  "Première Guerre mondiale": "First World War",
  "Séparation des Églises et de l’État": "Separation of Churches and State",
  "Une grande bataille de la Première Guerre mondiale en France": "A major battle of the First World War in France",
  "Révolution russe": "Russian Revolution",
  "Armistice": "Armistice",
  "Traité de Versailles": "Treaty of Versailles",
  "Staline dirige l’URSS à la mort de Lénine": "Stalin leads the USSR after Lenin's death",
  "Hitler nommé chancelier": "Hitler appointed Chancellor",
  "Front populaire en France": "Popular Front in France",
  "Seconde Guerre mondiale": "Second World War",
  "Appel du général de Gaulle": "General de Gaulle's Appeal",
  "Rafle du Vélodrome d’Hiver": "Vel d'Hiv Roundup",
  "Droit de vote accordé aux femmes": "Women granted the right to vote",
  "Droit de vote accordé aux femmes en France": "Women granted the right to vote in France",
  "Libération, Gouvernement provisoire de la République française et droit de vote des femmes": "Liberation, Provisional Government of the French Republic and women's right to vote",
  "Débarquement des Alliés en Normandie": "Allied landings in Normandy",
  "Création de l’Organisation des Nations unies": "Creation of the United Nations",
  "Capitulation de l’Allemagne nazie": "Surrender of Nazi Germany",
  "Guerre froide": "Cold War",
  "Indépendance de l’Inde et du Pakistan": "Independence of India and Pakistan",
  "Blocus de Berlin, création de l’État d’Israël, Déclaration universelle des droits de l’homme": "Berlin Blockade, creation of the State of Israel, Universal Declaration of Human Rights",
  "Création de l’OTAN et division de l’Allemagne": "Creation of NATO and division of Germany",
  "Guerre d’Algérie": "Algerian War",
  "Traité de Rome créant la Communauté économique européenne": "Treaty of Rome creating the European Economic Community",
  "Traité de Rome": "Treaty of Rome",
  "Fondation de la Ve République avec le général de Gaulle": "Foundation of the Fifth Republic with General de Gaulle",
  "Instauration de la Ve République en France": "Establishment of the Fifth Republic in France",
  "Crise des missiles de Cuba": "Cuban Missile Crisis",
  "Adoption de l’élection du président de la République au suffrage universel direct": "Adoption of the direct election of the President of the Republic by universal suffrage",
  "Guerre du Vietnam": "Vietnam War",
  "Les Françaises peuvent travailler sans l’autorisation de leur époux et ouvrir un compte bancaire": "French women can work without their husband's authorization and open a bank account",
  "Loi Veil relative à l’interruption volontaire de grossesse": "Veil Law on voluntary termination of pregnancy",
  "Abolition de la peine de mort": "Abolition of the death penalty",
  "Première alternance politique sous la Ve République": "First political alternation under the Fifth Republic",
  "Chute du mur de Berlin": "Fall of the Berlin Wall",
  "Démembrement de l’URSS": "Breakup of the USSR",
  "Traité de Maastricht": "Maastricht Treaty",
  "Loi sur la parité en politique": "Law on gender parity in politics",
  "L’euro remplace le franc": "The euro replaces the franc",
  "Attentats du 11 septembre aux États-Unis": "September 11 attacks in the United States",
  "Mise en circulation de l’euro": "Euro banknotes and coins enter circulation",
  "Mariage pour tous": "Same-sex marriage"
};

const timelineDateTranslations = {
  "Vers 400 000 AEC": "c. 400,000 BCE",
  "Vers 300 000 AEC": "c. 300,000 BCE",
  "Vers 10 000-9 000 AEC": "c. 10,000-9,000 BCE",
  "Vers 4 000 AEC": "c. 4,000 BCE",
  "IVe millénaire AEC": "4th millennium BCE",
  "Vers 3 000 AEC": "c. 3,000 BCE",
  "IXe siècle AEC": "9th century BCE",
  "VIIIe siècle AEC": "8th century BCE",
  "Ve siècle AEC": "5th century BCE",
  "Ier siècle": "1st century",
  "Ier-IIe siècles": "1st-2nd centuries",
  "395 ou 476 apr. J.-C.": "395 or 476 CE",
  "XIe-XIVe siècles": "11th-14th centuries",
  "XIe-XIIIe siècles": "11th-13th centuries",
  "Milieu du XIIe siècle": "Mid-12th century",
  "1453 ou 1492": "1453 or 1492",
  "Années 1670-années 1750": "1670s-1750s",
  "XVIe siècle": "16th century",
  "XVIIIe siècle": "18th century",
  "Dernier tiers du XVIIIe siècle": "Last third of the 18th century",
  "Fin du XVIIIe siècle": "Late 18th century",
  "1789 ou 1815": "1789 or 1815",
  "Printemps 1789": "Spring 1789",
  "14 juillet 1789": "14 July 1789",
  "20 juin 1789": "20 June 1789",
  "4 août 1789": "4 August 1789",
  "26 août 1789": "26 August 1789",
  "5-6 octobre 1789": "5-6 October 1789",
  "Mars 1792": "March 1792",
  "Avril 1792": "April 1792",
  "Septembre 1792": "September 1792",
  "2 décembre 1804": "2 December 1804",
  "Début du XIXe siècle": "Early 19th century",
  "Seconde moitié du XIXe siècle": "Second half of the 19th century",
  "Fin du XIXe siècle": "Late 19th century",
  "Années 1870": "1870s",
  "9 décembre 1905": "9 December 1905",
  "11 novembre 1918": "11 November 1918",
  "18 juin 1940": "18 June 1940",
  "6 juin 1944": "6 June 1944",
  "8 mai 1945": "8 May 1945",
  "1914-1918 — date au choix": "1914-1918 - chosen date"
};

const timelineKeywordTranslations = {
  "Paléolithique": "Paleolithic", "feu": "fire", "chasseurs-cueilleurs": "hunter-gatherers", "premiers humains": "early humans", "archéologie": "archaeology",
  "Afrique": "Africa", "Maroc": "Morocco", "migrations": "migrations", "Néolithique": "Neolithic", "agriculture": "agriculture", "élevage": "livestock farming", "domestication": "domestication", "sédentarisation": "sedentarization", "village": "village",
  "roue": "wheel", "invention": "invention", "transport": "transport", "artisanat": "crafts", "écriture": "writing", "Antiquité": "Antiquity", "chronologie": "chronology", "période": "period", "convention": "convention",
  "écriture cunéiforme": "cuneiform writing", "Mésopotamie": "Mesopotamia", "cité-État": "city-state", "Égypte": "Egypt", "royaume": "kingdom", "scribe": "scribe",
  "Bible hébraïque": "Hebrew Bible", "judaïsme": "Judaism", "monothéisme": "monotheism", "Torah": "Torah", "Israël et Juda": "Israel and Judah",
  "Homère": "Homer", "Iliade": "Iliad", "Odyssée": "Odyssey", "mythe": "myth", "monde grec": "Greek world", "culture commune": "shared culture",
  "Celtes": "Celts", "tombe princière": "princely tomb", "âge du fer": "Iron Age", "culture de La Tène": "La Tene culture", "oppidum": "oppidum", "commerce": "trade",
  "colons grecs": "Greek settlers", "Marseille": "Marseille", "Méditerranée": "Mediterranean", "Gaules": "Gaul", "Athènes": "Athens", "Périclès": "Pericles", "démocratie": "democracy", "citoyen": "citizen", "esclavage": "slavery", "Acropole": "Acropolis",
  "Alexandre le Grand": "Alexander the Great", "Macédoine": "Macedonia", "conquêtes": "conquests", "empire": "empire", "Jules César": "Julius Caesar", "Vercingétorix": "Vercingetorix", "guerre des Gaules": "Gallic Wars", "Alésia": "Alesia", "romanisation": "Romanization",
  "Jésus": "Jesus", "christianisme": "Christianity", "Empire romain": "Roman Empire", "premiers chrétiens": "early Christians", "paix romaine": "Roman Peace", "routes": "roads", "échanges": "exchanges", "villes": "towns",
  "fin de l’Antiquité": "end of Antiquity", "Moyen Âge": "Middle Ages", "Empire romain d’Occident": "Western Roman Empire", "Empire romain d’Orient": "Eastern Roman Empire", "Constantinople": "Constantinople", "Rome": "Rome", "peuples germaniques": "Germanic peoples", "début du Moyen Âge": "beginning of the Middle Ages",
  "seigneurie": "lordship", "Église": "Church", "château": "castle", "paysans": "peasants", "ville": "town", "Justinien": "Justinian", "Empire byzantin": "Byzantine Empire", "basilique Sainte-Sophie": "Hagia Sophia", "droit romain": "Roman law",
  "Muhammad": "Muhammad", "La Mecque": "Mecca", "Médine": "Medina", "Hégire": "Hijra", "calendrier musulman": "Muslim calendar", "islam": "Islam", "Charlemagne": "Charlemagne", "pape Léon III": "Pope Leo III", "Empire carolingien": "Carolingian Empire", "chrétienté occidentale": "Western Christendom",
  "petits-fils de Charlemagne": "Charlemagne's grandsons", "Francie occidentale": "West Francia", "Francie médiane": "Middle Francia", "Francie orientale": "East Francia", "Hugues Capet": "Hugh Capet", "sacre": "coronation", "Capétiens": "Capetians", "domaine royal": "royal domain", "monarchie": "monarchy",
  "croissance démographique": "population growth", "défrichements": "land clearing", "seigneuries": "lordships", "pape": "pope", "patriarche": "patriarch", "catholiques": "Catholics", "orthodoxes": "Orthodox Christians", "Urbain II": "Urban II", "Jérusalem": "Jerusalem", "monde musulman": "Muslim world",
  "cathédrales": "cathedrals", "art gothique": "Gothic art", "évêque": "bishop", "chantiers": "building sites", "quatrième croisade": "Fourth Crusade", "sac de Constantinople": "Sack of Constantinople", "croisés": "Crusaders", "rupture des chrétientés": "split between Christian worlds",
  "Philippe Auguste": "Philip Augustus", "bataille de Bouvines": "Battle of Bouvines", "victoire royale": "royal victory", "Bagdad": "Baghdad", "Mongols": "Mongols", "califat abbasside": "Abbasid Caliphate", "Houlagou Khan": "Hulagu Khan",
  "France": "France", "Angleterre": "England", "guerre de Cent Ans": "Hundred Years' War", "Jeanne d’Arc": "Joan of Arc", "Charles VII": "Charles VII", "royaume national": "national kingdom", "prise de Constantinople": "capture of Constantinople", "Christophe Colomb": "Christopher Columbus", "Temps modernes": "Early Modern period",
  "Empire ottoman": "Ottoman Empire", "Mehmed II": "Mehmed II", "fin de l’Empire byzantin": "end of the Byzantine Empire", "Amérique": "America", "caravelle": "caravel", "empire colonial": "colonial empire", "colonisation": "colonization", "exploration": "exploration", "conquête": "conquest", "première mondialisation": "first globalization",
  "François Ier": "Francis I", "Léonard de Vinci": "Leonardo da Vinci", "Renaissance": "Renaissance", "artiste": "artist", "mécène": "patron", "Luther": "Luther", "95 thèses": "95 Theses", "Réforme protestante": "Protestant Reformation", "indulgences": "indulgences", "rupture religieuse": "religious split",
  "Magellan": "Magellan", "Elcano": "Elcano", "tour du monde": "circumnavigation", "navigation": "navigation", "carte": "map", "protestants": "Protestants", "Henri IV": "Henry IV", "édit de Nantes": "Edict of Nantes", "paix religieuse": "religious peace",
  "Louis XIV": "Louis XIV", "Versailles": "Versailles", "monarchie absolue": "absolute monarchy", "noblesse": "nobility", "Cour": "Court", "société d’ordres": "society of orders", "pouvoir royal": "royal power", "roi guerrier": "warrior king",
  "traite atlantique": "Atlantic slave trade", "commerce triangulaire": "triangular trade", "ports": "ports", "plantations": "plantations", "négociants": "merchants", "Code noir": "Black Code", "traite": "slave trade", "Lumières": "Enlightenment", "Diderot": "Diderot", "Voltaire": "Voltaire", "Rousseau": "Rousseau", "raison": "reason", "critique de l’absolutisme": "criticism of absolutism",
  "Encyclopédie": "Encyclopedie", "d’Alembert": "d'Alembert", "diffusion des idées": "spread of ideas", "révolution industrielle": "Industrial Revolution", "charbon": "coal", "machine à vapeur": "steam engine", "textile": "textiles", "usine": "factory", "apogée de la traite": "peak of the slave trade", "déportation d’Africains": "deportation of Africans", "commerce atlantique": "Atlantic trade",
  "Révolution française": "French Revolution", "Napoléon": "Napoleon", "époque contemporaine": "Contemporary era", "souveraineté nationale": "national sovereignty", "droits de l’Homme": "human rights", "fin de l’absolutisme": "end of absolutism", "citoyens": "citizens", "Bastille": "Bastille", "peuple de Paris": "people of Paris", "liberté": "freedom",
  "Assemblée nationale": "National Assembly", "députés": "deputies", "République": "Republic", "citoyenneté": "citizenship", "Napoléon Bonaparte": "Napoleon Bonaparte", "cahiers de doléances": "cahiers de doleances", "États généraux": "Estates-General", "Ancien Régime": "Ancien Regime", "abolition des privilèges": "abolition of privileges", "égalité": "equality", "fin de la société d’ordres": "end of the society of orders",
  "droits de l’Homme": "rights of man", "femmes de Paris": "women of Paris", "marche sur Versailles": "march on Versailles", "roi": "king", "pain": "bread", "Pauline Léon": "Pauline Leon", "femmes citoyennes": "women citizens", "garde nationale": "National Guard", "engagement politique": "political engagement", "Rouget de Lisle": "Rouget de Lisle", "Marseillaise": "La Marseillaise", "chant révolutionnaire": "revolutionary song", "armée": "army",
  "fin de la monarchie": "end of the monarchy", "Convention": "Convention", "Première République": "First Republic", "Convention nationale": "National Convention", "abolition de l’esclavage": "abolition of slavery", "colonies": "colonies", "Consulat": "Consulate", "Empire": "Empire", "Code civil": "Civil Code", "administration": "administration", "guerres européennes": "European wars",
  "Congrès de Vienne": "Congress of Vienna", "restauration": "Restoration", "équilibre européen": "European balance of power", "monarchies": "monarchies", "frontières": "borders", "rétablissement de l’esclavage": "re-establishment of slavery", "plantation": "plantation", "Napoléon Ier": "Napoleon I", "empereur": "emperor", "pouvoir": "power", "pouvoir personnel": "personal power",
  "Stephenson": "Stephenson", "locomotive": "locomotive", "vapeur": "steam", "chemin de fer": "railway", "industrialisation": "industrialization", "Deuxième République": "Second Republic", "suffrage universel masculin": "universal male suffrage", "vote": "vote", "abolition définitive de l’esclavage": "definitive abolition of slavery", "Victor Schœlcher": "Victor Schoelcher",
  "Printemps des peuples": "Springtime of the Peoples", "révolutions": "revolutions", "nations": "nations", "Charles X": "Charles X", "Algérie": "Algeria", "empire colonial français": "French colonial empire", "ouvriers": "workers", "grève": "strike", "syndicat": "trade union", "luttes sociales": "social struggles",
  "Troisième République": "Third Republic", "défaite de Sedan": "defeat at Sedan", "chute du Second Empire": "fall of the Second Empire", "seconde révolution industrielle": "Second Industrial Revolution", "électricité": "electricity", "pétrole": "oil", "acier": "steel", "chimie": "chemistry", "innovations": "innovations",
  "seconde mondialisation": "second globalization", "empires coloniaux": "colonial empires", "domination européenne": "European domination", "Commune de Paris": "Paris Commune", "insurrection": "uprising", "mouvement ouvrier": "workers' movement", "Semaine sanglante": "Bloody Week", "Empire allemand": "German Empire", "unification allemande": "German unification", "Guillaume Ier": "William I", "Bismarck": "Bismarck",
  "Pasteur": "Pasteur", "vaccin": "vaccine", "rage": "rabies", "médecine": "medicine", "progrès scientifique": "scientific progress", "Jules Ferry": "Jules Ferry", "école gratuite": "free schooling", "école laïque": "secular schooling", "école obligatoire": "compulsory schooling", "laïque": "secular", "obligatoire": "compulsory",
  "Dreyfus": "Dreyfus", "antisémitisme": "antisemitism", "justice": "justice", "presse": "press", "dreyfusards": "Dreyfusards", "Exposition universelle": "World's Fair", "Paris": "Paris", "progrès": "progress", "industrie": "industry", "métropolitain": "metro", "puissance française": "French power", "laïcité": "secularism", "séparation des Églises et de l’État": "separation of Churches and State", "liberté de conscience": "freedom of conscience",
  "Grande Guerre": "Great War", "Première Guerre mondiale": "First World War", "guerre totale": "total war", "tranchées": "trenches", "violences de masse": "mass violence", "civils et militaires": "civilians and soldiers", "génocide arménien": "Armenian genocide", "poilus": "French soldiers", "front": "front", "mobilisation": "mobilization", "révolutions russes": "Russian revolutions", "Lénine": "Lenin", "bolcheviks": "Bolsheviks", "communisme": "communism", "sortie de guerre": "withdrawal from the war",
  "armistice": "armistice", "fin des combats": "end of fighting", "victoire": "victory", "commémoration": "commemoration", "Rethondes": "Rethondes", "Traité de Versailles": "Treaty of Versailles", "paix": "peace", "Allemagne": "Germany", "réparations": "reparations", "Société des Nations": "League of Nations", "Europe": "Europe", "Staline": "Stalin", "URSS": "USSR", "parti unique": "one-party state", "totalitarisme": "totalitarianism", "Grande Terreur": "Great Terror",
  "Hitler": "Hitler", "nazisme": "Nazism", "génocide": "genocide", "Front populaire": "Popular Front", "Léon Blum": "Leon Blum", "accords Matignon": "Matignon Agreements", "congés payés": "paid holidays", "Seconde Guerre mondiale": "Second World War", "défaite": "defeat", "Occupation": "Occupation", "collaboration": "collaboration", "Résistance": "Resistance", "Libération": "Liberation", "guerre d’anéantissement": "war of annihilation", "Shoah": "Holocaust", "génocide des Tziganes": "genocide of the Roma",
  "de Gaulle": "de Gaulle", "appel du 18 Juin": "Appeal of 18 June", "Londres": "London", "France libre": "Free France", "rafle du Vel d’Hiv": "Vel d'Hiv Roundup", "Juifs": "Jews", "régime de Vichy": "Vichy regime", "déportation": "deportation", "droit de vote des femmes": "women's right to vote", "femmes": "women", "GPRF": "Provisional Government of the French Republic", "programme du CNR": "CNR programme", "Sécurité sociale": "Social Security",
  "débarquement": "landings", "Alliés": "Allies", "Normandie": "Normandy", "ONU": "UN", "sécurité collective": "collective security", "Conseil de sécurité": "Security Council", "coopération internationale": "international cooperation", "capitulation allemande": "German surrender", "victoire alliée": "Allied victory", "fin de la guerre en Europe": "end of the war in Europe",
  "guerre froide": "Cold War", "États-Unis": "United States", "monde bipolaire": "bipolar world", "crises": "crises", "dissuasion nucléaire": "nuclear deterrence", "décolonisation": "decolonization", "Inde": "India", "Pakistan": "Pakistan", "Empire britannique": "British Empire", "partition": "partition", "Berlin": "Berlin", "Israël": "Israel", "droits humains": "human rights", "OTAN": "NATO", "RFA": "FRG", "RDA": "GDR", "blocs": "blocs",
  "guerre d’indépendance": "war of independence", "accords d’Évian": "Evian Accords", "traité de Rome": "Treaty of Rome", "CEE": "EEC", "six pays fondateurs": "six founding countries", "construction européenne": "European integration", "marché commun": "common market", "Ve République": "Fifth Republic", "Constitution": "Constitution", "président de la République": "President of the Republic", "pouvoir exécutif": "executive power",
  "Cuba": "Cuba", "Kennedy": "Kennedy", "Khrouchtchev": "Khrushchev", "crise nucléaire": "nuclear crisis", "suffrage universel direct": "direct universal suffrage", "référendum": "referendum", "pouvoir présidentiel": "presidential power", "Vietnam": "Vietnam", "droits des femmes": "women's rights", "travail": "work", "compte bancaire": "bank account", "autonomie": "autonomy",
  "Simone Veil": "Simone Veil", "loi Veil": "Veil Law", "IVG": "abortion", "débat démocratique": "democratic debate", "Robert Badinter": "Robert Badinter", "François Mitterrand": "Francois Mitterrand", "alternance": "alternation", "gauche": "left wing", "élection présidentielle": "presidential election", "mur de Berlin": "Berlin Wall", "bloc de l’Est": "Eastern Bloc", "fin de la guerre froide": "end of the Cold War", "chute du communisme": "fall of communism", "Gorbatchev": "Gorbachev", "indépendances": "independence movements", "Russie": "Russia",
  "Union Européenne": "European Union", "citoyenneté européenne": "European citizenship", "parité": "gender parity", "hommes": "men", "vie politique": "political life", "euro": "euro", "monnaie unique": "single currency", "Union européenne": "European Union", "intégration européenne": "European integration", "terrorisme": "terrorism", "Al-Qaïda": "Al-Qaeda", "New York": "New York", "mondialisation": "globalization", "mariage": "marriage", "égalité des droits": "equal rights", "société": "society"
};

const instructionItems = [
  {
    verb: "Analyser",
    meaning: "Observer un document ou une situation pour en tirer des informations utiles.",
    steps: ["Identifier la nature du document.", "Relever les informations importantes.", "Expliquer ce qu'elles montrent.", "Relier au cours."],
    poster: "assets/instructions/analyser.png"
  },
  {
    verb: "Comparer",
    meaning: "Distinguer les points communs et les différences.",
    steps: ["Repérer les points communs.", "Repérer les différences.", "Classer les idées.", "Conclure sur ce que la comparaison apprend."]
  },
  {
    verb: "Décrire",
    meaning: "Dire précisément ce que l'on voit ou ce que l'on sait, dans un ordre clair.",
    steps: ["Présenter le sujet.", "Nommer les éléments importants.", "Organiser la réponse.", "Employer le vocabulaire d'histoire-géographie."],
    poster: "assets/instructions/decrire.jpg"
  },
  {
    verb: "Définir",
    meaning: "Formuler les caractéristiques d'une notion, d'une idée ou d'un mot-clé.",
    steps: ["Utiliser mes propres mots.", "Donner les caractéristiques importantes.", "Employer le vocabulaire adapté.", "Mobiliser la notion en lien avec le sujet étudié."],
    poster: "assets/instructions/definir.png"
  },
  {
    verb: "Expliquer",
    meaning: "Faire comprendre une idée en donnant des causes, des conséquences ou des mécanismes.",
    steps: ["Dire ce qu'il faut expliquer.", "Donner une cause ou un fonctionnement.", "Ajouter un exemple.", "Formuler une phrase bilan."],
    poster: "assets/instructions/expliquer.jpg"
  },
  {
    verb: "Justifier",
    meaning: "Prouver une réponse avec un argument ou une information précise.",
    steps: ["Donner la réponse.", "Citer une preuve.", "Expliquer pourquoi cette preuve convient.", "Utiliser un connecteur logique."]
  },
  {
    verb: "Localiser",
    meaning: "Situer précisément un lieu ou un espace sur une carte ou par rapport à des repères.",
    steps: ["Nommer le lieu.", "Indiquer l'échelle.", "Utiliser des repères spatiaux.", "Employer le vocabulaire de localisation."],
    poster: "assets/instructions/localiser.jpg"
  },
  {
    verb: "Nommer",
    meaning: "Dire ce que c'est en donnant le nom précis d'un lieu, d'un espace, d'un événement ou d'un élément de document.",
    steps: ["Observer attentivement.", "Employer le nom exact.", "Vérifier l'orthographe.", "Sur une carte, placer la nomenclature au bon endroit."],
    poster: "assets/instructions/nommer.png"
  },
  {
    verb: "Raconter",
    meaning: "Présenter un événement ou une évolution dans l'ordre chronologique.",
    steps: ["Situer dans le temps.", "Présenter les acteurs.", "Raconter les étapes.", "Finir par une conséquence."],
    poster: "assets/instructions/raconter.jpg"
  },
  {
    verb: "Présenter",
    meaning: "Donner les informations essentielles pour identifier un document ou un sujet.",
    steps: ["Nature.", "Auteur ou source.", "Date et contexte.", "Sujet principal."],
    poster: "assets/instructions/presenter.jpg"
  },
  {
    verb: "Argumenter",
    meaning: "Défendre une idée avec plusieurs arguments organisés.",
    steps: ["Annoncer l'idée.", "Donner un premier argument.", "Ajouter un exemple.", "Conclure clairement."],
    poster: "assets/instructions/argumenter.png"
  }
];

const proofreadingItems = [
  {
    letter: "C",
    title: { fr: "Connecteurs", en: "Connectors" },
    check: {
      fr: "Au début de chaque paragraphe et dans le texte",
      en: "At the start of each paragraph and within the text"
    }
  },
  {
    letter: "O",
    title: { fr: "Orthographe", en: "Spelling" },
    check: {
      fr: "Noms propres, pluriel, accords",
      en: "Proper nouns, plurals, agreement"
    }
  },
  {
    letter: "P",
    title: { fr: "Ponctuation", en: "Punctuation" },
    check: {
      fr: "Plusieurs phrases courtes avec majuscule et point",
      en: "Several short sentences with capital letters and full stops"
    }
  },
  {
    letter: "I",
    title: { fr: "Idées", en: "Ideas" },
    check: {
      fr: "Une idée principale par paragraphe, annoncée au début",
      en: "One main idea per paragraph, announced at the start"
    }
  },
  {
    letter: "L",
    title: { fr: "Lexique", en: "Vocabulary" },
    check: {
      fr: "Mots-clés et définitions adaptées",
      en: "Keywords and course definitions"
    }
  },
  {
    letter: "O",
    title: { fr: "Organisation", en: "Organisation" },
    check: {
      fr: "Sauts de ligne et alinéas cohérents",
      en: "Line breaks and coherent paragraphs"
    }
  },
  {
    letter: "T",
    title: { fr: "Temps", en: "Tense" },
    check: {
      fr: "Conjugaison au présent ou au passé en histoire",
      en: "Present or past tense in history"
    }
  },
  {
    letter: "E",
    title: { fr: "Exemples précis", en: "Precise Examples" },
    check: {
      fr: "Événements, dates, lieux, chiffres, noms propres",
      en: "Events, dates, places, figures, proper nouns"
    }
  }
];

const correctionTagItems = [
  { tag: "#ACCR", meaning: "Accroche", errors: "Absence d’accroche.\nAccroche trop générale ou éloignée du sujet.\nAccroche sans lien explicite avec le sujet.", remediation: "Repérer le lien attendu entre l’accroche et le sujet.\nRemplacer l’accroche trop générale par un repère précis et pertinent.\nRédiger une phrase qui conduit directement au sujet." },
  { tag: "#ARG", meaning: "Argument", errors: "Idée affirmée mais non expliquée.\nArgument sans connaissance, preuve ou exemple précis.\nExemple cité mais non relié à l’idée défendue.", remediation: "Repérer l’argument insuffisamment développé.\nRéécrire le passage selon la logique : argument → connaissances/preuve → exemple.\nVérifier que l’exemple démontre bien l’argument. Appui : fiche outil 1." },
  { tag: "#CCL", meaning: "Conclusion", errors: "Absence de conclusion.\nConclusion qui répète le développement sans faire de bilan.\nAbsence de réponse claire à la problématique.", remediation: "Reprendre la problématique et formuler une réponse directe.\nSélectionner les 2 ou 3 résultats essentiels de la démonstration.\nRédiger un bilan synthétique. Appui : fiche outil 5." },
  { tag: "#CHRONO", meaning: "Chronologie", errors: "Repères chronologiques absents, imprécis ou erronés.\nÉvénements mal ordonnés.\nBornes chronologiques ou périodisation non définies ou non justifiées.", remediation: "Replacer les principaux événements sur une frise ou au brouillon.\nSélectionner les repères utiles au sujet et les intégrer aux passages concernés.\nJustifier les bornes ou ruptures utilisées dans le plan." },
  { tag: "#ECH", meaning: "Échelles", errors: "Une seule échelle est prise en compte alors que plusieurs sont nécessaires.\nConfusion entre les échelles.\nPlan multiscalaire qui juxtapose les échelles sans montrer leurs relations.", remediation: "Identifier les échelles pertinentes : locale, nationale, régionale, mondiale.\nClasser les informations par échelle.\nRéécrire un passage en montrant explicitement le lien entre au moins deux échelles." },
  { tag: "#EXPLE", meaning: "Exemple", errors: "Absence d’exemple.\nExemple trop vague ou imprécis.\nExemple simplement cité, sans être expliqué ni relié à l’argument.", remediation: "Choisir un exemple précis : lieu, acteur, événement, date ou donnée.\nL’expliquer en une ou deux phrases.\nAjouter une phrase indiquant explicitement ce qu’il démontre." },
  { tag: "#FIG", meaning: "Figuré cartographique", errors: "Confusion entre figurés ponctuels, linéaires et de surface.\nFiguré ou couleur inadapté au phénomène représenté.\nIncohérence entre la légende et le croquis.", remediation: "Identifier la nature du phénomène à représenter.\nChoisir le type de figuré et la variable visuelle adaptés.\nCorriger la légende et le croquis puis vérifier leur correspondance. Appui : vidéo « Figurés »." },
  { tag: "#GRAPH", meaning: "Production graphique", errors: "Production graphique absente alors qu’elle serait pertinente.\nType de production mal choisi ou production comportant des erreurs.\nProduction insérée mais non exploitée dans la démonstration.", remediation: "Déterminer ce que la production graphique doit montrer.\nChoisir le type de production adapté et la réaliser ou la corriger.\nAjouter une phrase qui explique ce qu’elle apporte à la démonstration." },
  { tag: "#INTRO", meaning: "Introduction", errors: "Un ou plusieurs éléments essentiels de l’introduction sont absents.\nTermes-clés du sujet non analysés ou non définis.\nContextualisation vague, erronée ou sans lien avec le sujet.", remediation: "Repérer les éléments présents et manquants.\nDéfinir les termes-clés utiles et préciser le contexte nécessaire.\nVérifier l’enchaînement : analyse du sujet → contextualisation → problématique → plan. Appui : fiche outil 4." },
  { tag: "#JUSTIF", meaning: "Justification", errors: "Affirmation sans justification.\nDocument cité sans prélèvement précis.\nCitation, donnée ou connaissance mentionnée sans expliquer ce qu’elle prouve.", remediation: "Repérer l’affirmation à justifier.\nAjouter une preuve précise : connaissance, citation courte, donnée ou élément du document.\nExpliquer en quoi cette preuve confirme l’affirmation." },
  { tag: "#LIEN", meaning: "Mise en relation", errors: "Documents étudiés séparément.\nInformations juxtaposées sans relation explicite.\nPoints communs, différences ou nuances non identifiés.", remediation: "Identifier la relation entre les éléments : ils se complètent, se confirment, s’opposent ou se nuancent.\nRédiger une phrase de comparaison ou de confrontation.\nVérifier que la relation sert la réponse au sujet." },
  { tag: "#LOC", meaning: "Localisation", errors: "Localisation absente ou trop vague.\nÉchelle géographique non précisée.\nSituation relative ou repères spatiaux insuffisants.", remediation: "Identifier l’espace concerné et son échelle.\nAjouter des repères précis : territoire, région, pays, continent, direction ou proximité.\nRéécrire le passage en intégrant au moins un repère spatial pertinent." },
  { tag: "#NOMEN", meaning: "Nomenclature", errors: "Nom manquant, mal placé ou mal orthographié.\nNomenclature difficilement lisible.\nNoms trop nombreux ou peu pertinents.", remediation: "Compléter ou corriger la nomenclature à partir du document de référence.\nVérifier l’orthographe, le placement et la lisibilité.\nConserver uniquement les noms utiles à la démonstration." },
  { tag: "#OUV", meaning: "Ouverture", errors: "Absence d’ouverture lorsqu’elle est attendue.\nOuverture vague, artificielle ou sans lien avec le bilan.\nOuverture qui introduit une nouvelle idée non traitée.", remediation: "Choisir un prolongement directement lié au sujet : évolution ultérieure, changement d’échelle ou question connexe.\nRédiger une seule phrase établissant clairement ce lien." },
  { tag: "#PARA", meaning: "Paraphrase", errors: "Informations du document reprises sans reformulation.\nCitation qui remplace l’explication.\nDescription du document sans analyse.", remediation: "Repérer un passage paraphrasé.\nReformuler l’information avec ses propres mots.\nAjouter une phrase d’analyse : « Cela montre que… » ou « Cela s’explique par… »." },
  { tag: "#PLAN", meaning: "Plan", errors: "Absence d’annonce du plan ou plan annoncé différent du plan réalisé.\nPlan qui ne répond pas à l’ensemble du sujet.\nParties déséquilibrées, descriptives ou mal ordonnées.", remediation: "Classer au brouillon les idées qui répondent à la problématique.\nChoisir une logique de plan adaptée et formuler chaque partie comme une idée à démontrer.\nVérifier que toutes les dimensions du sujet sont traitées. Appui : fiches outils 2 et 3." },
  { tag: "#PRES", meaning: "Présentation de document", errors: "Document non présenté.\nPrésentation incomplète : nature, auteur/source, date, contexte ou sujet manquant.\nPrésentation mécanique contenant des informations inutiles.", remediation: "Identifier les informations réellement utiles à la compréhension du document.\nRédiger une présentation courte : nature, auteur/source, date, contexte et sujet selon leur pertinence.\nAppui : vidéo « Présenter un document »." },
  { tag: "#PROB", meaning: "Problématique", errors: "Absence de problématique.\nSimple reprise du sujet sous forme interrogative.\nProblématique qui n’englobe qu’une partie du sujet, ou qui conduit au hors-sujet.", remediation: "Souligner les termes et limites du sujet.\nFormuler ce qu’il faut réellement expliquer ou démontrer.\nRédiger une question qui englobe l’ensemble du sujet et peut guider le plan." },
  { tag: "#REF", meaning: "Référence", errors: "Référence ou citation incomplète ou erronée.\nConfusion entre auteur, titre, source ou support.\nCitation impossible à attribuer précisément.", remediation: "Revenir au document ou à la ressource utilisée.\nCompléter les éléments nécessaires : auteur, titre, source/support, date selon le cas.\nVérifier que la citation est correctement attribuée." },
  { tag: "#SOIN", meaning: "Propreté", errors: "Écriture ou nomenclature difficilement lisible.\nFigurés qui se chevauchent ou coloriage irrégulier.\nOrganisation graphique qui rend l’information difficile à lire.", remediation: "Repérer deux éléments qui nuisent à la lisibilité.\nLes refaire en améliorant tracé, coloriage, écriture ou disposition.\nVérifier que les informations principales sont immédiatement identifiables. Appui : vidéo « Soigner sa production graphique »." },
  { tag: "#SOURCE", meaning: "Source du document", errors: "Auteur, origine ou statut du document mal identifié.\nContexte de production ignoré.\nPoint de vue, intention ou limites de la source non pris en compte lorsqu’ils sont utiles.", remediation: "Identifier qui produit le document, quand, où et dans quel contexte.\nSe demander dans quel but et pour quel public il est produit.\nAjouter, si nécessaire, une phrase sur le point de vue, l’intérêt ou les limites de la source." },
  { tag: "#TOLE", meaning: "Titre, orientation, légende, échelle", errors: "Titre, orientation, légende ou échelle absent lorsque cet élément est nécessaire.\nTitre trop vague ou incomplet.\nLégende mal organisée ou non hiérarchisée.", remediation: "Vérifier successivement : Titre – Orientation – Légende – Échelle.\nCompléter les éléments manquants.\nPréciser le titre avec le phénomène et l’espace représentés, puis organiser la légende." },
  { tag: "#TRANS", meaning: "Transition", errors: "Absence de transition.\nTransition qui se contente d’annoncer la partie suivante.\nAbsence de lien logique entre deux parties.", remediation: "Rédiger une transition en deux temps.\nFaire le bilan de ce qui vient d’être démontré.\nExpliquer pourquoi la partie suivante est nécessaire pour poursuivre la réponse." },
  { tag: "#VOC", meaning: "Vocabulaire", errors: "Vocabulaire disciplinaire absent, imprécis ou mal employé.\nNotion-clé utilisée sans être définie.\nAnachronisme ou terme inadapté au contexte historique ou géographique.", remediation: "Repérer le mot vague ou incorrect.\nRetrouver la notion adaptée et en rédiger une définition courte.\nRéécrire la phrase en utilisant le terme correctement et vérifier qu’il convient au contexte." }
];

const correctionTagEnglish = {
  "#ACCR": ["Opening hook", "No opening hook, or one that is too general or unrelated to the topic.", "Use a precise fact or example that leads directly to the topic."],
  "#ARG": ["Argument", "An idea is stated without explanation, evidence, or a relevant example.", "Develop the passage: argument, evidence, then a precise example."],
  "#CCL": ["Conclusion", "The conclusion is missing, repeats the whole text, or does not answer the question.", "Give a direct answer and sum up the two or three key findings."],
  "#CHRONO": ["Chronology", "Dates are missing, inaccurate, or events are not in chronological order.", "Place key events on a timeline and use the relevant dates in the text."],
  "#ECH": ["Scales", "Only one geographical scale is used, or the scales are confused.", "Identify local, national, regional, and global scales, then show their links."],
  "#EXPLE": ["Example", "The example is missing, vague, or not connected to the argument.", "Choose a precise place, actor, event, date, or figure and explain what it shows."],
  "#FIG": ["Map symbol", "The map symbol, colour, or legend does not match the phenomenon.", "Choose the appropriate point, line, or area symbol and check the legend."],
  "#GRAPH": ["Graphic representation", "The graphic is missing, unsuitable, inaccurate, or not used in the explanation.", "Choose the right type of graphic, produce it carefully, and explain its contribution."],
  "#INTRO": ["Introduction", "A key part is missing: key terms, context, guiding question, or outline.", "Analyse the topic, set the context, formulate the question, and announce the plan."],
  "#JUSTIF": ["Justification", "A statement is not supported by evidence or the document is quoted imprecisely.", "Add a precise fact, quotation, figure, or document detail, then explain what it proves."],
  "#LIEN": ["Making connections", "Documents or pieces of information are presented separately without comparison.", "Show whether they complement, confirm, contrast, or qualify one another."],
  "#LOC": ["Location", "The place is missing or vague, and the geographical scale is not stated.", "Name the territory and add useful spatial reference points."],
  "#NOMEN": ["Map labelling", "A name is missing, misplaced, misspelled, or difficult to read.", "Check spelling, placement, legibility, and keep only useful labels."],
  "#OUV": ["Opening", "The opening is missing, vague, unrelated to the conclusion, or introduces a new idea.", "Write one sentence opening onto a directly related development or question."],
  "#PARA": ["Paraphrase", "The document is copied or described without reformulation or analysis.", "Use your own words and add what the information shows or explains."],
  "#PLAN": ["Plan", "The plan is missing, unbalanced, poorly ordered, or does not answer the full topic.", "Organise ideas around the guiding question and turn each part into an idea to prove."],
  "#PRES": ["Document presentation", "The nature, author, source, date, context, or topic is missing or irrelevant.", "Give a short presentation using only information useful for understanding the document."],
  "#PROB": ["Guiding question", "The question is absent, merely repeats the topic, or leads away from it.", "Identify the topic's terms and limits, then write a question that guides the plan."],
  "#REF": ["Reference", "The reference or quotation is incomplete, incorrect, or cannot be attributed.", "Check the author, title, source, format, and date when relevant."],
  "#SOIN": ["Presentation quality", "Writing, labels, symbols, colouring, or layout are difficult to read.", "Redo the unclear elements and check that the main information stands out."],
  "#SOURCE": ["Document source", "The author, origin, context, point of view, or purpose is not considered.", "Identify who produced the document, when, why, and for whom."],
  "#TOLE": ["Title, orientation, legend, scale", "A required map element is missing, vague, or poorly organised.", "Check title, orientation, legend, and scale, then improve the map title and legend."],
  "#TRANS": ["Transition", "There is no transition, or it only announces the next section.", "Sum up what was shown and explain why the next part is needed."],
  "#VOC": ["Vocabulary", "Subject vocabulary is missing, inaccurate, undefined, or inappropriate for the context.", "Find the correct term, define it briefly, and use it accurately in the sentence."],
};

function getCorrectionTagContent(item) {
  if (currentLanguage !== "en") return item;
  const [meaning, errors, remediation] = correctionTagEnglish[item.tag] || [item.meaning, item.errors, item.remediation];
  return { ...item, meaning, errors, remediation };
}

const els = {
  homeToolsGrid: document.querySelector("#homeToolsGrid"),
  shortcutForm: document.querySelector("#shortcutForm"),
  shortcutName: document.querySelector("#shortcutName"),
  shortcutUrl: document.querySelector("#shortcutUrl"),
  shortcutList: document.querySelector("#shortcutList"),
  exportData: document.querySelector("#exportData"),
  importData: document.querySelector("#importData"),
  importDataFile: document.querySelector("#importDataFile"),
  weekdayLabel: document.querySelector("#weekdayLabel"),
  dateLabel: document.querySelector("#dateLabel"),
  clockLabel: document.querySelector("#clockLabel"),
  weekStrip: document.querySelector("#weekStrip"),
  calendarMonthLabel: document.querySelector("#calendarMonthLabel"),
  calendarPrev: document.querySelector("#calendarPrev"),
  calendarNext: document.querySelector("#calendarNext"),
  calendarGrid: document.querySelector("#calendarGrid"),
  miniCalendar: document.querySelector("#miniCalendar"),
  langToggle: document.querySelector("#langToggle"),
  themeToggle: document.querySelector("#themeToggle"),
  timerCard: document.querySelector("#timerCard"),
  timerFace: document.querySelector("#timerFace"),
  timerModeLabel: document.querySelector("#timerModeLabel"),
  timerDisplay: document.querySelector("#timerDisplay"),
  timerPercent: document.querySelector("#timerPercent"),
  timerStatus: document.querySelector("#timerStatus"),
  durationMinutesInput: document.querySelector("#durationMinutesInput"),
  timerSoundSelect: document.querySelector("#timerSoundSelect"),
  testTimerSound: document.querySelector("#testTimerSound"),
  startTimer: document.querySelector("#startTimer"),
  pauseTimer: document.querySelector("#pauseTimer"),
  skipTimer: document.querySelector("#skipTimer"),
  resetTimer: document.querySelector("#resetTimer"),
  roundDots: document.querySelector("#roundDots"),
  mapCard: document.querySelector("#mapCard"),
  mapStage: document.querySelector("#mapStage"),
  thematicMapSelect: document.querySelector("#thematicMapSelect"),
  baseMapSelect: document.querySelector("#baseMapSelect"),
  mapImage: document.querySelector("#mapImage"),
  mapCaption: document.querySelector("#mapCaption"),
  mapSource: document.querySelector("#mapSource"),
  mapFullscreen: document.querySelector("#mapFullscreen"),
  mapExitFullscreen: document.querySelector("#mapExitFullscreen"),
  mapZoomOut: document.querySelector("#mapZoomOut"),
  mapZoomReset: document.querySelector("#mapZoomReset"),
  mapZoomIn: document.querySelector("#mapZoomIn"),
  osmSearchForm: document.querySelector("#osmSearchForm"),
  osmQuery: document.querySelector("#osmQuery"),
  osmLayer: document.querySelector("#osmLayer"),
  cartesGouvLayer: document.querySelector("#cartesGouvLayer"),
  osmProviderOsm: document.querySelector("#osmProviderOsm"),
  osmProviderCartesGouv: document.querySelector("#osmProviderCartesGouv"),
  osmProviderHistory: document.querySelector("#osmProviderHistory"),
  osmOpenCartesGouv: document.querySelector("#osmOpenCartesGouv"),
  osmResize: document.querySelector("#osmResize"),
  osmExitFullscreen: document.querySelector("#osmExitFullscreen"),
  osmCard: document.querySelector("#osmCard"),
  osmFrame: document.querySelector("#osmFrame"),
  osmResult: document.querySelector("#osmResult"),
  openNamesModal: document.querySelector("#openNamesModal"),
  shuffleStudentNames: document.querySelector("#shuffleStudentNames"),
  namesDialog: document.querySelector("#namesDialog"),
  closeNamesModal: document.querySelector("#closeNamesModal"),
  saveNamesModal: document.querySelector("#saveNamesModal"),
  studentNames: document.querySelector("#studentNames"),
  groupsTabs: document.querySelectorAll("[data-groups-view]"),
  groupsGeneratorView: document.querySelector("#groupsGeneratorView"),
  groupsWheelView: document.querySelector("#groupsWheelView"),
  groupSize: document.querySelector("#groupSize"),
  groupMode: document.querySelector("#groupMode"),
  generateGroups: document.querySelector("#generateGroups"),
  shuffleNames: document.querySelector("#shuffleNames"),
  groupsResize: document.querySelector("#groupsResize"),
  groupsCard: document.querySelector("#groupsCard"),
  copyGroups: document.querySelector("#copyGroups"),
  groupOutput: document.querySelector("#groupOutput"),
  studentWheel: document.querySelector("#studentWheel"),
  wheelCenterText: document.querySelector("#wheelCenterText"),
  spinWheel: document.querySelector("#spinWheel"),
  resetWheel: document.querySelector("#resetWheel"),
  wheelWinner: document.querySelector("#wheelWinner"),
  wheelPoolStatus: document.querySelector("#wheelPoolStatus"),
  wheelHistory: document.querySelector("#wheelHistory"),
  helpNeedForm: document.querySelector("#helpNeedForm"),
  helpNeedInput: document.querySelector("#helpNeedInput"),
  helpOfferForm: document.querySelector("#helpOfferForm"),
  helpOfferInput: document.querySelector("#helpOfferInput"),
  helpNeedsList: document.querySelector("#helpNeedsList"),
  helpOffersList: document.querySelector("#helpOffersList"),
  instructionsCard: document.querySelector("#instructionsCard"),
  instructionsResize: document.querySelector("#instructionsResize"),
  instructionWall: document.querySelector("#instructionWall"),
  instructionDisplay: document.querySelector("#instructionDisplay"),
  correctionTagsCard: document.querySelector("#correctionTagsCard"),
  correctionTagsResize: document.querySelector("#correctionTagsResize"),
  correctionTagsList: document.querySelector("#correctionTagsList"),
  openCorrectionTagsFilter: document.querySelector("#openCorrectionTagsFilter"),
  correctionTagsDialog: document.querySelector("#correctionTagsDialog"),
  correctionTagsPicker: document.querySelector("#correctionTagsPicker"),
  selectAllCorrectionTags: document.querySelector("#selectAllCorrectionTags"),
  deselectAllCorrectionTags: document.querySelector("#deselectAllCorrectionTags"),
  proofreadingCard: document.querySelector("#proofreadingCard"),
  proofreadingResize: document.querySelector("#proofreadingResize"),
  proofreadingList: document.querySelector("#proofreadingList"),
  levelFilter: document.querySelector("#levelFilter"),
  periodFilter: document.querySelector("#periodFilter"),
  timelineSearch: document.querySelector("#timelineSearch"),
  timelineCard: document.querySelector("#timelineCard"),
  timelineResize: document.querySelector("#timelineResize"),
  timelineBack: document.querySelector("#timelineBack"),
  timelineResetScroll: document.querySelector("#timelineResetScroll"),
  timelineForward: document.querySelector("#timelineForward"),
  timelineList: document.querySelector("#timelineList"),
  toolLinks: document.querySelectorAll(".tool-nav a[href^='#']"),
  toolPanels: document.querySelectorAll("#dateBanner, .tool-card")
};

const timer = {
  mode: "work",
  initial: 600,
  remaining: 600,
  endAt: null,
  interval: null,
  running: false
};

const timerDurations = {
  work: 10,
  short: 5
};

let currentLanguage = localStorage.getItem(storageKeys.language) || "fr";
let selectedTimerSound = localStorage.getItem(storageKeys.timerSound) || "bell";
let currentMapId = "world-reliefs-thematic";
let mapZoom = 1;
let calendarCursor = new Date();
let selectedInstruction = instructionItems[0].verb;
let selectedProofreadingIndex = null;
let openCorrectionTagIndexes = new Set();
let visibleCorrectionTags = loadVisibleCorrectionTags();
let selectedTimelineKey = null;
let currentGroupsView = "groups";
let selectedGroupIndex = null;
let generatedGroups = [];
let generatedGroupNames = [];
let draggedStudent = null;
let wheelRotation = 0;
let wheelSpinTimeout;
let wheelCelebrationTimeout;
let lastWheelWinner = "";
let wheelHistory = [];
let removedWheelNames = new Set();
let helpBoard = loadHelpBoard();
let shortcuts = loadShortcuts();
let homeToolSettings = loadHomeToolSettings();
let draggedHomeToolId = "";
let osmState = {
  lat: 48.8566,
  lon: 2.3522,
  delta: { lat: 0.2, lon: 2.5 },
  label: "Paris"
};
let osmProvider = "osm";
let lastGroupsText = "";

init();

function init() {
  document.body.classList.toggle("dark", localStorage.getItem(storageKeys.theme) === "dark");
  els.studentNames.value = localStorage.getItem(storageKeys.students) || "";
  bindLanguage();
  applyLanguage();
  bindToolNavigation();
  showTool(getInitialToolId(), { updateHash: false });
  updateDate();
  renderCalendar();
  setInterval(updateDate, 1000);
  bindCalendar();
  bindTimer();
  bindMap();
  resetMapZoom();
  bindGroups();
  bindShortcuts();
  bindHelp();
  bindInstructions();
  bindCorrectionTags();
  bindProofreading();
  bindTimeline();
  renderInstructions();
  renderHomeTools();
  renderShortcuts();
  renderHelpBoard();
  renderCorrectionTags();
  renderProofreading();
  renderTimeline();
  els.pauseTimer.disabled = true;
  updateTimerDisplay();
}

function bindToolNavigation() {
  els.toolLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const toolId = link.getAttribute("href").slice(1);
      showTool(toolId);
    });
  });

  window.addEventListener("hashchange", () => {
    showTool(getInitialToolId(), { updateHash: false });
  });

  window.addEventListener("popstate", () => {
    showTool(getInitialToolId(), { updateHash: false });
  });
}

function getInitialToolId() {
  const requestedId = window.location.hash.slice(1);
  return document.getElementById(requestedId) ? requestedId : "homeCard";
}

function showTool(toolId, options = {}) {
  const { updateHash = true } = options;
  const targetId = document.getElementById(toolId) ? toolId : "homeCard";

  els.toolPanels.forEach((panel) => {
    const isActive = panel.id === targetId;
    panel.classList.toggle("is-active-tool", isActive);
    panel.hidden = !isActive;
  });

  els.toolLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${targetId}`;
    link.classList.toggle("is-active-tool", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  document.body.classList.toggle("is-home-view", targetId === "homeCard");

  if (updateHash && window.location.hash !== `#${targetId}`) {
    history.pushState(null, "", `#${targetId}`);
  }
  updatePageHeader(targetId);
  if (targetId === "timelineCard") {
    requestAnimationFrame(updateTimelineAxisLength);
  }
}

function updatePageHeader(toolId) {
  const header = tr("toolHeaders")[toolId];
  const isDatePage = toolId === "dateBanner" || !header;
  const isHomePage = toolId === "homeCard";
  const title = isDatePage ? tr("dateTitle") : header[0];
  const subtitle = isDatePage ? tr("dateSubtitle") : header[1];
  const heading = document.querySelector("h1");

  heading.innerHTML = `${escapeHtml(title)} <span class="beta-badge">BETA</span>`;
  document.querySelector(".subtitle").textContent = subtitle;
  document.querySelector("#appKickerLabel").textContent = isHomePage ? "La Classe d'Histoire" : "Tableau de bord HG";
  document.title = title;
}

function getHomeTools() {
  return [
    ["dateBanner", "nav-icon-calendar"],
    ["timerCard", "nav-icon-timer"],
    ["mapCard", "nav-icon-map"],
    ["osmCard", "nav-icon-osm"],
    ["timelineCard", "nav-icon-timeline"],
    ["instructionsCard", "nav-icon-instructions"],
    ["proofreadingCard", "nav-icon-proofreading"],
    ["correctionTagsCard", "nav-icon-tags"],
    ["groupsCard", "nav-icon-groups"],
    ["helpCard", "nav-icon-help"]
  ];
}

function renderHomeTools() {
  if (!els.homeToolsGrid) return;
  const labels = tr("homeToolLabels");
  const headers = tr("toolHeaders");
  els.homeToolsGrid.innerHTML = getOrderedHomeTools().map(([toolId, iconClass]) => {
    const label = labels[toolId];
    const description = toolId === "dateBanner"
      ? tr("subtitle")
      : headers[toolId]?.[1] || "";
    const iconText = "";
    const thumbClass = iconClass === "nav-icon-timeline" ? " is-timeline-thumb" : "";
    const iconMarkup = getHomeToolIcon(toolId, iconClass, iconText);
    return `
      <article class="home-tool-tile" data-home-tile="${toolId}" draggable="true">
        <button class="home-tool-open" type="button" data-home-tool="${toolId}">
        <span class="home-tool-thumb${thumbClass}">${iconMarkup}</span>
        <span class="home-tool-content"><strong>${escapeHtml(label)}</strong><small>${escapeHtml(description)}</small></span>
        </button>
      </article>
    `;
  }).join("");
}

function loadHomeToolSettings() {
  const stored = loadJson(storageKeys.homeTools, {});
  const ids = new Set(getHomeTools().map(([toolId]) => toolId));
  const order = Array.isArray(stored.order) ? stored.order.filter((toolId) => ids.has(toolId)) : [];
  return { order: [...new Set(order)] };
}

function getOrderedHomeTools() {
  const tools = getHomeTools();
  const indexById = new Map(homeToolSettings.order.map((toolId, index) => [toolId, index]));
  return [...tools].sort(([firstId], [secondId]) => {
    return (indexById.get(firstId) ?? tools.findIndex(([toolId]) => toolId === firstId)) - (indexById.get(secondId) ?? tools.findIndex(([toolId]) => toolId === secondId));
  });
}

function saveHomeToolSettings() {
  localStorage.setItem(storageKeys.homeTools, JSON.stringify(homeToolSettings));
}

function getHomeToolIcon(toolId, iconClass, iconText) {
  if (toolId === "dateBanner") {
    return '<span class="nav-icon nav-icon-calendar" aria-hidden="true"><img src="assets/icons/calendar-noun-project-8349285.png" alt=""></span>';
  }
  if (toolId === "timerCard") {
    return '<span class="nav-icon nav-icon-timer" aria-hidden="true"><img src="assets/icons/timer-noun-project-8395453.png" alt=""></span>';
  }
  if (toolId === "instructionsCard") {
    return '<span class="nav-icon nav-icon-instructions" aria-hidden="true"><img src="assets/icons/directions-noun-project-8416471.png" alt=""></span>';
  }
  if (toolId === "correctionTagsCard") {
    return '<span class="nav-icon nav-icon-tags" aria-hidden="true"><img src="assets/icons/hashtag-noun-project-8252420.png" alt=""></span>';
  }
  if (toolId === "groupsCard") {
    return '<span class="nav-icon nav-icon-groups" aria-hidden="true"><img src="assets/icons/puzzle-noun-project-8296112.png" alt=""></span>';
  }
  if (toolId === "mapCard") {
    return `<span class="nav-icon nav-icon-map" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m2 5.5 6.5-3.5 7 3.5L22 2v16.5l-6.5 3.5-7-3.5L2 22Z"></path><path d="M8.5 2v16.5M15.5 5.5v16.5"></path></svg></span>`;
  }
  if (toolId === "osmCard") {
    return `<span class="nav-icon nav-icon-osm" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 21s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12Z"></path><circle cx="12" cy="9" r="2.3"></circle></svg></span>`;
  }
  if (toolId === "proofreadingCard") {
    return '<svg class="home-tool-icon home-pencil-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m2.5 21.5 2-6.3 4.3 4.3z" fill="currentColor" stroke="none"></path><path d="m5.6 14.1 8.7-8.7 4.5 4.5-8.7 8.7z" fill="currentColor" stroke="none"></path><path d="m15.6 4.1 1.2-1.2a2 2 0 0 1 2.8 0l1.5 1.5a2 2 0 0 1 0 2.8l-1.2 1.2z" fill="currentColor" stroke="none"></path></svg>';
  }
  if (toolId === "helpCard") {
    return '<span class="nav-icon nav-icon-help" aria-hidden="true"><img src="assets/icons/hand-raised-noun-project-6863789.png" alt=""></span>';
  }
  if (toolId === "timelineCard") {
    return '<svg class="home-tool-icon home-timeline-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 2.5h16v9.1h-5.4L12 14.2l-2.6-2.6H4z"></path><path d="M2.5 20h19"></path><circle cx="12" cy="20" r="3.3" fill="currentColor" stroke="none"></circle><circle cx="12" cy="20" r="1.3" fill="#3f8e9d" stroke="none"></circle></svg>';
  }
  const navText = iconText;
  return `<span class="nav-icon ${iconClass}" aria-hidden="true">${navText}</span>`;
}

function bindShortcuts() {
  els.homeToolsGrid.addEventListener("click", (event) => {
    const tile = event.target.closest("[data-home-tool]");
    if (tile) showTool(tile.dataset.homeTool);
  });

  els.homeToolsGrid.addEventListener("dragstart", (event) => {
    const tile = event.target.closest("[data-home-tile]");
    if (!tile) return;
    draggedHomeToolId = tile.dataset.homeTile;
    event.dataTransfer.effectAllowed = "move";
    tile.classList.add("is-dragging");
  });
  els.homeToolsGrid.addEventListener("dragend", () => {
    draggedHomeToolId = "";
    els.homeToolsGrid.querySelectorAll(".is-dragging").forEach((tile) => tile.classList.remove("is-dragging"));
  });
  els.homeToolsGrid.addEventListener("dragover", (event) => {
    if (!draggedHomeToolId) return;
    const target = event.target.closest("[data-home-tile]");
    if (!target || target.dataset.homeTile === draggedHomeToolId) return;
    event.preventDefault();
    els.homeToolsGrid.querySelectorAll(".is-home-drop-target").forEach((tile) => tile.classList.remove("is-home-drop-target"));
    target.classList.add("is-home-drop-target");
  });
  els.homeToolsGrid.addEventListener("drop", (event) => {
    const target = event.target.closest("[data-home-tile]");
    if (!target || !draggedHomeToolId || target.dataset.homeTile === draggedHomeToolId) return;
    event.preventDefault();
    const order = getOrderedHomeTools().map(([toolId]) => toolId).filter((toolId) => toolId !== draggedHomeToolId);
    order.splice(order.indexOf(target.dataset.homeTile), 0, draggedHomeToolId);
    homeToolSettings.order = order;
    saveHomeToolSettings();
    renderHomeTools();
  });
  els.homeToolsGrid.addEventListener("dragleave", (event) => {
    if (!event.target.closest("[data-home-tile]")) return;
    els.homeToolsGrid.querySelectorAll(".is-home-drop-target").forEach((tile) => tile.classList.remove("is-home-drop-target"));
  });

  els.shortcutForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = els.shortcutName.value.trim();
    const url = normaliseUrl(els.shortcutUrl.value.trim());
    if (!name || !url) return;

    shortcuts.push({ id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, name, url });
    saveShortcuts();
    els.shortcutForm.reset();
    renderShortcuts();
    els.shortcutName.focus();
  });

  els.shortcutList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-shortcut-remove]");
    if (!button) return;
    shortcuts = shortcuts.filter((shortcut) => shortcut.id !== button.dataset.shortcutRemove);
    saveShortcuts();
    renderShortcuts();
  });

  els.shortcutList.addEventListener("error", (event) => {
    const favicon = event.target.closest?.(".shortcut-link-icon img");
    if (favicon) favicon.remove();
  }, true);

  els.exportData.addEventListener("click", exportDashboardData);
  els.importData.addEventListener("click", () => els.importDataFile.click());
  els.importDataFile.addEventListener("change", importDashboardData);
}

function exportDashboardData() {
  const backup = {
    application: "tableau-de-bord-hg",
    version: 1,
    exportedAt: new Date().toISOString(),
    students: els.studentNames.value,
    shortcuts,
    settings: {
      theme: localStorage.getItem(storageKeys.theme),
      language: currentLanguage,
      timerSound: selectedTimerSound,
      helpBoard,
      correctionTags: [...visibleCorrectionTags],
      homeTools: homeToolSettings,
    },
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `tableau-de-bord-hg-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

async function importDashboardData(event) {
  const [file] = event.target.files;
  if (!file) return;
  try {
    const backup = JSON.parse(await file.text());
    if (backup?.application !== "tableau-de-bord-hg" || backup.version !== 1 || typeof backup.students !== "string" || !Array.isArray(backup.shortcuts)) {
      throw new Error("Invalid backup");
    }
    const settings = backup.settings && typeof backup.settings === "object" ? backup.settings : {};
    localStorage.setItem(storageKeys.students, backup.students);
    localStorage.setItem(storageKeys.shortcuts, JSON.stringify(backup.shortcuts));
    if (["light", "dark"].includes(settings.theme)) localStorage.setItem(storageKeys.theme, settings.theme);
    if (["fr", "en"].includes(settings.language)) localStorage.setItem(storageKeys.language, settings.language);
    if (typeof settings.timerSound === "string") localStorage.setItem(storageKeys.timerSound, settings.timerSound);
    if (settings.helpBoard && typeof settings.helpBoard === "object") localStorage.setItem(storageKeys.helpBoard, JSON.stringify(settings.helpBoard));
    if (Array.isArray(settings.correctionTags)) localStorage.setItem(storageKeys.correctionTags, JSON.stringify(settings.correctionTags));
    if (settings.homeTools && typeof settings.homeTools === "object") localStorage.setItem(storageKeys.homeTools, JSON.stringify(settings.homeTools));

    els.studentNames.value = backup.students;
    shortcuts = loadShortcuts();
    helpBoard = loadHelpBoard();
    visibleCorrectionTags = loadVisibleCorrectionTags();
    homeToolSettings = loadHomeToolSettings();
    currentLanguage = localStorage.getItem(storageKeys.language) || "fr";
    selectedTimerSound = localStorage.getItem(storageKeys.timerSound) || "bell";
    document.body.classList.toggle("dark", localStorage.getItem(storageKeys.theme) === "dark");
    applyLanguage();
    renderShortcuts();
    renderHomeTools();
    renderHelpBoard();
    renderCorrectionTags();
    generateGroups();
    renderWheel();
    showToast(tr("backupImported"));
  } catch {
    showToast(tr("backupInvalid"));
  } finally {
    event.target.value = "";
  }
}

function normaliseUrl(value) {
  if (!value) return "";
  const url = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  try {
    const parsed = new URL(url);
    return ["http:", "https:"].includes(parsed.protocol) ? parsed.href : "";
  } catch {
    return "";
  }
}

function loadShortcuts() {
  const stored = loadJson(storageKeys.shortcuts, []);
  return Array.isArray(stored)
    ? stored.filter((shortcut) => shortcut && typeof shortcut.id === "string" && typeof shortcut.name === "string" && normaliseUrl(shortcut.url))
    : [];
}

function saveShortcuts() {
  localStorage.setItem(storageKeys.shortcuts, JSON.stringify(shortcuts));
}

function renderShortcuts() {
  if (!els.shortcutList) return;
  if (!shortcuts.length) {
    els.shortcutList.innerHTML = `<p class="shortcut-empty">${escapeHtml(tr("shortcutEmpty"))}</p>`;
    return;
  }

  els.shortcutList.innerHTML = shortcuts.map((shortcut) => {
    const hostname = new URL(shortcut.url).hostname;
    const faviconUrl = `https://www.google.com/s2/favicons?domain=${encodeURIComponent(hostname)}&sz=64`;
    return `
      <article class="shortcut-item">
        <a href="${escapeHtml(shortcut.url)}" target="_blank" rel="noopener noreferrer">
          <span class="shortcut-link-icon" aria-hidden="true"><span>↗</span><img src="${faviconUrl}" alt=""></span>
          <span><strong>${escapeHtml(shortcut.name)}</strong><small>${escapeHtml(hostname)}</small></span>
        </a>
        <button class="icon-button shortcut-remove" type="button" data-shortcut-remove="${escapeHtml(shortcut.id)}" aria-label="${escapeHtml(tr("shortcutRemove"))}" title="${escapeHtml(tr("shortcutRemove"))}">×</button>
      </article>
    `;
  }).join("");
}

function bindLanguage() {
  els.langToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "fr" ? "en" : "fr";
    localStorage.setItem(storageKeys.language, currentLanguage);
    applyLanguage();
    updateDate();
    renderCalendar();
    updateMap();
    updateTimerDisplay();
    renderTimeline();
  });
}

function tr(key) {
  return translations[currentLanguage][key] || translations.fr[key] || key;
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage;
  els.langToggle.textContent = tr("langButton");
  els.langToggle.setAttribute("aria-label", tr("langLabel"));
  els.langToggle.setAttribute("title", tr("langLabel"));
  const navLabels = document.querySelectorAll(".tool-nav .nav-label");
  tr("nav").forEach((label, index) => {
    if (navLabels[index]) navLabels[index].textContent = label;
  });

  document.querySelector("h1").innerHTML = `${escapeHtml(tr("title"))} <span class="beta-badge">BETA</span>`;
  document.querySelector(".subtitle").textContent = tr("subtitle");
  document.querySelector("#homeTitle").textContent = tr("homeToolsTitle");
  document.querySelector("#homeIntro").textContent = tr("homeToolsIntro");
  document.querySelector("#shortcutsTitle").textContent = tr("homeShortcutsTitle");
  document.querySelector("#shortcutsIntro").textContent = tr("homeShortcutsIntro");
  document.querySelector("#backupTitle").textContent = tr("backupTitle");
  document.querySelector("#backupIntro").textContent = tr("backupIntro");
  els.exportData.textContent = tr("exportData");
  els.importData.textContent = tr("importData");
  document.querySelector("#shortcutNameLabel").textContent = tr("shortcutName");
  document.querySelector("#shortcutUrlLabel").textContent = tr("shortcutUrl");
  els.shortcutForm.querySelector("button").textContent = tr("shortcutAdd");
  document.querySelector("#timerTitle").textContent = tr("timerTitle");
  document.querySelector(".pomodoro-modes [data-mode='work']").textContent = tr("work");
  document.querySelector(".pomodoro-modes [data-mode='short']").textContent = tr("short");
  document.querySelector("#durationMinutesInput").previousElementSibling.textContent = tr("duration");
  document.querySelector("#timerSoundSelect").previousElementSibling.textContent = tr("sound");
  els.testTimerSound.textContent = tr("testSound");
  els.startTimer.textContent = timer.running ? tr("resume") : tr("start");
  els.pauseTimer.textContent = tr("pause");
  els.skipTimer.textContent = tr("next");
  els.resetTimer.textContent = tr("reset");
  document.querySelector("#mapTitle").textContent = tr("mapsTitle");
  updateMapMenuLabels();
  document.querySelector("#osmTitle").textContent = tr("osmTitle");
  document.querySelector("#groupsTitle").textContent = tr("groupsTitle");
  document.querySelector("#helpNeedsTitle").textContent = tr("helpNeedsTitle");
  document.querySelector("#helpOffersTitle").textContent = tr("helpOffersTitle");
  document.querySelector("#helpNeedsGuidanceSummary").textContent = tr("helpGuidanceToggle");
  document.querySelector("#helpOffersGuidanceSummary").textContent = tr("helpGuidanceToggle");
  renderHelpGuidance("#helpNeedsGuidance", tr("helpNeedsGuidance"));
  renderHelpGuidance("#helpOffersGuidance", tr("helpOffersGuidance"));
  els.helpNeedInput.placeholder = tr("helpNeedPlaceholder");
  els.helpNeedInput.setAttribute("aria-label", tr("helpNeedPlaceholder"));
  els.helpOfferInput.placeholder = tr("helpOfferPlaceholder");
  els.helpOfferInput.setAttribute("aria-label", tr("helpOfferPlaceholder"));
  els.helpNeedForm.querySelector("button").textContent = tr("helpAdd");
  els.helpOfferForm.querySelector("button").textContent = tr("helpAdd");
  document.querySelector("#groupsModeGroups").textContent = tr("groupsView");
  document.querySelector("#groupsModeWheel").textContent = tr("wheelView");
  els.openNamesModal.textContent = tr("namesButton");
  els.shuffleStudentNames.textContent = tr("shuffle");
  els.saveNamesModal.textContent = tr("saveNames");
  document.querySelector(".names-help").textContent = tr("namesHelp");
  document.querySelector("#instructionsTitle").textContent = tr("instructionsTitle");
  document.querySelector("#correctionTagsTitle").textContent = tr("correctionTagsTitle");
  document.querySelector("#correctionTagsDialogTitle").textContent = tr("correctionTagsDialogTitle");
  els.selectAllCorrectionTags.textContent = tr("correctionTagsSelectAll");
  els.deselectAllCorrectionTags.textContent = tr("correctionTagsDeselectAll");
  els.correctionTagsDialog.querySelectorAll("button[type='submit']").forEach((button) => {
    if (!button.classList.contains("icon-button")) button.textContent = tr("correctionTagsValidate");
  });
  document.querySelector("#proofreadingTitle").textContent = tr("proofreadingTitle");
  document.querySelector("#timelineTitle").textContent = tr("timelineTitle");
  const timelinePeriods = tr("timelinePeriods");
  const periodFilter = document.querySelector("#periodFilter");
  if (periodFilter) {
    [...periodFilter.options].forEach((option) => {
      option.textContent = option.value === "Tous"
        ? tr("allPeriods")
        : timelinePeriods[option.value] || option.value;
    });
  }
  const timelineLegend = document.querySelector(".timeline-period-legend");
  if (timelineLegend) {
    timelineLegend.setAttribute("aria-label", tr("timelinePeriodLegend"));
    [...timelineLegend.querySelectorAll("span")].forEach((item, index) => {
      const period = ["Préhistoire", "Antiquité", "Moyen Âge", "Temps modernes", "Époque contemporaine"][index];
      item.textContent = timelinePeriods[period] || period;
    });
  }
  document.querySelector("#osmSearchForm button[type='submit']").textContent = tr("search");
  document.querySelector("#generateGroups").textContent = tr("generate");
  els.groupMode.querySelector("option[value='size']").textContent = tr("groupsOfSize");
  els.groupMode.querySelector("option[value='count']").textContent = tr("numberOfGroups");
  els.spinWheel.textContent = tr("spinWheel");
  els.resetWheel.textContent = tr("resetWheel");
  if (!els.wheelWinner.dataset.hasWinner) {
    els.wheelWinner.textContent = tr("noStudents");
  }
  setLabelText("#osmQuery", tr("location"));
  setLabelText("#osmLayer", tr("layer"));
  setLabelText("#cartesGouvLayer", tr("layer"));
  updateCartesGouvLayerLabels();
  updateOsmProviderUi();
  setLabelText("#studentNames", tr("students"));
  setLabelText("#groupSize", tr("size"));
  setLabelText("#groupMode", tr("mode"));
  if (generatedGroupNames.length) {
    generatedGroupNames = generatedGroupNames.map((name, index) => (
      /^(Groupe|Group) \d+$/.test(name.trim()) ? defaultGroupName(index) : name
    ));
    updateGroupsText();
    renderGeneratedGroups();
  }
  renderCorrectionTags();
  renderHomeTools();
  renderShortcuts();
  renderHelpBoard();
  renderProofreading();
  updatePageHeader(getInitialToolId());
}

function setLabelText(inputSelector, labelText) {
  const label = document.querySelector(`${inputSelector}`)?.closest("label");
  const span = label?.querySelector("span");
  if (span) span.textContent = labelText;
}

function updateMapMenuLabels() {
  setLabelText("#thematicMapSelect", tr("thematicMapsLabel"));
  setLabelText("#baseMapSelect", tr("blankMapsLabel"));
  updateMapSelectLabels(els.thematicMapSelect, tr("thematicMapLabels"));
  updateMapSelectLabels(els.baseMapSelect, tr("blankMapLabels"));
}

function updateMapSelectLabels(select, labels) {
  if (!select) return;
  select.querySelector("option[value='']").textContent = tr("mapChoose");
  select.querySelectorAll("optgroup").forEach((group) => {
    group.label = group.querySelector("option")?.value.startsWith("world-")
      ? tr("mapWorldGroup")
      : tr("mapRegionsGroup");
  });
  select.querySelectorAll("option[value]:not([value=''])").forEach((option) => {
    option.textContent = labels[option.value] || option.textContent;
  });
}

function updateDate() {
  const now = new Date();
  els.weekdayLabel.textContent = new Intl.DateTimeFormat(tr("locale"), { weekday: "long" }).format(now);
  els.dateLabel.textContent = new Intl.DateTimeFormat(tr("locale"), { day: "2-digit", month: "long", year: "numeric" }).format(now);
  els.clockLabel.textContent = new Intl.DateTimeFormat(tr("locale"), { hour: "2-digit", minute: "2-digit", second: "2-digit" }).format(now);
  renderWeekStrip(now);
}

function renderWeekStrip(date) {
  const weekdays = currentLanguage === "fr"
    ? ["L", "M", "M", "J", "V", "S", "D"]
    : ["M", "T", "W", "T", "F", "S", "S"];
  const activeIndex = (date.getDay() + 6) % 7;
  els.weekStrip.innerHTML = weekdays.map((day, index) => {
    const classes = [
      "week-block",
      index === activeIndex ? "is-today" : "",
      index >= 5 ? "is-weekend" : ""
    ].filter(Boolean).join(" ");
    return `<span class="${classes}" aria-current="${index === activeIndex ? "date" : "false"}">${day}</span>`;
  }).join("");
}

function bindCalendar() {
  els.calendarPrev.addEventListener("click", (event) => {
    event.stopPropagation();
    calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() - 1, 1);
    renderCalendar();
  });

  els.calendarNext.addEventListener("click", (event) => {
    event.stopPropagation();
    calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() + 1, 1);
    renderCalendar();
  });
}

function renderCalendar() {
  const now = new Date();
  const year = calendarCursor.getFullYear();
  const month = calendarCursor.getMonth();
  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const leadingBlanks = (firstDay.getDay() + 6) % 7;
  const weekdays = currentLanguage === "fr" ? ["L", "M", "M", "J", "V", "S", "D"] : ["M", "T", "W", "T", "F", "S", "S"];

  els.calendarMonthLabel.textContent = new Intl.DateTimeFormat(tr("locale"), { month: "long", year: "numeric" }).format(calendarCursor);
  els.calendarGrid.innerHTML = [
    ...weekdays.map((day, index) => `<div class="calendar-weekday${index >= 5 ? " is-weekend" : ""}">${day}</div>`),
    ...Array.from({ length: leadingBlanks }, () => `<div class="calendar-day is-muted" aria-hidden="true"></div>`),
    ...Array.from({ length: daysInMonth }, (_, index) => {
      const day = index + 1;
      const isToday = day === now.getDate() && month === now.getMonth() && year === now.getFullYear();
      const dayIndex = (leadingBlanks + index) % 7;
      const isWeekend = dayIndex >= 5;
      return `<div class="calendar-day${isWeekend ? " is-weekend" : ""}${isToday ? " is-today" : ""}"${isToday ? ' aria-current="date"' : ""}>${day}</div>`;
    })
  ].join("");
}

function bindTimer() {
  els.themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(storageKeys.theme, document.body.classList.contains("dark") ? "dark" : "light");
  });

  document.querySelectorAll(".pomodoro-modes [data-mode]").forEach((button) => {
    button.addEventListener("click", () => setPomodoroMode(button.dataset.mode));
  });

  els.durationMinutesInput.addEventListener("input", () => {
    timerDurations[timer.mode] = Math.max(1, Number(els.durationMinutesInput.value) || getDefaultModeMinutes(timer.mode));
    if (!timer.running) {
      resetTimer();
    }
  });

  els.timerSoundSelect.value = timerSounds[selectedTimerSound] ? selectedTimerSound : "bell";
  selectedTimerSound = els.timerSoundSelect.value;
  els.timerSoundSelect.addEventListener("change", () => {
    selectedTimerSound = els.timerSoundSelect.value;
    localStorage.setItem(storageKeys.timerSound, selectedTimerSound);
  });
  els.testTimerSound.addEventListener("click", playTimerSound);

  els.startTimer.addEventListener("click", startTimer);
  els.pauseTimer.addEventListener("click", pauseTimer);
  els.skipTimer.addEventListener("click", advancePomodoro);
  els.resetTimer.addEventListener("click", resetTimer);

  document.addEventListener("keydown", (event) => {
    const target = event.target.closest("input, textarea, select, button");
    if (event.code === "Space" && !target) {
      event.preventDefault();
      timer.running ? pauseTimer() : startTimer();
    }
  });
}

function setPomodoroMode(mode) {
  pauseTimer();
  timer.mode = mode;
  els.durationMinutesInput.value = timerDurations[mode] || getDefaultModeMinutes(mode);
  timer.initial = getModeSeconds(mode);
  timer.remaining = timer.initial;
  timer.endAt = null;
  els.timerCard.dataset.mode = mode;
  els.startTimer.textContent = tr("start");
  els.timerFace.classList.remove("done");
  document.querySelectorAll(".pomodoro-modes [data-mode]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === mode);
  });
  updateTimerDisplay();
}

function resetTimer() {
  pauseTimer();
  timer.initial = getModeSeconds(timer.mode);
  timer.remaining = timer.initial;
  timer.endAt = null;
  els.startTimer.textContent = tr("start");
  els.timerFace.classList.remove("done");
  updateTimerDisplay();
}

function getModeSeconds(mode) {
  return Math.max(1, timerDurations[mode] || getDefaultModeMinutes(mode)) * 60;
}

function getDefaultModeMinutes(mode) {
  return mode === "short" ? 5 : 10;
}

function startTimer() {
  if (timer.running) return;
  if (timer.remaining <= 0) resetTimer();
  if (timer.remaining <= 0) return;
  timer.running = true;
  timer.endAt = Date.now() + timer.remaining * 1000;
  els.startTimer.textContent = tr("resume");
  els.pauseTimer.disabled = false;
  els.timerFace.classList.remove("done");
  timer.interval = setInterval(tickTimer, 150);
  tickTimer();
}

function pauseTimer() {
  timer.running = false;
  clearInterval(timer.interval);
  els.pauseTimer.disabled = true;
  if (timer.endAt) {
    timer.remaining = Math.max(0, Math.ceil((timer.endAt - Date.now()) / 1000));
  }
  timer.endAt = null;
  updateTimerDisplay();
}

function tickTimer() {
  timer.remaining = Math.max(0, Math.ceil((timer.endAt - Date.now()) / 1000));
  updateTimerDisplay();
  if (timer.remaining <= 0) {
    pauseTimer();
    els.timerFace.classList.add("done");
    playTimerSound();
    setTimeout(advancePomodoro, 900);
  }
}

function updateTimerDisplay() {
  const minutes = Math.floor(timer.remaining / 60);
  const seconds = timer.remaining % 60;
  els.timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  const progress = timer.initial > 0 ? Math.max(0, (timer.remaining / timer.initial) * 100) : 100;
  els.timerFace.style.setProperty("--progress", `${progress}%`);
  els.timerModeLabel.textContent = getModeLabel(timer.mode);
  els.timerPercent.textContent = `${Math.round(progress)}% ${tr("remaining")}`;
  renderRoundDots();
  updateTimerStatus(progress);
}

function updateTimerStatus(progress) {
  els.timerStatus.classList.toggle("is-warning", progress <= 50 && progress > 20);
  els.timerStatus.classList.toggle("is-urgent", progress <= 20);

  if (timer.remaining <= 0 && timer.initial > 0) {
    els.timerStatus.textContent = tr("finished").replace("{mode}", getModeLabel(timer.mode));
    return;
  }

  const minutes = Math.floor(timer.remaining / 60);
  const seconds = timer.remaining % 60;
  const readable = minutes > 0
    ? `${minutes} min ${String(seconds).padStart(2, "0")} s`
    : `${seconds} s`;

  if (progress <= 20) {
    els.timerStatus.textContent = `${tr("warning")} ${readable}.`;
  } else if (progress <= 50) {
    els.timerStatus.textContent = tr("nearingEnd").replace("{time}", readable);
  } else {
    els.timerStatus.textContent = `${getModeLabel(timer.mode)} ${tr("running")} ${readable}.`;
  }
}

function advancePomodoro() {
  pauseTimer();
  els.timerFace.classList.remove("done");

  if (timer.mode === "work") {
    setPomodoroMode("short");
    return;
  }

  setPomodoroMode("work");
}

function getModeLabel(mode) {
  if (mode === "short") return tr("short");
  return tr("work");
}

function renderRoundDots() {
  els.roundDots.innerHTML = `
    <span class="round-dot${timer.mode === "work" ? " is-current" : " is-done"}"></span>
    <span class="round-dot${timer.mode === "short" ? " is-current" : ""}"></span>
  `;
}

function playTimerSound() {
  const sound = timerSounds[selectedTimerSound] || timerSounds.bell;
  const audio = new Audio(sound.src);
  audio.currentTime = 0;
  audio.play().catch(beepFallback);
}

function beepFallback() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const context = new AudioContext();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = "sine";
  oscillator.frequency.value = 880;
  oscillator.connect(gain);
  gain.connect(context.destination);
  gain.gain.setValueAtTime(0.0001, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.2, context.currentTime + 0.03);
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.8);
  oscillator.start();
  oscillator.stop(context.currentTime + 0.85);
}

function bindMap() {
  els.thematicMapSelect.addEventListener("change", () => {
    if (!els.thematicMapSelect.value) return;
    currentMapId = els.thematicMapSelect.value;
    els.baseMapSelect.value = "";
    resetMapZoom();
    updateMap();
  });
  els.baseMapSelect.addEventListener("change", () => {
    if (!els.baseMapSelect.value) return;
    currentMapId = els.baseMapSelect.value;
    els.thematicMapSelect.value = "";
    resetMapZoom();
    updateMap();
  });
  els.mapZoomIn.addEventListener("click", () => setMapZoom(mapZoom + 0.25));
  els.mapZoomOut.addEventListener("click", () => setMapZoom(mapZoom - 0.25));
  els.mapZoomReset.addEventListener("click", resetMapZoom);
  els.mapFullscreen.addEventListener("click", toggleMapFullscreen);
  els.mapExitFullscreen.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    closeMapFullscreen();
  });

  els.osmSearchForm.addEventListener("submit", searchOpenStreetMap);
  els.osmLayer.addEventListener("change", updateOsmFrame);
  els.cartesGouvLayer.addEventListener("change", updateCartesGouvFrame);
  els.osmProviderOsm.addEventListener("click", () => setOsmProvider("osm"));
  els.osmProviderCartesGouv.addEventListener("click", () => setOsmProvider("cartesgouv"));
  els.osmProviderHistory.addEventListener("click", () => setOsmProvider("history"));
  els.osmResize.addEventListener("click", toggleOsmFullscreen);
  els.osmExitFullscreen.addEventListener("click", closeOsmFullscreen);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && els.osmCard.classList.contains("is-fullscreen")) {
      closeOsmFullscreen();
    }
    if (event.key === "Escape" && els.mapCard.classList.contains("is-fullscreen")) {
      closeMapFullscreen();
    }
    if (event.key === "Escape" && els.timelineCard.classList.contains("is-fullscreen")) {
      closeTimelineFullscreen();
    }
  });
}

function setMapZoom(value) {
  mapZoom = Math.max(1, Math.min(4, value));
  els.mapStage.style.setProperty("--map-zoom", mapZoom);
  els.mapZoomOut.disabled = mapZoom <= 1;
  els.mapZoomIn.disabled = mapZoom >= 4;
}

function resetMapZoom() {
  setMapZoom(1);
}

function toggleMapFullscreen() {
  els.mapCard.classList.contains("is-fullscreen") ? closeMapFullscreen() : openMapFullscreen();
}

function openMapFullscreen() {
  resetMapZoom();
  els.mapCard.classList.add("is-fullscreen");
  document.body.classList.add("has-fullscreen-tool");
  els.mapFullscreen.setAttribute("aria-label", "Quitter le plein écran de la carte");
  els.mapFullscreen.title = "Quitter le plein écran";
}

function closeMapFullscreen() {
  els.mapCard.classList.remove("is-fullscreen");
  document.body.classList.remove("has-fullscreen-tool");
  els.mapFullscreen.setAttribute("aria-label", "Agrandir la carte");
  els.mapFullscreen.title = "Agrandir";
}

function toggleOsmFullscreen() {
  els.osmCard.classList.contains("is-fullscreen") ? closeOsmFullscreen() : openOsmFullscreen();
}

function openOsmFullscreen() {
  els.osmCard.classList.add("is-fullscreen");
  document.body.classList.add("has-fullscreen-tool");
  els.osmResize.setAttribute("aria-label", "Quitter le plein écran OpenStreetMap");
  els.osmResize.title = "Quitter le plein écran";
}

function closeOsmFullscreen() {
  els.osmCard.classList.remove("is-fullscreen");
  document.body.classList.remove("has-fullscreen-tool");
  els.osmResize.setAttribute("aria-label", "Mettre OpenStreetMap en plein écran");
  els.osmResize.title = "Plein écran";
}

function toggleTimelineFullscreen() {
  els.timelineCard.classList.contains("is-fullscreen") ? closeTimelineFullscreen() : openTimelineFullscreen();
}

function openTimelineFullscreen() {
  els.timelineCard.classList.add("is-fullscreen");
  document.body.classList.add("has-fullscreen-tool");
  els.timelineResize.setAttribute("aria-label", "Réduire les frises");
  els.timelineResize.title = "Réduire";
  renderTimeline();
  requestAnimationFrame(updateTimelineAxisLength);
}

function closeTimelineFullscreen() {
  els.timelineCard.classList.remove("is-fullscreen");
  document.body.classList.remove("has-fullscreen-tool");
  els.timelineResize.setAttribute("aria-label", "Agrandir les frises");
  els.timelineResize.title = "Agrandir";
  renderTimeline();
  requestAnimationFrame(updateTimelineAxisLength);
}

async function searchOpenStreetMap(event) {
  event.preventDefault();
  if (osmProvider !== "osm") return;
  const query = els.osmQuery.value.trim();
  if (!query) return;

  els.osmResult.textContent = "Recherche en cours...";

  try {
    const params = new URLSearchParams({
      q: query,
      format: "jsonv2",
      limit: "1"
    });
    const response = await fetch(`https://nominatim.openstreetmap.org/search?${params.toString()}`, {
      headers: { Accept: "application/json" }
    });
    if (!response.ok) throw new Error("Recherche indisponible");

    const results = await response.json();
    if (!Array.isArray(results) || !results.length) {
      els.osmResult.textContent = "Aucun lieu trouve.";
      return;
    }

    const place = results[0];
    const lat = Number(place.lat);
    const lon = Number(place.lon);
    const delta = getOsmDelta(place);
    osmState = { lat, lon, delta, label: place.display_name };
    updateOsmFrame();
    els.osmResult.dataset.hasSearch = "true";
    els.osmResult.innerHTML = `${escapeHtml(place.display_name)} · <a href="https://www.openstreetmap.org/?mlat=${lat.toFixed(5)}&mlon=${lon.toFixed(5)}#map=10/${lat.toFixed(5)}/${lon.toFixed(5)}" target="_blank" rel="noopener">Ouvrir dans OpenStreetMap</a>`;
  } catch (error) {
    els.osmResult.textContent = "Recherche impossible pour le moment.";
  }
}

function updateOsmFrame() {
  if (osmProvider !== "osm") return;
  const { lat, lon, delta } = osmState;
  const layer = els.osmLayer.value;
  const bbox = [
    lon - delta.lon,
    lat - delta.lat,
    lon + delta.lon,
    lat + delta.lat
  ].map((value) => value.toFixed(5)).join("%2C");
  const marker = `${lat.toFixed(5)}%2C${lon.toFixed(5)}`;

  if (layer === "topo") {
    els.osmFrame.src = `https://opentopomap.org/#map=10/${lat.toFixed(5)}/${lon.toFixed(5)}`;
    return;
  }

  const osmLayer = layer === "transport" ? "transportmap" : "mapnik";
  els.osmFrame.src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=${osmLayer}&marker=${marker}`;
}

function setOsmProvider(provider) {
  if (provider === osmProvider) return;
  osmProvider = provider;
  delete els.osmResult.dataset.hasSearch;
  if (provider === "cartesgouv") {
    updateCartesGouvFrame();
  } else if (provider === "history") {
    els.osmFrame.src = getHistoryMapUrl();
  } else {
    updateOsmFrame();
  }
  updateOsmProviderUi();
}

function getHistoryMapUrl() {
  return "https://remonterletemps.ign.fr/comparer/?lon=2.347000&lat=48.859000&z=14&pointer=true&layer1=10&layer2=19&mode=split-h";
}

function getCartesGouvUrl() {
  const layers = {
    plan: "GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2$GEOPORTAIL:OGC:WMTS(1;1;1;0)",
    aerial: "ORTHOIMAGERY.ORTHOPHOTOS$GEOPORTAIL:OGC:WMTS(1;1;1;0)",
    aerial1965: "ORTHOIMAGERY.ORTHOPHOTOS.1965-1980$GEOPORTAIL:OGC:WMTS(1;1;1;0)",
    aerial1950: "ORTHOIMAGERY.ORTHOPHOTOS.1950-1965$GEOPORTAIL:OGC:WMTS(1;1;1;0)",
    topo: "GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN25TOUR$GEOPORTAIL:OGC:WMTS(1;1;1;0)",
    cadastre: "CADASTRALPARCELS.PARCELS$GEOPORTAIL:OGC:WMTS(1;1;1;0)",
    etatMajor: "GEOGRAPHICALGRIDSYSTEMS.ETATMAJOR40$GEOPORTAIL:OGC:WMTS(1;1;1;0)",
    cassini: "BNF-IGNF_GEOGRAPHICALGRIDSYSTEMS.CASSINI$GEOPORTAIL:OGC:WMTS(1;1;1;0)",
  };
  const params = new URLSearchParams({
    c: "2.2137,46.2276",
    l: layers[els.cartesGouvLayer.value] || layers.plan,
    permalink: "yes",
    z: "6",
  });
  return `https://cartes.gouv.fr/explorer-les-cartes/?${params.toString()}`;
}

function updateCartesGouvFrame() {
  if (osmProvider !== "cartesgouv") return;
  const url = getCartesGouvUrl();
  const pagePosition = { x: window.scrollX, y: window.scrollY };
  els.osmFrame.addEventListener("load", () => {
    window.scrollTo(pagePosition.x, pagePosition.y);
  }, { once: true });
  els.osmFrame.src = url;
  els.osmOpenCartesGouv.href = url;
  els.osmResult.textContent = currentLanguage === "en"
    ? `${els.cartesGouvLayer.selectedOptions[0].textContent} layer displayed for France.`
    : `Couche « ${els.cartesGouvLayer.selectedOptions[0].textContent} » affichée pour la France.`;
}

function updateCartesGouvLayerLabels() {
  const labels = currentLanguage === "en"
    ? ["IGN map", "Aerial imagery", "Aerial imagery 1965-1980", "Aerial imagery 1950-1965", "Topographic map", "Cadastre", "General Staff Map 1820-1866", "Cassini map"]
    : ["Plan IGN", "Photographies aériennes", "Photographies aériennes 1965-1980", "Photographies aériennes 1950-1965", "Carte topographique", "Cadastre", "Carte de l'État-major 1820-1866", "Carte de Cassini"];
  Array.from(els.cartesGouvLayer.options).forEach((option, index) => {
    option.textContent = labels[index];
  });
}

function updateOsmProviderUi() {
  const usesCartesGouv = osmProvider === "cartesgouv";
  const usesHistory = osmProvider === "history";
  const usesOsm = osmProvider === "osm";
  els.osmCard.dataset.provider = osmProvider;
  els.osmProviderOsm.classList.toggle("is-active", usesOsm);
  els.osmProviderOsm.setAttribute("aria-pressed", String(usesOsm));
  els.osmProviderOsm.textContent = tr("osmProviderOsm");
  els.osmProviderCartesGouv.classList.toggle("is-active", usesCartesGouv);
  els.osmProviderCartesGouv.setAttribute("aria-pressed", String(usesCartesGouv));
  els.osmProviderCartesGouv.textContent = tr("osmProviderCartesGouv");
  els.osmProviderHistory.classList.toggle("is-active", usesHistory);
  els.osmProviderHistory.setAttribute("aria-pressed", String(usesHistory));
  els.osmProviderHistory.textContent = tr("osmProviderHistory");
  els.osmOpenCartesGouv.hidden = usesOsm;
  els.osmOpenCartesGouv.textContent = usesHistory ? tr("osmOpenHistory") : tr("osmOpenCartesGouv");
  if (usesCartesGouv) {
    els.osmOpenCartesGouv.href = getCartesGouvUrl();
  } else if (usesHistory) {
    els.osmOpenCartesGouv.href = getHistoryMapUrl();
  }
  document.querySelector("#osmTitle").textContent = usesHistory
    ? tr("osmProviderHistory")
    : usesCartesGouv ? tr("osmProviderCartesGouv") : tr("osmTitle");
  if (usesCartesGouv) {
    els.osmResult.textContent = tr("osmCartesGouvHint");
  } else if (usesHistory) {
    els.osmResult.textContent = tr("osmHistoryHint");
  } else if (!els.osmResult.dataset.hasSearch) {
    els.osmResult.textContent = currentLanguage === "en"
      ? "Map centered on Paris. Search for a place to move the map."
      : "Carte centree sur Paris. Lancez une recherche pour changer de lieu.";
  }
}

function getOsmDelta(place) {
  if (Array.isArray(place.boundingbox) && place.boundingbox.length === 4) {
    const south = Number(place.boundingbox[0]);
    const north = Number(place.boundingbox[1]);
    const west = Number(place.boundingbox[2]);
    const east = Number(place.boundingbox[3]);
    return {
      lat: Math.max(0.02, Math.min(6, (north - south) * 0.8 || 0.08)),
      lon: Math.max(0.02, Math.min(6, (east - west) * 0.8 || 0.08))
    };
  }

  return { lat: 0.08, lon: 0.12 };
}

function updateMap() {
  const map = mapDefinitions[currentMapId] || mapDefinitions["world-reliefs-thematic"];
  els.mapImage.src = localizedMapValue(map.src);
  els.mapImage.alt = localizedMapValue(map.alt);
  const caption = localizedMapValue(map.caption);
  els.mapCaption.hidden = !caption;
  els.mapCaption.textContent = caption;
  if (map.source) {
    els.mapSource.hidden = false;
    els.mapSource.innerHTML = localizedMapValue(map.source);
  } else {
    els.mapSource.hidden = true;
    els.mapSource.textContent = "";
  }
}

function localizedMapValue(value) {
  if (typeof value === "string") return value;
  return value?.[currentLanguage] || value?.fr || "";
}

function bindGroups() {
  els.studentNames.addEventListener("input", () => {
    localStorage.setItem(storageKeys.students, els.studentNames.value);
    syncRemovedWheelNames();
    renderWheel();
  });
  els.openNamesModal.addEventListener("click", openNamesDialog);
  els.closeNamesModal.addEventListener("click", closeNamesDialog);
  els.saveNamesModal.addEventListener("click", closeNamesDialog);
  els.namesDialog.addEventListener("click", (event) => {
    if (event.target === els.namesDialog) closeNamesDialog();
  });
  els.groupsTabs.forEach((button) => {
    button.addEventListener("click", () => setGroupsView(button.dataset.groupsView));
  });
  els.generateGroups.addEventListener("click", generateGroups);
  els.shuffleNames.addEventListener("click", shuffleStudentList);
  els.shuffleStudentNames.addEventListener("click", shuffleStudentList);
  els.groupOutput.addEventListener("click", (event) => {
    if (event.target.closest("[data-group-student-handle]")) return;
    if (event.target.closest("[data-group-name]")) return;
    const groupBox = event.target.closest("[data-group-index]");
    if (!groupBox) return;
    toggleGroupSelection(Number(groupBox.dataset.groupIndex));
  });
  els.groupOutput.addEventListener("keydown", (event) => {
    if (event.target.closest("[data-group-student-handle]")) return;
    if (event.target.closest("[data-group-name]")) return;
    if (event.key !== "Enter" && event.key !== " ") return;
    const groupBox = event.target.closest("[data-group-index]");
    if (!groupBox) return;
    event.preventDefault();
    toggleGroupSelection(Number(groupBox.dataset.groupIndex));
  });
  els.groupOutput.addEventListener("input", (event) => {
    const nameInput = event.target.closest("[data-group-name]");
    if (!nameInput) return;
    generatedGroupNames[Number(nameInput.dataset.groupName)] = nameInput.value;
    updateGroupsText();
  });
  els.groupOutput.addEventListener("dragstart", (event) => {
    const handle = event.target.closest("[data-group-student-handle]");
    if (!handle) return;
    const student = handle.closest("[data-group-student]");
    if (!student) return;
    draggedStudent = {
      fromGroup: Number(student.dataset.fromGroup),
      studentIndex: Number(student.dataset.studentIndex),
    };
    event.dataTransfer.effectAllowed = "move";
    student.classList.add("is-dragging");
  });
  els.groupOutput.addEventListener("dragover", (event) => {
    const groupBox = event.target.closest("[data-group-index]");
    if (!groupBox || !draggedStudent || Number(groupBox.dataset.groupIndex) === draggedStudent.fromGroup) return;
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    els.groupOutput.querySelectorAll(".is-drop-target").forEach((box) => box.classList.remove("is-drop-target"));
    groupBox.classList.add("is-drop-target");
  });
  els.groupOutput.addEventListener("drop", (event) => {
    const groupBox = event.target.closest("[data-group-index]");
    if (!groupBox || !draggedStudent) return;
    event.preventDefault();
    const targetGroup = Number(groupBox.dataset.groupIndex);
    if (targetGroup !== draggedStudent.fromGroup) {
      moveStudent(draggedStudent.fromGroup, draggedStudent.studentIndex, targetGroup);
    }
    draggedStudent = null;
  });
  els.groupOutput.addEventListener("dragend", () => {
    draggedStudent = null;
    els.groupOutput.querySelectorAll(".is-dragging, .is-drop-target").forEach((element) => element.classList.remove("is-dragging", "is-drop-target"));
  });
  els.spinWheel.addEventListener("click", spinWheel);
  els.resetWheel.addEventListener("click", resetWheel);
  els.wheelWinner.addEventListener("click", (event) => {
    if (event.target.closest("[data-remove-wheel-winner]")) {
      removeWheelWinner();
    }
  });
  els.copyGroups.addEventListener("click", async () => {
    if (!lastGroupsText) generateGroups();
    try {
      await navigator.clipboard.writeText(lastGroupsText);
      showToast("Groupes copies");
    } catch {
      showToast("Copie indisponible");
    }
  });
  els.groupsResize.addEventListener("click", () => {
    const expanded = els.groupsCard.classList.toggle("is-expanded");
    els.groupsResize.setAttribute("aria-label", expanded ? "Reduire la liste des groupes" : "Agrandir la liste des groupes");
    els.groupsResize.title = expanded ? "Reduire" : "Agrandir";
  });
  generateGroups();
  renderWheel();
}

function loadHelpBoard() {
  try {
    const stored = JSON.parse(localStorage.getItem(storageKeys.helpBoard) || "{}");
    return {
      needs: Array.isArray(stored.needs) ? stored.needs.filter(isHelpEntry) : [],
      offers: Array.isArray(stored.offers) ? stored.offers.filter(isHelpEntry) : []
    };
  } catch {
    return { needs: [], offers: [] };
  }
}

function isHelpEntry(entry) {
  return entry && typeof entry.id === "string" && typeof entry.label === "string";
}

function bindHelp() {
  els.helpNeedForm.addEventListener("submit", (event) => {
    addHelpEntry(event, "needs", els.helpNeedInput);
  });
  els.helpOfferForm.addEventListener("submit", (event) => {
    addHelpEntry(event, "offers", els.helpOfferInput);
  });
  els.helpNeedsList.addEventListener("click", (event) => removeHelpEntry(event, "needs"));
  els.helpOffersList.addEventListener("click", (event) => removeHelpEntry(event, "offers"));
}

function addHelpEntry(event, column, input) {
  event.preventDefault();
  const label = input.value.trim();
  if (!label) return;

  helpBoard[column].push({
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    label
  });
  saveHelpBoard();
  input.value = "";
  renderHelpBoard();
  input.focus();
}

function removeHelpEntry(event, column) {
  const button = event.target.closest("[data-help-entry]");
  if (!button) return;

  helpBoard[column] = helpBoard[column].filter((entry) => entry.id !== button.dataset.helpEntry);
  saveHelpBoard();
  renderHelpBoard();
}

function saveHelpBoard() {
  localStorage.setItem(storageKeys.helpBoard, JSON.stringify(helpBoard));
}

function renderHelpBoard() {
  renderHelpColumn(els.helpNeedsList, helpBoard.needs, tr("helpNeedsEmpty"));
  renderHelpColumn(els.helpOffersList, helpBoard.offers, tr("helpOffersEmpty"));
}

function renderHelpGuidance(selector, guidance) {
  const element = document.querySelector(selector);
  if (!element || !guidance) return;

  element.innerHTML = `
    <p>${escapeHtml(guidance.intro)}</p>
    <ul>${guidance.items.map((item) => `
      <li>
        <svg class="help-guidance-icon" viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9"></circle>
          <path d="m8 12 2.5 2.5L16 9"></path>
        </svg>
        <span>${escapeHtml(item)}</span>
      </li>
    `).join("")}</ul>
  `;
}

function renderHelpColumn(list, entries, emptyText) {
  if (!entries.length) {
    list.innerHTML = `<li class="help-empty">${escapeHtml(emptyText)}</li>`;
    return;
  }

  list.innerHTML = entries.map((entry) => `
    <li class="help-entry">
      <span>${escapeHtml(entry.label)}</span>
      <button class="icon-button help-remove" type="button" data-help-entry="${escapeHtml(entry.id)}" aria-label="${escapeHtml(tr("helpRemove"))}" title="${escapeHtml(tr("helpRemove"))}">×</button>
    </li>
  `).join("");
}

function shuffleStudentList() {
  const names = shuffle(getNames());
  els.studentNames.value = names.join("\n");
  localStorage.setItem(storageKeys.students, els.studentNames.value);
  syncRemovedWheelNames();
  generateGroups();
  renderWheel();
}

function openNamesDialog() {
  if (typeof els.namesDialog.showModal === "function") {
    els.namesDialog.showModal();
  } else {
    els.namesDialog.setAttribute("open", "");
  }
  els.studentNames.focus();
}

function closeNamesDialog() {
  els.namesDialog.close?.();
  els.namesDialog.removeAttribute("open");
  generateGroups();
  renderWheel();
}

function setGroupsView(view) {
  currentGroupsView = view === "wheel" ? "wheel" : "groups";
  els.groupsTabs.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.groupsView === currentGroupsView);
  });
  els.groupsGeneratorView.hidden = currentGroupsView !== "groups";
  els.groupsWheelView.hidden = currentGroupsView !== "wheel";
  els.groupsGeneratorView.classList.toggle("is-active", currentGroupsView === "groups");
  els.groupsWheelView.classList.toggle("is-active", currentGroupsView === "wheel");
  els.copyGroups.hidden = currentGroupsView !== "groups";
  if (currentGroupsView === "wheel") renderWheel();
}

function getNames() {
  return els.studentNames.value.split(/\n|,/).map((name) => name.trim()).filter(Boolean);
}

function getWheelNames() {
  return getNames().filter((name) => !removedWheelNames.has(name));
}

function syncRemovedWheelNames() {
  const existingNames = new Set(getNames());
  removedWheelNames = new Set([...removedWheelNames].filter((name) => existingNames.has(name)));
  if (lastWheelWinner && !existingNames.has(lastWheelWinner)) {
    lastWheelWinner = "";
  }
}

function generateGroups() {
  const names = shuffle(getNames());
  const value = Math.max(1, Number(els.groupSize.value) || 4);
  const groupCount = els.groupMode.value === "count" ? value : Math.ceil(names.length / value);
  const groups = Array.from({ length: Math.max(1, groupCount) }, () => []);
  names.forEach((name, index) => groups[index % groups.length].push(name));
  generatedGroups = groups;
  generatedGroupNames = groups.map((_, index) => defaultGroupName(index));
  selectedGroupIndex = null;
  els.groupOutput.classList.remove("has-selection");
  updateGroupsText();
  renderGeneratedGroups();
}

function renderGeneratedGroups() {
  els.groupOutput.innerHTML = generatedGroups.map((group, index) => `
    <article class="group-box" data-group-index="${index}" role="button" tabindex="0" aria-pressed="false" style="--accent: ${groupColor(index, generatedGroups.length)}">
      <h3><input class="group-name-input" data-group-name="${index}" type="text" value="${escapeHtml(generatedGroupNames[index])}" aria-label="Nom du groupe ${index + 1}" title="Renommer le groupe"></h3>
      <ol>${group.map((name, studentIndex) => renderGroupStudent(name, index, studentIndex)).join("")}</ol>
    </article>
  `).join("");
}

function renderGroupStudent(name, groupIndex, studentIndex) {
  if (generatedGroups.length < 2) return `<li>${escapeHtml(name)}</li>`;
  return `<li class="group-student" data-group-student data-from-group="${groupIndex}" data-student-index="${studentIndex}"><span>${escapeHtml(name)}</span><span class="group-student-handle" data-group-student-handle draggable="true" aria-label="${escapeHtml(tr("moveStudent"))}" title="${escapeHtml(tr("moveStudent"))}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v18M3 12h18"></path><path d="m8 7 4-4 4 4M8 17l4 4 4-4M7 8l-4 4 4 4M17 8l4 4-4 4"></path></svg></span></li>`;
}

function moveStudent(fromGroup, studentIndex, targetGroup) {
  if (fromGroup === targetGroup || !generatedGroups[fromGroup] || !generatedGroups[targetGroup]) return;
  const [student] = generatedGroups[fromGroup].splice(studentIndex, 1);
  if (!student) return;
  generatedGroups[targetGroup].push(student);
  selectedGroupIndex = null;
  els.groupOutput.classList.remove("has-selection");
  updateGroupsText();
  renderGeneratedGroups();
}

function updateGroupsText() {
  lastGroupsText = generatedGroups.map((group, index) => {
    const name = generatedGroupNames[index]?.trim() || defaultGroupName(index);
    return `${name}\n${group.map((student) => `- ${student}`).join("\n")}`;
  }).join("\n\n");
}

function defaultGroupName(index) {
  return tr("groupName").replace("{count}", index + 1);
}

function toggleGroupSelection(index) {
  selectedGroupIndex = selectedGroupIndex === index ? null : index;
  els.groupOutput.classList.toggle("has-selection", selectedGroupIndex !== null);
  els.groupOutput.querySelectorAll("[data-group-index]").forEach((groupBox) => {
    const isSelected = Number(groupBox.dataset.groupIndex) === selectedGroupIndex;
    groupBox.classList.toggle("is-selected", isSelected);
    groupBox.setAttribute("aria-pressed", String(isSelected));
  });
}

function renderWheel() {
  const names = getWheelNames();
  const segments = names.length || 1;
  const segmentAngle = 360 / segments;
  const colors = Array.from({ length: segments }, (_, index) => {
    const start = index * segmentAngle;
    const end = (index + 1) * segmentAngle;
    const color = names.length ? groupColor(index, segments) : "var(--panel-soft)";
    return `${color} ${start}deg ${end}deg`;
  }).join(", ");
  els.studentWheel.style.setProperty("--wheel-bg", `conic-gradient(${colors})`);
  if (!names.length) {
    els.wheelCenterText.textContent = "?";
    delete els.wheelWinner.dataset.hasWinner;
    els.wheelWinner.textContent = getNames().length ? tr("wheelEmpty") : tr("noStudents");
    lastWheelWinner = "";
  }
  els.wheelPoolStatus.textContent = tr("wheelPool").replace("{count}", names.length);
  renderWheelHistory(lastWheelWinner ? wheelHistory.slice(0, -1) : wheelHistory);
}

function spinWheel() {
  const names = getWheelNames();
  if (!names.length) {
    renderWheel();
    return;
  }
  const winnerIndex = Math.floor(Math.random() * names.length);
  const segmentAngle = 360 / names.length;
  const targetAngle = 360 - (winnerIndex * segmentAngle + segmentAngle / 2);
  wheelRotation += 1440 + targetAngle;
  els.studentWheel.classList.add("is-spinning");
  els.studentWheel.style.transform = `rotate(${wheelRotation}deg)`;
  playWheelSpinSound(2200);
  els.wheelCenterText.textContent = "...";
  els.spinWheel.disabled = true;
  wheelSpinTimeout = window.setTimeout(() => {
    els.studentWheel.classList.remove("is-spinning");
    els.spinWheel.disabled = false;
    const previousWinners = [...wheelHistory];
    lastWheelWinner = names[winnerIndex];
    wheelHistory.push(lastWheelWinner);
    els.wheelCenterText.textContent = shortenWheelLabel(lastWheelWinner);
    els.wheelWinner.dataset.hasWinner = "true";
    els.wheelWinner.innerHTML = formatWinnerText(lastWheelWinner);
    playWinnerCelebration();
    renderWheelHistory(previousWinners);
  }, 2200);
}

function resetWheel() {
  window.clearTimeout(wheelSpinTimeout);
  window.clearTimeout(wheelCelebrationTimeout);
  wheelRotation = 0;
  lastWheelWinner = "";
  wheelHistory = [];
  removedWheelNames.clear();
  els.studentWheel.classList.remove("is-spinning");
  els.wheelWinner.classList.remove("is-celebrating");
  els.studentWheel.style.transform = "rotate(0deg)";
  els.spinWheel.disabled = false;
  els.wheelCenterText.textContent = "?";
  delete els.wheelWinner.dataset.hasWinner;
  els.wheelWinner.textContent = tr("noStudents");
  renderWheel();
}

function playWinnerCelebration() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  window.clearTimeout(wheelCelebrationTimeout);
  els.wheelWinner.classList.remove("is-celebrating");
  void els.wheelWinner.offsetWidth;
  els.wheelWinner.classList.add("is-celebrating");
  wheelCelebrationTimeout = window.setTimeout(() => {
    els.wheelWinner.classList.remove("is-celebrating");
  }, 1350);
}

function playWheelSpinSound(duration) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  const context = new AudioContext();
  const now = context.currentTime;
  const tickCount = Math.floor(duration / 105);

  for (let index = 0; index < tickCount; index += 1) {
    const tickAt = now + index * 0.105;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "triangle";
    oscillator.frequency.setValueAtTime(620 + (index % 3) * 55, tickAt);
    gain.gain.setValueAtTime(0.0001, tickAt);
    gain.gain.exponentialRampToValueAtTime(0.075, tickAt + 0.004);
    gain.gain.exponentialRampToValueAtTime(0.0001, tickAt + 0.045);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(tickAt);
    oscillator.stop(tickAt + 0.05);
  }

  window.setTimeout(() => context.close(), duration + 180);
}

function removeWheelWinner() {
  if (!lastWheelWinner) return;
  removedWheelNames.add(lastWheelWinner);
  lastWheelWinner = "";
  els.wheelCenterText.textContent = "?";
  delete els.wheelWinner.dataset.hasWinner;
  renderWheel();
}

function formatWinnerText(name) {
  const label = escapeHtml(tr("winner").replace("{name}", "").trim());
  return `<span class="wheel-winner-text"><span class="wheel-winner-main"><span class="wheel-winner-label">${label}</span> <strong>${escapeHtml(name)}</strong></span></span><button class="wheel-remove-winner" type="button" data-remove-wheel-winner aria-label="Retirer ${escapeHtml(name)} de la roue" title="Retirer ce nom">×</button>`;
}

function shortenWheelLabel(name) {
  const characters = Array.from(name);
  return characters.length > 6 ? `${characters.slice(0, 6).join("")}...` : name;
}

function renderWheelHistory(history) {
  if (!history.length) {
    els.wheelHistory.hidden = true;
    els.wheelHistory.textContent = "";
    return;
  }
  els.wheelHistory.hidden = false;
  els.wheelHistory.textContent = tr("winnerHistory").replace("{names}", history.slice(-12).join(" · "));
}

function bindInstructions() {
  els.instructionsResize.addEventListener("click", () => {
    const expanded = els.instructionsCard.classList.toggle("is-expanded");
    els.instructionsResize.setAttribute("aria-label", expanded ? "Reduire les consignes" : "Agrandir les consignes");
    els.instructionsResize.title = expanded ? "Reduire" : "Agrandir";
  });
}

function renderInstructions() {
  const active = instructionItems.find((item) => item.verb === selectedInstruction) || instructionItems[0];
  selectedInstruction = active.verb;

  els.instructionWall.innerHTML = instructionItems.map((item) => `
    <button class="instruction-chip${item.verb === active.verb ? " is-active" : ""}" type="button" data-instruction="${escapeHtml(item.verb)}">
      ${escapeHtml(item.verb)}
    </button>
  `).join("");

  els.instructionWall.querySelectorAll("[data-instruction]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedInstruction = button.dataset.instruction;
      renderInstructions();
    });
  });

  els.instructionDisplay.innerHTML = `
    <div class="instruction-text">
      ${active.category ? `<span class="instruction-category">${escapeHtml(active.category)}</span>` : ""}
      <h3>${escapeHtml(active.verb)}</h3>
      <p>${escapeHtml(active.meaning)}</p>
      <ol>${active.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
    </div>
    ${active.poster ? `
      <figure class="instruction-poster">
        <img src="${escapeHtml(active.poster)}" alt="Affiche de consigne : ${escapeHtml(active.verb)}">
      </figure>
    ` : ""}
  `;
}

function bindCorrectionTags() {
  els.correctionTagsResize.addEventListener("click", () => {
    const expanded = els.correctionTagsCard.classList.toggle("is-expanded");
    els.correctionTagsResize.setAttribute("aria-label", expanded ? "Reduire les balises" : "Agrandir les balises");
    els.correctionTagsResize.title = expanded ? "Reduire" : "Agrandir";
  });

  els.correctionTagsList.addEventListener("click", (event) => {
    const itemButton = event.target.closest("[data-correction-tag-index]");
    if (!itemButton) return;
    const index = Number(itemButton.dataset.correctionTagIndex);
    if (openCorrectionTagIndexes.has(index)) {
      openCorrectionTagIndexes.delete(index);
    } else {
      openCorrectionTagIndexes.add(index);
    }
    renderCorrectionTags();
  });

  els.openCorrectionTagsFilter.addEventListener("click", openCorrectionTagsDialog);
  els.selectAllCorrectionTags.addEventListener("click", () => {
    visibleCorrectionTags = new Set(correctionTagItems.map((_, index) => index));
    saveVisibleCorrectionTags();
    renderCorrectionTags();
  });
  els.deselectAllCorrectionTags.addEventListener("click", () => {
    visibleCorrectionTags = new Set();
    openCorrectionTagIndexes.clear();
    saveVisibleCorrectionTags();
    renderCorrectionTags();
  });
  els.correctionTagsPicker.addEventListener("change", (event) => {
    const checkbox = event.target.closest("[data-correction-tag-filter]");
    if (!checkbox) return;
    const index = Number(checkbox.dataset.correctionTagFilter);
    if (checkbox.checked) {
      visibleCorrectionTags.add(index);
    } else {
      visibleCorrectionTags.delete(index);
      openCorrectionTagIndexes.delete(index);
    }
    saveVisibleCorrectionTags();
    renderCorrectionTags();
  });
}

function renderCorrectionTags() {
  if (!els.correctionTagsList) return;
  els.correctionTagsList.classList.remove("has-selection");
  const selectedItems = correctionTagItems
    .map((item, index) => ({ item: getCorrectionTagContent(item), index }))
    .filter(({ index }) => visibleCorrectionTags.has(index));
  els.correctionTagsList.innerHTML = selectedItems.length ? selectedItems.map(({ item, index }) => {
    const selected = openCorrectionTagIndexes.has(index);
    return `
    <button class="correction-tag-item${selected ? " is-selected" : ""}" type="button" data-correction-tag-index="${index}" aria-pressed="${selected ? "true" : "false"}" aria-expanded="${selected ? "true" : "false"}">
      <strong class="correction-tag-code">${escapeHtml(item.tag)}</strong>
      <span class="correction-tag-meaning">${escapeHtml(item.meaning)}</span>
      ${selected ? `
        <span class="correction-tag-details">
          <span class="correction-tag-detail correction-tag-detail--errors">
            <strong>${escapeHtml(tr("correctionTagsErrors"))}</strong>
            ${renderCorrectionTagSteps(item.errors)}
          </span>
          <span class="correction-tag-detail correction-tag-detail--remediation">
            <strong>${escapeHtml(tr("correctionTagsRemediation"))}</strong>
            ${renderCorrectionTagSteps(item.remediation)}
          </span>
        </span>
      ` : ""}
    </button>
  `;
  }).join("") : `<p class="correction-tags-empty">${escapeHtml(tr("correctionTagsEmpty"))}</p>`;
  renderCorrectionTagsPicker();
}

function loadVisibleCorrectionTags() {
  try {
    const stored = JSON.parse(localStorage.getItem(storageKeys.correctionTags) || "null");
    if (!Array.isArray(stored)) return new Set(correctionTagItems.map((_, index) => index));
    return new Set(stored.filter((index) => Number.isInteger(index) && correctionTagItems[index]));
  } catch {
    return new Set(correctionTagItems.map((_, index) => index));
  }
}

function saveVisibleCorrectionTags() {
  localStorage.setItem(storageKeys.correctionTags, JSON.stringify([...visibleCorrectionTags]));
}

function openCorrectionTagsDialog() {
  renderCorrectionTagsPicker();
  if (typeof els.correctionTagsDialog.showModal === "function") {
    els.correctionTagsDialog.showModal();
  } else {
    els.correctionTagsDialog.setAttribute("open", "");
  }
}

function renderCorrectionTagsPicker() {
  if (!els.correctionTagsPicker) return;
  els.openCorrectionTagsFilter.textContent = tr("correctionTagsChoose").replace("{count}", visibleCorrectionTags.size);
  els.correctionTagsPicker.innerHTML = correctionTagItems.map((item, index) => {
    const content = getCorrectionTagContent(item);
    return `
    <label class="correction-tags-picker-item">
      <input type="checkbox" data-correction-tag-filter="${index}"${visibleCorrectionTags.has(index) ? " checked" : ""}>
      <span>${escapeHtml(content.tag)}</span>
      <small>${escapeHtml(content.meaning)}</small>
    </label>
  `;
  }).join("");
}

function renderCorrectionTagSteps(content) {
  return String(content)
    .split("\n")
    .filter(Boolean)
    .map((step) => `<span>${escapeHtml(step)}</span>`)
    .join("");
}

function bindProofreading() {
  els.proofreadingResize.addEventListener("click", () => {
    const expanded = els.proofreadingCard.classList.toggle("is-expanded");
    els.proofreadingResize.setAttribute("aria-label", expanded ? "Reduire la relecture" : "Agrandir la relecture");
    els.proofreadingResize.title = expanded ? "Reduire" : "Agrandir";
  });

  els.proofreadingCard.addEventListener("click", (event) => {
    if (event.target.closest("#proofreadingResize")) return;
    const itemButton = event.target.closest("[data-proofreading-index]");
    if (!itemButton) {
      if (selectedProofreadingIndex !== null) {
        selectedProofreadingIndex = null;
        renderProofreading();
      }
      return;
    }

    const index = Number(itemButton.dataset.proofreadingIndex);
    selectedProofreadingIndex = selectedProofreadingIndex === index ? null : index;
    renderProofreading();
  });
}

function renderProofreading() {
  if (!els.proofreadingList) return;
  els.proofreadingList.classList.toggle("has-selection", selectedProofreadingIndex !== null);
  els.proofreadingList.innerHTML = proofreadingItems.map((item, index) => `
    <button class="proofreading-item${index === selectedProofreadingIndex ? " is-selected" : ""}" type="button" data-proofreading-index="${index}" aria-pressed="${index === selectedProofreadingIndex ? "true" : "false"}">
      <strong class="proofreading-letter">${escapeHtml(item.letter)}</strong>
      <div class="proofreading-text">
        <h3>${escapeHtml(item.title[currentLanguage] || item.title.fr)}</h3>
        <p>${escapeHtml(item.check[currentLanguage] || item.check.fr)}</p>
      </div>
    </button>
  `).join("");
}

function bindTimeline() {
  [els.levelFilter, els.periodFilter, els.timelineSearch].forEach((control) => {
    control.addEventListener("input", renderTimeline);
    control.addEventListener("change", renderTimeline);
  });
  els.timelineList.addEventListener("click", (event) => {
    const timelineEvent = event.target.closest("[data-timeline-key]");
    if (!timelineEvent) {
      if (selectedTimelineKey !== null) {
        selectedTimelineKey = null;
        renderTimeline();
      }
      return;
    }
    selectedTimelineKey = selectedTimelineKey === timelineEvent.dataset.timelineKey ? null : timelineEvent.dataset.timelineKey;
    renderTimeline();
  });
  els.timelineList.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    const timelineEvent = event.target.closest("[data-timeline-key]");
    if (!timelineEvent) return;
    event.preventDefault();
    selectedTimelineKey = selectedTimelineKey === timelineEvent.dataset.timelineKey ? null : timelineEvent.dataset.timelineKey;
    renderTimeline();
  });
  els.timelineResize.addEventListener("click", toggleTimelineFullscreen);
  els.timelineBack.addEventListener("click", () => moveTimeline(-1));
  els.timelineForward.addEventListener("click", () => moveTimeline(1));
  els.timelineResetScroll.addEventListener("click", () => {
    els.timelineList.scrollTo({ left: 0, behavior: "smooth" });
  });
  window.addEventListener("resize", updateTimelineAxisLength);
}

function renderTimeline() {
  const level = els.levelFilter.value;
  const period = els.periodFilter.value;
  const query = normalize(els.timelineSearch.value);
  const filtered = timelineEvents
    .filter((event) => event.level === level)
    .filter((event) => period === "Tous" || getHistoricalPeriod(event.period) === period)
    .filter((event) => !query || normalize(`${event.date} ${event.title} ${event.note} ${getTimelineDisplayContent(event).date} ${getTimelineDisplayContent(event).title} ${getTimelineDisplayContent(event).note} ${event.level}`).includes(query))
    .sort((a, b) => a.order - b.order);
  const displayEvents = filtered;
  if (selectedTimelineKey && !displayEvents.some((event) => timelineEventKey(event) === selectedTimelineKey)) {
    selectedTimelineKey = null;
  }

  els.timelineList.style.setProperty("--timeline-count", Math.max(1, displayEvents.length));
  els.timelineList.classList.toggle("has-selection", selectedTimelineKey !== null);
  const timelineFullscreen = els.timelineCard.classList.contains("is-fullscreen");
  const timelineStackUnit = timelineFullscreen ? 102 : 116;
  const displayedLevel = level;
  const timelineScaleBounds = displayedLevel === "4e"
    ? { start: 1690, end: 1920 }
    : displayedLevel === "3e"
      ? { start: 1910, end: 2020 }
      : displayedLevel === "5e"
        ? { start: 390, end: 1720 }
        : displayedLevel === "CM2"
          ? { start: 1790, end: 2010 }
          : displayedLevel === "CM1"
            ? { start: 1300, end: 1800 }
            : null;
  const timelineTickBounds = displayedLevel === "4e"
    ? { start: 1690, end: 1920 }
    : displayedLevel === "5e"
      ? { start: 400, end: 1700 }
      : displayedLevel === "6e"
        ? { start: -900, end: 1500 }
      : displayedLevel === "CM1"
        ? { start: 1300, end: 1800 }
        : timelineScaleBounds;
  els.timelineList.style.setProperty("--timeline-axis-color", timelineAxisBackground(displayEvents, displayedLevel, timelineScaleBounds));
  const timelinePlacement = getTimelinePlacement(displayEvents, timelineFullscreen, timelineScaleBounds, displayedLevel);
  els.timelineList.style.setProperty("--timeline-stack-depth", timelinePlacement.maxCardStack || 0);
  els.timelineList.style.setProperty("--timeline-stack-height", `${(timelinePlacement.maxCardStack || 0) * timelineStackUnit}px`);
  const timelineTickStep = ["5e", "6e", "CM1"].includes(displayedLevel) ? 100 : ["3e", "4e", "CM2"].includes(displayedLevel) ? 10 : 0;
  els.timelineList.classList.toggle("timeline-list--all", displayedLevel === "Tous");
  els.timelineList.classList.toggle("timeline-list--3e", displayedLevel === "3e");
  els.timelineList.classList.toggle("timeline-list--4e", displayedLevel === "4e");
  els.timelineList.classList.toggle("timeline-list--5e", displayedLevel === "5e");
  els.timelineList.classList.toggle("timeline-list--6e", displayedLevel === "6e");
  els.timelineList.classList.toggle("timeline-list--CM1", displayedLevel === "CM1");
  els.timelineList.classList.toggle("timeline-list--CM2", displayedLevel === "CM2");
  const timelineTicks = getTimelineTicks(
    displayEvents,
    timelinePlacement,
    timelineTickStep,
    timelineTickBounds,
    displayedLevel
  );
  const timelineMarkup = displayEvents.map((event, index) => {
    const historicalPeriod = getHistoricalPeriod(event.period);
    const duration = isTimelineDuration(event.date);
    const displayContent = getTimelineDisplayContent(event);
    const placement = timelinePlacement.items.get(timelineEventKey(event)) || { gapBefore: 0, durationWidth: 0, durationLane: 0, pointLane: "lower", relatedDurationLane: 0, cardStack: 0, layoutHorizontalOffset: 0, allLevelCardTop: 0, pointNearAxis: false, pointTightAxis: false };
    const durationCardTop = duration && placement.durationLane % 2 === 1
      ? timelineFullscreen ? 306 : 430
      : timelineFullscreen ? 42 : 146;
    const resolvedCardTop = durationCardTop;
    const durationBandTop = duration ? getTimelineDurationBandCenterY(event, placement.durationLane, timelineFullscreen) - resolvedCardTop : 0;
    const breakAfter = hasTimelineBreakAfter(event);
    const hideDurationStart = (event.level === "CM1" && ["476-1492", "XIe-XIIIe siècles"].includes(event.date))
      || (event.level === "4e" && ["1643-1715", "Années 1670-années 1750"].includes(event.date));
    const eventKey = timelineEventKey(event);
    const selected = eventKey === selectedTimelineKey;
    const cardStackOffset = placement.cardStack * timelineStackUnit;
    const upperCardStackOffset = placement.cardStack * timelineStackUnit;
    const upperCardBaseTop = !duration && placement.pointLane === "upper"
      ? getTimelinePointBaseTop(placement, timelineFullscreen)
      : 0;
    const timelineCardHorizontalOffset = getTimelineCardHorizontalOffset(event, displayedLevel) + (placement.layoutHorizontalOffset || 0);
    return `
    <article class="timeline-event${duration ? " timeline-event--duration" : " timeline-event--point"}${hideDurationStart ? " timeline-event--hide-duration-start" : ""}${!duration && placement.pointLane === "upper" ? " timeline-event--point-upper" : ""}${!duration && placement.pointLane === "contained" ? " timeline-event--point-contained" : ""}${!duration && placement.pointNearAxis ? " timeline-event--point-near-axis" : ""}${!duration && placement.pointTightAxis ? " timeline-event--point-tight-axis" : ""}${breakAfter ? " timeline-event--break-after" : ""}${selected ? " is-selected" : ""}" style="--tone: ${periodColor(historicalPeriod)}; --timeline-gap: ${placement.gapBefore}px; --duration-width: ${placement.durationWidth}px; --duration-card-top: ${durationCardTop}px; --duration-band-top: ${durationBandTop}px; --timeline-all-card-top: ${resolvedCardTop}px; --related-duration-lane-offset: ${placement.relatedDurationLane * 18}px; --card-stack-offset: ${cardStackOffset}px; --near-axis-stack-offset: ${cardStackOffset}px; --upper-card-stack-offset: ${upperCardStackOffset}px; --upper-card-base-top: ${upperCardBaseTop}px; --timeline-card-horizontal-offset: ${timelineCardHorizontalOffset}px" data-timeline-key="${escapeHtml(eventKey)}" tabindex="0" role="button" aria-pressed="${selected ? "true" : "false"}" aria-expanded="${selected ? "true" : "false"}">
      <div class="event-date-row">
        <div class="event-date">${escapeHtml(displayContent.date)}</div>
        ${duration ? `<span class="timeline-kind">${currentLanguage === "en" ? "Period" : "Période"}</span>` : ""}
        ${event.image ? `<img class="timeline-portrait" src="${escapeHtml(event.image)}" alt="${escapeHtml(event.imageAlt || event.title)}">` : ""}
      </div>
      ${duration ? `<span class="timeline-duration-band" aria-hidden="true"><span class="timeline-duration-label">${escapeHtml(displayContent.date)}</span></span>` : ""}
      <div>
        <div class="event-title">${escapeHtml(displayContent.title)}</div>
        <div class="event-note">${escapeHtml(displayContent.note)}</div>
      </div>
    </article>
  `;
  }).join("");
  const tickMarkup = timelineTicks.map((tick) => `
    <span class="timeline-axis-tick" style="left: ${tick.left}px" aria-hidden="true">
      <span>${formatTimelineTickYear(tick.year)}</span>
    </span>
  `).join("");
  const axisBreakMarkup = getTimelineAxisBreaks(displayEvents, timelinePlacement).map((axisBreak) => `
    <span class="timeline-axis-break" style="left: ${axisBreak.left}px; width: ${axisBreak.width}px" aria-hidden="true"></span>
  `).join("");
  const axisBoundaryMarkup = timelineScaleBounds
    ? `<span class="timeline-axis-boundary" style="left: ${timelinePlacement.contentInset + timelinePlacement.eventWidth / 2}px" aria-hidden="true"></span>`
    : "";
  els.timelineList.innerHTML = timelineMarkup
    ? `${axisBoundaryMarkup}${tickMarkup}${axisBreakMarkup}${timelineMarkup}`
    : `<div class="group-box" style="--accent: var(--muted)">Aucun repere ne correspond aux filtres.</div>`;
  requestAnimationFrame(updateTimelineAxisLength);
}

function timelineEventKey(event) {
  return `${event.level}|${event.date}|${event.title}`;
}

function getTimelineDisplayContent(event) {
  if (currentLanguage !== "en") {
    return {
      date: event.date,
      title: event.title,
      note: event.note
    };
  }
  return {
    date: translateTimelineDate(event.date),
    title: timelineTitleTranslations[event.title] || translateTimelinePhrase(event.title),
    note: translateTimelineNote(event.note)
  };
}

function translateTimelineDate(date) {
  if (timelineDateTranslations[date]) return timelineDateTranslations[date];
  return String(date)
    .replace(/\bAEC\b/g, "BCE")
    .replace(/apr\. J\.-C\./g, "CE")
    .replace(/\bVers\b/g, "c.")
    .replace(/(\d)\s+000/g, "$1,000")
    .replace(/(\d{2})\s+000/g, "$1,000")
    .replace(/(\d{3})\s+000/g, "$1,000");
}

function translateTimelineNote(note) {
  return String(note)
    .split(";")
    .map((keyword) => keyword.trim())
    .filter(Boolean)
    .map((keyword) => timelineKeywordTranslations[keyword] || translateTimelinePhrase(keyword))
    .join(" ; ");
}

function translateTimelinePhrase(text) {
  let translated = String(text);
  const replacements = [
    ["Révolution française", "French Revolution"],
    ["Première Guerre mondiale", "First World War"],
    ["Seconde Guerre mondiale", "Second World War"],
    ["guerre froide", "Cold War"],
    ["Union européenne", "European Union"],
    ["droits de l’Homme", "human rights"],
    ["République", "Republic"],
    ["monarchie", "monarchy"],
    ["Empire", "Empire"],
    ["esclavage", "slavery"],
    ["colonisation", "colonization"],
    ["démocratie", "democracy"],
    ["égalité", "equality"],
    ["liberté", "freedom"],
    ["citoyenneté", "citizenship"],
    ["femmes", "women"],
    ["guerre", "war"],
    ["paix", "peace"],
    ["traité", "treaty"],
    ["suffrage universel", "universal suffrage"],
    ["abolition", "abolition"],
    ["invention", "invention"],
    ["début", "beginning"],
    ["fin", "end"],
    ["naissance", "birth"],
    ["création", "creation"],
    ["proclamation", "proclamation"],
    ["règne", "reign"]
  ];
  replacements.forEach(([source, target]) => {
    translated = translated.replaceAll(source, target);
  });
  return translated;
}

function getTimelineAllLevelsEvents(events) {
  const priority = new Map(["3e", "4e", "5e", "6e", "CM2", "CM1"].map((level, index) => [level, index]));
  const byKey = new Map();
  events.forEach((event) => {
    const duplicateKey = `${normalize(event.date)}|${normalize(event.title)}`;
    const previous = byKey.get(duplicateKey);
    if (!previous || (priority.get(event.level) ?? 99) < (priority.get(previous.level) ?? 99)) {
      byKey.set(duplicateKey, event);
    }
  });
  return [...byKey.values()].sort((a, b) => a.order - b.order || (priority.get(a.level) ?? 99) - (priority.get(b.level) ?? 99));
}

function getTimelinePlacement(events, compact = false, scaleBounds = null, displayMode = null) {
  const eventWidth = displayMode === "Tous" ? (compact ? 220 : 250) : (compact ? 320 : 360);
  const ranges = events.map((event) => getTimelineEffectiveRange(event, displayMode));
  const validRanges = ranges.filter(Boolean);
  const minYear = scaleBounds?.start ?? (validRanges.length ? Math.min(...validRanges.map((range) => range.start)) : 0);
  const maxYear = scaleBounds?.end ?? (validRanges.length ? Math.max(...validRanges.map((range) => range.end)) : events.length);
  const yearSpan = Math.max(1, maxYear - minYear);
  const proportionalPixelsPerYear = getTimelineProportionalPixelsPerYear(events, displayMode);
  const proportionalScale = proportionalPixelsPerYear !== null;
  const pixelsPerYear = proportionalScale ? proportionalPixelsPerYear : getTimelinePixelsPerYear(yearSpan);
  const items = new Map();
  const centers = [];

  events.forEach((event, index) => {
    const range = ranges[index];
    const previousRange = index > 0 ? ranges[index - 1] : null;
    const previousStart = previousRange ? previousRange.start : minYear + index - 1;
    const start = range ? range.start : minYear + index;
    const layoutYear = proportionalScale && range && isTimelineDuration(event.date) ? (range.start + range.end) / 2 : start;
    const previousCenter = index === 0 ? eventWidth / 2 : centers[index - 1];
    const targetCenter = eventWidth / 2 + (layoutYear - minYear) * pixelsPerYear;
    const gapBefore = index === 0
      ? proportionalScale ? targetCenter - eventWidth / 2 : 0
      : proportionalScale
        ? targetCenter - previousCenter - eventWidth
        : getTimelineGap(start - previousStart, pixelsPerYear, eventWidth, proportionalScale);
    const center = proportionalScale ? targetCenter : index === 0 ? eventWidth / 2 : previousCenter + eventWidth + gapBefore;
    centers.push(center);
    items.set(timelineEventKey(event), {
      gapBefore,
      durationWidth: 0,
      durationLane: 0,
      pointLane: "lower",
      relatedDurationLane: 0,
      cardStack: 0,
      layoutHorizontalOffset: 0,
      allLevelCardTop: 0,
      pointNearAxis: false,
      pointTightAxis: false,
      pointLoweredUpper: false,
      upperBaseOffset: 0,
      pointBaseOffset: getTimelinePointBaseOffset(event)
    });
  });

  events.forEach((event, index) => {
    if (!isTimelineDuration(event.date)) return;
    const range = ranges[index];
    const item = items.get(timelineEventKey(event));
    if (!range || !item) return;
    const durationYears = range.end - range.start;
    let durationWidth = Math.max(72, durationYears * pixelsPerYear);
    if (!proportionalScale && durationYears > 2) {
      let durationEndX = centers[index] + durationWidth;
      events.forEach((candidate, candidateIndex) => {
        if (candidateIndex <= index || isTimelineDuration(candidate.date)) return;
        const year = getTimelinePointYear(candidate);
        if (year !== null && range.start <= year && year <= range.end) {
          durationEndX = Math.max(durationEndX, centers[candidateIndex]);
        }
      });
      durationWidth = Math.max(72, durationEndX - centers[index]);
    }
    item.durationWidth = durationWidth;
  });

  const durationLaneEnds = [];
  events
    .map((event, index) => ({ event, range: ranges[index], item: items.get(timelineEventKey(event)) }))
    .filter(({ event, range, item }) => isTimelineDuration(event.date) && range && item)
    .sort((a, b) => a.range.start - b.range.start || a.range.end - b.range.end)
    .forEach(({ range, item }) => {
      const lane = durationLaneEnds.findIndex((end) => end < range.start);
      item.durationLane = lane === -1 ? durationLaneEnds.length : lane;
      durationLaneEnds[item.durationLane] = range.end;
    });
  events.forEach((event) => {
    const item = items.get(timelineEventKey(event));
    if (item && isTimelineFifthGradeHundredYearsWar(event)) {
      item.durationLane = 2;
    }
  });
  const magellanDurationLane = events
    .map((event) => ({ event, item: items.get(timelineEventKey(event)) }))
    .find(({ event, item }) => item && event.date === "1519-1522")?.item.durationLane;
  if (Number.isFinite(magellanDurationLane)) {
    events.forEach((event) => {
      const item = items.get(timelineEventKey(event));
      if (item && isTimelineAlignedWithMagellanDuration(event)) {
        item.durationLane = magellanDurationLane;
      }
    });
  }

  const durations = events
    .map((event, index) => ({ event, range: ranges[index], item: items.get(timelineEventKey(event)) }))
    .filter(({ event, range, item }) => isTimelineDuration(event.date) && range && item)
    .sort((a, b) => {
      const rangeDiff = (a.range.end - a.range.start) - (b.range.end - b.range.start);
      return rangeDiff || a.range.start - b.range.start;
    });

  const pointYears = new Map();
  events.forEach((event, index) => {
    if (isTimelineDuration(event.date)) return;
    const year = getTimelinePointYear(event);
    if (year === null) return;
    const item = items.get(timelineEventKey(event));
    const relatedDuration = durations.find(({ range }) => range.start <= year && year <= range.end);
    if (item && relatedDuration) {
      item.pointLane = "contained";
      item.relatedDurationLane = relatedDuration.item.durationLane;
    }
    const yearEvents = pointYears.get(year) || [];
    yearEvents.push({ event, index });
    pointYears.set(year, yearEvents);
  });
  pointYears.forEach((yearEvents) => {
    if (yearEvents.length < 2) return;
    yearEvents.forEach(({ event }, index) => {
      const item = items.get(timelineEventKey(event));
      if (item && !proportionalScale && item.pointLane !== "contained" && index % 2 === 1) {
        item.pointLane = "upper";
      }
    });
  });
  alignTimelineSixthGradeUpperDates(events, items);

  assignTimelineCardStacks(events, items, centers, proportionalScale, eventWidth);
  promoteCrowdedTimelinePoints(events, items, proportionalScale);
  assignTimelineCardStacks(events, items, centers, proportionalScale, eventWidth);
  assignTimelineNearAxisPoints(events, items, centers, proportionalScale, eventWidth);
  assignAllLevelsTimelineLanes(events, items, displayMode);
  const maxCardStack = resolveTimelineVisualStacks(events, items, centers, proportionalScale, eventWidth, compact, displayMode);

  return { items, centers, ranges, minYear, maxYear, pixelsPerYear, proportionalScale, eventWidth, contentInset: 8, maxCardStack };
}

function resolveTimelineVisualStacks(events, items, centers, proportionalScale, eventWidth, compact, displayMode = null) {
  if (!proportionalScale) return Math.max(0, ...[...items.values()].map((item) => item.cardStack || 0));
  if (displayMode === "Tous") {
    return resolveAllLevelsTimelineVisualStacks(events, items, centers, eventWidth, compact);
  }
  const cardHeight = displayMode === "Tous" ? (compact ? 62 : 68) : (compact ? 82 : 96);
  const stackGap = 20;
  const axisTop = compact ? 252 : 370;
  const axisBottom = axisTop + 8;
  const placed = events
    .map((event, index) => {
      const item = items.get(timelineEventKey(event));
      if (!item) return null;
      if (isTimelineDuration(event.date)) {
        const top = item.durationLane % 2 === 1
          ? compact ? 306 : 430
          : compact ? 42 : 146;
        const cards = [{
          left: centers[index] - eventWidth / 2 + getTimelineCardHorizontalOffset(event, displayMode),
          right: centers[index] + eventWidth / 2 + getTimelineCardHorizontalOffset(event, displayMode),
          top,
          bottom: top + cardHeight
        }];
        if (event.level === "5e" || event.level === "CM1" || event.level === "CM2") {
          const bandCenterY = getTimelineDurationBandCenterY(event, item.durationLane, compact);
          cards.push({
            left: centers[index] - item.durationWidth / 2 - 14,
            right: centers[index] + item.durationWidth / 2 + 14,
            top: bandCenterY - 34,
            bottom: bandCenterY + 24
          });
        }
        return cards;
      }
      return null;
    })
    .flat()
    .filter(Boolean);
  placed.push({
    left: Number.NEGATIVE_INFINITY,
    right: Number.POSITIVE_INFINITY,
    top: axisTop - stackGap,
    bottom: axisBottom + stackGap
  });
  let maxStack = 0;

  events.forEach((event, index) => {
    if (isTimelineDuration(event.date)) return;
    const item = items.get(timelineEventKey(event));
    if (!item) return;
    const baseHorizontalOffset = getTimelineCardHorizontalOffset(event, displayMode);
    const baseTop = getTimelinePointBaseTop(item, compact);
    const eventYear = getTimelinePointYear(event);
    const eventStackGap = getTimelineEventStackGap(event, eventYear, stackGap);
    const eventStackStep = cardHeight + eventStackGap;
    let stack = isTimelineCm2AlignedUnder1802(event) ? 1 : 0;
    let layoutHorizontalOffset = 0;
    const horizontalCandidates = displayMode === "Tous" ? [0, -70, 70, -140, 140] : [0];
    while (true) {
      const offsets = displayMode === "Tous" && stack >= 2 ? horizontalCandidates : [0];
      const resolvedOffset = offsets.find((candidateOffset) => {
        const left = centers[index] - eventWidth / 2 + baseHorizontalOffset + candidateOffset;
        const right = centers[index] + eventWidth / 2 + baseHorizontalOffset + candidateOffset;
        const top = getTimelineStackedTop(item, baseTop, stack, eventStackStep);
        const bottom = top + cardHeight;
        return !placed.some((card) => {
          const overlapsX = left < card.right && right > card.left;
          return overlapsX && top < card.bottom + eventStackGap && bottom + eventStackGap > card.top;
        });
      });
      if (resolvedOffset !== undefined) {
        layoutHorizontalOffset = resolvedOffset;
        break;
      }
      stack += 1;
    }
    const left = centers[index] - eventWidth / 2 + baseHorizontalOffset + layoutHorizontalOffset;
    const right = centers[index] + eventWidth / 2 + baseHorizontalOffset + layoutHorizontalOffset;
    item.cardStack = stack;
    item.layoutHorizontalOffset = layoutHorizontalOffset;
    maxStack = Math.max(maxStack, stack);
    const top = getTimelineStackedTop(item, baseTop, stack, eventStackStep);
    placed.push({ left, right, top, bottom: top + cardHeight });
  });

  return maxStack;
}

function resolveAllLevelsTimelineVisualStacks(events, items, centers, eventWidth, compact) {
  const cardHeight = compact ? 62 : 68;
  const cardGap = 20;
  const rowStep = cardHeight + cardGap;
  const upperBaseTop = compact ? 135 : 239;
  const lowerBaseTop = compact ? 306 : 400;
  const horizontalOffsets = [0, -90, 90, -180, 180, -270, 270, -360, 360, -450, 450, -540, 540];
  const placed = [];
  let maxLowerRow = 0;

  const positionedEvents = events
    .map((event, index) => ({ event, index, range: getTimelineEffectiveRange(event, "Tous") }))
    // Les périodes réservent les emplacements les plus proches de l'axe.
    .sort((a, b) => Number(isTimelineDuration(b.event.date)) - Number(isTimelineDuration(a.event.date))
      || (a.range?.start ?? 0) - (b.range?.start ?? 0)
      || (a.range?.end ?? 0) - (b.range?.end ?? 0));

  positionedEvents.forEach(({ event, index }) => {
    const item = items.get(timelineEventKey(event));
    if (!item) return;
    const prefersUpper = isTimelineDuration(event.date)
      ? item.durationLane % 2 === 0
      : item.pointLane === "upper";
    const sides = prefersUpper ? ["upper", "lower"] : ["lower", "upper"];
    let resolved = null;

    for (let row = 0; row < 3 && !resolved; row += 1) {
      for (const side of sides) {
        const top = side === "upper"
          ? upperBaseTop - row * rowStep
          : lowerBaseTop + row * rowStep;
        if (top < 8) continue;
        for (const offset of horizontalOffsets) {
          const left = centers[index] - eventWidth / 2 + offset;
          const right = centers[index] + eventWidth / 2 + offset;
          const bottom = top + cardHeight;
          const overlaps = placed.some((card) => left < card.right && right > card.left && top < card.bottom + cardGap && bottom + cardGap > card.top);
          if (!overlaps) {
            resolved = { top, left, right, bottom, offset, side, row };
            break;
          }
        }
        if (resolved) break;
      }
    }

    const fallbackTop = prefersUpper ? upperBaseTop : lowerBaseTop;
    // En dernier recours, décale la carte latéralement sans ajouter de niveau vertical.
    // La frise reste ainsi limitée à trois rangées de part et d'autre de l'axe.
    let fallbackOffset = horizontalOffsets[horizontalOffsets.length - 1] + 270;
    let fallbackLeft = centers[index] - eventWidth / 2 + fallbackOffset;
    let fallbackRight = centers[index] + eventWidth / 2 + fallbackOffset;
    while (placed.some((card) => fallbackLeft < card.right && fallbackRight > card.left
      && fallbackTop < card.bottom + cardGap && fallbackTop + cardHeight + cardGap > card.top)) {
      fallbackOffset += 270;
      fallbackLeft = centers[index] - eventWidth / 2 + fallbackOffset;
      fallbackRight = centers[index] + eventWidth / 2 + fallbackOffset;
    }
    const placement = resolved || {
      top: fallbackTop,
      left: fallbackLeft,
      right: fallbackRight,
      bottom: fallbackTop + cardHeight,
      offset: fallbackOffset,
      side: prefersUpper ? "upper" : "lower",
      row: 0
    };
    item.allLevelCardTop = placement.top;
    item.layoutHorizontalOffset = placement.offset;
    item.cardStack = 0;
    item.pointLane = placement.side === "upper" ? "upper" : "lower";
    placed.push(placement);
    if (placement.side === "lower") maxLowerRow = Math.max(maxLowerRow, placement.row + 1);
  });

  return Math.max(0, maxLowerRow - 1);
}

function getTimelinePointBaseTop(item, compact) {
  const relatedOffset = item.relatedDurationLane * 18;
  if (item.pointLoweredUpper) return compact ? 105 : 190;
  if (item.pointLane === "upper") return (compact ? 135 : 239) + item.upperBaseOffset;
  if (item.pointTightAxis) return (compact ? 298 : 430) + relatedOffset + item.pointBaseOffset;
  if (item.pointNearAxis) return (compact ? 312 : 478) + relatedOffset + item.pointBaseOffset;
  if (item.pointLane === "contained") return (compact ? 370 : 590) + relatedOffset + item.pointBaseOffset;
  return (compact ? 426 : 650) + item.pointBaseOffset;
}

function getTimelineStackedTop(item, baseTop, stack, stackStep) {
  return item.pointLane === "upper" ? baseTop - stack * stackStep : baseTop + stack * stackStep;
}

function getTimelineEventStackGap(event, eventYear, defaultGap) {
  if (event.level === "CM1" && eventYear === 1789) return 15;
  if (event.level === "CM2" && eventYear === 1792) return 15;
  if (isTimelineCm2AlignedUnder1802(event)) return 15;
  if (isTimelineCm2WwiiClusterDate(event)) return 15;
  if (event.level === "4e" && [1848, 1870].includes(eventYear)) return 15;
  if (event.level === "5e" && [1492, 1517].includes(eventYear)) return 15;
  return defaultGap;
}

function getTimelineDurationBandCenterY(event, durationLane, compact) {
  const timelineAxisCenter = compact ? 256 : 374;
  const durationBandLaneOffset = Math.floor(durationLane / 2) * 32;
  const isAboveAxis = durationLane % 2 === 0;
  const durationLevelOffset = event.level === "4e"
    ? -15
    : isAboveAxis ? -10 : 0;
  const durationAxisOffset = durationLane % 2 === 1
    ? 32 + durationBandLaneOffset + durationLevelOffset
    : -48 - durationBandLaneOffset + durationLevelOffset;
  return timelineAxisCenter + durationAxisOffset;
}

function assignTimelineNearAxisPoints(events, items, centers, proportionalScale, eventWidth) {
  if (!proportionalScale) return;
  const lowerDurationCards = events
    .map((event, index) => ({
      event,
      item: items.get(timelineEventKey(event)),
      left: centers[index] - eventWidth / 2,
      right: centers[index] + eventWidth / 2
    }))
    .filter(({ event, item }) => isTimelineDuration(event.date) && item && item.durationLane % 2 === 1);

  events.forEach((event, index) => {
    if (isTimelineDuration(event.date)) return;
    const item = items.get(timelineEventKey(event));
    if (!item) return;
    if (isTimelineFourthGradeUpperStack(event)) {
      item.pointLane = "upper";
      item.relatedDurationLane = 0;
      item.pointNearAxis = false;
      item.pointTightAxis = false;
      item.pointLoweredUpper = false;
      item.upperBaseOffset = 70;
      return;
    }
    if (isTimelineFourthGradeNearAxisStack(event)) {
      item.pointLane = "lower";
      item.relatedDurationLane = 0;
      item.pointNearAxis = true;
      item.pointTightAxis = false;
      return;
    }
    if (isTimelineUpperAxisAlignedDate(event)) {
      item.pointLane = "upper";
      item.relatedDurationLane = 0;
      item.pointNearAxis = false;
      item.pointTightAxis = false;
      item.pointLoweredUpper = false;
      item.upperBaseOffset = -93;
      return;
    }
    if (isTimelineFifthGradeDefaultLowerDate(event)) {
      item.pointLane = "lower";
      item.relatedDurationLane = 0;
      item.pointNearAxis = false;
      item.pointTightAxis = false;
      return;
    }
    if (isTimelineFifthGradeAlignedWith1598(event)) {
      // Placement explicite pour que la carte de Luther reste visible au-dessus de l'axe.
      item.pointLane = "upper";
      item.relatedDurationLane = 0;
      item.pointNearAxis = false;
      item.pointTightAxis = false;
      item.pointLoweredUpper = false;
      item.upperBaseOffset = 0;
      return;
    }
    if (isTimelineFifthGradeTightAxisDate(event)) {
      item.pointLane = "lower";
      item.relatedDurationLane = 0;
      item.pointNearAxis = false;
      item.pointTightAxis = true;
      return;
    }
    if (isTimelineCm1AlignedWith1492(event)) {
      item.pointLane = "contained";
      item.relatedDurationLane = 0;
      item.pointNearAxis = false;
      item.pointTightAxis = false;
      return;
    }
    if (isTimelineCm1AlignedWithLouisXiv(event)) {
      item.pointLane = "upper";
      item.relatedDurationLane = 0;
      item.pointNearAxis = false;
      item.pointTightAxis = false;
      item.pointLoweredUpper = false;
      item.upperBaseOffset = -93;
      return;
    }
    if (isTimelineCm1AlignedWithMagellan(event)) {
      item.pointLane = "lower";
      item.relatedDurationLane = 0;
      item.pointNearAxis = false;
      item.pointTightAxis = true;
      return;
    }
    if (isTimelineCm2AlignedUnder1802(event)) {
      item.pointLane = "lower";
      item.relatedDurationLane = 0;
      item.pointNearAxis = false;
      item.pointTightAxis = false;
      return;
    }
    if (isTimelineCm2ForcedBelowAxis(event)) {
      item.pointLane = "lower";
      item.relatedDurationLane = 0;
      item.pointNearAxis = false;
      item.pointTightAxis = false;
      return;
    }
    if (isTimelineCm2WwiiAlignedDate(event)) {
      item.pointLane = "contained";
      item.relatedDurationLane = 0;
      item.pointNearAxis = false;
      item.pointTightAxis = false;
      return;
    }
    if (isTimelineEarlyInterwarNearAxisCluster(event)) {
      item.pointLane = "lower";
      item.relatedDurationLane = 0;
      item.pointNearAxis = true;
      item.pointTightAxis = true;
      return;
    }
    if (isTimelinePostwarNearAxisCluster(event)) {
      item.pointLane = "lower";
      item.relatedDurationLane = 0;
      item.pointNearAxis = true;
      item.pointTightAxis = true;
      return;
    }
    const priorityNearAxis = isTimelinePriorityNearAxisDate(event);
    if (!priorityNearAxis && item.cardStack !== 0) return;
    const left = centers[index] - eventWidth / 2;
    const right = centers[index] + eventWidth / 2;
    const overlapsLowerDuration = lowerDurationCards.some((duration) => left < duration.right && right > duration.left);
    item.pointNearAxis = priorityNearAxis || !overlapsLowerDuration;
    item.pointTightAxis = isTimelineTightAxisDate(event);
  });
}

function assignAllLevelsTimelineLanes(events, items, displayMode) {
  if (displayMode !== "Tous") return;
  let upperCount = 0;
  let lowerCount = 0;

  events.forEach((event) => {
    if (isTimelineDuration(event.date)) return;
    const item = items.get(timelineEventKey(event));
    if (!item) return;

    const useUpperLane = upperCount <= lowerCount;
    item.pointLane = useUpperLane ? "upper" : "lower";
    item.relatedDurationLane = 0;
    item.pointNearAxis = false;
    item.pointTightAxis = false;
    item.pointLoweredUpper = false;
    item.upperBaseOffset = 0;
    item.pointBaseOffset = 0;

    if (useUpperLane) upperCount += 1;
    else lowerCount += 1;
  });
}

function promoteCrowdedTimelinePoints(events, items, proportionalScale) {
  if (!proportionalScale) return;
  events.forEach((event) => {
    if (isTimelineDuration(event.date)) return;
    const item = items.get(timelineEventKey(event));
    if (!item || isTimelinePostwarLowerCluster(event) || isTimelineGroupedFourthGradeDate(event) || (item.cardStack < 3 && !isTimelineForcedUpperEvent(event))) return;
    item.pointLane = "upper";
    item.relatedDurationLane = 0;
    item.pointNearAxis = false;
    item.pointTightAxis = false;
    item.pointLoweredUpper = isTimelineLoweredUpperEvent(event);
    item.upperBaseOffset = getTimelineUpperBaseOffset(event);
    item.cardStack = 0;
  });
  events.forEach((event) => {
    const item = items.get(timelineEventKey(event));
    if (item) item.cardStack = 0;
  });
}

function alignTimelineSixthGradeUpperDates(events, items) {
  events.forEach((event) => {
    if (!isTimelineSixthGradeUpperAlignedDate(event)) return;
    const item = items.get(timelineEventKey(event));
    if (!item) return;
    item.pointLane = "upper";
    item.relatedDurationLane = 0;
    item.pointNearAxis = false;
    item.pointTightAxis = false;
    item.pointLoweredUpper = false;
    item.upperBaseOffset = -93;
  });
}

function isTimelineGroupedFourthGradeDate(event) {
  if (event.level !== "4e" || isTimelineDuration(event.date)) return false;
  return [1848, 1871].includes(getTimelinePointYear(event));
}

function isTimelineFourthGradeNearAxisStack(event) {
  return event.level === "4e" && !isTimelineDuration(event.date) && getTimelinePointYear(event) === 1848;
}

function isTimelineFourthGradeUpperStack(event) {
  return event.level === "4e" && !isTimelineDuration(event.date) && getTimelinePointYear(event) === 1871;
}

function isTimelineFifthGradeDefaultLowerDate(event) {
  return event.level === "5e" && !isTimelineDuration(event.date) && [1054].includes(getTimelinePointYear(event));
}

function isTimelineFifthGradeTightAxisDate(event) {
  return event.level === "5e" && !isTimelineDuration(event.date) && getTimelinePointYear(event) === 1453;
}

function isTimelineFifthGradeAlignedWith1598(event) {
  return event.level === "5e" && !isTimelineDuration(event.date) && event.date === "1517";
}

function isTimelineFifthGradeHundredYearsWar(event) {
  return event.level === "5e" && event.date === "1337-1453";
}

function isTimelineAlignedWithMagellanDuration(event) {
  return event.date === "1453 ou 1492";
}

function isTimelineCm1AlignedWith1492(event) {
  return event.level === "CM1" && !isTimelineDuration(event.date) && event.date === "1598";
}

function isTimelineCm1AlignedWithLouisXiv(event) {
  return event.level === "CM1" && !isTimelineDuration(event.date) && event.date === "26 août 1789";
}

function isTimelineCm1AlignedWithMagellan(event) {
  return event.level === "CM1" && !isTimelineDuration(event.date) && event.date === "1685";
}

function isTimelineCm2AlignedUnder1802(event) {
  return event.level === "CM2" && !isTimelineDuration(event.date) && event.date === "2 décembre 1804";
}

function isTimelineCm2ForcedBelowAxis(event) {
  return event.level === "CM2" && !isTimelineDuration(event.date) && event.date === "8 mai 1945";
}

function isTimelineCm2WwiiAlignedDate(event) {
  return event.level === "CM2" && !isTimelineDuration(event.date) && ["1942", "1944"].includes(event.date);
}

function isTimelineCm2WwiiClusterDate(event) {
  if (event.level !== "CM2" || isTimelineDuration(event.date)) return false;
  return [1940, 1942, 1944, 1945].includes(getTimelinePointYear(event));
}

function isTimelineUpperAxisAlignedDate(event) {
  if (isTimelineDuration(event.date)) return false;
  return (event.level === "5e" && ["800", "843", "987", "1054", "1214", "1258", "1453"].includes(event.date))
    || (event.level === "CM2" && event.date === "1848" && normalize(event.title).includes("abolition definitive"))
    || (event.level === "4e" && event.date === "1789");
}

function isTimelineSixthGradeUpperAlignedDate(event) {
  const lowerAxisDates = ["IVe millénaire AEC", "Vers 3 000 AEC"];
  return event.level === "6e"
    && !isTimelineDuration(event.date)
    && Number.isFinite(event.order)
    && !lowerAxisDates.includes(event.date)
    && (event.order < -450 || event.date === "395 ou 476 apr. J.-C.");
}

function isTimelineEarlyInterwarNearAxisCluster(event) {
  if (event.level !== "3e" || isTimelineDuration(event.date)) return false;
  return [1919, 1924].includes(getTimelinePointYear(event));
}

function isTimelineForcedUpperEvent(event) {
  if (event.level !== "3e") return false;
  const year = getTimelinePointYear(event);
  return year === 1936 || year === 1949 || year === 1962 || year === 1981 || year === 1992 || year === 2002;
}

function isTimelineLoweredUpperEvent(event) {
  return event.level === "3e" && !isTimelineDuration(event.date) && getTimelinePointYear(event) === 1962;
}

function getTimelineUpperBaseOffset(event) {
  if (event.level !== "3e" || isTimelineDuration(event.date)) return 0;
  const year = getTimelinePointYear(event);
  if (year === 1936) return 10;
  if (year === 1981) return 50;
  return 0;
}

function getTimelinePointBaseOffset(event) {
  if (isTimelineDuration(event.date)) return 0;
  const year = getTimelinePointYear(event);
  if (event.level === "4e") {
    if (year === 1789) return -40;
    if (year === 1848) return -30;
    if (year === 1900 || year === 1905) return -20;
    return 0;
  }
  if (event.level === "5e") {
    if (year === 1214) return -100;
    if (year === 1517) return -50;
    return 0;
  }
  if (event.level !== "3e") return 0;
  return year === 1957 || year === 1958 ? -20 : 0;
}

function getTimelineProportionalPixelsPerYear(events, displayMode = null) {
  if (!events.length) return null;
  // Frise générale : 10 ans = 30 px pour distinguer les repères rapprochés.
  if (displayMode === "Tous") return 3;
  const levels = new Set(events.map((event) => event.level));
  if (levels.size !== 1) return null;
  const [level] = [...levels];
  if (level === "3e" || level === "4e") return 50;
  if (level === "CM2") return 50;
  if (level === "5e" || level === "CM1") return 4;
  return null;
}

function getTimelineCardHorizontalOffset(event, displayMode = null) {
  if (displayMode === "Tous") return 0;
  if (event.level === "5e" && event.date === "Milieu du XIIe siècle") return 70;
  if (isTimelineFifthGradeAlignedWith1598(event)) return -70;
  if (isTimelineCm2AlignedUnder1802(event)) return -100;
  if (isTimelineCm2WwiiAlignedDate(event) && event.date === "1944") return -100;
  return event.level === "3e" && event.date === "1947-1991" && normalize(event.title).includes("guerre froide") ? 80 : 0;
}

function isTimelinePostwarLowerCluster(event) {
  if (event.level !== "3e" || isTimelineDuration(event.date)) return false;
  const year = getTimelinePointYear(event);
  return year === 1948;
}

function isTimelinePostwarNearAxisCluster(event) {
  if (event.level !== "3e" || isTimelineDuration(event.date)) return false;
  const year = getTimelinePointYear(event);
  return year === 1944 || year === 1945 || year === 1947;
}

function isTimelinePriorityNearAxisDate(event) {
  if (event.level !== "3e") return false;
  const year = getTimelinePointYear(event);
  return year === 1917 || year === 1933 || year === 1936 || year === 1944 || year === 1945 || year === 1947 || year === 1948 || year === 1949 || year === 1989 || year === 1991 || year === 2000 || year === 2001 || year === 2013;
}

function isTimelineTightAxisDate(event) {
  if (event.level !== "3e") return false;
  const year = getTimelinePointYear(event);
  return [1917, 1933, 1944, 1945, 1947, 1948, 1949, 1989, 1991, 2000, 2001, 2013].includes(year);
}

function isTimelineCloseDateStack(event) {
  if (event.level !== "3e" || isTimelineDuration(event.date)) return false;
  const year = getTimelinePointYear(event);
  return [1989, 1991, 1992, 2000, 2001, 2002].includes(year);
}

function isTimelineCompactDateStack(event) {
  if (event.level !== "3e" || isTimelineDuration(event.date)) return false;
  const year = getTimelinePointYear(event);
  return [1944, 1945, 1947, 1948, 1949, 1957, 1958, 1975, 1981, 1989, 1991, 2000, 2001].includes(year);
}

function assignTimelineCardStacks(events, items, centers, proportionalScale, eventWidth) {
  if (!proportionalScale) return 0;
  const laneEndsByGroup = new Map();
  let maxStack = 0;
  events.forEach((event, index) => {
    const item = items.get(timelineEventKey(event));
    if (!item) return;
    const group = isTimelineDuration(event.date)
      ? "duration"
      : item.pointLane === "upper"
        ? "upper"
        : "lower";
    const laneEnds = laneEndsByGroup.get(group) || [];
    const center = centers[index];
    const left = center - eventWidth / 2;
    const right = center + eventWidth / 2;
    let lane = laneEnds.findIndex((end) => left >= end + 16);
    if (lane === -1) lane = laneEnds.length;
    laneEnds[lane] = right;
    laneEndsByGroup.set(group, laneEnds);
    item.cardStack = lane;
    maxStack = Math.max(maxStack, lane);
  });
  return maxStack;
}

function getTimelineTicks(events, placement, step, bounds = null, displayedLevel = null) {
  if (!step || !events.length || !placement.centers?.length) return [];
  const datedPoints = events
    .map((event, index) => ({
      range: placement.ranges[index],
      center: placement.centers[index]
    }))
    .filter(({ range, center }) => range && Number.isFinite(center))
    .sort((a, b) => a.range.start - b.range.start || a.center - b.center);
  if (!datedPoints.length) return [];
  const firstYear = bounds?.start ?? Math.floor(placement.minYear / step) * step;
  const lastYear = bounds?.end ?? Math.ceil(placement.maxYear / step) * step;
  const tickYears = displayedLevel === "6e"
    ? getSixthGradeTimelineTickYears(firstYear, lastYear, step)
    : displayedLevel === "Tous"
      ? getAllLevelsTimelineTickYears(firstYear, lastYear, step)
      : Array.from({ length: Math.floor((lastYear - firstYear) / step) + 1 }, (_, index) => firstYear + index * step);
  const ticks = [];
  tickYears.forEach((year) => {
    const displayYear = displayedLevel === "Tous" ? getTimelineAllLevelsDisplayYear(year) : year;
    ticks.push({
      year,
      left: Math.round(placement.proportionalScale
        ? placement.contentInset + placement.eventWidth / 2 + (displayYear - placement.minYear) * placement.pixelsPerYear
        : getTimelineYearPosition(year, datedPoints, placement.pixelsPerYear))
    });
  });
  return ticks;
}

function getSixthGradeTimelineTickYears(firstYear, lastYear, step) {
  const years = [];
  for (let year = firstYear; year < 0; year += step) {
    years.push(year);
  }
  if (firstYear <= 1 && lastYear >= 1) years.push(1);
  const firstCommonEraTick = Math.max(step, Math.ceil(Math.max(firstYear, 1) / step) * step);
  for (let year = firstCommonEraTick; year <= lastYear; year += step) {
    years.push(year);
  }
  return years;
}

function getAllLevelsTimelineTickYears(firstYear, lastYear, step) {
  const years = [];
  for (let year = firstYear; year < 1000; year += step) {
    years.push(year);
  }
  for (let year = 1000; year <= lastYear; year += 100) {
    years.push(year);
  }
  return years;
}

function formatTimelineTickYear(year) {
  if (year === -400) return "400 000 AEC";
  if (year === -300) return "300 000 AEC";
  if (year < 0) return `${Math.abs(year)} AEC`;
  return String(year);
}

function getTimelineYearPosition(year, datedPoints, pixelsPerYear) {
  const first = datedPoints[0];
  const last = datedPoints[datedPoints.length - 1];
  if (year <= first.range.start) {
    return first.center + (year - first.range.start) * pixelsPerYear;
  }
  if (year >= last.range.start) {
    return last.center + (year - last.range.start) * pixelsPerYear;
  }
  for (let index = 1; index < datedPoints.length; index += 1) {
    const previous = datedPoints[index - 1];
    const next = datedPoints[index];
    if (year > next.range.start) continue;
    if (next.range.start === previous.range.start) return next.center;
    const progress = (year - previous.range.start) / (next.range.start - previous.range.start);
    return previous.center + (next.center - previous.center) * progress;
  }
  return last.center;
}

function getTimelineEffectiveRange(event, displayMode = null) {
  if (displayMode === "Tous") {
    return getTimelineAllLevelsRange(event);
  }
  if (event.level === "CM1" && event.date === "476-1492") {
    return { start: 1300, end: 1492 };
  }
  if (event.level === "CM1" && event.date === "XIe-XIIIe siècles") {
    return { start: 1300, end: 1300 };
  }
  if (event.level === "4e" && event.date === "1643-1715") {
    return { start: 1690, end: 1715 };
  }
  if (event.level === "4e" && event.date === "Années 1670-années 1750") {
    return { start: 1690, end: 1750 };
  }
  if (event.level === "4e" && normalize(event.date) === "xviiie siecle") {
    return { start: 1700, end: 1800 };
  }
  const range = getTimelineRange(event.date);
  if (range) return range;
  if (Number.isFinite(event.order)) {
    const year = Math.trunc(event.order);
    return { start: year, end: year };
  }
  return null;
}

function getTimelineAllLevelsRange(event) {
  const range = getTimelineEffectiveRange(event);
  if (!range) return null;
  return {
    start: getTimelineAllLevelsDisplayYear(range.start),
    end: getTimelineAllLevelsDisplayYear(range.end)
  };
}

function getTimelineAllLevelsScaleBounds() {
  return {
    start: getTimelineAllLevelsDisplayYear(-1300),
    end: getTimelineAllLevelsDisplayYear(2020)
  };
}

function getTimelineAllLevelsDisplayYear(year) {
  if (year <= -400000) return -1280;
  if (year <= -300000) return -1220;
  if (year <= -10000) return -1160;
  if (year <= -3000) return -1100;
  // À partir de l'an 1000, un siècle occupe 900 px sur la frise générale.
  if (year >= 1000) return 1000 + (year - 1000) * 3;
  return year;
}

function getTimelinePixelsPerYear(yearSpan) {
  if (yearSpan <= 120) return 12;
  if (yearSpan <= 300) return 6;
  if (yearSpan <= 1000) return 3;
  if (yearSpan <= 3000) return 1.3;
  if (yearSpan <= 12000) return 0.28;
  return 0.02;
}

function getTimelineGap(yearDelta, pixelsPerYear, eventWidth = 280, proportionalScale = false) {
  if (!Number.isFinite(yearDelta)) return 44;
  if (proportionalScale) {
    if (yearDelta <= 0) return 18;
    const centerDistance = Math.max(190, yearDelta * pixelsPerYear);
    return centerDistance - eventWidth;
  }
  return Math.max(18, Math.min(360, yearDelta * pixelsPerYear));
}

function updateTimelineAxisLength() {
  if (!els.timelineList) return;
  const events = els.timelineList.querySelectorAll(".timeline-event");
  if (!events.length) {
    els.timelineList.style.setProperty("--timeline-axis-left", "8px");
    els.timelineList.style.setProperty("--timeline-axis-width", "0px");
    return;
  }
  const first = events[0];
  const last = events[events.length - 1];
  const firstCenter = first.offsetLeft + first.offsetWidth / 2;
  const lastCenter = last.offsetLeft + last.offsetWidth / 2;
  const tickPositions = [...els.timelineList.querySelectorAll(".timeline-axis-tick, .timeline-axis-boundary")]
    .map((tick) => tick.offsetLeft)
    .filter((left) => Number.isFinite(left));
  const axisLeft = Math.min(firstCenter, ...tickPositions);
  const axisRight = Math.max(lastCenter, ...tickPositions);
  els.timelineList.style.setProperty("--timeline-axis-left", `${axisLeft}px`);
  els.timelineList.style.setProperty("--timeline-axis-width", `${Math.max(0, axisRight - axisLeft)}px`);
}

function getTimelineAxisBreaks(events, placement) {
  if (!events.length || !placement.centers?.length) return [];
  return events
    .map((event, index) => {
      if (!hasTimelineAxisBreakAfter(event) || !Number.isFinite(placement.centers[index + 1])) return null;
      const currentRight = placement.centers[index] + placement.eventWidth / 2 + 12;
      const nextLeft = placement.centers[index + 1] - placement.eventWidth / 2 - 12;
      const width = nextLeft - currentRight;
      return width > 24 ? { left: Math.round(currentRight), width: Math.round(width) } : null;
    })
    .filter(Boolean);
}

function hasTimelineBreakAfter(event) {
  return false;
}

function hasTimelineAxisBreakAfter(event) {
  if (event.level !== "6e") return false;
  return event.date === "Vers 400 000 AEC"
    || event.date === "Vers 300 000 AEC"
    || event.date === "Vers 10 000-9 000 AEC";
}

function getTimelinePointYear(event) {
  if (Number.isFinite(event.order)) return Math.trunc(event.order);
  const range = getTimelineRange(event.date);
  return range && range.start === range.end ? range.start : null;
}

function getTimelineRange(date) {
  const value = normalize(date)
    .replace(/\s+/g, " ")
    // Les milliers peuvent être écrits avec une espace : « 10 000 AEC ».
    .replace(/(\d)\s+(?=\d{3}\b)/g, "$1");
  const decadeRange = value.match(/annees\s+(\d{3,4})\s*[-–]\s*annees\s+(\d{3,4})/);
  if (decadeRange) {
    const start = Number(decadeRange[1]);
    const end = Number(decadeRange[2]);
    return { start: Math.min(start, end), end: Math.max(start, end) };
  }
  const alternateEndRange = value.match(/(\d{3,4})\s*[-–]\s*(\d{3,4})\s*\/\s*(\d{3,4})/);
  if (alternateEndRange) {
    const start = Number(alternateEndRange[1]);
    const end = Math.max(Number(alternateEndRange[2]), Number(alternateEndRange[3]));
    return { start: Math.min(start, end), end: Math.max(start, end) };
  }
  const yearRange = value.match(/(\d{1,6})\s*[-–]\s*(\d{1,6})\s*(aec)?/);
  if (yearRange) {
    const beforeCommonEra = value.includes("aec") || value.includes("av jc") || value.includes("av j c");
    const start = Number(yearRange[1]) * (beforeCommonEra ? -1 : 1);
    const end = Number(yearRange[2]) * (beforeCommonEra ? -1 : 1);
    return { start: Math.min(start, end), end: Math.max(start, end) };
  }
  const centuryRange = value.match(/\b([ivxlcdm]+)(?:e|eme|er|ier)\s*[-–]\s*([ivxlcdm]+)(?:e|eme|er|ier)\s+siecles?\b/);
  if (centuryRange) {
    const firstCentury = romanToNumber(centuryRange[1]);
    const lastCentury = romanToNumber(centuryRange[2]);
    if (firstCentury && lastCentury) {
      const beforeCommonEra = value.includes("aec") || value.includes("av jc") || value.includes("av j c");
      const start = beforeCommonEra ? -firstCentury * 100 : (firstCentury - 1) * 100 + 1;
      const end = beforeCommonEra ? -((lastCentury - 1) * 100 + 1) : lastCentury * 100;
      return { start: Math.min(start, end), end: Math.max(start, end) };
    }
  }
  const qualifiedCentury = value.match(/\b(debut|milieu|fin|dernier tiers|seconde moitie)\s+du\s+([ivxlcdm]+)(?:e|eme|er|ier)\s+siecle\b/);
  if (qualifiedCentury) {
    const centuryNumber = romanToNumber(qualifiedCentury[2]);
    if (centuryNumber) {
      const centuryStart = (centuryNumber - 1) * 100 + 1;
      const centuryEnd = centuryNumber * 100;
      const ranges = {
        debut: [centuryStart, centuryStart + 32],
        milieu: [centuryStart + 33, centuryStart + 66],
        fin: [centuryStart + 66, centuryEnd],
        "dernier tiers": [centuryStart + 66, centuryEnd],
        "seconde moitie": [centuryStart + 50, centuryEnd]
      };
      const [start, end] = ranges[qualifiedCentury[1]];
      return { start, end };
    }
  }
  const century = value.match(/\b([ivxlcdm]+)(?:e|eme|er|ier)\s+siecle\b/);
  if (century) {
    const centuryNumber = romanToNumber(century[1]);
    if (centuryNumber) {
      const beforeCommonEra = value.includes("aec") || value.includes("av jc") || value.includes("av j c");
      const start = beforeCommonEra ? -centuryNumber * 100 : (centuryNumber - 1) * 100 + 1;
      const end = beforeCommonEra ? -((centuryNumber - 1) * 100 + 1) : centuryNumber * 100;
      return { start: Math.min(start, end), end: Math.max(start, end) };
    }
  }
  const singleYear = value.match(/\b(\d{3,6})\s*(aec)?\b/) || value.match(/(\d{1,6})\s*(aec)?/);
  if (!singleYear) return null;
  const beforeCommonEra = value.includes("aec") || value.includes("av jc") || value.includes("av j c");
  const year = Number(singleYear[1]) * (beforeCommonEra ? -1 : 1);
  return { start: year, end: year };
}

function isTimelineDuration(date) {
  const value = normalize(date);
  return /(\d{3,4})\s*[-–]\s*(\d{2,4})/.test(value)
    || /([ivxlcdm]+e|ier)\s*[-–]\s*([ivxlcdm]+e|ier)\s+siecles/.test(value)
    || /\b[ivxlcdm]+(?:e|eme|er|ier)\s+siecle\b/.test(value)
    || /annees\s+\d{3,4}\s*[-–]\s*annees\s+\d{3,4}/.test(value)
    || /(debut|milieu|fin|dernier tiers|seconde moitie)\s+du\s+[ivxlcdm]+e\s+siecle/.test(value);
}

function romanToNumber(value) {
  const numerals = { i: 1, v: 5, x: 10, l: 50, c: 100, d: 500, m: 1000 };
  return [...value].reduce((total, letter, index, letters) => {
    const current = numerals[letter] || 0;
    const next = numerals[letters[index + 1]] || 0;
    return total + (current < next ? -current : current);
  }, 0);
}

function moveTimeline(direction) {
  const amount = Math.max(320, els.timelineList.clientWidth * 0.8);
  els.timelineList.scrollBy({ left: direction * amount, behavior: "smooth" });
}

function subjectColor(subject) {
  if (subject === "Geographie") return "var(--geo)";
  if (subject === "EMC") return "var(--civic)";
  return "var(--history)";
}

function getHistoricalPeriod(period) {
  if (period === "Moderne") return "Temps modernes";
  if (period === "XIXe siècle" || period === "XXe siècle" || period === "Monde contemporain") return "Époque contemporaine";
  return period;
}

function periodColor(period) {
  if (period === "Préhistoire") return "var(--period-prehistory)";
  if (period === "Antiquité") return "var(--period-antiquity)";
  if (period === "Moyen Âge") return "var(--period-medieval)";
  if (period === "Temps modernes") return "var(--period-modern)";
  return "var(--period-contemporary)";
}

function timelineAxisBackground(events, displayMode = null, scaleBounds = null) {
  if (!events.length) return "var(--muted)";
  if (displayMode === "Tous" && scaleBounds) {
    return timelineAllLevelsAxisBackground(scaleBounds);
  }
  const levels = new Set(events.map((event) => event.level));
  if (levels.size === 1 && levels.has("CM1")) {
    const minYear = 1300;
    const maxYear = 1800;
    const transition = ((1492 - minYear) / (maxYear - minYear)) * 100;
    const medieval = periodColor("Moyen Âge");
    const modern = periodColor("Temps modernes");
    return `linear-gradient(90deg, ${medieval} 0%, ${medieval} ${transition.toFixed(2)}%, ${modern} ${transition.toFixed(2)}%, ${modern} 100%)`;
  }
  const rangedEvents = events
    .map((event) => ({ event, range: getTimelineEffectiveRange(event) }))
    .filter(({ range }) => range);
  if (!rangedEvents.length) return "var(--muted)";
  const periods = rangedEvents.map(({ event }) => getHistoricalPeriod(event.period));
  if (new Set(periods).size === 1) return periodColor(periods[0]);
  const minYear = Math.min(...rangedEvents.map(({ range }) => range.start));
  const maxYear = Math.max(...rangedEvents.map(({ range }) => range.end));
  const yearSpan = Math.max(1, maxYear - minYear);

  const segments = [];
  rangedEvents.forEach(({ event, range }, index) => {
    const period = getHistoricalPeriod(event.period);
    const previousRange = rangedEvents[index - 1]?.range;
    const nextRange = rangedEvents[index + 1]?.range;
    const startYear = previousRange ? (previousRange.start + range.start) / 2 : minYear;
    const endYear = nextRange ? (range.start + nextRange.start) / 2 : maxYear;
    const start = ((startYear - minYear) / yearSpan) * 100;
    const end = ((endYear - minYear) / yearSpan) * 100;
    const previous = segments[segments.length - 1];
    if (previous && previous.period === period) {
      previous.end = end;
    } else {
      segments.push({ period, start, end });
    }
  });

  const stops = segments.flatMap((segment) => {
    const color = periodColor(segment.period);
    return [`${color} ${segment.start.toFixed(2)}%`, `${color} ${segment.end.toFixed(2)}%`];
  });
  return `linear-gradient(90deg, ${stops.join(", ")})`;
}

function timelineAllLevelsAxisBackground(scaleBounds) {
  const minYear = scaleBounds.start;
  const maxYear = scaleBounds.end;
  const span = Math.max(1, maxYear - minYear);
  const boundaries = [
    { year: minYear, period: "Préhistoire" },
    { year: getTimelineAllLevelsDisplayYear(-900), period: "Antiquité" },
    { year: getTimelineAllLevelsDisplayYear(476), period: "Moyen Âge" },
    { year: getTimelineAllLevelsDisplayYear(1492), period: "Temps modernes" },
    { year: getTimelineAllLevelsDisplayYear(1789), period: "Époque contemporaine" },
    { year: maxYear, period: "Époque contemporaine" }
  ];
  const stops = [];
  boundaries.slice(0, -1).forEach((boundary, index) => {
    const next = boundaries[index + 1];
    const start = ((boundary.year - minYear) / span) * 100;
    const end = ((next.year - minYear) / span) * 100;
    const color = periodColor(boundary.period);
    stops.push(`${color} ${start.toFixed(2)}%`, `${color} ${end.toFixed(2)}%`);
  });
  return `linear-gradient(90deg, ${stops.join(", ")})`;
}

function groupColor(index, total) {
  const palette = ["#e77b3e", "#993f52", "#176e86", "#78906d", "#c38a44", "#705676"];
  return palette[index % palette.length];
}

function shuffle(list) {
  const copy = [...list];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function normalize(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function loadJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 1600);
}
