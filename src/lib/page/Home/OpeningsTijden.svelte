<script lang="ts">
  import eigenaar from "../../../assets/eigenaar.jpg";
  import { OPENINGSTIJDEN } from "../../../ts/tijden";
</script>

<div class="openingstijden">
  <div class="tijden">
    <h1>Openingstijden</h1>
    <ul>
      {#each [...OPENINGSTIJDEN] as [dag, tijd]}
        <li>
          <span class="dag">{dag}</span>
          <span class="tijd">{tijd}</span>
        </li>
      {/each}
    </ul>
  </div>
  <img src={eigenaar} alt="" class="eigenaar" />
</div>
