// Create Page
var clear_spinner_1 = ()=>{
    document.querySelector(".spinner").classList.add("hidden");
    document.querySelector(".form-category").classList.remove("hidden");
}
var clear_spinner_2 = ()=>{
    document.querySelector(".spinner").classList.add("hidden");
    document.querySelector(".form-colour").classList.remove("hidden");
}
// Move to choose shoe category
document.querySelector(".yes-btn").addEventListener('click', ()=>{
    document.querySelector(".intro").classList.add("hidden");
    document.querySelector(".spinner").classList.remove("hidden");
    const my_spinner_1 = setTimeout(clear_spinner_1, 8000);      
});

// Move to change shoe color
let shoe_input = document.getElementsByTagName("input");
document.getElementById("next-btn-1").addEventListener('click', ()=>{
    for (var i=0; i<shoe_input.length; i++){
        if (shoe_input[i].type == "radio"){
            if ((shoe_input[i].checked) || (shoe_input[i+1].checked) || (shoe_input[i+2].checked)){
                document.querySelector(".form-category").classList.add("hidden");
                document.querySelector(".spinner").classList.remove("hidden");
                const my_spinner_2 = setTimeout(clear_spinner_2, 8000);
                break;
            }
            else{
                Swal.fire({
                    position: 'top-end',
                    icon: 'danger',
                    title: 'Please select a category',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }
})

//Change shoe colour
let colour = document.querySelector(".colour");
let colour_input = document.querySelector(".color-input");

colour_input.addEventListener('input', ()=>{
    colour.style.backgroundColor = colour_input.value; 
})