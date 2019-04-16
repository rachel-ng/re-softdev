import sys

print([(i**2, x **2, i**2 + x**2) for x in range(0, int(sys.argv[1])+ 1) for i in range(int(sys.argv[1])+ 1) if (i**2 + x**2 < int(sys.argv[1])+ 1)])
