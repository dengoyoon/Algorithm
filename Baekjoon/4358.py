from collections import Counter
import sys

input = sys.stdin.readline

trees = []

while True:
    tree = input().rstrip()
    if not tree:
        break
    trees.append(tree)

treeTotalNumber = len(trees)
treeCounter = Counter(trees)

treeCounterSorted = sorted(treeCounter.items())

for treeName, treeNumber in treeCounterSorted:
    treePercent = round((treeNumber / treeTotalNumber) * 100, 4)
    print(treeName, '%.4f' %treePercent)