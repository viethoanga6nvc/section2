function showOrHide(index) {
  const x = document.getElementById("content-1");
  console.log(x);
  const y = x.getElementsByTagName("p");
  if (y[index].style.display === "none") {
    y[index].style.display = "block";
  } else {
    y[index].style.display = "none";
  }
}
