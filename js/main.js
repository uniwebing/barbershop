$(document).ready(function () {

    // ================== burger ========================================================================
    $('.burger').on ('click', function () {
        $('.menu').addClass('open');
    });
    $('#menu').children().on('click', () => {
        $('#menu').removeClass('open');
    });

    // ================== slider =======================================================================
    
    $('.slider-items').slick({
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        centerPadding: "0",
        responsive: [
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                dots: false,
                arrows: false,
                centerMode: false
                }
            }
        ]
    });

    // =================================================================================================

    // открыть модальное
    $('#open-modal-btn').on('click', function() {
        $('#my-modal').addClass('open');
    })
    // закрыть модальное
    $('#close-my-modal-btn').on('click', function() {
        $('#my-modal').removeClass('open');
    })



    // =================== modal discount =============================================================
    // открыть модальное
    $('#discount-open-modal-btn').on('click', function() {
        $('#my-modal-discount').addClass('on');
    })
    // закрыть модальное
    $('#close-modal-btn').on('click', function() {
        $('#my-modal-discount').removeClass('on');
    })
    
    
    $.datepicker.setDefaults($.datepicker.regional['ru']);
    $('#date').datepicker({
        constrainInput: true,
        minDate: new Date(),
        maxDate: "+4",
        dateFormat: 'dd.mm.yy',
        
    });
    
    $("#phone").mask("+7(000)000-00-00", {
        clearIfNotMatch: true
    });
    


    
    // $('.modal-button').on('click', function (e) {
        //     $('#add-form').find(':input').each(function (i, input) {
            //         inputs.push($(input).val());
            
            //     })
            //     console.log(inputs);
            // });
    
            



    // ======================== МАССИВ ЦИКЛ ==============================
    const inputs = new Array ("name", "service", "date", "phone", "master", "time");
    
    $('form').on('click', function (e) {
        e.preventDefault();
        let hasError = false;
        
        $('#add-form').find(':input').each(function () {
            for (let i = 0; i < inputs.length; i++) {
                if ($(this).attr("id") == inputs[i]) {// что бы не было красной рамочки у кнопки отправить
                    if (!$(this).val()) {
                        $(this).css('border', 'red 1px solid');
                        $(this).next().show();
                        hasError = true;
                        
                    } else {
                        $(this).css('border', 'rgb(174, 137, 89) 1px solid');
                        $(this).next().hide();
                    }                       
                }              
            }
        })
        const name = $('#name');
        const service = $('#service');
        const date = $('#date');
        const phone = $('#phone');
        const master = $('#master');
        const time = $('#time');
           
        
        if (!hasError) {
            $.ajax({
                method: "POST",
                url: "https://testologia.ru/checkout",
                data: {
                    name: name.val(),
                    service: service.val(),
                    date: date.val(),
                    phone: phone.val(),
                    master: master.val(),
                    time: time.val()
                }
            })
                .done(function (msg) {
                    console.log(msg);

                    if (msg.success) {
                        $('#modal-title h3').text('Спасибо что выбрали Strong Club!');
                        $('#add-form').fadeOut();
                        $('#modal-text').show();
                        
                        setTimeout(() => {
                            $('#modal-text').hide();
                            $('#modal-title h3').text('Заполните данные для оформления заявки');
                            $('#add-form').fadeIn();
                            $('#add-form').trigger('reset');
                        }, 3000);
                    } else {
                        alert('Заказ не создан!')
                    }
                });
        }
    });
    
  


    // =================================================================================================
    // $('#submit').on('click', function (e) {
        
    //     e.preventDefault();
    //     const name = $('#name');
    //     const service = $('#service');
    //     const date = $('#date');
    //     const phone = $('#phone');
    //     const master = $('#master');
    //     const time = $('#time');

    //     let hasError = false;

    //     $('.error-input').hide();

    //     if (!name.val()) {
    //         name.next().show();
    //         name.css({ "borderColor": "red" });
    //         hasError = true;
    //     } else {
    //         name.css({ "borderColor": "rgb(174, 137, 89)" });
    //     }

    //     if (!service.val()) {
    //         service.next().show();
    //         service.css({ "borderColor": "red" });
    //         hasError = true;
    //     } else {
    //         service.css({ "borderColor": "rgb(174, 137, 89)" });
    //     }

    //     if (!date.val()) {
    //         date.next().show();
    //         date.css({ "borderColor": "red" });
    //         hasError = true;
    //     } else {
    //         date.css({ "borderColor": "rgb(174, 137, 89)" });
    //     }

    //     if (!phone.val()) {
    //         phone.next().show();
    //         phone.css({ "borderColor": "red" });
    //         hasError = true;
    //     } else {
    //         phone.css({ "borderColor": "rgb(174, 137, 89)" });
    //     }

    //     if (!master.val()) {
    //         master.next().show();
    //         master.css({ "borderColor": "red" });
    //         hasError = true;
    //     } else {
    //         master.css({ "borderColor": "rgb(174, 137, 89)" });
    //     }

    //     if (!time.val()) {
    //         time.next().show();
    //         time.css({ "borderColor": "red" });
    //         hasError = true;
    //     } else {
    //         time.css({ "borderColor": "rgb(174, 137, 89)" });
    //     }


    //     if (!hasError) {
            
    //         $.ajax({
    //             method: "POST",
    //             url: "https://testologia.ru/checkout",
    //             data: { name: name.val(), service: service.val(), date: date.val(), phone: phone.val(), master: master.val(), time: time.val() }
    //         })
    //             .done(function (msg) {
    //                 if (msg.success) {
    //                     $('#modal-title h3').text('Спасибо что выбрали Strong Club!');
    //                     $('#add-form').fadeOut();
    //                     $('#modal-text').show();
                        
    //                     setTimeout(() => {
    //                         $('#modal-text').hide();
    //                         $('#modal-title h3').text('Заполните данные для оформления заявки');
    //                         $('#add-form').fadeIn();
    //                         $('#add-form').trigger( 'reset' );
                            
    //                     }, 2000);
    //                 } else {
    //                     alert('Заказ не создан!')
    //                 }
    //                 console.log(msg);
    //             });            
            
    //     }
       

    // })

    // ======================================== wow ========================================================

    new WOW({ animateClass: 'animate__animated'}).init();



})

