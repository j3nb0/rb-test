$(document).on('ready', function() {

	var switchIcon = function() {
		// Change register button icon
		if ($('#register-button i').hasClass('fa-caret-down')) {
			$('#register-button i').removeClass('fa-caret-down').addClass('fa-caret-up');
		} else {
			$('#register-button i').removeClass('fa-caret-up').addClass('fa-caret-down');
		}
	}

	// Show and hide register form
	$('#register-button').on('click', function() {
		$('#form-container').slideToggle();
		switchIcon();
	});

	$('i.mobile-nav-trigger').on('click', function() {
		// Close sign up form
		if ($('#form-container').is(':visible')) {
			switchIcon();
			$('#form-container').slideUp();
		}
		// Show and hide navigation on mobile
		$('nav#nav-main .container').slideToggle();
	});

	// Validate register form
	var validateForm = function() {

		var valid = true;

		// Regex tests for inputs
		var nameTest  = /^[a-zA-Z ]*$/,
			emailTest = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
			phoneTest = /^[1-9]\d{2}-\d{3}-\d{4}/;

		nameVal  = $('input[name=name]').val(),
		emailVal = $('input[name=email]').val(),
		phoneVal = $('input[name=phone]').val();

		// Test if inputs are empty or invalid
		if (!nameVal || !nameTest.test(nameVal)) {
			$('#name-error').show();
			valid = false;
		}

		if (!emailVal || !emailTest.test(emailVal)) {
			$('#email-error').show();
			valid = false;
		}

		if (!phoneVal || !phoneTest.test(phoneVal)) {
			$('#phone-error').show();
			valid = false;
		}

		// Return valid state of form
		return valid;		
	}

	// "Submit" register form
	$('form#register-form').on('submit', function(e){
		e.preventDefault();

		// Hide error messages
		$('.error').hide();

		// Show thank you message and log values if form is valid
		if (validateForm()) {
			console.log(nameVal, emailVal, phoneVal);
			$('#register-form, .key').fadeOut(function() {
				$('p.thank-you').fadeIn();
			});
		}

	});

	// Because tacos
	var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";

	$(document).keydown(function(e) {

		kkeys.push(e.keyCode);

		if (kkeys.toString().indexOf(konami) >= 0) {

			$(document).unbind('keydown', arguments.callee);

			$('span.brand').text('Recovery Tacos');

			$('#taco').show().animate({
				'right': '0'
			}, 3000);

		}

	});

});