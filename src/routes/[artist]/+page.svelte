<script>
  import orientation from "$lib/stores/orientation.svelte";
  import { capitalizeFirstLetter } from "$lib/utils";

  /** @type {{data:import('./$types').PageData}} */
  let { data } = $props();
  let { artist } = data;

  const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
 . 
`;

  let description = artist?.description || loremIpsum;
</script>

<svelte:head>
  <title>{capitalizeFirstLetter(artist?.name || "")}</title>
</svelte:head>
<div class="{orientation.state} container" style="">
  <!-- <a href="/" style="align-self:flex-start;position:absolute;right:.5rem;top:.5rem;text-decoration:underline;"
    >Back to Map</a
  > -->
  <div style="flex:0 0 50%;">
    <div class="unit">{artist?.unit}</div>
    <div style="display:flex;align-items:center;gap:1rem;margin-bottom:.75rem;">
      <h1>
        {capitalizeFirstLetter(artist?.name || "")}
        <!-- <span class="unit">{artist?.unit}</span> -->
      </h1>
    </div>
    <!-- <div>{artist?.unit}</div> -->
    <img class="img {orientation.state}" alt="{artist?.name} the artist" src={artist?.image ?? "/owl.png"} style="" />
  </div>
  <div
    style="
  display:flex;
  flex-direction:column;
  flex:1;
  padding:0 .5rem;
  "
  >
    <div class="{orientation.state} description">{description}</div>
    <!-- <div style="margin:1rem 0;" class="links">
      {#each artist?.links ?? [] as link}
        <a target="_blank" href={link.href}>{link.title}</a>
      {/each}
    </div> -->
    <div
      style="
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-around;
    margin-top: 1rem;
    flex: 1;
    align-items: center;"
    >
      {#each artist?.links ?? [] as link}
        <a class="link-button" target="_blank" href={link.href}>{link.title}</a>
      {/each}
    </div>
  </div>
</div>
<div style="margin:1rem;">
  <a href="/" style="align-self:flex-start;text-decoration:underline;">Back to Map</a>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    min-height: 80vh;
  }

  h1 {
    font-size: 3rem;
  }
  .unit {
    font-size: 1.25rem;
    font-weight: bold;
    letter-spacing: 0.25rem;
    text-align: end;
    padding: 8px;
    margin-bottom: 8px;
    margin-right: 12px;
  }
  .container.landscape {
    flex-direction: row;
  }

  .img {
    object-fit: cover;
    width: 100%;
    /* height: 300px; */
  }

  .img.landscape {
    height: 70vh;
  }

  .description {
    font-size: 1.5rem;
    line-height: calc(1.5rem * 1.1);
  }

  .description.landscape {
    margin-top: 1.75rem;
  }

  a.link-button {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100px;
    height: 35px;
    text-align: center;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    /* background: var(--accent-color); */
    /* color: var(--primary-color); */
    background: var(--secondary-color);
    color: var(--primary-color);
    font-size: 1.5rem;
  }
</style>
