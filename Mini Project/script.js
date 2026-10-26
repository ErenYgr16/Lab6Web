const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");
form.addEventListener("submit", function (event) {
event.preventDefault();
const nama = document.getElementById("nama").value.trim();
const email = document.getElementById("email").value.trim();
const sesicheck = document.querySelectorAll('input[name="sesi"]:checked');
const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (nama === "") {
        pesanForm.textContent = "Nama wajib diisi.";
    }
    else if (namaValue.length < 3) { 
        pesanForm.textContent = "Nama wajib terdiri dari minimal 3 karakter.";
    } else if (!polaEmail.test(email)) {
        pesanForm.textContent = "Masukkan email yang valid.";
    } else if (sesicheck.length === 0) {
        pesanForm.textContent = "Silahkan pilih sesi";
    } else {
        pesanForm.textContent = "Validasi berhasil. Form siap diproses.";
    form.reset();
    }
});
const reset = document.getElementById("reset");
const pesanreset = document.getElementById("pesanreset")
reset.addEventListener("click", function() {
    pesanreset.textContent = "Berhasi Direset";
    jumlahKarakter.textContent = "0";
    setTimeout(() => {
        pesanreset.textContent = "";
    }, 3000);
})
const jumlahKarakter = document.getElementById("jumlahKarakter");
    nama.addEventListener("input", function () {
jumlahKarakter.textContent = nama.value.length;
});