<script>
  import ArtistList from "$lib/components/artist-list.svelte";
  import FoodList from "$lib/components/food-list.svelte";
  import Smiler from "$lib/components/icons/smiler.svelte";
  import IndexInfo from "$lib/components/index-info.svelte";
  import LacyMap from "$lib/components/lacy-map.svelte";
  import orientationSvelte from "$lib/stores/orientation.svelte";

  /** @type {'artists' | 'food' | 'info'} view */
  let view = $state("artists");
</script>

<svelte:head>
  <title>Lacy Open Studios</title>
  <meta property="og:title" content="Lacy Open Studios" />
  <meta
    property="og:description"
    content="The 2nd Lacy Open Studios taking place on October 12th 2024 at Lacy Studio Lofts in Los Angeles, CA. 2684 Lacy St. 90031"
  />
  <meta property="og:image" content={"/seo-img.png"} />
</svelte:head>
<div
  class={orientationSvelte.state}
  style="display:flex;min-height:{orientationSvelte.dimensions.height}px;padding:1rem;"
>
  <div class="before" style="flex: 0 1;">
    <h1>LACY OPEN STUDIOS</h1>
    <p>
      Welcome to the 2nd Lacy Open Studios! You can see the participating studios on the map below. We encourage you to
      check out each studio at your own pace. Be mindful that you are wandering among people's livingspaces <Smiler />
    </p>
  </div>
  <div class="map" style="display:flex;justify-content:center;">
    <LacyMap style="max-width:100%;height:90%;" />
  </div>
  <div class="after" style="">
    <nav style="display:flex;margin:1rem .5rem;gap:1rem;">
      <button class:active={view === "artists"} onclick={() => (view = "artists")}>ARTISTS</button>
      <button class:active={view === "food"} onclick={() => (view = 'food')}>FOOD/MUSIC</button>
      <button class:active={view === "info"} onclick={() => (view = "info")}>INFO</button>
    </nav>
    {#if view === "artists"}
      <ArtistList />
    {/if}
    {#if view === "info"}
      <IndexInfo />
    {/if}
    {#if view === 'food'}
    <FoodList/>
    {/if}
  </div>
</div>

<style>
  h1 {
    text-align: center;
    /* background: var(--black); */
    color: var(--accent-color);
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
