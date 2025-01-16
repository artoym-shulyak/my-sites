// Активность Шапки при скроле
window.addEventListener('scroll', function () {
	if (pageYOffset > 1) {
		document.querySelector('header').classList.add('_min')
	} else {
		document.querySelector('header').classList.remove('_min')
	}
})

// Модальное окно "Выбрать объект"
const choiseObjectModal = open => {
	try {
		const openBtns = document.querySelectorAll(open),
			modal = document.querySelector('#range'),
			closeBtns = document.querySelectorAll('[data-close]')

		openBtns.forEach(btn => {
			btn.addEventListener('click', () => {
				modal.classList.add('_toggle')
				document.querySelector('body').classList.add('lock')
			})
		})

		closeBtns.forEach(btn => {
			btn.addEventListener('click', () => {
				modal.classList.remove('_toggle')
				document.querySelector('body').classList.remove('lock')
			})
		})
	} catch (e) {
		console.log(e)
	}
}

choiseObjectModal('[data-object]', '[data-close]')

// Модальное окно "Меню"
const menu = (item, window) => {
	try {
		const btn = document.querySelector(item),
			modal = document.querySelector(window)

		btn.addEventListener('click', e => {
			const target = e.target

			btn.classList.toggle('_toggle')
			modal.classList.toggle('_toggle')
			document.querySelector('body').classList.toggle('lock')
		})
	} catch (e) {
		console.log(e)
	}
}

menu('#burger', '#modal-menu')

// Модальное окно "Заказать звонок"
const modalCall = (item, window) => {
	try {
		const btn = document.querySelector(item),
			modal = document.querySelector(window),
			close = modal.querySelector('[data-close]')

		btn.addEventListener('click', e => {
			const target = e.target

			modal.classList.add('_toggle')
			document.querySelector('body').classList.add('lock')
		})

		close.addEventListener('click', e => {
			const target = e.target

			modal.classList.remove('_toggle')
			document.querySelector('body').classList.remove('lock')
		})
	} catch (e) {
		console.log(e)
	}
}

modalCall('#call', '#modal-call')

var width // Переменные предназначены для медия запросов

// Медиа запросы
window.onresize = window.onload = function () {
	try {
		// Элементы страницы "О проекте"
		const btnArrows = document.querySelectorAll('.history__arrows'),
			containerSwiperHostory = document.querySelectorAll('.history .swiper')

		// Элементы страницы "Инфаструктура усадьбы" (1n)
		const containerSwiperFrame = document.querySelectorAll(
				'.frame .frame__wrapper:nth-child(1n) .swiper'
			),
			containerInfoFrame = document.querySelectorAll(
				'.frame__wrapper:nth-child(1n) .frame__imagin'
			),
			containerDescrFrame = document.querySelectorAll(
				'.frame__wrapper:nth-child(1n) .frame__descr'
			)

		// Элементы страницы "Инфаструктура усадьбы" (2n)
		const containerSwiperFrame_2 = document.querySelectorAll(
				'.frame .frame__wrapper:nth-child(2n) .swiper'
			),
			containerInfoFrame_2 = document.querySelectorAll(
				'.frame__wrapper:nth-child(2n) .frame__imagin'
			),
			containerDescrFrame_2 = document.querySelectorAll(
				'.frame__wrapper:nth-child(2n) .frame__descr'
			)

		//  Элементы страницы "Кедровые резиденции"
		const btnConstruction = document.querySelector('.construction__more'),
			swiperConstruction = document.querySelector('.construction__swiper'),
			headerConstruction = document.querySelector('.construction__title')

		try {
			width = this.innerWidth
			height = this.innerHeight
			if (width < 1023.98) {
				// Элементы страницы "О проекте"
				containerSwiperHostory.forEach((container, i) => {
					container.after(btnArrows[i])
				})

				// Элементы страницы "Инфаструктура усадьбы" (1n)
				containerInfoFrame.forEach((container, i) => {
					container.after(containerSwiperFrame[i])
					container.append(containerDescrFrame[i])
				})

				// Элементы страницы "Инфаструктура усадьбы" (2n)
				containerInfoFrame_2.forEach((container, i) => {
					container.after(containerSwiperFrame_2[i])
					container.append(containerDescrFrame_2[i])
				})

				//  Элементы страницы "Кедровые резиденции"
				swiperConstruction.after(btnConstruction)
			} else {
				// Элементы страницы "О проекте"
				containerSwiperHostory.forEach((container, i) => {
					container.append(btnArrows[i])
				})

				// Элементы страницы "Инфаструктура усадьбы" (1n)
				containerInfoFrame.forEach((container, i) => {
					container.append(containerSwiperFrame[i])
					container.after(containerDescrFrame[i])
				})

				// Элементы страницы "Инфаструктура усадьбы" (2n)
				containerInfoFrame_2.forEach((container, i) => {
					container.append(containerSwiperFrame_2[i])
					container.before(containerDescrFrame_2[i])
				})

				//  Элементы страницы "Кедровые резиденции"
				headerConstruction.after(btnConstruction)
			}
		} catch (e) {
			console.log(e)
		}
	} catch (e) {
		console.log(e)
	}
}

// Диапазон чего-то...
const rangeOfItem = item => {
	try {
		let rangeInput
		let priceInput
		let range
		let priceGap = 1
		switch (item) {
			case 'Площадь':
				;(rangeInput = document.querySelectorAll('.range__square-input input')),
					(priceInput = document.querySelectorAll(
						'.range__price-square input'
					)),
					(range = document.querySelector('.range__square .slider .progress'))

				rangeInput.forEach(input => {
					input.addEventListener('input', e => {
						let minVal = parseInt(rangeInput[0].value),
							maxVal = parseInt(rangeInput[1].value)

						if (maxVal - minVal < priceGap) {
							if (e.target.className === 'range-min') {
								rangeInput[0].value = maxVal - priceGap
							} else {
								rangeInput[1].value = minVal + priceGap
							}
						} else {
							priceInput[0].value = minVal
							priceInput[1].value = maxVal
							range.style.left = (minVal / rangeInput[0].max) * 100 + '%'
							range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%'
						}
					})
				})
				break
			case 'Стоимость':
				;(rangeInput = document.querySelectorAll('.range__cost-input input')),
					(priceInput = document.querySelectorAll('.range__price-cost input')),
					(range = document.querySelector('.range__cost .slider .progress'))

				rangeInput.forEach(input => {
					input.addEventListener('input', e => {
						let minVal = parseInt(rangeInput[0].value),
							maxVal = parseInt(rangeInput[1].value)

						if (maxVal - minVal < priceGap) {
							if (e.target.className === 'range-min') {
								rangeInput[0].value = maxVal - priceGap
							} else {
								rangeInput[1].value = minVal + priceGap
							}
						} else {
							priceInput[0].value = minVal
							priceInput[1].value = maxVal
							range.style.left = (minVal / rangeInput[0].max) * 100 + '%'
							range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%'
						}
					})
				})
				break
			case 'Ипотека':
				;(rangeInput = document.querySelectorAll(
					'.mortgage__cost-input input'
				)),
					(priceInput = document.querySelectorAll(
						'.mortgage__price-cost input'
					)),
					(range = document.querySelector('.mortgage__cost .slider .progress'))

				rangeInput.forEach(input => {
					input.addEventListener('input', e => {
						let minVal = parseInt(rangeInput[0].value)

						if (minVal < priceGap) {
							rangeInput[0].value = minVal + priceGap
						} else {
							priceInput[0].value = minVal
							range.style.left = (minVal / rangeInput[0].max) * 100 + '%'
						}
					})
				})
				break
			case 'Вложение':
				;(rangeInput = document.querySelectorAll(
					'.mortgage__invest-input input'
				)),
					(priceInput = document.querySelectorAll(
						'.mortgage__price-invest input'
					)),
					(range = document.querySelector(
						'.mortgage__invest .slider .progress'
					))

				rangeInput.forEach(input => {
					input.addEventListener('input', e => {
						let minVal = parseInt(rangeInput[0].value)

						if (minVal < priceGap) {
							rangeInput[0].value = minVal + priceGap
						} else {
							priceInput[0].value = minVal
							range.style.left = (minVal / rangeInput[0].max) * 100 + '%'
						}
					})
				})
				break
			case 'Срок':
				;(rangeInput = document.querySelectorAll(
					'.mortgage__term-input input'
				)),
					(priceInput = document.querySelectorAll(
						'.mortgage__price-term input'
					)),
					(range = document.querySelector('.mortgage__term .slider .progress'))

				rangeInput.forEach(input => {
					input.addEventListener('input', e => {
						let minVal = parseInt(rangeInput[0].value)

						if (minVal < priceGap) {
							rangeInput[0].value = minVal + priceGap
						} else {
							priceInput[0].value = minVal
							range.style.left = (minVal / rangeInput[0].max) * 100 + '%'
						}
					})
				})
				break
			case 'Площадь:Выбрать квартиру':
				;(rangeInput = document.querySelectorAll('.flat__square-input input')),
					(priceInput = document.querySelectorAll('.flat__price-square input')),
					(range = document.querySelector('.flat__square .slider .progress'))

				rangeInput.forEach(input => {
					input.addEventListener('input', e => {
						let minVal = parseInt(rangeInput[0].value),
							maxVal = parseInt(rangeInput[1].value)

						if (maxVal - minVal < priceGap) {
							if (e.target.className === 'range-min') {
								rangeInput[0].value = maxVal - priceGap
							} else {
								rangeInput[1].value = minVal + priceGap
							}
						} else {
							priceInput[0].value = minVal
							priceInput[1].value = maxVal
							range.style.left = (minVal / rangeInput[0].max) * 100 + '%'
							range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%'
						}
					})
				})
				break
			case 'Стоимость:Выбрать квартиру':
				;(rangeInput = document.querySelectorAll('.flat__cost-input input')),
					(priceInput = document.querySelectorAll('.flat__price-cost input')),
					(range = document.querySelector('.flat__cost .slider .progress'))

				rangeInput.forEach(input => {
					input.addEventListener('input', e => {
						let minVal = parseInt(rangeInput[0].value),
							maxVal = parseInt(rangeInput[1].value)

						if (maxVal - minVal < priceGap) {
							if (e.target.className === 'range-min') {
								rangeInput[0].value = maxVal - priceGap
							} else {
								rangeInput[1].value = minVal + priceGap
							}
						} else {
							priceInput[0].value = minVal
							priceInput[1].value = maxVal
							range.style.left = (minVal / rangeInput[0].max) * 100 + '%'
							range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%'
						}
					})
				})
				break
			case 'Этаж:Выбрать квартиру':
				;(rangeInput = document.querySelectorAll('.flat__stage-input input')),
					(priceInput = document.querySelectorAll('.flat__price-stage input')),
					(range = document.querySelector('.flat__stage .slider .progress'))

				rangeInput.forEach(input => {
					input.addEventListener('input', e => {
						let minVal = parseInt(rangeInput[0].value),
							maxVal = parseInt(rangeInput[1].value)

						if (maxVal - minVal < priceGap) {
							if (e.target.className === 'range-min') {
								rangeInput[0].value = maxVal - priceGap
							} else {
								rangeInput[1].value = minVal + priceGap
							}
						} else {
							priceInput[0].value = minVal
							priceInput[1].value = maxVal
							range.style.left = (minVal / rangeInput[0].max) * 100 + '%'
							range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%'
						}
					})
				})
				break
			default:
				console.log('Not su range')
		}
	} catch (e) {
		console.log(e)
	}
}

rangeOfItem('Площадь')
rangeOfItem('Стоимость')
rangeOfItem('Ипотека')
rangeOfItem('Вложение')
rangeOfItem('Срок')
rangeOfItem('Площадь:Выбрать квартиру')
rangeOfItem('Стоимость:Выбрать квартиру')
rangeOfItem('Этаж:Выбрать квартиру')

// Раскрывающий список -> "Выбрать объект"
function hundleSelect(boxesSelect, boxSelect) {
	const nameItems = document.querySelectorAll(boxesSelect),
		body = document.querySelector('body')

	nameItems.forEach(item => {
		const select = item,
			selectItem = item.querySelector(boxSelect)

		//  Функционал раскрытия/сворачивания выпадающих списокв
		selectItem.addEventListener('click', e => {
			if (!select.classList.contains('open')) {
				nameItems.forEach(box => {
					box.classList.remove('open')
					box.querySelector(boxSelect).classList.remove('open')
				})
				select.classList.add('open')
				selectItem.classList.add('open')
			} else {
				select.classList.remove('open')
				selectItem.classList.remove('open')
			}
		})

		// Отслеживаем клик по элементам
		select.addEventListener('click', e => {
			const target = e.target
			if (
				target &&
				target.tagName === 'LI' &&
				!target.classList.contains('active')
			) {
				const value = target.innerText
				try {
					select.querySelector('li.active').classList.remove('active')
				} catch (e) {}
				target.classList.add('active')
				selectItem.innerText = value
				select.classList.remove('open')
				selectItem.classList.remove('open')
			}
		})

		// Сворачиваем список при клики вне элемента
		body.addEventListener('click', e => {
			const target = e.target
			const targetBody = e.currentTarget
			if (target !== selectItem && targetBody === body) {
				select.classList.remove('open')
				selectItem.classList.remove('open')
			} else {
			}
		})
	})
}

hundleSelect('.range__box', '.range__value')

// Слайдеры
const allSwipers = item => {
	try {
		switch (item) {
			case 'swiper__head':
				const swiperHead = new Swiper('.head__swiper', {
					loop: true,
					speed: 1200,
					autoplay: {
						delay: 5000,
					},
					allowTouchMove: false,
					pagination: {
						el: '.head .swiper-pagination',
					},
				})
				break
			case 'story__swiper':
				const swiperStory = new Swiper('.story__swiper', {
					loop: true,
					speed: 900,
					slidesPerView: 2,
					spaceBetween: 60,
					navigation: {
						nextEl: '.story .swiper-button-next',
						prevEl: '.story .swiper-button-prev',
					},
					breakpoints: {
						319.98: {
							slidesPerView: 1,
							spaceBetween: 30,
						},
						991.98: {
							slidesPerView: 2,
							spaceBetween: 60,
						},
					},
				})
				break
			case 'view__swiper':
				const swiperView = new Swiper('.view__swiper', {
					loop: true,
					speed: 900,
					slidesPerView: 1,
					spaceBetween: 55,
					initialSlide: 0,
					navigation: {
						nextEl: '.view .swiper-button-next',
						prevEl: '.view .swiper-button-prev',
					},
					pagination: {
						el: '.view .swiper-pagination',
						type: 'fraction',
						renderFraction: function (currentClass, totalClass) {
							return (
								"<span class='" +
								currentClass +
								"'></span>" +
								"<span class='current__or'>/</span>" +
								"<span class='" +
								totalClass +
								"'></span>"
							)
						},
					},

					breakpoints: {
						319.98: {
							slidesPerView: 1,
							spaceBetween: 30,
						},
						991.98: {
							slidesPerView: 1,
							spaceBetween: 60,
						},
					},
				})
				break
			case '_first history__swiper':
				const swiperHisroty = new Swiper('._first .history__swiper', {
					loop: true,
					speed: 700,
					slidesPerView: 1,
					spaceBetween: 30,
					allowTouchMove: false,
					navigation: {
						nextEl: '._first .swiper-button-next',
						prevEl: '._first .swiper-button-prev',
					},
				})
				break
			case '_second history__swiper-second':
				const swiperHisrotySecond = new Swiper(
					'._second .history__swiper-second',
					{
						loop: true,
						speed: 700,
						slidesPerView: 1,
						spaceBetween: 30,
						allowTouchMove: false,
						navigation: {
							nextEl: '._second .swiper-button-next',
							prevEl: '._second .swiper-button-prev',
						},
					}
				)
				break
			case 'frame__first':
				const swiperFrameFirst = new Swiper('.frame__first', {
					loop: true,
					speed: 700,
					slidesPerView: 1,
					spaceBetween: 30,
					allowTouchMove: false,
					navigation: {
						nextEl: '.frame__first .swiper-button-next',
						prevEl: '.frame__first .swiper-button-prev',
					},
				})
				break
			case 'frame__second':
				const swiperFrameSecond = new Swiper('.frame__second', {
					loop: true,
					speed: 700,
					slidesPerView: 1,
					spaceBetween: 30,
					allowTouchMove: false,
					navigation: {
						nextEl: '.frame__second .swiper-button-next',
						prevEl: '.frame__second .swiper-button-prev',
					},
				})
				break
			case 'frame__third':
				const swiperFrameThird = new Swiper('.frame__third', {
					loop: true,
					speed: 700,
					slidesPerView: 1,
					spaceBetween: 30,
					allowTouchMove: false,
					navigation: {
						nextEl: '.frame__third .swiper-button-next',
						prevEl: '.frame__third .swiper-button-prev',
					},
				})
				break
			case 'frame__fourth':
				const swiperFrameFourth = new Swiper('.frame__fourth', {
					loop: true,
					speed: 700,
					slidesPerView: 1,
					spaceBetween: 30,
					allowTouchMove: false,
					navigation: {
						nextEl: '.frame__fourth .swiper-button-next',
						prevEl: '.frame__fourth .swiper-button-prev',
					},
				})
				break
			case 'frame__fifth':
				const swiperFrameFifth = new Swiper('.frame__fifth', {
					loop: true,
					speed: 700,
					slidesPerView: 1,
					spaceBetween: 30,
					allowTouchMove: false,
					navigation: {
						nextEl: '.frame__fifth .swiper-button-next',
						prevEl: '.frame__fifth .swiper-button-prev',
					},
				})
				break
			case 'frame__sixth':
				const swiperFrameSixth = new Swiper('.frame__sixth', {
					loop: true,
					speed: 700,
					slidesPerView: 1,
					spaceBetween: 30,
					allowTouchMove: false,
					navigation: {
						nextEl: '.frame__sixth .swiper-button-next',
						prevEl: '.frame__sixth .swiper-button-prev',
					},
				})
				break
			case 'frame__seventh':
				const swiperFrameSeventh = new Swiper('.frame__seventh', {
					loop: true,
					speed: 700,
					slidesPerView: 1,
					spaceBetween: 30,
					allowTouchMove: false,
					navigation: {
						nextEl: '.frame__seventh .swiper-button-next',
						prevEl: '.frame__seventh .swiper-button-prev',
					},
				})
				break
			case 'frame__eighth':
				const swiperFrameEighth = new Swiper('.frame__eighth', {
					loop: true,
					speed: 700,
					slidesPerView: 1,
					spaceBetween: 30,
					allowTouchMove: false,
					navigation: {
						nextEl: '.frame__eighth .swiper-button-next',
						prevEl: '.frame__eighth .swiper-button-prev',
					},
				})
				break
				break
			case 'frame__ninth':
				const swiperFrameNinth = new Swiper('.frame__ninth', {
					loop: true,
					speed: 700,
					slidesPerView: 1,
					spaceBetween: 30,
					allowTouchMove: false,
					navigation: {
						nextEl: '.frame__ninth .swiper-button-next',
						prevEl: '.frame__ninth .swiper-button-prev',
					},
				})
				break
			case 'info-res__wrap _first':
				const swiperInfoFirst = new Swiper('.info-res__wrap._first .swiper', {
					loop: true,
					speed: 700,
					slidesPerView: 1,
					spaceBetween: 30,
					allowTouchMove: false,
					navigation: {
						nextEl: '.info-res__wrap._first .swiper-button-next',
						prevEl: '.info-res__wrap._first .swiper-button-prev',
					},
				})
				break
			case 'info-res__wrap _second':
				const swiperInfoSecond = new Swiper('.info-res__wrap._second .swiper', {
					loop: true,
					speed: 700,
					slidesPerView: 1,
					spaceBetween: 30,
					allowTouchMove: false,
					navigation: {
						nextEl: '.info-res__wrap._second .swiper-button-next',
						prevEl: '.info-res__wrap._second .swiper-button-prev',
					},
				})
				break
			case 'info-res__wrap _third':
				const swiperInfoThird = new Swiper('.info-res__wrap._third .swiper', {
					loop: true,
					speed: 700,
					slidesPerView: 1,
					spaceBetween: 30,
					allowTouchMove: false,
					navigation: {
						nextEl: '.info-res__wrap._third .swiper-button-next',
						prevEl: '.info-res__wrap._third .swiper-button-prev',
					},
				})
				break
			case 'info-res__wrap _fourth':
				const swiperInfoFourth = new Swiper('.info-res__wrap._fourth .swiper', {
					loop: true,
					speed: 700,
					slidesPerView: 1,
					spaceBetween: 30,
					allowTouchMove: false,
					navigation: {
						nextEl: '.info-res__wrap._fourth .swiper-button-next',
						prevEl: '.info-res__wrap._fourth .swiper-button-prev',
					},
				})
				break
			case 'info-res__wrap _fifth':
				const swiperInfoFifth = new Swiper('.info-res__wrap._fifth .swiper', {
					loop: true,
					speed: 700,
					slidesPerView: 1,
					spaceBetween: 30,
					allowTouchMove: false,
					navigation: {
						nextEl: '.info-res__wrap._fifth .swiper-button-next',
						prevEl: '.info-res__wrap._fifth .swiper-button-prev',
					},
				})
				break
			case 'finishes__wrap _first':
				const swiperFinishesFirst = new Swiper(
					'.finishes__wrap._first .swiper',
					{
						loop: true,
						speed: 700,
						slidesPerView: 1,
						spaceBetween: 30,
						allowTouchMove: false,
						navigation: {
							nextEl: '.finishes__wrap._first .swiper-button-next',
							prevEl: '.finishes__wrap._first .swiper-button-prev',
						},
					}
				)
				break
			case 'finishes__wrap _second':
				const swiperFinishesSecond = new Swiper(
					'.finishes__wrap._second .swiper',
					{
						loop: true,
						speed: 700,
						slidesPerView: 1,
						spaceBetween: 30,
						allowTouchMove: false,
						navigation: {
							nextEl: '.finishes__wrap._second .swiper-button-next',
							prevEl: '.finishes__wrap._second .swiper-button-prev',
						},
					}
				)
				break
			case 'finishes__wrap _third':
				const swiperFinishesThird = new Swiper(
					'.finishes__wrap._third .swiper',
					{
						loop: true,
						speed: 700,
						slidesPerView: 1,
						spaceBetween: 30,
						allowTouchMove: false,
						navigation: {
							nextEl: '.finishes__wrap._third .swiper-button-next',
							prevEl: '.finishes__wrap._third .swiper-button-prev',
						},
					}
				)
				break
			case 'construction__swiper':
				const swiperConstruction = new Swiper('.construction__swiper', {
					loop: true,
					speed: 900,
					slidesPerView: 3,
					spaceBetween: 28,
					allowTouchMove: true,
					autoplay: {
						delay: 3000,
					},
					breakpoints: {
						319.98: {
							slidesPerView: 1,
							spaceBetween: 28,
						},
						576.98: {
							slidesPerView: 2,
							spaceBetween: 28,
						},
						1199.98: {
							slidesPerView: 3,
							spaceBetween: 28,
						},
					},
				})
				break
			case 'flat__swiper':
				const swiperFlat = new Swiper('.flat__swiper', {
					loop: true,
					speed: 900,
					slidesPerView: 1,
					spaceBetween: 28,
					allowTouchMove: true,
					navigation: {
						nextEl: '.flat__next',
						prevEl: '.flat__prev',
					},
				})
				break
			default:
				console.log('Not so class for swiper...')
		}
	} catch (e) {
		console.log(e)
	}
}

allSwipers('swiper__head')
allSwipers('story__swiper')
allSwipers('view__swiper')
allSwipers('_first history__swiper')
allSwipers('_second history__swiper-second')
allSwipers('frame__first')
allSwipers('frame__second')
allSwipers('frame__third')
allSwipers('frame__fourth')
allSwipers('frame__fifth')
allSwipers('frame__sixth')
allSwipers('frame__seventh')
allSwipers('frame__eighth')
allSwipers('frame__ninth')
allSwipers('info-res__wrap _first')
allSwipers('info-res__wrap _second')
allSwipers('info-res__wrap _third')
allSwipers('info-res__wrap _fourth')
allSwipers('info-res__wrap _fifth')
allSwipers('finishes__wrap _first')
allSwipers('finishes__wrap _second')
allSwipers('finishes__wrap _third')
allSwipers('construction__swiper')
allSwipers('flat__swiper')

// Табы
const tabs = (
	headerSelector,
	tabSelector,
	contentSelector,
	activeClass,
	display = 'block'
) => {
	try {
		const header = document.querySelector(headerSelector),
			tab = document.querySelectorAll(tabSelector),
			content = document.querySelectorAll(contentSelector)

		function showTabContent(i = 0) {
			tab[i].classList.add(activeClass)
			content[i].classList.add(activeClass)
		}

		function hideTabContent() {
			tab.forEach(item => {
				item.classList.remove(activeClass)
			})
			content.forEach(item => {
				item.classList.remove(activeClass)
			})
		}

		hideTabContent()
		showTabContent()

		header.addEventListener('click', e => {
			const target = e.target
			if (
				target &&
				(target.classList.contains(tabSelector.replace(/\./, '')) ||
					target.parentNode.classList.contains(tabSelector.replace(/\./, '')))
			) {
				tab.forEach((item, i) => {
					if (target == item || target.parentNode == item) {
						hideTabContent()
						showTabContent(i)
					}
				})
			}
		})
	} catch (e) {
		console.log(e)
	}
}

tabs('.info-res__items', '.info-res__item', '.info-res__wrap', 'active')
tabs('.finishes__items', '.finishes__item', '.finishes__wrap', 'active')

// Скрокльный клик
class Scrolling {
	constructor(upSelector) {
		this.upElems = document.querySelectorAll('[href^="#"]')
		this.up = document.querySelector(upSelector)
		this.element = document.documentElement
		this.body = document.body
	}

	bindScroll(upElems) {
		const element = document.documentElement,
			body = document.body

		const calcScroll = () => {
			upElems.forEach(item => {
				item.addEventListener('click', function (event) {
					// Количество прокрученных пикселей
					let scrollTop = Math.round(body.scrollTop || element.scrollTop)

					// Если у элемента не рово пустому ХЭШУ
					if (this.hash !== '') {
						event.preventDefault()
						// Получаем тот элемент, к которому будем скролить нашу страницу
						let hashElement = document.querySelector(this.hash),
							//Это столько ещё нам нужно будет пролистать пикселей до родителей этого хэш элемента,пока неизвестно = 0
							hashElementTop = 0

						// Это столько пикселей нам нужно будет отлистать
						while (hashElement.offsetParent) {
							hashElementTop += hashElement.offsetTop
							hashElement = hashElement.offsetParent
						}

						// Округляем отлистывание
						hashElementTop = Math.round(hashElementTop)
						smoothScroll(scrollTop, hashElementTop, this.hash)
					}
				})
			})
		}

		const smoothScroll = (from, to, hash) => {
			let timeInterval = 1,
				prevScrollTop,
				speed

			if (to > from) {
				speed = 30
			} else {
				speed = -30
			}

			let move = setInterval(function () {
				let scrollTop = Math.round(body.scrollTop || element.scrollTop)

				if (
					prevScrollTop === scrollTop ||
					(to > from && scrollTop >= to) ||
					(to < from && scrollTop <= to)
				) {
					clearInterval(move)
					history.replaceState(
						history.state,
						document.title,
						location.href.replace(/#.*$/g, '') + hash
					)
				} else {
					body.scrollTop += speed
					element.scrollTop += speed
					prevScrollTop = scrollTop
				}
			}, timeInterval)
		}

		calcScroll()
	}

	init() {
		this.bindScroll(this.upElems)
	}
}

const scrolling = new Scrolling('.element')
scrolling.init()

// For FRL
const modalPages = (open, modalContent) => {
	try {
		const btn = document.querySelector(open),
			modal = document.querySelector(modalContent),
			close = document.querySelector('[data-close]')

		btn.addEventListener('click', e => {
			e.preventDefault()
			modal.classList.add('_active')
			document.querySelector('body').classList.add('lock')
		})

		close.addEventListener('click', e => {
			modal.classList.remove('_active')
			document.querySelector('body').classList.remove('lock')
		})

		modal.addEventListener('click', e => {
			if (e.target && e.target === modal) {
				modal.classList.remove('_active')
				document.querySelector('body').classList.remove('lock')
			}
		})
	} catch (e) {
		console.log(e)
	}
}
modalPages('.btn-pages', '.pages')
