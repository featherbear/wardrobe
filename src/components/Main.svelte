<script>
  import Button from "./Button.svelte";
  import Carousel from "./Carousel";

  import { getContext, onMount } from "svelte";
  const ctx = getContext("ctx");
  
  let categories = [];
    // categories = $ctx.categories

</script>

<style>
  .content {
    height: 100%;
  }
</style>

<div class="content">

{#each categories as category}
  <Carousel data={category} />
{/each}

  <!-- <Button>Random</Button>
  <Button>Save</Button> -->
</div>
