const slider = document.querySelector("#slider");
const awal = document.querySelector(".awal");
const akhir = document.querySelector(".akhir");

awal.innerHTML = slider.min;
akhir.innerHTML = slider.value;
slider.addEventListener("input", function () {
  akhir.innerHTML = slider.value;
});

const warna = document.querySelector("#warna");
const hexa = document.querySelector(".hexa");
const bg = document.querySelector(".bg");

hexa.innerHTML = warna.value;

warna.addEventListener("input", function () {
  hexa.innerHTML = warna.value;
  hexa.style.color = warna.value;
  bg.style.backgroundColor = warna.value;
});
