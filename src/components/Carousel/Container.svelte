<script>
  let ready = false;
  let selected = {};

  import Carousel from "./Carousel.svelte";
  import CarouselMenu from "./Menu.svelte";

  export let data;

  function left() {
    let index = (tiles.indexOf(selected) - 1 + tiles.length) % tiles.length;
    setState(tiles[index]._id);
  }

  function right() {
    let index = (tiles.indexOf(selected) + 1) % tiles.length;
    setState(tiles[index]._id);
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

    let index = randomPositiveIntegerButNot(
      tiles.length,
      tiles.indexOf(selected)
    );
    setState(tiles[index]._id);
  }

  import { getContext } from "svelte";
  const ctx = getContext("ctx");

  let tiles = [];
  $: {
    console.log(ctx.items);
    tiles = ctx.items.filter(i => i.category == data._id);
  }

  function getTile(id) {
    return tiles.find(t => t._id == id);
  }
  function getTileIndex(id) {
    return tiles.findIndex(t => t._id == id);
  }

  const state = getContext("state");

  $: {
    let targetStateID = state[data._id];
    if (targetStateID) {
      let tile = getTile(targetStateID);
      if (tile !== undefined) {
        selected = tile;
      }
    }
  }

  function setState(id) {
    console.log("Setting state to", id);
    state[data._id] = id;
    state.update();
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
