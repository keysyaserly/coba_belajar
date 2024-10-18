function calculateMedian() {
    const inputData = document.getElementById('dataInput').value.trim();
    
    // Ubah string input menjadi array angka
    let dataArray = inputData.split(',').map(Number);
    
    // Pastikan semua elemen valid sebagai angka
    dataArray = dataArray.filter(num => !isNaN(num));

    // Urutkan array secara ascending
    dataArray.sort((a, b) => a - b);
    
    const length = dataArray.length;
    let median;
    let explanation;
    
    // Hitung median berdasarkan jumlah data ganjil atau genap
    if (length % 2 === 0) {
        // Jika genap, median adalah rata-rata dua nilai tengah
        const mid1 = dataArray[length / 2 - 1];
        const mid2 = dataArray[length / 2];
        median = (mid1 + mid2) / 2;
        
        explanation = `
            <strong>Data:</strong> ${dataArray.join(', ')}<br>
            <strong>Jumlah data:</strong> ${length} (genap)<br>
            <strong>Dua nilai tengah:</strong> ${mid1} dan ${mid2}<br>
            <strong>Median:</strong> ( ${mid1} + ${mid2} ) / 2 = ${median}
        `;
    } else {
        // Jika ganjil, median adalah nilai tengah
        median = dataArray[(length - 1) / 2];
        
        explanation = `
            <strong>Data:</strong> ${dataArray.join(', ')}<br>
            <strong>Jumlah data:</strong> ${length} (ganjil)<br>
            <strong>Nilai tengah:</strong> ${median}<br>
            <strong>Median:</strong> ${median}
        `;
    }

    // Tampilkan hasil
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Hasil:</h3>
        <p><strong>Median:</strong> ${median}</p>
        <p><strong>Penjelasan:</strong></p>
        ${explanation}
        <div class="button-group">
            <button onclick="resetForm()">Back</button>
        </div>
    `;
    // Tampilkan tombol kembali
    document.querySelector('.button-group').style.display = 'block';
}

function resetForm() {
    // Kosongkan input
    document.getElementById('dataInput').value = '';
    
    // Kosongkan hasil
    document.getElementById('result').innerHTML = '';
    
    // Sembunyikan tombol kembali
    document.querySelector('.button-group').style.display = 'none';
}
