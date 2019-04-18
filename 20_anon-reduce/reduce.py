# Rthur N TW


from functools import reduce

# similar structure lisp
reduce((lambda x, y: x * y), [1,2,3,4]) # = 24

#frequency single word
#total frequency group of words
#most frequently occuring word

i_file = open("2591-0.txt", "r+")
grimmm = [line.replace("\r\n"," ").replace(". "," ").replace("\xe2\x80\x99", "") for line in i_file if line != "\r\n"]
grimm = [i for i in reduce((lambda x, y: x + y), grimmm).split(" ") if i != '']

def freq_word(word):
    return reduce((lambda x, y: x + 1),[1 for i in grimm if i.lower() == word.lower()])

#print(freq_word("cat"))

all_words = [i for i in set(grimm)]

#print(all_words)


highest_freq = dict([[freq_word(i),i] for i in all_words if freq_word(i) > 10])
highest_frequency = highest_freq.keys()[:]

#print(highest_frequency.max())
print(highest_freq[highest_frequency.max()])
