function ativaScrollSuave(selector){
	$(selector).click(function(event){
		
		event.preventDefault();
		var target = $(this).attr('href');

		$('html, body').animate ({
			scrollTop: $(target).offset().top
		}, 2000)
	});

}

ativaSrcollSuave('a[href*=panel-about]');
ativaSrcollSuave('a[href*=panel-speakers]');
ativaSrcollSuave('a[href*=panel-form]');