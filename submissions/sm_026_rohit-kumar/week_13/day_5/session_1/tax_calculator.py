def find_tax(income):
    if income >= 250000 and income < 500000:
        rebate = savings * 0.50
        rebate = 50000 if (rebate > 50000) else rebate

    elif income >= 500000 and income < 1000000:
        rebate = savings * 0.30
        rebate = 50000 if (rebate > 50000) else rebate

    elif income >= 1000000:
        rebate = savings * 0.10
        rebate = 50000 if (rebate > 50000) else rebate
    else:
        print('No tax')
        return

    taxable_income = income - rebate

    if taxable_income >= 250000 and taxable_income < 500000:
        tax = taxable_income * 0.10

    elif taxable_income >= 500000 and taxable_income < 1000000:
        tax = taxable_income * 0.20
    elif taxable_income >= 1000000:
        tax = taxable_income * 0.30

    print("Total payable Tax : ", tax)



income = int(input('Enter you income : '))
savings = int(input('Enter you savings : '))
tax = 0

find_tax(income)

