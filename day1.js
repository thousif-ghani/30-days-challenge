function numbersThenCharacters(arr) {
    let numbers = [];
    let characters = [];
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (typeof arr[i][j] === "number") {
          numbers.push(arr[i][j]);
        } else {
          characters.push(arr[i][j]);
        }
      }
    }
  
    numbers.sort((a, b) => a - b);
    characters.sort();
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      let sortedArr = [];
  
      for (let j = 0; j < arr[i].length; j++) {
        if (numbers.length === 0) {
          sortedArr.push(characters.shift());
        } else {
          sortedArr.push(numbers.shift());
        }
      }
  
      result.push(sortedArr);
    }
  
    return result;
  }
  
  function arrangeArray() {
    const inputArray = document.getElementById("input").value;
    const parsedArray = JSON.parse(inputArray);
  
    const output = numbersThenCharacters(parsedArray);
    document.getElementById("output").textContent = JSON.stringify(output);
  }
  