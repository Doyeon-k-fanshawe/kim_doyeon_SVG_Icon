(() => {
  let theHeading = document.querySelector(".main-heading"),
      theIcons = document.querySelectorAll(".icon");

  function logElement() {
    console.log('clicked on an element:', this.id);
  }

  theHeading.addEventListener("click", logElement);

  theIcons.forEach(icon => icon.addEventListener("click", logElement));
})();
