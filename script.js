const shareButton = document.querySelector(".share-button");
const shareOptions = document.querySelector(".share-options");
const socialMediaButton = document.querySelectorAll(".social-media-icon");

const toggleVisibilityShareOptions = () => {
  if (shareOptions.style.visibility === "visible") {
    shareOptions.style.visibility = "hidden";
  } else {
    shareOptions.style.visibility = "visible";
  }
};

shareButton.addEventListener("click", toggleVisibilityShareOptions);

socialMediaButton.forEach((icon) => {
  icon.addEventListener("click", toggleVisibilityShareOptions);
});
