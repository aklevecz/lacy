<script>
  import { browser } from "$app/environment";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  import data from "$lib/data";
  import { capitalizeFirstLetter } from "$lib/utils";
  import LacyMap from "$lib/components/lacy-map.svelte";
  import orientationSvelte from "$lib/stores/orientation.svelte";

  let viewHeight = $state(0);
  let orientation = $state("portrait");
  function handleResize() {
    orientationSvelte.update(window)
    let width = window.innerWidth;
    let height = window.innerHeight;
    viewHeight = height;
    if (width > height) {
      orientation = "landscape";
    } else {
      orientation = "portrait";
    }
  }

  onMount(() => {
    if (browser) {
      window.addEventListener("resize", handleResize);
      handleResize();

      const allRecs = document.querySelectorAll("rect");
      const unitRecs = Array.from(allRecs).filter(rec => rec.id.includes("unit"));
      
      for (const unitRec of unitRecs) {
        unitRec.style.fill = "white"
        unitRec.style.opacity = "0.0";
        unitRec.addEventListener("click", () => {
           const unitNumber = unitRec.id.replace('unit_x5F_', '');
          const artist = data.find(artist => artist.unit === unitNumber);
          if (artist) {
            const link = `/${artist.name}`;
            goto(link)
          }
        });
      }
    }
  });
</script>

<div class={orientation} style="display:flex;height:{viewHeight}px;padding:1rem;">
  <div class="before" style="flex: 0 1;">
    <h2>LACY OPEN STUDIOS</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
  </div>
  <div class="map" style="display:flex;justify-content:center;">
    <!-- <img style="max-width:100%;max-height:90%;" src="/lacy-map.svg" alt="Lacy Map" /> -->
    <LacyMap style="max-width:100%;height:90%;"/>
  </div>
  <div class="after" style="">
    <h2 style="margin:1rem 0;">ARTISTS</h2>
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
  </div>
</div>

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
    /* border: 1px solid var(--secondary-color); */
    padding: .5rem;
  }
  .landscape {
    flex-direction: row;
  }
</style>
