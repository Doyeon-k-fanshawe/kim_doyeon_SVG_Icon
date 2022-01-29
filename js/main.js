(() => {
  let theHeading = document.querySelector(".main-heading"),
      theIcons = document.querySelectorAll(".icon");
      theNames = document.querySelectorAll(".name")

  function logElement() {
    console.log('clicked on an element:', this.id);
  }

  theHeading.addEventListener("click", logElement);

  theIcons.forEach(icon => icon.addEventListener("click", logElement));

  theNames.forEach(name => name.addEventListener("click", logElement));
})();
