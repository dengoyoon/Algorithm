function solution(n) {
    let answer = 0;
    let threeSquare = 1;
    const tenery = [];
    
    while (n >= 3) {
        tenery.push(n % 3);
        n = parseInt(n / 3);
    }
    tenery.push(n);
    
    tenery.reverse().forEach(number => {
        answer += number * threeSquare;
        threeSquare *= 3;
    })
    return answer;
}