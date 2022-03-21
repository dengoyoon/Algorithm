n = int(input())
stackNumber = 1

inputArray = []
stack = []
resultArray = []

for i in range(n):
    inputArray.append(int(input()))

inputArray.reverse()

while (len(inputArray) != 0):
    if (len(stack) == 0):
        stack.append(stackNumber)
        stackNumber += 1
        resultArray.append("+")
    if (inputArray[-1] == stack[-1]):
        inputArray.pop()
        stack.pop()
        resultArray.append("-")
    elif (inputArray[-1] > stack[-1]):
        stack.append(stackNumber)
        stackNumber += 1
        resultArray.append("+")
    else:
        print("NO")
        exit()

for i in resultArray:
    print(i)