const wordByNumber = {
    "zero" : 0,
    "one" : 1,
    "two" : 2,
    "three" : 3,
    "four" : 4,
    "five" : 5,
    "six" : 6,
    "seven" : 7,
    "eight" : 8,
    "nine" : 9
}

const isNumber = (element) => "0" <= element && element <= "9";

function solution(s) {
    let answer = "";
    let word = "";
    [...s].forEach(element => {
        if (isNumber(element)) {
            answer += element;
        } else {
            word += element;
            if (wordByNumber[word] !== undefined) {
                answer += wordByNumber[word];
                word = "";
            }
        }
    });
    return Number(answer);
}