# Laporan Praktikum 6: JavaScript DOM dan Event Handling

## Deskripsi dan Tujuan
Praktikum ini bertujuan untuk memahami konsep **Document Object Model (DOM)** sebagai representasi elemen HTML yang dapat diakses dan dimanipulasi melalui JavaScript. Praktikum ini mencakup pemilihan elemen, manipulasi gaya dan konten, penanganan kejadian pengguna (*event handling*), serta pembuatan validasi formulir dan aplikasi interaktif[cite: 44].

---

## Langkah Kerja dan Cara Kerja Program

### Latihan 1: Mengubah Teks dengan DOM
* **Penjelasan**: Memilih elemen HTML berdasarkan atribut ID menggunakan `document.getElementById('judul')` dan `document.getElementById('pesan')`, lalu memperbarui teksnya melalui properti `textContent`.
* **Cara Kerja**:
  1. Browser membaca dokumen HTML dan membentuk struktur DOM.
  2. Saat skrip `script.js` dieksekusi (menggunakan atribut `defer`), JavaScript mencari elemen dengan `id="judul"` dan `id="pesan"`.
  3. Nilai properti `textContent` dari kedua elemen diubah secara dinamis dari nilai awal menjadi teks baru.
* **Screenshot**:
<img width="420" height="267" alt="Screenshot from 2026-10-26 10-48-04" src="https://github.com/user-attachments/assets/575f7649-3145-49cd-9804-55fea0576578" />
<img width="425" height="277" alt="Screenshot from 2026-10-26 10-46-43" src="https://github.com/user-attachments/assets/69f55ae0-94ab-4510-92fa-8991e53bfee9" />
<img width="420" height="267" alt="Screenshot from 2026-10-26 10-47-37" src="https://github.com/user-attachments/assets/d9bda241-898c-42b2-8645-6eb0c7d94024" />

---

### Latihan 2: Event Click
* **Penjelasan**: Menambahkan pemicu event klik (`click`) pada tombol menggunakan `addEventListener('click', callback)` untuk memperbarui konten teks paragraf dengan informasi waktu terkini saat tombol diklik.
* **Cara Kerja**:
  1. Script mendeteksi elemen tombol `tombolAksi` dan mendaftarkan penangan event `click`.
  2. Ketika pengguna mengklik tombol, fungsi *callback* secara otomatis dipanggil.
  3. Fungsi mengambil waktu sistem terkini dengan `new Date().toLocaleTimeString()` dan mencetaknya ke elemen paragraf.
* **Screenshot**:
<img width="420" height="267" alt="Screenshot from 2026-10-26 10-52-28" src="https://github.com/user-attachments/assets/8f973637-ae29-4a7c-9c91-9625764766d6" />


---

### Latihan 3: Mengubah Kelas dan Gaya CSS
* **Penjelasan**: Mengubah tampilan visual elemen secara dinamis dengan memanipulasi daftar kelas CSS menggunakan `classList.toggle('highlight')` dan `classList.toggle('teks-besar')`.
* **Cara Kerja**:
  1. Tombol `tombolGaya` diberi *event listener* klik.
  2. Saat tombol diklik, metode `classList.toggle()` memeriksa keberadaan kelas `.highlight` dan `.teks-besar` pada elemen `teksGaya`.
  3. Jika kelas belum ada maka akan ditambahkan; jika kelas sudah ada maka akan dihapus.
* **Screenshot**:
<img width="419" height="117" alt="Screenshot from 2026-10-26 11-01-07" src="https://github.com/user-attachments/assets/10ff95f4-1f0c-4ae7-9080-424b3e4779ca" />
<img width="419" height="117" alt="Screenshot from 2026-10-26 11-01-14" src="https://github.com/user-attachments/assets/0a0ba6d6-3ab1-4262-b68f-5f493101b768" />


---

### Latihan 4: Event Input dan Penghitung Karakter
* **Penjelasan**: Menerapkan event `input` pada kolom masukan nama (`namaInput`) untuk menghitung jumlah karakter teks secara *real-time* menggunakan properti `value.length`.
* **Cara Kerja**:
  1. Penangan event `input` mendengarkan setiap perubahan pada kolom teks `namaInput`.
  2. Setiap kali pengguna mengetik, menghapus, atau menempelkan (*paste*) karakter, fungsi mengukur panjang string dengan `namaInput.value.length`.
  3. Angka jumlah karakter langsung diperbarui ke dalam elemen `span#jumlahKarakter`.
* **Screenshot**:
<img width="419" height="117" alt="Screenshot from 2026-10-26 11-03-04" src="https://github.com/user-attachments/assets/4189317a-a7ff-46ba-bcc9-a0538933d517" />
<img width="419" height="117" alt="Screenshot from 2026-10-26 11-03-09" src="https://github.com/user-attachments/assets/169cc892-4a86-4a65-b256-4acced2047ee" />


---

### Latihan 5: Validasi Form Pendaftaran
* **Penjelasan**: Menerapkan event `submit` pada formulir pendaftaran, menghentikan reload halaman bawaan dengan `event.preventDefault()`, serta memverifikasi masukan nama, regex email, dan rentang usia (17–100).
* **Cara Kerja**:
  1. Saat formulir di-submit, `event.preventDefault()` mencegah browser melakukan reload halaman
  2. Program mengambil nilai dari kolom nama, email, dan usia, lalu menghapus spasi awal/akhir dengan `trim()`.
  3. Program mencocokkan email dengan pola ekspresi reguler (`polaEmail`) dan memeriksa apakah usia merupakan bilangan bulat antara 17 hingga 100.
  4. Jika data tidak sesuai, pesan kesalahan ditampilkan. Jika valid, pesan sukses ditampilkan dan form di-reset (`form.reset()`).
* **Screenshot**:
<img width="727" height="98" alt="Screenshot from 2026-10-26 11-07-52" src="https://github.com/user-attachments/assets/9fd6568d-9bea-49d1-9523-fdc7b4c5d026" />
<img width="719" height="78" alt="Screenshot from 2026-10-26 11-08-53" src="https://github.com/user-attachments/assets/526a48a9-9ced-4bd8-852b-661566ed07e0" />
<img width="719" height="78" alt="Screenshot from 2026-10-26 11-08-22" src="https://github.com/user-attachments/assets/941c14f4-5478-481b-aa40-432bdc7539e9" />
<img width="719" height="78" alt="Screenshot from 2026-10-26 11-08-32" src="https://github.com/user-attachments/assets/a7f3e1fe-49db-4237-a34d-55f30f73e264" />

---

### Latihan 6: Daftar Tugas Sederhana (To-do List)
* **Penjelasan**: Membuat aplikasi daftar tugas interaktif, menambahkan elemen daftar baru menggunakan `document.createElement()`, serta menandai tugas selesai menggunakan `classList.toggle()`.
* **Cara Kerja**:
  1. Pengguna mengetikkan tugas pada input dan menekan tombol "Tambah".
  2. Program membuat elemen baru `<li>`, `<span>`, dan `<button>` secara dinamis di dalam memori.
  3. Elemen dimasukkan ke dalam daftar `<ul>` menggunakan `appendChild()`.
  4. Menekan tombol "Tandai selesai" akan mengaktifkan kelas `.selesai` yang mencoret teks tugas melalui CSS `text-decoration: line-through`.
* **Screenshot**:
<img width="448" height="174" alt="Screenshot from 2026-10-26 11-14-34" src="https://github.com/user-attachments/assets/fc3a736a-d37d-40b0-a866-81766fe0e395" />
<img width="458" height="253" alt="Screenshot from 2026-10-26 11-14-42" src="https://github.com/user-attachments/assets/d46ee587-eba1-4dc1-8337-dc5cd88c1a66" />

---

### Mini Project: Form Pendaftaran Workshop
* **Penjelasan**: Mengembangkan aplikasi pendaftaran workshop interaktif yang menggabungkan validasi input nama, email, pilihan sesi, penghitung karakter, serta tombol reset.
* **Cara Kerja**:
  1. Aplikasi mengintegrasikan event `input` untuk menghitung karakter secara langsung.
  2. Event `change` pada elemen dropdown sesi memicu tampilan ringkasan biaya/sesi yang dipilih secara otomatis.
  3. Event `submit` memverifikasi seluruh kelengkapan formulir sebelum menampilkan modal/pesan konfirmasi pendaftaran.
* **Screenshot**:
<img width="549" height="422" alt="Screenshot from 2026-10-26 14-06-35" src="https://github.com/user-attachments/assets/69d1de06-b577-4fab-b1ad-3a330c3918e6" />
<img width="549" height="422" alt="Screenshot from 2026-10-26 14-06-46" src="https://github.com/user-attachments/assets/a42f68e8-b9c3-4b8c-a4ac-b99a5a703180" />
<img width="549" height="422" alt="Screenshot from 2026-10-26 14-06-55" src="https://github.com/user-attachments/assets/7a8ba793-791a-43b1-a924-9db4ccb2f75f" />
<img width="549" height="422" alt="Screenshot from 2026-10-26 14-07-05" src="https://github.com/user-attachments/assets/b8b34b2d-2e8a-4634-b30a-72dfe5e4c0b2" />
<img width="549" height="422" alt="Screenshot from 2026-10-26 14-08-54" src="https://github.com/user-attachments/assets/03b8a511-cb60-46ab-8f06-888482a2bb0e" />
<img width="549" height="422" alt="Screenshot from 2026-10-26 14-17-50" src="https://github.com/user-attachments/assets/700ebd37-a238-46e1-a9b6-086535e26da6" />


---

## Pertanyaan Evaluasi dan Jawaban (Bagian H)

1. **Apa yang dimaksud dengan DOM dan apa manfaatnya?**
   * **DOM (Document Object Model)** adalah antarmuka pemograman berstandar untuk dokumen HTML/XML yang merepresentasikan struktur dokumen dalam bentuk pohon objek (*node tree*). Manfaat utamanya adalah memungkinkan JavaScript untuk mengakses, menambah, menghapus, atau mengubah elemen, konten, atribut, dan gaya CSS secara dinamis saat halaman web dijalankan.

2. **Apa perbedaan getElementById(), querySelector(), dan querySelectorAll()?**
   * `getElementById('id')`: Memilih satu elemen tunggal secara spesifik berdasarkan nilai atribut ID-nya.
   * `querySelector('selector_css')`: Memilih **elemen pertama** yang cocok dengan pola selector CSS (bisa berdasarkan tag, class, id, atau kombinasi).
   * `querySelectorAll('selector_css')`: Memilih **semua elemen** yang cocok dengan pola selector CSS dan mengembalikan hasilnya dalam bentuk *NodeList*.

3. **Apa fungsi addEventListener() dan sebutkan tiga contoh event?**
   * Fungsi `addEventListener()` digunakan untuk mendaftarkan fungsi penangan (*event listener/callback*) pada suatu elemen target, sehingga fungsi tersebut dieksekusi secara otomatis ketika event tertentu terjadi pada elemen tersebut.
   * **Contoh Event**:
     1. `'click'` : Terjadi saat pengguna mengklik elemen.
     2. `'input'` : Terjadi saat nilai pada kolom input/textarea berubah atau diketik.
     3. `'submit'`: Terjadi saat formulir dikirimkan oleh pengguna.

4. **Mengapa event.preventDefault() digunakan pada event submit form?**
   * `event.preventDefault()` digunakan untuk membatalkan/mencegah tindakan bawaan (*default action*) dari browser, yaitu memuat ulang halaman (*page reload*) saat formulir di-submit. Hal ini memungkinkan JavaScript melakukan verifikasi/validasi data di sisi klien terlebih dahulu sebelum data diproses.

5. **Apa perbedaan textContent dan innerHTML dari sisi penggunaan dan keamanan?**
   * `textContent`: Digunakan untuk mengambil atau mengatur teks murni (*plain text*). Sangat aman dari serangan **XSS (Cross-Site Scripting)** karena semua karakter HTML akan di-escape sebagai teks biasa.
   * `innerHTML`: Digunakan untuk mengambil atau merender tag markup HTML di dalam elemen. Jika digunakan untuk merender masukan pengguna tanpa sanitasi, dapat menimbulkan celah keamanan XSS yang berbahaya.

6. **Bagaimana classList.toggle() membantu mengubah tampilan elemen?**
   * `classList.toggle('nama_kelas')` membantu mengubah tampilan elemen dengan cara menambahkan kelas CSS jika kelas tersebut belum ada pada elemen, atau menghapus kelas tersebut jika sudah ada. Metode ini sangat efisien untuk fitur sakelar (*toggle*), seperti beralih ke mode gelap atau mengubah gaya visual tombol/teks.

7. **Sebutkan minimal tiga skenario pengujian validasi form.**
   * **Skenario 1 (Semua Input Kosong)**: Memastikan sistem memblokir submit dan menampilkan pesan kesalahan bahwa nama/email wajib diisi.
   * **Skenario 2 (Format Email Tidak Valid)**: Memasukkan email tanpa karakter `@` atau domain (contoh: `namaemail.com`) dan memastikan pesan kesalahan format email muncul.
   * **Skenario 3 (Usia Di Luar Batas)**: Memasukkan nilai usia di bawah 17 (misalnya 15) atau di atas 100 dan memastikan sistem menolak pendaftaran.
