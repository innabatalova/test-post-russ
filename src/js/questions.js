import $ from 'jquery';

$(window).on("load", function () {
    $(".questions__list").on('click',
        function () {
            // находим следующий блок для this
            let targetBlock = $(this).next();
            targetBlock.slideToggle(500);

            // разворачиваем стрелку
            let targetImg = $(this).find('.questions__img');
            targetImg.toggleClass('questions__img_open');
        }
    )
})