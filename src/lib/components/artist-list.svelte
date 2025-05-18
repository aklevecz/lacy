<script>
  import data from "$lib/data";
  import { capitalizeFirstLetter } from "$lib/utils";
</script>

<div style="display:flex;flex-direction:column;gap:.5rem;">
  {#each data as artist}
    <a href={`/${artist.name}`} class="artist">
      <div style="display:flex;gap:.5rem;align-items: center;">
        <div class="unit">
          <!-- {artist.unit} -->
           {#each artist.unit.split(',') as unit}
            <div>{unit}</div>
          {/each}
        </div>
      </div>
      <div>
        <h3>{capitalizeFirstLetter(artist.name || artist.links[0].title)}</h3>
        <div>{artist.title }</div>
      </div>
    </a>
  {/each}
</div>

<style>
  a {
    display: flex;
    gap: 1rem;
    align-items: start;
  }
  .artist {
    /* border: 1px solid var(--accent-color); */
    padding: 0.5rem;
  }
  .unit {
    margin-top: 3px;
  }
</style>
