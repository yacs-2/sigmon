/**
 This script will inject the global page header into the #gheader div of each page
**/

const INJECTION ='<div id="global-header"><ul id="nav-list"><li><a href="/sigmon">Home</a></li><li><a href="/sigmon/contact-info">Contact Info</a><ul><li><a href="/sigmon/photo-album">Phone #</a></li></ul></li><li><a href="/sigmon/photo-albums">Photos</a><ul><li><a href="#">Photo #1</a></li></ul></li><li><a href="/sigmon/music">Music</a><ul><li><a href="#">Album/Artist #1</a></li></ul></li><li><a href="/sigmon/web-dev">Web Development</a><ul><li><a href="/sigmon/wd-sub/week1.html">Week 1</a></li><li><a href="/sigmon/wd-sub/recipe.html">Week 2</a></li><li><a href="/sigmon/wd-sub/anchors.html">Week 3</a></li><li><a href="#">Week 4</a></li><li><a href="/sigmon/wd-sub/reviews.html">Week 5</a></li><li><a href="/sigmon/wd-sub/journal.html">Week 6</a></li><li><a href="/sigmon/wd-sub/band-page.html">Week 7</a></li><li><a href="/sigmon/wd-sub/list-maker.html">Week 8</a></li><li><a href = "/sigmon/wd-sub/pythag.html">Week 9</a></li><li><a href = "/sigmon/wd-sub/ttt.html">Week 10</a></li></ul></li></ul></div><div class="bordered"><h2>Welcome to Mei Mei\'s Website! :)</h2></div>';

let _div= document.getElementById("#gheader");

_div.innerHTML = INJECTION;
