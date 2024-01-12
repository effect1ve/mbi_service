

$(document).ready(function() {

    $('#popular-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: ["<span class='pe-7s-angle-left'></span>", "<span class='pe-7s-angle-right'></span>"],
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            992: {
                items: 3
            },
            1024: {
                items: 4
            }
        }
    })
    $('#review-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav: true,
        navText: ["<span class='pe-7s-angle-left'></span>","<span class='pe-7s-angle-right'></span>"],
        items: 1
    })

    $(".animate-scroll").click(function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top - 56
        }, 1500);
    });
});


// $(document).ready(function () {
//     $('form-call').submit(function () {
//         var formID = $(this).attr('id'); // Получение ID формы
//         var formNm = $('#' + formID);
//         $.ajax({
//             type: 'POST',
//             url: 'mail-call.php', // Обработчик формы отправки
//             data: formNm.serialize(),
//             success: function (data) {
//                 // Вывод текста результата отправки в текущей форме
//                 $(formNm).html(data);
//             }
//         });
//         return false;
//     });
// });