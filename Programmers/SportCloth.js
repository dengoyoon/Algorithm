function solution(n, lost, reserve) {      
    return n - lost.filter(lostPerson => { // lost.filter를 통해서 잃어버린 애들중 빌릴 애들을 다 거르고 못빌린 애들만 남긴다.
        // 여벌이 있는 애들 중에서 잃어버린 애 한테 빌려줄 수 있는지 확인한다.
        const isLend = reserve.find(reservePerson => Math.abs(reservePerson-lostPerson) <= 1);
        if(!isLend) {
            // 못빌린 애를 lost에 남길것이기 때문에 못빌릴 경우 true로 남긴다.
            return true;
        }
        // 여벌이 있는 애들 중에서 빌려준아이는 제거 시킨다.
        reserve = reserve.filter(reservePerson => reservePerson !== isLend);
    }).length;
}

// Set.prototype.diff = function (setB) {
//     const setA = new Set(this);
//     for (let element of setB) {
//         setA.delete(element);
//     }
//     return setA;
// }

// function solution(n, lost, reserve) {
//     let answer = n;

//     lost = lost.sort((a, b) => a - b);
//     reserve = reserve.sort((a, b) => a - b);

//     const setL = new Set(lost);
//     const setR = new Set(reserve);

//     const sortedLost = [...setL.diff(setR)];
//     const sortedReserve = [...setR.diff(setL)];


//     let rIdx = 0;
//     for(let lIdx = 0 ; lIdx < sortedLost.length ; lIdx++) {
//         if (sortedLost[lIdx] - 1 <= sortedReserve[rIdx] && sortedReserve[rIdx] <= sortedLost[lIdx] + 1) {
//             rIdx += 1;
//         } else if (sortedLost[lIdx] - 1 > sortedReserve[rIdx]) {
//             rIdx += 1;
//             lIdx -= 1;
//         } else {
//             answer -= 1;
//         }
//     }
//     return answer;
// }