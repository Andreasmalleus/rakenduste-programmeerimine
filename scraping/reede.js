{
    const itemClass = "item first";

    const imgClass = "product-image";
    const nameClass = "product-name";
    const priceClass = "price"

    //const nameClass = "product-name";
    //const priceContainerClass = "price-box";
    const items = document.getElementsByClassName(itemClass);

    const arr  = [];

    Array.from(items).forEach( item => {


        const img = item.getElementsByClassName(imgClass)[0].children[0].src;
        const price = item.getElementsByClassName(priceClass)[0].textContent;
        const title = item.getElementsByClassName(nameClass)[0].children[0].textContent;


        arr.push({
            imgSrc : img,
            title,
            price,
            category : document.title
            
        })

        
    });

    console.log(arr);
    console.log(JSON.stringify(arr));


}
