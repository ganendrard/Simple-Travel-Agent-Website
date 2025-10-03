function calculateTotal() {
    const hargaTiket = {
        Jakarta: { Eksekutif: 500000, Bisnis: 350000, Ekonomi: 200000 },
        Solo: { Eksekutif: 400000, Bisnis: 300000, Ekonomi: 150000 },
        Surabaya: { Eksekutif: 600000, Bisnis: 450000, Ekonomi: 250000 },
    };

    const nama = document.getElementById("nama").value;
    const tujuan = document.getElementById("tujuan").value;
    const kelas = document.getElementById("kelas").value;
    const banyakTiket = parseInt(document.getElementById("banyak_tiket").value);
    const status = document.querySelector('input[name="status"]:checked').value;

    if (!tujuan || !kelas || !banyakTiket || !status) {
        alert("Mohon lengkapi semua data!");
        return;
    }

    const harga = hargaTiket[tujuan][kelas];
    const subtotal = harga * banyakTiket;

    const diskon = status === "Member" ? subtotal * 0.1 : 0;

    const totalBayar = subtotal - diskon;

    document.getElementById("outputNama").innerText = nama;
    document.getElementById("outputTujuan").innerText = tujuan;
    document.getElementById("outputKelas").innerText = kelas;
    document.getElementById("outputHarga").innerText = harga.toLocaleString();
    document.getElementById("outputSubtotal").innerText = subtotal.toLocaleString();
    document.getElementById("outputDiskon").innerText = diskon.toLocaleString();
    document.getElementById("outputTotal").innerText = totalBayar.toLocaleString();
}
