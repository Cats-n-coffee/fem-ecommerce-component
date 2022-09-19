import { productPicStyles } from "../styles/productPicStyles.js";

const productPicturesTemplate = document.createElement("template");
productPicturesTemplate.innerHTML = `
    ${productPicStyles}
    <div class="pictures-wrapper">
        <img
            src="../../images/image-product-1.jpg"
            class="selected-picture"
        />
        <ul class="pictures-list">
            <li class="blurred-thumbnail">
                <img
                    src="../../images/image-product-1-thumbnail.jpg"
                    data-source="../../images/image-product-1-thumbnail.jpg"
                    alt="product 1"
                    class="thumbnails"
                />
            </li>
            <li>
                <img
                    src="../../images/image-product-2-thumbnail.jpg"
                    data-source="../../images/image-product-2-thumbnail.jpg"
                    alt="product 2"
                    class="thumbnails"
                />
            </li>
            <li>
                <img
                    src="../../images/image-product-3-thumbnail.jpg"
                    data-source="../../images/image-product-3-thumbnail.jpg"
                    alt="product 3"
                    class="thumbnails"
                />
            </li>
            <li>
                <img
                    src="../../images/image-product-4-thumbnail.jpg"
                    data-source="../../images/image-product-4-thumbnail.jpg"
                    alt="product 4"
                    class="thumbnails"
                />
            </li>
        </ul>
    </div>
`;

export class ProductPictures extends HTMLElement {
  constructor() {
    super();

    this.slideShow = false;
    this.selectedPicture = "../../images/image-product-1.jpg";

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(
      productPicturesTemplate.content.cloneNode(true)
    );
  }

  setSelectedPicture(event) {
    const currentSelection = this.selectedPicture;
    const currentSelectionSelector = currentSelection.replace(
      ".jpg",
      "-thumbnail.jpg"
    );
    const elementSelected = this.shadowRoot.querySelector(
      `[data-source="${currentSelectionSelector}"`
    ).parentElement;
    elementSelected.classList.remove("blurred-thumbnail");

    const imageSrc = event.target.dataset.source;
    const updatedPicture = imageSrc.replace("-thumbnail", "");

    this.selectedPicture = updatedPicture;
    this.shadowRoot.querySelector(".selected-picture").src =
      this.selectedPicture;
    event.target.parentElement.classList.add("blurred-thumbnail");
  }

  openSlideShow() {
    const slideShow = document.querySelector(".slideshow-wrapper");
    slideShow.style.top = `${window.scrollY}px`;
    slideShow.style.display = "flex";

    document.body.style.overflow = "hidden";
  }

  connectedCallback() {
    this.shadowRoot.querySelectorAll(".thumbnails").forEach((thumbnail) => {
      thumbnail.addEventListener("click", (event) => {
        this.setSelectedPicture(event);
      });
    });

    this.shadowRoot
      .querySelector(".selected-picture")
      .addEventListener("click", this.openSlideShow);
  }

  disconnectedCallback() {
    this.shadowRoot.querySelectorAll(".thumbnails").forEach((thumbnail) => {
      thumbnail.removeEventListener("click", this.selectedPicture);
    });

    this.shadowRoot
      .querySelector(".selected-picture")
      .removeEventListener("click", this.openSlideShow);
  }
}
