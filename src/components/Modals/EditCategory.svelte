<script>
  export let data = null;
  export let ctx;

  import { fade } from "svelte/transition";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let form;
  const getFormData = () => {
    return {
      name: form.name.value.trim(),
      icon: form.icon.value.trim()
    };
  };
  async function createCategory() {
    let formData = getFormData();
    let nextOrderID = ctx.categories.length + 1;
    formData.order = nextOrderID;
    let ret = await ctx.database.categories.post(formData);
    if (ret.ok) {
      formData.id = ret.id;
      formData.rev = ret.rev;
      ctx.categories= [...ctx.categories, formData];
      ctx.update()
      dispatch("close");
    }
  }
  async function updateCategory() {
    let ret = await ctx.databse.categories.put({ ...data, ...getFormData() });
    console.log(ret);
    if (ret.ok) {
      dispatch("close");
    }
  }
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
      <form bind:this={form}>
        <label>Category name</label>
        <input name="name" type="text" />
        <label>Icon</label>
        <input name="icon" type="text" />
      </form>
    </main>
    <footer>
      <button class="button" on:click={() => dispatch('close')}>Cancel</button>

      {#if data}
        <button on:click={updateCategory}>Update</button>
      {:else}
        <button on:click={createCategory}>Create</button>
      {/if}
    </footer>
  </div>
</div>
