<script>
  import Button from "./Button.svelte";
  import Carousel from "./Carousel";

  import { getContext, onMount } from "svelte";
  const ctx = getContext("ctx");

</script>

<style>
  .content {
    height: 100%;
  }
</style>

<div class="content">

{#each ctx.categories as category}
  <Carousel data={category} />
{/each}

  <!-- <Button>Random</Button>
  <Button>Save</Button> -->
</div>
