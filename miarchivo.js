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

  // Creamos un array con los valores de impuestos y descuentos
  const percentValues = [tax, discount];

  // Usamos el método filter para filtrar los valores mayores a 0
  const filteredValues = percentValues.filter((value) => value > 0);

  // Algoritmo con Ciclo y modificaciones
  let totalPrice = productPrice;
  totalPrice = filteredValues.reduce((accumulatedPrice, currentValue) => {
    if (currentValue === tax) {
      return accumulatedPrice + (productPrice * currentValue) / 100;
    } else if (currentValue === discount) {
      return accumulatedPrice - (accumulatedPrice * currentValue) / 100;
    }
  }, totalPrice);

  //Provamos que recibimos los resultados
  console.log(productName);
  console.log(productPrice);
  console.log(tax);
  console.log(discount);
  console.log(totalPrice);

  // Agregamos la implementación de uso de JSON y Storage
  const data = {
    productName: productName,
    productPrice: productPrice,
    tax: tax,
    discount: discount,
    totalPrice: totalPrice,
  };
  localStorage.setItem("data", JSON.stringify(data));
  const storedData = JSON.parse(localStorage.getItem("data"));
  console.log(storedData);

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
