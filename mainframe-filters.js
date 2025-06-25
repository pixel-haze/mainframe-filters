(function () {
  function createAndInjectButton() {
    if (document.getElementById("mainframe-filters-button")) return;

    const button = document.createElement("div");
    button.id = "mainframe-filters-button";
    button.innerText = "FILTER";

    // Apply styles directly to avoid external CSS conflicts
    Object.assign(button.style, {
      position: "fixed",
      top: "50%",
      right: "0",
      transform: "translateY(-50%)",
      backgroundColor: "#ccc",
      color: "#000",
      padding: "12px 16px",
      fontWeight: "bold",
      fontSize: "14px",
      zIndex: "9999",
      cursor: "pointer",
      borderTopLeftRadius: "6px",
      borderBottomLeftRadius: "6px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      transition: "right 0.3s ease",
    });

    document.body.appendChild(button);
    console.log("✅ Button injected and styled.");
  }

  function waitUntilFeatherSettles() {
    let attempt = 0;
    const maxAttempts = 20;

    const interval = setInterval(() => {
      const title = document.querySelector(".post-title, h1");
      attempt++;

      if (title || attempt >= maxAttempts) {
        clearInterval(interval);
        createAndInjectButton();
      }
    }, 300);
  }

  waitUntilFeatherSettles();
})();
