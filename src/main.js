import { Navbar } from "./components/navbar.js";
import { ProductPictures } from "./components/productPictures.js";

const appState = {
  numberOfItems: 0,
};

window.customElements.define("nav-bar", Navbar);
window.customElements.define("product-pictures", ProductPictures);
