<script>
    import data from "$lib/food";
    import { capitalizeFirstLetter } from "$lib/utils";
  </script>
  
  <div style="display:flex;flex-direction:column;gap:.5rem;">
    {#each data as food}
      <div class="food">
        <div style="display:flex;gap:.5rem;align-items: center;">
          <div class="unit">
            <!-- {food.unit} -->
             {#each food.unit.split(',') as unit}
              <div>{unit}</div>
            {/each}
          </div>
        </div>
        <div style="flex:0 0 70%;">
          <h3>{capitalizeFirstLetter(food.name)}</h3>
          <!-- <div>{food.title}</div> -->
          <a target="_blank" href={food.links[0].href}>{food.links[0].title}</a>
        </div>
      </div>
    {/each}
  </div>
  
  <style>
    a {

    }
    .food { 
      display: flex;
      gap: 1rem;
      align-items: start;
      /* border: 1px solid var(--accent-color); */
      padding: 0.5rem;
    }
    .unit {
      margin-top: 3px;
      font-size: .75rem;
    }
  </style>
  