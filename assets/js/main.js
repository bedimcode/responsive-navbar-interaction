/*=============== SHOW MENU ===============*/
const showMenu = (navId, toggleId) => {
   const nav = document.getElementById(navId),
         toggle = document.getElementById(toggleId)

   toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu')
      toggle.classList.toggle('show-icon')
   })
}
showMenu('nav-menu','nav-toggle')

/*=============== COPY EMAIL ===============*/
const navEmail = document.getElementById('nav-email'),
      navCopy = document.getElementById('nav-copy').textContent,
      navText = document.getElementById('nav-text')

navEmail.addEventListener('click', () => {
   // Use the clipboard API to copy text
   navigator.clipboard.writeText(navCopy).then(() => {
      navText.innerHTML = 'Copied ✅'

      // Restore the original text
      setTimeout(() => {
         navText.innerHTML = 'Copy email'
      }, 2000)
   })
})
