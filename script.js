document.addEventListener('DOMContentLoaded', () => {
  const gridDisplay = document.querySelector('.grid')
  const scoreDisplay = document.getElementById('score')
  const resultDisplay = document.getElementById('result')
  const width = 4
  let squares = []
  
  //create a playing board
  function createBoard(){
    for(let i=0; i<width*width; i++) {
      square = document.createElement('div')
      square.innerHTML = 0
      gridDisplay.appendChild(square)
      squares.push(square)
    }
      generate()
      generate()
  }
  
  createBoard()
  
  //randomly choose a square for a starting "2"
  function generate() {
    let randomNumber = Math.floor(Math.random() * squares.length)
    if (squares[randomNumber].innerHTML == 0){
      squares[randomNumber].innerHTML = 2
    } else generate()
  }
 
  
  //move right
  function moveRight() {
   for (i=0; i < squares.length; i++) {
      if (i % 4 === 0) {
        let rowElementOne = parseInt(squares[i].innerHTML)
        let rowElementTwo = parseInt(squares[i+1].innerHTML)
        let rowElementThree = parseInt(squares[i+2].innerHTML)
        let rowElementFour = parseInt(squares[i+3].innerHTML)
        let row = [rowElementOne, rowElementTwo, rowElementThree, rowElementFour]
        let nonZeroRow = row.filter(element => element !== 0)


        let leftZerosToPad = 4 - nonZeroRow.length
        let paddedRowZeros = Array(leftZerosToPad).fill(0)
        let paddedRow = [...paddedRowZeros, ...nonZeroRow]

        squares[i].innerHTML = paddedRow[0]
        squares[i+1].innerHTML = paddedRow[1]
        squares[i+2].innerHTML = paddedRow[2]
        squares[i+3].innerHTML = paddedRow[3]


        let newAddedRow = []
       
        if (paddedRow[3]==paddedRow[2] && paddedRow[1]==paddedRow[0]) {
          newAddedRow = [0, 0, paddedRow[0]+paddedRow[1], paddedRow[2]+paddedRow[3]]
        } else if (paddedRow[3]==paddedRow[2]) {
          newAddedRow = [0, paddedRow[0], paddedRow[1], paddedRow[2]+paddedRow[3]]
        } else if(paddedRow[2]==paddedRow[1]){
          newAddedRow = [0, paddedRow[0], paddedRow[1]+paddedRow[2], paddedRow[3]]
        } else if(paddedRow[1]==paddedRow[0]){
          newAddedRow = [0, paddedRow[0] + paddedRow[1],paddedRow[2], paddedRow[3]]
        } else newAddedRow = [...paddedRow]

       
      
        console.log(newAddedRow)
        squares[i].innerHTML = newAddedRow[0]
        squares[i+1].innerHTML = newAddedRow[1]
        squares[i+2].innerHTML = newAddedRow[2]
        squares[i+3].innerHTML = newAddedRow[3]
      }
    }  
    
    generate()
  
  }

 moveRight()
 moveRight()
 moveRight()
  moveRight()
 moveRight()
 moveRight()
  moveRight()
 moveRight()
 moveRight()
  moveRight()
 moveRight()
 moveRight()


  // //move left
  // function moveLeft() {
  //  for (i=0; i < squares.length; i++) {
  //     if (i % 4 === 0) {
  //       let rowElementOne = parseInt(squares[i].innerHTML)
  //       let rowElementTwo = parseInt(squares[i+1].innerHTML)
  //       let rowElementThree = parseInt(squares[i+2].innerHTML)
  //       let rowElementFour = parseInt(squares[i+3].innerHTML)
  //       let row = [rowElementOne, rowElementTwo, rowElementThree, rowElementFour]
  //       let nonZeroRow = row.filter(element => element !== 0)
  //       let rightZerosToPad = 4 - nonZeroRow.length
  //       let paddedRowZeros = Array(rightZerosToPad).fill(0)
  //       let paddedRow = [...nonZeroRow, ...paddedRowZeros]
        
  //       squares[i].innerHTML = paddedRow[0]
  //       squares[i+1].innerHTML = paddedRow[1]
  //       squares[i+2].innerHTML = paddedRow[2]
  //       squares[i+3].innerHTML = paddedRow[3]
       
  // }}}



  
  
  
  
  
 
  
})


  //   //turn numbers in grid into one array per column
  // function moveDown() {
  //   for (i=0; i < width; i++) {
  //     let column = [
  //       parseInt(squares[i].innerHTML),
  //       parseInt(squares[i+4].innerHTML),
  //       parseInt(squares[i+8].innerHTML),
  //       parseInt(squares[i+12].innerHTML)
  //     ]
  //     console.log(column)
  //   }
  // }
  // moveDown()

    // //turn numbers in grid into one array per row
  // function representRowsAsIntegers() {
  //   for (i=0; i < squares.length; i++) {
  //     if (i % 4 === 0) {
  //       let rowElementOne = parseInt(squares[i].innerHTML)
  //       let rowElementTwo = parseInt(squares[i+1].innerHTML)
  //       let rowElementThree = parseInt(squares[i+2].innerHTML)
  //       let rowElementFour = parseInt(squares[i+3].innerHTML)
  //       let row = [rowElementOne, rowElementTwo, rowElementThree, rowElementFour]
  //       console.log(row)
  //     }
  //   }
  // }

  //   //turn numbers in grid into one array per column
  // function representColumnsAsIntegers() {
  //   for (i=0; i < width; i++) {
  //     let column = [
  //       parseInt(squares[i].innerHTML),
  //       parseInt(squares[i+4].innerHTML),
  //       parseInt(squares[i+8].innerHTML),
  //       parseInt(squares[i+12].innerHTML)
  //     ]
  //     console.log(column)
  //   }
  // }