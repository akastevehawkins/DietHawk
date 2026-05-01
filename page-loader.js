(function bootWrapperPage() {
  const loaderPageLabels = {
    today: "Today",
    schedule: "Schedule",
    meals: "Meals",
    restaurant: "Restaurant",
    memory: "Memory",
  };

  async function bootDietHawkPage() {
    const currentPage = document.body.dataset.page || "today";
    document.title = `DietHawk | ${loaderPageLabels[currentPage] || loaderPageLabels.today}`;

    try {
      const response = await fetch("./index.html", { credentials: "same-origin" });
      if (!response.ok) {
        throw new Error(`Failed to load DietHawk shell (${response.status}).`);
      }

      const markup = await response.text();
      const parsed = new DOMParser().parseFromString(markup, "text/html");
      document.body.innerHTML = parsed.body.innerHTML;
      document.body.dataset.page = currentPage;

      const script = document.createElement("script");
      script.src = "./app.js";
      document.head.appendChild(script);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      document.body.innerHTML = `
        <main class="app-shell">
          <section class="panel" style="padding: 22px; margin-top: 24px;">
            <p class="eyebrow">Load failure</p>
            <h1>DietHawk</h1>
            <p class="support-text">${message}</p>
          </section>
        </main>
      `;
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      void bootDietHawkPage();
    });
    return;
  }

  void bootDietHawkPage();
})();
