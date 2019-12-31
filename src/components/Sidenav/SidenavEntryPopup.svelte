<script>
  export let target;

  let x;
  let y;

  $: {
    let rect = target.getBoundingClientRect();
    x = rect.x + rect.width;
    y = rect.y;
  }

</script>

<style>
  .popup {
    position: fixed !important;
    background-color: red;
    position: absolute;
    display: inline-block;
  }
</style>

<div class="popup" style="left: {x}px; top: {y}px;">POPUP</div>
