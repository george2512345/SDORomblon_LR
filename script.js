(function () {
  "use strict";

  document.getElementById("year").textContent = new Date().getFullYear();

  // ---- Mobile nav toggle ----
  const navToggle = document.getElementById("navToggle");
  const mobileNav = document.getElementById("main-nav-mobile");
  navToggle.addEventListener("click", function () {
    const open = mobileNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  mobileNav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      mobileNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // ---- Category grid + search ----
  const categoryGrid = document.getElementById("categoryGrid");
  const resultsMeta = document.getElementById("resultsMeta");
  const emptyState = document.getElementById("emptyState");
  const statCount = document.getElementById("statCount");
  const categorySearch = document.getElementById("categorySearch");

  statCount.textContent = CATEGORIES.length;

  function renderCategories(query) {
    const q = (query || "").trim().toLowerCase();
    const filtered = CATEGORIES.filter(function (c) {
      return !q || c.name.toLowerCase().includes(q) || c.note.toLowerCase().includes(q);
    });

    resultsMeta.textContent = filtered.length + (filtered.length === 1 ? " category" : " categories");
    categoryGrid.innerHTML = "";
    emptyState.hidden = filtered.length !== 0;

    filtered.forEach(function (c, i) {
      const card = document.createElement("a");
      card.className = "res-card res-card--" + c.color + (i % 2 === 0 ? " tilt-l" : " tilt-r");
      card.href = c.url;
      card.target = "_blank";
      card.rel = "noopener";
      card.innerHTML =
        '<span class="res-icon">' + c.icon + '</span>' +
        '<h3 class="res-title">' + c.name + '</h3>' +
        '<p class="res-note">' + c.note + '</p>' +
        '<span class="res-link">Open it up →</span>';
      categoryGrid.appendChild(card);
    });
  }

  renderCategories("");
  categorySearch.addEventListener("input", function (e) {
    renderCategories(e.target.value);
  });

  // ---- Quick links list ----
  const quickLinkList = document.getElementById("quickLinkList");
  QUICK_LINKS.forEach(function (link) {
    const li = document.createElement("li");
    li.innerHTML = '<a href="' + link.url + '" target="_blank" rel="noopener"><span class="link-icon">' + link.icon + '</span>' + link.name + '<span class="link-arrow" aria-hidden="true">→</span></a>';
    quickLinkList.appendChild(li);
  });

  // ---- External systems rail ----
  const systemRail = document.getElementById("systemRail");
  EXTERNAL_SYSTEMS.forEach(function (sys) {
    const a = document.createElement("a");
    a.className = "sys-item";
    a.href = sys.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.innerHTML = '<span class="sys-icon">' + sys.icon + '</span><span class="sys-text"><span class="sys-name">' + sys.name + '</span><span class="sys-note">' + sys.note + '</span></span>';
    systemRail.appendChild(a);
  });

  // ---- Staff list ----
  const staffList = document.getElementById("staffList");
  STAFF.forEach(function (person) {
    const div = document.createElement("p");
    div.innerHTML = '<strong>' + person.name + '</strong> \u2014 ' + person.role + '<br><a href="mailto:' + person.email + '">' + person.email + '</a>';
    staffList.appendChild(div);
  });

  // ---- Password reset button ----
  const resetBtn = document.getElementById("passwordResetBtn");
  resetBtn.href = PASSWORD_RESET_URL;
  resetBtn.target = "_blank";
  resetBtn.rel = "noopener";
})();
