// 회문, 그리디

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
const strings = [];
const answers = [];

function isPalindrome(str) {
    let leftIndex = 0;
    let rightIndex = str.length - 1;
    let palindrome = 0;

    while(leftIndex <= rightIndex) {
        if (str[leftIndex] == str[rightIndex]) {
            leftIndex += 1;
            rightIndex -= 1;
        } else {
            if (str[leftIndex + 1] == str[rightIndex] && str[leftIndex] == str[rightIndex - 1]) {
                // palindrome += 1;
                // leftIndex += 1;
                // rightIndex -= 1;
                if (palindrome == 1) {
                    return 2;
                } else {
                    palindrome = Math.min(isPalindrome(str.slice(leftIndex + 1, rightIndex + 1)), isPalindrome(str.slice(leftIndex, rightIndex)));
                    return (palindrome == 0)?  1 : 2;
                }
            } else if (str[leftIndex + 1] == str[rightIndex]) {
                palindrome += 1;
                leftIndex += 1;
            } else if (str[leftIndex] == str[rightIndex - 1]) {
                palindrome += 1;
                rightIndex -= 1;
            } else {
                palindrome = 2;
            }

            if (palindrome == 2) {
                break;
            }
        }
    }

    return palindrome;
}

rl.on('line', (input) => {
    if (N == undefined) {
        N = parseInt(input);
    } else {
        N -= 1;
        strings.push(input);
        if (N == 0) {
            rl.close();
        }
    }
});

rl.on('close', () => {
    strings.forEach(str => {
        console.log(isPalindrome(str));
    })
    process.exit();
});

// ababbabaa
// abca

