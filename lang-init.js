// Applies the saved language before first paint, so the other language never flashes.
// A classic script in <head>: the page's modules run too late for this.
(function () {
  try {
    var lang = localStorage.getItem('bcc411-lang');
    if (lang === 'zh' || lang === 'en') document.documentElement.dataset.lang = lang;
    if (lang === 'en') document.documentElement.lang = 'en';
  } catch (e) {
    // Storage blocked: stay bilingual.
  }
})();
