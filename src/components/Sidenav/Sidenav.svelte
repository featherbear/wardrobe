<script>
  import SidenavEntry from "./SidenavEntry.svelte";

  export let extraEntries = [];

  import {getContext} from "svelte";
  let ctx = getContext('ctx')
console.log(ctx);
  let entries = [...ctx.categories, ...extraEntries];

</script>

<style>
  .sidenav {
    height: 100%;
  }
</style>

<div class="sidenav">
  {#each entries as entry}
    <SidenavEntry data={entry} />
  {/each}
</div>
