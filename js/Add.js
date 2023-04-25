// // // // Import the products.json
// // // const products_all = require('./products.json');
// // // for (var i=0; i<products_all.length; i++){
// // //     products_all[i].brand_name.push("Anderson");
// // //     console.log(products_all[i].brand_name);
// // // }

// // // // console.log(products_all["brand_name"]); 

// // let brand_name = document.querySelector(".brand-name"),
// //     brand_price = document.querySelector(".brand-price"),
// //     brand_category = document.getElementsByName("category");
// //     brand_img = document.querySelector(".brand-img");

// // // Store shoe entry in an array
// // let shoe_entry = [];
// // document.querySelector(".btn-shoe-form").addEventListener('click', ()=>{
// //     if (brand_name.value != "" && brand_price.value !="") {
// //         for (let i = 0; i<brand_category.length; i++) {
// //             if(brand_category[i].checked){
// //                 shoe_entry.push(brand_category[i].value);
// //                 fetch("js/products.json")
// //                 .then(response => {
// //                     return response.json();
// //                 })
// //                 .then(products_all => {
// //                     products_all.push({"brand_name":brand_name.value+"","price":brand_price.value+"","image":brand_img.value+"","category":brand_category[i].value+""});
// //                     var fs = require('fs');
// //                     var data = JSON.parse(fs.readFileSync('js/products.json'));
// //                     data.push(products_all);

// //                     fs.writeFile("products.json", JSON.stringify(data), (err) =>{
// //                         if (err) throw err;
// //                         console.log("New data added");
// //                     })
// //                     console.log(products_all);
// //                 }
// //                 )
// //                 // localStorage.setItem("Shoes", JSON.parse(products_all));
// //             }
// //         }
// //         Swal.fire({
// //             position: 'top-end',
// //             icon: 'success',
// //             title: 'Product succesfully created',
// //             showConfirmButton: false,
// //             timer: 1500
// //         });
// //         location.href = "index.html";
// //     }
// //     else{
// //         alert("Please fill in all forms");
// //     }
// // })

// // // Store entries in product.json

// // // Save form to localstorage
// // let shoe_form = localStorage.getItem("Shoe-form");
// // shoe_form = JSON.parse(shoe_form);
// // if (shoe_form){
// //     localStorage.clear();
// //     localStorage.setItem("Shoe-form", JSON.stringify(shoe_entry));
// // }
// // else{
// //     localStorage.setItem("Shoe-form", JSON.stringify(shoe_entry));
// // }

// let shoes = localStorage.getItem("Shoes");
// shoes = JSON.parse(shoes);
// if (shoes){
//     products = {
//         "brand_name": shoes[0],
//         "price": shoes[1],
//         "image": shoes[3],
//         "category": shoes[2]
//     };
//     const file =new File([JSON.stringify(products)], 'products.json', {type: 'application/json'});
//     const filewriter = new FileWriter(file)
    
//     filewriter.onwriteend = () =>{
//         console.log("Succesfully written to file");
//     }
//     filewriter.onerror = (e) =>{
//         console.error("Error writing data", e);
//     }
    
//     filewriter.write(JSON.stringify(products));
//     filewriter.abort();
// }

// var jsonData = {"name": "John Doe", "email": "johndoe@example.com"};

// fetch('php.php', {
//   method: 'POST',
//   body: JSON.stringify(jsonData),
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error(error));
let shoes = JSON.parse(localStorage.getItem("Shoes"));
if (shoes){
    let output = "";
output += '<div class="card col-3 swiper-slide" style="width: 20rem;">'+
'<img src ="'+shoes[0]+'" class="card-img-top loading">'+
'<div class="card-body">'+
    '<h4 class="card-title loading">'+shoes[1]+'</h4>'+
    '<p class="card-text loading">'+shoes[2]+'</p>'+
    '<div class="btn-cart loading"><a href="javascript: void(0)">Add to cart<i class="fa fa-shopping-cart" aria-hidden="true"></i></a></div>'+
'</div>'+
'</div>';

document.querySelector(".added-items").innerHTML = output;
// Skeleton Loading function
setTimeout(() => {
let textheaders = document.querySelectorAll(".loading-text");
textheaders.forEach(textheader => {
   textheader.classList.remove('loading');
});
let card_titles = document.querySelectorAll(".card-title");
card_titles.forEach(card_title =>{
   card_title.classList.remove('loading');
});
let card_texts = document.querySelectorAll(".card-text");
card_texts.forEach(card_text =>{
   card_text.classList.remove('loading');
});
let card_imgs = document.querySelectorAll(".card-img-top");
card_imgs.forEach(card_img =>{
   card_img.classList.remove('loading');
});
let card_btns = document.querySelectorAll(".btn-cart");
card_btns.forEach(card_btn =>{
   card_btn.classList.remove('loading');
});
}, 8000);
// Cart button
let cart_btns = this.document.querySelectorAll(".btn-cart");
cart_btns.forEach(cart_btn => {
cart_btn.addEventListener('click', addedtocart);
});
// Swiper Container
var swiper = new Swiper(".mySwiper", {
slidesPerView: 1,
centeredSlides: true,
spaceBetween: 30,
autoplay: {
   delay: 1200,
   disableOnInteraction: false,
},
pagination: {
el: ".swiper-pagination",
clickable: true,
},
navigation: {
   nextEl: ".swiper-button-next",
   prevEl: ".swiper-button-prev"
},
breakpoints: {
   640: {
   slidesPerView: 2,
   spaceBetween: 40,
   },
   768: {
   slidesPerView: 3,
   spaceBetween: 50,
   },
   1024: {
   slidesPerView: 4,
   spaceBetween: 60,
   },
},
});
}


const form_info = document.querySelector(".shoe-form");
form_info.addEventListener('submit', event =>{
    event.preventDefault();

    const formData = new FormData(form_info);
    const data = Object.fromEntries(formData);

    fetch('js/php.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => console.log(data+ "successful"))
    .catch(error => console.error(error))
})

  
  
  