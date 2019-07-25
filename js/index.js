const p1 = document.getElementById("p1"),
p2 = document.getElementById("p2"),
title = document.getElementById("title");

prepareSVG(p1);
prepareSVG(p2);

TweenLite.to(p1, 5, {strokeDashoffset: 0});
TweenLite.to(p2, 2, {strokeDashoffset: 0});
TweenLite.to(title, 5, {scale: 2, ease: Bounce.easeOut});

function prepareSVG(el) {
	var l = el.getTotalLength();
	el.style.strokeDasharray = l;
	el.style.strokeDashoffset = l;
}