<script>
  export let target;
  export let data;
  export let ctx;

  import { slide } from "svelte/transition";

  let x;
  let y;

  $: {
    let rect = target.getBoundingClientRect();
    x = rect.x + rect.width;
    y = rect.y;
  }

  import EditCategory from "../Modals/EditCategory.js";

  import Icon from "svelte-awesome";
  import { edit, plus } from "svelte-awesome/icons";

  import SidenavEntryPopupItem from "./SidenavEntryPopupItem.svelte";

  function giveMeNumbers(n) {
    var list = [];
    for (var i = 0; i < n; i++) {
      list.push(i);
    }
    return list;
  }
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
</style>

<!-- TODO: Close if click out -->
<!-- TODO: Fix reactive updating -->

<div class="popup" style="left: {x}px; top: {y}px;" transition:slide>
  <div class="toolbar">
    <span>{data.name}</span>
    <span
      class="editBtn"
      on:click={() => EditCategory.createModal({ ctx, data })}>
      <Icon data={edit} />
    </span>
  </div>
  <div class="grid">
    {#each giveMeNumbers(56) as _}
      <SidenavEntryPopupItem>{_}</SidenavEntryPopupItem>
    {/each}
    <SidenavEntryPopupItem>
      <Icon data={plus} />
    </SidenavEntryPopupItem>
  </div>
</div>
