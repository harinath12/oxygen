/***** Navigation Active Class Query *****/
jQuery(document).ready(function($){        
    var url = window.location.href;
	url = url.split('/').reverse()[0];
	if(url == '') {
		url = 'index.php';
	}
	else {
		url = url.split('?')[0];
	}
    $('.nav li a[href="'+url+'"]').addClass('active');
});
	

$(function() {
    $('.Datepic').datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        changeYear: true,
		yearRange: '1920:2040',
        numberOfMonths: 1,
        showOn: "button",
		buttonImage: "images/date.png",
		buttonImageOnly: true,
		buttonText: "Select date"
		
    });

}); 
	
$('.Datepic').click(function() {
	$(this).parent().find('.ui-datepicker-trigger').click();
});

$(function () {
//Initialize Select2 Elements
$(".select2").select2();
});


