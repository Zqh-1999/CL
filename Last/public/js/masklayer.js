// 功能1： 点击退出 出现一个遮罩层 停留五秒后 跳转到登录
// 获取按钮
var exitbtn = document.querySelector("#exitbtn");
// 添加点击事件
exitbtn.addEventListener("click", function () {
    // 获取遮罩层
    var masklayer = document.querySelector(".masklayer");
    masklayer.style.display = "block";
    setTimeout(function () {
        masklayer.style.display = "none";
        location.href = ""
    }, 5000)
})