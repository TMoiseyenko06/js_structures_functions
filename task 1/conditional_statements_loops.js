//Not sure if this is what the assigment meant, but i couldnt think of another way to do it (I have some prior js experience)

let loginBtn = document.getElementById("login");
let username = document.getElementById("name");
let mainLogin = document.getElementById("loginMain");
let itemsH1 = document.getElementById("itemsName");
let itemsCard = document.getElementById("itemsCard");
let itemsP = document.getElementById("items");
let shoppingCart = document.getElementById("shopping");
let htmlString = "";
let total = 0;
let calculatePrice = document.getElementById("calculate");
let totalPrice = document.getElementById("total");

let loggedIn = false;
let avalibleProducts = [
  { name: "Soap", price: 5.99 },
  { name: "Shampoo", price: 10.99 },
  { name: "Conditioner", price: 12.99 },
];

const init = () => {
  itemsCard.style.display = "none";
};

const listItems = (products) => {
  for (let i = 0; i < products.length; i++) {
    htmlString += `
    <p>${i + 1}: ${products[i].name} Price: $${products[i].price}</p>
    <button class="btn btn-info text-white mb-3" id="btn-${i}">Add to Shopping Cart</button>
    `;
  }
  itemsP.innerHTML = htmlString;
  for (let i = 0; i < products.length; i++) {
    let button = document.getElementById(`btn-${i}`);

    button.addEventListener("click", (event) => {
      event.preventDefault();
      shoppingCart.innerHTML += `
      <div><h4>${products[i].name}</h4>
      <p>$${products[i].price}</p>
      </div>
      `;
      total += products[i].price;
    });
  }
};

loginBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let name = username.value;
  mainLogin.style.display = "none";
  itemsH1.innerText = `Welcome ${name}!`;
  itemsCard.style.display = "block";
  listItems(avalibleProducts);
});

calculatePrice.addEventListener("click", (event) => {
  event.preventDefault();
  totalPrice.innerHTML = `
  <h3 class="p-3">Total Price:</h3>
  <h4 class="ps-3">$${total.toFixed(2)}</h4>
  `;
});

init();
