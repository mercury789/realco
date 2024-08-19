// #html
/*
   data-transfer=".burgmenu__body,769" *если что поменять 768.2/992.2 + настроить порядок если в один элемент перекидую 2 элемента
*/

function transfer() {

   const nones = document.querySelectorAll('._none')
   nones.forEach((none) => {
      none.classList.remove('_none')
   })


   function main() {

      const transferAll = document.querySelectorAll('[data-transfer]')

      transferAll.forEach((transfer) => {

         const transferAtt = transfer.getAttribute('data-transfer')

         // получить данные
         let [unic, numberStr, orderStr] = transferAtt.split(',');
         const number = parseInt(numberStr, 10);
         let order = parseInt(orderStr, 10);

         if (!document.querySelector(`[data-ghost="${unic}"]`) && !document.querySelector(`[data-ghost="${unic},${order}"]`)) {

            if (window.innerWidth < number) {

               if (isNaN(order)) {
                  // вырезать и оставить след
                  const copy = transfer.outerHTML
                  const newDiv = document.createElement('div');
                  newDiv.style = 'display: none;'
                  newDiv.setAttribute('data-ghost', `${unic}`)
                  transfer.insertAdjacentElement('afterend', newDiv);
                  transfer.remove()

                  // вставить
                  const transferPaste = document.querySelector(`.${unic}`)
                  transferPaste.innerHTML = copy
               } else {

                  // вырезать и оставить след
                  const copy = transfer.cloneNode(true)
                  const newDiv = document.createElement('div');
                  newDiv.style = 'display: none;'
                  newDiv.setAttribute('data-ghost', `${unic},${order}`)
                  transfer.insertAdjacentElement('afterend', newDiv);
                  transfer.remove()

                  const transferPaste = document.querySelector(`.${unic}`)
                  const elems = transferPaste.querySelectorAll('[data-transfer]')

                  if (transferPaste.children.length === 0) {
                     // вставить
                     transferPaste.insertAdjacentElement('afterbegin', copy);

                  } else {
                     elems.forEach((elem) => {

                        // получить данные
                        let [, , innOrderStr] = elem.getAttribute('data-transfer').split(',');
                        const innOrder = parseInt(innOrderStr, 10);

                        if (order >= innOrder) {
                           // вставить
                           elem.insertAdjacentElement('afterend', copy);
                        }

                     })
                  }
               }

            }
         }
         else {
            if (window.innerWidth > number) {

               if (isNaN(order)) {
                  // вырезать
                  const copy = transfer.outerHTML

                  // вставить и убрать след
                  const transferGhost = document.querySelector(`[data-ghost="${unic}"]`)
                  transferGhost.insertAdjacentHTML('afterend', copy);
                  transferGhost.remove()
                  transfer.remove()
               } else {
                  // вырезать
                  const copy = transfer.outerHTML

                  // вставить и убрать след
                  const transferGhost = document.querySelector(`[data-ghost="${unic},${order}"]`)
                  transferGhost.insertAdjacentHTML('afterend', copy);
                  transferGhost.remove()
                  transfer.remove()
               }

            }

         }

      }

      )

   }
   main()

   window.addEventListener('resize', (event) => {

      main()

   })


}

export { transfer }


