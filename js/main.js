const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector(".search input");

searchEl.addEventListener("click", () => {
	searchInputEl.focus();
});
searchInputEl.addEventListener("focus", () => {
	searchEl.classList.add("focused");
	searchInputEl.setAttribute("placeholder", "통합검색");
});
searchInputEl.addEventListener("blur", () => {
	searchEl.classList.remove("focused");
	searchInputEl.removeAttribute("placeholder", "");
});

// badge scroll
const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");
// _.throttle(function, time);
// gsap.(element, time, option);
window.addEventListener(
	"scroll",
	_.throttle(function () {
		if (window.scrollY > 500) {
			gsap.to(badgeEl, 0.6, {
				opacity: 0,
				display: "none",
			});
			// 버튼 보이기
			gsap.to(toTopEl, 0.2, {
				x: 0,
			});
		} else {
			gsap.to(badgeEl, 0.6, {
				opacity: 1,
				display: "block",
			});
			// 버튼 숨기기
			gsap.to(toTopEl, 0.2, {
				x: 100,
			});
		}
	}, 300)
);

toTopEl.addEventListener("click", () => {
	gsap.to(window, 0.4, {
		scrollTo: 0,
	});
});

// fade-in animation
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach((fadeEl, idx) => {
	gsap.to(fadeEl, 1, {
		opacity: 1,
		delay: (idx + 1) * 0.6,
	});
});

// NOTICE SWIPER
new Swiper(".notice-line .swiper", {
	direction: "vertical",
	loop: true,
	autoplay: {
		delay: 5000,
	},
});
// PROMOTION SWIPER
new Swiper(".promotion .swiper", {
	// default
	// direction: "horizontal",
	loop: true,
	autoplay: {
		delay: 5000,
	},
	slidesPerView: 3,
	spaceBetween: 10,
	centeredSlides: true,
	pagination: {
		// 페이지 번호 사용 여부
		el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
		clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
	},
	// navigation: {
	// 	prevEl: ".promotion .swiper-prev", // 이전 버튼 선택자
	// 	nextEl: ".promotion .swiper-next", // 다음 버튼 선택자
	// },
});

// AWARDS SWIPER
new Swiper(".awards .swiper", {
	loop: true,
	slidesPerView: 5,
	spaceBetween: 30,
	autoplay: true,
	centeredSlides: true,

	// navigation: {
	// 	prevEl: ".awards .swiper-prev", // 이전 버튼 선택자
	// 	nextEl: ".awards .swiper-next", // 다음 버튼 선택자
	// },
});

// toggle-promotion
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");

let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", () => {
	isHidePromotion = !isHidePromotion;
	if (isHidePromotion) {
		promotionEl.classList.add("hide");
	} else {
		promotionEl.classList.remove("hide");
	}
});

// scroll animation
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach((spyEl) => {
	new ScrollMagic.Scene({
		// 감시할 장면(Scene)을 추가
		triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
		triggerHook: 0.8, // 화면의 80% 지점에서 보여짐 여부 감시
	})
		.setClassToggle(spyEl, "show") // 요소가 화면에 보이면 show 클래스 추가
		.addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 할당(필수!)
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
