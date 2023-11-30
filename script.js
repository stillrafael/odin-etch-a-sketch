let gridSpace = document.querySelector('div')
gridSpace.textContent = ''
gridSpace.classList.add('container')
let drawSquares = document.createElement('button')
document.body.appendChild(drawSquares)
drawSquares.textContent = 'Click here to restart or change sizes'
drawSquares.addEventListener('click', changeSize)
for (i = 0; i < 16; i++) {
    let gridSquare = document.createElement('div')
    gridSquare.className = 'grid black'
    gridSpace.appendChild(gridSquare)
    gridSquare.addEventListener('mouseover', swappingColors)
    function swappingColors () {
        gridSquare.classList.add('white')
    }
    
}

 function changeSize() {
    let howManySquares = prompt('Type the number of squares per side EX: 4x4, 5x5, 10x10, 100x100', '4')
    let squareSize = 100 / howManySquares
    document.body.removeChild(gridSpace)
    document.body.removeChild(drawSquares)
    let newGrid = document.createElement('div')
    document.body.appendChild(newGrid)
    newGrid.classList.add('container')
    document.body.appendChild(drawSquares)
    if (howManySquares > 100) {
        alert('Maximum amount is 100')
        }
    else if (howManySquares <= 100) {
        for (i = 0; i < (howManySquares*howManySquares); i++) {
            let newSquares = document.createElement('div')
            newSquares.className = 'grid black'
            newSquares.style.height = `${squareSize}%` 
            newSquares.style.width = `${squareSize}%`
            newGrid.appendChild(newSquares)
            newSquares.addEventListener('mouseover', swappingColors)
            function swappingColors () {
                newSquares.classList.add('white')
            }
                }
            
    }
 }