// Menghasilkan angka acak antara 1 dan 6 untuk pemain 1
let randomNum1 = Math.floor(Math.random() * 6) + 1;

// Membuat nama file gambar berdasarkan angka acak yang dihasilkan
let randomDiceImg = "dice" + randomNum1 + ".png";

// Membuat jalur lengkap sumber gambar
let randomImgSource = `images/${randomDiceImg}`;

// Memilih elemen gambar pertama di halaman
let img1 = document.querySelectorAll("img")[0];

// Mengatur atribut src dari elemen gambar yang dipilih ke sumber gambar yang dihasilkan secara acak
img1.setAttribute("src", randomImgSource);


// Menghasilkan angka acak antara 1 dan 6 untuk pemain 2
let randomNum2 = Math.floor(Math.random() * 6) + 1;

// Membuat nama file gambar berdasarkan angka acak yang dihasilkan untuk pemain 2
let randomDiceImg2 = "dice" + randomNum2 + ".png";

// Membuat jalur lengkap sumber gambar untuk pemain 2
let randomImgSource2 = `images/${randomDiceImg2}`;

// Memilih elemen gambar kedua di halaman
let img2 = document.querySelectorAll("img")[1];

// Mengatur atribut src dari elemen gambar kedua yang dipilih ke sumber gambar yang dihasilkan secara acak untuk pemain 2
img2.setAttribute("src", randomImgSource2);

if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "Player 1 Win!"
} else if (randomNum2 > randomNum1) {
    document.querySelector("h1").innerHTML = "Player 2 Win!"
} else (document.querySelector("h1").innerHTML = "Draw!")


