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
  description = loremIpsum;
</script>

<div class="{orientation.state} container" style="">
  <a href="/" style="align-self:flex-start;position:absolute;right:.5rem;top:.5rem;">Back to Map</a>
  <div style="flex:0 0 50%;">
    <div style="display:flex;align-items:center;gap:1rem;margin-bottom:.75rem;">
      <h2>
        {capitalizeFirstLetter(artist?.name || "")}
        <!-- <span class="unit">{artist?.unit}</span> -->
      </h2>
      <div class="unit">{artist?.unit}</div>
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
    <div
      style="
    display: flex;
    gap: 1rem;
    justify-content: space-around;
    margin-top: 1rem;
    flex: 1;
    align-items: end;"
    >
      {#each ["insta", "twitter"] as link}
        <a href={link}><img style="width:40px;" alt={`${link} icon`} src={`/icons/${link}-icon.svg`} /></a>
      {/each}
    </div>
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    min-height: 80vh;
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
    font-size: 1.25rem;
  }

  .description.landscape {
    margin-top: 1.75rem;
  }
</style>
