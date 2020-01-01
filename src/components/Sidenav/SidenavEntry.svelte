<script>
  export let data;
  export let selected = false;

  import { getContext } from "svelte";
  const ctx = getContext("ctx");
  const state = getContext("state");

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let entry;
  import SidenavEntryPopup from "./SidenavEntryPopup.js";
  function defaultClickEvent() {
    SidenavEntryPopup.setPopup(entry, data, ctx, state, () =>
      dispatch("close")
    );
  }

  // import * as Icons_SA from "svelte-awesome/icons/index.js";

  import * as IconsFA from "@fortawesome/free-solid-svg-icons";

  // FontAwesome please add in pants D:
  import pantsIcon from "../pantsIcon.js";

  let Icons = { ...IconsFA, pants: pantsIcon, faPants: pantsIcon };

  import Icon from "svelte-awesome";
</script>

<style>
  .entry {
    cursor: pointer;
    height: 50px;
    padding: 5px;

    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 0.5px solid grey;
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
  class="entry no-select"
  class:selected
  on:click={data.click || defaultClickEvent}
  on:click
  bind:this={entry}>
  {#if typeof data.icon === 'object'}
    <Icon data={data.icon} scale="2" />
  {:else if data.icon in Icons}
    <Icon data={Icons[data.icon]} scale="2" />
  {:else}{data.name}{/if}
</div>
