import math
amt = int(input("Enter your Income ! : "))
savings = int(input("Enter your savings ! :"))
rebate = 0
taxable_income = 0
intrest = 0


def tax_cal(amt, rebate, taxable_income, intrest, savings):
    if amt <= 500000:
        rebate = savings - savings * 0.5
    elif amt > 500000 and amt < 1000000:
        rebate = rebate = savings - savings * 0.3
    elif amt > 1000000 and amt < 10000000:
        rebate = rebate = savings - savings * 0.3
    else:
        rebate = rebate

    if rebate > 50000:
        rebate = 50000

    taxable_income = amt - rebate
    print(f"rebate is {math.floor(rebate)}")
    taxable_income = amt - rebate
    if taxable_income > 250000 and taxable_income < 500000:
        intrest = 250000 - taxable_income * 0.1
    elif taxable_income > 50000 and taxable_income < 1000000:
        intrest = (taxable_income - 500000) * 0.2 + 25000
    elif taxable_income > 1000000:
        intrest = (taxable_income - 1000000) * 0.3 + 25000 + 100000
    print(f'tax paid is {intrest} and rebate is {rebate}')


tax_cal(amt, rebate, taxable_income, intrest, savings)
