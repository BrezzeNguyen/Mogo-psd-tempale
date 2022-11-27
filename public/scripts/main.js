window.addEventListener("load", function () {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  toggle && toggle.addEventListener("click", handleToggleMenu);

  function handleToggleMenu(e) {
    menu && menu.classList.add("is-show");
  }

  document.addEventListener("click", handleClickOutside);

  function handleClickOutside(e) {
    if (e.target.matches(".menu-toggle") || e.target.matches(".menu, .menu *")) return;
    menu && menu.classList.remove("is-show");
  }
});
$(document).ready(function () {
  $('.quote-container').slick({
    prevArrow: '<div class="slick-prev"><i class="fal fa-angle-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fal fa-angle-right" aria-hidden="true"></i></div>',
    responsive: [{
      breakpoint: 767,
      settings: {
        arrows: false
      }
    }]
  });
});