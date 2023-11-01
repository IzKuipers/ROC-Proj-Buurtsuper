import type { Products } from "./interface";
import ananas from "../../assets/producten/ananasvlaai.jpg";
import appelflap from "../../assets/producten/appelflap.jpg";
import appelkruimel from "../../assets/producten/appel-kruimelvlaai.jpg";
import bananensoes from "../../assets/producten/Banaan-soes.jpg";
import berlinerbol from "../../assets/producten/berliner_bol.jpg";
import chocotaart from "../../assets/producten/Chocolade vierkantetaart.jpg";
import kersenflap from "../../assets/producten/kersenflap-met-slagroom.jpg";
import kersenvlaai from "../../assets/producten/KERSENVLAAI.jpg";
import perenvlaai from "../../assets/producten/perenvlaai.png";
import tompouce from "../../assets/producten/tompouce.jpg";

export const PRODUCTS: Products = [
  { name: "Ananasvlaai", price: 5.5, image: ananas },
  { name: "Appelflap", price: 5.5, image: appelflap },
  { name: "Appel-kruimelvlaai", price: 5.5, image: appelkruimel },
  { name: "Banaan-soes", price: 5.5, image: bananensoes },
  { name: "Beliner-Bol", price: 5.5, image: berlinerbol },
  { name: "Chocoladetaart", price: 5.5, image: chocotaart },
  { name: "Kersenflap met Slagroom", price: 5.5, image: kersenflap },
  { name: "Kersenvlaai", price: 5.5, image: kersenvlaai },
  { name: "Perenvlaai", price: 5.5, image: perenvlaai },
  { name: "Tompouce", price: 5.5, image: tompouce },
];
