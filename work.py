# RELee -- Emily Lee, Rachel Ng

import math

# union of sets A and B. set all objects that are a member of A or B, or both

def union_sets (a, b):
    return [i for i in a if not i in b] + b
    #return [i for i in a if not i in b] + b
    #return [i for i in a for x in b if i not in b]
    
print(union_sets([1,2,3], [2,3,4]))
print(union_sets([1,2,3,4,5,6,78], [2,3,4]))
print(union_sets(['cat','dog','rabbit'], ['cat','panda','tiger']))

# intersection sets A and B. set all objects that are a member of A and B

def intersection_sets (a, b):
    return [i for i in a if i in b]

print(intersection_sets([1,2,3], [2,3,4]))
print(intersection_sets([1,2,3,4,5,6,78], [2,3,4]))
print(intersection_sets(['cat','dog','rabbit'], ['cat','panda','tiger']))

#set difference - set of all members of U that are not members of A

def set_diff(u, a):
    return [i for i in u if i not in a]

print(set_diff([1,2,3], [2,3,4]))
print(set_diff([2,3,4], [2,3,1]))
print(set_diff([1,2,3,4,5,6,78], [2,3,4]))

print(set_diff(['cat','dog','rabbit'], ['cat','panda','tiger']))



#symmetric difference - set of all objects that are a member of exactly one of A and B
#elements which are in one of the sets but not both

def symm_diff(a, b):
    return [i for i in b if i not in a] + [i for i in a if i not in b]
    
print(symm_diff([1,2,3], [2,3,4]))
print(symm_diff([2,3,4], [2,3,1]))
print(symm_diff(['cat','dog','rabbit'], ['cat','panda','tiger']))

#cartesian product of A and B
#set whose members are all possible ordered pairs (a,b)
#where a is a member of A and b is a member of B

def cart_prod(a, b):
    return [(k,i) for k in a for i in b]

print(cart_prod([1,2],['red','white']))
print(cart_prod([5,6],['cat','dog']))
print(cart_prod(['cat','dog','rabbit'], ['cat','panda','tiger']))

#



