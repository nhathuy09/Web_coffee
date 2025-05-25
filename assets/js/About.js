// Mảng lưu trữ tên file hình ảnh
const images = [
  "about_banner5.jpg",
  "about_banner.jpg",
  "about_banner2.jpg",
  "about_banner3.jpg",
  "about_banner4.jpg",
];

// Lấy các phần tử DOM
const slidesContainer = document.querySelector(".slides");
const dotsContainer = document.querySelector(".dots");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
let currentIndex = 0;

// Tạo các slide và chấm điều hướng
images.forEach((image, index) => {
  // Tạo slide
  const slide = document.createElement("div");
  slide.classList.add("slide");
  slide.innerHTML = `<img src="./assets/img/${image}" alt="Banner ${
    index + 1
  }" />`;
  slidesContainer.appendChild(slide);

  // Tạo chấm điều hướng
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("active");
  dot.addEventListener("click", () => showSlide(index));
  dotsContainer.appendChild(dot);
});

// Hiển thị slide theo chỉ số
function showSlide(index) {
  currentIndex = index;
  if (currentIndex >= images.length) currentIndex = 0;
  if (currentIndex < 0) currentIndex = images.length - 1;
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Cập nhật chấm active
  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

// Chuyển slide tiếp theo
function nextSlide() {
  showSlide(currentIndex + 1);
}

// Chuyển slide trước đó
function prevSlide() {
  showSlide(currentIndex - 1);
}

// Tự động chuyển slide mỗi 5 giây
let slideInterval = setInterval(nextSlide, 5000);

// Xử lý sự kiện nút trước/sau
nextButton.addEventListener("click", () => {
  clearInterval(slideInterval);
  nextSlide();
  slideInterval = setInterval(nextSlide, 5000);
});

prevButton.addEventListener("click", () => {
  clearInterval(slideInterval);
  prevSlide();
  slideInterval = setInterval(nextSlide, 5000);
});
