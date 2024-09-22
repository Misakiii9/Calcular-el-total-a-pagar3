function calcularTotal() {
    
    let totalCompra = parseFloat(document.getElementById('totalCompra').value);
    
    
    if (isNaN(totalCompra) || totalCompra < 0) {
        document.getElementById('resultado').innerHTML = "Por favor, ingresa un valor válido para el total de la compra.";
        return;
    }

    // Calcular el descuento (15%)
    let descuento = totalCompra * 0.15;
    
    
    let totalPagar = totalCompra - descuento;

   
    document.getElementById('resultado').innerHTML = `
        <p>Descuento aplicado: $${descuento.toFixed(2)}</p>
        <p>Total a pagar: $${totalPagar.toFixed(2)}</p>
    `;
}