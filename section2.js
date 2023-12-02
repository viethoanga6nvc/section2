function showOrHide() {
  const x = document.getElementById("description");
  const y = document.getElementById("text1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
