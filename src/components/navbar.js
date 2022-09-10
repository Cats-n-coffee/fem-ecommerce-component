export const navBarTemplate = document.createElement("template");
navBarTemplate.innerHTML = `
    <style>
        *, *::before, *::after {
            padding 0;
            margin: 0;
            box-sizing: border-box;
        }

        .navbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 28px 0;
        }

        .left-nav {
            display: flex;
            align-items: center;
        }

        .links-list {
            display: flex;
            list-style: none;
        }

        .links-list li {
            padding-right: 32px;
        }

        .links-list li a {
            text-decoration: none;
            font-size: 15px;
            font-weight: 400;
            color: var(--dark-grayish-blue);
        }

        .right-nav {
            display: flex;
            align-items: center;
        }

        .right-nav img {
            width: 50px;
            height: 50px;
            margin-left: 40px;
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
