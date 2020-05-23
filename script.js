function removePromotions() {
    let promotedTweet = $('article:has(svg ~ div:contains("Promoted"))');
    if (promotedTweet) {
        promotedTweet.css('display', 'none');
    }

    let trending = $('div[aria-label*="Timeline: Trending now"]>div>div');
    trending.each(function(i) {
        let promotedTrend = $(this).find('svg~span>span:contains("Promoted")');
        if (promotedTrend.length) {
            console.log('Hiding Promoted Trend');
            $(this).css('display', 'none')
        }
    });

    let whoToFollow = $('aside[aria-label*="Who to follow"]>div>div');
    whoToFollow.each(function(i) {
        let promotedTweeter = $(this).find('svg~div>span:contains("Promoted")');
        if (promotedTweeter.length) {
            console.log('Hiding Promoted Tweeter');
            $(this).css('display', 'none')
        }
    });
} 

window.addEventListener('scroll', removePromotions);

$(function() {
    removePromotions();
});

