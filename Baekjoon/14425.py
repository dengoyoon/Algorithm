n, m = map(int, input().split())
s = {}
answer = 0

for i in range(n):
    s[input()] = True

for i in range(m):
    if s.get(input()):
        answer += 1

print(answer)
    