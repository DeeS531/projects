const swiper = new Swiper(".swiper", {
	slidesPerView: "1",
	loop: false,
	spaceBetween: 20,
	autoHeight: false,
	observer: true,
	observeParents: true,
	
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	breakpoints: {
		440: {
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
		},
		440: {
			slidesPerView: 1.3,
			spaceBetween: 20,
			autoHeight: true,
		},
		640: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		892: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1268: {
			slidesPerView: 4,
			spaceBetween: 20,
		},
	},
});

const slides = document.querySelectorAll(".swiper-slide");




let maxHeight = 0;
slides.forEach((slide) => {
	const slideHeight = slide.offsetHeight;
	if (slideHeight > maxHeight) {
		maxHeight = slideHeight;
	}
});

let maxWidth = 0;
slides.forEach((slide) => {
	const slideWidth = slide.getBoundingClientRect().width;
	if (slideWidth > maxWidth) {
		maxWidth = slideWidth;
	}
});


const screenWidth = window.innerWidth;
if (screenWidth <= 474) {
	
	maxHeight = 450;
}


slides.forEach((slide) => {
	slide.style.height = `${maxHeight}px`;
});


const pagination_active = document.querySelectorAll(
	".swiper-pagination-bullet"
);

pagination_active.forEach((item) => {
	item.style.backgroundColor = "#ED769C";
});


if (screenWidth <= 474) {
	const pagination = document.querySelectorAll(".swiper-pagination");

	pagination.forEach((item) => {
		item.style.marginBottom = "32px";
	});
}

if (screenWidth => 474) {
	const pagination = document.querySelectorAll(".swiper-pagination");

	pagination.forEach((item) => {
		item.style.marginTop = "0";
	});
}



