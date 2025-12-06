document.addEventListener('DOMContentLoaded', () => {
  const totalSalesElem = document.getElementById('total-sales');
  const totalPurchaseElem = document.getElementById('total-purchase');
  const profitLossElem = document.getElementById('profit-loss');

  // Simulasi ambil data transaksi dari localStorage / backend
  const dummyData = [
    { tipe: 'Penjualan', jumlah: 500000 },
    { tipe: 'Pembelian', jumlah: 300000 },
    { tipe: 'Penjualan', jumlah: 700000 },
    { tipe: 'Pembelian', jumlah: 200000 },
  ];

  const totalPenjualan = dummyData
    .filter(t => t.tipe === 'Penjualan')
    .reduce((sum, t) => sum + t.jumlah, 0);

  const totalPembelian = dummyData
    .filter(t => t.tipe === 'Pembelian')
    .reduce((sum, t) => sum + t.jumlah, 0);

  const labaRugi = totalPenjualan - totalPembelian;

  totalSalesElem.textContent = `Rp ${totalPenjualan.toLocaleString('id-ID')}`;
  totalPurchaseElem.textContent = `Rp ${totalPembelian.toLocaleString('id-ID')}`;
  profitLossElem.textContent = `Rp ${labaRugi.toLocaleString('id-ID')}`;
});
