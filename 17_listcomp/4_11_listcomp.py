nums = []

for x in range(8):
    nums.append(x)

[x for x in range(8)]



squares = []

for x in range(8):
    squares.append(x ** 2)

[x * x for x in range(8)]



'''
expression
for clause
zero or more for or if clauses

results in new list resulting from evaluating the expression
'''



# tuple usage
[(x, x*x, x*x*x) for x in range(8)]



p = "myNoobPass1234"
[x for x in p]
[x for x in "1234"]

UC_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
[x for x in p if x in UC_LETTERS]
[1 for x in p if x in UC_LETTERS]
[1 if x in UC_LETTERS else 0 for x in p]
