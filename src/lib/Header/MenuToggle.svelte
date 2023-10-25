<script lang="ts">
  import { MenuOpened } from "../../ts/ui";

  function toggle() {
    $MenuOpened = !$MenuOpened;
  }
</script>

<button class="menu-toggle material-icons-round" on:click={toggle}>
  {$MenuOpened ? "close" : "menu"}
</button>
