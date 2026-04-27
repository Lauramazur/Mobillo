document.addEventListener("DOMContentLoaded", () => {

  let toateProdusele = [
{ nume: "Pat Cloud Curve", categorie: "pat", imagine: "https://www.homeitaly.md/wp-content/uploads/2024/03/canapea-nicoline-italia-homeitaly-amalfi_0001_amalfi5.jpg", price: "5000 Lei" },
{ nume: "Dulap Horizon", categorie: "dormitor", imagine: "https://www.homeitaly.md/wp-content/uploads/2023/09/dulap-garderoba-alf-dafre-homeitaly-poker-clara_0000s_0002_Poker-18-pag-67.jpg",price: "5000 Lei" },
{ nume: "Canapea Cloud", categorie: "canapea", imagine: "https://www.homeitaly.md/wp-content/uploads/2024/03/canapea-nicoline-italia-homeitaly-aura_0002_aura3.jpg",price:"5000 Lei" },
{ nume: "Masă Marble Luxe", categorie: "bucatarie", imagine: "https://www.homeitaly.md/wp-content/uploads/2023/05/masa-cattelan-italia-homeitaly-ATRIUM-Wood_0001_9d4f1262-3db8-4dde-9e1d-e3a35382a5f2.jpg",price: "5000 Lei" } ,
{ nume: " Dulap Dualis", categorie: "dormitor", imagine: "https://mobilaideal.ro/image/cache/catalog/produse/vento/dressing/dressing-hera-wenge-123cm/dressing-hera-wenge-123cm-1-900x900.jpg",price: "5000 Lei" },
{ nume: "Bucătărie Urban Grey  ", categorie: "bucatarie", imagine: "https://bigshop.md/_next/image?url=https%3A%2F%2Fadmin.bigshop.md%2F%2Fstorage%2F3910488%2Fconversions%2FlxtgMoLoQz-small.jpg&w=320&q=72",price: "5000 Lei" },
{ nume: "Comoda „Elegance”  ", categorie: "comod", imagine: "https://bigshop.md/_next/image?url=https%3A%2F%2Fadmin.bigshop.md%2Fstorage%2F4154912%2Ftumbe-tv.jpg&w=1400&q=72",price:"5000 Lei" },
{ nume: "Antreu Harmony ", categorie: "antreuri", imagine: "https://icam.md/storage/products/1015/600-662923b2ba6d1_e07a5ac97a138e8e65113bf6b7814a9e.jpg",price:"5000 Lei" },
{ nume: "Antreu Wood Entry ", categorie: "antreuri", imagine: "https://smadshop.md/image/cache/product/mebel/prihozhie/modern/prihozhaya-modern-solo-grey-craft-oak-750x750.jpg",price:"5000 Lei" },
{ nume: "Antreu Urban Wood ", categorie: "antreuri", imagine: "https://icam.md/storage/products/1018/1290-6629288fa336d_5199e51e633fcddc22995a4d660fbeb3.jpg",price:"5000 Lei" },
{ nume: "Antreu Mirror Line ", categorie: "antreuri", imagine: "https://icam.md/storage/products/1017/1290-6629274a1b46a_fae049dce0776845cf9842f66b5e46b9.jpg",price:"5000 Lei" },
{ nume: "Antreu Minimal Line ", categorie: "antreuri", imagine: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK3E8rKHKW2drSc1etBQ6I6n7ZVc7WuGCgBoKZNpFgzg&s",price:"5000 Lei" },
{ nume: "Antreu Linea Chic  ", categorie: "antreuri", imagine: "https://relaxe.md/files/products/xl/259561c5-dbde-486e-af72-62f26a54f220.jpg", price:"5000 Lei" },
{ nume: "Antreu Nordic Line  ", categorie: "antreuri", imagine: "https://andronilex.md/wp-content/uploads/2023/10/antreu0hj-1.jpg",price: "5000 Lei" },
{ nume: "Antreu Slim Line", categorie: "antreuri", imagine: "https://i.pinimg.com/1200x/ac/c9/46/acc946a5471646288934c7a0bb15ed8a.jpg", price:"5000 Lei" },
{ nume: "Antreu Soft Brown ", categorie: "antreuri", imagine: "https://i.pinimg.com/736x/9a/a8/0d/9aa80db3f61ef9f064f76a5bda3432db.jpg", price:"5000 Lei" },
{ nume: "Antreu Dark Elegance ", categorie: "antreuri", imagine: "https://i.pinimg.com/736x/b4/52/28/b4522888f8b6c6ad70f8ef35b022f963.jpg",price: "5000 Lei" },
{ nume: "Canapea Velvet Puff ", categorie: "canapea", imagine: "https://i.pinimg.com/1200x/de/b9/aa/deb9aa100cbb2714963ab73780155781.jpg", price:"5000 Lei" },
{ nume: "Canapea Ivory Dream ", categorie: "canapea", imagine: "https://i.pinimg.com/1200x/21/c7/46/21c7464dce7328c052726dd592f2c7ad.jpg", price:"5000 Lei" },
{ nume: "Canapea Sapphire ", categorie: "canapea", imagine: "https://sofacollection.ru/wp-content/uploads/2024/05/interer-s-sinim-divanom-01.jpeg",price: "5000 Lei" },
{ nume: "Canapea Golden Elegance ", categorie: "canapea", imagine: "https://i.pinimg.com/736x/93/7b/04/937b049e32e50a577168fc4a0af4be8e.jpg",price: "5000 Lei" },
{ nume: "Canapea Emerald Luxe ", categorie: "canapea", imagine: "https://i.pinimg.com/1200x/06/5e/b5/065eb5bb8b89b7ab4458cec332056e12.jpg",price: "5000 Lei" },
{ nume: "Canapea Blush Harmony ", categorie: "canapea", imagine: "https://i.pinimg.com/736x/ae/8c/e0/ae8ce0b43a88dc29e75fb469919f0bba.jpg",price: "5000 Lei" },
{ nume: "Canapea Mono Chic ", categorie: "canapea", imagine: "https://i.pinimg.com/736x/c9/57/e9/c957e9fa8acf0b421195cb568f9a2204.jpg",price: "5000 Lei" },
{ nume: "Canapea Passion ", categorie: "canapea", imagine: "https://i.pinimg.com/736x/03/08/04/0308047f8141fe73b5532b95d5173342.jpg",price: "5000 Lei" },
{ nume: "Canapea Noir Accent ", categorie: "canapea", imagine: "https://i.pinimg.com/1200x/2d/1e/e1/2d1ee17078ccb7be3cd919dedfdeee90.jpg",price: "5000 Lei" },
{ nume: "Bucătărie Noir Island ", categorie: "bucatarie", imagine: "https://i.pinimg.com/1200x/0d/6c/79/0d6c79d37840b0795c218aa4c7d453de.jpg",price: "5000 Lei" },
{ nume: "Bucătărie Walnut Elegance ", categorie: "bucatarie", imagine: "https://i.pinimg.com/1200x/33/0f/05/330f05d7e3e15094449ce1673cea743b.jpg",price: "5000 Lei" },
{ nume: "Bucătărie Pearl Glow ", categorie: "bucatarie", imagine: "https://i.pinimg.com/1200x/5c/3f/ce/5c3fce95d8b1375bed02b5fa952c991e.jpg",price: "5000 Lei" },
{ nume: "Bucătărie Marble Elite ", categorie: "bucatarie", imagine: "https://i.pinimg.com/736x/2c/b5/0f/2cb50fd08179a8ec826a91e42ec94cc3.jpg",price: "5000 Lei" },
{ nume: "Bucătărie Champagne Luxe ", categorie: "bucatarie", imagine: "https://i.pinimg.com/736x/6e/4a/3b/6e4a3b7f67adde20d9bf4b8fb0897b05.jpg",price: "5000 Lei" },
{ nume: "Bucătărie Walnut Glow ", categorie: "bucatarie", imagine: "https://i.pinimg.com/1200x/0d/48/7b/0d487bd39a27a88a91f2db1e999ce3a3.jpg",price: "5000 Lei" },
{ nume: "Bucătărie Wood Shadow ", categorie: "bucatarie", imagine: "https://i.pinimg.com/1200x/df/54/bd/df54bd2b3e8fe9cf1cbbb704f16d4484.jpg",price: "5000 Lei" },
{ nume: "Bucătărie Modern Crystal ", categorie: "bucatarie", imagine: "https://i.pinimg.com/1200x/81/c9/7e/81c97e0838889c1681ae1099c3064eda.jpg",price: "5000 Lei" },
{ nume: "Pat Soft Haven", categorie: "pat", imagine: "https://i.pinimg.com/736x/ab/48/d8/ab48d87fadc2597218bcad7010c25af0.jpg" ,price: "5000 Lei"},
{ nume: "Pat Luxe Glow  ", categorie: "pat", imagine: "https://i.pinimg.com/736x/22/a2/13/22a213976e262be71edcea351398b81b.jpg" ,price: "5000 Lei"},
{ nume: "Pat Walnut Glow ", categorie: "pat", imagine: "https://i.pinimg.com/736x/e3/c6/f3/e3c6f336ce31595a87c78e5abf149dd2.jpg",price: "5000 Lei" },
{ nume: "Pat Shadow Luxe ", categorie: "pat", imagine: "https://i.pinimg.com/1200x/8e/0c/ad/8e0cad5c201241d80ad86fec5257d75d.jpg",price: "5000 Lei" },
{ nume: "Pat Golden Line ", categorie: "pat", imagine: "https://i.pinimg.com/736x/00/66/7c/00667c5d863c4aea610eadff80da0221.jpg" ,price: "5000 Lei"},
{ nume: "Pat Soft Panel ", categorie: "pat", imagine: "https://i.pinimg.com/736x/f9/23/7b/f9237b70b2d7ed6d050bef2ff0a7a952.jpg",price: "5000 Lei" },
{ nume: "Pat Luxe Accent ", categorie: "pat", imagine: "https://i.pinimg.com/736x/ce/e2/f8/cee2f8088d5aabbcecce83651d17e7d1.jpg",price:"5000 Lei" },
{ nume: "Pat Opulent Dream ", categorie: "pat", imagine: "https://i.pinimg.com/736x/0d/b6/d7/0db6d75f54531606e5a5d163cd741087.jpg",price: "5000 Lei" },
{ nume: "Pat Ice Elegance ", categorie: "pat", imagine: "https://i.pinimg.com/736x/d3/02/87/d302878780d1650ff7660a241fe18b0e.jpg",price: "5000 Lei" },
{ nume: "Comoda „Scandi Luxe” ", categorie: "comod", imagine: "https://i.pinimg.com/1200x/d9/9f/15/d99f1532ec21f516c733b54d407213f3.jpg",price:"5000 Lei" },
{ nume: "Urban Wood Console ", categorie: "comod", imagine: "https://i.pinimg.com/736x/93/c5/52/93c552094b89a277e59b9bb6f2da3f4b.jpg",price: "5000 Lei" },
{ nume: "Arctic TV Console ", categorie: "comod", imagine: "https://i.pinimg.com/1200x/fa/89/e3/fa89e332a5ea69c81b648e5ecabd371b.jpg" ,price: "5000 Lei"},
{ nume: "Beige Harmony TV Stand", categorie: "comod", imagine: "https://i.pinimg.com/736x/5e/95/0d/5e950d8c041f62a33cd269637f2203d9.jpg",price: "5000 Lei" },
{ nume: "Comodă Linea ", categorie: "comod", imagine: "https://i.pinimg.com/736x/75/f4/da/75f4dabf129c78f60b04bc7ae7bd1401.jpg",price: "5000 Lei" },
{ nume: "Comodă Onyx ", categorie: "comod", imagine: "https://i.pinimg.com/736x/44/90/9f/44909fc3c8646b7e0ed25cf7bfbdbf84.jpg",price: "5000 Lei" },
{ nume: "Comodă Parisienne ", categorie: "comod", imagine: "https://i.pinimg.com/1200x/8d/46/a4/8d46a414fba773aca7559cb53767cef0.jpg",price: "5000 Lei" },
{ nume: "Comodă Walnut ", categorie: "comod", imagine: "https://i.pinimg.com/736x/e8/96/b9/e896b9ed1266f7d7a5dbb6bab7ae3181.jpg",price: "5000 Lei" },
{ nume: "Comodă Aurum ", categorie: "comod", imagine: "https://i.pinimg.com/736x/21/74/ed/2174ed866c32d750b3043e2dbaf2ef44.jpg",price: "5000 Lei" },
{ nume: "Pat Junior Rose ", categorie: "pentru copii", imagine: "https://bigshop.md/_next/image?url=https%3A%2F%2Fadmin.bigshop.md%2Fstorage%2F4264995%2Fconversions%2Fgtlv3nwbi9-original.jpg&w=1080&q=75",price: "5000 Lei"},
{ nume: "Pat Bambi", categorie: "pentru copii", imagine: "https://bigshop.md/_next/image?url=https%3A%2F%2Fadmin.bigshop.md%2Fstorage%2F4255319%2Fconversions%2FvzgC1GsP4b-original.jpg&w=1080&q=75",price: "5000 Lei"},
{ nume: "Birou Smart Kids ", categorie: "pentru copii", imagine: "https://bigshop.md/_next/image?url=https%3A%2F%2Fadmin.bigshop.md%2Fstorage%2F4014319%2Fconversions%2FcyIHq5JMLf-original.jpg&w=1080&q=75",price: "5000 Lei"},
{ nume: "Masă Joacă Toddler ", categorie: "pentru copii", imagine: "https://bigshop.md/_next/image?url=https%3A%2F%2Fadmin.bigshop.md%2Fstorage%2F4090233%2Fconversions%2FfVONXQAqUl-original.jpg&w=1080&q=75",price: "5000 Lei"},
{ nume: "Comodă Nori ", categorie: "pentru copii", imagine: "https://bigshop.md/_next/image?url=https%3A%2F%2Fadmin.bigshop.md%2Fstorage%2F4107105%2Fconversions%2FPmM20r4gYp-original.jpg&w=1080&q=75",price: "5000 Lei"},
{ nume: "Canapea Fluffy ", categorie: "pentru copii", imagine: "https://bigshop.md/_next/image?url=https%3A%2F%2Fadmin.bigshop.md%2Fstorage%2F3365416%2Fconversions%2FOWR70bQM2M-original.jpg&w=1080&q=75",price: "5000 Lei"},
{ nume: "Scaun Koala ", categorie: "pentru copii", imagine: "https://bigshop.md/_next/image?url=https%3A%2F%2Fadmin.bigshop.md%2Fstorage%2F4209928%2Fconversions%2FwZksXmXlE0-original.jpg&w=1080&q=75",price: "5000 Lei"},
{ nume: "Set Mobilier Youth", categorie: "pentru copii", imagine: "https://bigshop.md/_next/image?url=https%3A%2F%2Fadmin.bigshop.md%2Fstorage%2F4226275%2Fconversions%2FzHzWmFm6kI-original.jpg&w=1080&q=75",price: "5000 Lei"},
{ nume: "Pat Duo Kids ", categorie: "pentru copii", imagine: "https://bigshop.md/_next/image?url=https%3A%2F%2Fadmin.bigshop.md%2Fstorage%2F4270487%2Fconversions%2Fu73V7vadBd-original.jpg&w=1080&q=75",price: "5000 Lei"},
{ nume: "Pătuț Noa ", categorie: "pentru copii", imagine: "https://bigshop.md/_next/image?url=https%3A%2F%2Fadmin.bigshop.md%2Fstorage%2F3919663%2Fconversions%2F9mQeccVmkG-original.jpg&w=1080&q=75",price: "5000 Lei"},
{ nume: "Dulap Beige Luxe ", categorie: "dormitor", imagine: "https://i.pinimg.com/1200x/bb/d2/1b/bbd21b9a1ad768b37e0ad614fbb7c8bf.jpg" ,price: "5000 Lei"},
{ nume: "Dulap Eclipse ", categorie: "dormitor", imagine: "https://i.pinimg.com/1200x/26/5d/ec/265dec7bdfce463e93846513a17d7d3f.jpg" ,price: "5000 Lei"},
{ nume: "Dulap PureLine ", categorie: "dormitor", imagine: "https://i.pinimg.com/1200x/cb/ec/22/cbec22b162d0493b92e3c78bbcbc42db.jpg" ,price: "5000 Lei"},
{ nume: " Dulap Serenity", categorie: "dormitor", imagine: "https://i.pinimg.com/736x/f5/43/81/f54381b91d02064f8808c686cab97f97.jpg",price: "5000 Lei" },
{ nume: "Dulap Reflecta ", categorie: "dormitor", imagine: "https://i.pinimg.com/736x/3b/03/1e/3b031ed6c27319987364252caefc3962.jpg",price: "5000 Lei" },
{ nume: "Dulap Graphite ", categorie: "dormitor", imagine: "https://i.pinimg.com/736x/f4/ce/21/f4ce211d415b52609927c0d6904ae441.jpg",price: "5000 Lei" },
 { nume: "Dulap Balance ", categorie: "dormitor", imagine: "https://i.pinimg.com/736x/bd/bf/ff/bdbfffa18b9457aba10204effa4fae83.jpg" ,price: "5000 Lei"},
{ nume: "Dulap Lumina ", categorie: "dormitor", imagine: "https://i.pinimg.com/1200x/80/6c/a3/806ca3072f1a77e19e5e6f420564bc27.jpg" ,price: "5000 Lei"},
 ];

document.addEventListener("click", (e) => {

  const card = e.target.closest(".card");
  if (!card) return;

  const img = card.querySelector("img")?.src;

  const name =
    card.querySelector("h3")?.textContent ||
    card.querySelector(".product-name")?.textContent;

  const price =
    card.querySelector("p")?.textContent ||
    card.querySelector(".price")?.textContent;

  const product = { nume: name, imagine: img, price: price };

  if (e.target.classList.contains("add-cart")) {
    addToCart(product);
  }

  if (e.target.classList.contains("add-fav")) {
    addToFavorites(product);
  }

});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("close-btn")) {
    closeAll();
  }
});
  let categorieSelectata = "";
  let textCautare = "";

  const searchInput = document.getElementById("search");

  searchInput.addEventListener("input", (e) => {
    textCautare = e.target.value.toLowerCase().trim();
    filtreazaTot();
  });

  function afiseazaProduse(lista) {
    const container = document.getElementById("filtered-products");

    container.innerHTML = lista.map((prod) => `
      <div class="card">
        <img src="${prod.imagine}">
        <h3>${prod.nume}</h3>
        <p>${prod.price}</p>
        <button class="add-cart">Adaugă în coș</button>
        <button class="add-fav">♡ Favorite</button>
      </div>
    `).join("");
  }

    attachProductEvents();
}

document.querySelectorAll(".filter-bar button").forEach(btn => {
  btn.addEventListener("click", () => {
    categorieSelectata = btn.dataset.filter;
    filtreazaTot();
  });
});

  function filtreazaTot() {
  
    if (categorieSelectata === "") {
      afiseazaProduse([]);
      return;
    }

    let rezultate = toateProdusele;

    rezultate = rezultate.filter(p => p.categorie === categorieSelectata);

    if (textCautare) {
      rezultate = rezultate.filter(p =>
        p.nume.toLowerCase().includes(textCautare)
      );
    }
     const container = document.getElementById("filtered-products");
  container.style.display = "flex"; 
    afiseazaProduse(rezultate);
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const cartDropdown = document.getElementById("cart-dropdown");
  const favDropdown = document.getElementById("fav-dropdown");
  const cartCount = document.getElementById("cart-count");
  const favCount = document.getElementById("fav-count");
  const overlay = document.getElementById("overlay");
const filterBar = document.querySelector(".filter-bar");

  function saveData() {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }

  function updateUI() {

    cartCount.textContent = cart.length;
    favCount.textContent = favorites.length;

    cartDropdown.innerHTML = `
      <div class="dropdown-header">
        <h3>Coș</h3>
        <span class="close-btn" id="close-cart">✖</span>
      </div>
    `;

    cart.forEach((item, index) => {
      cartDropdown.innerHTML += `
        <div class="dropdown-item">
          <img src="${item.img}">
          <div class="dropdown-info">
            <p>${item.name}</p>
            <span>${item.price}</span>

            <button class="order-btn" data-type="cart" data-index="${index}">
              Comandă
            </button>

            <button class="delete-btn" data-type="cart" data-index="${index}">
              Șterge
            </button>
          </div>
        </div>
      `;
    });

    favDropdown.innerHTML = `
      <div class="dropdown-header">
        <h3>Favorite</h3>
        <span class="close-btn" id="close-fav">✖</span>
      </div>
    `;

    favorites.forEach((item, index) => {
      favDropdown.innerHTML += `
        <div class="dropdown-item">
          <img src="${item.img}">
          <div class="dropdown-info">
            <p>${item.name}</p>
            <span>${item.price}</span>

            <button class="order-btn" data-type="fav" data-index="${index}">
              Comandă
            </button>

            <button class="delete-btn" data-type="fav" data-index="${index}">
              Șterge
            </button>
          </div>
        </div>
      `;
    });

    document.querySelectorAll(".delete-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const type = btn.dataset.type;
        const index = btn.dataset.index;

        if (type === "cart") cart.splice(index, 1);
        else favorites.splice(index, 1);

        saveData();
        updateUI();
      });
    });

    document.querySelectorAll(".order-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const type = btn.dataset.type;
        const index = btn.dataset.index;
        const product = type === "cart" ? cart[index] : favorites[index];
        openOrderModal(product);
      });
    });
  }

  function addToCart(product) {
    if (!cart.some(p => p.name === product.nume)) {
      cart.push({
        name: product.nume,
        price: product.price,
        img: product.imagine
      });
      saveData();
      updateUI();
    }
  }

  function addToFavorites(product) {
    if (!favorites.some(p => p.name === product.nume)) {
      favorites.push({
        name: product.nume,
        price: product.price,
        img: product.imagine
      });
      saveData();
      updateUI();
    }
  }

  function closeAll() {
    overlay.classList.remove("show");
    cartDropdown.classList.remove("show");
    favDropdown.classList.remove("show");
  }

  document.getElementById("cart-icon").addEventListener("click", () => {
    overlay.classList.add("show");
    cartDropdown.classList.add("show");
  });

  document.getElementById("fav-icon").addEventListener("click", () => {
    overlay.classList.add("show");
    favDropdown.classList.add("show");
  });

  overlay.addEventListener("click", closeAll);

  function openOrderModal(product) {
    const modal = document.createElement("div");
    modal.classList.add("dropdown", "show");

    modal.innerHTML = `
      <div class="dropdown-header">
        <h3>Comandă produs</h3>
        <span class="close-btn">✖</span>
      </div>

      <div style="text-align:center">
        <img src="${product.img}" style="width:150px">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
      </div>
    `;

    document.body.appendChild(modal);
    overlay.classList.add("show");

    modal.querySelector(".close-btn").addEventListener("click", () => {
      modal.remove();
      overlay.classList.remove("show");
    });
  }
  updateUI();
});