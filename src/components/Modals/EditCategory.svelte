<script>
  export let data = null;

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
</script>

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .modal-background {
      background-color: rgba(0,0,0,0.4);
      width: 100%;
      height: 100%;
  }
  .modal-content {

  }
</style>

<div class="modal">
  <div class="modal-background" on:click={() => dispatch('close')} />
  <div class="modal-content">
  <input name="name" type="text">
  <input name="icon" type="text">
    <!-- <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button
        class="delete"
        aria-label="close"
        on:click={() => dispatch('close')} />
    </header> -->
    <!-- <section class="modal-card-body">
      <!-- Content ... -->
    <!-- </section> -->
    <!-- <footer class="modal-card-foot">
      <button class="button is-success">Save changes</button>
      <button class="button" on:click={() => dispatch('close')}>Cancel</button>
    </footer> -->
  </div>
</div>
