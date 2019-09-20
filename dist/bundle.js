/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const homepage = __webpack_require__(1);
const itempage = __webpack_require__(3);

console.log("I am index file");


window.addEventListener("load", () => {
    homepage.setup();
    itempage.setup();

})


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const utils = __webpack_require__(2);
//console.log(utils2.addTwoNumbers(2,4));

const new_clothes = [{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/n/i/nike-air-force-1-prm-multi-1.jpg","title":"Nike Air Force PRM 1 - sail / imperial blue","price":"135,00 €","category":"Uus kaup"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-genoa-tee-blk.jpg","title":"Makia Genoa Tee - black","price":"35,00 €","category":"Uus kaup"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-algot-ls.jpg","title":"Makia Algot Longsleeve - navy / white","price":"55,00 €","category":"Uus kaup"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-symbol-sweat-blk.jpg","title":"Makia Symbol Sweatshirt - black","price":"75,00 €","category":"Uus kaup"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-roll-neck-knit-blk.jpg","title":"Makia Roll Neck Knit - black","price":"110,00 €","category":"Uus kaup"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-boreal-parka-olive-1.jpg","title":"Makia Boreal Parka - olive","price":"230,00 €","category":"Uus kaup"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-lined-avenue-boot-1.jpg","title":"Makia Lined Avenue Boot - black","price":"160,00 €","category":"Uus kaup"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-w-island-tee-red-1.jpg","title":"Makia Women's Island Tee - red","price":"35,00 €","category":"Uus kaup"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-covet-sweat-lilac.jpg","title":"Makia Women's Covet Sweatshirt - light lilac","price":"75,00 €","category":"Uus kaup"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-halla-parka-2-navy-1.jpg","title":"Makia Women's Halla Parka 2.0 - dark blue","price":"210,00 €","category":"Uus kaup"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-deal-beanie-charcoal.jpg","title":"Makia Deal Beanie - dark grey","price":"45,00 €","category":"Uus kaup"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-thin-merino-hat-red_1.jpg","title":"Makia Merino Thin Cap - red","price":"35,00 €","category":"Uus kaup"}]
const shoes = [{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/n/i/nike-city-react-blk-1.jpg","title":"Nike React City - black","price":"160,00 €","category":"Jalatsid - Mehed"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-district-boot-blk-1.jpg","title":"Makia District Boot - black","price":"160,00 €","category":"Jalatsid - Mehed"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/d/r/drmartens-1460-wp-blk-1.jpg","title":"Dr. Martens 1460 WP - black","price":"220,00 €","category":"Jalatsid - Mehed"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/j/o/jordan-4-retro-se-fiba-1-1.jpg","title":"Air Jordan 4 Retro SE \"FIBA\" - gym red","price":"190,00 €","category":"Jalatsid - Mehed"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/n/i/nike-zoom-2k-blk-1.jpg","title":"Nike Zoom 2K - black","price":"95,00 €","category":"Jalatsid - Mehed"}]
const hoodies = [{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-waves-sweat-navy.jpg","title":"Makia Waves Light Sweatshirt - dark blue","price":"60,00 €","category":"Pusad - Mehed"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/m/a/makia-symbol-hood-blk.jpg","title":"Makia Symbol Hoodie - black","price":"85,00 €","category":"Pusad - Mehed"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/p/o/polar-velour-zip-neck-blk-1.jpg","title":"Polar Velour Zip Neck - black","price":"110,00 €","category":"Pusad - Mehed"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/s/t/stussy-basic-hood-black-2_2.jpg","title":"Stussy Basic Stüssy Hood - black","price":"105,00 €","category":"Pusad - Mehed"},{"imgSrc":"https://reede.ee/media/catalog/product/cache/3/small_image/215x315/9df78eab33525d08d6e5fb8d27136e95/h/a/han-casual-hoodie-grey-1.jpg","title":"Han Kjobenhavn Casual Hoodie - grey melange logo","price":"120,00 €","category":"Pusad - Mehed"}]

function dropDownListener(){
    const selectElement = document.querySelector(".category-select");
    selectElement.addEventListener('change', (event) => {
        createItems(event.target.value);
        console.log(event.target.value);
    })
}

function createItems(category){
    const root = document.getElementById("item_content");
    var items = new_clothes;
    root.innerHTML = null;
    if(category == "new clothes"){
        items = new_clothes;
    }if(category == "shoes"){
        items = shoes;
    }else if(category == "hoodies"){
        items = hoodies;
    }
    items.forEach((item)=>{

        const stuff = utils.createItemElements(item);
        root.appendChild(stuff);

    })
}


function setup(){
    const root = document.getElementById("item_content");
    if(!root) return;
    dropDownListener();
}

module.exports = {
    setup
}

/*window.addEventListener("load", () => {
    dropDownListener();

})
*/

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const itempage = __webpack_require__(3);
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

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function setup(){

    var urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get('title');
    const price = urlParams.get('price');
    const source = urlParams.get('src')


    const img = document.createElement("img");
    img.className = "item_page_img"
    img.src = source;
    img.width = 300;
    img.height = 400;

    const titleh1 = document.createElement("H1");
    titleh1.className = "item_title";
    const item_title = document.createTextNode(title);
    titleh1.appendChild(item_title);

    const priceh2 = document.createElement("H1");
    priceh2.className = "item_price";
    const item_price = document.createTextNode(price + "€");
    priceh2.appendChild(item_price);

    const container = document.getElementById('container');
    if(!container) return;
    container.appendChild(img);
    container.appendChild(titleh1);
    container.appendChild(priceh2);

}

module.exports = {
    setup,
};






/***/ })
/******/ ]);