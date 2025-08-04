<script>
  import ArtistList from "$lib/components/artist-list.svelte";
  import LacyMap from "$lib/components/lacy-map.svelte";
  import OutdoorSchedule from "$lib/components/outdoor-schedule.svelte";
  import orientationSvelte from "$lib/stores/orientation.svelte";

  /** @type {'artists' | 'food' | 'info'} view */
  let view = $state("artists");
</script>

<svelte:head>
  <title>Lacy Studios</title>
  <meta property="og:title" content="Lacy Studios" />
  <meta
    property="og:description"
    content="Lacy Studio Lofts in Los Angeles, CA. 2684 Lacy St. 90031"
  />
  <meta property="og:image" content={"/seo-img.png"} />
</svelte:head>
<div
  class={orientationSvelte.state}
  style="display:flex;flex-wrap:wrap;min-height:{orientationSvelte.dimensions
    .height}px;padding:1rem;"
>
  <div class="before" style="flex: 1 0 100%;">
    <h1>LACY STUDIOS</h1>
  </div>
  <div
    class="map"
    style="display:flex;flex-direction:column;align-items:center;"
  >
    <LacyMap style="" />
  </div>
  <OutdoorSchedule />
  <div class="after" style="">
    {#if view === "artists"}
      <ArtistList />
    {/if}
  </div>
</div>

<style>
  h1 {
    text-align: center;
    color: var(--black);
    padding: 8px;
  }
  .portrait {
    flex-direction: column;
  }
  .portrait > div {
    flex: 1 0 33%;
  }

  .landscape .map {
    height: 90vh;
  }

  @media (max-width: 768px) {
    .landscape .before {
      display: none;
    }
    .landscape > .after {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .after {
      padding: 0 3rem;
    }
  }

  .map {
    width: 100%;
    max-width: 768px;
    height: 300px;
  }
  .landscape {
    flex-direction: row;
  }
  button {
    transition: opacity 0.5s;
  }
  button.active {
    opacity: 0.5;
  }
</style>
