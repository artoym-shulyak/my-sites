var width, height // Переменные предназначены для медия запросов

// Swipers
const sliderOfSwiper = nameSwiper => {
    try {
        switch (nameSwiper) {
            case '.brend__swiper':
                new Swiper(nameSwiper, {
                    loop: true,
                    allowTouchMove: true,
                    speed: 900,
                    slidesPerView: 4,
                    spaceBetween: 25,
                    pagination: {
                        el: '.brend__pagination',
                    },

                    navigation: {
                        nextEl: '.brend__next',
                        prevEl: '.brend__prev',
                    },

                    breakpoints: {
                        319.98: {
                            slidesPerView: 2,
                        },
                        991.98: {
                            slidesPerView: 3,
                        },
                        1199.98: {
                            slidesPerView: 4,
                        },
                    },
                })
                break
            case '.advantage__swiper':
                new Swiper(nameSwiper, {
                    loop: true,
                    allowTouchMove: true,
                    speed: 1200,
                    slidesPerView: 'auto',
                    spaceBetween: 0,
                    pagination: {
                        el: '.advantage__pagination',
                    },
                    navigation: {
                        nextEl: '.advantage__next',
                        prevEl: '.advantage__prev',
                    },
                    breakpoints: {
                        319.98: {
                            spaceBetween: 0,
                            speed: 900,
                        },
                        991.98: {
                            spaceBetween: 0,
                            speed: 900,
                        },
                    },
                })
                break
            case '.result__swiper':
                new Swiper(nameSwiper, {
                    loop: true,
                    allowTouchMove: true,
                    speed: 900,
                    slidesPerView: 3,
                    spaceBetween: 0,
                    autoHeight: true,
                    pagination: {
                        el: '.result__pagination',
                    },
                    navigation: {
                        nextEl: '.result__next',
                        prevEl: '.result__prev',
                    },
                    breakpoints: {
                        321.98: {
                            slidesPerView: 1,
                        },
                        767.98: {
                            slidesPerView: 2,
                        },
                        991.98: {
                            slidesPerView: 3,
                        },
                    },
                })
                break
            case '.home-news__swiper':
                new Swiper(nameSwiper, {
                    loop: true,
                    allowTouchMove: true,
                    speed: 900,
                    slidesPerView: 3,
                    spaceBetween: 35,
                    navigation: {
                        nextEl: '.home-news__next',
                        prevEl: '.home-news__prev',
                    },
                    breakpoints: {
                        321.98: {
                            slidesPerView: 1,
                        },
                        767.98: {
                            slidesPerView: 2,
                        },
                        991.98: {
                            slidesPerView: 2,
                        },
                        1199.98: {
                            slidesPerView: 3,
                        },
                    },
                })
                break
            case '.help__swiper':
                new Swiper(nameSwiper, {
                    loop: true,
                    allowTouchMove: true,
                    speed: 900,
                    slidesPerView: 4,
                    spaceBetween: 30,
                    navigation: {
                        nextEl: '.help__next',
                        prevEl: '.help__prev',
                    },
                    breakpoints: {
                        321.98: {
                            slidesPerView: 'auto',
                            spaceBetween: 20,
                        },
                        767.98: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        991.98: {
                            slidesPerView: 3,
                        },
                        1199.98: {
                            slidesPerView: 4,
                        },
                    },
                })
                break
            case '.docs__swiper':
                new Swiper(nameSwiper, {
                    loop: true,
                    allowTouchMove: true,
                    speed: 900,
                    slidesPerView: 4,
                    spaceBetween: 35,
                    breakpoints: {
                        321.98: {
                            slidesPerView: 'auto',
                            spaceBetween: 20,
                        },
                        576.98: {
                            spaceBetween: 0,
                            slidesPerView: 2,
                        },
                        767.98: {
                            spaceBetween: 20,
                            slidesPerView: 2,
                        },
                        991.98: {
                            slidesPerView: 3,
                        },
                        1199.98: {
                            slidesPerView: 4,
                        },
                    },
                })
                break
            case '.employees__swiper':
                new Swiper(nameSwiper, {
                    loop: true,
                    allowTouchMove: true,
                    speed: 900,
                    slidesPerView: 4,
                    spaceBetween: 75,
                    navigation: {
                        nextEl: '.employees__next',
                        prevEl: '.employees__prev',
                    },
                    breakpoints: {
                        767.98: {
                            spaceBetween: 50,
                            slidesPerView: 2,
                        },
                        991.98: {
                            slidesPerView: 3,
                            spaceBetween: 75,
                        },
                        1199.98: {
                            slidesPerView: 4,
                            spaceBetween: 75,
                        },
                    },
                })
                break
            case '.cross__swiper':
                new Swiper(nameSwiper, {
                    loop: true,
                    allowTouchMove: true,
                    speed: 900,
                    slidesPerView: 4,
                    spaceBetween: 30,
                    navigation: {
                        nextEl: '.cross__next',
                        prevEl: '.cross__prev',
                    },
                    pagination: {
                        el: '.cross__pagination',
                    },
                    breakpoints: {
                        767.98: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        991.98: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    },
                })
                break
            case '.know__swiper':
                new Swiper(nameSwiper, {
                    loop: false,
                    allowTouchMove: true,
                    speed: 900,
                    slidesPerView: "auto",
                    spaceBetween: 30,
                    // slidesPerView: 2,
                    navigation: {
                        nextEl: '.know__next',
                        prevEl: '.know__prev',
                    },
                    breakpoints: {
                        319.98: {
                            slidesPerView: "auto",
                            spaceBetween: 30,
                        },
                        767.98: {
                            // slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        991.98: {
                            // slidesPerView: 2,
                            spaceBetween: 30,
                            // slidesPerView: "auto",
                        },
                    },
                })
                break
            case '.licenses__swiper':
                new Swiper(nameSwiper, {
                    loop: false,
                    allowTouchMove: true,
                    speed: 900,
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                    breakpoints: {
                        319.98: {
                            slidesPerView: 'auto',
                            speed: 900,
                        },
                        576.98: {
                            slidesPerView: 'auto',
                            speed: 900,
                        },
                    },
                })
                break
            case '.digital__swiper':
                new Swiper(nameSwiper, {
                    loop: true,
                    allowTouchMove: true,
                    speed: 900,
                    slidesPerView: 1,
                    spaceBetween: 20,
                    pagination: {
                        el: '.digital__pagination',
                    },
                    navigation: {
                        nextEl: '.digital__next',
                        prevEl: '.digital__prev',
                    },
                })
                break
            case '.fragment__swiper':
                new Swiper(nameSwiper, {
                    loop: true,
                    allowTouchMove: true,
                    speed: 900,
                    slidesPerView: 1,
                    spaceBetween: 20,
                    pagination: {
                        el: '.fragment__pagination',
                    },
                    navigation: {
                        nextEl: '.fragment__next',
                        prevEl: '.fragment__prev',
                    },
                })
                break
            case '.reviews__swiper':
                new Swiper(nameSwiper, {
                    loop: true,
                    allowTouchMove: true,
                    speed: 900,
                    slidesPerView: 1,
                    spaceBetween: 20,
                    pagination: {
                        el: '.reviews__pagination',
                    },
                    navigation: {
                        nextEl: '.reviews__next',
                        prevEl: '.reviews__prev',
                    },
                })
                break
            case '.report__swiper':
                new Swiper(nameSwiper, {
                    loop: true,
                    allowTouchMove: false,
                    speed: 900,
                    slidesPerView: 3,
                    spaceBetween: -50,
                    direction: 'vertical',
                    centeredSlides: true,
                    navigation: {
                        nextEl: '.report__next',
                        prevEl: '.report__prev',
                    },
                    breakpoints: {
                        319.98: {
                            spaceBetween: 0,
                        },
                        767.98: {
                            spaceBetween: -50,
                        },
                    },
                })
                break
            case '.step__swiper':
                new Swiper(nameSwiper, {
                    loop: true,
                    allowTouchMove: true,
                    speed: 900,
                    slidesPerView: 'auto',
                    spaceBetween: -1,
                    direction: 'vertical',
                    heightAuto: true,
                    // mousewheel: true,
                    navigation: {
                        nextEl: '.step__next',
                        prevEl: '.step__prev',
                    },
                })
                break
            case '.sl-short__swiper':
                new Swiper(nameSwiper, {
                    loop: true,
                    allowTouchMove: true,
                    speed: 900,
                    slidesPerView: 'auto',
                    spaceBetween: -1,
                    direction: 'vertical',
                    heightAuto: true,
                    // mousewheel: true,
                    navigation: {
                        nextEl: '.step__next',
                        prevEl: '.step__prev',
                    },
                })
                break
            case '.sl-light__swiper':
                new Swiper(nameSwiper, {
                    loop: true,
                    allowTouchMove: true,
                    speed: 900,
                    slidesPerView: 'auto',
                    spaceBetween: -1,
                    direction: 'vertical',
                    heightAuto: true,
                    // mousewheel: true,
                    navigation: {
                        nextEl: '.step__next',
                        prevEl: '.step__prev',
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

// Modal menu
const navMenu = () => {
    try {
        const btnBurger = document.querySelector('#burger'),
            body = document.querySelector('body'),
            menu = document.querySelector('#menu')

        btnBurger.addEventListener('click', e => {
            body.classList.toggle('lock')
            btnBurger.classList.toggle('_active')
            menu.classList.toggle('_active')
        })
    } catch (e) {
        console.log(e)
    }
}
navMenu()

// Tabs
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
            content[i].style.display = display
        }

        function hideTabContent() {
            tab.forEach(item => {
                item.classList.remove(activeClass)
            })
            content.forEach(item => {
                item.style.display = 'none'
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
tabs('.home-news__tabs', '.home-news__item', '.home-news__wrap', 'active')
tabs(
    '.news-catalog__tabs',
    '.news-catalog__item',
    '.news-catalog__wrap',
    'active',
    'flex'
)

// Accorderon
const accordeon = (elem, isElem) => {
    try {
        const items = document.querySelectorAll(elem)

        items.forEach(el => {
            el.addEventListener('click', e => {
                const target = e.target

                if (!target.closest(elem).classList.contains('i-active')) {
                    items.forEach(item => {
                        item.classList.remove('i-active')
                    })
                    target.closest(elem).classList.add('i-active')
                } else {
                    target.closest(elem).classList.remove('i-active')
                }
            })
        })

        if (isElem) {
            // Сворачиваем список  при клики вне элемента
            document.addEventListener('click', e => {
                const target = e.target
                if (!target.closest('.menu__name')) {
                    items.forEach(item => {
                        item.classList.remove('i-active')
                    })
                }
            })
        }




    } catch (e) {
        console.log(e)
    }
}
accordeon('.menu__name', true)
accordeon('.adtion-project__header', false)



sliderOfSwiper('.brend__swiper')
sliderOfSwiper('.advantage__swiper')
sliderOfSwiper('.home-news__swiper')
sliderOfSwiper('.help__swiper')
sliderOfSwiper('.docs__swiper')
sliderOfSwiper('.cross__swiper')
sliderOfSwiper('.know__swiper')
sliderOfSwiper('.digital__swiper')
sliderOfSwiper('.fragment__swiper')
sliderOfSwiper('.reviews__swiper')
sliderOfSwiper('.report__swiper')
sliderOfSwiper('.step__swiper')
sliderOfSwiper('.sl-short__swiper')
sliderOfSwiper('.sl-light__swiper')

window.onresize = window.onload = function() {
    // --> Перенос элемента(кнопки персонала)
    const btnPerson = document.querySelector('.personal__more') // BTN
    const containerHeadCompany = document.querySelector('.company__head') // CONTAINER
    const itemsPersonsLogo = document.querySelector('.personal__items') // currentContainer
    // <-- Перенос элемента(кнопки персонала)
    try {
        width = this.innerWidth
        height = this.innerHeight
        if (width < 991.98) {
            sliderOfSwiper('.result__swiper')
            containerHeadCompany.prepend(btnPerson)

        } else {
            sliderOfSwiper('.employees__swiper')
            itemsPersonsLogo.after(btnPerson)
        }
    } catch (e) {
        console.log(e)
    }
}

// Скрокльный клик
class Scrolling {
    constructor(upSelector) {
        this.upElems = document.querySelectorAll('[href^="#"]');
        this.up = document.querySelector(upSelector);
        this.element = document.documentElement;
        this.body = document.body;
    }


    bindScroll(upElems) {
        const element = document.documentElement,
            body = document.body;

        const calcScroll = () => {
            upElems.forEach(item => {
                item.addEventListener('click', function(event) {
                    // Количество прокрученных пикселей
                    let scrollTop = Math.round(body.scrollTop || element.scrollTop);

                    // Если у элемента не рово пустому ХЭШУ
                    if (this.hash !== '') {
                        event.preventDefault();
                        // Получаем тот элемент, к которому будем скролить нашу страницу
                        let hashElement = document.querySelector(this.hash),
                            //Это столько ещё нам нужно будет пролистать пикселей до родителей этого хэш элемента,пока неизвестно = 0
                            hashElementTop = 0;

                        // Это столько пикселей нам нужно будет отлистать
                        while (hashElement.offsetParent) {
                            hashElementTop += hashElement.offsetTop;
                            hashElement = hashElement.offsetParent;
                        }

                        // Округляем отлистывание
                        hashElementTop = Math.round(hashElementTop);
                        smoothScroll(scrollTop, hashElementTop, this.hash);
                    }
                });
            });
        };

        const smoothScroll = (from, to, hash) => {
            let timeInterval = 1,
                prevScrollTop,
                speed;

            if (to > from) {
                speed = 15;
            } else {
                speed = -15;
            }

            let move = setInterval(function() {
                let scrollTop = Math.round(body.scrollTop || element.scrollTop);

                if (prevScrollTop === scrollTop || (to > from && scrollTop >= to) || (to < from && scrollTop <= to)) {
                    clearInterval(move);
                    history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
                } else {
                    body.scrollTop += speed;
                    element.scrollTop += speed;
                    prevScrollTop = scrollTop;
                }
            }, timeInterval);
        };

        calcScroll();
    }

    init() {
        this.bindScroll(this.upElems);
    }
}

const scrolling = new Scrolling('.element');
scrolling.init();

// For FRL
const modalPages = (open, modalContent) => {
    try {
        const btn = document.querySelector(open),
            modal = document.querySelector(modalContent),
            close = document.querySelector('[data-close]')

        btn.addEventListener('click', e => {
            e.preventDefault()
            modal.classList.add('_active')
        })

        close.addEventListener('click', e => {
            modal.classList.remove('_active')
        })

        modal.addEventListener('click', e => {
            if (e.target && e.target === modal) {
                modal.classList.remove('_active')
            }
        })
    } catch (e) {
        console.log(e)
    }
}
modalPages('.btn-pages', '.pages')