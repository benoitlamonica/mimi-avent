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
      name: "Masque gourmand",
      description: "Je te prépare un masque visage maison.",
      action: "Installe-toi confortablement, je t'apporte tout le nécessaire. Et je participe !"
    },
    {
      id: 6,
      name: "Scéance de sport",
      description: "Je créer pour toi une séance de sport rapide.",
      action: "Suis-moi pendant 15 minutes, on bouge ensemble."
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
      name: "Danse 5 min",
      description: "Danse cinq minutes sur ta chanson préférée.",
      action: "Lance la musique, je t'envoie un GIF pour applaudir."
    },
    {
      id: 10,
      name: "Petit soin",
      description: "Je gère une corvée pour toi (aspirateur, linge ou vaisselle).",
      action: "Choisis la corvée, je m'en charge."
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
      action: "Celui qui perd doit tourner une vidéo où il chante une chanson ridicule et la poste sur les réseaux."
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
      name: "Selfie clin",
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
      name: "Balade en visio",
      description: "Appel vidéo pendant la balade pour me montrer ta rue.",
      action: "Fais le tour et commente en direct."
    },
    {
      id: 19,
      name: "Playlist surprise",
      description: "Aujourd'hui c'est toi qui décide ce que j'écoute.",
      action: "Envoie-moi 5 chansons à ajouter à ma playlist."
    },
    {
      id: 20,
      name: "Les fleurs",
      description: "Tu as gagné des belle fleurs, virtuelles ou réelles selon la distance.",
      action: "Reçois une photo de fleurs fraîches."
    },
    {
      id: 21,
      name: "Chasse photo",
      description: "Je te donne 3 objets à trouver et photographier.",
      action: "Envoie les photos dans la journée."
    },
    {
      id: 22,
      name: "Recette test",
      description: "Je t'envoie une recette simple à tester.",
      action: "Cuis-la et envoie une photo du résultat."
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
      description: "Merci d'avoir suivi ce calendrier virtuel.",
      action: "Envoie moi ce message : 'Boubou président !' et tu recevras une petite surprise."
    },
  ];
};

