# Rachel Ng
# SoftDev2 pd7
# K22 -- Closure
# 2019-04-30


def inc(x):
    return x + 1

f = inc

print(f(10))



def adder (a,b):
    return a + b

def caller(c):
    print(c(2,4))
    print(c(3,5))

caller(adder)



def outer1(x):
    def contains(l):
        return x in l
    return contains

# a function that returns a function



contains_15 = outer1(15)
print(contains_15([1,2,3,4,5]))
print(contains_15([13,14,15,16,17]))
print(contains_15(range(1,20)))

del outer1
try:outer1(42)
except NameError: pass

print(contains_15(range(14,20)))



'''
create a closure
- define a function within a fuction, inner should reference var defined in enclosing function that is passed from the ourside
'''



def repeat (w):
    def word (n):
        return w * n
    return word

r1 = repeat('hello')
r2 = repeat('goodbye')
print(r1(2)) #-> hellohello
print(r2(2)) #-> goodbyegoodbye
print(repeat('cool')(3)) #-> coolcoolcool



def outer2():
    x = "foo"
    def inner():
        x = "bar"
    inner()
    return x

print(outer2())



def outer3():
    x = "foo"
    def inner():
        nonlocal x
        x = "bar"
    inner()
    return x

print(outer3())

def make_counter():
    x = 0
    def incre():
        nonlocal x
        x += 1
        return x
    def accessor():
        return x
    return incre, acessor

ctr1, cnt1 = make_counter()
print(ctr1())
print(cnt1())
print(ctr1())
print(cnt1())
ctr2, cnt2 = make_counter()
print(ctr2())
print(cnt2())
print(ctr1())
print(cnt1())
print(ctr2())
print(cnt2())
