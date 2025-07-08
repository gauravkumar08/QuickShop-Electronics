const cart = JSON.parse(localStorage.getItem('cart')) || [];

let itemCount = 0;
let totalAmount = 0;

cart.forEach(item => {
  const quantity = item.quantity || 1;
  itemCount += quantity;
  totalAmount += (item.price || 0) * quantity;
});

document.getElementById('item-count').textContent = itemCount;
document.getElementById('total-amount').textContent = totalAmount.toFixed(2);

paypal.Buttons({
  createOrder: function (data, actions) {
    return actions.order.create({
      purchase_units: [{
        amount: {
          value: totalAmount.toFixed(2)
        }
      }]
    });
  },
  onApprove: function (data, actions) {
    return actions.order.capture().then(function (details) {
      alert('✅ Payment completed by ' + details.payer.name.given_name);
      localStorage.removeItem('cart');
      window.location.href = '/';
    });
  }
}).render('#paypal-button-container');
