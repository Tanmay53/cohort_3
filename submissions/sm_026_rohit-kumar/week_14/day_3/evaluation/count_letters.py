def count_letters(lst):
    dict = {}
    for string in lst:
        for ch in string:
            if ch in dict:
                dict[ch] += 1
            else:
                dict[ch] = 1

    for key, value in dict.items():
        print(key, '-', value)


count_letters(["Masai", "School"])

