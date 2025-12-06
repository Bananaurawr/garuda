document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('price-checker-form');
  const result = document.getElementById('price-result');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const product = document.getElementById('product-name').value.trim();

    if (!product) return;

    // Simulasi hasil AI price checking
    const simulatedPrice = (Math.random() * 50000 + 20000).toFixed(0);
    result.innerHTML = `💰 Estimasi harga pasar untuk <strong>${product}</strong> adalah <strong>Rp ${parseInt(simulatedPrice).toLocaleString('id-ID')}</strong>`;
    
    form.reset();
  });
});
