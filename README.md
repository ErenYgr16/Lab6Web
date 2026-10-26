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
  *(Sisipkan screenshot tampilan judul dan pesan yang berubah di browser di sini)*

---

### Latihan 2: Event Click
* **Penjelasan**: Menambahkan pemicu event klik (`click`) pada tombol menggunakan `addEventListener('click', callback)` untuk memperbarui konten teks paragraf dengan informasi waktu terkini saat tombol diklik.
* **Cara Kerja**:
  1. Script mendeteksi elemen tombol `tombolAksi` dan mendaftarkan penangan event `click`.
  2. Ketika pengguna mengklik tombol, fungsi *callback* secara otomatis dipanggil.
  3. Fungsi mengambil waktu sistem terkini dengan `new Date().toLocaleTimeString()` dan mencetaknya ke elemen paragraf.
* **Screenshot**:
  *(Sisipkan screenshot tampilan pesan waktu saat tombol diklik di sini)*

---

### Latihan 3: Mengubah Kelas dan Gaya CSS
* **Penjelasan**: Mengubah tampilan visual elemen secara dinamis dengan memanipulasi daftar kelas CSS menggunakan `classList.toggle('highlight')` dan `classList.toggle('teks-besar')`.
* **Cara Kerja**:
  1. Tombol `tombolGaya` diberi *event listener* klik[cite: 46].
  2. Saat tombol diklik, metode `classList.toggle()` memeriksa keberadaan kelas `.highlight` dan `.teks-besar` pada elemen `teksGaya`[cite: 46].
  3. Jika kelas belum ada maka akan ditambahkan; jika kelas sudah ada maka akan dihapus[cite: 46].
* **Screenshot**:
  *(Sisipkan screenshot perubahan gaya paragraf saat tombol diklik di sini)*

---

### Latihan 4: Event Input dan Penghitung Karakter
* **Penjelasan**: Menerapkan event `input` pada kolom masukan nama (`namaInput`) untuk menghitung jumlah karakter teks secara *real-time* menggunakan properti `value.length`[cite: 46].
* **Cara Kerja**:
  1. Penangan event `input` mendengarkan setiap perubahan pada kolom teks `namaInput`.
  2. Setiap kali pengguna mengetik, menghapus, atau menempelkan (*paste*) karakter, fungsi mengukur panjang string dengan `namaInput.value.length`[cite: 46].
  3. Angka jumlah karakter langsung diperbarui ke dalam elemen `span#jumlahKarakter`.
* **Screenshot**:
  *(Sisipkan screenshot indikator penghitung karakter saat mengetik di sini)*

---

### Latihan 5: Validasi Form Pendaftaran
* **Penjelasan**: Menerapkan event `submit` pada formulir pendaftaran, menghentikan reload halaman bawaan dengan `event.preventDefault()`, serta memverifikasi masukan nama, regex email, dan rentang usia (17–100)[cite: 45, 46, 47].
* **Cara Kerja**:
  1. Saat formulir di-submit, `event.preventDefault()` mencegah browser melakukan reload halaman[cite: 45, 46].
  2. Program mengambil nilai dari kolom nama, email, dan usia, lalu menghapus spasi awal/akhir dengan `trim()`[cite: 46].
  3. Program mencocokkan email dengan pola ekspresi reguler (`polaEmail`) dan memeriksa apakah usia merupakan bilangan bulat antara 17 hingga 100.
  4. Jika data tidak sesuai, pesan kesalahan ditampilkan. Jika valid, pesan sukses ditampilkan dan form di-reset (`form.reset()`).
* **Screenshot**:
  *(Sisipkan screenshot pengujian validasi form (kondisi error dan valid) di sini)*

---

### Latihan 6: Daftar Tugas Sederhana (To-do List)
* **Penjelasan**: Membuat aplikasi daftar tugas interaktif, menambahkan elemen daftar baru menggunakan `document.createElement()`, serta menandai tugas selesai menggunakan `classList.toggle()`.
* **Cara Kerja**:
  1. Pengguna mengetikkan tugas pada input dan menekan tombol "Tambah".
  2. Program membuat elemen baru `<li>`, `<span>`, dan `<button>` secara dinamis di dalam memori.
  3. Elemen dimasukkan ke dalam daftar `<ul>` menggunakan `appendChild()`.
  4. Menekan tombol "Tandai selesai" akan mengaktifkan kelas `.selesai` yang mencoret teks tugas melalui CSS `text-decoration: line-through`.
* **Screenshot**:
  *(Sisipkan screenshot aplikasi To-do List saat menambah dan menyelesaikan tugas di sini)*

---

### Mini Project: Form Pendaftaran Workshop
* **Penjelasan**: Mengembangkan aplikasi pendaftaran workshop interaktif yang menggabungkan validasi input nama, email, pilihan sesi, penghitung karakter, serta tombol reset.
* **Cara Kerja**:
  1. Aplikasi mengintegrasikan event `input` untuk menghitung karakter secara langsung.
  2. Event `change` pada elemen dropdown sesi memicu tampilan ringkasan biaya/sesi yang dipilih secara otomatis.
  3. Event `submit` memverifikasi seluruh kelengkapan formulir sebelum menampilkan modal/pesan konfirmasi pendaftaran.
* **Screenshot**:
  *(Sisipkan screenshot tampilan antarmuka Mini Project Form Workshop di sini)*

---

## Pertanyaan Evaluasi dan Jawaban (Bagian H)

1. **Apa yang dimaksud dengan DOM dan apa manfaatnya?**
   * **DOM (Document Object Model)** adalah antarmuka pemograman berstandar untuk dokumen HTML/XML yang merepresentasikan struktur dokumen dalam bentuk pohon objek (*node tree*)[cite: 44]. Manfaat utamanya adalah memungkinkan JavaScript untuk mengakses, menambah, menghapus, atau mengubah elemen, konten, atribut, dan gaya CSS secara dinamis saat halaman web dijalankan.

2. **Apa perbedaan getElementById(), querySelector(), dan querySelectorAll()?**
   * `getElementById('id')`: Memilih satu elemen tunggal secara spesifik berdasarkan nilai atribut ID-nya[cite: 44].
   * `querySelector('selector_css')`: Memilih **elemen pertama** yang cocok dengan pola selector CSS (bisa berdasarkan tag, class, id, atau kombinasi).
   * `querySelectorAll('selector_css')`: Memilih **semua elemen** yang cocok dengan pola selector CSS dan mengembalikan hasilnya dalam bentuk *NodeList*.

3. **Apa fungsi addEventListener() dan sebutkan tiga contoh event?**
   * Fungsi `addEventListener()` digunakan untuk mendaftarkan fungsi penangan (*event listener/callback*) pada suatu elemen target, sehingga fungsi tersebut dieksekusi secara otomatis ketika event tertentu terjadi pada elemen tersebut[cite: 44].
   * **Contoh Event**:
     1. `'click'` : Terjadi saat pengguna mengklik elemen.
     2. `'input'` : Terjadi saat nilai pada kolom input/textarea berubah atau diketik[cite: 44].
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
