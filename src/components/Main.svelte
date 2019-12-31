<script>
  import Button from "./Button.svelte";
  import Carousel from "./Carousel";

  import { getContext, onMount } from "svelte";
  const database = getContext("database");

  onMount(() => (window.hehe = database));
  // database.categories.post({
  //   name: "hehe"
  // });
</script>

<style>
  .content {
    height: 100%;
  }
</style>

<div class="content">

  <!-- {#await database.categories.allDocs({ include_docs: true }) then data}
    {#each data.rows as category}
      <Carousel id={category.id} />
    {/each}
  {/await} -->

  <!-- <Button>Random</Button>
  <Button>Save</Button> -->
</div>
