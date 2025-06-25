(function () {
  window.addEventListener("DOMContentLoaded", function () {
    const existing = document.getElementById("mainframe-test-button");
    if (existing) return;

    const test = document.createElement("div");
    test.id = "mainframe-test-button";
    test.innerText = "FILTER";
    test.style.position = "fixed";
    test.style.top = "50%";
    test.style.right = "0";
    test.style.transform = "translateY(-50%)";
    test.style.background = "#111";
    test.style.color = "#fff";
    test.style.padding = "12px 18px";
    test.style.fontWeight = "bold";
    test.style.fontFamily = "inherit";
    test.style.borderTopLeftRadius = "6px";
    test.style.borderBottomLeftRadius = "6px";
    test.style.cursor = "pointer";
    test.style.zIndex = "999999";
    test.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    test.addEventListener("click", () => alert("Button works!"));

    document.body.appendChild(test);
    console.log("✅ Test button added");
  });
})();
