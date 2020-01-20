rebate = 0
taxable_income = 0
slab1 = 0 
slab2 = 0 
slab3 = 0
saving = 100000
total_income = 400000

if total_income < 500000:
    rebate = saving * 0.5
    if rebate >= 50000:
       rebate = 50000
       taxable_income = total_income - rebate
    else:
       taxable_income = total_income - rebate
    
elif total_income >= 500000 and total_income <1000000:
    rebate  = saving * 0.3
    if rebate >= 50000:
        rebate = 50000
        taxable_income = total_income - rebate
    
    else:
        taxable_income = total_income -rebate
    
else:
    rebate = saving * 0.1
    if rebate >= 50000:
        rebate = 50000
        taxable_income = total_income - rebate
    else:
        taxable_income = total_income - rebate

print('The Taxable Income is: '+ str(taxable_income))

if taxable_income < 250000:
    print('No Tax')
elif taxable_income >= 250000 and taxable_income < 500000:
    slab1 = (taxable_income - 250000)*0.1
    print('Tax: '+ str(slab1))

elif taxable_income >= 500000 and taxable_income < 1000000:
    slab2 = ((taxable_income - 500000)*0.2) + 250000*0.1
    print('Tax: '+ str(slab2))
else:
    slab3 = (taxable_income - 1000000)*0.3 + (500000)*0.2 + (250000)*0.1
    print('Tax: '+ str(slab3))

