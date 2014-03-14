$(document).ready(function() {
	$(".fancybox").fancybox();
	$(".popupwindow").popupwindow();

	$("form#mailing-list").validate({
		rules: {
			name: {
				required: false,
			},
			email: {
				required: true,
				email: true
			},
		}
	});
});
