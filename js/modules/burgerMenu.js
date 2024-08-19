// #html
/* 
data-menu-paste (к logo к ссылке)
data-menu="769" (к nav) 769/
*/

// #html
/* 
   %после nav
     <button class="burger" data-burger-menu-open>
            <div class="burger__icon">
               <span></span>
               <span></span>
               <span></span>
            </div>  
         </button>
         <div class="header-wrapper" data-burger-menu-shadow></div>
         <div class="burgmenu" data-burger-menu> 
            <div class="burgmenu__top">
               <a href="#" class="burgmenu__logo">
                  <i class="burgmenu__icon">@@include("../../../src/img/icons/logo.svg")</i>
               </a>
               <button class="burgmenu__close" data-burger-menu-close>
                  &#10006;
               </button>
            </div>
            <div class="burgmenu__body" data-burger-menu-body></div>
         </div>

*/
// #scss
/*
   *если что поменять 768.2/992.2
*/

function burgerMenu() {




   const burgerMenu = document.querySelector('[data-burger-menu]')

   if (burgerMenu) {

      //  базисное
      const open = document.querySelector('[data-burger-menu-open]')
      const shadow = document.querySelector('[data-burger-menu-shadow]')
      const close = document.querySelector('[data-burger-menu-close]')
      const body = document.querySelector('body')

      open.addEventListener('click', (event) => {
         // открыть
         burgerMenu.classList.add('_active')
         shadow.classList.add('_active')
         body.style.overflow = 'hidden'
      })
      close.addEventListener('click', (event) => {
         // зыкрыть
         burgerMenu.classList.remove('_active')
         shadow.classList.remove('_active')
         body.style.overflow = 'auto'

      })
      shadow.addEventListener('click', (event) => {
         // зыкрыть
         burgerMenu.classList.remove('_active')
         shadow.classList.remove('_active')
         body.style.overflow = 'auto'

      })

   }


}
export {
   burgerMenu,
}


