const container = document.querySelector(".container")
const pic = document.querySelector("#canva")
const clear = document.querySelector("#clear")
const eraser = document.querySelector("#eraser")
const crazy = document.querySelector("#crazy")
const normal = document.querySelector("#normal")


let siz = 10

//change the number to determine of its a eraser, rainbow or a normal color
let stat = 1

canvasSize(siz)



function filler(Telement){

    const row = document.createElement("div")
    row.classList.add("row")
    row.id = "row"

    const red = Math.random()*255
    const green = Math.random()*255
    const blue = Math.random()*255

    
    //when the user hover over the div it changes to black
    row.addEventListener("mouseover", function(){
       if(stat==2){
            this.style.backgroundColor = `rgb(${red},${green},${blue})`
        }else if(stat === 0){
            this.style.backgroundColor = "white"
        }else{
            this.style.backgroundColor = "black"
        }

        
    });
//when the row changes color it get updated to the columns
    Telement.appendChild(row)
}



function canvasSize(size){
//the size gets passed through the for loop making columns
    for(let i = 0;i<size;i++){

        const col = document.createElement("div")
        col.classList.add("col")

        
        for(let i = 0;i<size;i++){
            filler(col)
        
    }
    container.appendChild(col)


}}


function updateGrid(){
        container.innerHTML = ""

   let siz = parseInt(prompt("Enter what size canvas you want", "")) 
    canvasSize(siz)
}
function clearScreen(){
    container.innerHTML = ""

    stat = 1
    canvasSize(siz)
}
function eraserT(){
    stat = 0
}
function normalT(){
    stat = 1
}
function crazyT(){
    stat = 2
}

//activating these eventlisteners changes the var to different numbers to change the status of the pen
eraser.addEventListener("click", eraserT)
crazy.addEventListener("click", crazyT)
normal.addEventListener("click", normalT)
//these events can clear the board, and make the grid bigger or smaller
clear.addEventListener("click", clearScreen)
pic.addEventListener("click", updateGrid);

