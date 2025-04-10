$(document).ready(function () {
    window.addToCart = function (title) {
      const $li = $('<li class="list-group-item d-flex justify-content-between align-items-center"></li>').text(title);
      const $removeBtn = $('<button class="btn btn-sm btn-outline-danger">×</button>');
      
      $removeBtn.on('click', function () {
        $li.remove();
      });
      
      $li.append($removeBtn);
      $('#cart-items').append($li);
    };
  
    // Очищення кошика
    window.clearCart = function () {
      $('#cart-items').empty();
    };
  
    // Оформлення замовлення
    window.checkout = function () {
      if ($('#cart-items').children().length === 0) {
        alert('Кошик порожній!');
        return;
      }
  
      alert('Успішно замовлено!');
      clearCart();
    };
  });
  