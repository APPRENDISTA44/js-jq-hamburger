$('a.burger').click(function() {
  $('div.hamburger-menu').addClass('active');
});

$('a.close').click(function() {
  $('div.hamburger-menu').removeClass('active');
});
