let categoriesHtml = "";
let categoriesContainer = document.querySelector("#categories");

const categories = [
  {
    name: "lip_liner",
    img: "http://cdn.shopify.com/s/files/1/1919/5103/products/lipliner_group.jpg?v=1648463059",
  },
  {
    name: "lipstick",
    img: "https://m.media-amazon.com/images/I/51SOuIPxfML.jpg",
  },
  {
    name: "foundation",
    img: "https://m.media-amazon.com/images/I/61icpmJUoZL.jpg",
  },
  {
    name: "eyeliner",
    img: "https://m.media-amazon.com/images/I/41bqg1xUhmS.jpg",
  },
  {
    name: "eyeshadow",
    img: "https://cdn.shopify.com/s/files/1/0066/8562/products/PROPALLET8-ultimate-pro-palette-35-count-eyeshadow-palette-open-compact-image_1200x.jpg?v=1644601515",
  },
  {
    name: "blush",
    img: "https://m.media-amazon.com/images/I/31YySZTn4KL._AC_SY1000_.jpg",
  },
  {
    name: "bronzer",
    img: "https://static.beautytocare.com/media/catalog/product/cache/global/image/650x650/85e4522595efc69f496374d01ef2bf13/n/y/nyx-pro-makeup-matte-bronzer-deep-tan-9-5g.jpg",
  },
  {
    name: "mascara",
    img: "https://m.media-amazon.com/images/I/5169QCd9uSL.jpg",
  },
  {
    name: "eyebrow",
    img: "https://static.beautytocare.com/media/catalog/product/cache/global/image/650x650/85e4522595efc69f496374d01ef2bf13/e/s/essence-the-eyebrow-pen-01-blonde-1-1ml.jpg",
  },
  {
    name: "nail_polish",
    img: "https://static.beautytocare.com/media/catalog/product/cache/global/image/650x650/85e4522595efc69f496374d01ef2bf13/e/s/essie-enamel-nail-polish-37-lilacism-13-5ml.jpg",
  },
];
categories.forEach((category) => {
  categoriesHtml += `<a href="products.html?product_type=${category.name}"><div><div><img src="${category.img}" alt="${category.name}" class="category-img"></div><p class="category-name">${category.name}</p></div></a>`;
});
categoriesContainer.innerHTML = categoriesHtml;
let logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  document.location.href = "index.html";
});
