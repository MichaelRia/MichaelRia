$(document).ready(function(){

	// МЕНЮ НАВИГАЦИЯ

	const navIcon = document.querySelector('.nav-icon');
	const nav = document.querySelector('.mobile-nav');
	const overlay = document.querySelector('#overlay');
	const bodyEl = document.body;

	navIcon.addEventListener('click', function () {

		this.classList.toggle('nav-icon--active');
		nav.classList.toggle('active');
		overlay.classList.toggle('active');
		bodyEl.classList.toggle('noscroll');
	});

	// Находим ссылки внутри мобильной навигации
	const navLinks = document.querySelectorAll('.mobile-nav__list a');

	// Обходим ссылки методом forEach
	navLinks.forEach(function (item) {
		// Для каждой ссылки добавляем прослушку по событию "Клик"
		item.addEventListener('click', function () {

			navIcon.classList.remove('nav-icon--active'); // Убираем активный класс у иконки моб. навигации
			nav.classList.remove('active'); // Убираем активный класс у блока моб. навигации
			overlay.classList.remove('active'); // Убираем активный класс у блока Прозрачный Фон
			bodyEl.classList.remove('noscroll'); // Убираем активный класс для отмены прокрутки у Body 

		})
	});
	
	// Resize window
	window.addEventListener('resize', function() {

		nav.classList.remove('active'); 
		navIcon.classList.remove('nav-icon--active'); 
		overlay.classList.remove('active'); 
		bodyEl.classList.remove('noscroll'); 
	});

	// Page Nav Block Style fro Scroll
	let scrollpos = window.scrollY

	const pageNav = document.querySelector(".page-nav");
	const scrollChange = 10
	
	const add_class_on_scroll = () => pageNav.classList.add("scroll")
	const remove_class_on_scroll = () => pageNav.classList.remove("scroll")

	window.addEventListener('scroll', function() { 
	  scrollpos = window.scrollY;
	
	  if (scrollpos >= scrollChange) {
		   add_class_on_scroll() 
		}
	  else {
		   remove_class_on_scroll() 
		}
	});
	
});

