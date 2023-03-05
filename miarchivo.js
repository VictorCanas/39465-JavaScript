//document.getElementByID nos ayuda a recibir los resultados input por el cliente del HTML
const productForm = document.getElementById("product-form");
const resultDiv = document.getElementById("result");

productForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevenir comportamiento por defecto

  const productName = document.getElementById("product-name").value;

  const productPrice = parseFloat(
    document.getElementById("product-price").value
  );
  const tax = parseFloat(document.getElementById("tax").value);
  const discount = parseFloat(document.getElementById("discount").value);

  // Algoritmo con Ciclo
  let totalPrice = productPrice;
  const percentValues = [tax, discount];
  for (let i = 0; i < percentValues.length; i++) {
    if (percentValues[i] > 0) {
      if (i === 0) {
        totalPrice += (productPrice * percentValues[i]) / 100;
      } else if (i === 1) {
        totalPrice -= (totalPrice * percentValues[i]) / 100;
      }
    }
  }

  //Provamos que recibimos los resultados
  console.log(productName);
  console.log(productPrice);
  console.log(tax);
  console.log(discount);
  console.log(totalPrice);

  resultDiv.innerHTML = `
        <p>Producto: ${productName}</p>
        <p>Precio Inicial: $${productPrice.toFixed(2)}</p>
        <p>Impuesto (${tax}%): $${((productPrice * tax) / 100).toFixed(2)}</p>
        <p>Descuento (${discount}%): -$${(totalPrice - productPrice).toFixed(
    2
  )}</p>
        <p>Total: $${totalPrice.toFixed(2)}</p>
    `;
});
