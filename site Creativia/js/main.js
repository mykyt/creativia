// window.addEventListener("load", () => {
//     document.querySelector(".holder").classList.toggle("holder-off")
//     document.querySelector("body").classList.remove("lock");
// })

function parallax(element, distance, speed) {
    let item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener("scroll", function () {
    parallax(".header-about", window.scrollY, 0.4);
})

function showBurger() {
    let burger = document.querySelector(".header-navbar-burger");
    let navbar = document.querySelector(".header-navbar-nav");
    let navLink = document.querySelectorAll(".header-navbar-nav__link");
    navLink.forEach(elem =>
        elem.addEventListener("click", () => {
            navbar.classList.remove("header-navbar-nav-active");
            burger.classList.remove("header-navbar-burger-active");
            document.querySelector("body").classList.remove("lock");
            navLink.forEach((link) => {
                if (link.style.animation) {
                    link.style.animation = "";
                }
            })
        }));
    burger.addEventListener("click", () => {
        burger.classList.toggle("header-navbar-burger-active");
        navbar.classList.toggle("header-navbar-nav-active");
        document.querySelector("body").classList.toggle("lock");
        navLink.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 1s ease forwards  ${index / 7 + 0.4}s`;
            }
        })
    })
}

showBurger();

function showNavbar() {
    let navBar = document.querySelector(".header-navbar");
    window.onscroll = function () {
        navBar.classList.toggle("header-navbar-active", window.scrollY > 0)
    }
}
showNavbar()

function accordion() {
    const link = document.querySelectorAll(".about-wrapper__link");
    link.forEach(link =>
        link.addEventListener("click", (event) => {
            event.preventDefault();
            link.nextElementSibling.classList.toggle("about-wrapper__subtext-active");
            link.classList.toggle("about-wrapper__link-active");
            link.firstElementChild.classList.toggle("fa-plus");
            link.firstElementChild.classList.toggle("fa-minus");
        }))
}

accordion();

function tabs() {
    let link = document.querySelectorAll(".portfolio-list__item");
    link.forEach(item => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            link.forEach(link => link.classList.remove("portfolio-list__item-active"));
            event.target.classList.add("portfolio-list__item-active");
        })
    });
}

tabs();

const headerSlider = document.querySelector('.swiper-container')
let headerSwiper = new Swiper(headerSlider, {
    slidesPerView: 1,
    spaceBetween: 100,
    speed: 500,
    autoplay: {
        delay: 6000,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
})

const clientSlider = document.querySelector('.clients-list-slider')
let clientSwiper = new Swiper(clientSlider, {
    slidesPerView: 1,
    speed: 500,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
})

gsap.registerPlugin(ScrollTrigger);

gsap.from(".about-wrapper__column", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 50%",
    },
    x: innerWidth * -1,
    opacity: 0,
    duration: 1.8,
    ease: "back.out(1)",
})

let line = gsap.utils.toArray(".lineanimate");
line.forEach((line, i) => {
    let lineanimate = gsap.from(line, { scaleX: 0 })
    ScrollTrigger.create({
        animation: lineanimate,
        trigger: line,
        start: "top 90%",
        end: "+=400",
        scrub: 2,
        transformOrigin: "center",
    })
})




gsap.from(".about-list__item-right", {
    scrollTrigger: {
        trigger: ".about-list__item-right",
        start: "top 80%",
    },
    x: innerWidth * -1,
    opacity: 0,
    duration: 1.4,
    ease: "power2.out"
})

gsap.from(".about-list__item-left", {
    scrollTrigger: {
        trigger: ".about-list__item-left",
        start: "top 80%",
    },
    x: innerWidth - 1,
    opacity: 0,
    duration: 1.4,
    ease: "power2.out"
})


gsap.from(".features-list__item-right", {
    scrollTrigger: {
        trigger: ".features-list__item-right",
        start: "top 80%",
    },
    x: innerWidth * 1,
    opacity: 0,
    duration: 1.8,
    ease: "elastic.out(0.3, 0.3)"
})
gsap.from(".features-list__item-left", {
    scrollTrigger: {
        trigger: ".features-list__item-left",
        start: "top 80%",
    },
    x: innerWidth * -1,
    opacity: 0,
    duration: 1.8,
    ease: "elastic.out(0.3, 0.3)"
})

gsap.from(".team-list-item-right", {
    scrollTrigger: {
        trigger: ".team-list-item-right",
        start: "top 80%",
    },
    x: innerWidth * -1,
    opacity: 0,
    duration: 1.4,
    ease: "power2.out"
})

gsap.from(".team-list-item-left", {
    scrollTrigger: {
        trigger: ".team-list-item-left",
        start: "top 80%",
    },
    x: innerWidth - 1,
    opacity: 0,
    duration: 1.4,
    ease: "power2.out"
})

function counter() {
    const counter = document.querySelectorAll(".skills-list-item__counter");
    let speed = 40;
    counter.forEach(elem => {
        let timer = setInterval(frames, speed);
        let num = 0;
        function frames() {
            let number = +elem.getAttribute("data-num");
            num += 1;
            elem.innerHTML = `<span class="redtext">` + num + `</span>` + "%";
            if (num == Math.round(number * 0.7)) {
                clearInterval(timer)
                speed = 100;
                timer = setInterval(frames, speed);
            } else if (num == number - 2) {
                clearInterval(timer)
                speed = 900;
                timer = setInterval(frames, speed);
            } else if (num == number - 1) {
                clearInterval(timer)
                speed = 1800;
                timer = setInterval(frames, speed);
            } else if (num == number) {
                clearInterval(timer);
            }
        };
    })
}


let cicrle = gsap.utils.toArray(".skills-list-item__circle")
let tl = gsap.timeline({ defaults: { ease: "power2.out" } });
tl.to(cicrle[0], { strokeDashoffset: 100, duration: 9, })
    .to(cicrle[1], { strokeDashoffset: 150, duration: 9, }, "<")
    .to(cicrle[2], { strokeDashoffset: 200, duration: 8, }, "<")
    .to(cicrle[3], { strokeDashoffset: 100, duration: 9, }, "<")
    .call(counter, null, "<")


ScrollTrigger.create({
    animation: tl,
    trigger: ".skills",
    start: "top center",
})

function counterMedia() {
    const counters = document.querySelectorAll(".media-list-item__num");
    const speed = 400;
    counters.forEach(element => {
        const updateCount = () => {
            const target = +element.getAttribute("data-target");
            const count = +element.innerText;
            const inc = Math.round(target / speed);
            if (count < target) {
                element.innerText = count + inc;
                setTimeout(updateCount, 1)
            } else {
                count.innerText = target;
            }
        }
        updateCount();
    });
}

let tl2 = gsap.timeline();

tl2.from('.media-list-item__icon', {})
    .call(counterMedia, null, "<")

ScrollTrigger.create({
    animation: tl2,
    trigger: ".media",
    start: "top center",
})

// gsap.to(".link", {
//     scrollTrigger: {
//         trigger: ".about",
//         start: "top top",
//         end: "bottom bottom",
//         markers: true
//         toggleClass: "aq",
//     },

// })
function toogleClass() {
    let headerLink = gsap.utils.toArray(".header-navbar-nav__link");
    let section = gsap.utils.toArray(".trigger");
    let number = 0;
    if (window.innerWidth > 992) {
        headerLink.forEach((line, i) => {
            ScrollTrigger.create({
                trigger: section[number],
                start: '-200px top',
                end: "bottom 200px",
                toggleActions: 'play reverse none reverse',
                toggleClass: { targets: line, className: "active" },
            });
            number += 1;
            console.log(number)
        })
    }
}

toogleClass();
