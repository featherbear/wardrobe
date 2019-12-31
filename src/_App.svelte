<script>
  import PouchDB from "pouchdb-browser";

  async function load() {
    let database = {
      items: new PouchDB("items", { auto_compaction: true }),
      categories: new PouchDB("categories", { auto_compaction: true })
    };

    let items = await database.items
      .allDocs({ include_docs: true })
      .then(r => r.rows.map(e => e.doc));

    items.forEach(async item => {
      let blob = await database.items.getAttachment(
        item._id,
        Object.keys(item._attachments)[0]
      );
      item.url = URL.createObjectURL(blob);
    });
    
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
