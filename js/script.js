document.addEventListener('DOMContentLoaded', () => {

    gsap.fromTo(".loading-animation", {
        x: '100vw' 
    }, {
        x: '-32vw', 
        rotation: -720,
        duration: 2, 
        ease: "power2.out", 
        onComplete: () => {
            gsap.to("#loading-wrapper", {
                duration: 0.2, 
                opacity: 0,
                display: "none"
            });
        }
    });
});

let currentIndex = 0; // 当前显示图片的索引
const slides = document.querySelectorAll('.CCIH .slide'); // 获取所有的轮播图片
const totalSlides = slides.length; // 轮播图片总数

function showNextSlide() {
    // 隐藏当前图片
    slides[currentIndex].style.display = 'none';
    // 计算下一张图片的索引
    currentIndex = (currentIndex + 1) % totalSlides;
    // 显示下一张图片
    slides[currentIndex].style.display = 'block';
}

// 设置定时器，每0.5秒切换一次图片
setInterval(showNextSlide, 500);

document.querySelectorAll('a.link').forEach(link => {
    // 鼠标悬停事件
    link.addEventListener('mouseover', () => {
        // 隐藏当前链接内的Or图片
        const orImage = link.querySelector('.Or');
        if (orImage) {
            orImage.style.display = 'none';
        }
        // 显示对应的ho图片
        const hoImage = link.querySelector('.ho');
        if (hoImage) {
            hoImage.style.display = 'block';
        }
    });

    // 鼠标移开事件
    link.addEventListener('mouseout', () => {
        // 显示Or图片
        const orImage = link.querySelector('.Or');
        if (orImage) {
            orImage.style.display = 'block';
        }
        // 隐藏ho图片
        const hoImage = link.querySelector('.ho');
        if (hoImage) {
            hoImage.style.display = 'none';
        }
    });
});

document.querySelector('body').addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const logo = document.getElementById('anchor');
    const rekt = logo.getBoundingClientRect();
    const logoCenterX = rekt.left + rekt.width / 3;
    const logoCenterY = rekt.top + rekt.height / 3;

    let offsetX = mouseX - logoCenterX;
    let offsetY = mouseY - logoCenterY;

    const maxOffsetX = rekt.width / 1;
    const maxOffsetY = rekt.height / 1;

    offsetX = Math.max(-maxOffsetX, Math.min(maxOffsetX, offsetX));
    offsetY = Math.max(-maxOffsetY, Math.min(maxOffsetY, offsetY));

    const eye = document.querySelectorAll('.logo_eye');
    eye.forEach(eye => {
        // 计算eye相对于其父元素的偏移量，而不是基于页面的绝对位置
        const eyeOffsetX = offsetX * 0.1; // 调整这个值以改变眼睛的移动幅度
        const eyeOffsetY = offsetY * 0.1; // 调整这个值以改变眼睛的移动幅度

        // 更新eye的位置，基于原始位置进行偏移
        eye.style.transform = `translate(${eyeOffsetX}px, ${eyeOffsetY}px)`;
    });
});

/*
function logoeye(event) {
    const eye = document.querySelectorAll('.logo_eye');
    eye.forEach(function(eye) {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rotation = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate(" + rotation + "deg)";
    });
}
*/