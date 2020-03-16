Income = 500000
saving = 100000
tax = 0

if(Income < 500000):
    saving = saving*0.5

elif((Income >= 500000) and (Income < 1000000)):
    saving = saving*0.3

else:
    saving = saving*0.1

if(saving > 50000):
    saving = 50000
Income = Income-saving

if((Income > 250000) and (Income < 500000)):
    Income -= 250000
    tax = Income*0.1

elif((Income > 500000) and (Income < 1000000)):
    Income = Income-500000
    tax = (Income*0.2)+25000

else:
    Income = Income-1000000
    tax = (Income*0.3)+75000

print("Total tax paid", tax)
