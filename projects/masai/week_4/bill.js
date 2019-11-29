function elec_bill(watthr,consperday,conspermonth) {
var tot_cons;
var unit_cons;
    var amount =0;
        tot_cons = watthr * consperday * conspermonth ;
    unit_cons = tot_cons/1000 ;
    if (unit_cons < 0) {
        console.log('No bill')
    }

    else {
        if (unit_cons > 0 && unit_cons < 100) {
            amount = 4 * unit_cons;

        }

        else if (unit_cons > 100 && unit_cons < 300) {
            amount = 5 * unit_cons;

        }

        else if (unit_cons > 300 && unit_cons < 500) {
            amount = 7 * unit_cons;
        }
    return amount
    }

}
console.log(elec_bill(60 ,8,30))