<script>
  export let data;
  export let selected = false;

  import { getContext } from "svelte";
  const ctx = getContext("ctx");
  const state = getContext("state");

  import SidenavEntryPopup from "./SidenavEntryPopup.js";
  function defaultClickEvent() {
    SidenavEntryPopup.setPopup(this, data, ctx, state);
  }

  import * as Icons from "svelte-awesome/icons/index.js";
  import Icon from "svelte-awesome";
</script>

<style>
  .entry {
    cursor: pointer;
    height: 50px;
    padding: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid grey;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .entry:not(:hover) {
    transition: background-color 0.5s;
  }
  .entry:hover,
  .selected {
    transition: background-color 0.2s;
    background-color: rgba(0, 0, 0, 0.4);
  }
</style>

<div
  class="entry"
  class:selected
  on:click={data.click || defaultClickEvent}
  on:click>
  {#if typeof data.icon === 'object'}
    <Icon data={data.icon} scale="2" />
  {:else if data.icon in Icons}
    <Icon data={Icons[data.icon]} scale="2" />
  {:else}{data.name}{/if}
</div>
