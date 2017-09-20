$(document).ready(function() {
  $('.comb').next().hide();
  $('.comb').click(function() {
    // $(this).toggleClass('rear');
    $(this).next().slideToggle(300, 'swing');
    $(this).toggleClass('active');
    $(this).parent().toggleClass('active');
    console.log($(this).next($('div.comb-container')));
    console.log($(this));
    // $('#comb-1').toggleClass('.far');
  })
})
