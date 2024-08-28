let controls = document.querySelectorAll(".control");
let sections = document.querySelectorAll(".section");

for (let control of controls) {
  control.addEventListener("click", function activateBtn(event) {
    for (let control of controls) {
      if (control.getAttribute("id") === "active-btn") {
        control.id = null;
        break;
      }
    }
    // the clicked button | WARNING: if we used event.target, we would get unexpected behavior!
    this.id = "active-btn";
    // activate the specified section and hide the others
    document.querySelector(".active").classList.remove("active");
    for (let section of sections) {
      section.classList.add("hidden");
    }
    document.getElementById(control.dataset.id).classList.remove("hidden");
    document.getElementById(control.dataset.id).classList.add("active");
  });
}
