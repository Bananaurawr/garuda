document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-transaksi');
  const tbody = document.querySelector('#tabel-transaksi tbody');
  const totalElem = document.getElementById('total');

  let transaksi = [];

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const tipe = document.getElementById('tipe').value;
    const deskripsi = document.getElementById('deskripsi').value;
    const jumlah = parseFloat(document.getElementById('jumlah').value);

    transaksi.push({ tipe, deskripsi, jumlah });
    form.reset();
    renderTable();
  });

  function renderTable() {
    tbody.innerHTML = '';
    let total = 0;

    transaksi.forEach((t, i) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${t.tipe}</td>
        <td>${t.deskripsi}</td>
        <td>${t.jumlah.toLocaleString('id-ID')}</td>
        <td>
            <button onclick="hapus(${i})" class="btn-icon" title="Hapus">
                <i class="fas fa-trash-alt"></i>
            </button>
        </td>

      `;
      tbody.appendChild(row);
      total += t.tipe === 'Penjualan' ? t.jumlah : -t.jumlah;
    });

    totalElem.textContent = `Total: Rp ${total.toLocaleString('id-ID')}`;
  }

  window.hapus = function(index) {
    transaksi.splice(index, 1);
    renderTable();
  };
});
