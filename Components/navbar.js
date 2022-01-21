function navbar(){
    return `<header>  
    <div id="DivImgs">  <a href="./index.html"> <img class="DivImgs" src="./img/KindMealLogo.png" alt="KindMealLogo"> </a> </div>
  <a href="https://www.kindmeal.my/widget.htm"> <div class="socialPng" id="socialimg"> <img class="pc1"  src="./img/link.png" alt="linkLogo"></div> </a>
  <a href="https://www.facebook.com/KindMeal.my"> <div class="socialPng"><img class="pc1" src="./img/fb1.png" alt="fbLogo"></div> </a>
   <a href="https://twitter.com/KindMeal"> <div class="socialPng"><img class="pc1" src="./img/twitter.png" alt="TwtrLogo"></div> </a>
    <div id="loginDiv">
       <a href="./loginPopup.html"> <button id="lgnbtn">Login</button> </a>
       <a href="./signupPopup.html"> <button id="sgnipbtn">Sign up</button> </a>
    </div>
</header>
<div class="greenNav">
    <a href="./index.html">
        <div class="hmClr"> Home</div>
    </a>

    <div class="nv"> <a href="Food_Page.html">
        Meal Deals</div>
    </a>
    <div class="nv"> <a href="https://www.kindmeal.my/moments.htm">
        KindMoments</div>
    </a>
    <div class="nv"> <a href="https://www.kindmeal.my/hotpicks.htm">
        Hot Picks</div>
    </a>
    <div class="nv"> <a href="Food_Page.html">
        Recipes</div>
    </a>
    <div class="nv"> <a href="https://www.kindmeal.my/vegetarian_directory.htm">
        Directory</div>
    </a>
    <div class="nv"> <a href="https://www.kindmeal.my/articles/">
        Articles</div>
    </a>
    <div class="nv" > <a href="https://www.kindmeal.my/DigiRewards">
        Digi Rewards</div>
    </a>
    <div class="nv" id="last"> <a href="https://www.kindmeal.my/help.htm">
        Help</div>
    </a>
</div>
`

}

export default navbar
