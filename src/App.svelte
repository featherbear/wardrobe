<script>
  import { setContext, getContext } from "svelte";

  export let data;
  // Reactive update
  data.update = () => (data = data);
  setContext("ctx", data);

  const state = getContext("state");
  $: localStorage.setItem("state", JSON.stringify($state));

  import EditCategory from "./components/Modals/EditCategory.js";
  import { plus } from "svelte-awesome/icons";
  let addCategoryButton = {
    _id: null,
    tooltip: "Add new category",
    icon: plus,
    click: () => EditCategory.createModal({ ctx: data })
  };

  let entries;
  const { categories } = data;
  $: entries = $categories.sort((a, b) => a.order - b.order);

  import Main from "./components/Main.svelte";
  import Sidenav from "./components/Sidenav/Sidenav.svelte";
</script>

<style>
  :global(*:not(input)) {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  main {
    text-align: center;
    /* padding: 1em; */
    max-width: none;
    margin: 0 auto;
  }

  main {
    display: flex;
    flex-direction: row;
    /* flex-basis: 100%; */
    /* flex-wrap: wrap; */
    min-height: 100%;
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

  /* Mobile */
  @media (max-width: 320px) {
    main .column.content {
      padding-bottom: 130px;
    }
    main .column.nav {
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  }
</style>

<main>
  <div class="column nav">
    <Sidenav {entries} />
    <Sidenav entries={[addCategoryButton]} />
  </div>
  <div class="column content">
    <Main {entries} />
  </div>
  <!--
    <div class="column nav">
      <Sidenav />
    </div>
  -->
</main>
