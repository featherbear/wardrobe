<script>
  export let id;
  let ready = false;
  let selected;

  import Carousel from "./Carousel.svelte";
  import CarouselMenu from "./Menu.svelte";

let data;

  import { getContext } from "svelte";
  const database = getContext("database");

  async function load() {
    data = await database.categories.get(id)
    console.log(data);
    ready = true;
  }
  load();

  function left() {
    console.log("leff");
  }
</script>

<style>
  .container > :global(*) {
    display: inline-block;
  }
</style>

{#if ready}
  <div class="container">
    <Carousel />
    <CarouselMenu on:random on:left on:right />
  </div>
{/if}
