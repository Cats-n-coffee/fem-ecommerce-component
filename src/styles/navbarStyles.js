export const navbarStyles = `
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
        cursor: pointer;
        position: relative;
    }

    .links-list li:hover a {
        color: var(--very-dark-blue);
    }

    .links-list li:hover a::after {
        content: '';
        position: absolute;
        top: 59px;
        left: 0;
        width: 100%;
        height: 4px;
        background-color: var(--orange);
    }

    .right-nav {
        display: flex;
        align-items: center;
        position: relative;
    }

    .right-nav > img {
        width: 50px;
        height: 50px;
        margin-left: 40px;
        border-radius: 50%;
        cursor: pointer;
    }

    .right-nav > img:hover {
        outline: 2px solid var(--orange);
    }

    .navbar-cart {
        background: none;
        border: none;
        cursor: pointer;
    }

    .navbar-cart:hover svg path {
        fill: black;
    }

    .order-review {
        position: absolute;
        background: var(--white);
        border-radius: 10px;
        box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.5);
        right: 0;
        top: 60px;
        width: 360px;
        display: none;
    }

    .order-review.show {
        display: block;
    }

    .order-review h3 {
        color: var(--dark-grayish-blue);
        border-bottom: 1px solid var(--grayish-blue);
        padding: 24px;
    }

    .cart-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 188px;
        color: var(--dark-grayish-blue);
        font-weight: 700;
        padding: 24px;
    }
    
    .order-review-items {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 26px;
    }

    .order-review-items img {
        width: 50px;
        height: 50px;
        border-radius: 4px;
    }

    .item-info {
        font-size: 15px;
        color: var(--dark-grayish-blue);
        font-weight: 400;
        line-height: 26px;
        padding: 0 16px;
    }

    .item-info span:last-child {
        color: var(--very-dark-blue);
        font-weight: 700;
        margin-left: 6px;
    }

    #delete-item {
        padding: 0;
        background: none;
        border: none;
        cursor: pointer;
    }

    #delete-item:hover use {
        fill: var(--very-dark-blue);
    }

    .checkout {
        background-color: var(--orange);
        border-radius: 10px;
        border: none;
        color: var(--white);
        width: 100%;
        padding: 18px 0;
        cursor: pointer;
        font-size: 16px;
        font-weight: 700;
    }

    .checkout:hover {
        background-color: var(--pale-orange);
    }
    </style>
`;
