<script>

</script>

<style>
  button {
    cursor: pointer;
    border: 2px solid black;
    background-color: transparent;
    border-radius: 2px;
    transition: background-color 0.5s;
  }
  button:hover {
    background-color: yellow;
  }
</style>

<button>
  <slot />
</button>
