
//PRODUCT DETAIL PAGE
//change photos on product detail page based on glaze option
function changeSrc() {
    if (document.getElementsByClassName("sugar").checked) {
        document.getElementsById("picture").src = "./assets/glaze-options/cinnamonroll-sugar.jpg";
    } else if (document.getElementsByClassName("vanilla").checked) {
        document.getElementsById("picture").src = ".assets/glaze-options/cinnamonroll-vanilla.jpg"; 
    } else if (document.getElementsByClassName("double-chocolate").checked) {
        document.getElementsbyId("picture").src = ".assets/glaze-options/cinnamonroll-chocolate.jpg";
    }
}

    
//    var value = img.options[glaze-options.selectedIndex].value;
//    alert(selectedValue);
    console.log(img);
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

document.addEventListener("DOMContentLoaded", function(event) {
    setPicture();
});