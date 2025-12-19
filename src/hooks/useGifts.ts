interface Gift {
  id: number;
  name: string;
  description: string;
  action: string;
}

export const useGifts = (): Gift[] => {
  return [
    {
      id: 1,
      name: "Chocolat chaud",
      description: "Je prépare un chocolat chaud maison.",
      action: "Installe-toi sous une couverture, je m'occupe du reste."
    },
    {
      id: 2,
      name: "Je fais la vaisselle",
      description: "Je prends la vaisselle ce soir.",
      action: "Profite de la table propre sans lever le petit doigt."
    },
    {
      id: 3,
      name: "Massage express",
      description: "Massage des épaules de 5 minutes.",
      action: "Mets-toi à l'aise, je m'occupe de la tension."
    },
    {
      id: 4,
      name: "Ton plat",
      description: "Je cuisine le plat de ton choix ce soir.",
      action: "Dis-moi ce que tu veux et je m'occupe des ingrédients."
    },
    {
      id: 5,
      name: "Surprise...",
      description: "La belle surprise du jour !",
      action: "Comme tu pars dans le béarn ce soir, attends moi avant de partir, je t'apporte un petit quelque chose...A ce soir mon coeur ❤️"
    },
    {
      id: 6,
      name: "Un petit mot",
      description: "Mon coeur, je t'écris un petit mot doux.",
      action: "Rien à faire aujourd'hui, juste lire mon mot avec un sourire. Hmm hmm hmm. Tu es le petit soleil qui rythme mes jours, et parfois mes nuits, ça fait presque 4 ans maintenant. Et franchement je vois même pas le temps passer. C'est comme un bon film qui dure très longtemps, on veut que jamais ça s'arrête. Profite bien de ton samedi, je t'aime fort. Boubou ❤️"
    },
    {
      id: 7,
      name: "Mini déco",
      description: "Je pose une petite déco qui change l'ambiance.",
      action: "Choisis ta déco, et dis-moi où tu veux que je la mette."
    },
    {
      id: 8,
      name: "Café du matin",
      description: "Je t'offre le petit déjeuner au carnaval, comme à l'ancienne.",
      action: "A toi de choisir ce que tu veux."
    },
    {
      id: 9,
      name: "Masque gourmand",
      description: "Je te prépare un masque visage maison.",
      action: "Installe-toi confortablement, je t'apporte tout le nécessaire. Et je participe !"
    },
    {
      id: 10,
      name: "Enigme",
      description: "Mon tout a 5 lettres. Si tu retires mes deux dernières lettres, il reste un son qu’on fait pour essayer de faire peur (mais en version mignonne). Si tu ne gardes que mes deux dernières lettres, on obtient la 3ème note de la gamme majeure. Je suis né un 27 février. Qui suis-je ?",
      action: "Envoie moi la réponse par message. Si tu réponds juste, tu gagnes un bisou surprise !"
    },
    {
      id: 11,
      name: "Oui",
      description: "Je dis oui à une de tes demandes (raisonnables hihi) aujourd'hui.",
      action: "Fais ta demande, je ne dirai pas non !"
    },
    {
      id: 12,
      name: "Mario Kart",
      description: "On fait une course de Mario Kart ensemble.",
      action: "Celui qui perd doit répondre à une question au choix."
    },
    {
      id: 13,
      name: "Dessert maison",
      description: "Je fais un dessert simple ce soir.",
      action: "Donne-moi une préférence (chocolat, fruit, ou surprise)."
    },
    {
      id: 14,
      name: "Sapin de Noël",
      description: "Aujourd'hui c'est journée Sapin !",
      action: "On décore ensemble le sapin de Noël, avec du chocolat chaud et des biscuits."
    },
    {
      id: 15,
      name: "Selfie",
      description: "Envoie un selfie clin d'oeil.",
      action: "Attention je réponds avec un selfie encore plus ridicule."
    },
    {
      id: 16,
      name: "L'essence",
      description: "Ceci est un chèque cadeau de 10 euros pour l'essence.",
      action: "Utilise-le quand tu en as besoin."
    },
    {
      id: 17,
      name: "Note vocale",
      description: "Je t'envoie une note vocale drôle à écouter quand tu veux.",
      action: "Écoute-la quand tu as besoin d'un sourire."
    },
    {
      id: 18,
      name: "C'est l'heure du QUIZZ",
      description: "Voici un quizz surprise sur moi.",
      action: "Réponds aux questions et découvre ton score ! https://forms.gle/3y3Y6YxX4Y6Z7o9F6"
    },
    {
      id: 19,
      name: "Playlist surprise",
      description: "Aujourd'hui c'est toi qui décide ce que j'écoute.",
      action: "Envoie-moi 5 chansons à découvrir."
    },
    {
      id: 20,
      name: "Compliments",
      description: "Voici une liste de compliments rien que pour toi.",
      action: "Rien à faire aujourd'hui, juste lire et sourire : Tu es une femme incroyable, mon rayon de soleil quand il fait froid (surtout dans ton appart), mais pas seulement, tu fais briller les gens autour de toi. Tu es tellement attentionnée, tu rends mes journées meilleures (bon mes nuits ça se discute le canapée est pas super confortable...). Au delà de ta beauté extérieure, c'est ta gentillesse et ta générosité qui me font craquer chaque jour un peu plus. Je suis l'homme le plus chanceux et tu es la femme la plus incroyable que je connaisse ❤️"
    },
    {
      id: 21,
      name: "Chasse aux objets",
      description: "3 objets de la maison à retrouver.",
      action: "J'ai caché 3 objets dans la maison. Trouve-les tous pour gagner un câlin surprise !"
    },
    {
      id: 22,
      name: "Rocket",
      description: "La photo impossible",
      action: "Envoie moi une photo de rocket qui tire la langue. Bon courage !"
    },
    {
      id: 23,
      name: "Film",
      description: "Aujourd'hui tu choisis le film que je regarde. Et j'suis obligé de le regarder jusqu'au bout !",
      action: "Envoie-moi le titre du film."
    },
    {
      id: 24,
      name: "Merci + surprise",
      description: "Merci d'avoir suivi ce calendrier virtuel. J'espère que ça t'a plu ! J'ai pris beaucoup de plaisir à le préparer pour toi ❤️",
      action: "Envoie moi ce message : 'Boubou président !' et tu recevras une petite surprise."
    },
  ];
};

