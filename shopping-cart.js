$( document ).ready(function() {
    const body = $("body");
    const cartData = JSON.parse(localStorage.getItem("cart_array"));
    const cartDataLength = cartData.length;
    const cartItemTemplate = 
    `
        <div class="shoppingcart-item">
            <!---Product#1-->
            <div class="shoppingcart-image">
                <img src="../assets/flavors/original.JPG" alt="" / class="thumbnail">
            </div>
            <div class="shoppingcart-text">
                <div class="shopping-cart-options">
                    <div class="shoppingcart-description">
                        <span class="product-title">Original Roll</span>
                    </div>
                    <div class="shoppingcart-quantity">
                        <input type="text" value="1"/>
                    </div>
                    <div class="shoppingcart-total-price">
                        $2.00
                    </div>
            </div>
            <hr>
                <div class="shopping-cart-options">
                    <div class="glaze">Glaze: None</div>
                    <div class="update">Update</div>
                    <div class="remove">Remove Item</div>
                </div>
            </div>
        </div>
    `;
    
    body.find("#item-count span").text(`${cartDataLength} items in Your Cart`);
    
    const cartItemsContainer = body.find("#cart-items-container");
    
    for(let i = 0; i < cartDataLength; i++) {
        cartItemsContainer.append(cartItemTemplate);
    }
    
    const cartItems = body.find(".shoppingcart-item");
    const shoppingCartImages = body.find(".shoppingcart-image img");
    const shoppingCartProductTitles = body.find(".shoppingcart-description .product-title");
    const shoppingCartQuantities = body.find(".shoppingcart-quantity input");
    const shoppingCartFlavors = body.find(".shopping-cart-options .glaze");
    const shoppingCartPrices = body.find(".shoppingcart-total-price");
    
    let totalPrice = 0;
    
    cartItems.each(function(index, value){
        cartDataIndex = JSON.parse(cartData[index]);
        cartDataRollType = cartDataIndex.cinnamonRollType;
        cartDataFlavor = cartDataIndex.flavor;
        cartDataImagePath = cartDataIndex.imagePath;
        cartDataQuantity = cartDataIndex.quantity;

        $(shoppingCartImages[index]).attr({src: cartDataImagePath});
        $(shoppingCartProductTitles[index]).text(cartDataRollType);
        $(shoppingCartQuantities[index]).val(cartDataQuantity);
        $(shoppingCartFlavors[index]).text(`Glaze: ${cartDataFlavor}`);
        $(shoppingCartPrices[index]).text(`$${(cartDataQuantity * 2).toFixed(2)}`);
        totalPrice += cartDataQuantity * 2;
        
    });
    
    body.find("#cart-subtotal").text(`$${(totalPrice).toFixed(2)}`);
    body.find("#cart-total").text(`$${(totalPrice).toFixed(2)}`);
});
