import { writable } from "svelte/store";

export const registeredPages: string[] = [];
export const currentHash = writable<string>("#home");

export function getHash() {
  const hash = location.hash || "#home";

  currentHash.set(registeredPages.includes(hash) ? hash : "#notfound");
}
