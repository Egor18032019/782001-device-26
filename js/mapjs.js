
var linkMap = document.querySelector(".about-map");
var mopup = document.querySelector(".modal-map");
var mclose = mopup.querySelector(".modal-close");

linkMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  mopup.classList.add("modal-show");
})

mclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mopup.classList.remove("modal-show");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mopup.classList.contains("modal-show")) {
      mopup.classList.remove("modal-show");
    }
  }
});
