const gridSpace = document.querySelector('div')
gridSpace.textContent = ''
gridSpace.classList.add('container')
for (i = 0; i < 16; i++) {
    const gridSquare = document.createElement('div')
    gridSquare.className = 'grid'
    gridSpace.appendChild(gridSquare)
    gridSquare.addEventListener('mouseover', swappingColors)
    function swappingColors () {
        gridSquare.classList.add('white')
    }
}


