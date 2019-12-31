import EditCategory from "./EditCategory.svelte"

function createModal (props) {
    // if (typeof props === 'string') props = { title: props }
  
    const modal = new EditCategory({
      target: document.body,
      props,
      intro: true
    })
  
    modal.$on('close', () => {
      modal.$destroy()
    })
  
    return modal.promise
  }
  
  EditCategory.createModal = createModal
  
  export default EditCategory