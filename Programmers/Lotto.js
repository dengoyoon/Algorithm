const getRank = (number) => {
    if (number >= 2) {
        return 6 - number + 1;
    } else {
        return 6;
    }
};

function solution(lottos, win_nums) {
    let zeroCount = 0;
    let matchingCount = 0;
    
    lottos.forEach(number => {
        if (number === 0) {
            zeroCount += 1;    
        } else {
            matchingCount += (win_nums.includes(number) === true)? 1 : 0;
        }
    });
    
    const happinessCircuit = zeroCount + matchingCount;
    
    return [getRank(happinessCircuit), getRank(matchingCount)];
}