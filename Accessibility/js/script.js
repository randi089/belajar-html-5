const showAlert = (text) => alert(text);
const button1 = document.querySelector("#button1");

button1.addEventListener("keyup", function (e) {
  if (e.keyCode == 32 || e.keyCode == 13) {
    showAlert("halo");
  }
});
