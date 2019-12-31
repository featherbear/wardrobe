<script>
  import Icon from "svelte-awesome";
  import { random, chevronLeft, chevronRight } from "svelte-awesome/icons";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

</script>

<style>
  .menu {
    position: absolute;
    width: 20px;
    margin-left: 2px;
  }

  /* Vertical centre */
  .container {
    display: table-cell;
    vertical-align: middle;
    height: 100px;
  }

  .container span {
    cursor: pointer;
    transition: opacity 0.3s;
    opacity: 0.3;
  }
  .container span:hover {
    opacity: 1;
  }

</style>

<div class="menu">
  <div class="container">
    <span on:click={() => dispatch('random')}>
      <Icon data={random} />
    </span>
    <span on:click={() => dispatch('left')}>
      <Icon data={chevronLeft} />
    </span>
    <span on:click={() => dispatch('right')}>
      <Icon data={chevronRight} />
    </span>
  </div>
</div>
