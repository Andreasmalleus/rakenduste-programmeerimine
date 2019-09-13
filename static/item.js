var urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get('title');
const price = urlParams.get('price');
const source = urlParams.get('src')


const img = document.createElement("img");
img.className = "item_img"
img.src = source;

const titleh1 = document.createElement("H1");
titleh1.className = "item_title";
const item_title = document.createTextNode(title);
titleh1.appendChild(item_title);

const priceh2 = document.createElement("H1");
priceh2.className = "item_price";
const item_price = document.createTextNode(price);
priceh2.appendChild(item_price);



window.addEventListener("load", () => {
    const container = document.getElementById('container');
    container.appendChild(img);
    container.appendChild(titleh1);
    container.appendChild(priceh2);
});




