function getData() {
  fetch("https://heidivincentz.com/silfenwp/wp-json/wp/v2/posts")
    .then((response) => response.json())
    .then(showBags);
}

function showBags(bags) {
  //   console.log(bags);
}

const url = "https://heidivincentz.com/silfenwp/wp-json/wp/v2/bag";

fetch(url)
  .then(function (res) {
    return res.json();
  })

  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  //   console.log(data);

  data.forEach(function (item) {
    showBags(item);
  });
}

// TEMPLATE

/* <section class="section2"> 
<div class="explore"> 
<h2>Prom collection is here</h2>
<button>Explore</button>
</div>
</section>
<template id="bag_list_template2"> 
<section id="bag_list2"> 
<section class="bag">
<figure>
  <a href="product.html">
  <img src="img/placeholder.png" alt="bag">
</figure>
<h3>Bag name</h3>
</a>
</section> */

function showBag(bag) {
  console.log(bag);

  // GRAB BOTH TEMPLATES

  const template = document.querySelector("#bag_list_template").content;
  const template2 = document.querySelector("#bag_list_template2").content;

  // CLONE
  const copy = template.cloneNode(true);
  const copy2 = template2.cloneNode(true);

  // CHANGE CONTENT
  // copy.querySelector(
  //   ".placeholderimg"
  // ).src = `https://heidivincentz.com/silfenwp/wp-content/uploads/2021/11/BibbiIcymorningFRONT.jpeg`;

  copy.querySelector("h3").textContent = bag.prom_name;

  // GRAB PARENTS
  const parent = document.querySelector("main");

  // APPEND
  parent.appendChild(copy);
}
