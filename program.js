let input = "a whale of a deal!";
const vowels = ['a','e','i','o','u'];
let resultArrays = [];

for (let i=0; i<input.length; i++){
  for (let j=0; j<vowels.length; j++){
    if (input[i]===vowels[j]){
      resultArrays.push(input[i]);
    }
  }if (input[i]==='e'){
    resultArrays.push(input[i]);
  }else if (input[i]==='u'){
    resultArrays.push(input[i]);
  }
}

console.log(resultArrays.join('').toUpperCase());
