var income=526000, savings=30, a=250000, ti, tax
if(250000<income && income<500000){
                   ti=income-0.5*savings
                   
}
else if(500000<=income && income<1000000){
                      ti=income-0.3*savings
}
else if(income>=1000000 && savings<500000){
                      ti=income-0.1*savings
}
else{
     ti=income-50000
}

if(ti<=250000){
                console.log('You are exempted from tax!')
}
else if(250000<ti && ti<500000){
                     tax=(ti-a)*0.1
                     console.log('Your tax contribution is:',tax)
                    }
else if(500000<=ti && ti<1000000){
                             tax = (ti-a-250000)*0.2 + 250000*0.1
                             console.log('Your tax contribution is:',tax)

}
else{
      tax=(ti-a-750000)*0.3 + 500000*0.2 + 250000*0.1
      console.log('Your tax contribution is:',tax)

}

