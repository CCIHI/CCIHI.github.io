function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
          for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
          }

          // Remove the background color of all tablinks/buttons
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].style.backgroundColor = "";
        }

          document.querySelector('article').style.display = 'none';
          document.getElementById(pageName).style.display = "block";
            elmnt.style.backgroundColor = color;
        }
        // 获取所有的 .tablink 元素
        var tablinks = document.querySelectorAll(".tablink");

        // 对每个 .tablink 元素进行操作
        tablinks.forEach(function(tablink) {
        // 当鼠标悬停在 .tablink 上时
        tablink.addEventListener("mouseover", function() {
        gsap.to(this, { 
            duration: 0.2, // 动画持续时间
            scale: 1.1, // 向上移动的距离
            transformOrigin: "center bottom",
            ease: "power1.out", // 缓动函数
            });
        });

        // 当鼠标离开 .tablink 时
        tablink.addEventListener("mouseout", function() {
        gsap.to(this, { 
            duration: 0.2, // 动画持续时间
            scale: 1, // 回到原来的位置
            transformOrigin: "center bottom",
            ease: "power1.in", // 缓动函数
            });
        });

        var BookOpens = document.getElementsByClassName("HM_book");

        for (var i = 0; i < BookOpens.length; i++) {
          var BookOpen = BookOpens[i];
        
        BookOpen.addEventListener("mouseover", function() {
            gsap.to(this, {
                duration: 0.2,
                scale: 1.1,
                transformOrigin: "center bottom",
                ease: "power1.out",
            });
        });

        BookOpen.addEventListener("mouseout", function() {
          gsap.to(this, {
              duration: 0.2,
              scale: 1,
              transformOrigin: "center bottom",
              ease: "power1.out",
          });
      });
      }
});

function showDescription(id) {
  // 隱藏所有書的介紹
  var descriptions = document.getElementsByClassName('book-description');
  for (var i = 0; i < descriptions.length; i++) {
      descriptions[i].style.display = 'none';
  }

  // 顯示傳遞的 id 對應的書的介紹
  document.getElementById(id).style.display = 'block';

  var animation = gsap.fromTo(".book-description", {
    opacity: 0, // 開始時的透明度
  }, {
    opacity: 1, // 結束時的透明度
    duration: 1, // 動畫持續時間
    ease: "power1.out", // 緩動函數
  });

  // 為 clickableElement 添加 click 事件監聽器
  descriptions.addEventListener("click", function() {
      // 播放動畫
      animation.play();
  });
}
    
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }

  }


  window.onload = function() {
    var container = document.querySelector('.overflow-auto');

    container.addEventListener('wheel', function(e) {
        if (e.deltaY != 0) {
            container.scrollLeft += e.deltaY;
            e.preventDefault();
        }
    });

    showDescription('description-book1');

}