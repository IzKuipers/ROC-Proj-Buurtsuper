import { get, writable, type Writable } from "svelte/store";
import { MenuOpened } from "./ui";

export const registeredPages: Writable<Record<string, string>> = writable({});
export const currentHash = writable<string>("#home");

export function getHash() {
  const hash = location.hash || "#home";

  MenuOpened.set(false); // Sluit de sidebar

  currentHash.set(
    typeof get(registeredPages)[hash] == "string" ? hash : "#notfound" // Bestaat de pagina? Ga erheen. Zo niet, ga naar de 404.
  );
}
