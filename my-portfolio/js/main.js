$(document).ready(function(){
        // plagin pageNav
    $('#header-menu').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 500,
        scrollThreshold: 0.5,
        fiter: '',
        easing : 'swing',
    });


    // $ - в jQuery это способ поиска document

    
	// Back Top Button
	const backTopBtn = document.querySelector('#backtop');

	backTopBtn.style.opacity = 0; 

	document.addEventListener('scroll', function () {
		if(window.pageYOffset > 400) {
			backTopBtn.style.opacity = 1; 
		}
		else {
			backTopBtn.style.opacity = 0; 
		}
	});

    // MixitUp (Filters for Projects Card) 
    let containerEl = document.querySelector('#mix-projects');

    let mixer = mixitup(containerEl, {
        classNames: {
            block: ""
        },
        animation: {
            effects: 'fade translateZ(-100px)',
            duration: 500,
            nudge: false 
        }
    });

    // For Cadrs Sizing if Filter is Active
    // const filterToggles = document.querySelectorAll('.mix-button button');
    // const projectBigCards = document.querySelectorAll('.project-card');

    // for (let i = 0; i < filterToggles.length; i++) {
    //     filterToggles[i].addEventListener('click', function(){
    //         if (i == 0){
    //             for (let j = 0; j < 2; j++) {
    //                 projectBigCards[j].classList.add('project-card--big')
    //             }
    //         }
    //         else {
    //             for (let j = 0; j < 2; j++) {
    //                 projectBigCards[j].classList.remove('project-card--big')
    //             }
    //         }
    //     })
    // }

    // "(let j = 0; j < 2; j++)" -- Пускай 1я Карточка "j = 0" (в JS счёт начинается с 0); и 2я Карточка "j < 2" (элемент с Индексом меньше 2, тоесть 1)


    // Перемещение Фейк-ПлейсХолдера в фокусе и без
    // Form Placeholder

    const formItems = document.querySelectorAll('.form-input');

    for(let item of formItems){
        const thisParent = item.closest('.form-item');
        const thisPlaceholder = thisParent.querySelector('.fake-placeholder');
        // Если Инпут в Фокусе
        item.addEventListener('focus', function(){
            thisPlaceholder.classList.add('active');
        });

        // Если Инпут теряет Фокус
        item.addEventListener('blur', function(){

            if(item.value.length > 0){
                thisPlaceholder.classList.add('active');
            }
            else(
                thisPlaceholder.classList.remove('active')
            )    
        })
    };

    // ******************************************
    // FORM-VALIDATE
    // ******************************************

    $('.contact-form').validate({
        rules: {
            email: {
                required: true,   //-- обозначение обязательного поля
                email: true
            },

            message: {
                required: true
            }
        },
        messages: {
            email: {
                required: 'Введите email',
                email: 'Отсутствует символ @'
            },

            message: {
                required: 'Поле не должно быть пустым'
            }
        },
        submitHandler: function (form) {
            ajaxFormSubmit();
        }
    });

     // ******************************************
    // Ajax Function -- Запрос на Сервер
    // ******************************************

    function ajaxFormSubmit() {

        let string = $('.contact-form').serialize(); // сохраняем данные введенные в строку ФОРМЫ

        // Формируем Ajax запрос 
        $.ajax({
            type: 'POST', // Тип запроса - POST 
            url: 'php/mail.php', // Куда отправляем запрос 
            data: string, // Какие данные отправляем, в данном случае это -- Переменная STRING
            
            // Функция, если всё прошло успешно
            success: function (html) {
                $('.contact-form').slideUp(800);
                $('#answer').html(html);
            }
        });
        // Чтобы по Submit больше ничего не выполнялось -- делаем возврат FALSE чтобы прервать цепочку срабатывания остальных функций
        return false;
    }


});



