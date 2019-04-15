#Team RELee -- Rachel Ng, Emily Lee
#SoftDev2 pd07
#K17 -- PPFTLCW
#2019-04-15 

#1
single=[]
for i in range(9):
    if i%2==0:
        single.append(str(i)*2)
#print(single)

single2=[str(i)*2 for i in range(9) if i%2==0]

#print(single2)

#2
seven=[]
for i in range(5):
    seven.append(i * 10 + 7)
#print(seven)

seven2 = [i * 10 + 7 for i in range(5)]
#print(seven2)

#3
triple=[]
for i in range(3):
    for x in range(3):
        triple.append(x*i)

#print(triple)

triple2=[x*i for x in range(3) for i in range(3)]
#print(triple2)

#4
composite = []
for i in range(1,101):
    for x in range(2,i - 1):
        if i % x == 0 and  i != x:
            composite.append(i)
            break

#print(composite)

composite2=list(set([i for i in range(1,101) for x in range(2,i - 1) if i % x==0 and i != x ]))
#print(composite2)

#5
prime = []
for i in range(1,101):
    for x in range(2,i+1):
        if i == x:
            prime.append(i)
        if i % x == 0 and i != x:
            break
#print(prime)

prime2=[i for i in range(2,101) if all(i % x!=0 for x in range(2,i - 1))]
#print(prime2)

#6
def DivNum(num):
    divisor=[]
    for i in range(1,num):
        if num % i == 0:
            divisor.append(i)
    return divisor

#print(DivNum(6))

def DivNum2(num):
    return [i for i in range(1,num) if num % i==0]

#print(DivNum2(6))

#7
def transpose(m):
    m2=[]
    for i in range(len(m)):
        m3=[]
        for x in m:
            m3.append(x[i])
        m2.append(m3)
    return m2

m=[[0,1,2],[3,4,5],[6,7,8]]
#print(m)
#print(transpose(m))

def transpose2(m):
    return [[x[i] for x in m] for i in range(len(m))]

#print(m)
#print(transpose2(m))
