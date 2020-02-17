//  function 1
function getMaxDigit(number) {
    number = number.toString();
    let max = 0;
    for (let i=0; i< number.length; i++) {
        if (max < number[i]) {
            max = number[i];
            }
        }
        return max;
}

//  function 2
function getDegree(number, n){
    let result = number;
    for (let i = 1; i < n; i++) {
        result *= number;
    }
    return result;
}

//  function 3
function firstLetterUpp(name) {
    name = name.toLowerCase();
    let nameSlice = name.slice(1, name.length);
    let corectName = name[0].toUpperCase() + nameSlice;
    return corectName;
}

//  function 4
function tax(income) {
    income = income - (income * .195);
    return income;
}

//  function 5
function getRandomNumber(n , m) {
    return Math.floor(Math.random() * (m - n + 1)) + n;
}

//  function 6
function countLetter(letter, str) {
    str = str.toString();
    letter = letter.toString();
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

//  function 8
function getRandomPassword() {
    return Math.floor(Math.random() * 100000000);
}


document.write(`
function 1 => ${getMaxDigit(1908)} </br>
function 2 => ${getDegree(2, 4)} </br> 
function 3 => ${firstLetterUpp("rOMAn")}  </br>
function 4 => ${tax(12000)}  </br>
function 5 => ${getRandomNumber(1, 10)}  </br>
function 6 => ${countLetter("a", "basketball")}  </br>
function 8 => ${getRandomPassword()}  </br>
`)