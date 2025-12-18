# ZYXFUN – Simple JavaScript Games

[**[https://revou-fsse-oct25.github.io/milestone-2-dzikriyadi/]**](https://github.com/Revou-FSSE-Oct25/milestone-2-dzikriyadi)

## Overview

ZYXFUN adalah sebuah proyek web yang berisi kumpulan game sederhana berbasis JavaScript.  
Proyek ini dibuat untuk tujuan pembelajaran, khususnya untuk melatih dasar-dasar pemrograman JavaScript, manipulasi DOM, dan event handling menggunakan JavaScript murni (vanilla JavaScript).

Website ini memiliki halaman utama sebagai landing page dan beberapa halaman game yang dapat diakses melalui menu navigasi.

---

## Project Structure

```text
milestone-2/
├── css/
│   ├── index.css
│   ├── memory_card.css
│   ├── number_guess.css
│   └── rock_pep_sisc.css
├── js/
│   ├── index.js
│   ├── memory_card.js
│   ├── number_guess.js
│   └── rock_pep_sisc.js
├── page/
│   ├── about.html
│   ├── games.html
│   ├── memory_card.html
│   ├── number_guess.html
│   └── rock_pep_sisc.html
├── index.html
└── README.md
```

---

## Pages Description

### Home (index.html)

Halaman utama yang menampilkan:

- Nama website
- Deskripsi singkat proyek
- Menu navigasi (Home, Games, About)
- Tombol untuk menuju halaman Games

### Games (games.html)

Halaman yang menampilkan daftar game yang tersedia dan link menuju masing-masing game.

### About (about.html)

Halaman yang berisi informasi singkat mengenai tujuan proyek dan teknologi yang digunakan.

---

## Games Implemented

### 1. Number Guessing Game

- Pemain menebak angka antara 1 sampai 100
- Komputer memilih angka secara acak
- Sistem memberikan petunjuk (terlalu besar atau terlalu kecil)
- Jumlah percobaan dibatasi

```text
Psuedo codenya
mulai

tentukan angka maksimum = 100
tentukan jumlah percobaan maksimum = 5

buat angka_random
buat sisa_percobaan = jumlah percobaan maksimum
buat array riwayat_tebakan kosong

generate angka_random dari 1 sampai angka maksimum

selama sisa_percobaan lebih besar dari 0
    minta user memasukkan angka

    jika input tidak valid
        tampilkan pesan error
        lanjut ke input berikutnya

    kurangi sisa_percobaan
    simpan angka tebakan ke riwayat_tebakan

    jika tebakan lebih besar dari angka_random
        tampilkan "terlalu tinggi"

    jika tebakan lebih kecil dari angka_random
        tampilkan "terlalu rendah"

    jika tebakan sama dengan angka_random
        tampilkan "tebakan benar"
        hentikan permainan

    tampilkan sisa_percobaan

jika sisa_percobaan sama dengan 0 dan tebakan belum benar
    tampilkan "game over"

selesai
```

### 2. Rock Paper Scissors

- Pemain memilih rock, paper, atau scissors
- Komputer memilih pilihan secara acak
- Sistem menentukan pemenang berdasarkan aturan klasik
- Skor pemain dan komputer disimpan

```text
mulai

buat array pilihan = rock, paper, scissors
buat skor_player = 0
buat skor_komputer = 0

selama game berjalan
    player memilih salah satu pilihan

    komputer memilih secara random dari array pilihan

    jika pilihan player sama dengan pilihan komputer
        hasil = seri

    jika player memilih rock dan komputer scissors
        hasil = player menang
        tambah skor_player

    jika player memilih paper dan komputer rock
        hasil = player menang
        tambah skor_player

    jika player memilih scissors dan komputer paper
        hasil = player menang
        tambah skor_player

    selain kondisi di atas
        hasil = komputer menang
        tambah skor_komputer

    tampilkan pilihan player dan komputer
    tampilkan hasil permainan
    tampilkan skor terbaru

selesai

```

### 3. Memory Card Game (3 Card Match)

- Grid permainan berukuran 6 x 6 (36 kartu)
- Setiap simbol muncul sebanyak 3 kartu
- Pemain membuka 3 kartu dalam satu giliran
- Kartu akan tetap terbuka jika cocok
- Permainan selesai jika semua grup kartu berhasil ditemukan

```text
mulai

buat array simbol kartu
duplikat setiap simbol sebanyak 3 kali
acak urutan kartu

buat array kartu_terbuka kosong
buat variable grup_ditemukan = 0

tampilkan semua kartu ke layar
    semua kartu dalam keadaan tertutup

ketika user klik satu kartu
    jika kartu sudah terbuka atau sudah cocok
        hentikan proses

    buka kartu
    masukkan kartu ke kartu_terbuka

    jika jumlah kartu_terbuka sama dengan 3
        ambil kartu pertama, kedua, dan ketiga

        jika simbol ketiga kartu sama
            tandai ketiga kartu sebagai cocok
            tambah grup_ditemukan
            kosongkan kartu_terbuka

        jika simbol ketiga kartu tidak sama
            tunggu beberapa saat
            tutup kembali ketiga kartu
            kosongkan kartu_terbuka

    jika grup_ditemukan sama dengan jumlah simbol
        tampilkan pesan menang

selesai

```

---

## Technologies Used

- HTML5
- CSS3 & Tailwind
- JavaScript (Vanilla JavaScript)

---

## Screenshoot Demo

Sudah pusing, agak males jadi kurang lengkap

## How to Run the Project

1. Buka halaman pada link deployment
2. Gunakan menu navigasi untuk berpindah halaman dan memilih game.

---
