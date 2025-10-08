document.getElementById('regulaFalsiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form reload halaman

    // Ambil elemen DOM
    const funcStr = document.getElementById('function').value;
    const aVal = document.getElementById('a').value;
    const bVal = document.getElementById('b').value;
    const tolVal = document.getElementById('tolerance').value;
    const maxIterVal = document.getElementById('maxIterations').value;

    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');
    const iterationsBody = document.getElementById('iterationsBody');
    const resultTitle = document.getElementById('result-title');
    const tableTitle = document.getElementById('table-title');

    // Reset output dari proses sebelumnya
    resultDiv.innerHTML = '';
    errorDiv.style.display = 'none';
    iterationsBody.innerHTML = '';
    resultTitle.classList.add('hidden');
    tableTitle.classList.add('hidden');
    
    // Logika utama akan ditambahkan di sini oleh anggota berikutnya
    console.log("Form submitted!");
    console.log("Fungsi:", funcStr);
    console.log("a:", aVal, "b:", bVal);
    console.log("Toleransi:", tolVal, "Max Iterasi:", maxIterVal);
});

document.getElementById('regulaFalsiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form reload halaman

    // Ambil elemen DOM
    const funcStr = document.getElementById('function').value;
    const aVal = document.getElementById('a').value;
    const bVal = document.getElementById('b').value;
    const tolVal = document.getElementById('tolerance').value;
    const maxIterVal = document.getElementById('maxIterations').value;

    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');
    const iterationsBody = document.getElementById('iterationsBody');
    const resultTitle = document.getElementById('result-title');
    const tableTitle = document.getElementById('table-title');

    // Reset output dari proses sebelumnya
    resultDiv.innerHTML = '';
    errorDiv.style.display = 'none';
    iterationsBody.innerHTML = '';
    resultTitle.classList.add('hidden');
    tableTitle.classList.add('hidden');

    // --- Fungsi Helper untuk Menampilkan Error ---
    const showError = (message) => {
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
        console.error(message);
    };

    // --- Validasi Input Awal ---
    if (!funcStr || !aVal || !bVal || !tolVal || !maxIterVal) {
        showError("Semua kolom input harus diisi.");
        return;
    }
    
    const a = parseFloat(aVal);
    const b = parseFloat(bVal);
    const tolerance = parseFloat(tolVal);
    const maxIterations = parseInt(maxIterVal);

    if (isNaN(a) || isNaN(b) || isNaN(tolerance) || isNaN(maxIterations)) {
        showError("Input a, b, toleransi, dan iterasi harus berupa angka.");
        return;
    }

    // --- Logika Utama Regula Falsi akan ditambahkan di sini ---
    console.log("Input valid, siap untuk kalkulasi.");

});
