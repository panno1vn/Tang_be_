
var to = 'BABI';
var gift_url = './bae/h1.jpg';
var gift_image_url = './bae/h2.jpg';



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");
var above = document.getElementsByClassName("above-fold");


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show')
  }, false);

  above.addEventListener("click", function(e){
    above.classList.add('above-transition')
  }, false);


  
  
  
  nametag.innerText = to;
}

init();

