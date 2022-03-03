def solution(phone_book):
    answer = True
    hashP = {}
    for i in phone_book:
        hashP[i] = 0
    for i in phone_book:
        temp = ''
        for j in i :
            temp += j
            try :
                hashP[temp] += 1
            except :
                continue
    for i in hashP.values() :
        if i > 1 :
            answer = False
            break

    return answer

phoneBook = ["12","123","1235","567","88"]
print(solution(phoneBook))