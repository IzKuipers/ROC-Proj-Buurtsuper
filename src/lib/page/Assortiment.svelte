<script lang="ts">
  import { ISLES } from "../../ts/assortment/store";
  import Isle from "./Assortiment/Isle.svelte";
</script>

<div class="assortment">
  {#each ISLES as isle}
    <Isle {isle} />
  {/each}
</div>
