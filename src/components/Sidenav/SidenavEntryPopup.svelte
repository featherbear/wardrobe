<script>
  export let target;
  export let data, ctx, state;
  const { items } = ctx;

  let x, y;
  $: {
    let rect = target.getBoundingClientRect();
    x = rect.x + rect.width;
    y = rect.y;
  }

  import { slide } from "svelte/transition";

  import Icon from "svelte-awesome";
  import { edit, plus } from "svelte-awesome/icons";

  import EditCategory from "../Modals/EditCategory.js";
  import SidenavEntryPopupItem from "./SidenavEntryPopupItem.svelte";

  function select(tile) {
    state.update(state => ({ ...state, [data._id]: tile._id }));
  }

  function openUpload() {
    let elem = document.createElement("input");
    elem.type = "file";
    elem.accept = "image/*";
    elem.multiple = true;
    elem.addEventListener("change", async function() {
      for (let file of this.files) {
        uploadImage(file);
      }
    });

    elem.click();
  }

  async function uploadImage(file) {
    let ret = await ctx.database.items.post({
      category: data._id,
      _attachments: {
        [file.name]: {
          content_type: file.type,
          data: file
        }
      }
    });

    if (ret.ok) {
      items.update(items => [
        ...items,
        { category: data._id, url: URL.createObjectURL(file) }
      ]);
    }
  }

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let popup;
  let checkClickOut = function(evt) {
    if (evt.target == target) return;
    let elementsAtPoint = document.elementsFromPoint(evt.clientX, evt.clientY);
    if (!elementsAtPoint.find(e => e == target || e == popup)) {
      dispatch("close");
    }
  };

  let tiles;
  $: tiles = $items.filter(i => i.category == data._id);
</script>

<style>
  .popup {
    position: fixed !important;
    background-color: #ffd78c;
    min-height: 150px;
    padding-bottom: 10px;

    border-top-right-radius: 5px;
    border-bottom-right-radius: 15px;
    border: 1px solid grey;
    border-left: initial;
  }
  .editBtn {
    cursor: pointer;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-gap: 1px;
  }

  .grid :not(.selected) {
    filter: grayscale(0.9);
  }
  .grid .selected {
    filter: grayscale(0);
    border: 1px solid red;
  }
</style>

<svelte:window on:click={checkClickOut} />

<div
  class="popup"
  style="left: {x}px; top: {y}px;"
  transition:slide
  bind:this={popup}>
  <div class="toolbar">
    <span>{data.name}</span>
    <span
      class="editBtn"
      on:click={() => {
        EditCategory.createModal({ ctx, data });
        dispatch('close');
      }}>
      <Icon data={edit} />
    </span>
  </div>
  <div class="grid">
    {#each tiles as tile}
      <SidenavEntryPopupItem on:click={() => select(tile)}>
        <img
          src={tile.url}
          alt="selected item"
          class:selected={tile._id == $state[data._id]} />
      </SidenavEntryPopupItem>
    {/each}
    <SidenavEntryPopupItem on:click={openUpload}>
      <Icon data={plus} />
    </SidenavEntryPopupItem>
  </div>
</div>
