$(function() {
		
	$('.date').datetimepicker({
		language: 'zh-CN',
		format: 'yyyy-mm-dd hh:ii',
		pickerPosition: 'bottom-right',
		weekStart: 1,
		todayBtn: 1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		forceParse: 0,
		showMeridian: 1
	});
	
		$('.step-item').click(function() {
			var index = $('.step-item').index($(this));
			$('.course-content').hide();
			$('.course-content:eq(' + index + ')').fadeIn();
		});
		$('.to-step1').click(function() {
			$('.step-item:eq(0)').click();
		});
		$('.to-step2').click(function() {
			$('.step-item:eq(1)').click();
		});
		$('.to-step3').click(function() {
			$('.step-item:eq(2)').click();
		});
})