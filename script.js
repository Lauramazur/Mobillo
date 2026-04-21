let cart = JSON.parse(localStorage.getItem("cart")) || [];
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

const cartIcon = document.getElementById("cart-icon");
const favIcon = document.getElementById("fav-icon");

const cartDropdown = document.getElementById("cart-dropdown");
const favDropdown = document.getElementById("fav-dropdown");

const cartCount = document.getElementById("cart-count");
const favCount = document.getElementById("fav-count");

function saveData() {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

function updateUI() {
    cartCount.textContent = cart.length;
    favCount.textContent = favorites.length;

    cartDropdown.innerHTML = "";
    cart.forEach(item => {
        cartDropdown.innerHTML += `
            <div class="dropdown-item">
                <p>${item.name}</p>
                <span>${item.price}</span>
            </div>
        `;
    });

    favDropdown.innerHTML = "";
    favorites.forEach(item => {
        favDropdown.innerHTML += `
            <div class="dropdown-item">
                <p>${item.name}</p>
                <span>${item.price}</span>
            </div>
        `;
    });
}

function addToCart(name, price) {
    cart.push({ name, price });
    saveData();
    updateUI();
}

function addToFavorites(name, price) {
    favorites.push({ name, price });
    saveData();
    updateUI();
}

document.querySelectorAll(".card").forEach(card => {
    const name = card.querySelector(".product-name").textContent;
    const price = card.querySelector(".price").textContent;

    card.querySelector(".add-cart").addEventListener("click", () => {
        addToCart(name, price);
    });

    card.querySelector(".add-fav").addEventListener("click", () => {
        addToFavorites(name, price);
    });
});

cartIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    cartDropdown.classList.toggle("show");
    favDropdown.classList.remove("show");
});

favIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    favDropdown.classList.toggle("show");
    cartDropdown.classList.remove("show");
});

document.addEventListener("click", () => {
    cartDropdown.classList.remove("show");
    favDropdown.classList.remove("show");
});

updateUI();