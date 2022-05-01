AOS.init()
$(".homebtn").hover(function(e){
    e.preventDefault();
    $(".dropdownhome").toggleClass("active")    
})
$('.prod').hover(function(e){
    $('.product-buttons').toggleClass("active")
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
$('.sidebar-menu i').click(function () {
    $(this).parents('.dropdown').find('.dropdown').not($(this).siblings('ul')).slideUp();
    $(this).siblings('ul').stop(true, true).slideToggle();
    $(this).toggleClass('active');
});
$('#menu-btn, #btn-close-navbar, .overlay').click(function () {
    $('.overlay, .sidebar').toggleClass('active');
})
$('.shopwidePage').click(function(){
    location.href='shopwide.html'
})
let width=$(window).width()
$(window).resize(function () {
    if (width <= 580) {
        console.log(width)
        $('#elementorProduct').addClass('g-4')
        $('#autoshipProducts').addClass('g-4')
        $('#shopwideProdutcs').addClass('g-4')
        $('#recentlyProducts').addClass('g-3')
    }
})
function CountBasket(){
    let total=0;
    let basket = JSON.parse(localStorage.getItem('basket'));
    let count = basket.length;
    document.querySelectorAll('#counterStrike').forEach(counter=>{
        counter.innerHTML=count
    })
    basket.forEach(prod=>{
        let subtotal=Math.round(prod.Count*prod.Price,2)
        total+=subtotal;
        let allsubtotal=total
        document.querySelectorAll('#rasxod').forEach(rasxod=>{
            rasxod.innerHTML=allsubtotal
        });  
    })
}
CountBasket();
function productPage(event){
    event.preventDefault();
    let id=event.target.parentElement.parentElement.getAttribute("data-id");
    mains(id);
}
$('.logo').click(function(){
    location.href='index.html'
})