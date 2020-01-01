<script>
  export let data = null;
  export let ctx;

  import { fade } from "svelte/transition";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let name = "";
  let icon = "";

  const { categories } = ctx;

  import { onMount } from "svelte";
  onMount(() => {
    if (data) {
      name = data.name;
      icon = data.icon;
    }
  });

  const getFormData = () => {
    return {
      name: name.trim(),
      icon: icon.trim()
    };
  };

  async function createCategory() {
    let formData = getFormData();
    let nextOrderID = $categories.length + 1;
    formData.order = nextOrderID;
    let ret = await ctx.database.categories.post(formData);
    if (ret.ok) {
      formData.id = ret.id;
      formData.rev = ret.rev;
      categories.update(categories => [...$categories, formData]);
      dispatch("close");
    }
  }

  async function updateCategory() {
    let updatedData = { ...data, ...getFormData() };
    let ret = await ctx.database.categories.put(updatedData);
    if (ret.ok) {
      console.log($categories);
      // $categories.findIndex()
      // let searchID = ctx.categories.findIndex(function(c) {
      //   return (c.id || c._id) == updatedData.id;
      // });
      // ctx.categories[searchID] = updatedData;
      // ctx.categories = ctx.categories
      // ctx.update();
      dispatch("close");
    }
  }

  async function deleteCategory() {}
</script>

<style>
  .wholeScreen {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-background {
    background-color: rgba(0, 0, 0, 0.2);
  }
  .modal-content {
    background-color: white;
    border-radius: 8px;
    z-index: 1;
  }

  .modal-content > * {
    padding: 10px;
  }
  .modal-content header {
    border-bottom: 1px solid grey;
  }
  .modal-content main {
  }
  .modal-content footer {
    border-top: 1px solid grey;
    text-align: right;
  }
</style>

<div class="modal wholeScreen">
  <div
    class="modal-background wholeScreen"
    on:click={() => dispatch('close')}
    in:fade={{ duration: 100 }} />
  <div class="modal-content">

    <header>
      {#if data}
        <span>Update category</span>
      {:else}
        <span>Create category</span>
      {/if}
    </header>
    <main>
      <form>
        <label>Category name</label>
        <input name="name" type="text" bind:value={name} />
        <label>Icon</label>
        <input name="icon" type="text" bind:value={icon} />
      </form>
    </main>
    <footer>
      <!-- <button on:click={deleteCategory}>Delete</button> -->
      <button class="button" on:click={() => dispatch('close')}>Cancel</button>

      {#if data}
        <button on:click={updateCategory}>Update</button>
      {:else}
        <button on:click={createCategory}>Create</button>
      {/if}
    </footer>
  </div>
</div>
