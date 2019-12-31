<script>
  import SidenavEntry from "./SidenavEntry.svelte";

  export let entries;
</script>

<style>
  .sidenav {
    /* height: 100%; */
  }
</style>

<div class="sidenav">
  {#each entries as entry}
    <SidenavEntry data={entry} />
  {/each}
</div>
