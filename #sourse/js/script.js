// IBG =============================================================
jQuery('.ibg').each(function () {
	var src = jQuery(this).find('img').attr('src');
	jQuery(this).css('background', 'url(' + src + ') center / cover no-repeat');
	jQuery(this).find('img').css('display', 'none');
});
// /IBG =============================================================
// MOBILE =============================================================
// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

// 	alert("Вы используете мобильное устройство (телефон или планшет).")

// } else alert("Вы используете ПК.")
// /MOBILE =============================================================

const burger = document.querySelector('.menu_burger');
const headerMenyLeft = document.querySelector('.header_menu-left');

burger.addEventListener('click', function () {
	this.classList.toggle('active');
	headerMenyLeft.classList.toggle('active');
});


// accordion =============================================================

// const footerTitle = document.querySelectorAll('.footer_title-accordion');
// document.documentElement.addEventListener('click', function (e) {
// 	const targetElement = e.target;
// 	for (var a = 0; a < footerTitle.length; a++) {
// 		footerTitle[a].classList.remove('active');
// 		footerTitle[a].nextElementSibling.style.height = 0;
// 	}
// 	if (targetElement.classList.contains('footer_title-accordion') && targetElement.classList.contains('active')) {
// 		targetElement.classList.remove('active');
// 		targetElement.nextElementSibling.style.height = 0;

// 	} else if (targetElement.classList.contains('footer_title-accordion')) {
// 		targetElement.classList.add('active');
// 		targetElement.nextElementSibling.style.height = targetElement.nextElementSibling.scrollHeight + 'px';
// 	}
// 	if (!targetElement.classList.contains('footer_title-accordion')) {
// 		for (var a = 0; a < footerTitle.length; a++) {
// 			footerTitle[a].classList.remove('active');
// 			footerTitle[a].nextElementSibling.style.height = 0;
// 		}
// 	}

// });
// /accordion =============================================================


//window width
let windowW = window.innerWidth;
window.addEventListener('resize', function () {
	windowW = window.innerWidth;
})


//header 
const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
	if (window.scrollY > 0) {
		header.classList.add('active');
	} else {
		header.classList.remove('active');
	}
})


//header search
const headerSearch = document.querySelector('.header_menu-search');

headerSearch.addEventListener('click', function () {
	if (event.target.tagName != 'INPUT') {
		this.classList.toggle('active')
	}
})

//header menu
const headerMenyRight = document.querySelector('.header_menu-right');
const headerMenyIcons = document.querySelector('.header_menu-icons');

window.addEventListener('resize', function () {
	if (window.innerWidth < 1100) {
		headerMenyLeft.insertAdjacentElement('beforeend', headerMenyRight)
	}
	else {
		headerMenyIcons.insertAdjacentElement('beforebegin', headerMenyRight)
	}

})
window.addEventListener('DOMContentLoaded', function () {
	if (window.innerWidth < 1100) {
		headerMenyLeft.insertAdjacentElement('beforeend', headerMenyRight)
	}
	else {
		headerMenyIcons.insertAdjacentElement('beforebegin', headerMenyRight)
	}
})

//Menu scroll
const headerMenu = document.querySelectorAll('.header_menu');
const footerMenu = document.querySelectorAll('.footer_menu');
for (elem of headerMenu) {
	for (item of elem.querySelectorAll('a')) {
		item.addEventListener('click', function (e) {
			e.preventDefault();
			let block = document.querySelector(`*[data-scroll=${this.innerHTML.toLowerCase()}]`) || document.querySelector(`footer[data-scroll=${this.innerHTML.toLowerCase()}]`);
			if (block) {
				block.scrollIntoView({ block: "start", behavior: "smooth" });
			}
		})
	}
}
for (elem of footerMenu) {
	for (item of elem.querySelectorAll('a')) {
		item.addEventListener('click', function (e) {
			e.preventDefault();
			let block = document.querySelector(`*[data-scroll=${this.innerHTML.toLowerCase()}]`) || document.querySelector(`footer[data-scroll=${this.innerHTML.toLowerCase()}]`);
			if (block) {
				block.scrollIntoView({ block: "start", behavior: "smooth" });
			}
		})
	}
}
//comments slider

let commentsPagination = document.querySelector('.comments_pagination')
let commentsSlider = new Swiper('.comments_slider', {
	pagination: {
		el: ".swiper-pagination",
		type: "progressbar",
	},
	navigation: {
		nextEl: ".comments_navigation-next",
		prevEl: ".comments_navigation-prev",
	},
	spaceBetween: 20,
	slidesPerView: 1,
	on: {
		slideChange: function (sw) {
			commentsPagination.innerHTML = (sw.activeIndex + 2) + '/' + sw.slides.length + ' People';
			if (windowW < 1000) {
				commentsPagination.innerHTML = (sw.activeIndex + 1) + '/' + sw.slides.length + ' People';
			}
		},
		init: function (sw) {
			commentsPagination.innerHTML = (sw.activeIndex + 2) + '/' + sw.slides.length + ' People';
			if (windowW < 1000) {
				commentsPagination.innerHTML = (sw.activeIndex + 1) + '/' + sw.slides.length + ' People';
			}
		}
	},
	breakpoints: {
		1000: {
			slidesPerView: 2,
			spaceBetween: 40,
		},
	}
})


// reservation map

function initMap() {
	const uluru = { lat: -25.344, lng: 131.036 };
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 4,
		center: uluru,
		styles: [
			{
				"featureType": "all",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"saturation": 36
					},
					{
						"color": "#000000"
					},
					{
						"lightness": 40
					}
				]
			},
			{
				"featureType": "all",
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"visibility": "on"
					},
					{
						"color": "#000000"
					},
					{
						"lightness": 16
					}
				]
			},
			{
				"featureType": "all",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 20
					}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 17
					},
					{
						"weight": 1.2
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 20
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 21
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 17
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 29
					},
					{
						"weight": 0.2
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 18
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 16
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 19
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 17
					}
				]
			}
		]
	});
}

//reservation number

const reservationNumber = document.querySelector('.reservation_number');

reservationNumber.addEventListener('focus', function () {
	if (!parseInt(this.value)) {
		this.value = '';
	} else {
		this.value = parseInt(this.value)
	}
})

reservationNumber.addEventListener('blur', function () {
	if (!parseInt(this.value)) {
		this.value = `1 ` + this.dataset.text;
	} else {
		this.value = parseInt(this.value) + ' ' + this.dataset.text;
	}
})