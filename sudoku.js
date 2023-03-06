/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {

let numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let fillArr = [];
  let fillArrN = [];
  let resArrV = [];
  for (let j = 0; j < 81; j += 9) {
    resArrV.push(boardString.split("").splice(j, 9));
    }
  for (let i = 0; i < resArrV.length; i++) {
    numArr.forEach((el) => {
      if (!resArrV[i].includes(el)) {
        fillArr.push(el);
      }
    });
    fillArrN.push(fillArr); // массив не достающих значений
    fillArr = [];
  }
  
  let flag = true;
  let zN = 0;
  for (let i = 0; i < resArrV.length; i++) {
    for (let j = 0; j < resArrV.length; j++) {
      if (resArrV[i][j] == "-") {
        //проверка на символ -
        if (zN === fillArrN[i].length-1) {
          zN = 0;
        }
      //  console.log(i,j,zN);
        for (let z = zN; z < fillArrN[i].length; z++) {
          // цикл по fillArrN  с потенциальными значениями
          if (flag != false) {
            // условие чтобы повторно не перезаписывать
            if (resArrV[i].indexOf(fillArrN[i][z]) == -1) {
              if (updateBoard(resArrV)[j].indexOf(fillArrN[i][z]) == -1) {
                resArrV[i][j] = fillArrN[i][z];
                flag = false;
                zN = z;
              }
            }
          }
        }
       // zN = 0
        flag = true;
      }
    }
  }

  //let arrRec = [...resArrV]; //перевернутый массив

  return resArrV;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
