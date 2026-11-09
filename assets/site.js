const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
const storedTheme = localStorage.getItem("redstone-theme");

if (storedTheme === "night") {
  root.dataset.theme = "night";
}

function updateThemeButton() {
  if (!themeButton) return;
  const isNight = root.dataset.theme === "night";
  themeButton.textContent = isNight ? "日光" : "夜读";
  themeButton.setAttribute("aria-pressed", String(isNight));
}

updateThemeButton();

themeButton?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "night" ? "light" : "night";
  root.dataset.theme = nextTheme;
  localStorage.setItem("redstone-theme", nextTheme);
  updateThemeButton();
});

const navButton = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-pill");

navButton?.addEventListener("click", () => {
  const open = nav?.classList.toggle("is-open") ?? false;
  navButton.setAttribute("aria-expanded", String(open));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove("is-open");
    navButton?.setAttribute("aria-expanded", "false");
  }
});

const search = document.querySelector("#post-search");
const filterButtons = [...document.querySelectorAll("[data-filter]")];
const postCards = [...document.querySelectorAll("#post-grid .post-card")];
const resultCount = document.querySelector("#post-count");
const emptyState = document.querySelector("#empty-state");
let activeFilter = "all";

function applyPostFilters() {
  const query = search?.value.trim().toLocaleLowerCase("zh-CN") ?? "";
  let visible = 0;

  postCards.forEach((card) => {
    const tags = card.dataset.tags?.split(/\s+/) ?? [];
    const text = card.textContent.toLocaleLowerCase("zh-CN");
    const matchesFilter = activeFilter === "all" || tags.includes(activeFilter);
    const matchesQuery = !query || text.includes(query);
    const show = matchesFilter && matchesQuery;
    card.hidden = !show;
    if (show) visible += 1;
  });

  if (resultCount) resultCount.textContent = `${visible} 篇`;
  if (emptyState) emptyState.hidden = visible !== 0;
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter ?? "all";
    filterButtons.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    applyPostFilters();
  });
});

search?.addEventListener("input", applyPostFilters);
