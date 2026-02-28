(function () {
  const url = new URL(window.location.href);                             // get the url of the current page  
  if (url.hostname.includes("google.") && url.pathname === "/search") {  // checks for if is google search results page?
    const hasWebParam = url.searchParams.get("udm") === "web";           // force search type to be web results only
    if (!hasWebParam) {
      url.searchParams.set("udm", "web");                                // force search type to be web results only step 2
      window.location.replace(url.toString());                           // set the new url
    }
  }
})();  // Auto-call function