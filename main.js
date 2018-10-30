
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
        var cinnamonRollType = document.querySelector("#product-details").dataset.cinnamonRoll;
        var elements = form.querySelectorAll("input,select");
        obj["cinnamonRollType"]= cinnamonRollType;
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


