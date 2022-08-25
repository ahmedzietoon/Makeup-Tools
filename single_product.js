const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString); //what's after ?..
const productID = urlParams.get("product_id"); //after ?product_type=..

const getProducts = async () => {
  const response = await fetch(
    `http://makeup-api.herokuapp.com/api/v1/products/${productID}.json`
  );
  return await response.json();
};
//#single product page
const getProductById = async () => {
  let product = await getProducts();
  return product;
};
getProductById();

let singleProduct = document.querySelector("#single_product");
const getProductInfo = async () => {
  let product = await getProductById();
  document.title = product.name;
  let colorsHtml = "";
  product.product_colors.forEach((color) => {
    colorsHtml += `<div class="color" style="background-color:${color.hex_value}"></div>`;
  });
  singleProduct.innerHTML = `<div><h2 class=product_name">${
    product.name
  }</h2></div>
    <div class="product_image"><img src="${product.image_link}" alt="${
    product.name
  }"/></div>
    <div class="product_info">
        <h3 class="product_type">${product.product_type}</h3>
        <div class="colors">${colorsHtml}</div>
        <h3 class="product_price">price: ${product.price || "Not Available"}${
    product.price_sign || ""
  }</h3>
        <h3 class="product_brand">brand: ${product.brand}</h3>
        <h4 class="product_description">${product.description}</h4>
    </div>`;
};
getProductInfo();


let logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  document.location.href = "index.html";
});