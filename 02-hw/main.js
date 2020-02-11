let letterN = parseInt(prompt("Введіть число N:")),
    letterM = parseInt(prompt("Введіть число M:"));


while (isNaN(letterN)) {
    letterN = parseInt(prompt("Введіть число N:"), 10);
}
while (isNaN(letterM)) {
    letterM = parseInt(prompt("Введіть число M:"), 10);
}
      
let sum = 0,
    question = confirm("Чи враховувати парні числа?");

if(question) {
    for (let i = letterN; i < letterM +1; i++) {
        sum += i;
    }
} else if (question == false && (letterN % 2 == 0)) {
    for (let i = letterN + 1; i < letterM +1; i += 2) {
    sum += i;
    }
} else {
    for (let i = letterN; i < letterM +1; i += 2) {
    sum += i;
    }
}

console.log(sum);

document.write(`
Число N: ${letterN} </br>
Число M: ${letterM} </br>
Сума чисел: ${sum} </br>
`)