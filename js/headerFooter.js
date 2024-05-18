class specialHeader extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `
        <header class="header">
        <div class="header__container container">
           <a class="header__logo-link link" href="index.html">
              <svg class="header__logo logo">
                 <use xlink:href="images/svg/sprite.svg#logo" />
              </svg>
           </a>
           <nav class="header__nav nav">
              <ul class="nav__list list-reset">
                 <li class="nav__item">
                    <a class="nav__link link link-light" href="index.html">
                       Главная
                    </a>
                 </li>
                 <li class="nav__item">
                    <a class="nav__link link link-light" href="catalog.html">
                       Каталог
                    </a>
                    <div class="nav__dropdown">
                       <ul class="nav__dropdown-list list-reset">
                          <li class="nav__dropdown-item">
                             <a class="nav__dropdown-link link link-light" href="#">
                                Популярное
                             </a>
                          </li>
                          <li class="nav__dropdown-item">
                             <a class="nav__dropdown-link link link-light" href="#">
                                Сборны букеты
                             </a>
                          </li>
                          <li class="nav__dropdown-item">
                             <a class="nav__dropdown-link link link-light" href="#">
                                монобукеты
                             </a>
                          </li>
                          <li class="nav__dropdown-item">
                             <a class="nav__dropdown-link link link-light" href="#">
                                розы
                             </a>
                          </li>
                          <li class="nav__dropdown-item">
                             <a class="nav__dropdown-link link link-light" href="#">
                                свадебные
                             </a>
                          </li>
                          <li class="nav__dropdown-item">
                             <a class="nav__dropdown-link link link-light" href="#">
                                Композиции из цветов к коробке
                             </a>
                          </li>
                          <li class="nav__dropdown-item">
                             <a class="nav__dropdown-link link link-light" href="#">
                                интерьерные композиции
                             </a>
                          </li>
                          <li class="nav__dropdown-item">
                             <a class="nav__dropdown-link link link-light" href="#">
                                осенние
                             </a>
                          </li>
                          <li class="nav__dropdown-item">
                             <a class="nav__dropdown-link link link-light" href="#">
                                индивидуальный букет
                             </a>
                          </li>
                          <li class="nav__dropdown-item">
                             <a class="nav__dropdown-link link link-light" href="#">
                                сухоцветы
                             </a>
                          </li>
                          <li class="nav__dropdown-item">
                             <a class="nav__dropdown-link link link-light" href="#">
                                горшечные
                             </a>
                          </li>
                          <li class="nav__dropdown-item">
                             <a class="nav__dropdown-link link link-light" href="#">
                                дополнительно
                             </a>
                          </li>
                       </ul>
                    </div>
                 </li>
                 <li class="nav__item">
                    <a class="nav__link link link-light" href="payment-info.html">
                       Доставка и оплата
                    </a>
                 </li>
                 <li class="nav__item">
                    <a class="nav__link link link-light" href="about.html">
                       О нас
                    </a>
                 </li>
                 <li class="nav__item">
                    <a class="nav__link link link-light" href="contact.html">
                       Контакты
                    </a>
                 </li>
                 <li class="nav__item">
                    <a class="nav__link link link-light" href="faq.html">
                       FAQ
                    </a>
                    <form class="nav__form">
                       <svg class="header__icon">
                          <use xlink:href="images/svg/sprite.svg#search" />
                       </svg>
                       <input class="header__input input-reset" type="search" placeholder="поиск">
                    </form>
                 </li>
              </ul>
           </nav>
           <div class="header__box">
              <a class="header__phone-link link" href="tel:+375291136969">
                 <svg class="header__icon">
                    <use xlink:href="images/svg/sprite.svg#phone" />
                 </svg>
                 +375 (29) 113-69-69
              </a>
              <button class="header__cart-button button-reset">
                 <svg class="header__icon">
                    <use xlink:href="images/svg/sprite.svg#cart" />
                 </svg>
                 <span class="header__cart-count">0</span>
              </button>
           </div>
           <button class="header__burger burger button-reset">
              <span class="burger__line"></span>
              <span class="burger__line"></span>
              <span class="burger__line"></span>
           </button>
           <div class="header__cart">
              <div class="header__close-box">
                 <span class="header__cart-text">
                    Ваша корзина
                 </span>
                 <button class="header__close-btn button-reset">
                    &#215;
                 </button>
              </div>
              <div class="header__cart-catalog">
              </div>
              <div class="header__cart-bottom-box">
                 <div class="header__cart-text-box">
                    <div class="header__cart-price-box">
                       <span class="header__cart-price-text">
                          Предварительный итог:
                       </span>
                       <span class="header__cart-price">
                          0
                       </span>
                    </div>
                    <p class="header__cart-bottom-text text">
                       Чтобы узнать стоимость доставки, перейдите к оформлению заказа.
                    </p>
                 </div>
                 <button class="header__cart-btn btn button-reset">
                    Оформить заказ
                 </button>
              </div>
           </div>
        </div>
     </header>
        `
   }
}

customElements.define("special-header", specialHeader)


class specialFooter extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `
      <footer class="footer">
         <div class="footer__container container">
            <div class="footer__wrapper">
               <div class="footer__content">
                  <a class="footer__logo-link" href="index.html">
                     <svg class="footer__logo logo">
                        <use xlink:href="images/svg/sprite.svg#logo" />
                     </svg>
                  </a>
                  <h3 class="footer__title title">
                     реквизиты
                  </h3>
                  <p class="footer__text text">
                     ООО «Ловефлове» 220035, Республика Беларусь, г. Минск, ул. Тимирязева д. 67, комн. 112 (пом.11) УНП
                     193263781, «МТБанк», БИК MTBKBY22 220007, г. Минск, улица
                     Толстого
                  </p>
               </div>
               <div class="footer__list-box">
                  <h3 class="footer__title title">
                     Каталог
                  </h3>
                  <ul class="footer__list list-reset">
                     <li class="footer__item">
                        <a class="footer__link link" href="#">
                           Популярное
                        </a>
                     </li>
                     <li class="footer__item">
                        <a class="footer__link link" href="#">
                           Сухоцветы
                        </a>
                     </li>
                     <li class="footer__item">
                        <a class="footer__link link" href="#">
                           Букеты роз
                        </a>
                     </li>
                     <li class="footer__item">
                        <a class="footer__link link" href="#">
                           Композиции из цветов
                        </a>
                     </li>
                     <li class="footer__item">
                        <a class="footer__link link" href="#">
                           Индивидуальный букет
                        </a>
                     </li>
                     <li class="footer__item">
                        <a class="footer__link link" href="#">
                           Букет на праздник
                        </a>
                     </li>
                     <li class="footer__item">
                        <a class="footer__link link" href="#">
                           Упаковка подарков
                        </a>
                     </li>
                     <li class="footer__item">
                        <a class="footer__link link" href="#">
                           Шары
                        </a>
                     </li>
                     <li class="footer__item">
                        <a class="footer__link link" href="#">
                           Открытки
                        </a>
                     </li>
                     <li class="footer__item">
                        <a class="footer__link link" href="#">
                           Конверты
                        </a>
                     </li>
                  </ul>
               </div>
               <div class="footer__list-box">
                  <h3 class="footer__title title">
                     Букет
                  </h3>
                  <ul class="footer__list list-reset">
                     <li class="footer__item">
                        <a class="footer__link link" href="#">
                           Для девушки
                        </a>
                     </li>
                     <li class="footer__item">
                        <a class="footer__link link" href="#">
                           Для мужчины
                        </a>
                     </li>
                     <li class="footer__item">
                        <a class="footer__link link" href="#">
                           Для жены
                        </a>
                     </li>
                     <li class="footer__item">
                        <a class="footer__link link" href="#">
                           Для мамы
                        </a>
                     </li>
                     <li class="footer__item">
                        <a class="footer__link link" href="#">
                           Для коллеги
                        </a>
                     </li>
                     <li class="footer__item">
                        <a class="footer__link link" href="#">
                           Для начальника
                        </a>
                     </li>
                     <li class="footer__item">
                        <a class="footer__link link" href="#">
                           Для дочки
                        </a>
                     </li>
                     <li class="footer__item">
                        <a class="footer__link link" href="#">
                           Для детей
                        </a>
                     </li>
                     <li class="footer__item">
                        <a class="footer__link link" href="#">
                           Для женщины
                        </a>
                     </li>
                  </ul>
               </div>
               <div class="footer__page-links">
                  <a class="footer__page-link link" href="#">
                     Доставка и оплата
                  </a>
                  <a class="footer__page-link link" href="about.html">
                     О нас
                  </a>
                  <a class="footer__page-link link" href="contact.html">
                     FAQ
                  </a>
                  <a class="footer__page-link link" href="#">
                     Контакты
                  </a>
                  <a class="footer__page-link link" href="#">
                     для корпоративных клиентов
                  </a>
               </div>
               <div class="footer__contact">
                  <a class="footer__contact-link link" href="mailto:zakaz@loverflower.by">
                     zakaz@loverflower.by
                  </a>
                  <p class="footer__contact-text text">
                     Доставка 24/7 по договоренности с оператором
                  </p>
                  <span class="footer__contact-link">
                     ул. Тимирязева 67
                  </span>
                  <p class="footer__contact-text footer__contact-text_address text">
                     10:00 до 21:00
                     без выходных
                  </p>
                  <a class="footer__contact-link link" href="tel:+375291234567">
                     +375 (29) 113-69-69
                  </a>
                  <p class="footer__contact-text text">
                     прием звонков круглосуточно
                  </p>
                  <div class="footer__social">
                     <a class="footer__social-link" href="#">
                        <svg class="footer__social-icon socials-icon">
                           <use xlink:href="images/svg/sprite.svg#instagram" />
                        </svg>
                     </a>
                     <a class="footer__social-link" href="#">
                        <svg class="footer__social-icon socials-icon">
                           <use xlink:href="images/svg/sprite.svg#whatsapp" />
                        </svg>
                     </a>
                     <a class="footer__social-link" href="#">
                        <svg class="footer__social-icon socials-icon">
                           <use xlink:href="images/svg/sprite.svg#voice-call" />
                        </svg>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </footer>
      `
   }
}

customElements.define("special-footer", specialFooter)