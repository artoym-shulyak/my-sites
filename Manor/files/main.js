// FUN => Open modal menu...
function menu(item, window) {
    try {
        const btn = document.querySelector(item),
            modal = document.querySelector(window)
        btn.addEventListener('click', e => {
            const target = e.target
            modal.classList.toggle('_toggle')
            document.querySelector('body').classList.toggle('lock')
        })
    } catch (err) {
        console.log(err)
    }
}
menu('#burger', '#modal-menu')

let windowWidth;
// Функция, которая будет вызываться при загрузке страницы и изменении размеров окна
window.onresize = window.onload = function() {
    try {
        // Пытаемся найти элементы с помощью CSS-селекторов
        let aboutImage, aboutBody, newsImages, newsContent;

        try {
            aboutImage = document.querySelector('.about .about__image');
            aboutBody = document.querySelector('.about .about__body');
        } catch (e) {
            console.log("Ошибка при поиске элементов 'О нас':", e);
        }

        try {
            newsImages = document.querySelectorAll('.news .news__image');
            newsContent = document.querySelectorAll('.news .news__content');
        } catch (e) {
            console.log("Ошибка при поиске элементов новостей:", e);
        }

        try {
            headWrapper = document.querySelector('.head .head__wrapper');
            headText = document.querySelector('.head .head__text');
            headBody = document.querySelector('.head .head__body');
        } catch (e) {
            console.log("Ошибка при поиске элементов head:", e);
        }

        try {
            allSwiper = document.querySelectorAll('.content .swiper');
            contentTitle = document.querySelectorAll('.content .content__title');
            contentGallery = document.querySelectorAll('.content .content__gallery')
        } catch (e) {
            console.log("Ошибка при поиске элементов head:", e);
        }


        // Получаем текущую ширину окна
        windowWidth = this.innerWidth;

        try {
            if (windowWidth <= 1199.98) {

                if (allSwiper && contentTitle) {
                    contentTitle.forEach((item, i) => {
                        item.after(allSwiper[i])
                    })

                }
            } else {

                if (allSwiper && contentGallery) {
                    contentGallery.forEach((item, i) => {
                        item.append(allSwiper[i])
                    })

                }
            }
        } catch (e) {
            console.log(e)
        }

        try {
            // Если ширина меньше или равна 767.98 пикселей
            if (windowWidth <= 767.98) {
                // Если элементы "О нас" найдены, то перемещаем изображение о "О нас" в конец тела "О нас"
                if (aboutImage && aboutBody) {
                    aboutBody.appendChild(aboutImage);
                }

                if (headWrapper && headText) {
                    headText.after(headWrapper)
                }



                // Перебираем изображения новостей и перемещаем каждое изображение в конец соответствующего контента новости
                newsContent.forEach((item, i) => {
                    item.appendChild(newsImages[i]);
                });
            } else {
                // Если ширина больше 767.98 пикселей
                // Если элементы "О нас" найдены, то перемещаем изображение о "О нас" перед телом "О нас"
                if (aboutImage && aboutBody) {
                    aboutBody.parentNode.insertBefore(aboutImage, aboutBody);
                }

                if (headWrapper && headText) {
                    headBody.after(headWrapper)
                }



                // Перебираем изображения новостей и перемещаем каждое изображение перед соответствующим контентом новости
                newsContent.forEach((item, i) => {
                    item.parentNode.insertBefore(newsImages[i], item);
                });
            }

        } catch (e) {
            console.log("Ошибка при перемещении изображений:", e);
        }
    } catch (e) {
        console.log("Ошибка при выполнении общей функции:", e);
    }
};



const movieElemsNews = () => {
    try {
        const btn = document.querySelector('.news .news__more');
        const elems = document.querySelectorAll('.news .news__item');

        if (btn && elems) {
            btn.addEventListener('click', e => {
                btn.style.display = 'none';
                elems.forEach(elem => {
                    elem.classList.remove('_hide');
                });
            });
        }


    } catch (e) {
        console.log(e);
    }
};
movieElemsNews()


const movieElemsContent = () => {
    try {
        const btn = document.querySelector('.content .content__btn');
        const elems = document.querySelectorAll('.content .content__item');

        if (btn && elems) {
            btn.addEventListener('click', e => {
                btn.style.display = 'none';
                elems.forEach(elem => {
                    elem.classList.remove('_hide');
                });
            });
        }


    } catch (e) {
        console.log(e);
    }
};
movieElemsContent()


const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'flex') => {
  try {
        const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    function showTabContent(i = 0) {
        tab[i].classList.add(activeClass);
        content[i].style.display = display;
    }

    function hideTabContent() {
        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
        content.forEach(item => {
            item.style.display = 'none';
        });
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target &&
            (target.classList.contains(tabSelector.replace(/\./, '')) ||
                target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
  } catch (err) {
    console.log(err)
  }
};

tabs('.head__items', '.head__item', '.head__wrap', '_active', 'block');


const swiperGallery = () => {
    try {
        const blockGallery = document.querySelectorAll('.content__images')
        const blockSlider = document.querySelectorAll('.swiper')

        blockGallery.forEach((item, i) => {
            item.addEventListener('click', e => {
                item.style.display = 'none';
                blockSlider[i].classList.add('_show')
            })
        })

    } catch (e) {
        console.log(e)
    }
}
swiperGallery()

const allSwipers = (name) => {
    try {
        new Swiper(name, {
            loop: true,
            spaceBetween: 60,
            speed: 900,

            navigation: {
                nextEl: `${name} .next`,
                prevEl: `${name} .prev`,
            },

            pagination: {
                el: `${name} .swiper-pagination`,
                type: 'fraction',
                renderFraction: function(currentClass, totalClass) {
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
        });
    } catch (e) {
        console.log(e)
    }
}
allSwipers('.one')
allSwipers('.two')
allSwipers('.third')
allSwipers('.fourth')
allSwipers('.fight')
allSwipers('.six')
allSwipers('.sevent')
allSwipers('.eight')
allSwipers('.tenth')
allSwipers('.night')
allSwipers('.thirteenth')
allSwipers('.twelfth')
allSwipers('.eleventh')


const showModals = (btn, modal) => {
    try {
        const btnOpen = document.querySelector(btn)
        const modalBlock = document.querySelector(modal)
        const btnClose = modalBlock.querySelector('[data-close]')

        btnOpen.addEventListener('click', () => {
            modalBlock.classList.add('_toggle')
            document.querySelector('body').classList.add('lock')

        })

        btnClose.addEventListener('click', () => {
            modalBlock.classList.remove('_toggle')
            document.querySelector('body').classList.remove('lock')
        })

        modalBlock.addEventListener('click', e => {
            if (e.target && e.target === modalBlock) {
                modalBlock.classList.remove('_toggle')
                document.querySelector('body').classList.remove('lock')
            }
        })
    } catch (e) {
        console.log(e)
    }
}
showModals('#download', '[data-download]')
showModals('#catalog-moscow', '[data-moscow]')
showModals('#catalog-sochi', '[data-sochi]')
showModals('#catalog-dubai', '[data-dubai]')
showModals('#call', '[data-call]')
showModals('#help', '[data-help]')

const showInfoContact = () => {
    try {
        const elemPhoto = document.querySelector('.feedback__image'),
            elemInfo = document.querySelector('.feedback__info'),
            btnClose = elemInfo.querySelector('[data-close]'),
            body = document.querySelector('body')

        elemPhoto.addEventListener('click', () => {
            elemInfo.classList.add('_show')
        })

        btnClose.addEventListener('click', () => {
            elemInfo.classList.remove('_show')
        })

        body.addEventListener('click', e => {
            const target = e.target
            const targetBody = e.currentTarget
            if (!target.closest('.feedback__image') && !target.closest('.feedback__info')) {
                elemInfo.classList.remove('_show')
            } 
        })

    } catch (err) {
        console.log(err)
    }
}
showInfoContact()

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