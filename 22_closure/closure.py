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
    def inner():
        nonlocal x
        x += 1
        def val(self):
            return x
        return x
    return inner

ctr1 = make_counter()
print(ctr1())
print(ctr1())
ctr2 = make_counter()
print(ctr2())
print(ctr1())
print(ctr2())
