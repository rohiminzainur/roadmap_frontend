$(document).ready(function () {
  $(".button-collapse").sideNav();
  $(".slider").slider({
    indicators: false,
    height: 500,
    transition: 600,
    interval: 3000,
  });
  $(".parallax").parallax();
  $(".materialboxed").materialbox();
  $(".scrollspy").scrollSpy({
    scrollOffset: 50,
  });
});
