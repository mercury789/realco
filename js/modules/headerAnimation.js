// #scss
/*
.header {
   z-index: 500;
   box-shadow: 0px 1px 14px rgba(26, 10, 3, 0.05);

   position: sticky;
   top: 0px;
   background-color: var(--color-background);
   transition:
      background-color 0.3s,
      box-shadow 0.3s;

   &._active {
      background-color: var(--color-background);
      box-shadow: 0px 1px 14px rgba(26, 10, 3, 0.05);

      .header__body {
         @include adaptiv-value("min-height", 60, 60);
      }
   }

   // .header__body

   &__body {
      @include adaptiv-value("min-height", 70, 70);

      transition:
         min-height 0.3s,
         box-shadow 0.3s;
   }
}
*/

function headerAnimation() {

   const headerCheck = document.querySelector('[data-header-animation]')

   if (headerCheck) {

      const body = document.querySelector('body')
      const header = document.querySelector('[data-header-animation]')

      // проскроллил пошла анимация, вернулся обратно анимация выключилась

      document.addEventListener('scroll', (event) => {
         const value = body.getBoundingClientRect().top

         if (value < 0) {
            header.classList.add('_active')
         } else {
            header.classList.remove('_active') 

         }
      })

   }


}

export { headerAnimation }
