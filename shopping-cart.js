$( document ).ready(function() {
    const body = $("body"),
          cartData = JSON.parse(localStorage.getItem("cart_array")),
          cartDataLength = cartData.length,
          cartItemTemplate = 
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
                    <div class="update"><button type="button" class="update">Update</button></div>
                    <div class="remove"><button type="button class="remove">Remove Item</button></div>
                </div>
            </div>
        </div>
    `;
    
    body.find("#item-count span").text(`${cartDataLength} items in Your Cart`);
    
    const cartItemsContainer = body.find("#cart-items-container");
    
    for(let i = 0; i < cartDataLength; i++) {
        cartItemsContainer.append(cartItemTemplate);
    }
    
    const cartItems = body.find(".shoppingcart-item"),
          shoppingCartImages = body.find(".shoppingcart-image img"),
          shoppingCartProductTitles = body.find(".shoppingcart-description .product-title"),
          shoppingCartQuantities = body.find(".shoppingcart-quantity input"),
          shoppingCartFlavors = body.find(".shopping-cart-options .glaze"),
          shoppingCartPrices = body.find(".shoppingcart-total-price");
 
    // shopping cart totals 
    let totalPrice = 0;
    
    cartItems.each(function(index, value){
        // add data attribute to each cart item
        $(value).attr('data-item-number', index);
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
    
    // write remove functionality
    // add click event listeners on the 'update' and 'remove' buttons
    
    $(".remove").on("click", function(event){
        const target = $(event.currentTarget),
              targetContainer = target.closest(".shoppingcart-item"),
              itemNumber = targetContainer.data('item-number'),
              shoppingCartQuantityIndicator = body.find("#shopping-cart-quantity-indicator");

        targetContainer.remove();
    
        cartData.splice(itemNumber, 1);
        localStorage.setItem("cart_array", JSON.stringify(cartData));
        
        let updatedCartItems = $(".shoppingcart-item"),
            totalCartQuantity = 0;
        
        shoppingCartQuantityIndicator.text(`(${updatedCartItems.length})`);
        
        updatedCartItems.each(function(index, value){
           $(value).attr('data-item-number', index);
            totalCartQuantity += +$(value).find(".shoppingcart-quantity input").val();   
        });
        body.find("#cart-subtotal").text(`$${(totalCartQuantity * 2).toFixed(2)}`);
        body.find("#cart-total").text(`$${(totalCartQuantity * 2).toFixed(2)}`);
        
    });
    
    $(".update").on("click", function(event){
       const target = $(event.currentTarget),
             targetContainer = target.closest(".shoppingcart-item"),
             itemNumber = targetContainer.data('item-number'),
             quantityInput = target.parent().siblings().find(".shoppingcart-quantity input"),
             quantityInputValue = quantityInput.val(),
             priceContainer = target.parent().siblings().find(".shoppingcart-total-price"),
             currentCartData = JSON.parse(localStorage.getItem("cart_array"));
             
        let updatedItem = JSON.parse(currentCartData[itemNumber]);
        updatedItem.quantity = quantityInputValue;
        currentCartData[itemNumber] = JSON.stringify(updatedItem);
        localStorage.setItem("cart_array", JSON.stringify(currentCartData));
        
        priceContainer.text(`$${(quantityInputValue *2).toFixed(2)}`);
        
        let updatedCartItems = $(".shoppingcart-item"),
            totalCartQuantity = 0;
        updatedCartItems.each(function(index, value){
           totalCartQuantity += +$(value).find(".shoppingcart-quantity input").val();
        });
        
        body.find("#cart-subtotal").text(`$${(totalCartQuantity * 2).toFixed(2)}`);
        body.find("#cart-total").text(`$${(totalCartQuantity * 2).toFixed(2)}`);
             
    });
    
    // write code to do something when update or remove button is clicked
});


