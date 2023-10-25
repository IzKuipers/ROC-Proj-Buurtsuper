import { get, writable, type Writable } from "svelte/store";
import { MenuOpened } from "./ui";

export const registeredPages: Writable<Record<string, string>> = writable({});
export const currentHash = writable<string>("#home");

export function getHash() {
  const hash = location.hash || "#home";

  MenuOpened.set(false);

  currentHash.set(get(registeredPages)[hash] ? hash : "#notfound");
}
