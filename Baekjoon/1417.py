import heapq

n = int(input())

dasom = int(input())
vote = 0
candidates = []

if(n == 1):
    print(0)
    exit()

for i in range(n-1):
    candidate = int(input())
    heapq.heappush(candidates, (-candidate, candidate))

while (dasom <= candidates[0][1]):
    candidate = heapq.heappop(candidates)[1] - 1
    dasom += 1
    vote += 1
    heapq.heappush(candidates, (-candidate, candidate))

print(vote)
