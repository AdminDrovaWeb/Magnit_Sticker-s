const btn = document.querySelector('.block__open__list__btn');
const strelka = document.querySelector('.block__open__img');
const ul_list = document.querySelector('.list__block__stickers');
const cards = document.querySelectorAll('.block__stickers__container');
const card2 = document.querySelectorAll('.block__stickers__container:not(:nth-child(-n + 9))');
const card3 = document.querySelectorAll('.block__stickers__container:not(:nth-child(-n + 6))');
console.log(cards);
// btn.onclick = function() {
//     for (let card of cards) {
//         card.style.display = 'flex'
//     }
// };

// btn.onclick = function() {
//     if (btn.classList.contains('menu') == false) {
//     btn.classList.add('menu');
//     for (let card of cards) {
//               card.style.display = 'flex'
//           }
//   } else {
//     btn.classList.remove('menu');
//     for (let card of card2) {
//       card.style.display = 'none'
//   }
//   }
// }

function sob1() {
    if (window.innerWidth >= 1280) {
        btn.onclick = function() {
            if (btn.classList.contains('menu') == false) {
            btn.classList.add('menu');
            for (let card of cards) {
                      card.style.display = 'flex';
                      strelka.classList.add('strelka_active');
                  }
          } else {
            btn.classList.remove('menu');
            for (let card of card2) {
              card.style.display = 'none';
              strelka.classList.remove('strelka_active');
          }
          }
        }
    }
}
sob1()

function sob2() {
    if (window.innerWidth <= 1279 && window.innerWidth > 320) {
        btn.onclick = function() {
            if (btn.classList.contains('menu') == false) {
            btn.classList.add('menu');
            for (let card of cards) {
                      card.style.display = 'flex'
                      strelka.classList.add('strelka_active');
                  }
          } else {
            btn.classList.remove('menu');
            for (let card of card3) {
              card.style.display = 'none'
              strelka.classList.remove('strelka_active');
          }
          }
        }
    }
}
sob2()