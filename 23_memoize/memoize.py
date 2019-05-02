'''

scenario: randomized greetings in an HTMl doc
seperate gen of text from HTML-ification

time-saving solutions via closures

'''

import random

def make_HTML_heading1(f):
    txt = f()
    def inner():
        #print(txt)
        return '<h1>' + txt + '</h1>'
    return inner

def greet1():
    greetings = ['Welcome','Hi','Hello','Hola','Ayo','Henlo']
    return random.choice(greetings)


greet_heading1 = make_HTML_heading1(greet1)
print(greet_heading1())


print("\n\n")


def make_HTML_heading2(f):
    def inner():
        #print(txt)
        return '<h1>' + f() + '</h1>'
    return inner

# equiv to greet = make_HTML_header(greet)
@make_HTML_heading2
def greet2():
    greetings = ['Welcome','Hi','Hello','Hola']
    return random.choice(greetings)

print(greet2())





def fib1(n):
    if n == 0 :
        return 0
    elif n == 1:
        return 1
    else:
        return fib1(n-1) + fib1(n-2)

print(fib1(10))
print(fib1(0))
print(fib1(1))
print(fib1(2))
print(fib1(3))
print(fib1(4))


print("\n\n")

def memoize(f):
    memo = {}
    def helper (x):
        if x not in memo:
            memo[x] = f(x)
        return memo[x]
    return helper

@memoize
def fib(n):
    if n == 0 :
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

print(fib(10))
print(fib(0))
print(fib(1))
print(fib(2))
print(fib(3))
print(fib(4))


def mem (fxn):
    cache = {}
    def memoized_fxn (*args):
        if args in cache:
            return cache[args]
        result = fxn(*args)
        cache[args] = result
        return result
    return memoized_fxn
