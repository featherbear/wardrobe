<script>
  export let borderRight = false;
  export let borderLeft = false;
</script>

<style>
  .entry {
    cursor: pointer;
    height: 10%;
    padding: 5px;
  }
  .entry:not(:hover) {
    transition: background-color 0.5s;
  }
  .entry:hover {
    transition: background-color 0.2s;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .entry {
    border-color: rgba(0, 0, 0, 0.4);
    border-width: 1px;
    border-style: solid;
  }

  ._border-left {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 20px;
  }
  ._border-right {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 20px;
  }
</style>

<div
  class="entry"
  class:_border-left={borderLeft}
  class:_border-right={borderRight}>
  sidenav
</div>
