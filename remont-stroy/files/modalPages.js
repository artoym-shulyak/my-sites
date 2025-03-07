// For FRL
const modalPages = (open, modalContent) => {
  try {
    const btn = document.querySelector(open),
      modal = document.querySelector(modalContent),
      close = modal.querySelector("[data-close]")

    btn.addEventListener("click", (e) => {
      e.preventDefault()
      modal.classList.add("_active")
      document.querySelector("body").classList.add("lock")
    })

    close.addEventListener("click", (e) => {
      modal.classList.remove("_active")
      document.querySelector("body").classList.remove("lock")
    })

    modal.addEventListener("click", (e) => {
      if (e.target && e.target === modal) {
        modal.classList.remove("_active")
        document.querySelector("body").classList.remove("lock")
      }
    })
  } catch (e) {
    console.log(e)
  }
}
modalPages(".btn-pages", ".pages")
