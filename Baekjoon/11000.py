import heapq
import sys

N = int(sys.stdin.readline())
inputArr = []

for _ in range(N):
    start, end = map(int, sys.stdin.readline().split())
    inputArr.append((start,end))

inputArr.sort()

endTimeHeap = []

heapq.heappush(endTimeHeap, inputArr[0][1])
for startT, endT in inputArr[1:]:
    if (endTimeHeap[0] > startT):
        heapq.heappush(endTimeHeap, endT)
    else:
        heapq.heappop(endTimeHeap)
        heapq.heappush(endTimeHeap, endT)

print(len(endTimeHeap))