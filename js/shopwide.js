AOS.init()
function GetProduct(prodCount) {
        let prodArray = [];
    return fetch('data/products.json')
            .then(response => { return response.json() })
            .then(data => {
                    for(let i=0;i<prodCount;i++){
                        let random=Math.floor(Math.random() * data.products.length);
                        prodArray.push(data.products[random])
                    }  
                return prodArray;
        });
}
async function main(count,id) {
        products = await GetProduct(count);
        let x=``;
        products.forEach(prod=>{
        x+=Draw(prod,count);
        })
        document.querySelector(id).innerHTML = x;
        // делай что хотел
}
function Draw(prod,count){
        let x=``;
        let oldPrice='';
        let weight='';
        if(count>8){
            count=5;
        }
        let col=12/count;
        if(col==2){
            col=4;
        }
        if(col==2.4){
            col=col*10;
        }
        if(prod.weight!=undefined){
            weight=prod.weight+" "+"kg"
        }
        if(prod.price.oldprice!=""){
            oldPrice="$" + prod.price.oldprice;
        }
        let rating = '';
            for (let i = 0; i < prod.rating; i++) {
                rating += `
                    <i class="fa-solid fa-star"></i>
                    `
                }
            x += `
            <div class="prod col-lg-${col} col-6">
            <div onclick="location.href = 'product.html';" class="image">
                <img class="img-fluid" src="${prod.picture.indexpage}" alt="">
            </div>
            <div class="product-buttons">
            <a class="d-block" href="">
                <i class="fa-solid fa-maximize"></i>   
            </a>
            <a class="d-block" href=""><i class="fa-brands fa-gratipay"></i></a>
            </div>
            <div class="p-info" data-id="${prod.id}">
                <a class="d-block prod-name" href="#">${prod.name}</a>
                <span class="prod-weight">${weight}</span>
                <span class="m-0 prod-stock">${prod.stock}</span>
                <span class="prod-rating">${rating}</span>
                <span class="text-decoration-line-through old-price">${oldPrice}</span>
                <span class="new-price">${"$" + prod.price.newprice}</span>
                <div class="addToCard">
                <a class="addBasket" href="">Add to cart</a>
                </div>
            </div>
            </div>
            `
            let addBasket = document.querySelectorAll(`[class="addBasket"]`);
            return x;
}
main(15,'#shopwideProdutcs')
main(4,"#recentlyProducts")
