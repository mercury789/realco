function banner() {

   const banner = document.querySelector('[data-banner]')
   const button = document.querySelector('[data-banner-button]')

   if (banner) {
      button.addEventListener('click', (event) => {
         event.preventDefault()

         banner.style = "display: none;"
      })
   }



}

export { banner }
