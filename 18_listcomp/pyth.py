import sys, math

def pyth (n):
    return [(x, i, int(math.sqrt(i**2 + x**2))) for x in range(1, n + 1) for i in range(x, n + 1)
            if math.sqrt(i**2 + x**2) <= n and math.sqrt(i**2 + x**2) == int(math.sqrt(i**2 + x**2))]

print(pyth(5))
print(pyth(12))
print(pyth(15))
