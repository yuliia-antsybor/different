// function calcArrProduct(arr) {
//   const isNumArr = arr.every(el => typeof el === 'number');
//   return new Promise((resolve, reject) => isNumArr ? resolve(true) : reject(false));
// }


function calcArrProduct(arr) {
  return new Promise((resolve, reject) => {
    let p = 1;

    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
        p = p * arr[i];
      } else {
        reject('Error! Incorrect array!');
      }
    }

    resolve(p);
  });
}