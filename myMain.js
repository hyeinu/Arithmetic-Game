document.addEventListener('DOMContentLoaded', init);

function init(){

  randomNum();

  let numBtns = document.getElementsByClassName('button')
  for (let i = 0; i<numBtns.length; i++){
    numBtns[i].addEventListener('click', numBtnClicked)
  }

  function numBtnClicked(event){
    document.getElementById('answer').textContent += event.target.textContent;
  }

  document.getElementById('submitAns')
  .addEventListener('click', answerCheck);

  function answerCheck(){
    //"+" sign makes the stringNum into a integer
    let sumAns = +document.getElementById(`num1`).textContent + +document.getElementById(`num2`).textContent;
    //let sumAns = parseInt(document.getElementById(`num1`).textContent) + parseInt(document.getElementById(`num2`).textContent);
    if (parseInt(document.getElementById('answer').textContent) === sumAns){
      let yeSound = document.getElementById("yesSound");
    yeSound.play()
      setTimeout(function(){
        yeSound.pause();
        yeSound.currentTime = 0;

        alert("You are correct!");

      }, 2000);

      setTimeout(function(){
        randomNum();
        document.getElementById('answer').textContent = "";
      }, 2200);
    } else {
      document.getElementById('answer').textContent = sumAns;
      var sadSound = document.getElementById("noSound");
      sadSound.play()
      setTimeout(function(){
        sadSound.pause();
        sadSound.currentTime = 0;
        alert("Not Correct :( Please try another!")
      }, 2500);

      setTimeout(function(){
        randomNum();
        document.getElementById('answer').textContent = "";
      }, 2500);
    }
  }

  document.getElementById('clear').addEventListener('click', clearAns);

  function clearAns(){
    document.getElementById('answer').textContent = "";
  }

}

function randomNum(){
  for (let i = 1; i < 3; i++){
    let num = document.getElementById(`num${i}`);
    let x = Math.floor(Math.random()*(10-1))+1;
    num.textContent = x;
  }
}
