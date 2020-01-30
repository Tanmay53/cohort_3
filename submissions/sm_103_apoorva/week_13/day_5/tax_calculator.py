income = int(input("Enter your Income amount: "))
saving = int(input("Enter your saving amount: "))
# print(income,saving)
rebate,taxableIncome,s,tax = 0,0,0,0

#Calculation of taxable Income
if income <= 250000:
    print("No Tax")
elif income > 1000000:
    if saving > 500000:
        rebate = 50000
        taxableIncome = income-rebate
    else:
        rebate = saving * 0.1
        taxableIncome = income - rebate
elif 250000 < income < 500000:
    if saving > 100000:
        rebate = 50000
        taxableIncome = income - rebate
    else:
        rebate = saving * 0.5
        taxableIncome = income - rebate
elif 500000 <= income <= 1000000:
    if saving > 166666:
        rebate = 50000
        taxableIncome = income - rebate
    else:
        rebate = saving * 0.3
        taxableIncome = income - rebate

# print(taxableIncome)
#Calculation of Tax
if taxableIncome > 1000000:
    s = (taxableIncome - 1000000)*0.3
    #125000 = 0.2*500000 + 0.1*250000
    tax = s + 125000 
elif  500000 < taxableIncome < 1000000:
    s = (taxableIncome - 500000)*0.2
    #25000 as it 0.1% of 250000
    tax = s + 25000
elif 250000 < taxableIncome < 500000:
    s = (taxableIncome - 250000)*0.1
    tax = s
else:
    rebate = 0
    tax = 0

print("Your Rebate is: ",rebate)
print("Your Tax amount: ",tax)