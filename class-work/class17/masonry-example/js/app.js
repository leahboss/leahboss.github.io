$(document).ready(function () {

$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});

$('_.grid').on('click', ".grid-item", function() {
	$('.grid').masonry('remove' , this ).masonry('layout');
});

})
