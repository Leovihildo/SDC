// Reusable Web components
// Header
class Header extends HTMLElement{
    connectedCallback(){
        this.innerHTML = 
    '<header id="header">'+
        '<nav id="nav_scroll" class="navbar navbar-expand-lg navbar-light bg-light sticky-top">'+
            '<div class="container">'+
            '<a class="brand" href="home.html">'+
                    '<img src="images/sneakers/Sdc.png" alt="" width="60" height="60" class="d-inline-block align-text-top">'+
                '</a>'+
                '<button class="navbar-toggler" type="button" data-bs-target="#offcanvasRight" data-bs-toggle="offcanvas" aria-controls="offcanvasRight">'+
                    '<span class="navbar-toggler-icon clear"></span>'+
                '</button>'+
            '<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">'+
                '<div class="offcanvas-header">'+
                    '<h5 class="offcanvas-title" id="offcanvasRightLabel">Menu</h5>'+
                    '<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>'+
                '</div>'+
            '<div class="offcanvas-body small">'+
                '<ul class="navbar-nav justify-content-end  flex-grow-1 pe-3">'+
                    '<li class="nav-item"><a class="nav-link active" href="index.html">Home</a></li>'+
                    '<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="#">Categories</a>'+
                        '<ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="offcanvasNavbarDropdown">'+
                            '<li><a class="dropdown-item low category" href="lowtops.html">Low-tops</li>'+
                            '<li><a class="dropdown-item mid category" href="midtops.html">Mid-tops</li>'+
                            '<li><a class="dropdown-item high category" href="hightops.html">High-tops</li>'+
                        '</ul>'+
                    '</li>'+
                    '<li class="nav-item faq"><a class="nav-link" href="faq.html">FAQ</a></li>'+
                    '<li class="nav-item"><a class="nav-link" href="cart.html"><i class="fa fa-shopping-cart cart-menu fa-2x" aria-hidden="true"><span class="cart-items">0</span></i></a></li>'+
                '</ul>'+
                '<img src="images/Spring.png" alt="" width="60" height="60" class="d-inline-block d-none  align-text-top pull-bottom">'
            '</div>'+
            '</div>'+
            '</div>'+
        '</nav>'+
        '</header>';
    }
}

// Filter Menu
class Filter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = 
        '<div class="row">'+
            '<div class="dropdown col-6">'+
               ' <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">'+
               ' Filter'+
                '</button>'+
           ' <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">'+
            //   Brand Options
                '<li>'+
                    '<h6 class="option-title">Brand</h6>'+
                    '<ul class="option-list">'+
                        '<li><a href="javascript: void(0)" class="brand-opt dropdown-item"><label for="Adidas">Adidas</label><input id="Adidas" name="brand" value="Adidas" type="radio"></a></li>'+
                        '<li><a href="javascript: void(0)" class="brand-opt dropdown-item"><label for="Nike">Nike</label><input id="Nike" name="brand" value="Nike" type="radio"></a></li>'+
                    '</ul>'+
                '</li>'+
            // Color options
                '<li>'+
                    '<h6 class="option-title">Colour</h6>'+
                    '<ul class="option-list">'+
                        '<li><a href="javascript: void(0)" class="brand-opt dropdown-item"><label for="white">White</label><input id="white" name="colour" value="White" type="radio"></a></li>'+
                        '<li><a href="javascript: void(0)" class="brand-opt dropdown-item"><label for="black">Black</label><input id="black" name="colour" value="Black" type="radio"></a></li>'+
                        '<li><a href="javascript: void(0)" class="brand-opt dropdown-item"><label for="pink">Pink</label><input id="pink" name="colour" value="Pink" type="radio"></a></li>'+
                        '<li><a href="javascript: void(0)" class="brand-opt dropdown-item"><label for="multi">Multi-coloured</label><input id="multi" name="colour" value="Multi" type="radio"></a></li>'+
                    '</ul>'+
                '</li>'+
            // Price range
                '<li>'+
                    '<h6 class="option-title">Price</h6>'+
                    '<ul class="option-list">'+
                        '<li><a href="javascript: void(0)" class="brand-opt dropdown-item">'+
                             '<span id="price-opt-value">40,000</span>'+
                             '<input type="range" id="price-opt" name="price" min="40000" max="400000">'+
                             '<span>400,000</span></a></li>'+
                    '</ul>'+
                '</li>'+
                '<li><button type="button" class="btn btn-outline-success apply-btn">Apply</button></li>'+
            '</ul>'+
       ' </div>'+
        '<form class="search-bar col-6">'+
           ' <input type="text" name="" id="search" placeholder="search a product">'+
           ' <div class="search"><i class="fa fa-search" aria-hidden="true"></i></div>'+
       ' </form>'+
       '</div>'
    }
}

// Footer
class Footer extends HTMLElement{
    connectedCallback(){
        this.innerHTML = 
        '<footer>'+
       '     <div class="container">'+
                '<div class="row">'+
                    '<h5>Sh<span class="ispan">o</span>p with us.</h5>'+
                    '<div class="col-md-6 contact">'+
                        '<h6>Contact Info</h6>'+
                        '<div>'+
                           ' <i class="fa fa-phone" aria-hidden="true"></i><span>+234-809-6169-948</span>'+
                        '</div>'+
                       ' <div>'+
                           ' <i class="fa fa-envelope" aria-hidden="true"></i><span>Johnsonp.Joshua@yahoo.com</span>'+
                        '</div>'+
                    '</div>'+
                '<hr class="d-block d-sm-none">'+
                   ' <div class="col-md-6 row social">'+
                        '<h6>Social Links</h6>'+
                       ' <div class="ig col-md-6 col-lg-2">'+
                            '<a href="https://www.instagram.com/leovihildo" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>'+
                        '</div>'+
                       ' <div class="fb col-md-6 col-lg-2">'+
                            '<a href="https://www.facebook.com/johnson.wizfacejoshua" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>'+
                        '</div>'+
                        '<div class="linkd col-md-6 col-lg-2">'+
                           ' <a href="https://www.linkedin.com/in/joshua-johnson-270382199" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>'+
                        '</div>'+
                    '</div>'+
           ' </div>'+
        '</div>'+
            '<div id="copy">'+
                '<span>'+
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">'+
                        '<path fill-opacity="0.7" d="M0,160L20,144C40,128,80,96,120,90.7C160,85,200,107,240,138.7C280,171,320,213,360,202.7C400,192,440,128,480,128C520,128,560,192,600,197.3C640,203,680,149,720,144C760,139,800,181,840,192C880,203,920,181,960,144C1000,107,1040,53,1080,58.7C1120,64,1160,128,1200,170.7C1240,213,1280,235,1320,229.3C1360,224,1400,192,1420,176L1440,160L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z">'+
                        '</path>'+
                    '</svg>'+
                '</span>'+
            '<span>POW Tech Copyright&copy;</span>'+
            '</div>'+
        '</footer>';
    }
}

customElements.define('main-footer', Footer);
customElements.define('main-header', Header);
customElements.define('my-filter', Filter);

// Main-content
// Products Cards

// Create an xmlhttpRequest object
let product_http = new XMLHttpRequest();
product_http.open('GET', 'js/products.json');

product_http.onload = ()=>{
    // check if the connection is successful
    if (product_http.status == 200){
        let products = JSON.parse(product_http.responseText);
        console.log("connection is succesful");
        let output = "";

        for (let item of products){
            output += '<div class="card col-3 swiper-slide" style="width: 20rem;">'+
                        '<img src ="'+item.image+'" class="card-img-top loading">'+
                        '<div class="card-body">'+
                            '<h4 class="card-title loading">'+item.brand_model+'</h4>'+
                            '<p class="card-text loading">'+item.price+'</p>'+
                            '<div class="btn-cart loading"><a href="javascript: void(0)">Add to cart<i class="fa fa-shopping-cart" aria-hidden="true"></i></a></div>'+
                        '</div>'+
                    '</div>';
        }
        document.querySelector(".all-category").innerHTML = output;
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
const search = document.getElementById('search');
const productList = document.getElementById('product-list');
const filterBrand = document.getElementsByName('brand');
const filterColor = document.getElementsByName('color');
const filterPrice = document.getElementById('price-opt');
const applyFilterBtn = document.querySelector('.apply-btn');

let products = [];

// Fetch Products
const fetchProducts = async () => {
  try {
    const res = await fetch('products.json');
    products = await res.json();
    displayProducts(products);
  } catch (err) {
    console.error(err);
  }
};

// Display Products
const displayProducts = (items) => {
  let display = items.map((item) => {
    return `<div class="card col-3 swiper-slide" style="width: 20rem;">
                <img src ="${item.image}" class="card-img-top loading">
                <div class="card-body">
                    <h4 class="card-title loading">${item.brand_model}</h4>
                    <p class="card-text loading">${item.price}</p>
                    <div class="btn-cart loading"><a href="javascript: void(0)">Add to cart<i class="fa fa-shopping-cart" aria-hidden="true"></i></a></div>
                </div>
            </div>`;
  }).join('');
  productList.innerHTML = display;
};

// Search Products
search.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();
  const filteredProducts = products.filter((product) => {
    return (
      product.brand_model.toLowerCase().includes(searchString)
    );
  });
  displayProducts(filteredProducts);
});

// Filter Products
applyFilterBtn.addEventListener('click', () => {
  let filteredProducts = products;

  // Filter by Brand
  const selectedBrand = Array.from(filterBrand).filter((input) => input.checked);
  if (selectedBrand.length > 0) {
    const brandNames = selectedBrand.map((input) => input.value);
    filteredProducts = filteredProducts.filter((product) => {
      return brandNames.includes(product.brand);
    });
  }

  // Filter by Color
  const selectedColor = Array.from(filterColor).filter((input) => input.checked);
  if (selectedColor.length > 0) {
    const colorNames = selectedColor.map((input) => input.value);
    filteredProducts = filteredProducts.filter((product) => {
      return colorNames.includes(product.color);
    });
  }

  // Filter by Price Range
  const selectedPrice = filterPrice.value;
  filteredProducts = filteredProducts.filter((product) => {
    return product.price >= selectedPrice;
  });

  displayProducts(filteredProducts);
});

fetchProducts();


        // Swiper Container
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 2,
            centeredSlides: true,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 1500,
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
}
product_http.send();

// let cart_btns = this.document.querySelectorAll(".btn-cart");
// for (var i=0; i<cart_btns.length; i++){
//     console.log(cart_btns[i]);
// }

// Filter range input function
document.addEventListener('DOMContentLoaded', function() { 
    var priceOpt = document.getElementById('price-opt'); 
    var priceOptValue = document.getElementById('price-opt-value'); 
    priceOpt.addEventListener('input', function() { 
        priceOptValue.innerHTML = priceOpt.value;
    })
})
// Saved Items
let product_nums = localStorage.getItem('cartedItems');
    if (product_nums){
        document.querySelector(".cart-items").innerHTML = product_nums;
    }

// Add to cart
addedtocart = () =>{
    let product_nums = parseInt(localStorage.getItem('cartedItems'));

    if (product_nums){
        localStorage.setItem('cartedItems', product_nums + 1);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Item added to cart',
            showConfirmButton: false,
            timer: 1500
        });
        document.querySelector(".cart-items").innerHTML = product_nums+1;
    }
    else{
        localStorage.setItem('cartedItems', 1);
        document.querySelector(".cart-items").innerHTML = 1;
    }
    // this.setItems(item);
}

// let shoe_img = document.querySelector(".card-img-top"),
//     brand_title = document.querySelector(".card-title"),
//     brand_price = document.querySelector(".card-text");
