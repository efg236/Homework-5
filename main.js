var elements = document.getElementsByTagName('*');

var cart = [];

function item(image, name, cost, quantity, glaze) {
    this.image = image,
    this.name = name,
    this.cost = cost,
    this.quantity = quantity,
    this.glaze = glaze
}
//*
var image = document.getElementsByClassName("product-image");
var name = document.getElementsByTagName("h2");
var glaze = document.getElementsByClassName("glaze-options");
var quantity = document.getElementsbyId("quantityList");
var cost = document.getElementsByTagName("p");
*//
    
var original = new item("image","name","cost","quantity","cost");

cart.push(item);
//PRODUCT DETAIL PAGE
//change photos on product detail page
function changeImage() {
    var image = document.getElementsByClassName("product-image");
    
}



//IN BETWEEN
// pull local storage data from product detail page to shopping cart page
// show indication of items near shopping cart item



//SHOPPING CART
// change image on shopping cart page 
function changeImage() {
    var image = document.getElementbyClassName("shoppingcart-image");
    }
}
// change quantity on shopping cart page 
function changeQuantity() {
    var shoppingQuantity = document.getElementsByClassName("shoppingcart-quantity");
    var detailQuantity = document.getElementsbyId("quantityList");
    quantity.push(detailQuantity);
}


//remove selected items on page 