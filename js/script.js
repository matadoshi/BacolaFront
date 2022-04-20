 function GetProducts(){
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        
    })
    .catch(err=>console.log(err))
}
GetProducts();