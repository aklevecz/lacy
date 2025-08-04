<script>
  let expanded = true;
</script>

<div class="schedule">
  <button class="header" on:click={() => expanded = !expanded}>
    <h2>Outdoor schedule</h2>
    <span class="toggle">{expanded ? '−' : '+'}</span>
  </button>
  
  {#if expanded}
    <div class="content">
      <div class="section">
        <h4>Courtyard Art</h4>
        <div class="items">
          <div class="item">
            <span class="name">Enrique Barajas Becerra</span>
            <span class="type">Stone sculptor</span>
          </div>
          <div class="item">
            <span class="name">Michael Schmidt</span>
            <span class="type">Photographer</span>
          </div>
          <div class="item">
            <span class="name">Elliott Giffis</span>
            <span class="type">Mens wear designer</span>
          </div>
        </div>
      </div>

      <div class="section">
        <h4>Courtyard Foods</h4>
        <div class="items">
          <div class="item">
            <span class="name">Witchies</span>
            <span class="type">sandwiches @eatwitchies</span>
          </div>
          <div class="item">
            <span class="name">Paru</span>
            <span class="type">Filipino sweets @paru_frances</span>
          </div>
        </div>
      </div>

      <div class="section">
        <h4>Music Schedule</h4>
        <div class="items">
          <div class="item">
            <span class="time">5:30</span>
            <span class="name">Paul Lai</span>
          </div>
          <div class="item">
            <span class="time">6:30</span>
            <span class="name">Dizz Brew</span>
          </div>
          <div class="item">
            <span class="time">7:30</span>
            <span class="name">Brutal Chunks</span>
          </div>
          <div class="item">
            <span class="time">8:30</span>
            <span class="name">Lil Pony 666</span>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .schedule {
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.75rem;
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    text-align: left;
  }

  .header:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  .toggle {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .content {
    padding: 0 0.75rem 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .section {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .items {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }

  .item {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-size: 0.9rem;
  }

  .time {
    font-size: 0.8rem;
    opacity: 0.7;
    min-width: 2.5rem;
  }

  .name {
    font-weight: 500;
  }

  .type {
    opacity: 0.7;
    font-size: 0.85rem;
  }

  h2 {
    margin: 0;
    font-size: 1.1rem;
  }

  h4 {
    margin: 0;
    font-size: 0.95rem;
    opacity: 0.9;
    margin-bottom: 0.25rem;
  }
</style>

