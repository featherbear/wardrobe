import SidenavEntryPopup from './SidenavEntryPopup.svelte'

let modal = null
let lastTarget = null

function setPopup (target, data, ctx, state, close_callback) {
  if (modal) {
    modal.$destroy()
    modal = null
  }

  if (lastTarget === target) {
    lastTarget = null
    return
  }

  modal = new SidenavEntryPopup({
    target: document.body,
    props: { target, data, ctx, state },
    intro: true
  })

  modal.$on('close', () => {
    modal.$destroy()
    modal = null
    lastTarget = null
    close_callback();    
  })

  lastTarget = target
  return modal.promise
}

SidenavEntryPopup.setPopup = setPopup

export default SidenavEntryPopup
