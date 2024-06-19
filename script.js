fetch("https://api.mininxd.my.id/khodam").then(res => {
  return res.json()
}).then(kodam => {
document.getElementById("output").innerHTML = kodam;
}).catch(e => {console.log(e)})



// Randomize Background
var bg = Math.floor(Math.random()*2)


if(bg == 0) {
body.style.background = "url('./img/bg1.webp') #000";
body.style.backgroundSize = "110vw 110vh";
body.style.backgroundRepeat = "no-repeat";
} else if(bg == 1) {
body.style.background = "url('./img/bg2.jpg') #000";
body.style.backgroundSize = "110vw 110vh";
body.style.backgroundRepeat = "no-repeat";
}




// cek nama
if(localStorage.getItem("khodamName") == undefined) {
  before.style.display = "block";
  after.style.display = "none";
  yourName.innerHTML = "Cek khodam"
} else {
  before.style.display = "none";
  after.style.display = "block";
  yourName.innerHTML = localStorage.getItem("khodamName");
}



btnCek.addEventListener("click", function() {
if(inputName.value == "") {

 } else {
  localStorage.setItem("khodamName", inputName.value);
  
}
})



retry.addEventListener("click", function() {
  localStorage.removeItem("khodamName")
  window.location.reload();
  
})