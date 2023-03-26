// checkdivisiblity  3


function findNumbers(arr) {
    for (var i = 0; i < arr.length; i++) {
      var num = arr[i];
      if (num % 3 === 0) {
        if (num % 2 === 0) {
          continue;
        } else {
          console.log(num);
        }
      }
    }
  }

  var numbers = [2, 3, 4, 6, 7, 9, 10, 12, 15];
  findNumbers(numbers);