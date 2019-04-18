from functools import reduce

# similar structure lisp
reduce((lambda x, y: x * y), [1,2,3,4]) # = 24

#frequency single word
#total frequency group of words
#most frequently occuring word

i_file = open("2591-0.txt", "r+")
grimm = [line.replace("\r\n"," ") for line in i_file if line != "\r\n"]
grimm = [i for i in reduce((lambda x, y: x + y), grimm).split(" ") if i != '']

print(grimm)
