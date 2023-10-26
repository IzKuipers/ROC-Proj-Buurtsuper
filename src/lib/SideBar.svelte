<script lang="ts">
  import { MenuOpened } from "../ts/ui";
  import Nav from "./Header/Nav.svelte";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="sidebar-shade"
  on:click={() => ($MenuOpened = false)}
  class:show={$MenuOpened}
/>
<div class="sidebar" class:show={$MenuOpened}>
  <Nav />
</div>
