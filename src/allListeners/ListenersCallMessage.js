function ListenersCallMessage(
  icon,
  closeSmallWidth,
  closeBigWidth,
  modalWindow,
  modalWindowMod,modalToClose
) {
  let buttonOpen = document.querySelector(icon);
  let buttonCloseSmall = document.querySelector(closeSmallWidth);
  let buttonCloseBig = document.querySelector(closeBigWidth);
  let modal = document.querySelector(modalWindow);
  let modalClose = document.querySelector(modalToClose);

  buttonOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    evt.stopPropagation();
    modal.classList.add(modalWindowMod);
  });

  buttonCloseSmall.addEventListener("click", (evt) => {
    evt.preventDefault();
    evt.stopPropagation();

    modal.classList.remove(modalWindowMod);
  });

  buttonCloseBig.addEventListener("click", (evt) => {
    evt.preventDefault();
    evt.stopPropagation();

    modal.classList.remove(modalWindowMod);
  });

  document.addEventListener("click", (evt) => {
    const withinBoundaries = evt.composedPath().includes(modal);

    if (!withinBoundaries && modal.classList.contains(modalWindowMod)) {
      modal.classList.remove(modalWindowMod);
    }
  });

  document.addEventListener("click", (evt) => {
    const withinBoundaries = evt.composedPath().includes(modalClose);

    if (!withinBoundaries && modal.classList.contains(modalWindowMod)) {
      modal.classList.remove(modalWindowMod);
    }
  });


  
  document.addEventListener("keydown", (evt)=> {
    if(evt.key === "Escape") {
        // write your logic here.
        modal.classList.remove(modalWindowMod);
    }
  }
  );
  
}


export default ListenersCallMessage;