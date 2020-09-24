"use strict"

let filtersArr = {
  size: ""
}




let get = (id) => document.querySelector(id);
let creat = (id) => document.createElement(id);

let pageReload = () => window.location.reload();

let catalogRender = () => {
  let catalog = get(".catalog");

  catalog.innerHTML = "";
  for (let i = 0; products[i]; i++) {
    if (products[i].status) {
      let col = creat("div");
      col.classList.add("col");
      col.innerHTML = `<div class="product"><div class="product-img"><a href="#">` +
        `<img src="${products[i].img}" alt="${products[i].name}"></a></div>` +
        `<p class="product-title"><a href="#">${products[i].name}</a></p>` +
        `<p class="product-desc">${products[i].description}</p>` +
        `<p class="product-price">Price: €${products[i].price}.00<a href="#"` +
        ` class="add-to-cart-btn"></a><iclass="fas fa-cart-plus"></i></div>`
      catalog.append(col);
    }
  }



}

catalogRender();
