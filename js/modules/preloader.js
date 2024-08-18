// #html
/*
   %подключить
*/
// #html
/*
добавить к body style="overflow-y: hidden;"
*/

function preloader() {

   const preloader = document.querySelector('[data-preloader]')
   if (preloader) {
      setTimeout(() => {

         preloader.classList.add('_close')

         document.querySelector('body').style.paddingRight = `0px`
         document.querySelector('body').style.overflowY = `auto`

         // функции

         new WOW().init();


      }, 1000)
   }


}



export { preloader }