var bigImg = $('#group.hug.jpg')

$('.thumb').click(function () {
	var newSrc = $(this).attr('src')
	bigImg.attr('src', newSrc)
})