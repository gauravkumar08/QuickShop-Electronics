document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.getElementById("cartItems");

  let cart = JSON.parse(localStorage.getItem("quickshop-cart")) || [];

  function renderCart() {
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
      return;
    }

    let total = 0;
    let html = '<ul class="cart-list">';

    cart.forEach((product, index) => {
      total += product.price;
      html += `
        <li class="cart-item">
          <strong>${product.name}</strong> – ₹${product.price}
          <button class="remove-btn" data-index="${index}" title="Remove">
            <img src="https://cdn-icons-png.flaticon.com/512/1345/1345823.png" alt="Remove" width="20" />
          </button>
        </li>
      `;
    });

    html += `</ul><h3>Total: ₹${total.toFixed(2)}</h3>`;
    html += `<a href="/checkout.html" class="button checkout-btn">Proceed to Checkout</a>`;

    cartItemsContainer.innerHTML = html;

    document.querySelectorAll(".remove-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {

        const button = e.currentTarget;
        const index = button.getAttribute("data-index");

        cart.splice(index, 1);
        localStorage.setItem("quickshop-cart", JSON.stringify(cart));
        renderCart();
      });
    });
  }

  renderCart();
});
