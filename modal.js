const heliosModal = document.querySelector("#heliosModal");
const alfredasModal = document.querySelector("#alfredasModal");
const cyclodenModal = document.querySelector("#cyclodenModal");
const weatherHubModal = document.querySelector("#weatherHubModal");
const weatherHub2Modal = document.querySelector("#weatherHub2Modal");

let openModal = (e) => {
  let clickedId = e.target.id;

  removeShow = () => {
    window.onclick = function (e) {
      if (e.target.id === `${clickedId + "Modal"}`) {
        e.target.classList.remove("show");
      }
    };
  };

  switch (clickedId) {
    case "helios":
      heliosModal.classList.add("show");
      removeShow();
      break;
    case "alfredas":
      alfredasModal.classList.add("show");
      removeShow();
      break;
    case "cycloden":
      cyclodenModal.classList.add("show");
      removeShow();
      break;
    case "weatherHub":
      weatherHubModal.classList.add("show");
      removeShow();
      break;
    case "weatherHub2":
      weatherHub2Modal.classList.add("show");
      removeShow();
      break;
  }
};

let closeModal = (e) => {
  let clickedId = e.target.id;

  switch (clickedId) {
    case "heliosClose":
      heliosModal.classList.remove("show");
      break;
    case "alfredasClose":
      alfredasModal.classList.remove("show");
      break;
    case "cyclodenClose":
      cyclodenModal.classList.remove("show");
      break;
    case "weatherHubClose":
      weatherHubModal.classList.remove("show");
      break;
    case "weatherHub2Close":
      weatherHub2Modal.classList.remove("show");
      break;
  }
};
