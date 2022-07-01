function solution(answers) {
    const answer = [];
    const firstPattern = [1, 2, 3, 4, 5];
    const secondPattern = [2, 1, 2, 3, 2, 4, 2, 5];
    const thirdPattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let firstScore = 0;
    let secondScore = 0;
    let thirdScore = 0;
    
    let i = 0;
    let j = 0;
    let k = 0;
    
    answers.forEach( a => {
        if (a === firstPattern[i]) {
            firstScore += 1;
        }
        if (a === secondPattern[j]) {
            secondScore += 1;
        }
        if (a === thirdPattern[k]) {
            thirdScore += 1;
        }
        i += 1; j += 1; k += 1;
        if (i === 5) {
            i = 0;
        }
        if (j === 8) {
            j = 0;
        }
        if (k === 10) {
            k = 0;
        }
    })
    
    let max = firstScore;
    answer.push(1);
    [secondScore, thirdScore].forEach((score, index) => {
        if (max < score) {
            max = score;
            answer.pop();
            answer.push(index + 2);
        } else if (max === score) {
            answer.push(index + 2);
        }
    })
    
    return answer;
}