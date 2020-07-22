const portfolioContainer = document.querySelector(".projects");

portfolioContainer.addEventListener("click", (e) => {
  //console.log(e);
  e.preventDefault();

  const modalToggle = e.target.closest(".project-link");
  console.log(modalToggle);
  if (!modalToggle) return;

  const modal = modalToggle.parentNode.nextElementSibling;
  const closeButton = modal.querySelector(".modal-close");

  const modalOpen = () => {
    modal.classList.add("is-open");
    document.body.style.overflowY = "hidden";
  };
  const modalClose = () => {
    modal.classList.remove("is-open");
    document.body.style.overflowY = "scroll";
  };
  closeButton.addEventListener("click", modalClose);

  modalOpen();
});
