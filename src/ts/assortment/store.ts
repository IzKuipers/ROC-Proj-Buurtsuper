import type { Isles } from "./interface";
import zuivelImg from "../../assets/assortiment/alana-harris-TcpYjs6qF9o-unsplash.jpg";
import groenteImg from "../../assets/assortiment/thomas-le-pRJhn4MbsMM-unsplash.jpeg";
import alcoholImg from "../../assets/assortiment/pexels-junjie-xu-3028500.jpeg";
import fruitImg from "../../assets/assortiment/pexels-ian-turnell-709567.jpg";
export const ISLES: Isles = [
  {
    name: "Groente",
    description:
      "Op onze groenteafdeling vind je een overvloed aan verse, knapperige groenten van het seizoen. Van sappige tomaten tot knapperige sla, we bieden een gezonde variëteit om uit te kiezen.",
    image: groenteImg,
  },
  {
    name: "Fruit",
    description:
      "Ontdek een kleurrijke oase op onze fruitafdeling. Hier vind je zoete sappige bessen, sappige appels, exotische mango's en nog veel meer. Geniet van de natuurlijke zoetheid en vitamines.",
    image: fruitImg,
    inverted: true,
  },
  {
    name: "Zuivel",
    description:
      "Op onze zuivelafdeling vindt u alles van kazen tot yoghurt. Alle producten zijn lokaal geproduceert, waardoor het beter smaakt, een lagere prijs heeft, en goed is voor het milieu.",
    image: zuivelImg,
  },
  {
    name: "Alcohol",
    description:
      "In onze alcoholafdeling hebben we een uitgebreide selectie van wijn, bier en sterke drank. Of je nu op zoek bent naar een fijne rode wijn, ambachtelijk bier of premium whisky, we hebben iets voor elke smaak. Geniet met mate.",
    image: alcoholImg,
    inverted: true,
  },
];
