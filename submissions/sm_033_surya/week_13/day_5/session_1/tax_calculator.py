income_Value = 900000
savings = 200000
rebate = 0
tax = 0

if income_Value < 500000:
    rebate = 0.5 * savings
    if rebate < 50000:
        income_Value = income_Value-rebate
    else:
        income_Value -= 50000
    if income_Value > 250000:
        tax = 0.1 * income_Value
        print("Tax you have to pay :" + str(tax))
    else:
        print("no tax")

elif income_Value <= 1000000:
    rebate = 0.3 * savings

    if rebate < 50000:
        income_Value = income_Value - rebate
    else:
        income_Value = income_Value-50000

        if income_Value > 500000 and income_Value <= 1000000:
            tax = 0.2 * income_Value
            print("Tax you have to pay :" + str(tax))
        elif income_Value <= 500000 and income_Value > 250000:
            tax = 0.1 * income_Value
            print("Tax you have to pay :"+str(tax))
        else:
            print("no tax")
elif income_Value > 1000000:
    rebate = 0.1 * savings
    if rebate < 50000:
        income_Value = income_Value - rebate
    else:
        income_Value = - 50000
    if income_Value > 1000000:
        tax = 0.3 * income_Value
        print("Tax you have to pay :" + str(tax))
    elif income_Value > 500000 and income_Value <= 1000000:
        tax = 0.2 * income_Value
        print("Tax you have to pay :" + str(tax))
    elif income_Value <= 500000 and income_Value > 250000:
        tax = 0.1 * income_Value
        print("Tax you have to pay :"+str(tax))
    else:
        print("No tax")
