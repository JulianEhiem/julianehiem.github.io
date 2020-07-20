const portfolioContainer = document.querySelector(".projects");

portfolioContainer.addEventListener("click", (e) => {
  //console.log(e);
  e.preventDefault();

  const modalToggle = e.target.closest(".project-link");
  //console.log(modalToggle);
  if (!modalToggle) return;

  const modal = modalToggle.parentNode.nextElementSibling;
  const closeButton = modal.querySelector("modal-close");

  modal.classList.add("is-open");

  closeButton.addEventListener("click", () => {
    modal.classList.remove("is-open");
  });
});
