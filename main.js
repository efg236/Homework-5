
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


(function saveForm() {
    function toJSONString(form) {
        var obj = {};
        var elements = form.querySelectorAll("h2,input,select");
        for( var i = 0; i < elements.length; ++i) {
            var element = elements[i];
            var name = element.name;
            var value = element.value;
            if(element.checked) {
                var imagePath = element.dataset.imagePath;
                obj[name] = value;
                obj["imagePath"] = imagePath;
                
            }
            else if(name === "quantity") {
                obj[name] = value;
            }
            
        }
    
    return JSON.stringify(obj);
    }

     document.addEventListener("DOMContentLoaded",function() {
        var form = document.getElementById("options-form");
        form.addEventListener("submit",function(event) {
            event.preventDefault();
            var formData = toJSONString(this);
            var storedData = JSON.parse(localStorage.getItem("cart_array"));
            if(storedData) { 
                storedData.push(formData);
                localStorage.setItem("cart_array", JSON.stringify(storedData));
            } else {
                localStorage.setItem("cart_array", JSON.stringify([formData]));
            }
            
            storedDataLength = JSON.parse(localStorage.getItem("cart_array")).length;
            document.querySelector("#shopping-cart-quantity-indicator").innerHTML = `(${storedDataLength})`;
//            localStorage.setItem("json",json);
//            
//            json_deserialized =JSON.parse(localStorage.getItem("json"));
            
//            console.log(json_deserialized);
             console.log(JSON.parse(localStorage.getItem("cart_array")))
        }, false);
    });

})();

//REFACTOR USED TWICE LINE 40
document.addEventListener("DOMContentLoaded",function() {
   storedDataLength = JSON.parse(localStorage.getItem("cart_array")).length;
   document.querySelector("#shopping-cart-quantity-indicator").innerHTML = `(${storedDataLength})`;
});


//SHOPPING CART
var shoppingCart = [];

var Item = function(name, price, count) {
    this.name = name
    this.price = price
    this.count = count 
};

//add items to cart
function addItemtoCart(name, price, count){
    for (var i in cart) {
        if (cart[i].name === name) {
            cart[i].count += count;
            return;
        }
    }
    var item = new Item(name, price, count);
    cart.push(item);
}

//remove items from cart / remove one item
function removeItemFromCart (name) {
    for (var i in cart) {
        if (cart[i].name === name) {
            cart[i].count --;
            if (cart[i].count === 0) {
                cart.splice(i, 1);
            }
        }
    }
}

//remove items from cart / remove all items

function removeItemFromCartAll (name) {
    for (var i in cart) {
        if (cart[i].name === name) {
            cart.splice(i,1);
            break;
        }
    }
}

