//Turn pages when click next or prev btn

const pageTurnBtn = document.querySelectorAll(".nextprev-btn");

pageTurnBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const pageId = btn.dataset.page;
    const page = document.getElementById(pageId);

    const isTurned = page.classList.toggle("turn");

    setTimeout(() => {
      page.style.zIndex = isTurned ? 20 + index : 20 - index;
    }, 500);
  });
});

// Contact Me button — auto flip through pages
const pages = document.querySelectorAll(".book-page.page-right");
const contactMeBtn = document.querySelector(".btn.contact");

contactMeBtn.addEventListener("click", () => {
  pages.forEach((page, index) => {
    // Delay between each page flip
    setTimeout(() => {
      page.classList.add("turn");

      // After animation, adjust z-index so page stays behind
      setTimeout(() => {
        page.style.zIndex = 20 + index;
      }, 500);
    }, index * 300);
  });
});

//Create reverse index function
let tottalPages = pages.length;
let pageNumber = 0;

let reverseIndex = function () {
  pageNumber--;
  if (pageNumber < 0) {
    pageNumber = tottalPages - 1;
  }
};

//Back profile button
const backProfileBtn = document.querySelector(".back-profile");

backProfileBtn.addEventListener("click", () => {
  pages.forEach((_, index) => {
    setTimeout(() => {
      reverseIndex();
      pages[pageNumber].classList.remove("turn");

      setTimeout(() => {
        reverseIndex();
        pages[pageNumber].style.zIndex = 10 + index;
      }, 500);
    }, (index + 1) * 200 + 100);
  });
});

//opening animation
const coverRight = document.querySelector(".cover.cover-right");
const pageLeft = document.querySelector(".book-page.page-left");

//opening animation (cover right animation)
setTimeout(() => {
  coverRight.classList.add("turn");
}, 2100);

setTimeout(() => {
  coverRight.style.zIndex = -1;
}, 2800);

//opening animation (page left or profile page animation)
setTimeout(() => {
  pageLeft.style.zIndex = 20;
}, 3200);

//opening animation (all page right animation)
pages.forEach((_, index) => {
  setTimeout(() => {
    reverseIndex();
    pages[pageNumber].classList.remove("turn");

    setTimeout(() => {
      reverseIndex();
      pages[pageNumber].style.zIndex = 10 + index;
    }, 500);
  }, (index + 1) * 200 + 2100);
});
