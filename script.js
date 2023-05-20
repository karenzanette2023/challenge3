/*counting points*/

 contUser = 0
 contPC = 0

/*Aplication elements*/

const imgUser = document.getElementById ("user")
const imgPC = document.getElementById("PC")
const playing = document.getElementById("playing")
const counter = document.getElementById("counter")
const winner = document.getElementById("winner")
const loser = document.getElementById("loser")

/*variable elements*/
player1 = ""
player2 = ""

playing.addEventListener("click", () => {
    reset ()
    playPc ()

})

function reset () {
    player1 = document.querySelector('input[name="play"]:checked').value
    imgUser.innerHTML = "<img src='image/" + player1 + ".png'>"
    imgPC.innerHTML = ""

    function playPc() {
        let opt = ['pedra' , 'papel' , 'tesoura'] /*[0,1,2] */
        let num = Math.floor(Math.random() *(2 - 0 + 1)) + 0;
        player2 = opt [num]
        imgPC.innerHTML = "img src= image/"  + player2 + ".png'>"
        analyze ()
        
    }


}

function analyze () {
    
    let win = "0"

    /*
      0= tied
      1 = win
      -1 = lose
    */

      if (player1 == player2) {

      } else if (player1== "pedra") {
           win = player2 == 'tesoura' ? 1: -1
      } else if (player1 == 'papel') {
        win = player2 == 'pedra' ? 1 : -1
      }else if (player1 == 'tesoura') {
        win = player2 == 'papel' ? 1: -1
      }


if (win == 0) {

}else if (win > 0){
    contUser = contUser +1

}else {
    contPC = contPC +1 

}

counter.innerHTML = contUser + ":" + contPC

if (contUser >= 5) {
    winner.classList.remove ('none')
    winner.classList.add('center')
}
if (contPc >= 5) {
    loser.classList.remove ('none')
    loser.classList.add ('center')

}

setInterval(()=>{
    playing.disabled = false
    clear ();

    
},3000)


}

function clear() {
    imgPC.innerHTML=""
    imgUser.innerHTML =""
    
    
}