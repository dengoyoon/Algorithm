const first = (id) => {
    const resultId = id.toLowerCase();
    return second(resultId);
}

const second = (id) => {
    const idArray = [...id];
    const permissions = ['-', '_', '.'];
    const resultId = [];
    const isNumberOrAlphabet = (element) => 'a' <= element && element <= 'z' || '0' <= element && element <= '9';
    idArray.forEach(element => {
        if (isNumberOrAlphabet(element) || permissions.includes(element)) {
            resultId.push(element);
        }
    })
    return third(resultId.join(''));
}

const third = (id) => {
    const resultId = [];
    let pointState = false;
    [...id].forEach(element => {
        if (element === ".") {
            if (pointState === false) {
                pointState = true;
                resultId.push(element)   
            }
        } else {
            pointState = false;
            resultId.push(element);
        }
    });
    
    return fourth(resultId.join(''));
}

const fourth = (id) => {
    let start = 0;
    let end = id.length;
    if (id[0] === '.') {
        start += 1;
    }
    if (id[id.length - 1] === '.') {
        end -= 1;
    }
    return fifth(id.slice(start, end));
}

const fifth = (id) => sixth((id === "")? "a" : id);

const sixth = (id) => seventh(id.slice(0, 15));

const seventh = (id) => {
    let resultId = id;
    
    if (resultId[resultId.length - 1] === '.') {
        resultId = resultId.slice(0, resultId.length - 1);
    }
    while(resultId.length < 3) {
        resultId += id[id.length - 1];
    }

    return resultId;
}

function solution(new_id) {
    return first(new_id);
}