<script lang="ts">
  import "./css/main.css";
  import { onMount } from "svelte";
  import Header from "./lib/Header.svelte";
  import { getHash } from "./ts/page";
  import Home from "./lib/page/Home.svelte";
  import Assortiment from "./lib/page/Assortiment.svelte";
  import Contact from "./lib/page/Contact.svelte";
  import Page from "./lib/Page.svelte";

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
    <Page hash="contact"><Contact /></Page>
    <Page hash="notfound">Pagina niet gevonden!</Page>
  </main>
</div>
