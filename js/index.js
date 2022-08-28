window.addEventListener("load",function(){
    var bigboxs=document.querySelector("#bigbox");
    // var img=document.getElementsByTagName("img");
    var leftbtn =document.querySelector(".leftbtn");
    var rightbtn=document.querySelector('.rightbtn');
    
    //鼠标经过大盒子箭头显示
    bigboxs.addEventListener("mouseenter",function(){
        leftbtn.style.display="block";
        rightbtn.style.display="block";
    })
    //鼠标离开大盒子箭头隐藏
    bigboxs.addEventListener("mouseleave",function(){
        leftbtn.style.display="none";
        rightbtn.style.display="none";
    })
    
})
