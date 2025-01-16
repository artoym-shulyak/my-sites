var width, height // Переменные предназначены для медия запросов

// Товар
const goodInner = document.querySelector('.good__inner') // Описание товара
const goodParams = document.querySelector('.good__paramets') // Технические параметры товара
const goodMessanger = document.querySelector('.good__messanger') // Менеджер
const goodGalery = document.querySelector('.good__galery') // Галерея

// Swipers
const sliderOfSwiper = nameSwiper => {
	try {
		switch (nameSwiper) {
			case '.modern__swiper':
				new Swiper(nameSwiper, {
					loop: true,
					allowTouchMove: true,
					speed: 900,
					pagination: {
						el: '.modern__pagination',
					},

					navigation: {
						nextEl: '.modern__next',
						prevEl: '.modern__prev',
					},

					breakpoints: {
						319.98: {
							spaceBetween: 0,
							slidesPerView: 1,
						},
						576.98: {
							spaceBetween: 24,
							slidesPerView: 2,
						},
						767.98: {
							slidesPerView: 3,
							spaceBetween: 24,
						},
						991.98: {
							slidesPerView: 4,
							spaceBetween: 24,
						},
					},
				})
				break
			case '.brend__swiper':
				new Swiper(nameSwiper, {
					loop: true,
					allowTouchMove: true,
					speed: 900,
					slidesPerView: 6,
					pagination: {
						el: '.brend__pagination',
					},

					navigation: {
						nextEl: '.brend__next',
						prevEl: '.brend__prev',
					},

					breakpoints: {
						319.98: {
							spaceBetween: 30,
							slidesPerView: 2,
						},
						576.98: {
							spaceBetween: 45,
							slidesPerView: 4,
						},
						767.98: {
							slidesPerView: 5,
							spaceBetween: 65,
						},
						991.98: {
							slidesPerView: 6,
							spaceBetween: 75,
						},
					},
				})
				break
			case '.good__swiper':
				new Swiper(nameSwiper, {
					loop: true,
					allowTouchMove: true,
					speed: 900,
					slidesPerView: 2,

					navigation: {
						nextEl: '.good__next',
						prevEl: '.good__prev',
					},

					breakpoints: {
						319.98: {
							spaceBetween: 0,
							slidesPerView: 1,
						},
						576.98: {
							spaceBetween: 34,
							slidesPerView: 2,
						},
					},
				})
				break
			case '.others__swiper':
				new Swiper(nameSwiper, {
				loop: true,
				allowTouchMove: true,
				speed: 900,
				slideFullyVisibleClass: 'my-slide-visible',
				// watchOverflow: false,
				  autoplay: {
				    delay: 5000,
				  },
				pagination: {
					el: '.others__pagination',
				},
				navigation: {
					nextEl: '.others__next',
					prevEl: '.others__prev',
				},

				breakpoints: {
					319.98: {
						spaceBetween: 24,
						slidesPerView: 1,
					},
					576.98: {
						spaceBetween: 24,
						slidesPerView: 2,
					},
					767.98: {
						slidesPerView: 3,
						spaceBetween: 24,
					},
					991.98: {
						slidesPerView: 4,
						spaceBetween: 24,
					},
				},
			})
				break
			case 'galery':
				var itemsGaleries = new Swiper('.swiper-galeries', {
					loop: true,
					spaceBetween: 20,
					slidesPerView: 7,
					watchSlidesProgress: true,

					breakpoints: {
						319.98: {
							spaceBetween: 15,
							slidesPerView: 3,
						},
						374.98: {
							spaceBetween: 15,
							slidesPerView: 4,
						},
						576.98: {
							spaceBetween: 15,
							slidesPerView: 5,
						},
						767.98: {
							slidesPerView: 6,
							spaceBetween: 15,
						},
						991.98: {
							slidesPerView: 7,
							spaceBetween: 20,
						},
					},
				})
				var itemGalery = new Swiper('.swiper-galery', {
					loop: true,
					spaceBetween: 10,
					navigation: {
						nextEl: '.good__galery-next',
						prevEl: '.good__galery-prev',
					},
					thumbs: {
						swiper: itemsGaleries,
					},
					pagination: {
						el: '.good__galery-pagination',
					},
				})
				break
			default:
				console.log('Exits')
		}
	} catch (e) {
		console.log(e)
	}
}
sliderOfSwiper('.others__swiper')
sliderOfSwiper('galery')

// Modal menu
const navMenu = () => {
 try {
	const btnBurger = document.querySelector('#burger'),
	body = document.querySelector('body'),
	menu = document.querySelector('#menu')

	btnBurger.addEventListener('click', (e) => {
		body.classList.toggle('lock')
		btnBurger.classList.toggle('_active')
		menu.classList.toggle('_active')
	})
 } catch (e) {
 	console.log(e)
 }
}
navMenu()

window.onresize = window.onload = function () {
	try {
		width = this.innerWidth
		height = this.innerHeight
		if (width < 991.98) {
			sliderOfSwiper('.modern__swiper')
			sliderOfSwiper('.brend__swiper')
			goodInner.appendChild(goodParams)
			goodInner.appendChild(goodMessanger)
		} else {
			goodInner.after(goodParams)
			goodGalery.after(goodMessanger)
		}
		if (width < 767.98) {
			sliderOfSwiper('.good__swiper')
		}
	} catch (e) {
		console.log(e)
	}
}