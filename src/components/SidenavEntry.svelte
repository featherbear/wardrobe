<script>
  export let data;

  function defaultClickEvent() {}

  import Icon from "svelte-awesome";
</script>

<style>
  .entry {
    cursor: pointer;
    height: 10%;
    padding: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .entry {
    border-bottom: 1px solid grey;
  }

  .entry:not(:hover) {
    transition: background-color 0.5s;
  }
  .entry:hover {
    transition: background-color 0.2s;
    background-color: rgba(0, 0, 0, 0.4);
  }
</style>

<div class="entry" on:click={data.click || defaultClickEvent}>
  <Icon data={data.icon} scale="2" />
</div>
