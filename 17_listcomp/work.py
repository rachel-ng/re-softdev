#1
single=[]
for i in range(9):
    if i%2==0:
        single.append(str(i)*2)
print(single)

single2=[str(i)*2 for i in range(9) if i%2==0]

print(single2)

#2
seven=[]
for i in range(5):
    seven.append(i * 10 + 7)
print(seven)

seven2 = [i * 10 + 7 for i in range(5)]
print(seven2)

#3

composite = []
for i in range(1,101):
    for x in range(2,i - 1):
        if i % x == 0 and  i != x:
            composite.append(i)
            break

print(composite)

composite2=[i for x in range(2,i + 1) for i in range(1,101) if i % x==0 and i != x]
print(composite2)

#5
prime = []
for i in range(101):
    for x in range(2,i):
        if i %x == 0 and i != x:
            break
        if i == x:
            prime.append(i)
print(prime)
#6
def DivNum(num):
    divisor=[]
    for i in range(1,101):
        for x in range(1,i):
            if i % x == 0:
                divisor.append(i)


#7
