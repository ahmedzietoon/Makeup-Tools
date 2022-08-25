//#get products according to product type
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString); //what's after ?..
const productType = urlParams.get("product_type"); //after ?product_type=..

const getProducts = async () => {
  const response = await fetch(
    `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${productType}`
  );
  return await response.json();
};

//#show products according to product type
let productsHtml = "";
const productsContainer = document.querySelector("#products");
const products = async () => {
  let allProducts = await getProducts();
  allProducts.forEach((product) => {
    productsHtml += `<a href="singleProduct.html?product_id=${product.id}"><div>
    <div><img src="${product.image_link}" alt="${product.name}" /></div>
    <p>${product.brand}</p>
    <p>${product.name}</p>
    <p><b>${product.price || "Not Available"} ${
      product.price_sign || "$"
    }</b></p>
    </div></a>`;
  });
  productsContainer.innerHTML = productsHtml;
};
products();

//#select boxes genres and brands options
let productsGenres = `<option value="all">all</option>`;
let productsBrands = `<option value="all">all</option>`;
const selectGenre = document.querySelector("#select_genre");
const selectBrand = document.querySelector("#select_brand");

const select = async () => {
  let allProducts = await getProducts();
  let tagList = new Set();
  let brands = new Set();
  allProducts.forEach((product) => {
    for (let i = 0; i < product.tag_list.length; i++) {
      tagList.add(product.tag_list[i]);
    }
    brands.add(product.brand);
  });
  tagList.forEach((tag) => {
    productsGenres += `<option value="${tag}">${tag}</option>`;
  });
  brands.forEach((brand) => {
    productsBrands += `<option value="${brand}">${brand}</option>`;
  });
  selectGenre.innerHTML = productsGenres;
  selectBrand.innerHTML = productsBrands;
};
select();

//@genre select change products
const selectGenreChange = async () => {
  let allProducts = await getProducts();
  selectGenre.addEventListener("change", () => {
    let productsGenresHtml = "";
    if (selectGenre.value !== "all") {
      productsContainer.innerHTML = "";
      let genre = selectGenre.value;
      let productsOfGenre = allProducts.filter((product) => {
        if (product.tag_list.includes(genre)) {
          return product;
        }
      });
      productsOfGenre.forEach((product) => {
        productsGenresHtml += `<a href="singleProduct.html?product_id=${
          product.id
        }"><div>
        <div><img src="${product.image_link}" alt="${product.name}" /></div>
        <p>${product.brand}</p>
        <p>${product.name}</p>
        <p><b>${product.price || "Not Available"} ${
          product.price_sign || "$"
        }</b></p>
        </div></a>`;
      });
      productsContainer.innerHTML = productsGenresHtml;
    } else {
      productsContainer.innerHTML = productsHtml;
    }
  });
};
selectGenreChange();

//@brand select change products
const selectBrandChange = async () => {
  let allProducts = await getProducts();
  selectBrand.addEventListener("change", () => {
    let productsBrandsHtml = "";
    if (selectBrand.value !== "all") {
      productsContainer.innerHTML = "";
      let brand = selectBrand.value;
      let productsOfBrand = allProducts.filter((product) => {
        return product.brand == brand;
      });
      productsOfBrand.forEach((product) => {
        productsBrandsHtml += `<a href="singleProduct.html?product_id=${
          product.id
        }"><div>
        <div><img src="${product.image_link}" alt="${product.name}" /></div>
        <p>${product.brand}</p>
        <p>${product.name}</p>
        <p><b>${product.price || "Not Available"} ${
          product.price_sign || "$"
        }</b></p>
        </div></a>`;
      });
      productsContainer.innerHTML = productsBrandsHtml;
    } else {
      productsContainer.innerHTML = productsHtml;
    }
  });
};
selectBrandChange();

let logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  document.location.href = "index.html";
});
