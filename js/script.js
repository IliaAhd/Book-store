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

document
  .querySelector(".writers-accordion")
  .addEventListener("click", function (event) {
    const name = event.target.id.split("-");
    if (name[0] === "button") {
      document
        .querySelector("#book-1")
        .setAttribute("src", `img/writers/${name[1]}-book1.jpg`);

      document
        .querySelector("#book-2")
        .setAttribute("src", `img/writers/${name[1]}-book2.jpg`);
    }
  });
