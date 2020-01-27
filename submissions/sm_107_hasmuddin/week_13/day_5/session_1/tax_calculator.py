total_income = int(input("Income: "))
saving = int(input("Saving: "))

if total_income < 250000:
    print("No tax")
elif 250000 < total_income < 500000:
    rebate = saving * 0.5
    payable_amount = total_income - rebate
    income_tax = payable_amount * 0.1
    print("Tax: ", income_tax)
elif 500000 < total_income < 1000000:
    rebate = saving * 0.3
    payable_amount = total_income - rebate
    income_tax = (payable_amount - 500000) * 0.2 + 250000 * 0.1
    print("Tax: ", income_tax)
elif total_income > 1000000:
    rebate = saving * 0.1
    if rebate > 50000:
        rebate = 50000
        payable_amount = total_income - rebate
        income_tax = (payable_amount - 1000000) * 0.3 + 500000 * 0.2 + 250000 * 0.1
        print("Tax: ", income_tax)
    elif rebate < 50000:
        payable_amount = total_income - rebate
        income_tax = (payable_amount - 1000000) * 0.3 + 500000 * 0.2 + 250000 * 0.1
        print("Tax: ", income_tax)
