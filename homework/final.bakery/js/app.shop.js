$('.thumbwrapper a').on('click', function(e) {

  e.preventDefault();
  var target = $(this).attr('href');
  console.log(target);
  
  if($(target).hasClass('active')) {
    
    $(target).removeClass('active');  
    $(target).hide();
    
  } else {
    $('.section').hide().removeClass('act');

    $(target).addClass('active');
    $(target).show();
  }
  
});