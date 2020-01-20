(income,saving)=(1300000,40000)
print("Income= "+str(income),"savings= "+str(saving))

# check for deducatable slab
if income<500000:
    deductable= saving * 0.5
elif income < 1000000:
    deductable = saving * 0.30
else:
    deductable = saving * 0.10

if deductable > income:
    taxableIncome = income
else:
    taxableIncome = income - deductable

# chekcing for tax slab
if taxableIncome < 250000:
    grossTax=0
elif taxableIncome <  500000:
    grossTax = (taxableIncome - 250000) * 0.10
elif taxableIncome < 1000000:
    grossTax = (taxableIncome - 500000) * 0.20 + 2500
else:
    grossTax = (taxableIncome-1000000) * 0.30 + 125000

print("Income Tax= "+str(grossTax))