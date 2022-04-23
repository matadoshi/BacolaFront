AOS.init();
$('.slider-all').slick({
    dots: false,
    arrows: true,
    speed: 1000,
    autoplay: false,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fa-solid fa-angle-left left_arrow">',
    nextArrow: '<i class="fa-solid fa-angle-right right_arrow">',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            },
        }
    ]
});
$('#bestSellers .slider').slick({
    dots: false,
    arrows: true,
    speed: 1000,
    autoplay: false,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<i class="fa-solid fa-angle-left left_arrow">',
    nextArrow: '<i class="fa-solid fa-angle-right right_arrow">',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
let products = [];
function GetProduct(prodCount) {
    let prodArray = [];
    let count = 0;
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
    console.log(col)
    let rating = '';
        for (let i = 0; i < prod.rating; i++) {
            rating += `
                <i class="fa-solid fa-star"></i>
                `
            }
        x += `
        <div onclick="location.href = 'product.html';" class="prod col-lg-${col}">
        <div class="image">
            <img class="img-fluid" src="${prod.picture.indexpage}" alt="">
        </div>
        <div class="product-buttons">
        <a class="d-block" href="">
            <i class="fa-solid fa-maximize"></i>   
        </a>
        <a class="d-block" href=""><i class="fa-brands fa-gratipay"></i></a>
        </div>
        <div class="p-info">
            <a class="d-block prod-name" href="">${prod.name}</a>
            <p class="m-0 prod-stock">${prod.stock}</p>
            <span class="prod-rating">${rating}</span>
            <span class="text-decoration-line-through old-price">${"$" + prod.price.oldprice}</span>
            <span class="new-price">${"$" + prod.price.newprice}</span>
            <div class="addToCard">
            <a href="">Add to cart</a>
            </div>
        </div>
        
        </div>
        `
        return x
}
main(6,"#product-shop");
main(5,".slider");
main(1,"#prod-card");
main(10,'#autoship .bottom');
var countDownDate = new Date("June 11, 2022 15:37:25").getTime();
var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timedown").innerHTML = `<span>${days}</span><span>${hours}</span><span>${minutes}</span><span>${seconds}</span>`;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timedown").innerHTML = "EXPIRED";
    }
}, 1000);
if(localStorage.getItem('basket') == null) {
    localStorage.setItem('basket',JSON.stringify([]));  
};
