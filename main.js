const container = document.querySelector(".container")
let stat = true

function filler(Telement, state){

    const row = document.createElement("div")
    row.classList.add("row")
    row.id = "row"

    const red = Math.random()*255
    const green = Math.random()*255
    const blue = Math.random()*255

    //when the user hover over the div it changes to black
    row.addEventListener("mouseenter", function(){
     
this.style.backgroundColor = "black"
        
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
            filler(col, stat)
        
    }
    container.appendChild(col)


}}

canvasSize(15)
