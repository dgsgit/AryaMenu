/*=============Buttom DarkMode=============*/
// function myFunction() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");
// }

// const toggle = document.getElementById("toggle");
// toggle.onclick = function () {
//   toggle.classList.toggle("activebuttom");
// };

/*=============Buttom List=============*/
const listaBox = document.querySelectorAll(".dropdown");
listaBox.forEach((card) => {
  card.querySelector(".dropbtn").addEventListener("click", (element) => {
    const dropdowncontate = card.querySelector(".dropdown-content");
    dropdowncontate.classList.toggle("animation");
    document.querySelectorAll(".dropbtn").forEach((btn) => {
      btn.classList.remove("active");
    });
    element.target.classList.add("active");

    console.log(element);
  });
});
