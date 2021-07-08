// FUNÇÃO MENU MOBILE

function menuMobile() {

  const menu = document.getElementById('menu-hamburger');
  const menuOpc = document.querySelector('.menu-mobile ul');
  const menuClose = document.getElementById('menu-close-hamburger');
  const menuContainer = document.querySelector('.menu-mobile');

  menu.addEventListener('click',()=>{
    
    menuOpc.style.right = '0';
    menuClose.style.display = 'flex';
    menu.style.display = 'none';
    menuContainer.style.visibility = 'visible';

  })
  
  menuClose.addEventListener('click',()=>{
    
    menuOpc.style.right = '-100%';
    menu.style.display = 'flex';
    menuClose.style.display = 'none';
    menuContainer.style.visibility = 'hidden';

  })
  
}




// FUNÇÃO SCROLL HEADER
function rolagem() {

  window.onscroll = function() {scrollFunction()};

  var header = document.querySelector("header");

  function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    header.style.width ='100%';
    header.style.position = 'fixed';
    header.style.padding ='0 20px';
    header.style.background ='#122C3D';
  } 
 
  else {
    header.style.width = '80%';
    header.style.position = '';
    header.style.padding = '';
    header.style.background ='';
  }
}

}

rolagem();