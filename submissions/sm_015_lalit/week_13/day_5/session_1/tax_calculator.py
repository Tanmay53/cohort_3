import math
inputIncome=input("Provide input for income here : ")
inputRebate=input("Provide input for rebate now : ")
inputIncome=int(inputIncome)
inputRebate=int(inputRebate)

def taxCal(incomex,saving):
    saving=int(saving)
    incomex=int(incomex)
    tax=0
    if 250000 >= incomex:
        tax=0
    elif 500000 >= incomex:
        rebate=saving*0.5
        if rebate > 50000:
            rebate=50000
        incomex=incomex-(rebate)
        income1=incomex-250000
        tax=income1*0.1
    elif 1000000 >= incomex and incomex > 500000:
        rebate=saving*0.3
        if rebate > 50000:
            rebate=50000
        incomex=incomex-(rebate)
        income1=incomex-250000
        tax=250000*0.1
        income2=income1-250000
        tax+=income2*0.2
    elif incomex>1000000:
        rebate=saving*0.1
        if rebate > 50000:
            rebate=50000
        incomex=incomex-(rebate)
        income1=incomex-250000
        tax=250000*0.1
        income2=income1-250000
        tax+=500000*0.2
        income3=income2-500000
        tax+=income3*0.3

    return math.floor(tax)

print("Tax of Rs",str(taxCal(inputIncome,inputRebate)),"is calculated on the basis of your input")        


    
    