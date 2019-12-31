<script>
  import PouchDB from "pouchdb-browser";

  async function load() {
    let database = {
      items: new PouchDB("items"),
      categories: new PouchDB("categories")
    };

    let items = await database.items
      .allDocs({ include_docs: true })
      .then(r => r.rows.map(e => e.doc));
    let categories = await database.categories
      .allDocs({ include_docs: true })
      .then(r => r.rows.map(e => e.doc));

    return { database, items, categories };
  }

  import App from "./App.svelte";
</script>

{#await load() then data}
  <App {data} />
{/await}
