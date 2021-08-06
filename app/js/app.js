const btnHamburger= document.querySelector('#btnHamburger');
btnHamburger.addEventListener('click',function(){
    console.log(`open Hamburger`);
    btnHamburger.classList.toggle('open');
});