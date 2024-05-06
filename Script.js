document.addEventListener("DOMContentLoaded", function () {
    const cartIcon = document.getElementById("cart");
    const addToCartDiv = document.getElementById("addtocart");

    cartIcon.addEventListener("click", function () {
        addToCartDiv.style.marginLeft = addToCartDiv.style.marginLeft === "-80%" ? "0" : "-80%";
    });
});
