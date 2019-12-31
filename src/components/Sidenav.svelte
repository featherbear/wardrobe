<script>
  import SidenavEntry from "./SidenavEntry.svelte";
  export let borderRight = false;
  export let borderLeft = false;
</script>

<style>
  .sidenav {
    height: 100%;
  }
</style>

<div class="sidenav">
  <SidenavEntry {...$$props} />
  <SidenavEntry {...$$props} />
  <SidenavEntry {...$$props} />
  <SidenavEntry {...$$props} />

</div>
