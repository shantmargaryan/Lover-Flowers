
fetch("https://6640ea46a7500fcf1a9f13bc.mockapi.io/items")
    .then((response) => response.json())
    .then(data => {
        data.map(item => {
            if (document.querySelector("[data-list]")) {
                document.querySelector("[data-list]").innerHTML += `
            <article class="popular__item" data-item>
            <span class="popular__new subtitle">
               NEW
            </span>
            <a class="popular__img-link link" href="catalog-product.html">
               <img class="popular__img img" data-img src="${item.imgUrl}" alt="flowers" loading="lazy">
            </a>
            <h3 class="popular__small-title title" data-title>
               ${item.title}
            </h3>
            <span class="popular__price" data-price>
               ${item.price}
            </span>
            <button class="popular__cart-button btn button-reset" disabled data-send-cart>
               В корзину
            </button>
         </article>
            `
            }
        })
    })
    .then(() => {
        document.querySelectorAll("[data-send-cart]").forEach(item => {
            item.removeAttribute("disabled")
        })
    })

    .catch(error => console.log(error))

fetch("https://6640ea46a7500fcf1a9f13bc.mockapi.io/cart")
    .then(response => response.json())
    .then(data => {
        data.map(item => {
            if (document.querySelector(".header__cart-catalog")) {
                document.querySelector(".header__cart-catalog").innerHTML += `
         <div class="header__cart-box" data-id="${item.id}">
         <img class="header__cart-img img" src="${item.imgUrl}" alt="flowes">
         <div class="header__cart-protuct-count">
            <span class="header__cart-protuct">
               ${item.title}
            </span>
            <div class="header__cart-quantity" data-quantity>
               <span class="header__cart-minus count" data-minus>-</span>
               <span class="header__cart-num count" data-num>0</span>
               <span class="header__cart-plus count" data-plus>+</span>
            </div>
         </div>
         <div class="header__cart-protuct-price-box">
            <span class="header__cart-protuct-price">
               ${item.price}
            </span>
            <button class="header__cart-protuct-delete button-reset" data-delete>
               Удалить
            </button>
         </div>
      </div>
         `
            }
        })
        return data
    })

    .then((data) => {
        document.querySelector(".header__cart-count").textContent = data.length
        return data
    })

    .then((data) => {
        document.querySelector(".header__cart-price").textContent = data.reduce((sum, item) => sum + +item.price, 0)
    })



