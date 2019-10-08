window.onload = () => {
  document.getElementById("homeTab").style.backgroundColor = 'black';
}

function tabActive(elmt) {
	document.getElementById("homeTab").style.backgroundColor = '#222';
	document.getElementById("aboutTab").style.backgroundColor = '#222';
	document.getElementById("photosTab").style.backgroundColor = '#222';
	document.getElementById("contactTab").style.backgroundColor = '#222';
	elmt.style.backgroundColor = 'black';
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

$(document.body).on('touchmove', onScroll);
$(window).on('scroll', onScroll); 

function onScroll() {
	var pos = window.scrollY;

	// Link Highlighting
	if (pos > 0 && pos < 598) {
		tabActive(document.getElementById("homeTab"), 'homeTab');
	}
	if (pos > 599 && pos < 1348) {
		tabActive(document.getElementById("aboutTab"), 'aboutTab');
	}
	if (pos > 1349 && pos < 2270) {
		tabActive(document.getElementById("photosTab"), 'photosTab');
	}
	if (pos > 2271 && pos < 2351) {
		tabActive(document.getElementById("contactTab"), 'contactTab');
	}
}