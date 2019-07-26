const page_bg = document.querySelector('.scrolling-bg');

window.addEventListener('scroll', function () {
	set_background_scale()
});

function set_background_scale () {
	let y = window.pageYOffset;
	let initialScale = 1;
	let newScale = initialScale - (y / 10000);

	if (newScale < 0.9) {
		newScale = 0.9;
	}
	page_bg.style.transform = `scale(${newScale})`;
}

function scroll (scrollTo) {
	const element = document.querySelector(scrollTo);
	element.scrollIntoView({ behavior: "smooth" });
}

const nav_links = document.querySelectorAll('.nav-link');

for (let i = 0; i < nav_links.length; i++) {
	let nav_link = nav_links[i];

	nav_link.addEventListener('click', function () {
		scroll(nav_link.dataset.scrollto);
	})
}