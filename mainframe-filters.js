(function () {
  const FILTER_URL = "https://mainframe.pixelhaze.academy/filters";

  function injectFilter() {
    const existing = document.querySelector("#mainframe-filter-frame");
    if (existing) {
      console.log("🔁 Filter frame already exists.");
      return;
    }

    const h1 = document.querySelector("h1, .post-title");
    if (!h1 || !h1.parentNode) {
      console.warn("❌ Could not find article heading");
      return;
    }

    const iframe = document.createElement("iframe");
    iframe.id = "mainframe-filter-frame";
    iframe.src = FILTER_URL;
    iframe.style.width = "100%";
    iframe.style.height = "320px";
    iframe.style.border = "none";
    iframe.style.marginBottom = "2rem";
    iframe.style.zIndex = "9999";

    h1.parentNode.insertBefore(iframe, h1);
    console.log("✅ Mainframe filter injected above article title.");
  }

  function waitForReady() {
    if (document.readyState === "complete" || document.readyState === "interactive") {
      injectFilter();
    } else {
      document.addEventListener("DOMContentLoaded", injectFilter);
    }
  }

  waitForReady();
})();
