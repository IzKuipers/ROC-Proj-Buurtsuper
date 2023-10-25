<script lang="ts">
  import { onMount } from "svelte";
  import { currentHash, registeredPages } from "../ts/page";
  export let hash: string;
  export let caption: string;

  onMount(() => {
    const registration = `#${hash}`;

    if ($registeredPages[registration]) return;

    console.log(`<Page> Registering ${registration} as ${caption}`);

    $registeredPages[registration] = caption;
  });
</script>

{#if hash}
  <div class="page page-{hash}" class:show={$currentHash == `#${hash}`}>
    {#if $currentHash == `#${hash}`}
      <slot />
    {/if}
  </div>
{/if}
