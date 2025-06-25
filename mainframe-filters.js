(function () {
  // Create the button and insert it
  function insertFilterButton() {
    if (document.getElementById("mainframe-filters-button")) return;

    const button = document.createElement("div");
    button.id = "mainframe-filters-button";
    button.innerText = "FILTER";

    // Add click listener (optional drawer logic can go here)
    button.addEventListener("click", () => {
      alert("This will become the filter drawer.");
    });

    document.body.appendChild(button);
    console.log("✅ Filter button injected");
  }

  // Wait for .post-title or h1 to exist, then inject
  function waitForContent() {
    const title = document.querySelector(".post-title, h1");
    if (title) {
      insertFilterButton();
    } else {
      requestAnimationFrame(waitForContent);
    }
  }

  // Wait for <body> before starting anything
  function waitForBody() {
    if (document.body) {
      waitForContent();
    } else {
      requestAnimationFrame(waitForBody);
    }
  }

  waitForBody();
})();
