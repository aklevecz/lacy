<script>
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  import data from "$lib/data";
  import { capitalizeFirstLetter } from "$lib/utils";
  import LacyMap from "$lib/components/lacy-map.svelte";
  import orientationSvelte from "$lib/stores/orientation.svelte";
  import Modal from "$lib/components/modal.svelte";

  /** @type {'artists' | 'info'} view */
  let view = $state("artists");

  let showDoNotEnter = $state(false)

  onMount(() => {
    if (browser) {
      const allRecs = document.querySelectorAll("rect");
      const unitRecs = Array.from(allRecs).filter((rec) => rec.id.includes("unit"));

      for (const unitRec of unitRecs) {

        const unitNumber = unitRec.id.replace("unit_x5F_", "");
        const artist = data.find((artist) => artist.unit === unitNumber);

        if (artist) {
        unitRec.style.fill = "green";
        unitRec.style.opacity = "0.25";
        } else {
          unitRec.style.fill = "black";
          unitRec.style.opacity = "0.75";
        }

        unitRec.addEventListener("click", () => {
          if (artist) {
            const link = `/${artist.name}`;
            goto(link);
          } else {
            showDoNotEnter = true;
          }
        });
      }
    }
  });
</script>

<div class={orientationSvelte.state} style="display:flex;height:{orientationSvelte.dimensions.height}px;padding:1rem;">
  <div class="before" style="flex: 0 1;">
    <h2>LACY OPEN STUDIOS</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </p>
  </div>
  <div class="map" style="display:flex;justify-content:center;">
    <!-- <img style="max-width:100%;max-height:90%;" src="/lacy-map.svg" alt="Lacy Map" /> -->
    <LacyMap style="max-width:100%;height:90%;" />
  </div>
  <div class="after" style="">
    <nav style="display:flex;margin:1rem .5rem;gap:1rem;">
      <button onclick={() => (view = "artists")}>ARTISTS</button>
      <button onclick={() => (view = "info")}>INFO</button>
    </nav>
    {#if view === "artists"}
      <div style="display:flex;flex-direction:column;gap:.5rem;">
        {#each data as artist}
          <a href={`/${artist.name}`} class="artist">
            <div style="display:flex;gap:.5rem;align-items: center;">
              <h3>{capitalizeFirstLetter(artist.name)}</h3>
              <div class="unit">
                {artist.unit}
              </div>
            </div>
            <div>{artist.title}</div>
          </a>
        {/each}
      </div>
    {/if}
    {#if view === "info"}
      <div style="margin-left:.5rem;">
        <h3>Info about the event</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>
    {/if}
  </div>
</div>
<Modal bind:showModal={showDoNotEnter} title="DO NOT ENTER">
  <p>Sorry, this is a private studio. Please do not enter.</p>
</Modal>
<style>
  .portrait {
    flex-direction: column;
  }
  .portrait > div {
    flex: 1 0 33%;
  }
  .landscape > .before {
    display: none;
  }
  .landscape > .after {
    display: none;
  }
  .map {
    width: 100%;
  }
  .artist {
    /* border: 1px solid var(--accent-color); */
    padding: 0.5rem;
  }
  .landscape {
    flex-direction: row;
  }
</style>
