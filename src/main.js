import { Navbar } from "./components/navbar.js";
import { ProductPictures } from "./components/productPictures.js";
import { ProductDescription } from "./components/productDescription.js";

const appState = {
  numberOfItems: 0,
};

window.customElements.define("nav-bar", Navbar);
window.customElements.define("product-pictures", ProductPictures);
window.customElements.define("product-description", ProductDescription);

const selectedPicture = document
  .querySelector("product-pictures")
  .shadowRoot.querySelector(".selected-picture");
console.log(selectedPicture);

selectedPicture.addEventListener("click", () => {
  console.log("picture was cliked");
  // need to handle opening closing of the slideshow
  // pass an attribute to the component to set slideshow
});
