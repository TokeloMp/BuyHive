document.addEventListener("DOMContentLoaded", function () {
    const buyerBtn = document.getElementById("buyerBtn");
    const sellerBtn = document.getElementById("sellerBtn");
    const buyerTab = document.getElementById("buyerTab");
    const sellerTab = document.getElementById("sellerTab");

    // Show buyer tab by default
    buyerTab.style.display = "block";
    sellerTab.style.display = "none";

    buyerBtn.addEventListener("click", function () {
        buyerTab.style.display = "block";
        sellerTab.style.display = "none";
        buyerBtn.classList.add("active-tab");
        sellerBtn.classList.remove("active-tab");
    });

    sellerBtn.addEventListener("click", function () {
        sellerTab.style.display = "block";
        buyerTab.style.display = "none";
        sellerBtn.classList.add("active-tab");
        buyerBtn.classList.remove("active-tab");
    });
});
