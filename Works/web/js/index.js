let slideIndex = 0;

const showSlides = () => {

    const slides = document.getElementsByClassName("slider-container");
    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {

        slides[i].style.display = "none"; // 先用迴圈把照片清空
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < dots.length; i++) {

        dots[i].className = dots[i].className.replace(" active", ""); // 先用迴圈把每個 dot 移除掉 active的class
    }

    slides[slideIndex - 1].style.display = "block"; // 把畫面一個一個設置成block , 顯示出來
    dots[slideIndex - 1].className += " active"; // 之後再新增 active的class


    setTimeout(showSlides, 3000);
};

showSlides();














