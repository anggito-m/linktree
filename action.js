var tileShareButton = document.querySelectorAll(".tile-share-button");
var shareButton = document.querySelectorAll(".share-button");

function copyTxt(e) {
  e.preventDefault();
  const link = this.getAttribute("link");
  try {
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard");
  } catch (err) {}
}

tileShareButton.forEach((tileShareButton) =>
  tileShareButton.addEventListener("click", copyTxt)
);
shareButton.forEach((shareButton) =>
  shareButton.addEventListener("click", copyTxt)
);
