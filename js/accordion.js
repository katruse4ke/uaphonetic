var mainNav = $('#navigation > ul > li > a');
$('#navigation > ul > li > ul').hide();

$('a').click(function(e) {
  e.preventDefault();
});

mainNav.click(function() {
  $(this).siblings('ul').slideToggle(1000, 'swing');
});