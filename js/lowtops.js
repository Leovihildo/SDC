// Dispalying the lowtops in the browser
var lowtopsHttp = new XMLHttpRequest();
lowtopsHttp.open('GET', 'js/lowtops.json', true);

lowtopsHttp.onload = ()=>{
     // check if the connection is successful
     if (lowtopsHttp.status == 200){
        let products = JSON.parse(lowtopsHttp.responseText);
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
        document.querySelector(".low-tops").innerHTML = output;
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
         // Get the filter options
const brandOptions = document.querySelectorAll('input[name="brand"]');
const colorOptions = document.querySelectorAll('input[name="colour"]');
const priceOption = document.getElementById('price-opt');

// Get the product cards
const productCards = document.querySelectorAll('.card');

// Add event listeners to filter options
brandOptions.forEach(option => {
  option.addEventListener('change', applyFilters);
});

colorOptions.forEach(option => {
  option.addEventListener('change', applyFilters);
});

priceOption.addEventListener('input', applyFilters);

// Define function to apply selected filters
function applyFilters() {
  // Get selected filter values
  const selectedBrand = document.querySelector('input[name="brand"]:checked')?.value;
  const selectedColor = document.querySelector('input[name="colour"]:checked')?.value;
  const selectedPrice = priceOption.value;

  // Loop through product cards and apply filters
  productCards.forEach(card => {
    // Get product data from card
    const brand = card.querySelector('.card-title')?.textContent;
    const color = card.querySelector('.card-text')?.textContent;
    const price = parseInt(card.querySelector('.card-text')?.textContent);

    // Apply brand filter
    if (selectedBrand && brand !== selectedBrand) {
      card.style.display = 'none';
      return;
    }

    // Apply color filter
    if (selectedColor && color !== selectedColor) {
      card.style.display = 'none';
      return;
    }

    // Apply price filter
    if (price < selectedPrice) {
      card.style.display = 'none';
      return;
    }

    // Display card if it passes all filters
    card.style.display = 'block';
  });
}

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
lowtopsHttp.send();
