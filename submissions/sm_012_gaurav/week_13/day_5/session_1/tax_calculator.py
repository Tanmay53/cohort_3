income = float(input("Enter Annual Income: "))
savings = float(input("Enter Savings: "))
if savings > income:
    print("Savings cannot be greater than Income.")
else:
    if income <= 500000:
        rebate = min(50000, 0.5*savings)
    elif income > 500000 and income <= 1000000:
        rebate = min(50000, 0.3*savings)
    else:
        rebate = min(50000, 0.1*savings)
    income -= rebate
    if income <= 250000:
        tax = 0
    elif income > 250000 and income <= 500000:
        tax = 0.1*(income - 250000)
    elif income > 500000 and income <= 1000000:
        tax = 0.1*250000 + 0.2*(income - 500000)
    else:
        tax = 0.1*250000 + 0.2*500000 + 0.3*(income - 1000000)
    print("Tax is", tax)