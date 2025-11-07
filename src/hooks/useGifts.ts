interface Gift {
  id: number;
  name: string;
  description: string;
}

export const useGifts = (): Gift[] => {
  return [
    {
      id: 1,
      name: "Chocolat chaud",
      description: "Je prépare un chocolat chaud maison. Action : installe-toi sous une couverture, je m'occupe du reste."
    },
    {
      id: 2,
      name: "Je fais la vaisselle",
      description: "Je prends la vaisselle ce soir. Action : profite de la table propre sans lever le petit doigt."
    },
    {
      id: 3,
      name: "Massage express",
      description: "Massage des épaules de 5 minutes. Action : mets-toi à l'aise, je m'occupe de la tension."
    },
    {
      id: 4,
      name: "Ton plat",
      description: "Je cuisine le plat de ton choix ce soir. Action : dis-moi ce que tu veux et je m'occupe des ingrédients."
    },
    {
      id: 5,
      name: "Biscuits chauds",
      description: "Je prépare des biscuits maison. Action : garde un espace pour la dégustation — ou prends tout, je comprendrais."
    },
    {
      id: 6,
      name: "Concours de blagues",
      description: "On échange nos pires blagues. Action : envoie ta meilleure blague, je riposterai avec la mienne (la plus nulle possible)."
    },
    {
      id: 7,
      name: "Mini déco",
      description: "Je pose une petite déco qui change l'ambiance. Action : choisis où tu veux que je la mette."
    },
    {
      id: 8,
      name: "Café du matin",
      description: "Je te prépare le café du matin. Action : dis comment tu le veux et je te l'apporte (ou photo si à distance)."
    },
    {
      id: 9,
      name: "Danse 5 min",
      description: "Danse cinq minutes sur ta chanson préférée. Action : lance la musique, je t'envoie un GIF pour applaudir."
    },
    {
      id: 10,
      name: "Petit soin",
      description: "Je gère une corvée pour toi (aspirateur, linge ou vaisselle). Action : choisis la corvée, je m'en charge."
    },
    {
      id: 11,
      name: "Farce douce",
      description: "Je prépare une farce légère pour te surprendre. Action : reste prête à rigoler et garde ton téléphone à portée."
    },
    {
      id: 12,
      name: "Photo du coin",
      description: "Prends une photo d'un coin que tu trouves joli aujourd'hui. Action : envoie-la, je te dis pourquoi je l'aime (en bref)."
    },
    {
      id: 13,
      name: "Dessert maison",
      description: "Je fais un dessert simple ce soir. Action : donne-moi une préférence (chocolat, fruit, ou surprise)."
    },
    {
      id: 14,
      name: "Playlist rapide",
      description: "Je crée une playlist de 6 titres pour toi. Action : envoie trois titres que tu veux dedans."
    },
    {
      id: 15,
      name: "Selfie clin",
      description: "Envoie un selfie clin d'oeil. Action : je réponds avec un selfie encore plus ridicule."
    },
    {
      id: 16,
      name: "Photo manteau",
      description: "Porte ton manteau préféré aujourd'hui et envoie une photo. Action : je te renvoie un compliment court et sincère."
    },
    {
      id: 17,
      name: "Note vocale",
      description: "Je t'envoie une note vocale drôle à écouter quand tu veux. Action à distance : écoute-la quand tu as besoin d'un sourire."
    },
    {
      id: 18,
      name: "Balade en visio",
      description: "Appel vidéo pendant la balade pour me montrer ta rue. Action à distance : fais le tour et commente en direct."
    },
    {
      id: 19,
      name: "Playlist surprise",
      description: "Je t'envoie une playlist surprise pour la journée. Action à distance : écoute-la et dis-moi ton morceau préféré."
    },
    {
      id: 20,
      name: "Livraison gourmande",
      description: "Je commande un petit plaisir chez toi (pâtisserie ou snack). Action à distance : dis-moi ton adresse et je m'occupe de la surprise."
    },
    {
      id: 21,
      name: "Chasse photo",
      description: "Je te donne 3 objets à trouver et photographier. Action à distance : envoie les photos dans la journée."
    },
    {
      id: 22,
      name: "Recette test",
      description: "Je t'envoie une recette simple à tester. Action à distance : cuis-la et envoie une photo du résultat."
    },
    {
      id: 23,
      name: "Film synchronisé",
      description: "On regarde le même film au même moment et on commente. Action à distance : choisis le film, on lance en même temps."
    },
    {
      id: 24,
      name: "Merci + surprise",
      description: "Je t'envoie un message court et une petite surprise digitale. Action à distance : lis et profite de la surprise."
    },
  ];
};

