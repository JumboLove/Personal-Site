// app.js

(function($, window, document) {
	function initIziModalEventHandlers() {
		$('[data-modal-open]').on('click', function(e){
			e.preventDefault();
			var modalID = $(this).data('modal-open');
			$('#' + modalID).iziModal('open');
		});
	}

	function initIziModals() {
		$('[data-modal]').iziModal({
			history: false,
			transitionIn: 'fadeInUp',
			transitionOut: 'fadeOutDown',
			transitionInOverlay: 'fadeIn',
			transitionOutOverlay: 'fadeOuts'
		});
	}

	function initializePOI() {
		//open interest point description
		$('.cd-single-point').children('a').on('click', function(){
			var selectedPoint = $(this).parent('li');
			if( selectedPoint.hasClass('is-open') ) {
				selectedPoint.removeClass('is-open').addClass('visited');
			} else {
				selectedPoint.addClass('is-open').siblings('.cd-single-point.is-open').removeClass('is-open').addClass('visited');
			}
		});

		//close interest point description
		$('.cd-close-info').on('click', function(event){
			event.preventDefault();
			$(this).parents('.cd-single-point').eq(0).removeClass('is-open').addClass('visited');
		});
	}

	//Initalize functions for page load
	initIziModalEventHandlers();
	initIziModals();

}(window.jQuery, window, document));