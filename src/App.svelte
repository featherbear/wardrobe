<script>
  import Main from "./components/Main.svelte";
  import Sidenav from "./components/Sidenav/Sidenav.svelte";

  import { setContext } from "svelte";

  export let data;
  setContext("ctx", data);

  data.update = function() {
    // Reactive update
    data = data;
  };

  // let state = {};
  // setContext("state", state);

  import EditCategory from "./components/Modals/EditCategory.js";
  import { plus } from "svelte-awesome/icons";
  let addCategoryButton = {
    id: "yep",
    tooltip: "Add new category",
    icon: plus,
    click: () => EditCategory.createModal({ ctx: data })
  };

  let categories;
  $: categories = data.categories.sort((a, b) => a.order - b.order);
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

  main .column.content {
    background-color: #ffd599;
  }
  main .column.nav {
    flex-basis: 80px;
    /* width: 200px; */
    border-right: 0.5px solid grey;
    background-color: #ffd78c;
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
    <Sidenav entries={categories} />
    <Sidenav entries={[addCategoryButton]} />
  </div>
  <div class="column content">
    <Main entries={categories} />
  </div>
  <!-- <div class="column nav">
    <Sidenav />
  </div> -->
</main>
