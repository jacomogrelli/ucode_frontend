"use strict"

let filtersArr = {
  size: ""
}

let products = [
  {
    "id": 1,
    "name": "PECOS BOOTS 8159",
    "gender": "male",
    "description": "A classic Red Wing design from our Western boot collection. Originally intended for Cowboys in the American Southwest, it quickly found its way onto oil rigs, farms and construction sites as a popular all-rounder. With the Pecos' distinctive pull-on entry and side seam shaft and featuring our",
    "price": 279,
    "sizes": [8, 9, 10, 11],
    "img": "./assets/images/pecos_8159/8159_front.png",
    "status": true
  },
  {
    "id": 2,
    "name": "BLACKSMITH BOOTS 3343",
    "gender": "male",
    "description": "The 3343 Blacksmith Boot in our supple Copper Rough & Tough Leather features a Vibram mini-lug outsole with triple stitch detail & Goodyear Welt construction. The Blacksmith was originally designed for outdoor use but it also looks great for modern city life. Made in the USA.",
    "price": 289,
    "sizes": [9, 10, 11],
    "img": "./assets/images/blacksmith_3343/R0F8461.jpg",
    "status": true
  },
  {
    "id": 3,
    "name": "ENGINEER BOOTS 2990",
    "gender": "male",
    "description": "The 2990 Engineer Boot has minimal stitching to provide extra strength and durability. The boot was originally designed for railroad workers who needed to protect their feet from the hot embers and coals in the locomotive carriages of America's great railways. Made in the USA.",
    "price": 179,
    "sizes": [8],
    "img": "./assets/images/engineer_2990/Red_Wing_Engineer_Boots_2990_front.jpeg",
    "status": true
  }
];


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
