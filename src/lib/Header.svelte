<script lang="ts">
  import logo from "../assets/logo.png";
  import MenuToggle from "./Header/MenuToggle.svelte";
  import Nav from "./Header/Nav.svelte";
</script>

<header>
  <div class="banner">
    <img src={logo} alt="" />
    <h1>De Buurtsuper</h1>
  </div>
  <Nav />
  <MenuToggle />
</header>
