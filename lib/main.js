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
    setPadding();
  });
};

const formControl = function () {
  const ctaButtons = document.getElementsByClassName("CTAButton");
  const modal = document.getElementsByClassName("modal")[0];
  const body = document.getElementsByTagName("body")[0];
  const next = document.getElementById("next");
  const finish = document.getElementById("finish");

  next.addEventListener("click", function () {
    const step1 = document.getElementById("step1");
    const step2 = document.getElementById("step2");
    step1.style.display = "none";
    step2.style.display = "block";
  });

  finish.addEventListener("click", function () {
    closeForm();
  });

  for (let index = 0; index < ctaButtons.length; index++) {
    const ctaButton = ctaButtons[index];

    ctaButton.addEventListener("click", function () {
      openForm();
    });
  }

  function openForm() {
    const closeButtons = document.getElementsByClassName("close");

    modal.classList.add("modal--active");
    body.classList.add("noScroll");

    for (let index = 0; index < closeButtons.length; index++) {
      const closeButton = closeButtons[index];
      closeButton.addEventListener("click", function () {
        closeForm();
      });
    }
  }

  function closeForm() {
    if (modal.classList.contains("modal--active")) {
      modal.classList.remove("modal--active");
      body.classList.remove("noScroll");
    }
  }
};

//using an IIFE to initialise
const init = (() => {
  secondaryNavSpacing();
  formControl();
})();
