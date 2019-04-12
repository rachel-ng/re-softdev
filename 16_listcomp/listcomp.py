import sys

UC_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
LC_LETTERS = "abcdefghijklmnopqrstuvwxyz"
NUMS = "0123456789"
SPECIAL_CHARS = "?!&#,;:-_*"

def pass_check (passw):
    if len([x for x in passw if x in UC_LETTERS]) > 1 and len([x for x in passw if x in LC_LETTERS]) > 1 and len([x for x in passw if x in NUMS]) > 1:
        return True
    else:
        return False

def pass_strength (passw):
    pass_s = 1
    if len([x for x in passw if x in UC_LETTERS]) > 1:
        pass_s += 1
    if len([x for x in passw if x in LC_LETTERS]) > 1:
        pass_s += 1
    if len([x for x in passw if x in NUMS]) > 1:
        pass_s += 1
    if len([x for x in passw if x in SPECIAL_CHARS]) > 1:
        pass_s += 1
    if len(passw) > 8 and pass_s > 1:
        pass_s += 2
    if len(passw) > 8 and pass_s > 2:
        pass_s += 1
    if len(passw) > 8 and pass_s > 3:
        pass_s += 1
    if len(passw) > 12:
        pass_s += 1
    return pass_s

if __name__ == "__main__":
    print(pass_strength(sys.argv[1]))
