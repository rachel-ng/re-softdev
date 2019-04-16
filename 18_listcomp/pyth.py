import sys, math

print([(i, x, int(math.sqrt(i**2 + x**2)))
       for x in range(0, int(sys.argv[1])+ 1)
       for i in range(int(sys.argv[1])+ 1)
       if (math.sqrt(i**2 + x**2) < int(sys.argv[1])+ 1) and
       math.sqrt(i**2 + x**2) == int(math.sqrt(i**2 + x**2))])
