import { navbarStyles } from "../styles/navbarStyles.js";

export const navBarTemplate = document.createElement("template");
navBarTemplate.innerHTML = `
    ${navbarStyles}
    <nav class="navbar">
        <div class="left-nav">
            <h1>
                <a href="/">
                    <object data="../images/logo.svg" width="138" height="20"></object>
                </a>
            </h1>
            <ul class="links-list">
                <li>
                    <a href="/">Collections</a>
                </li>
                <li>
                    <a href="/">Men</a>
                </li>
                <li>
                    <a href="/">Women</a>
                </li>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
            </ul>
        </div>
        <div class="right-nav">
            <button class="navbar-cart">
                <svg width="22" height="20" viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/>
                </svg>
            </button>
            <img src="../images/image-avatar.png" alt="avatar"/>
            <section class="order-review">
                <h3>Cart</h3>
                <div class="cart-content">
                </div>
            </section>
        </div>
    </nav>
`;

export class Navbar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(navBarTemplate.content.cloneNode(true));

    this.container = document.querySelector("#container");
  }

  connectedCallback() {
    const navbarCart = this.shadowRoot.querySelector(".navbar-cart");
    const orderReview = this.shadowRoot.querySelector(".order-review");
    const cartContent = this.shadowRoot.querySelector(".cart-content");

    navbarCart.addEventListener("click", () => {
      orderReview.classList.toggle("show");
      const quantity = this.container.dataset.quantity;
      const total = 125 * quantity;

      if (quantity && quantity > 0) {
        cartContent.innerHTML = `
            <div class="order-review-items">
                <img src="../images/image-product-1-thumbnail.jpg" alt="selected item"/ >
                <div class="item-info">
                    <p>Fall Limited Edition Sneakers</p>
                    <p>
                        <span>$125.00 x ${quantity}</span>
                        <span>${total.toFixed(2)}</span>
                    </p>
                </div>
                <button id="delete-item">
                    <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs>
                            <path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/>
                        </defs>
                        <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/>
                    </svg>
                </button>
            </div>
            <button class="checkout">Checkout</button>
        `;
      } else {
        cartContent.innerText = "Your cart is empty.";
      }
    });
  }
}
