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
        
});
    
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