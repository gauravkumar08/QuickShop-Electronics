document.addEventListener("DOMContentLoaded", () => {
  const productCatalog = document.getElementById("productCatalog");
  const searchBox = document.getElementById("search-box");

  let cart = JSON.parse(localStorage.getItem("quickshop-cart")) || [];

  const products = [
    {
      name: "OnePlus 11R 5G",
      price: 39999,
      image: "/images/one_plus.png"
    },
    {
      name: "Lenovo IdeaPad Slim 3",
      price: 53999,
      image: "/images/laptop.webp"
    },
    {
      name: "Titan Smart Watch",
      price: 8099,
      image: "/images/watch.webp"
    },
    {
      name: "Boult HeadPhone",
      price: 5499,
      image: "/images/headphone.webp"
    },
    {
      name: "Toshiba 215cm TV",
      price: 149999,
      image: "/images/tv.webp"
    }
  ];

  function renderProducts(filteredProducts = products) {
    productCatalog.innerHTML = "";

    filteredProducts.forEach(product => {
      const div = document.createElement("div");
      div.classList.add("product");

      div.innerHTML = `
        <div class="product-box">
          <img src="${product.image}" alt="${product.name}" class="product-image" />
          <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-bottom">
              <span class="product-price">₹${product.price}</span>
              <button class="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      `;

      const addBtn = div.querySelector(".add-to-cart-btn");
      addBtn.addEventListener("click", () => {
        cart.push(product);
        localStorage.setItem("quickshop-cart", JSON.stringify(cart));
        alert(`${product.name} added to cart!`);
      });

      productCatalog.appendChild(div);
    });
  }

  searchBox.addEventListener("input", () => {
    const keyword = searchBox.value.toLowerCase();
    const filtered = products.filter(p =>
      p.name.toLowerCase().includes(keyword) ||
      p.description.toLowerCase().includes(keyword)
    );
    renderProducts(filtered);
  });

  renderProducts();
});
