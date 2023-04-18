// Dispalying the lowtops in the browser
var hightopsHttp = new XMLHttpRequest();
hightopsHttp.open('GET', 'js/hightops.json', true);

hightopsHttp.onload = ()=>{
     // check if the connection is successful
     if (hightopsHttp.status == 200){
        let products = JSON.parse(hightopsHttp.responseText);
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
        document.querySelector(".high-tops").innerHTML = output;
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
hightopsHttp.send();