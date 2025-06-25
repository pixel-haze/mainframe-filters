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

function buildFilterUI() {
  const container = document.getElementById('mainframe-filter-container');
  if (!container) return;

  container.innerHTML = `
    <select id="filter-platform"><option>Platform</option></select>
    <select id="filter-category" disabled><option>Category</option></select>
    <select id="filter-topic" disabled><option>Topic</option></select>
    <button id="filter-go">Go</button>
  `;

  // Populate dropdowns via Notion query or hardcoded JSON
  const platforms = ["Squarespace","Shopify","WordPress"]; // replace with your live list or JSON data
  platforms.forEach(p => {
    document.getElementById('filter-platform').add(new Option(p, p));
  });

  document.getElementById('filter-platform').addEventListener('change', e => {
    const catSelect = document.getElementById('filter-category');
    catSelect.disabled = false;
    // ideally fetch categories via JSON mapping, here is sample reset:
    catSelect.innerHTML = '<option>Pages & Content</option><option>Commerce</option>';
    document.getElementById('filter-topic').disabled = true;
  });

  document.getElementById('filter-category').addEventListener('change', e => {
    const topicSelect = document.getElementById('filter-topic');
    topicSelect.disabled = false;
    topicSelect.innerHTML = '<option>Getting Started</option><option>DNS Records</option>';
  });

  document.getElementById('filter-go').addEventListener('click', () => {
    // user selection logic
    const plat = document.getElementById('filter-platform').value;
    const cat = document.getElementById('filter-category').value;
    const topic = document.getElementById('filter-topic').value;
    // redirect or filter Notion site
    window.location.href = `/filters?platform=${encodeURIComponent(plat)}&category=${encodeURIComponent(cat)}&topic=${encodeURIComponent(topic)}`;
  });
}

