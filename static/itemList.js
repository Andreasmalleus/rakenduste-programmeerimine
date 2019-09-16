const new_stuff = [{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/n/i/nike-air-force-1-prm-multi-1.jpg","title":"Nike Air Force PRM 1 - sail / imperial blue","price":"135,00 €","category":"Uus kaup"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-genoa-tee-blk.jpg","title":"Makia Genoa Tee - black","price":"35,00 €","category":"Uus kaup"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-algot-ls.jpg","title":"Makia Algot Longsleeve - navy / white","price":"55,00 €","category":"Uus kaup"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-symbol-sweat-blk.jpg","title":"Makia Symbol Sweatshirt - black","price":"75,00 €","category":"Uus kaup"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-roll-neck-knit-blk.jpg","title":"Makia Roll Neck Knit - black","price":"110,00 €","category":"Uus kaup"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-boreal-parka-olive-1.jpg","title":"Makia Boreal Parka - olive","price":"230,00 €","category":"Uus kaup"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-lined-avenue-boot-1.jpg","title":"Makia Lined Avenue Boot - black","price":"160,00 €","category":"Uus kaup"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-w-island-tee-red-1.jpg","title":"Makia Women's Island Tee - red","price":"35,00 €","category":"Uus kaup"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-covet-sweat-lilac.jpg","title":"Makia Women's Covet Sweatshirt - light lilac","price":"75,00 €","category":"Uus kaup"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-halla-parka-2-navy-1.jpg","title":"Makia Women's Halla Parka 2.0 - dark blue","price":"210,00 €","category":"Uus kaup"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-deal-beanie-charcoal.jpg","title":"Makia Deal Beanie - dark grey","price":"45,00 €","category":"Uus kaup"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-thin-merino-hat-red_1.jpg","title":"Makia Merino Thin Cap - red","price":"35,00 €","category":"Uus kaup"}]
function createItems(){
    const root = document.getElementById("item_content");
    new_stuff.forEach((item)=>{

        const stuff = createItemElements(item);
        root.appendChild(stuff);

    })
}

function createItemElements(item){
    const a = document.createElement("a");
    a.href = " ";
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


window.addEventListener("load", () => {

    console.log("hell");
    createItems();

})
