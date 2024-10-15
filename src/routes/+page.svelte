<script>
  import ArtistList from "$lib/components/artist-list.svelte";
  import LacyMap from "$lib/components/lacy-map.svelte";
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
  style="display:flex;min-height:{orientationSvelte.dimensions.height}px;padding:1rem;"
>
  <div class="before" style="flex: 0 1;">
    <h1>LACY STUDIOS</h1>
  </div>
  <div class="map" style="display:flex;justify-content:center;">
    <LacyMap style="max-width:100%;height:90%;" />
  </div>
  <div class="after" style="">
    <nav style="display:flex;margin:1rem .5rem;gap:1rem;">
    </nav>
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
  .map {
    height: 300px;
  }
  .landscape .map {
    height: 90vh;
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
