document.addEventListener("DOMContentLoaded", () => {
  lightbox.option({
    wrapAround: true,
  });
});

window.onscroll = function () {
  if (
    document.body.scrollTop >= 350 ||
    document.documentElement.scrollTop >= 350
  ) {
    document.querySelector(".gallery").classList.add("change");
  } else {
    document.querySelector(".gallery").classList.remove("change");
  }
};
