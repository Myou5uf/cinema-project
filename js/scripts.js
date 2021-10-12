const schemeSvg = document.querySelector('.scheme-svg')
const totalPriceTag = document.querySelector('.price-total');
const cost = 800;
let totalPrice = 0;
let totalSeats = 0;

schemeSvg.addEventListener('click', (event) => {
   if (!event.target.classList.contains('booked')){
       event.target.classList.toggle('active');
       totalSeats = schemeSvg.querySelectorAll('.active').length;
       totalPrice = totalSeats * 800;
       totalPriceTag.textContent = totalPrice;
       console.log();
   }
});