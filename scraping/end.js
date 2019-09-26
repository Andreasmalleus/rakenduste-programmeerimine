{
    const itemClass = "ProductList__ProductSC-sc-114chzc-3 fAXAhx";

    const imgClass = "ProductList__InnerImage-sc-114chzc-1 leDun"
    const nameClass = "ProductList__ProductNameSC-sc-114chzc-4 drGpFD";
    const priceClass = "ProductList__ProductPriceSC-sc-114chzc-6 etcLga"

    //const nameClass = "product-name";
    //const priceContainerClass = "price-box";
    const items = document.getElementsByClassName(itemClass);

    const arr  = [];

    Array.from(items).forEach( item => {
        
        const img = item.getElementsByClassName(imgClass)[0].src;
        const title = item.getElementsByClassName(nameClass)[0].children[0].textContent;
        const price = item.getElementsByClassName(priceClass)[0].textContent;


        arr.push = ({
            imgSrc : img,
            title,
            price,
            category : document.title
        })


    });

    console.log(arr.length);


}
