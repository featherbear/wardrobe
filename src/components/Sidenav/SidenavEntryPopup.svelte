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
      category: data.id || data._id,
      _attachments: {
        [file.name]: {
          content_type: file.type,
          data: file
        }
      }
    });

    if (ret.ok) {
      console.log("Upload of " + file.name + " success!");
      console.log(ret);
      let url = URL.createObjectURL(file);
      var img = document.createElement("img");
      img.src = url;
      document.body.appendChild(img);
    }
  }

  let tiles;
  $: tiles = ctx.items.filter(i => i.category == data._id);
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
    {#each tiles as tile}
      <SidenavEntryPopupItem>
        <img src={tile.url} />
      </SidenavEntryPopupItem>
    {/each}
    <SidenavEntryPopupItem on:click={openUpload}>
      <Icon data={plus} />
    </SidenavEntryPopupItem>
  </div>
</div>
