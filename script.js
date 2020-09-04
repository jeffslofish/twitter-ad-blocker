function removePromotions() {
  $('article:has(svg~div:contains("Promoted"))').css('display', 'none');
  $('div[aria-label*="Timeline: Trending now"]>div>div:has(svg~span>span:contains("Promoted"))').css('display', 'none');
  $('aside[aria-label*="Who to follow"]>div>div:has(svg~div>span:contains("Promoted"))').css('display', 'none');
  $('div[aria-label*="Timeline: Explore"]>div>div>div:has(div>div>div>div>div>svg~span>span:contains("Promoted by"))').css('display', 'none');
}

// Remove promoted ads when scrolling
window.addEventListener('scroll', removePromotions);

// Remove promted ads when clicking.
// removePromotions() is called multiple times with a delay
// between each call to ensure the ads are removed and not seen.
window.addEventListener('click', function () {
  for (let delay = 0; delay <= 1000; delay+= 250) {
    setTimeout(removePromotions, delay);
  }
});

// Remove promoted ads on the first page load.
// removePromotions() is called multiple times with a delay
// between each call to ensure the ads are removed and not seen.
for (let delay = 500; delay <= 10000; delay+= 500) {
  setTimeout(removePromotions, delay);
}
