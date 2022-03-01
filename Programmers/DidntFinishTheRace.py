def solution(participant, completion):
    hashPar = {}
    answer = ''

    for i in participant:
        hashPar[i] = 0

    for i in participant:
        hashPar[i] += 1

    for i in completion:
        hashPar[i] -= 1

    for k, v in hashPar.items():
        if v == 1:
            answer = k

    return answer

par = ["mislav", "stanko", "mislav", "ana"]
com = ["stanko", "ana", "mislav"]

print(solution(par, com))