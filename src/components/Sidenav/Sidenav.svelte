<script>
  import SidenavEntry from "./SidenavEntry.svelte";

  export let entries;

  let selectedEntry = null;
  function clickEvt(entry) {
    if (!entry._id) return;
    selectedEntry = selectedEntry != entry ? entry : null;
  }
</script>

<style>
  /* Mobile */
  @media (max-width: 320px) {
    .sidenav {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }
  }
</style>

<div class="sidenav">
  {#each entries as entry}
    <SidenavEntry
      data={entry}
      selected={selectedEntry === entry}
      on:click={() => clickEvt(entry)}
      on:close={() => (selectedEntry = null)} />
  {/each}
</div>
