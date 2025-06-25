window.addEventListener("load", () => {
  if (document.getElementById("mainframe-filters-button")) return;

  const button = document.createElement("div");
  button.id = "mainframe-filters-button";
  button.innerText = "FILTER";
  document.body.appendChild(button);
});
