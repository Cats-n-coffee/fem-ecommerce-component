import { Navbar } from "./components/navbar.js";
import { ProductPictures } from "./components/productPictures.js";
import { ProductDescription } from "./components/productDescription.js";

const appState = {
  numberOfItems: 0,
};

window.customElements.define("nav-bar", Navbar);
window.customElements.define("product-pictures", ProductPictures);
window.customElements.define("product-description", ProductDescription);

const closeSlideShow = document.querySelector("#close-slideshow");
const slideShow = document.querySelector(".slideshow-wrapper");

closeSlideShow.addEventListener("click", () => {
  slideShow.style.display = "none";
  document.body.style.overflow = "scroll";
});
