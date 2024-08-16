function banner() {
   
   const banner =   document.querySelector('[data-banner]')
   const button = document.querySelector('[data-banner-button]')

   button.addEventListener('click', (event) => {
      banner.style = "display: none;"
   })
   
} 

export { banner }
