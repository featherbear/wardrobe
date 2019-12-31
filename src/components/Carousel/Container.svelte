<script>
  let selected;
  export let data;

  import Carousel from "./Carousel.svelte";
  import CarouselMenu from "./Menu.svelte";

  function left() {
    console.log("leff");
  }
</script>

<style>
  .container > :global(*) {
    display: inline-block;
  }
</style>

<div class="container">
  <Carousel />
  <CarouselMenu on:random on:left on:right />
</div>
