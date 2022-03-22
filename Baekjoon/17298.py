n = int(input())
inputStack = []
compareStack = []
resultStack = []

for i in map(int, input().split()):
    inputStack.append(i)

while (len(inputStack) != 0):
    if (len(compareStack) == 0):
        resultStack.append(-1)
        compareStack.append(inputStack.pop())
    else:
        if(inputStack[-1] < compareStack[-1]):
            resultStack.append(compareStack[-1])
            compareStack.append(inputStack.pop())
        else:
            compareStack.pop()

answer = ""

while(len(resultStack) != 0):
    answer += str(resultStack.pop()) + " "



print(answer)