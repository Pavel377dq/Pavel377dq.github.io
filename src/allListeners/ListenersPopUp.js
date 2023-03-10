function ListenersPopUp() {
  let buttonBurger = document.querySelector(
    ".header__wrap-margin-left .button"
  );
  let popUpMenu = document.querySelector(".pop-up-menu");
  let buttonClose = document.querySelector(".pop-up-menu__wrap .button");

  buttonBurger.addEventListener("click", (e) => {
    e.stopPropagation();

    popUpMenu.classList.add("pop-up-menu--visible");
  });

  buttonClose.addEventListener("click", (e) => {
    e.stopPropagation();

    popUpMenu.classList.remove("pop-up-menu--visible");
  });

  document.addEventListener("click", (e) => {
    const withinBoundaries = e.composedPath().includes(popUpMenu);

    if (
      !withinBoundaries &&
      popUpMenu.classList.contains("pop-up-menu--visible")
    ) {
      popUpMenu.classList.remove("pop-up-menu--visible");
    }
  });
}


export default ListenersPopUp;