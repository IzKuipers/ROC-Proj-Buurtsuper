<script lang="ts">
  import { PRODUCTS } from "../../ts/products/store";
  import Product from "./GebakSchotels/Product.svelte";
</script>

<h1 class="title">Gebak & Schotels</h1>
<div class="products">
  {#each PRODUCTS as product}
    <Product {product} />
  {/each}
</div>
