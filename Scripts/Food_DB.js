var body = document.getElementById('Div3');
var MyApiMockServer = [{

Name:"RAWsome Treats",
FudImg:"/img/rawsometreat.png",
Off:43,
HotelName:"The Honest Treat" ,
Place: "Hartamas, Kuala Lumpur",
Detail:"Alice Kitchen delights you with fusion vegetarian and vegan gourmet cuisine, with an innovative gastronomic.",
Expire:"7 Hours"

},

{
Name:"Hainaese & Local Delights",
FudImg:"./img/hainaeseandlocldelight.png",
Off:29,
HotelName:"GreenLeaf Hut" ,
Place: "Puchong, Selangor",
Detail:"Feast on our contemporary Thai vegan delights, a fusion of central and northeastern Thai cuisines with rich and exquisite flavors.",
Expire:"12 Days"

},


{
Name:"Buon Appetito at table9",
FudImg:"./img/buonapitotable9.png",
alt:"logo",
Off:57,
HotelName:"Table9 Cafe & Kitchen",
Place: "Kuala Lumpur, Wilayah Persekutuan",
Detail:"Let us Figure Out the most delicious blend of Asian flavors, pampering you within a relaxing atmosphere!",
Expire:"5 Days"

},


{
Name:"Vegipai's Fusion Indulgence",
FudImg:"./img/vegipiesfusion.png",
Off:67,
HotelName:"Vegipai Cafe" ,
Place: "Taman Desa, Off Jln. Kelang La.., Kuala Lumpur",
Detail:"Yishensu offers a wide range of delicious oriental dishes, from traditional favorites to creative fusion delights.",
Expire:"2 Days",

},


{
Name:"Rawsome Lifestyle",
FudImg:"./img/rawsomelifestyle.png",
Off:36,
HotelName:"Rawsome" ,
Place: "Sungai Buloh & 1 Branch",
Detail:"Invigorate yourself with our healthy, refreshing selection of Pure and Smooth Teas and Naturally Tisane Taste Cold Brew Teas.",
Expire:"14 Hours"

},


{
Name:"Authentic taste of Hong Kong",
FudImg:"./img/Authentictasteofhongkong.png",
Off:47,
HotelName:"Prince Cuisine" ,
Place: "Kuala Lumpur, Wilayah Persekutuan",
Detail:"Prince Cuisine indulges you with a taste of authentic Hong Kong food within the cozy atmosphere of our restaurant",
Expire:"3 Days"

},


{
Name:"Dining Bowl Asian Delicacies",
FudImg:"./img/diniBowlAsian.png",
Off:100,
HotelName:"Dining Bowl" ,
Place: "Kuala Lumpur, Wilayah Persekutuan",
Detail:"Dine in this authentic cozy Chinese environment with any items from the menu, made with fresh and quality!",
Expire:"2 Days"

},

{
Name:"Lovely Fusion Meals",
FudImg:"./img/lovelyfusionmeal.png",
Off:81,
HotelName:"Love Veggie" ,
Place: " Klang, Selangor",
Detail:"Enjoy a cozy dining experience where we pamper you with a variety of healthy, exquisite and natural foods.",
Expire:"1 Hour"

},

{
Name:"Buon Appetito at table9",
FudImg:"/img/BuonApctio.png",
Off:98,
HotelName:"Table9 Cafe & Kitchen" ,
Place: "Kuala Lumpur, Wilayah Persekutuan",
Detail:"Indulge in a creative fare of Italian cuisine and Korean-inspired drinks in the cozy atmosphere of Table9.",
Expire:"19 Days"

},

{
Name:"Trendy Fusion Delights",
FudImg:"./img/Trendyfusion.png",
Off: 98,
HotelName:"Vg Seventeen Cafe" ,
Place: "Kuala Lumpur, Wilayah Persekutuan",
Detail:"Let us pamper you with trendy, healthy and fascinating meals, prepared with fresh and natural ingredients!",
Expire:"24 Hours"
}
 ];

function fudRecp(a=0,j=9){
 body.innerHTML="";
 for(let i=a;i<=j;i++){
     FudDiv(i);
 }
}
function FudDiv(i){
var div = document.createElement('div');
div.setAttribute('class','div1');
div.innerHTML = `<div  id="fudImz" style="background-image: url(${MyApiMockServer[i].FudImg});">
 </div>
 <div class="spcing">
     <span class="fstWrd">
     <p  style="font-size: 19px; 
     color: rgb(151, 151, 151);" 
     font-weight: 598;
     class="fstWrd">${MyApiMockServer[i].HotelName}</p>
     </span>
     <pre class="fstWrd"> - </pre>
     <span class="gry" style="font-size: 14px;">${MyApiMockServer[i].Place}</span>
 </div>
<p class="spcing" style="margin: 3px 3px 7px 3px;">${MyApiMockServer[i].Detail}</p>
<button id="btnGet" class="fstWrd cpnBtn">Get FREE Coupon</button>
<div class=" hrT" 
    style="margin-bottom: 2px;
    height: 53px;
    display: flex; 
    margin-top: 10px;
    margin-left: 5px">
    <div style="
    flex-grow: 1.5;
    class="hrR">
         <p style="margin: 3px 1px 1px 1px;">Discount :</p>
         <h2 style="color: tomato;  margin:2px">₹ ${MyApiMockServer[i].Off} Off.</h2>
     </div>
     <div>
         <p style="margin: 2px;">Expires in</p>
         <h2 style="margin-top:5px;font-size:20px;margin-left:10px;color: rgb(120, 120, 120);  margin:2px">${MyApiMockServer[i].Expire}</h2>
     </div>`;
     body.append(div);

     var btnn = document.getElementById("btnGet");
     btnn.addEventListener('click',function(){
         window.location.href="coupn.html"
     })
}
window.onload =  fudRecp();