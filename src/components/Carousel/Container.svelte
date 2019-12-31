<script>
  let ready = false;
  let selected = {};
  let selectedIndex = 0;

  import Carousel from "./Carousel.svelte";
  import CarouselMenu from "./Menu.svelte";

  export let data;

  function left() {
    selectedIndex = (tiles.indexOf(selected) - 1 + tiles.length) % tiles.length;
  }

  function right() {
    selectedIndex = (tiles.indexOf(selected) + 1) % tiles.length;
  }

  function random() {
    const RNG = topInclusive => Math.floor(Math.random() * topInclusive);

    function randomPositiveIntegerButNot(topInclusive, not) {
      if (topInclusive === 0) return 0;
      if (topInclusive === 1) return 0;

      let result = not;
      while (result == not) {
        result = RNG(topInclusive);
      }
      return result;
    }

    selectedIndex = randomPositiveIntegerButNot(
      tiles.length,
      tiles.indexOf(selected)
    );
  }

  import { getContext } from "svelte";
  const ctx = getContext("ctx");

  let tiles;
  $: {
    tiles = ctx.items.filter(i => i.category == data._id);
  }

  $: {
    if (tiles.length) {
      selected = tiles[selectedIndex];
      console.log("Selected", selectedIndex);
    }
  }
</script>

<style>
  .container > :global(*) {
    display: inline-block;
  }
</style>

<div class="container">
  <Carousel {selected} />
  <CarouselMenu on:random={random} on:left={left} on:right={right} />
</div>
