var slideIndx = 0;

function slideFun() {
    var index;
    var slidePic = document.getElementsByClassName("SlidShow");
    for (index = 0; index < slidePic.length; index++) {
        slidePic[index].style.display = "none";
    }
    slideIndx++;
    if (slideIndx > slidePic.length){ 
        slideIndx = 1; 
    }
    slidePic[slideIndx - 1].style.display = "block";
    setTimeout(slideFun, 1500);
}

slideFun();


