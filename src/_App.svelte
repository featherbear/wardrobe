<script>
  import PouchDB from "pouchdb-browser";

  import { setContext } from "svelte";
  import { writable } from "svelte/store";

  async function load() {
    let database = {
      items: new PouchDB("items", { auto_compaction: true }),
      categories: new PouchDB("categories", { auto_compaction: true })
    };

    let items = await database.items
      .allDocs({ include_docs: true })
      .then(r => r.rows.map(e => e.doc));

    items = writable(
      await Promise.all(
        items.map(async item => {
          let blob = await database.items.getAttachment(
            item._id,
            Object.keys(item._attachments)[0]
          );
          return { ...item, url: URL.createObjectURL(blob) };
        })
      )
    );

    let categories = writable(
      await database.categories
        .allDocs({ include_docs: true })
        .then(r => r.rows.map(e => e.doc))
    );

    return { database, items, categories };
  }

  // Put here because of reactivity issues with App.svelte
  let state = localStorage.getItem("state");
  if (state === null) {
    state = writable({});
  } else {
    state = writable(JSON.parse(state));
  }
  setContext("state", state);

  import App from "./App.svelte";
</script>

{#await load() then data}
  <App {data} />
{/await}
