const productPicturesTemplate = document.createElement("template");
productPicturesTemplate.innerHTML = `
    <style>
        *, *::before, *::after {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
        }
        .pictures-wrapper {
            width: 100%;
            max-width: 445px;
        }
        .selected-picture {
            width: 100%;
            height: auto;
            max-width: 445px;
            max-height: 445px;
            border-radius: 15px;
        }
        .pictures-list {
            display: flex;
            justify-content: space-between;
            max-width: 445px;
            width: 100%;
            list-style: none;
            margin-top: 30px;
        }
        .thumbnails {
            width: 88px;
            height: 88px;
            border-radius: 10px;
        }
        .thumbnails:hover {
            filter: opacity(50%);
            cursor: pointer;
        }
        .blurred-thumbnail {
            outline: 2px solid hsl(26, 100%, 55%);
            border-radius: 10px;
            width: 88px;
            height: 88px;
        }
        .blurred-thumbnail img {
            filter: opacity(30%);
        }
    </style>
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

  connectedCallback() {
    this.shadowRoot.querySelectorAll(".thumbnails").forEach((thumbnail) => {
      thumbnail.addEventListener("click", (event) => {
        this.setSelectedPicture(event);
      });
    });
  }

  disconnectedCallback() {
    this.shadowRoot.querySelectorAll(".thumbnails").forEach((thumbnail) => {
      thumbnail.removeEventListener("click", this.selectedPicture);
    });
  }
}
