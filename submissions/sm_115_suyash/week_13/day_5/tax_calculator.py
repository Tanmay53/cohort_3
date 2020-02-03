print("Enter income")
earned_income = float(input())
print("Enter total savings")
savings = float(input())

if savings > earned_income:
    print("Please enter valid income and savings.")
else:
    if earned_income < 500000:
        rebate = savings * 0.5
        if rebate >= 50000:
            rebate = 50000
            taxable_income = earned_income - rebate
        else:
            taxable_income = earned_income - rebate
    elif earned_income >= 500000 and earned_income <1000000:
        rebate  = savings * 0.3
        if rebate >= 50000:
            rebate = 50000
            taxable_income = earned_income - rebate
        else:
            taxable_income = earned_income - rebate
    else:
        rebate = savings * 0.1
        if rebate >= 50000:
            rebate = 50000
            taxable_income = earned_income - rebate
        else:
            taxable_income = earned_income - rebate

# ------------------tax on taxable income-----------------------

    if taxable_income < 250000:
        print('No tax')
    elif taxable_income >= 250000 and taxable_income < 500000:
        slab_1 = (taxable_income - 250000) * 0.1
        print(f"Total tax is ~  {slab_1}")
    elif taxable_income >= 500000 and taxable_income < 1000000:
        slab_2 = ((taxable_income - 500000) * 0.2) + 250000 * 0.1
        print(f"Total tax is ~  {slab_2}")
    else:
        slab_3 = (taxable_income - 1000000) * 0.3 + (500000) * 0.2 + (250000) * 0.1
        print(f"Total tax is ~  {slab_3}")