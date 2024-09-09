<script>
  import ArtistList from "$lib/components/artist-list.svelte";
  import IndexInfo from "$lib/components/index-info.svelte";
  import LacyMap from "$lib/components/lacy-map.svelte";
  import orientationSvelte from "$lib/stores/orientation.svelte";

  /** @type {'artists' | 'info'} view */
  let view = $state("artists");
</script>

<svelte:head>
  <title>Lacy Open Studios</title>
  <meta property="og:title" content="Lacy Open Studios" />
  <meta property="og:description" content="Welcome to the 2nd Lacy Open Studios! Below is a map indicating the participating studios. We encourage you to check out each studio at your own pace. Please be mindful that these are people's livingspaces and to not disturb studios that are not participating." />
  
</svelte:head>
<div class={orientationSvelte.state} style="display:flex;min-height:{orientationSvelte.dimensions.height}px;padding:1rem;">
  <div class="before" style="flex: 0 1;">
    <h2>LACY OPEN STUDIOS</h2>
    <p>
      Welcome to the 2nd Lacy Open Studios! Below is a map indicating the participating studios. We encourage you to check out each studio at your own
      pace. Please be mindful that these are people's livingspaces and to not disturb studios that are not participating.
    </p>
  </div>
  <div class="map" style="display:flex;justify-content:center;">
    <LacyMap style="max-width:100%;height:90%;" />
  </div>
  <div class="after" style="">
    <nav style="display:flex;margin:1rem .5rem;gap:1rem;">
      <button class:active={view === "artists"} onclick={() => (view = "artists")}>ARTISTS</button>
      <button class:active={view === "info"} onclick={() => (view = "info")}>INFO</button>
    </nav>
    {#if view === "artists"}
      <ArtistList />
    {/if}
    {#if view === "info"}
      <IndexInfo />
    {/if}
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
