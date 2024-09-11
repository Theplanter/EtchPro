const container = document.querySelector(".container")


for(let i = 0;i<10;i++){
const col = document.createElement("div")
col.classList.add("col")

    for(let i = 0;i<10;i++){
    const row = document.createElement("div")
    row.classList.add("row")
    col.appendChild(row)
}
container.appendChild(col)

}

// const col = document.querySelector(".row")



// }