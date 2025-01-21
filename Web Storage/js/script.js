const judul = document.querySelector("h1");

let nama = localStorage.getItem("nama");

if (!nama) {
  nama = prompt("Masukkan Nama Anda: ");
  localStorage.setItem("nama", nama);
}

judul.innerHTML = `Halo, ${nama}!`;

// Ganti Nama
const gantiNama = () => {
  nama = prompt("Masukkan Nama Baru Anda: ");
  localStorage.setItem("nama", nama);
  judul.innerHTML = `Halo, ${nama}!`;
};

// Hapus Nama
const hapusNama = () => {
  localStorage.removeItem("nama");
  nama = prompt("Masukkan Nama Anda: ");
  localStorage.setItem("nama", nama);
  judul.innerHTML = `Halo, ${nama}!`;
};

// Hapus Storage
const hapusStorage = () => {
  localStorage.clear();
  nama = prompt("Masukkan Nama Anda: ");
  localStorage.setItem("nama", nama);
  lightMode();
  judul.innerHTML = `Halo, ${nama}!`;
};

// Toggle Dark Mode
const toggle = document.querySelector(".toggle");
let tema = localStorage.getItem("tema");
if (!tema) {
  localStorage.setItem("tema", "light");
}

const darkMode = () => {
  document.body.classList.add("dark-mode");
  toggle.innerHTML = "Light Mode";
  localStorage.setItem("tema", "dark");
};

const lightMode = () => {
  document.body.classList.remove("dark-mode");
  toggle.innerHTML = "Dark Mode";
  localStorage.setItem("tema", "light");
};

if (tema === "dark") {
  darkMode();
}

toggle.addEventListener("click", function () {
  tema = localStorage.getItem("tema");
  if (tema === "light") {
    darkMode();
  } else {
    lightMode();
  }
});
