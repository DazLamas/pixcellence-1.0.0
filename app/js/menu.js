/*
 * Top Menu
 */

 (function (window, document) {

  const menu         = document.getElementById('menu-element-js');
  const menuCont     = document.getElementById('menu-container-js');
  const menuBtn      = document.getElementById('menu-toggle-js');
  let isOpen         = document.getElementById('menu-toggle-checkbox').checked;
  let screenWidth    =    window.innerWidth
                        || document.documentElement.clientWidth
                        || document.body.clientWidth;

  function closeMenu() {
    menuCont.classList.remove('menu-animation');
    isOpen = false;
  };

  function openMenu() {
    menuCont.classList.add('menu-animation');
    isOpen = true;
  };

  menuBtn.addEventListener('click', function(event){
    if(isOpen) {
      closeMenu();
    } else {
      openMenu();
    };
  });

  window.addEventListener('resize', function(event){
    closeMenu();
  });

}(window, document));




// function isDesktop() {
  //  return screenWidth >= 1024;
  // };
