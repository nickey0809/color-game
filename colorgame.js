//alert("connected");
var numsquare = 6;
var colors = generationrandomcolors(numsquare);
var pickcolor = Pickcolor();
var squares = document.querySelectorAll(".square");
var colordisplay = document.querySelector("#colordisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbtn = document.querySelector("#reset");
//var easybutton = document.querySelector("#easybutton");
//var hardbutton = document.querySelector("#hardbutton");
var modeButtons =document.querySelectorAll(".mode");

init();

function init(){
  setupmodebtn();
  setupsquares();
  reset();
}

function setupmodebtn(){
    for(var i = 0; i < modeButtons.length; i++){
      modeButtons[i].addEventListener("click", function(){
        modeButtons[0].classList.remove("select");
        modeButtons[1].classList.remove("select");
        this.classList.add("select");
        this.textContent === "Easy"? numsquare = 3 : numsquare = 6;
        reset();
    });
  }
}


function reset(){
  colors = generationrandomcolors(numsquare);
  pickcolor = Pickcolor();
  colordisplay.textContent = pickcolor;
  resetbtn.textContent = "New Colors";
  message.textContent = "";
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
    }else{
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
}

resetbtn.addEventListener("click", function(){
  reset();
});

function setupsquares(){
    for(var i = 0; i < squares.length; i++){
      squares[i].addEventListener("click", function(){
        var clickcolor = this.style.background;
        if( clickcolor ===  pickcolor){
          message.textContent = "correct!";
          changecolor(clickcolor);
          h1.style.background = clickcolor;
          reset.textContent = "Play again?";
        }else{
          message.textContent = "Try again";
          this.style.background = "#232323";
        }
    });
  }
}


colordisplay.textContent = pickcolor;

function changecolor(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = color;
  }
}

function Pickcolor(){
  return colors[Math.floor(Math.random() * colors.length)];
}

function generationrandomcolors(num){
  var arr = [];
  for(var i = 0; i < num; i++){
    arr.push(randomcolor());
  }
  return arr;
}

function randomcolor(){
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  return "rgb(" + r + ", " + g + ", " + b +  ")";
}