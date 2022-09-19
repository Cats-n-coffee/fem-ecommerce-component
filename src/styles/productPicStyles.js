export const productPicStyles = `
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
`;
