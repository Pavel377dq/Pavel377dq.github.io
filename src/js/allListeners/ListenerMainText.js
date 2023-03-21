function ListenerMainText() {
  let expandButton = document.querySelector(".page-service__text .expand");
  let icon = document.querySelector(".page-service__text .expand__icon");
  let mainText = document.querySelector(".page-service__text-formation");
  let text = document.querySelector(".page-service__text .expand__text");
  let isOpen = 0;
  expandButton.addEventListener("click", (evt) => {
    expandButton.classList.toggle("expand-margin-top");
    icon.classList.toggle("expand__icon-rotate");
    mainText.classList.toggle("page-service__text-formation--visible");
    if (isOpen) {
      text.textContent = "Читать далее";
      isOpen = 0;
    } else {
      isOpen = 1;
      text.textContent = "Скрыть";
    }
  });
}

export default ListenerMainText;