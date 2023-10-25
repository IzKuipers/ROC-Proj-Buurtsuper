<script lang="ts">
  import { onMount } from "svelte";
  import "./css/main.css";
  import Header from "./lib/Header.svelte";
  import Page from "./lib/Page.svelte";
  import Assortiment from "./lib/page/Assortiment.svelte";
  import Contact from "./lib/page/Contact.svelte";
  import Herkomst from "./lib/page/Herkomst.svelte";
  import Home from "./lib/page/Home.svelte";
  import { currentHash, getHash, registeredPages } from "./ts/page";
  import GebakSchotels from "./lib/page/GebakSchotels.svelte";
  import PageNotFound from "./lib/page/PageNotFound.svelte";
  import SideBar from "./lib/SideBar.svelte";

  onMount(() => {
    setTimeout(() => {
      getHash();

      addEventListener("hashchange", getHash);
    }, 10);
  });
</script>

<svelte:head>
  <title>{$registeredPages[$currentHash] || "Home"} | De Buurtsuper</title>
</svelte:head>

<div class="content">
  <Header />

  <main class="page-{$currentHash.replace('#', '')}">
    <!--De pagina's die kunnen worden weergegeven-->
    <Page hash="home" caption="Home"><Home /></Page>
    <Page hash="assortiment" caption="Assortiment"><Assortiment /></Page>
    <Page hash="gebak-schotels" caption="Gebak & Schotels">
      <GebakSchotels />
    </Page>
    <Page hash="herkomst" caption=""><Herkomst /></Page>
    <Page hash="contact" caption="Contact"><Contact /></Page>
    <Page hash="notfound" caption=""><PageNotFound /></Page>
  </main>
  <SideBar />
</div>
