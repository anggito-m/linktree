var shareButton = document.querySelectorAll(".tile-share-button");

function copyTxt(e) {
  e.preventDefault();
  const link = this.getAttribute("link");
  try {
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard");
  } catch (err) {}
}

shareButton.forEach((shareButton) =>
  shareButton.addEventListener("click", copyTxt)
);
