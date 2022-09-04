export const navBarTemplate = document.createElement("template");
navBarTemplate.innerHTML = `
    <style>
        .navbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .left-nav {
            display: flex;
        }

        .links-list {
            display: flex;
            list-style: none;
        }

        .links-list li {
            padding-right: 15px;
        }

        .links-list li a {
            text-decoration: none;
        }
    </style>
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
            <object data="../images/icon-cart.svg" width="22" height="20"></object>
            <img src="../images/image-avatar.png" alt="avatar"/>
        </div>
    </nav>
`;

export class Navbar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(navBarTemplate.content.cloneNode(true));
  }
}
