"use scrict";

window.addEventListener("load", windowLoaded);
function windowLoaded() {
  document.addEventListener("click", documentAction);
}
function documentAction(e) {
  const targetElement = e.target;

  // Scroll to...
  if (targetElement.hasAttribute("data-goto")) {
    const gotoElement = document.querySelector(`${targetElement.dataset.goto}`);
    const headerHeight = document.querySelector(`.header`).offsetHeight;

    if (gotoElement) {
      window.scrollTo({
        top: gotoElement.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }

    e.preventDefault();
  }

  // Works Filtr
  if (
    targetElement.classList.contains("items-works__btn") &&
    !targetElement.classList.contains("active")
  ) {
    const activeElement = document.querySelector(`.items-works__btn.active`);
    const elements = document.querySelectorAll(`.items-works__item`);
    const elementBtn = targetElement.dataset.workBtn;

    activeElement.classList.remove("active");
    targetElement.classList.add("active");

    elements.forEach((element) => {
      !elementBtn || element.dataset.workBtn === elementBtn
        ? (element.hidden = false)
        : (element.hidden = true);
    });
  }
}
