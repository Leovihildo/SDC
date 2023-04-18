// Reusable Web Components
// class Products extends HTMLElement{
//     constructor(){
//         super();
//         this.shadow = this.attachShadow({mode:"open"});
//     }
//     connectedCallback(){
//         this.render();
//     }
//     render(){
//         this.shadow.innerHTML = 
//         '<div class=" swiper mySwiper products-container">'+
//         '<div class="swiper-wrapper">'+
//             '<div class="card col-3 swiper-slide" style="width: 20rem;">'+
//                 '<img class="card-img-top">'+
//                 '<div class="card-body">'+
//                 '<h4 class="card-title brand"><slot name="brand" /></h4>'+
//                 '<p class="card-text price"><slot name="price" /></p>'+
//                 '<div class="btn-cart"><a href="">Add to cart<i class="fa fa-shopping-cart" aria-hidden="true"></i></li></a></div>'+
//             '</div>'+
//         '</div>'+
//         '</div>'+
//     '</div>';
//     }
// }
// customElements.define('product', Products);
document.querySelector(".btn-start").innerHTML = "GO!";
const template = document.createElement("template");
template.innerHTML = 
'<link rel=stylesheet href="../css/shoes.css">'+
'<link rel="stylesheet" href="../css/bootstrap.min.css">'+
'<link rel="stylesheet" href="../font-awesome-4.7.0/css/font-awesome.min.css">'+
'<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"/>'+
// '<link rel="stylesheet" href="../css/swiper-bundle.min.css">'+
'<div class=" swiper mySwiper products-container">'+
    '<div class="swiper-wrapper">'+
        // <!-- SHOES---- -->
        '<div class="card col-3 swiper-slide" style="width: 20rem;">'+
            '<img class="card-img-top">'+
            '<div class="card-body">'+
                '<h4 class="card-title brand"><slot name="brand" /></h4>'+
                '<p class="card-text price"><slot name="price" /></p>'+
                '<div class="btn-cart"><a>Add to cart<i class="fa fa-shopping-cart" aria-hidden="true"></i></li></a></div>'+
            '</div>'+
        '</div>'+
    '</div>'+
'</div>';

class Products extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    static get observedAttributes(){
        return ["brand", "brand-image", "price"];
    }
    attributeChangedCallback(name, oldval, newval){
        this.shadowRoot.querySelector(".card h4").innerText = this.getAttribute("brand");
        this.shadowRoot.querySelector(".card-img-top").src = this.getAttribute("brand-image");
        this.shadowRoot.querySelector(".card-img-top").alt = this.getAttribute("brand");
        this.shadowRoot.querySelector(".card-text").innerText = this.getAttribute("price");
    }
    // Add to cart
    addedtocart = () =>{
        let product_nums = localStorage.getitem('addedtocart');
        product_nums = parseInt(product_nums);
        if (product_nums){
            window.alert('added');
            document.querySelector(".cart-items").textContent = localStorage.setItem('addedtocart', 1);
        }
        document.querySelector(".cart-items").textContent = localStorage.setItem('addedtocart', product_nums+1);
    }
    connectedCallback(){
        this.shadowRoot.querySelector(".btn-cart").addEventListener('click', this.addedtocart);
    }
}


export default Products;