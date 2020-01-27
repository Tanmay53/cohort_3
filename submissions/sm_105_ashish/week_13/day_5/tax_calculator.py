Total_Income = int(input("Please Enter your total Income: "))
saving_amount = int(input('Please Enter your savings per year: '))

if saving_amount > Total_Income:
    print('savings can not be greater than total income')

max_cap_deduction = 50000
taxable_amount = 0
total_tax = 0
cap_deduction = 0
if Total_Income < 250000:
    total_tax = 0
elif Total_Income >= 250000 and Total_Income < 500000:
    if saving_amount*0.5 > max_cap_deduction:
        cap_deduction = max_cap_deduction
    else:
        cap_deduction = saving_amount*0.5
    total_tax = (Total_Income - cap_deduction - 250000)*0.1

elif Total_Income >= 500000 and Total_Income < 1000000:
    if saving_amount*0.3 > max_cap_deduction:
        cap_deduction = max_cap_deduction
    else:
        cap_deduction = saving_amount*0.3
    total_tax = (Total_Income - cap_deduction - 500000)*0.2 + 25000

else:
    if saving_amount*0.1 > max_cap_deduction:
        cap_deduction = max_cap_deduction
    else:
        cap_deduction = saving_amount*0.1
    total_tax = (Total_Income - cap_deduction - 1000000)*0.30 + 125000


print('your total tax amount for this year is :'+str(total_tax))




