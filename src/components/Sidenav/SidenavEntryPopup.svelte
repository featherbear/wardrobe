<script>
  export let target;
  export let data;
  export let ctx;

  let x;
  let y;

  $: {
    let rect = target.getBoundingClientRect();
    x = rect.x + rect.width;
    y = rect.y;
  }

  import Icon from "svelte-awesome";
  import { edit } from "svelte-awesome/icons";
</script>

<style>
  .popup {
    position: fixed !important;
    background-color: red;
    position: absolute;
    display: inline-block;
  }
</style>

<div class="popup" style="left: {x}px; top: {y}px;">
  <div class="toolbar">
    <span>{data.name}</span>
    <span on:click>
      <Icon data={edit} />
    </span>
  </div>
  <div class="grid" />
</div>
