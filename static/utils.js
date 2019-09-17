function createItems(category){
    const root = document.getElementById("item_content");
    var items = new_clothes;
    root.innerHTML = null;
    if(category == "new clothes"){
        items = new_clothes;
    }else if(category == "shoes"){
        items = shoes;
    }else if(category == "hoodies"){
        items = hoodies;
    }
    items.forEach((item)=>{

        const stuff = createItemElements(item);
        root.appendChild(stuff);

    })
}