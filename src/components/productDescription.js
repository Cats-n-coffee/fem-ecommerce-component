import { productDescriptionStyles } from "../styles/productDescStyles.js";

const productDescriptionTemplate = document.createElement("template");
productDescriptionTemplate.innerHTML = `
    ${productDescriptionStyles}
    <div class="desc-wrapper">
        <section class="desc-text">
            <h2>Sneaker Company</h2>
            <h3>Fall Limited Edition Sneakers</h3>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <div class="new-price">
                <span>&#36;125.00</span>
                <span>50&#37;</span>
            </div>
            <div class="original-price">
                <s>&#36;250.00</s>
            </div>
        </section>
        <section class="desc-actions">
            <div class="quantity-controls">
                <button id="minus">
                    <svg class="minus" width="12" height="4" viewBox="0 0 12 4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs>
                            <path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a"/>
                        </defs>
                        <use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#a"/>
                    </svg>
                </button>
                <span id="quantity-display">0</span>
                <button id="plus">
                    <svg class="plus" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs>
                            <path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b"/>
                        </defs>
                        <use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#b"/>
                    </svg>
                </button>
            </div>
            <button class="cart-btn">
                <svg width="22" height="20" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/>
                </svg>
                <span>Add to cart</span>
            </button>
        </section>
    </div>
`;

export class ProductDescription extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(
      productDescriptionTemplate.content.cloneNode(true)
    );
    this.container = document.querySelector("#container");
    this.quantityDisplay = this.shadowRoot.querySelector("#quantity-display");
    this.newQuantity = parseInt(this.container.dataset.quantity) || 0;
  }

  connectedCallback() {
    const plusButton = this.shadowRoot.querySelector("#plus");
    const minusButton = this.shadowRoot.querySelector("#minus");
    const addToCartButton = this.shadowRoot.querySelector(".cart-btn");

    plusButton.addEventListener("click", () => {
      this.newQuantity = this.newQuantity <= 10 ? (this.newQuantity += 1) : 10;
      this.quantityDisplay.innerText =
        this.newQuantity <= 10 ? this.newQuantity : 10;
    });
    minusButton.addEventListener("click", () => {
      this.newQuantity = this.newQuantity > 0 ? (this.newQuantity -= 1) : 0;
      this.quantityDisplay.innerText =
        this.newQuantity >= 0 ? this.newQuantity : 0;
    });
    addToCartButton.addEventListener("click", () => {
      this.container.dataset.quantity = this.newQuantity;
    });
  }
}
