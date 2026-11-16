// ================================================================
//  SmartDeals India — site script (Amazon + Flipkart + Meesho)
//  AFTER YOU GET APPROVED, replace these placeholders:
//    AMZ_TAG      -> your Amazon Associates tag      (e.g. "smartdea-21")
//    FLIP_AFFID   -> your Flipkart affiliate id      (from affiliate.flipkart.com)
//    (Meesho: join Meesho affiliate via EarnKaro / Cuelinks / INVOLVE Asia,
//     then replace the meesho.com links in .html files with your tracked links)
// ================================================================
var AMZ_TAG    = "YOURTAG-21";
var FLIP_AFFID = "YOURAFFID";

document.addEventListener("DOMContentLoaded", function () {

  // Store-aware search box in the header
  document.querySelectorAll("form.amz-search").forEach(function (f) {
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = f.querySelector("input[name='q']");
      var sel   = f.querySelector("select[name='store']");
      var q = (input && input.value || "").trim();
      if (!q) return;
      var store = sel ? sel.value : "amazon";
      var url;
      if (store === "flipkart") {
        url = "https://www.flipkart.com/search?q=" + encodeURIComponent(q) +
              (FLIP_AFFID ? "&affid=" + encodeURIComponent(FLIP_AFFID) : "");
      } else if (store === "meesho") {
        url = "https://www.meesho.com/search?q=" + encodeURIComponent(q);
      } else {
        url = "https://www.amazon.in/s?k=" + encodeURIComponent(q) + "&tag=" + AMZ_TAG;
      }
      window.open(url, "_blank", "noopener");
    });
  });

  // Current year in footer
  document.querySelectorAll(".yr").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});
