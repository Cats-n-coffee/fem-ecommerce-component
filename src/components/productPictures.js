const productPicturesTemplate = document.createElement("template");
productPicturesTemplate.innerHTML = `
    <style>
        .selected-picture {
            width: 100%;
            height: auto;
            max-width: 445px;
            max-height: 445px;
        }
    </style>
    <div class="pictures-wrapper">
        <img
            src="../../images/image-product-1.jpg"
            class="selected-picture"
        />
        <ul class="pictures-list">
            <li>
                <img src="../../images/image-product-1-thumbnail.jpg" alt="product 1"/>
            </li>
            <li>
                <img src="../../images/image-product-2-thumbnail.jpg" alt="product 2"/>
            </li>
            <li>
                <img src="../../images/image-product-3-thumbnail.jpg" alt="product 3"/>
            </li>
            <li>
                <img src="../../images/image-product-4-thumbnail.jpg" alt="product 4"/>
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
}
