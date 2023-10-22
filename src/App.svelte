<script lang="ts">
  import { onMount } from "svelte";
  import "./css/main.css";
  import Header from "./lib/Header.svelte";
  import Page from "./lib/Page.svelte";
  import Assortiment from "./lib/page/Assortiment.svelte";
  import Contact from "./lib/page/Contact.svelte";
  import Herkomst from "./lib/page/Herkomst.svelte";
  import Home from "./lib/page/Home.svelte";
  import { getHash } from "./ts/page";

  onMount(() => {
    setTimeout(() => {
      getHash();

      addEventListener("hashchange", getHash);
    }, 10);
  });
</script>

<div class="content">
  <Header />

  <main>
    <!--De pagina's die kunnen worden weergegeven-->
    <Page hash="home"><Home /></Page>
    <Page hash="assortiment"><Assortiment /></Page>
    <Page hash="gebak-schotels">gebak scotels brrr</Page>
    <Page hash="herkomst"><Herkomst /></Page>
    <Page hash="contact"><Contact /></Page>
    <Page hash="notfound">Pagina niet gevonden!</Page>
  </main>
</div>
