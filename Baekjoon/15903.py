import heapq

n, m = map(int, input().split())

cardHeap = []

for i in map(int, input().split()):
    heapq.heappush(cardHeap, i)

for i in range(m):
    x = heapq.heappop(cardHeap)
    y = heapq.heappop(cardHeap)
    sumCard = x + y
    heapq.heappush(cardHeap, sumCard)
    heapq.heappush(cardHeap, sumCard)

print(sum(cardHeap))

