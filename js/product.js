AOS.init()
let products = [];
function GetProduct(id) {
    let prodArray = [];
   return fetch('data/products.json')
        .then(response => { return response.json() })
        .then(data => {
            data.products.forEach(prod=>{
                if(prod.id==id){
                    prodArray.push(prod)
                }
            })
            return prodArray
        })
}
async function mains(id) {
    products = await GetProduct(id);
    let x=``;
    products.forEach(prod=>{
        x+=DrawProduct(prod);
     });
    document.querySelector(".product #prodFull").innerHTML = x;
}
function DrawProduct(prod){
    let x=``;
    let oldPrice='';
    let weight='';
    let Brand=''
    let Sku=''
    let Type='';
    let MFG='';
    let LIFE='';
    if(prod.weight!=undefined){
        weight=prod.weight+" "+"kg"
    }
    if(prod.brand!=undefined){
        Brand=prod.weight;
    }
    if(prod.price.oldprice!=""){
        oldPrice="$"+prod.price.oldprice;
    }
    if(prod.sku!=""){
        Sku="SKU"+":"+prod.sku
    }
    if(prod.type!="" && prod.type!=undefined){
        Type="Type"+":"+prod.type;
    }
    if(prod.mfg!='' && prod.mfg!=undefined){
        MFG="MFG"+":"+prod.mfg
    }
    if(prod.life!=''&& prod.life!=undefined){
        LIFE="Life"+":"+prod.life
    }

    let rating = '';
        for (let i = 0; i < prod.rating; i++) {
            rating += `
                <i class="fa-solid fa-star"></i>
                `
            }
        x += `
                    <div class="prod-header">
                        <h3 class="prod-name">${prod.name}</h3>
                        <div class="col-lg-5 justify-content-between">
                        <span class="prod-brand">${Brand}</span>
                        <span class="prod-rating d-inline">${rating}</span>
                        <span class="prod-sku"><span id="sku">${Sku}</span></span>
                        </div>
                    </div>
                    <div class="prod-detail">
                        <div class="row">
                            <div class="col-lg-5 img">
                                <img src="${prod.picture.productpage1}" alt="">
                            </div>
                            <div class="col-lg-4" data-id="${prod.id}">
                                <span class="text-decoration-line-through old-price">${oldPrice}</span>
                                <span class="new-price ms-2">${"$"+prod.price.newprice}</span>
                                <p class="prod-stock mt-2">${prod.stock}</p>
                                <p class="prod-description">${prod.description}</p>
                                <div class="countProd d-flex mb-4 align-items-center">
                                    <div class="qty-input col-lg-6 col-3">
                                    <button onclick="minus(event)" data-count="${prod.count}"class="minus col-lg-3 col-3"  type="button">-</button>
                                    <input class="text-center product-qty col-lg-4 col-3" type="number" name="product-qty" min="0" value="1" disabled>
                                    <button onclick="plus(event);" data-count=${prod.Count};" class="plus col-lg-3 col-3" type="button">+</button>
                                    </div>
                                    <div class="addToCard active">
                                    <a class="addBasket" onclick="addCard(event);" href="">Add to cart</a>
                                    </div>
                                </div>
                                <div class="wc d-flex">
                                    <div class="w col-lg-6 ">
                                        <i class="fa-solid fa-heart"></i>
                                        <span>Add to wishlist</span>
                                    </div>
                                    <div class="compare">
                                        <i class="fa-solid fa-compress"></i>
                                        <span>Compare</span>
                                    </div>
                                </div>
                                <p class="prod-type mt-4">${Type}</p>
                                <p class="prod-mfg">${MFG}</p>
                                <p class="prod-life">${LIFE}</p>
                                <hr>
                                <p>Category: <span class="prod-category">${prod.category}</span></p>
                                <div class="social mt-5">
                                    <ul class="p-0 d-flex justify-content-between">
                                        <li><i class="fa-brands fa-facebook-f"></i></li>
                                        <li><i class="fa-brands fa-twitter"></i></li>
                                        <li><i class="fa-brands fa-pinterest-p"></i></li>
                                        <li><i class="fa-brands fa-linkedin-in"></i></li>
                                        <li><i class="fa-brands fa-github"></i></li>
                                        <li><i class="fa-brands fa-whatsapp"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="right col-lg-3">
                                <div class="warning">
                                    <p>Covid-19 Info: We keep delivering.</p>
                                </div>
                                <div class="icon-messages">
                                    <ul class="p-0">
                                        <li>
                                            <i class="fa-solid fa-truck"></i>
                                            <p>Free Shipping apply to all orders over $100</p>
                                        </li>
                                        <li>
                                            <i class="fa-solid fa-face-smile"></i>
                                            <p>Guranteed 100% Organic from natural farmas</p>
                                        </li>
                                        <li>
                                            <i class="fa-solid fa-sack-dollar"></i>
                                            <p>1 Day Returns if you change your mind</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
        `
        return x;
}
function minus(event){
    let value=event.target.nextElementSibling.value;
    if(value==1){
        return;
    }
    else{
        value--;
        event.target.nextElementSibling.value=value;
    }
} 
function plus(event){
   let value= event.target.previousElementSibling.value;
   value++;
   event.target.previousElementSibling.value=value;
}
let buttons=document.querySelectorAll('.prod-fulldesc .top button');
let divs=document.querySelectorAll('.prod-fulldesc .aa');
let startPoint=0;
for(let button of buttons){
    button.addEventListener('click',function()
    {
        let active=document.querySelector('.activeDisplay');
        startPoint++;
        active.classList.remove('activeDisplay');
        this.classList.add('activeDisplay');
        
        let index=this.getAttribute('data-index');

        for(let div of divs){
            if(div.getAttribute('data-index') === index) {
                div.classList.remove('d-none');
            }
            else{
                div.classList.add('d-none');
            }
        }
    })
}
function addCard(event){
    event.preventDefault();
    let id=event.target.parentElement.parentElement.parentElement.getAttribute("data-id");
    let count=event.target.parentElement.previousElementSibling.children[1].value;
    addBasketById(id,count);
}
function addBasketById(id,count){
    return fetch('data/products.json')
         .then(response => { return response.json() })
         .then(data => {
                data.products.forEach(prod=>{
                    if(prod.id==id){
                     let basket = JSON.parse(localStorage.getItem('basket'));
                     let data_id = prod.id;
                     let prod_name = prod.name;
                     let prod_price = prod.price.newprice;
                     let prod_img = prod.picture.indexpage;
                     let existProd = basket.find(p => p.Id == data_id);
                     if(existProd == undefined) {
                         basket.push({
                           Id: data_id,
                           Name: prod_name,
                           Price: prod_price,
                           Src: prod_img,
                           Count: parseInt(count)
                         })
                       }
                       else{
                         existProd.Count += parseInt(count);
                         console.log(existProd.Count)
                       }
                       localStorage.setItem('basket',JSON.stringify(basket));
                       toster(prod_name,count)
                       $(".toster").show().delay(3000).fadeOut();
                    }
                })
                CountBasket();
     } ) 
}
function toster(name,count){
    $('.toster').css('display','block')
    let x=''
    x+=`
        <p>${count+"x"+name +""+"added to card"}</p>
    `
    document.querySelector('.toster').innerHTML=x;
}
function getCount(id){
    let basket = JSON.parse(localStorage.getItem('basket'));
    let count;
    basket.forEach(prod=>{
        if(prod.Id==id){
           count=prod.Count;
        }
    })
    return count; 
}