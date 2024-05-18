class specialForm extends HTMLElement {
   connectedCallback() {
      this.innerHTML = `
      <form id="form" class="form" method="post"
      style="display: flex; flex-direction: column; align-items: end;">
        <div class="form__input-box"
           style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 10px; width: 100%; max-width: 450px;">
           <input type="hidden" name="access_key" value="9d8b7267-8669-4d02-b1b6-5b0c899451b4">
           <input class="form__input input-reset" name="name" required type="text" placeholder="Ваше имя"
           style="padding: 10px; border: 1px solid rgb(67, 255, 210); color: #fff;">
           <input style="padding: 10px; border: 1px solid rgb(67, 255, 210); color: #fff;" class="form__input input-reset" name="tel" required type="tel"
              placeholder="+7 (977) 777-77-77">
        </div>
        <textarea class="form__textarea" name="massage" cols="30" rows="15"
           placeholder="Ваш комментарий" style="width: 100%; max-width: 450px; height: 120px; margin-bottom: 20px; padding: 10px; border: 1px solid rgb(67, 255, 210); color: #fff; resize: none; outline: none; background-color: transparent"></textarea>
        <div class="form__button-box">
           <button class="form__button button-reset" type="submit" style="margin-bottom: 10px; padding: 15px 90px; background-color: rgb(67, 255, 210); font-weight: 700; color: #000000;">
              отправить
           </button>
        </div>
        <div id="result"></div>
        <p class="form__text text" style="max-width: 450px; font-size: inherit;">
           Нажимая на кнопку «Отправить», я даю свое согласие на обработку персональных данных, в соответствии с
           <a class="form__link" href="#" style="color: #D978AC; text-decoration: underline;">
              Политикой конфиденциальности
           </a>
        </p>
     </form>
        `
   }
}

customElements.define("special-form", specialForm)