<script lang="ts">
  import type { Isle } from "../../../ts/assortment/interface";

  export let isle: Isle;
</script>

<div class="isle" class:inverted={isle.inverted}>
  <div class="image">
    <img src={isle.image} alt="" />
  </div>
  <div class="info">
    <h1>{isle.name}</h1>
    <p>{isle.description}</p>
  </div>
</div>
