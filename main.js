
//PRODUCT DETAIL PAGE
//change photos on product detail page based on glaze option
function changeSrc() {
    if (document.getElementById("sugar").checked) {
        document.getElementById("picture").src = "../assets/glaze-options/cinnamonroll-sugar.jpg";
    } else if (document.getElementById("vanilla").checked) {
        document.getElementById("picture").src = "../assets/glaze-options/cinnamonroll-vanilla.jpg"; 
    } else if (document.getElementById("double-chocolate").checked) {
        document.getElementById("picture").src = "../assets/glaze-options/cinnamonroll-chocolate.jpg";
    } else if (document.getElementById("none").checked) {
        document.getElementById("picture").src = "../assets/glaze-options/cinnamonroll-none.jpg";
        }
}



//IN BETWEEN
// pull local storage data from product detail page to shopping cart page
// show indication of items near shopping cart item



//SHOPPING CART
// change image on shopping cart page

// change quantity on shopping cart page 
function changeQuantity() {
    var shoppingQuantity = document.getElementsByClassName("shoppingcart-quantity");
    var detailQuantity = document.getElementsbyId("quantityList");
    quantity.push(detailQuantity);
}

//remove selected items on page 
