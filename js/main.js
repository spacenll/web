(function ($) {
    "use strict";
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 0, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 220) {
            $('.nav-bar').addClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "73px");
        } else {
            $('.nav-bar').removeClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "0");
        }
    });
    
    
    // Dropdown on mouse hover
 $(document).ready(function () {
    function toggleNavbarMethod() {
        if ($(window).width() > 992) {
            $('.navbar .dropdown').on('mouseover', function () {
                $('.dropdown-toggle', this).trigger('click');
            }).on('mouseout', function () {
                $('.dropdown-toggle', this).trigger('click').blur();
            });
        } else {
            $('.navbar .dropdown').off('mouseover').off('mouseout');
        }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);

    // إغلاق القائمة الجانبية عند النقر على أي رابط داخلها
    $('.navbar-nav .nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide'); // إغلاق القائمة المنسدلة
    });
});
    
    
    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Modal Video
    $(document).ready(function () {
        var videoModal = $('#videoModal');
        var videoPlayer = $('#videoPlayer');
        var videoSource = $('#videoSource');

        videoModal.on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget);
            var videoSrc = button.data("src");
            videoSource.attr("src", videoSrc);
            videoPlayer[0].load(); // إعادة تحميل الفيديو
            videoPlayer[0].play(); // تشغيل الفيديو تلقائيًا
        });

        videoModal.on('hidden.bs.modal', function () {
            videoPlayer[0].pause(); // إيقاف الفيديو عند إغلاق النافذة
        });
    });

    // Testimonial Slider
    $('.testimonial-slider').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testimonial-slider-nav'
    });
    $('.testimonial-slider-nav').slick({
        arrows: false,
        dots: false,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: '22px',
        slidesToShow: 3,
        asNavFor: '.testimonial-slider'
    });
    $('.testimonial .slider-nav').css({"position": "relative", "height": "160px"});
    
    
    // Blogs carousel
    $(".related-slider").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
    
    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section"); // الأقسام المستهدفة
    const navLinks = document.querySelectorAll(".nav-link");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // إزالة "active" من جميع الروابط
                navLinks.forEach(link => link.classList.remove("active"));

                // الحصول على الـ id للقسم الذي في الأسطر
                const id = entry.target.getAttribute("id");
                
                // إضافة "active" للرابط المطابق
                const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });
    }, {
        threshold: 0.1, // التغيير بمجرد ظهور القسم بنسبة 10%
        rootMargin: "0px 0px -20% 0px" // تمديد منطقة المراقبة بحيث يظهر القسم أسرع
    });

    // مراقبة جميع الأقسام
    sections.forEach(section => observer.observe(section));
});

