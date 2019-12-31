<script>
  import SidenavEntry from "./SidenavEntry.svelte";

  export let data = [];
</script>

<style>
  .sidenav {
    height: 100%;
  }
</style>

<div class="sidenav">
  {#each data as entryData}
    <SidenavEntry data={entryData} />
  {/each}
</div>
