<script>
  import CarouselEntry from "./Entry.svelte";
  export let selected;
</script>

<style>
  .carousel {
    height: 100px;
    width: 100px;
    border: 3px solid black;
    border-radius: 20px;
    margin: 0 auto;
  }
</style>

<div class="carousel">
  <CarouselEntry {selected} />
</div>
