// Fade animation
let elements=document.querySelectorAll(".fade");
let observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});
elements.forEach(el=>observer.observe(el));

// CART SYSTEM
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartUI(){
let count=document.getElementById("cart-count");
if(count) count.innerText=cart.length;

let total=0;
let itemsHTML="";
cart.forEach((item,i)=>{
total+=item.price;
itemsHTML+=`
<div class="flex justify-between mb-3">
<span>${item.name}</span>
<span>₹${item.price}</span>
</div>`;
});
if(document.getElementById("cartItems"))
document.getElementById("cartItems").innerHTML=itemsHTML;

if(document.getElementById("cartTotal"))
document.getElementById("cartTotal").innerText=total;

localStorage.setItem("cart",JSON.stringify(cart));
}

function addToCart(name,price){
cart.push({name,price});
updateCartUI();
}

function toggleCart(){
document.getElementById("cartDrawer").classList.toggle("open");
}

updateCartUI();

// PRODUCT PAGE DYNAMIC LOAD
const products = {
1:{
name:"Acacia Dining Table",
price:25000,
image:"https://images.unsplash.com/photo-1616628182507-3c3b0e9f7e79?auto=format&fit=crop&w=1000&q=80"
},
2:{
name:"Iron Console",
price:18000,
image:"https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?auto=format&fit=crop&w=1000&q=80"
},
3:{
name:"Mango Cabinet",
price:30000,
image:"https://images.unsplash.com/photo-1598300053431-9bdf60d5dfc3?auto=format&fit=crop&w=1000&q=80"
}
};

function loadProduct(){
const params=new URLSearchParams(window.location.search);
const id=params.get("id");
if(products[id]){
document.getElementById("productName").innerText=products[id].name;
document.getElementById("productPrice").innerText="₹"+products[id].price;
document.getElementById("productImage").src=products[id].image;

document.getElementById("addBtn").onclick=function(){
addToCart(products[id].name,products[id].price);
};
}
}
