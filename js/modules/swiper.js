 /*
   #html
    <script src="./js/lib/swiper-bundle.min.js" type="module"></script> (перед app.js)

   #scss
   *к тексту если надо что бы в троеточие заходило
   display: -webkit-box;
      -webkit-line-clamp: 3;  // количество строк 
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;

   #js
   поставить другой класс вместо .start для уникализации
*/

function swiper() {

   function swiperInit(src, newSwiper) {

      if (document.querySelector(`${src} .swiper`)) {
         newSwiper(src)
      }

   }

   swiperInit('.start', (src) => {

      new Swiper(`${src} .swiper`, {
         slidesPerView: 4,
         spaceBetween: 20,
         grabCursor: true,
         allowTouchMove: true,
         loop: true,
         speed: 1200,
         autoHeight: true,
         autoplay: {
            delay: 3500,
         },

         navigation: {
            nextEl: `${src} .swiper-button-next`,
            prevEl: `${src} .swiper-button-prev`
         },
         pagination: {
            el: `${src} .swiper-pagination`,
            clickable: true,
         },

         breakpoints: {
            0: {
               slidesPerView: 1,
            },
            425: {
               slidesPerView: 2,
            },
            552: {
               slidesPerView: 2,
            },
            768: {
               slidesPerView: 3,
            },
            992: {
               slidesPerView: 4,
            },
            1024: {
               slidesPerView: 4,
            }
         }

      })

   })

}
export { swiper }

