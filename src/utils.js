const itempage = require('./itempage.js');
//item.html?title=stussy-bait-tee&price=70&src=Images/stussy-bait-tee-blk-2.jpg
function createItemElements(item){
    const a = document.createElement("a");
    a.href = "item.html?title=" + item.title + "&price=" + item.price + "&src=" + item.imgSrc;
    a.style = "text-decoration:none"
    const itemDiv = document.createElement("div");
    itemDiv.className = "item";
    const img = document.createElement("img");
    img.src = item.imgSrc;
    img.className = "item_img";
    itemNameDiv = document.createElement("div");
    itemNameDiv.className = "item_name";
    itemNameDiv.innerText = item.title;
    itemPriceDiv = document.createElement("div");
    itemPriceDiv.className = "item_price";
    itemPriceDiv.innerText = item.price;

    a.appendChild(itemDiv);
    itemDiv.appendChild(img);
    itemDiv.appendChild(itemNameDiv);
    itemDiv.appendChild(itemPriceDiv);

    return a;

}

module.exports = {
    createItemElements
}