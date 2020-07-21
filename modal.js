const portfolioContainer = document.querySelector(".projects");

portfolioContainer.addEventListener("click", (e) => {
  //console.log(e);
  e.preventDefault();

  const modalToggle = e.target.closest(".project-link");
  //console.log(modalToggle);
  if (!modalToggle) return;

  const modal = modalToggle.parentNode.nextElementSibling;
  const closeButton = modal.querySelector(".modal-close");

  const modalOpen = () => {
    modal.classList.add("is-open");
    modal.style.animation = "modalIn 500ms forwards";
  };
  const modalClose = () => {
    modal.classList.remove("is-open");
    modal.removeEventlistener("animationend", modalClose);
  };

  closeButton.addEventListener("click", () => {
    modal.style.animation = "modalOut 500ms forwards";
    modal.addEventListener("animationend", modalClose);
  });

  modalOpen();
});
