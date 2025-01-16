
// Swiper
new Swiper('.swiper', {
    loop: true,
    allowTouchMove: true,
    speed: 900,
    slidesPerView: 1,
    spaceBetween: 25,
    autoHeight: true,
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        312.98: {
            slidesPerView: 1,
        },
    },
});


// Tabs 
const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    try {
        const header = document.querySelector(headerSelector),
            tab = document.querySelectorAll(tabSelector),
            content = document.querySelectorAll(contentSelector);

        function showTabContent(i = 0) {
            tab[i].classList.add(activeClass);
            content[i].classList.add(activeClass);
            // content[i].style.display = display;
        }

        function hideTabContent() {
            tab.forEach(item => {
                item.classList.remove(activeClass);
            });
            content.forEach(item => {
                // item.style.display = 'none';
                item.classList.remove(activeClass);
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
    } catch (e) {
        console.log(e)
    }
};



let width = this.innerWidth
let height = this.innerHeight

if (width < 767.98) {
    Slider()
} else {
    tabs('.service__tabs', '.service__item', '.service__wrap', 'active', "flex");
}
// Медиа Запросы
window.onresize = window.onload = function() {
    try {
        let width = this.innerWidth
let height = this.innerHeight
        console.log(`${width}x${height}`)
    } catch (e) {
        console.log(e)
    }
}


// Скачивание файла
const downloadFilePDF = (triggers, path) => {
    const btns = document.querySelectorAll(triggers);

    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            const elem = document.createElement('a');
            elem.setAttribute('href', path);
            elem.setAttribute('download', path);
            elem.style.display = 'none';
            document.body.appendChild(elem);

            elem.click();

            document.body.removeChild(elem);
        })
    });
}

window.addEventListener('DOMContentLoaded', () => {
    downloadFilePDF('.content__download', 'files/ASIA GAME BUZZ.pdf')
});


// Click Schroll
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

// FAQ
$("#form").submit(function (e) { // Устанавливаем событие отправки для формы с id=form
           e.preventDefault();
            var form_data = $(this).serialize(); // Собираем все данные из формы
            $.ajax({
                type: "POST", // Метод отправки
                url: "files/form.php", // Путь до php файла отправителя
                data: form_data,
                success: function () {
                    // Код в этом блоке выполняется при успешной отправке сообщения
                    alert("Ваше сообщение отправлено!");
                }
            });
        });