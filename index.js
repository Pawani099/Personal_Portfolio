$(document).ready(function(e){
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    var width = $navbar.width();
    toggle_onclick($win, $navbar, width);

    // resize event
    $win.resize(function(){
        toggle_onclick($win, $navbar, width);
    });

    $toggle.click(function(e){
        $navbar.toggleClass("toggle-left");
    })

    // Certificate section switching
    const photographyBtn = $('#photography-btn');
    const professionalBtn = $('#professional-btn');
    const otherBtn = $('#other-btn'); // Add reference for the new button
    const photographyCerts = $('#photography-certs');
    const professionalCerts = $('#professional-certs');
    const otherCerts = $('#other-certs'); // Add reference for the new section

    photographyBtn.click(function() {
        photographyCerts.show();
        professionalCerts.hide();
        otherCerts.hide(); // Hide other section
        photographyBtn.removeClass('btn-outline-dark').addClass('btn-dark active');
        professionalBtn.removeClass('btn-dark active').addClass('btn-outline-dark');
        otherBtn.removeClass('btn-dark active').addClass('btn-outline-dark'); // Update other button style
    });

    professionalBtn.click(function() {
        photographyCerts.hide();
        professionalCerts.show();
        otherCerts.hide(); // Hide other section
        professionalBtn.removeClass('btn-outline-dark').addClass('btn-dark active');
        photographyBtn.removeClass('btn-dark active').addClass('btn-outline-dark');
        otherBtn.removeClass('btn-dark active').addClass('btn-outline-dark'); // Update other button style
    });

    // Add click handler for the Other button
    otherBtn.click(function() {
        photographyCerts.hide();
        professionalCerts.hide();
        otherCerts.show(); // Show other section
        otherBtn.removeClass('btn-outline-dark').addClass('btn-dark active');
        photographyBtn.removeClass('btn-dark active').addClass('btn-outline-dark');
        professionalBtn.removeClass('btn-dark active').addClass('btn-outline-dark');
    });

});


$(document).ready(function($){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#topBtn').fadeIn('slow');
        } else {
            $('#topBtn').fadeOut('slow');
        }
    });
    $('#topBtn').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });
});

$(window).on("load",function(){
    $(".loader-container").fadeOut(3000);
});




 

function toggle_onclick($win, $navbar, width){
    if($win.width() <= 768){
        $navbar.css({left: `-${width}px`});
    }else{
        $navbar.css({left: '0px'});
    }
}

var typed = new Typed('#typed' , {
    strings: [
        'Undergraduate Student...',
        'Photographer...',
        'Web Designer...',
        'Web Developer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

var typed_2 = new Typed('#typed_2' , {
    strings: [
        'Undergraduate Student...',
        'Photographer...',
        'Web Designer...',
        'Web Developer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
