// create a function named monthlysalarypaye with the parameter being paye
function monthlyPaye(paye){
    let salary;
    let paye;
    // use if and else if to show the diffrent rates of paying PAYE
    if (salary =24000){
        return paye= salary * 0.1;
    }
    else if (24001<=salary<32333){
        return paye =salary * 2.5;
    }
    else if (32334<=salary<50000){
        return paye =salary * 3.0;
    }
    else if (50001<=salary<80000){
        return paye = salary * 0.325
    }
    else (salary>80000)
        return paye = salary *0.35;

}

// create a function named  monthly NHIF with the parameter being nhif
function monthlyNhif (nhif){
    let salary;
    let nhif;
    // use if and else if to show the diffrent rates of paying NHIF
    if (salary =5999){
        return nhif =150;
    }
    else if (6000 <=salary<=7999){
        return nhif =300;
    }
    else if (8000<=salary<=11999){
        return nhif = 400;
    }
    else if (12000<=salary<=14999){
        return nhif = 500;
    }
    else if (15000<=salary<=19999){
        return nhif =600;
    }
    else if (20000<=salary<=24999){
        return nhif =750;
    }
    else if (25000<=salary<=29999){
        return nhif =850;
    }
    else if (30000<=salary<=34999){
        return nhif =900;
    }
    else if (35000<=salary<=39999){
        return nhif =950;
    }
    else if (40000<=salary<=44999){
        return nhif =1000;
    }
    else if (45000<=salary<=49999){
        return nhif =1100;
    }
    else if (50000<=salary<=59999){
        return nhif =1200;
    }
    else if (60000<=salary<=69999){
        return nhif =1300;
    }
    else if (70000<=salary<=79999){
        return nhif = 1400;
    }
    else if (80000<=salary<=89999){
        return nhif =1500;
    }
    else if (90000<=salary<=99999){
        return nhif =1600;
    }
    else if(1000000<=salary){
        return nhif =1700;
    }
}
// create a function and name it monthly NSSF
function monthlyNssf (nssf){
    let salary;
    let nssf;
    // if to show the range of NSSF
    if (6000>=salary<=18000){
       return nssf =(salary * 0.06);
    }
   
}



