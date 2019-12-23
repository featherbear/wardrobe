<script>
  import Main from "./components/Main.svelte";
  import Sidenav from "./components/Sidenav.svelte";
</script>

<style>
  main {
    text-align: center;
    /* padding: 1em; */
    max-width: 240px;
    margin: 0 auto;
  }

  main {
    display: flex;
    flex-direction: row;
    /* flex-basis: 100%; */
    flex-wrap: wrap;
    height: 100%;
  }

  main .column.content {
    flex-basis: 100%;
    flex: 1;
  }
  main .column.nav {
    flex-basis: 120px;
    /* width: 200px; */
    background-color: pink;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <div class="column nav">
    <Sidenav />
  </div>
  <div class="column content">
    <Main />
  </div>
  <div class="column nav">
    <Sidenav />
  </div>
</main>
