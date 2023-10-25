<script lang="ts">
  import { currentHash, registeredPages } from "../../ts/page";
</script>

<nav>
  {#each Object.entries($registeredPages) as [hash, caption]}
    {#if caption}
      <a href={hash} class:active={$currentHash == `${hash}`}>{caption}</a>
    {/if}
  {/each}
</nav>
