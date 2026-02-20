// CART SYSTEM
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, image) {
  cart.push({ name, price, image });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to Cart");
}

function loadCart() {
  let container = document.getElementById("cart-items");
  if (!container) return;

  container.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    container.innerHTML += `
      <div class="border p-4 flex justify-between">
        <div>
          <img src="${item.image}" width="80">
          <p>${item.name}</p>
        </div>
        <p>₹${item.price}</p>
      </div>
    `;
  });

  document.getElementById("total").innerText = "₹" + total;
}

// LIGHTBOX
function openLightbox(src) {
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// SIMPLE ADMIN LOGIN
function adminLogin() {
  let password = document.getElementById("admin-pass").value;
  if (password === "admin123") {
    document.getElementById("admin-panel").style.display = "block";
  } else {
    alert("Wrong Password");
  }
}
