$(document).ready(function () {

	$('#myForm').submit(function (event) {

		var myImput = $('#name-imput').val();

		$('#target').text(myImput);

	})

})
