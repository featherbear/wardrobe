<style>
  .item {
    height: 40px;
    width: 40px;
    /* padding: 5px; */
    border-radius: 2px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(10, 10, 10, 0.3);
  }
</style>

<div class="item" on:click>
  <slot />
</div>
