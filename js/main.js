const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger");
const burgerLines = document.querySelectorAll(".burger__line");
const headerScroll = document.createElement("div");
const cart = document.querySelector(".header__cart");
const cartBtn = document.querySelector(".header__cart-button");
const overlay = document.querySelector(".main__overlay");
const items = document.querySelectorAll('[data-show-item]');
const showMoreBtn = document.querySelector('[data-show-more]');



// headerInput?.addEventListener('input', (e) => {
//     const value = e.target.value;
//     for (let i = 0; i < item.length; i++) {
//         if (item[i].textContent.toLowerCase().includes(value.toLowerCase())) {
//             item[i].style.display = 'block';
//         } else {
//             item[i].style.display = 'none';
//         }
//     }
// });

document.querySelectorAll(".nav__link").forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("nav__link_active");
    }
});

let count = 3;

showMoreBtn?.addEventListener('click', (e) => {
    for (let i = count; i < count + 3; i++) {
        if (items[i]) {
            items[i].style.display = 'block';
        }
    }
    count += 3;
    if (count >= items.length) {
        e.target.style.display = 'none';
    }
});

headerScroll.setAttribute("data-scroll", "");
header.before(headerScroll);

const headerObserver = new IntersectionObserver((entries) => {
    header.classList.toggle("header__scroll", !entries[0].isIntersecting);
}, {
    rootMargin: "100px 0px 0px 0px",
});
headerObserver.observe(headerScroll);
function navBar() {
    document.addEventListener("click", (event) => {
        if (event.target.closest(".burger")) {
            nav.classList.toggle("nav_active");
            nav.style.paddingTop = header.offsetHeight + "px";
            burgerLines.forEach((line) => {
                line.classList.toggle("burger_active");
                overlay.classList.toggle("main__overlay_active");
            });
        } else if (event.target.closest(".burger") || event.target.closest(".main__overlay")) {
            nav.classList.remove("nav_active");
            nav.style.paddingTop = "";
            burgerLines.forEach((line) => {
                line.classList.remove("burger_active");
            });
            overlay.classList.remove("main__overlay_active");
        }
    });

    const mediaQueryMinWidth_992 = window.matchMedia('(min-width: 992px)');
    mediaQueryMinWidth_992.addEventListener("change", (e) => {
        if (e.matches) {
            nav.style.paddingTop = "";
            nav.classList.remove("nav_active")
            overlay.classList.remove("main__overlay_active");
            burgerLines.forEach((line) => {
                line.classList.remove("burger_active");
            });
            return true;
        }
        else {
            nav.style.paddingTop = header.offsetHeight + "px";
        }
        return false;
    });
};
navBar();

document.addEventListener("click", (event) => {
    if (event.target.closest(".header__cart-button")) {
        cart.classList.add("header__cart_active");
        overlay.classList.add("main__overlay_active");
    } else if (event.target.closest(".main__overlay")) {
        cart.classList.remove("header__cart_active");
        overlay.classList.remove("main__overlay_active");
    }
    if (event.target.closest(".header__close-btn")) {
        cart.classList.remove("header__cart_active");
        overlay.classList.remove("main__overlay_active");
    }
});

if (document.querySelector(".accordion")) {
    const accordion1 = new Accordion('accordion1', {
        turn: true,
        speed: 500
    });
}

if (document.querySelector(".tabs")) {
    new Tabs('tab1', {
        firstTabActive: true,
        isChanged(tabs) {
            console.log(tabs);
        },
    })
}

if (document.querySelector("[data-select='select']")) {
    const customSelect1 = new CustomSelect('select');
}
