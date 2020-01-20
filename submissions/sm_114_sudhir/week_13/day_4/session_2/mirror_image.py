given_str = "AyzB"

str_usr = ""
fstr = ""
for it in range(len(given_str)):
    if ord(given_str[it]) >= 65 and ord(given_str[it]) <= 90:
        inp = ord(given_str[it])
        str_usr = chr(65+90-inp)
        fstr += str_usr
        str_usr = ""
    else:
        inp = ord(given_str[it])
        str_usr = chr(97+122-inp)
        fstr += str_usr
        str_usr = ""


print(fstr)
