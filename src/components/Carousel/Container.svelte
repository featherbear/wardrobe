<script>
  let ready = false;
  let selected;

  import Carousel from "./Carousel.svelte";
  import CarouselMenu from "./Menu.svelte";

  export let data;

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
