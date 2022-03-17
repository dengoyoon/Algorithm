n, m = map(int, input().split())
memo = {}

for i in range(n):
    siteUrl, pwd = input().split()
    memo[siteUrl] = pwd

for i in range(m):
    print(memo[input()])