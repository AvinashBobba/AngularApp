/**

This file includes all of our script functions. We use longhand 'jquery' in document.ready because the Wordpress version of jQuery runs in compatibility/NoConflict mode by default. This means that the typical '$' shortcut for jQuery doesn't work, so it doesn't conflict with any other JavaScript libraries that use the dollar sign.

**/

(function($){

	$(document).ready(function(){

		history.pushState(null, null, document.URL);
		window.addEventListener('popstate', function () {
			history.pushState(null, null, document.URL);
		});

		$('.swapinhash').each(function(){
			var hash = document.location.href.split('#');
			if(hash.length == 2)
				hash = hash[1];
			else
				hash = '';

			$this = $(this);

			if(!hash.length && $this.data('swapinhash-fallback'))
				hash = $this.data('swapinhash-fallback');

			$this.html($this.html().replace('#',hash));
			if($this.data('swapinhash-container'))
				//$($this.data('swapinhash-container')).removeClass('invisible');
				$this.closest($this.data('swapinhash-container'))
					.css({opacity: 0.0})
					.removeClass('invisible')
					.animate({opacity: 1}, 500);
		});

		// chrome tab behaviour fix
		var inputs = [];
		var inputIndex = 0;
		$('input').each(function(){
			var $this = $(this);
			var i = inputIndex;
			inputs[i] = $this;
			$this.keydown(function(e){
				var $this = $(this);
				if(e.keyCode == 9){
					if(!e.shiftKey && i < (inputs.length-1)){
						e.preventDefault();
						inputs[i+1].focus();
					}
					if(e.shiftKey && i > 0){
						e.preventDefault();
						inputs[i-1].focus();
					}
				}
			});
			inputIndex++;
		});

		// $('.editable-preference').each(function(){
		// 	var $wrapper = $(this);
		// 	var $button = $wrapper.find('button');
		// 	var $input = $wrapper.find('input');
		// 	var $status = $wrapper.find('.editable-status');

		// 	$input.prop('disabled',true);

		// 	var oldLabel = $button.html();

		// 	var save = function(){

		// 		var data = $input.serialize();

		// 		$button.addClass('disabled');
		// 		$input.prop('disabled',true);
		// 		$status.html('Saving...').fadeIn();
		// 		$form = $('form.form-validate');

		// 		$.post({
		// 			url: document.location.href,
		// 			data: data,
		// 			dataType: 'json',
		// 			success: function(response){
		// 				if(response.success){
		// 					$button.html(oldLabel).removeClass('disabled');
		// 					$status.html('Saved').addClass('success');

		// 					// re-validate medium opt-in
		// 					$form.data('bootstrapValidator').revalidateField('preferences_form[mediums][]');

		// 					setTimeout(function(){
		// 						$status.fadeOut(function(){
		// 							$status.removeClass('success');
		// 						});
		// 					},3000);
		// 				}
		// 				else{
		// 					if(!response.errors.length){
		// 						response.errors[0] = 'There was a problem saving your information';
		// 					}
		// 					$status.html(response.errors[0]).addClass('error');
		// 					setTimeout(function(){
		// 						$status.fadeOut(function(){
		// 							$status.removeClass('error');
		// 						});
		// 					},5000);
		// 					$button.removeClass('disabled');
		// 					$input.prop('disabled',false);
		// 				}
		// 			}
		// 		});
		// 	};

		// 	$input.keyup(function(e){
		// 		if(e.keyCode == 13)
		// 			save();
		// 	});

		// 	$button.click(function(){
		// 		if(!$button.hasClass('disabled')){
		// 			if($input.prop('disabled')){
		// 				$button.html('Save');
		// 				$input.prop('disabled',false).select();
		// 			}
		// 			else{
		// 				save();
		// 			}
		// 		}
		// 	});
		// });

		$(function () {
			$('[data-toggle="tooltip"]').tooltip()
		  })

		// Search toggle
		$('.search-toggle').click(function(){
			$('#search-wrapper').toggleClass("open");
		});

		// Menu Button
		$('.toggle-button').click(function(){
			$('.menu-overlay').toggleClass("open");
			$('.c-hamburger').toggleClass("is-active");
			$('body').toggleClass("no-scroll");
		});

		// Form Validation
		var $forms = $('.form-validate');

		$forms.bootstrapValidator({
			excluded: [':disabled'],
			live: 'disabled'
		});

		$forms.each(function(){
			$(this).data('bootstrap-validator').resetForm(false);
		});

		// $forms.on('success.form.bv', function(e) {

		// 	// Prevent form submission
		// 	e.preventDefault();

		// 	var $form = $(e.target),
		// 		bv    = $form.data('bootstrapValidator');

		// 	if($form.hasClass('form-ajax')){
		// 		$.ajax({
		// 			type: "POST",
		// 			url: $form.attr('action'),
		// 			data: $form.serialize()+'&ajax=1',
		// 			success: function(data) {
		// 				var html = $(data);
		// 				var scrollTo = $form.data('scroll-to') ? $($form.data('scroll-to')).offset().top : 0;

		// 				html.hide();
		// 				$form.after(html);
		// 				$form.fadeOut(function(){
		// 					$form.slideUp();
		// 					html.fadeIn();

		// 					$('html, body').animate({
		// 						scrollTop: scrollTo
		// 					}, 700);

		// 				});
		// 			}
		// 		});
		// 	}
		// 	else{
		// 		bv.defaultSubmit();
		// 	}

		// });

		// $('input[data-bv-callback-callback=checkMedium]').change(function(){
		// 	var $this = jQuery(this);
		// 	var $form = $this.closest('form');
		// 	$form.data('bootstrapValidator').revalidateField($this.attr('name'));
		// });

		// $('input[data-bv-callback-selector]').change(function(){
		// 	var $this = jQuery(this);
		// 	var $form = $this.closest('form');
		// 	$form.data('bootstrapValidator').revalidateField($($this.data('bv-callback-selector')).attr('name'));
		// });

	});


})(jQuery);

// function eitherOr(value, validator, $field) {

// 	var valid = value ? true : false;
// 	if(!valid){
// 		jQuery($field.data('bv-callback-selector')).each(function(){
// 			if(jQuery(this).val().length)
// 				valid = true;

// 			if(value){
// 				validator.revalidateField(jQuery(this).attr('name'));
// 			}

// 		});
// 	}
//     return valid;
// }

function togglePostInfo(){
	var $input = jQuery('.preferences-list li input[value=post]');
	var $info = $input.closest('li').find('small.usage-info');
	if($input.prop('checked')){
		$info.removeClass('d-none');
	}
	else{
		$info.addClass('d-none');
	}
}
// jQuery(document).ready(function(){
// 	togglePostInfo();
// });

// function checkMedium(value, validator, $field) {

// 	var error = false;
// 	var checked = false;

// 	jQuery('[name="'+$field.attr('name')+'"]').each(function(){
// 		var $this = jQuery(this);

// 		if($this.val() == 'email'){
// 			var $input = jQuery('#preferencesEmail')
// 			if($this.prop('checked') && !($input.val().length && $input.prop('disabled'))){
// 				error = 'Please provide an email address if you wish to receive email communications';
// 			}
// 			if($this.prop('checked')){
// 				checked = true;
// 			}
// 		}
// 		if($this.val() == 'sms'){
// 			var $input = jQuery('#preferencesMobile')
// 			if($this.prop('checked') && !($input.val().length && $input.prop('disabled'))){
// 				error = 'Please provide a mobile number if you wish to receive SMS communications';
// 			}
// 			if($this.prop('checked')){
// 				checked = true;
// 			}
// 		}
// 		if($this.val() == 'post'){
// 			if($this.prop('checked')){
// 				checked = true;
// 			}
// 		}

// 		togglePostInfo();
// 	});

// 	if(!checked)
// 		error = 'Please select at least one method of contact';

// 	if(error){
// 		jQuery('[data-bv-for="'+$field.attr('name')+'"]').html(error);
// 	}

//     return !error;
// }
