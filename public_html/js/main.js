$(document).ready(function () {
    //ANIMATION
    function animation() {
        let  windowHeight = $(window).height();
        let scroll = $(window).scrollTop();
        $('.animation').each(function () {
            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');

            if (position < windowHeight + scroll - 100) {
                $(this).addClass(animationName);
                $(this).css('animation-delay', delay);
            }
        });
    }


    $(window).scroll(function () {
        animation();
    });
    animation();

    //validate form

    if ($('.contact-form').length > 0) {
        $('.contact-form').validate({
            highlight: function (element) {
                $(element).addClass('is-invalid').removeClass('is-valid');
            },
            unhighlight: function (element) {
                $(element).addClass('is-valid').removeClass('is-invalid');
            },
            rules: {
                'contact-name': {
                    required: true
                },
                'contact-email': {
                    required: true,
                    email: true
                },
                'contact-message': {
                    required: true
                }
            },
            messages: {
                'contact-name': {
                    required: 'The Name* field is required'
                },
                'contact-email': {
                    required: 'The Email* field is required',
                    email: 'Please provide a valid email address'
                },
                'contact-message': {
                    required: 'The Message* field is required'
                }
            },
            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo(element.closest(".form-group").find(".invalid-feedback"));
            }
        });
    }


    if ($('.team-slider').length > 0) {
        $('.team-slider').owlCarousel({
            loop: true,
            dots: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                }

            }
        })
    }


});
