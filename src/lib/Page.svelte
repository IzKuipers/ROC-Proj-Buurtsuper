<script lang="ts">
  import { onMount } from "svelte";
  import { currentHash, registeredPages } from "../ts/page";
  export let hash: string;

  onMount(() => {
    const registration = `#${hash}`;

    if (registeredPages.includes(registration)) return;

    console.log(`<Page> Registering ${registration}`);

    registeredPages.push(registration);
  });
</script>

{#if hash}
  <div class="page page-{hash}" class:show={$currentHash == `#${hash}`}>
    <slot />
  </div>
{/if}
