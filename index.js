// window.addEventListener('scroll', function() {
//     var header = document.getElementById('header');
//     var scrollPosition = window.scrollY;
//     var viewportHeight = window.innerHeight;
//     // スクロール位置が100vhを超えたらヘッダーの背景色を変更
//     if (scrollPosition > viewportHeight) {
//     header.style.backgroundColor = 'black';
//     } else {
//     header.style.backgroundColor = 'transparent';
//     }
// });

$(function() {
    $('.burger').click(function() {
        if ($('.burger').hasClass('open')) {
            $('.burger').removeClass('open');
            $('#header-modal').fadeOut();
        } else {
            $('.burger').addClass('open');
            $('#header-modal').fadeIn();
        }
    });

    window.addEventListener("scroll", function () {
        const header = this.document.querySelector("header");
        var mvHeight = $('.header-wrapper').height();    
        header.classList.toggle("transform", window.scrollY >= mvHeight - 20);
    });
});

