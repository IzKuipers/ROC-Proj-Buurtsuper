<script lang="ts">
  import { onMount } from "svelte";
  import type { Product } from "../../../ts/products/interface";

  export let product: Product;

  let price = "€--.--";

  onMount(() => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
    });

    price = formatter.format(product.price);
  });
</script>

<div class="product">
  <div class="image">
    <img src={product.image} alt="" />
  </div>
  <h4 class="product-name">{product.name}</h4>
  <p class="price">{price}</p>
</div>
