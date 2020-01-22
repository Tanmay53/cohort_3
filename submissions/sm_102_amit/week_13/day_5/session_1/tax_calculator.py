'''
Should be able to calculate the tax based on the income and savings
Rules for tax calculations

Below 2,50,000 no tax
Amount earned between 2,50,000 and 5,00,000 - 10% of the amount earned in this slab
Amount earned between 5,00,000 and 10,00,000 - 20% of the amount earned in this slab
Amount earned above 10,00,000 - 30% of the amount earned in this slab
The rules for the rebate based on the savings is mentioned below

50% of the savings amount can be deducted from the total income if the total income is below 5,00,000
30% of the savings amount can be deducted from the total income if the total income is below 10,00,000
10% of the savings amount can be deducted from the total income if the total income is above 10,00,000 the maximum cap of the deduction is 50,000
'''

input1 = input("Enter total income: ")
input2 = input("Enter saving amount: ")
total_income = int(input1)
saving_amount = int(input2)


def calculate_tax(total_income, saving_amount):
    taxable_income = calculate_taxable_income(total_income, saving_amount)
    if taxable_income == False:
        print("Err! Check input ... ")
    else:
        if taxable_income > 1000000:
            tax_amount = 0.3 * (taxable_income - 1000000) + \
                (0.2 * 500000) + (0.1 * 250000)
            net_income = taxable_income - tax_amount
        elif taxable_income > 500000 and taxable_income <= 1000000:
            tax_amount = 0.2 * (taxable_income - 500000) + (0.1 * 250000)
            net_income = taxable_income - tax_amount
        elif taxable_income > 250000 and taxable_income <= 500000:
            tax_amount = 0.1 * (taxable_income - 250000)
            net_income = taxable_income - tax_amount
        else:
            tax_amount = 0
            net_income = taxable_income - tax_amount
    return ("Total Income: " +
            str(total_income) +
            "\nSaving Amount: " +
            str(saving_amount) +
            "\nTaxable Income: " +
            str(taxable_income) +
            "\nTax Amount: " +
            str(tax_amount) +
            "\nNet Income: " +
            str(net_income))


def calculate_taxable_income(total_income, saving_amount):
    if saving_amount < total_income:
        if total_income > 1000000:
            rebate = 0.1 * saving_amount
        elif total_income >= 500000:
            rebate = 0.3 * saving_amount
        else:
            rebate = 0.5 * saving_amount

        if rebate > 50000:
            rebate = 50000
        return total_income - rebate
    else:
        return False


print(calculate_tax(total_income, saving_amount))
