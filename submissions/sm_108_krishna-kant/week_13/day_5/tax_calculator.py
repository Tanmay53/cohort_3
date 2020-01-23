print("Enter Total Income")
total_income = int(input())
tax = 0
taxable_income = 0
taxable_amount = 0
rebate = 0
print("Enter your savings")
savings = int(input())

#  Checking if savings is not greater than total income
if savings > total_income:
  print("Savings can't be more than total Income")

else :
#  Calculating Rebate
    if total_income < 500000 :
        rebate = 0.5 * savings

    elif total_income < 1000000 :
        rebate = 0.3 * savings

    elif total_income > 1000000:
        rebate = 0.1 * savings

#  Checking if rebate is more than capping
    if rebate > 50000: 
        rebate = 50000

# Calculating taxable income
taxable_income = total_income - rebate

#  Calculating Taxes
if taxable_income < 250000 :
    print("No tax applied!, Your total income is below taxation slab")

elif taxable_income > 250000 and taxable_income <= 500000: 
    taxable_amount = taxable_income - 250000
    tax = 0.1 * taxable_amount
    print( f" Total Income : {total_income} \n Rebate : {rebate} \n Taxable Amount : {taxable_amount} \n Tax Percentage : 10% \n Tax Amount : {tax}")

elif 500000 < taxable_income <= 1000000 :
    taxable_amount = taxable_income - 500000
    tax = 0.2 * taxable_amount + 0.1 * 250000
    print( f" Total Income : {total_income}  \n Rebate : {rebate} \n Taxable Amount : {taxable_amount}  \n Tax Percentage : 20% \n Tax Amount : {tax}")

elif taxable_income > 1000000 :
    taxable_amount = taxable_income - 1000000
    tax = 0.3 * taxable_amount + 0.2 * 500000 + 0.1 * 250000
    print( f" Total Income : {total_income}  \n Rebate : {rebate} \n Taxable Amount : {taxable_amount}  \n Tax Percentage : 30% \n Tax Amount : {tax}")