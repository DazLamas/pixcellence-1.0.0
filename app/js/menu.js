/*
 * Top Menu
 */

 (function (window, document) {

  const menu         = document.getElementById('menu-element-js');
  let isOpen         = document.getElementById('menu-toggle-checkbox').checked;
  let screenWidth    =    window.innerWidth
                || document.documentElement.clientWidth
                || document.body.clientWidth;

  function closeMenu() {
   document.getElementById('menu-toggle-checkbox').checked = false;
  };

  function isDesktop() {
   return screenWidth >= 1024;
  };

  window.addEventListener('resize', function(event){
   closeMenu();
  });

}(window, document));
