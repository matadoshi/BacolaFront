
$(".homebtn").hover(function(e){
    e.preventDefault();
    $(".dropdownhome").toggleClass("active")    
})
$(".shopbtn").hover(function(e){
    e.preventDefault();
    $(".dropdownshop").toggleClass("active")    
})
$(".locationbar").click(function(){
    $(".locationbarModal").toggleClass("active");
})
$(".close").click(function(){
    $(".locationbarModal").toggleClass("active");
})
$("#h-bottom .left").click(function(){
    $("#h-bottom .left .clickdown").toggleClass('active')
})
$(".fruitshover").hover(function(){
    $(".fruitsdropdown").toggleClass('active')
})
$(".beveragehover").hover(function(){
    $(".beveragedropdown").toggleClass('active')
})
$(".burgermenu").click(function(){
    $(".burgerMenu").toggle().css({
        "width":"100%",
        "display":"block"
    });
})
$(".fa-xmark").click(function(){
    $(".burgerMenu").css({
        "width":"0%",
        "display":"none"
    })
})
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
CountBasket();
function productPage(event){
    event.preventDefault();
    let id=event.target.parentElement.parentElement.getAttribute("data-id");
    mains(id);
}
