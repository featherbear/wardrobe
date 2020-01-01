<script>
  let ready = false;
  let selected = {};
  export let data;

  import { getContext } from "svelte";
  const ctx = getContext("ctx");
  const state = getContext("state");
  const { items } = ctx;

  function left() {
    if (!tiles.length) return;
    let index = (tiles.indexOf(selected) - 1 + tiles.length) % tiles.length;
    setState(tiles[index]._id);
  }

  function right() {
    if (!tiles.length) return;
    let index = (tiles.indexOf(selected) + 1) % tiles.length;
    setState(tiles[index]._id);
  }

  function random() {
    if (!tiles.length) return;
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

  let tiles = [];
  $: tiles = $items.filter(i => i.category == data._id);

  function getTile(id) {
    return tiles.find(t => t._id == id);
  }

  $: {
    let targetStateID = $state[data._id];
    if (targetStateID) {
      let tile = getTile(targetStateID);
      if (tile !== undefined) selected = tile;
    }
  }

  function setState(id) {
    state.update(state => ({ ...state, [data._id]: id }));
  }

  import Carousel from "./Carousel.svelte";
  import CarouselMenu from "./Menu.svelte";
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
