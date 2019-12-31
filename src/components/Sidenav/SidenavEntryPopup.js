import SidenavEntryPopup from './SidenavEntryPopup.svelte'

let modal = null
let lastTarget = null

function setPopup (target, props) {
  if (lastTarget === target) {
    return
  }

  if (modal) {
    modal.$destroy()
  }

  modal = new SidenavEntryPopup({
    target: document.body,
    props: { ...props, target },
    intro: true
  })

  modal.$on('close', () => {
    modal.$destroy()
  })

  lastTarget = target
  return modal.promise
}

SidenavEntryPopup.setPopup = setPopup

export default SidenavEntryPopup
