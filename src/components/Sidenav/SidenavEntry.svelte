<script>
  export let data;

  import SidenavEntryPopup from "./SidenavEntryPopup.js";

  import { getContext } from "svelte";
  let ctx = getContext("ctx");
  
  function defaultClickEvent() {
    SidenavEntryPopup.setPopup(this, data, ctx);
  }

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
  {#if data.icon}
    <Icon data={data.icon} scale="2" />
  {:else}{data.name}{/if}
</div>
