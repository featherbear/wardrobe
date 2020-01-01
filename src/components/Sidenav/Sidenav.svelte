<script>
  import SidenavEntry from "./SidenavEntry.svelte";

  export let entries;

  let selectedEntry;
  function clickEvt(entry) {
    if (!(entry.id || entry._id)) return;
    selectedEntry = selectedEntry != entry ? entry : null;
  }
</script>

<style>
  .sidenav {
    /* height: 100%; */
  }
</style>

<div class="sidenav">
  {#each entries as entry}
    <SidenavEntry
      data={entry}
      selected={selectedEntry === entry}
      on:click={() => clickEvt(entry)} />
  {/each}
</div>
