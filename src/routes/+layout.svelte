<script>
  import orientationSvelte from "$lib/stores/orientation.svelte";
  import { onMount } from "svelte";
    import "../app.css"
  import { browser } from "$app/environment";
    /** @type {{data:import('./$types').LayoutData, children:any}} */
    let { children } = $props();

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
    }})
  </script>


  {@render children()}
  <footer style="display:{orientation === 'portrait' ? "block" : "none"};font-size:2rem;text-align:center;">
    LOS 2024
  </footer>
<style>
:global(.unit) {
    background: var(--accent-color);
    padding: .25rem .5rem;
    /* border-radius:30px; */
    color: white;
}
footer {
      background: var(--secondary-color);
    color: var(--accent-color);
    padding: 1rem;
    font-weight: bold;
}
</style>