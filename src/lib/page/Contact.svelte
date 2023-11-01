<script lang="ts">
  import map from "../../assets/map.png";

  let user = "";
  let mail = "";
  let body = "";

  function submit(e: SubmitEvent) {
    e.preventDefault();
  }
</script>

<div class="contact">
  <div class="left">
    <img src={map} alt="" />
    <div class="geo">
      <h3>Of, bezoek de supermarkt</h3>
      <p>
        Wierseweg 122<br />
        1402 MS Balkendam<br />
        Nederland
      </p>
    </div>
  </div>
  <div class="right">
    <h2>Contact Opnemen</h2>
    <form action="" on:submit={submit}>
      <input type="text" bind:value={user} placeholder="Uw naam" required />
      <input
        type="email"
        bind:value={mail}
        placeholder="E-mailadres"
        required
      />
      <textarea bind:value={body} placeholder="Stel je vraag." required />
      <button type="submit">Bericht Versturen</button>
    </form>
  </div>
</div>
<hr />
<div class="history">
  <h1>Geschiedenis over de Buurtsuper</h1>
  <p>
    De Buurtsuper bestaat al een lange tijd! Om over de geschiedenis van de
    buurtsuper te lezen, klik hier.
  </p>
  <a href="#herkomst">Lees meer.</a>
</div>
