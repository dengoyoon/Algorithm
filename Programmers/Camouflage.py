from itertools import combinations

def tupleMultiply(tuple) :
    mul = 1
    for i in tuple:
        mul *= i

    return mul

def solution(clothes):
    answer = 0
    hashClothes = {}
    for i in clothes:
        hashClothes[i[1]] = 0
    
    for i in clothes:
        hashClothes[i[1]] += 1

    clothesNumbers = [i for i in hashClothes.values()]
    clothesLength = len(clothesNumbers)

    if sum(clothesNumbers) == clothesLength :
        answer = (2 ** clothesLength) - 1
    else :
        for i in range(1, clothesLength+1):
            for j in list(combinations(clothesNumbers, i)):
                answer += tupleMultiply(j)
    

    return answer

clothes = [["a", "1"], ["b", "2"], ["c", "3"], ["d", "4"], ["e", "5"], ["f", "6"], ["g", "7"], ["h", "8"]]
print(solution(clothes))


#아무것도 안입었을때도 넣고 계산했으면 더 간단한 코드가 되었을듯