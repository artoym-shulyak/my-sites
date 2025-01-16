// Активность Шапки при скроле
window.addEventListener('scroll', function() {
    if (pageYOffset > 1) {
        document.querySelector('header').classList.add('_min')
    } else {
        document.querySelector('header').classList.remove('_min')

    }
})

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
        return
    }
}
accordeon('.menu__name', true)
accordeon('.questions__header', false)


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
        return
    }
}
navMenu()

// - Функция -  Раскрывающий список
function hundleSelect(boxesSelect, boxSelect) {
    const nameItems = document.querySelectorAll(boxesSelect),
        body = document.querySelector('body');

    nameItems.forEach(item => {

        const select = item,
            selectItem = item.querySelector(boxSelect)

        //  Функционал раскрытия/сворачивания выпадающих списокв
        selectItem.addEventListener('click', e => {
            if (!select.classList.contains('open')) {
                nameItems.forEach(box => {
                    box.classList.remove('open');
                    box.querySelector(boxSelect).classList.remove('open')
                })
                select.classList.add('open');
                selectItem.classList.add('open');
            } else {
                select.classList.remove('open');
                selectItem.classList.remove('open');
            }
        })

        // Отслеживаем клик по элементам
        select.addEventListener('click', e => {
            const target = e.target;
            if (target && target.tagName === 'LI' && !target.classList.contains('active')) {
                const value = target.innerText;
                try {
                    select.querySelector('li.active').classList.remove('active');
                } catch (e) {}
                target.classList.add('active');
                selectItem.innerText = value;
                select.classList.remove('open')
                selectItem.classList.remove('open')
            }
        })

        // Сворачиваем список при клики вне элемента
        body.addEventListener('click', e => {
            const target = e.target;
            const targetBody = e.currentTarget;
            console.log(target)
            if (target !== selectItem && targetBody === body) {
                target.classList.add('active');
                select.classList.remove('open')
                selectItem.classList.remove('open')
                console.log('close')
            } else {

            }

        })
    })
}
// Игнорируем ошибки на других страницах
hundleSelect('.filter .name__box', '.filter .name__value');

const slider = () => {
    try {
        const swiper = new Swiper('.swiper', {
            loop: true,
            spaceBetween: 0,
            speed: 900,

            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            pagination: {
                el: `${name} .swiper-pagination`,
                type: 'fraction',
                renderFraction: function(currentClass, totalClass) {
                    return (
                        "<span class='" +
                        currentClass +
                        "'></span>" +
                        "<span class='current__or'>&#92;</span>" +
                        "<span class='" +
                        totalClass +
                        "'></span>"
                    )
                },
            },

        });
    } catch (err) {
        return
    }
}

slider()


const openModal = (openBtns, modalContent) => {
    try {
        const btns = document.querySelectorAll(openBtns),
            modal = document.querySelector(modalContent)

        btns.forEach(btn => {
            btn.addEventListener('click', e => {
                e.preventDefault()
                modal.classList.add('_active')
                document.querySelector('body').classList.add('lock')
            })
        })

        modal.addEventListener('click', e => {
            e.preventDefault()
            if (e.target && e.target === modal) {
                modal.classList.remove('_active')
                document.querySelector('body').classList.remove('lock')
            }
        })
    } catch (e) {
        return
    }
}
openModal('.catalog-plots__btn', '.modal')
openModal('#btn-modal', '.modal')

const allSwipers = (name) => {
    try {
        switch (name) {
            case 'equity':
                new Swiper('.equity__swiper', {
                    loop: true,
                    spaceBetween: 60,
                    speed: 900,
                    allowTouchMove: false,
                    pagination: {
                        el: '.equity__numbers',
                    },
                    navigation: {
                        nextEl: '.equity__next',
                    },

                    pagination: {
                        el: `.equity__numbers`,
                        type: 'fraction',
                        renderFraction: function(currentClass, totalClass) {
                            return (
                                "<span class='" +
                                currentClass +
                                "'></span>" +
                                "<span class='current__or'>&#92;</span>" +
                                "<span class='" +
                                totalClass +
                                "'></span>"
                            )
                        },
                    },

                });
                break
            case 'offers':
                new Swiper('.offers__swiper', {
                    loop: true,
                    spaceBetween: 30,
                    speed: 900,
                    allowTouchMove: false,
                    slidesPerView: 3,
                    // effect: "fade",
                    pagination: {
                        el: '.offers__numbers',
                    },
                    navigation: {
                        nextEl: '.offers__next',
                    },

                    pagination: {
                        el: `.offers__numbers`,
                        type: 'fraction',
                        renderFraction: function(currentClass, totalClass) {
                            return (
                                "<span class='" +
                                currentClass +
                                "'></span>" +
                                "<span class='current__or'>&#92;</span>" +
                                "<span class='" +
                                totalClass +
                                "'></span>"
                            )
                        },
                    },

                    breakpoints: {
                        319.98: {
                            slidesPerView: 1,
                        },
                        767.98: {
                            slidesPerView: 2,
                        },
                        1024.98: {
                            slidesPerView: 3,
                        },
                    },

                });
                break
        }

    } catch (err) {
        return
    }
}

allSwipers('equity')
allSwipers('offers')


try {
    var swiper3 = new Swiper(".primary__swiper-thumb", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 2,
        allowTouchMove: false,
        mousewheel: false,
        freeMode: true,
        cssMode: false,
    });
} catch (e) {
    console.log(e)
}
try {
    var swiper2 = new Swiper(".primary__swiper", {
        loop: true,
        spaceBetween: 0,
        slidesPerView: 1,
        allowTouchMove: false,
        freeMode: true,
        cssMode: false,
        mousewheel: false,
        navigation: {
            nextEl: ".primary__next",
        },

        thumbs: {
            swiper: swiper3,
        },
        pagination: {
            el: `.primary__numbers`,
            type: 'fraction',
            renderFraction: function(currentClass, totalClass) {
                return (
                    "<span class='" +
                    currentClass +
                    "'></span>" +
                    "<span class='current__or'>&#92;</span>" +
                    "<span class='" +
                    totalClass +
                    "'></span>"
                )
            },
        },

    });
} catch (e) {
    console.log(e)
}

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