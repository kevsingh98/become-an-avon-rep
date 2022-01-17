const secondaryNavSpacing = function () {
  const headerRow = document.getElementsByClassName("header__row")[0];
  const secondaryNav = document.getElementsByClassName(
    "navigation__secondary"
  )[0];

  function setPadding() {
    let headerBounds = headerRow.getBoundingClientRect();
    secondaryNav.style.padding = `0 ${headerBounds.left}px`;
  }

  setPadding();
  window.addEventListener("resize", () => {
    //needed to
    setPadding();
  });
};

//using an IIFE to initialise
const init = (() => {
  secondaryNavSpacing();
})();
