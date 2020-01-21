income = int(input())
saving = int(input())

#rebate calculation
rebate = 0

if(income > 250000 and income <= 500000):
    rebate = 0.5 * saving
elif (income > 500000 and income <= 1000000):
    rebate = 0.3 * saving
elif (income > 1000000):
    rebate = 0.1 * saving

if(rebate > 50000):rebate = 50000

actual_income = income - rebate

#tax-calculation
applicable_tax = 0

if(actual_income <= 250000):
    print('No Tax Applicable')
elif(actual_income > 250000 and actual_income <= 500000):
    applicable_tax = 0.1 * (actual_income - 250000)
elif(actual_income > 500000 and actual_income <= 1000000):
    applicable_tax = 0.2 * (actual_income - 500000) + 0.1 * 250000    
else:
    applicable_tax = 0.3 * (actual_income - 1000000) + 0.2 * 500000 + 0.1 * 250000

print('Applicable tax is ',applicable_tax)


#sample test case:
'''
500000
90000
('Applicable tax is ', 20500.0)
'''
'''
1000000
100000
('Applicable tax is ', 119000.0)
'''