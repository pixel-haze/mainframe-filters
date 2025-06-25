
document.addEventListener("DOMContentLoaded", () => {
  const filterState = { platform: '', category: '', topic: '' };
  const dummyArticles = [
    { title: "Canonical Tags", platform: "Squarespace", category: "Pages", topic: "SEO" },
    { title: "Product Variants", platform: "Squarespace", category: "Commerce", topic: "Variants" },
    { title: "Checkout UX", platform: "Shopify", category: "Commerce", topic: "Checkout" },
    { title: "Grid Layouts", platform: "Webflow", category: "Pages", topic: "Design" }
  ];

  const drawer = document.createElement("div");
  drawer.id = "mainframe-drawer";
  drawer.innerHTML = \`
    <h3>Filter Articles</h3>
    <div class="mainframe-filter-group" data-filter="platform">
      <h4>Platform</h4>
      <div class="mainframe-filter-options"></div>
    </div>
    <div class="mainframe-filter-group" data-filter="category">
      <h4>Category</h4>
      <div class="mainframe-filter-options"></div>
    </div>
    <div class="mainframe-filter-group" data-filter="topic">
      <h4>Topic</h4>
      <div class="mainframe-filter-options"></div>
    </div>
    <button id="mainframe-reset">Reset Filters</button>
  \`;

  const tab = document.createElement("div");
  tab.id = "mainframe-drawer-tab";
  tab.textContent = "Filter";

  document.body.appendChild(drawer);
  document.body.appendChild(tab);

  tab.addEventListener("click", () => {
    drawer.classList.toggle("open");
  });

  document.getElementById("mainframe-reset").addEventListener("click", () => {
    filterState.platform = '';
    filterState.category = '';
    filterState.topic = '';
    buildFilters();
  });

  function buildFilters() {
    const groups = ['platform', 'category', 'topic'];
    const grouped = {
      platform: [...new Set(dummyArticles.map(a => a.platform))],
      category: [...new Set(dummyArticles.filter(a => !filterState.platform || a.platform === filterState.platform).map(a => a.category))],
      topic: [...new Set(dummyArticles.filter(a => (!filterState.platform || a.platform === filterState.platform) && (!filterState.category || a.category === filterState.category)).map(a => a.topic))],
    };

    groups.forEach(group => {
      const wrapper = drawer.querySelector(\`[data-filter="\${group}"] .mainframe-filter-options\`);
      wrapper.innerHTML = '';
      grouped[group].forEach(value => {
        const btn = document.createElement("button");
        btn.className = 'mainframe-filter-button';
        btn.textContent = value;
        if (filterState[group] === value) btn.classList.add("active");
        btn.addEventListener("click", () => {
          filterState[group] = (filterState[group] === value) ? '' : value;
          buildFilters();
        });
        wrapper.appendChild(btn);
      });
    });
  }

  buildFilters();
});
