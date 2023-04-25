(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
// // Import the products.json
// const products_all = require('./products.json');
// for (var i=0; i<products_all.length; i++){
//     products_all[i].brandName.push("Anderson");
//     console.log(products_all[i].brandName);
// }

// // console.log(products_all["brandName"]); 

let brandName = document.querySelector(".brand-name"),
    brandPrice = document.querySelector(".brand-price"),
    brand_category = document.getElementsByName("category");

// Import require function

// function loadData(filename = '') {
//     return JSON.parse(
//         fs.readFile(filename).toString()
//     )
// }

// function addData(filename = '', json = '""') {
//     return fs.writeFileSync(filename, JSON.stringify(json))
// }
// const products = loadData('products.json');
let shoe_store = [];
const brand_img = document.getElementById("inputImg4");

brand_img.addEventListener('change', event =>{
    // Get uploaded file
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onload = event=>{
    // Get the file data from the filereader object
    const imageData = event.target.result;
    // Push the image to the array
    shoe_store.push(imageData);
    }
    reader.readAsDataURL(file);
})
document.querySelector(".btn-shoe-form").addEventListener('click', ()=>{
    if (brandName.value != "" && brandPrice.value !="") {
        for (let i = 0; i<brand_category.length; i++) {
            if (brand_category[i].checked){
                shoe_store.push(brandName.value);
                shoe_store.push(brandPrice.value);
                shoe_store.push(brand_category[i].value);
            }
        }
        localStorage.setItem("Shoes", JSON.stringify(shoe_store));
        location.href = "index.html";
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Product succesfully created',
            showConfirmButton: false,
            timer: 1500
        });
    }
    else{
        alert("Please fill in all forms");
    }
})

},{"fs":1}]},{},[2]);
