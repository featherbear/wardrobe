<script>
  export let entries;

  import Button from "./Button.svelte";
  import Carousel from "./Carousel";
</script>

<style>
  .content {
    height: 100%;
  }

  .content > :global(*) {
    padding-top: 5px;
  }
  .content > :global(*:last-child) {
    padding-bottom: 5px;
  }
</style>

<div class="content">
  {#each entries as category}
    <Carousel data={category} />
  {/each}

  <!--
    <Button>Random</Button>
    <Button>Save</Button>
  -->
</div>
