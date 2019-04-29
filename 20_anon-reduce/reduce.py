# Rthur N TW -- Rachel Ng, Tina Wong
# SoftDev2 pd<p>
# K20 -- Reductio ad Absurdum
# 2019-04-29

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
    freq = [1 for i in grimm if i.lower() == word.lower()]
    if len(freq) == 0: return 0
    return reduce((lambda x,y: x + y), freq)

def freq_group(words):
    words = words.split(" ")
    freq = [1 for x in range(len(grimm)) if grimm[x:x+len(words)] == words]
    if len(freq) == 0: return 0
    return reduce((lambda x,y: x + y), freq)

#print(freq_word("cat"))

print(all_words)

highest_freq = dict([[i, freq_word(i)] for i in all_words])
print(highest_freq.keys())

print(max(highest_freq.keys()))
print(highest_freq[max(highest_freq.keys())])

def most_freq():
    all_words = list(set(grimm))
    all_freqs = [(x, freq_word(x)) for i in all_words]
    return reduce((lambda x,y: x if x[1] >= y[1] else y), all_freqs)[0]
