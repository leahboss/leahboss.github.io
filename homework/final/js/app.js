var bigImg = $('#bigimage')

$('.thumb').click(function () {
	var newSrc = $(this).attr('src')
	bigImg.attr('src', newSrc)
})