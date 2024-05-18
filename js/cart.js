document.addEventListener("click", async (event) => {
    if (event.target.closest("[data-send-cart]")) {
        const createItemFetch = await fetch("https://6640ea46a7500fcf1a9f13bc.mockapi.io/cart", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                imgUrl: event.target.closest("[data-item]").querySelector("[data-img]")?.getAttribute("src"),
                title: event.target.closest("[data-item]").querySelector("[data-title]")?.innerText,
                price: event.target.closest("[data-item]").querySelector("[data-price]")?.innerText
            })
        })
        const data = await createItemFetch.json()
        console.log(data);
        document.querySelector(".header__cart-price").textContent = +document.querySelector(".header__cart-price").innerText + +data.price
        document.querySelector(".header__cart-count").textContent = ++document.querySelectorAll(".header__cart-box").length
        document.querySelector(".header__cart-catalog").innerHTML += `
                    <div class="header__cart-box" data-id="${data.id}">
                    <img class="header__cart-img img" src="${data.imgUrl}" alt="flowes">
                    <div class="header__cart-protuct-count">
                       <span class="header__cart-protuct">
                          ${data.title}
                       </span>
                       <div class="header__cart-quantity" data-quantity>
                          <span class="header__cart-minus count" data-minus>-</span>
                          <span class="header__cart-num count" data-num>0</span>
                          <span class="header__cart-plus count" data-plus>+</span>
                       </div>
                    </div>
                    <div class="header__cart-protuct-price-box">
                       <span class="header__cart-protuct-price">
                          ${data.price}
                       </span>
                       <button class="header__cart-protuct-delete button-reset" data-delete>
                          Удалить
                       </button>
                    </div>
                 </div>
                    `
    }

    if (event.target.closest("[data-delete]")) {
        const cartItem = event.target.closest(".header__cart-box")
        fetch(`https://6640ea46a7500fcf1a9f13bc.mockapi.io/cart/${cartItem.getAttribute("data-id")}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then((data) => {
                cartItem.remove()
                document.querySelector(".header__cart-count").innerText--
                document.querySelector(".header__cart-price").textContent = +document.querySelector(".header__cart-price").innerText - +data.price
            })
    }
})