AOS.init();
let basket = JSON.parse(localStorage.getItem('basket'));
if(localStorage.getItem('basket') == null) {
    localStorage.setItem('basket',JSON.stringify([]));  
};
function CountBasket(){
    let total=0;  
        let basket = JSON.parse(localStorage.getItem('basket'));
        let count = basket.length;
        document.getElementById('counterStrike').innerHTML = count;
        basket.forEach(prod=>{
            let subtotal=Math.round(prod.Count*prod.Price,2)
            total+=subtotal;
            let allsubtotal=total
            document.getElementById('rasxod').innerHTML=allsubtotal;  
        })
}
if(basket.length==0){
    $("#basket .null").css("display","block")
}
else{
    $("#basket .null").css("display","none")
    $("#basket .basketFull").css("display","flex")
}
let x='';
let total=0;
basket.forEach(prod=>{
    let subtotal=Math.round(prod.Count*prod.Price,2)
    total+=subtotal;
    let allsubtotal=total
    x+=`
        <div class="prod-select col-lg-12 row align-items-center" data-id="${prod.Id}">
        <div class="col-lg-6 product-detail col-9 d-flex justify-content-between align-items-center"><img col-3 src="${prod.Src}" alt=""><p class="col-lg-9">${prod.Name}</p></div>
        <div class="col-lg-1 price-category">${prod.Price}</div>
        <div class="qty-input col-lg-2 col-3">
        <button onclick="minus(event);" data-count=${prod.Count} class="minus col-lg-3 col-3"  type="button">-</button>
        <input class="product-qty col-lg-4 col-3" type="number" name="product-qty" min="0" value="${prod.Count}" disabled>
        <button onclick="plus(event);"data-count=${prod.Count};" class="plus col-lg-3 col-3" type="button">+</button>
        </div>
        <div class="col-lg-2 subtotal-category">${subtotal}</div>
        <div class="col-lg-1"><i class="fa-solid fa-x removeProduct"></i></div>
        </div>
    `
    document.getElementById('productsBasket').innerHTML = x;
    document.getElementById('subtotal').innerHTML=allsubtotal;
})
function minus(event){
    let value=event.target.nextElementSibling.value;
    if(value==1){
        event.target.nextElementSibling.value=0; 
        let basket = JSON.parse(localStorage.getItem('basket'));
        let id=event.target.parentElement.parentElement.getAttribute('data-id');
        basket.forEach(function(prod,index){
            if(prod.Id==id){
                basket.splice(index,1)
            }
        location.reload();
    })
    localStorage.setItem('basket',JSON.stringify(basket));
    }
    else{
        value--;
        let basket = JSON.parse(localStorage.getItem('basket'));
        let id=event.target.parentElement.parentElement.getAttribute('data-id');
        event.target.nextElementSibling.value=value;
        basket.forEach(prod=>{
            if(prod.Id==id){
                prod.Count=value
            }
        })
        localStorage.setItem('basket',JSON.stringify(basket));
    } 
}
function plus(event){
    let value=event.target.previousElementSibling.value;
    value++;
    let basket = JSON.parse(localStorage.getItem('basket'));
    let id=event.target.parentElement.parentElement.getAttribute('data-id');
    event.target.previousElementSibling.value=value;
    basket.forEach(prod=>{
        if(prod.Id==id){
            prod.Count=value
        }
    })
    localStorage.setItem('basket',JSON.stringify(basket));
}
$(".removeProduct").click(function(e){
    let basket = JSON.parse(localStorage.getItem('basket'));
    let id=e.target.parentElement.parentElement.getAttribute('data-id');
    basket.forEach(function(prod,index){
        if(prod.Id==id){
            basket.splice(index,1)
        }
    })
    localStorage.setItem('basket',JSON.stringify(basket));
    location.reload();
})  
CountBasket();
$('.refresh').click(function(){
    location.reload();
})