export const productDescriptionStyles = `
    <style>
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    .desc-wrapper {
        max-width: 445px;
        padding-left: 16px;
    }

    .desc-text h2 {
        font-size: 13px;
        font-weight: 700;
        text-transform: uppercase;
        color: var(--orange);
        letter-spacing: 2px;
    }

    .desc-text h3 {
        font-weight: 700;
        font-size: 44px;
        color: var(--very-dark-blue);
        padding-top: 24px;
        padding-bottom: 32px;
    }

    .desc-text p {
        font-weight: 400;
        color: var(--dark-grayish-blue);
        line-height: 26px;
    }

    .new-price {
        display: flex;
        align-items: center;
        padding-top: 28px;
        padding-bottom: 10px;
    }

    .new-price span:first-child {
        font-weight: 700;
        font-size: 28px;
        color: var(--very-dark-blue);
    }

    .new-price span:last-child {
        margin-left: 16px;
        font-size: 16px;
        font-weight: 700;
        color: var(--orange);
        background-color: var(--pale-orange);
        padding: 7px 8px;
        border-radius: 8px;
    }

    .original-price s {
        color: var(--grayish-blue);
        font-weight: 700;
        font-size: 16px;
    }

    .desc-actions {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 32px;
    }

    .quantity-controls {
        background-color: var(--light-grayish-blue);
        border-radius: 10px;
        padding: 18px 16px;
        width: 157px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .quantity-controls button {
        background-color: var(--light-grayish-blue);
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .quantity-controls button:hover,
    .quantity-controls svg:hover {
        cursor: pointer;
    }

    .quantity-controls button:hover svg use {
        fill: var(--pale-orange);
    }

    #quantity-display {
        font-size: 16px;
        font-weight: 700;
        color: var(--very-dark-blue);
    }

    .cart-btn {
        background-color: var(--orange);
        border-radius: 10px;
        height: 57px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        margin-left: 16px;
        cursor: pointer;
    }

    .cart-btn:hover {
        background-color: var(--pale-orange);
    }

    .cart-btn svg path {
        fill: var(--white);
    }

    .cart-btn span {
        color: var(--white);
        font-size: 16px;
        font-weight: 700;
        margin-left: 16px;
    }
    </style>
`;
