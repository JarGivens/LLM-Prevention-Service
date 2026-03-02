(function () {
  const url = new URL(window.location.href);

  // Only run on Google search result pages
  if (url.hostname.includes("google.") && url.pathname === "/search") {

    const query = url.searchParams.get("q");
    if (!query) return;

    // If it doesn't already include -ai, add it
    if (!query.includes(" -ai")) {
      url.searchParams.set("q", query + " -ai");
      window.location.replace(url.toString());
    }
  }
})();